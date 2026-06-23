import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Loader2, Trash2 } from 'lucide-react';

const STORAGE_KEY = 'auriseg_chat_messages_v1';
const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const WELCOME = {
  role: 'assistant',
  content:
    "Hi! I'm AurisegBot. Ask me about our cybersecurity services, industries we serve, or how to get help. If you're under active attack, I can point you to our 24/7 hotline.",
};

function renderMarkdown(text) {
  // Minimal: links [label](url) and line breaks
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  const withLinks = escaped.replace(
    /\[([^\]]+)\]\((\/[^\s)]*|https?:\/\/[^\s)]+)\)/g,
    (_, label, href) =>
      `<a href="${href}" class="text-cyan-300 underline hover:text-cyan-200">${label}</a>`
  );
  return withLinks.replace(/\n/g, '<br/>');
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    if (typeof window === 'undefined') return [WELCOME];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch {}
    return [WELCOME];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setError(null);
    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const payload = nextMessages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: ANON,
          Authorization: `Bearer ${ANON}`,
        },
        body: JSON.stringify({ messages: payload }),
      });

      if (!res.ok || !res.body) {
        const errBody = await res.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(errBody.error || `HTTP ${res.status}`);
      }

      // Stream parse SSE
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (data === '[DONE]') continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              setMessages((prev) => {
                const copy = [...prev];
                const last = copy[copy.length - 1];
                if (last && last.role === 'assistant') {
                  copy[copy.length - 1] = { ...last, content: last.content + delta };
                }
                return copy;
              });
            }
          } catch {}
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setMessages((prev) => {
        if (prev[prev.length - 1]?.role === 'assistant' && prev[prev.length - 1].content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const clearChat = () => {
    setMessages([WELCOME]);
    setError(null);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[9999] w-[92vw] max-w-[380px] h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b1220] text-white">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-sm">A</div>
              <div>
                <div className="font-semibold text-sm leading-tight">AurisegBot</div>
                <div className="text-[11px] text-cyan-300/80 leading-tight">Online · usually replies instantly</div>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="text-white/60 hover:text-white p-1"
              aria-label="Clear conversation"
              title="Clear conversation"
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-br-sm'
                      : 'bg-white/5 text-white/90 border border-white/10 rounded-bl-sm'
                  }`}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content || '') }}
                />
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-2xl rounded-bl-sm text-white/70 flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" /> Thinking…
                </div>
              </div>
            )}
            {error && (
              <div className="text-xs text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={sendMessage}
            className="flex items-end gap-2 p-3 border-t border-white/10 bg-[#0b1220]"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
              rows={1}
              placeholder="Ask about Auriseg services…"
              className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:border-cyan-400/60 max-h-28"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
              aria-label="Send message"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
