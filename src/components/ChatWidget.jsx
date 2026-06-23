import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Trash2 } from 'lucide-react';

const STORAGE_KEY = 'auriseg_chat_messages_v1';

const WELCOME = {
  role: 'assistant',
  content:
    "Hi! I'm **AurisegBot**. Ask me about our cybersecurity services, industries we serve, or how to get help.\n\nIf you're **under active attack**, tap the suggestion below for our 24/7 hotline.",
};

const SUGGESTIONS = [
  'Services',
  'Under attack',
  'Industries',
  'Talk to an expert',
  'Careers',
  'About Auriseg',
];

// Rule-based intents: keywords -> reply (supports **bold** and [label](url))
const INTENTS = [
  {
    keys: ['under attack', 'attack', 'breach', 'incident', 'ransomware', 'hacked', 'compromised', 'emergency'],
    reply:
      "🚨 **Under Attack?** Don't wait — our 24/7 incident response team is ready.\n\n* Visit [Under Attack](/under-attack) for the regional hotline\n* Or jump to [Incident Response](/incident-response)\n\nStay calm, isolate affected systems, and contact us immediately.",
  },
  {
    keys: ['service', 'services', 'offering', 'offerings', 'what do you do', 'what do you offer'],
    reply:
      "Auriseg offers a full cybersecurity portfolio:\n\n* **Managed Security** — [MDR](/mdr), [SOC Augmentation](/soc-augmentation), [Threat Monitoring](/threat-monitoring), [Managed Security](/managed-security)\n* **Advisory & GRC** — [vCISO](/vciso), [GRC](/grc), [Risk](/risk), [Advisory](/advisory)\n* **Assessments** — [Penetration Testing](/penetration), [Vulnerability](/vulnerability), [Audit](/audit), [Maturity](/maturity)\n* **Specialized** — [Cloud](/cloud), [IoT](/iot), [Mobile](/mobile), [AI Security](/ai), [Social Engineering](/social), [Source Code](/source)\n* **For MSPs** — [White Label](/white-label), [Co-Delivery](/codelivery), [Offshore Teams](/offshore)\n\nWhich area would you like to explore?",
  },
  {
    keys: ['mdr', 'managed detection'],
    reply: "**MDR (Managed Detection & Response)** — 24/7 threat detection, investigation, and response. Learn more on the [MDR page](/mdr).",
  },
  {
    keys: ['soc', 'security operations'],
    reply: "Our **SOC Augmentation** extends your in-house team with Auriseg analysts and tooling. See [SOC Augmentation](/soc-augmentation).",
  },
  {
    keys: ['vciso', 'ciso'],
    reply: "**vCISO** gives you executive security leadership on demand. Details on the [vCISO page](/vciso).",
  },
  {
    keys: ['grc', 'governance', 'compliance', 'risk and compliance'],
    reply: "**GRC** — governance, risk, and compliance programs tailored to your business. See [GRC](/grc) and [Certification & Compliance](/certification).",
  },
  {
    keys: ['pentest', 'penetration', 'pen test', 'ethical hacking'],
    reply: "**Penetration Testing** simulates real attacks across your environment. Visit [Penetration Testing](/penetration).",
  },
  {
    keys: ['vulnerability', 'vapt', 'vulnerabilities'],
    reply: "**Vulnerability Management** — continuous identification and remediation. See [Vulnerability](/vulnerability).",
  },
  {
    keys: ['cloud security', 'cloud'],
    reply: "**Cloud Security** for AWS, Azure, and GCP. See [Cloud Security](/cloud).",
  },
  {
    keys: ['iot', 'ot ', 'internet of things'],
    reply: "**IoT/OT Security** for connected devices and industrial systems. See [IoT Security](/iot).",
  },
  {
    keys: ['mobile'],
    reply: "**Mobile Application Security** — iOS & Android. See [Mobile Security](/mobile).",
  },
  {
    keys: ['ai security', 'ai/ml', 'llm', 'artificial intelligence'],
    reply: "**AI/ML Security** for models, pipelines, and LLM apps. See [AI Security](/ai).",
  },
  {
    keys: ['source code', 'sast', 'code review'],
    reply: "**Source Code Review** — secure SDLC and SAST. See [Source Code](/source).",
  },
  {
    keys: ['social engineering', 'phishing'],
    reply: "**Social Engineering & Phishing Simulation**. See [Social Engineering](/social).",
  },
  {
    keys: ['audit'],
    reply: "**Security Audits** aligned to ISO 27001, SOC 2, PCI DSS, and more. See [Audit](/audit).",
  },
  {
    keys: ['maturity'],
    reply: "**Security Maturity Assessment** to benchmark your program. See [Maturity](/maturity).",
  },
  {
    keys: ['white label', 'whitelabel'],
    reply: "**White-Label Security** for MSPs and partners. See [White Label](/white-label).",
  },
  {
    keys: ['offshore', 'staff aug'],
    reply: "**Offshore Teams** — dedicated security talent. See [Offshore](/offshore).",
  },
  {
    keys: ['codelivery', 'co-delivery', 'co delivery'],
    reply: "**Co-Delivery** model for shared engagements. See [Co-Delivery](/codelivery).",
  },
  {
    keys: ['msp', 'partner'],
    reply: "We work closely with **MSPs & Partners**. See [For MSPs](/for-msps).",
  },
  {
    keys: ['industry', 'industries', 'sector', 'sectors'],
    reply:
      "We serve multiple industries:\n\n* [Financial Services](/financial)\n* [Government](/government)\n* [Manufacturing](/manufacturing)\n* [Technology](/technology)\n\nSee all on the [Industries](/industries) page.",
  },
  {
    keys: ['financial', 'bank', 'fintech', 'banking'],
    reply: "Cybersecurity for **Financial Services** — see [Financial](/financial).",
  },
  {
    keys: ['government', 'public sector'],
    reply: "Cybersecurity for **Government** — see [Government](/government).",
  },
  {
    keys: ['manufacturing', 'factory', 'ot'],
    reply: "Cybersecurity for **Manufacturing & OT** — see [Manufacturing](/manufacturing).",
  },
  {
    keys: ['technology', 'saas', 'tech company'],
    reply: "Cybersecurity for **Technology companies** — see [Technology](/technology).",
  },
  {
    keys: ['certification', 'iso', 'soc 2', 'pci'],
    reply: "We help you achieve **certifications & compliance** (ISO 27001, SOC 2, PCI DSS, and more). See [Certification](/certification).",
  },
  {
    keys: ['training', 'lab', 'learn'],
    reply: "Hands-on **cyber training & virtual labs**. See [Training & Virtual Lab](/training).",
  },
  {
    keys: ['blog', 'article', 'insight'],
    reply: "Read our latest insights on the [Blog](/blogs).",
  },
  {
    keys: ['case study', 'success', 'story', 'stories'],
    reply: "Browse customer outcomes on [Success Stories](/success-stories).",
  },
  {
    keys: ['career', 'careers', 'job', 'hiring', 'work with'],
    reply: "We're growing! See open roles on the [Careers](/careers) page.",
  },
  {
    keys: ['about', 'who are you', 'company', 'auriseg'],
    reply:
      "**Auriseg** is a global cybersecurity firm protecting organizations across industries with managed security, advisory, and assessment services. Learn more on the [About Us](/about-us) page.",
  },
  {
    keys: ['contact', 'expert', 'talk', 'call', 'reach', 'email', 'phone', 'demo', 'consult', 'quote', 'pricing', 'price', 'cost'],
    reply:
      "Happy to connect you with our team. Tap [Talk to an Expert](/talk-to-experts) and we'll get back to you quickly. For urgent issues, visit [Under Attack](/under-attack) for our 24/7 hotline.",
  },
  {
    keys: ['hi', 'hello', 'hey', 'hola', 'namaste', 'good morning', 'good evening', 'good afternoon'],
    reply: "Hello! 👋 How can I help — services, industries, or getting in touch with an expert?",
  },
  {
    keys: ['thanks', 'thank you', 'thx', 'ty'],
    reply: "You're welcome! Anything else you'd like to know about Auriseg?",
  },
  {
    keys: ['bye', 'goodbye', 'see you'],
    reply: "Goodbye! Stay secure. 🔒 You can always [Talk to an Expert](/talk-to-experts) when you're ready.",
  },
];

const FALLBACK =
  "I'm not sure I caught that. Try asking about:\n\n* **Services** (MDR, SOC, vCISO, GRC, Pentest, Cloud, IoT…)\n* **Industries** (Financial, Government, Manufacturing, Technology)\n* **Under attack** — our 24/7 hotline\n* **Talk to an expert**\n\nOr visit our [Contact page](/talk-to-experts).";

function matchIntent(text) {
  const q = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    for (const k of intent.keys) {
      if (q.includes(k) && k.length > bestScore) {
        best = intent;
        bestScore = k.length;
      }
    }
  }
  return best ? best.reply : FALLBACK;
}

function renderMarkdown(text) {
  let s = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const lines = s.split(/\n/);
  const out = [];
  let inList = false;
  for (let line of lines) {
    const trimmed = line.trim();
    const h = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<div class="font-semibold text-orange-700 mt-1 mb-1">${h[2]}</div>`);
      continue;
    }
    if (/^[*\-]\s+/.test(trimmed)) {
      if (!inList) { out.push('<ul class="list-disc pl-5 space-y-0.5 my-1">'); inList = true; }
      out.push(`<li>${trimmed.replace(/^[*\-]\s+/, '')}</li>`);
      continue;
    }
    if (inList) { out.push('</ul>'); inList = false; }
    if (trimmed === '') { out.push('<div class="h-2"></div>'); continue; }
    out.push(`<p class="my-1">${line}</p>`);
  }
  if (inList) out.push('</ul>');
  s = out.join('');

  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  s = s.replace(/`([^`]+)`/g, '<code class="bg-orange-100 text-orange-800 px-1 py-0.5 rounded text-xs">$1</code>');
  s = s.replace(
    /\[([^\]]+)\]\((\/[^\s)]*|https?:\/\/[^\s)]+)\)/g,
    (_, label, href) =>
      `<a href="${href}" target="${href.startsWith('http') ? '_blank' : '_self'}" rel="noopener" class="text-orange-600 font-medium underline hover:text-orange-700">${label}</a>`
  );
  return s;
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
  const [typing, setTyping] = useState(false);
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
  }, [messages, open, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const sendMessage = (eOrText) => {
    let text;
    if (typeof eOrText === 'string') text = eOrText.trim();
    else {
      eOrText?.preventDefault?.();
      text = input.trim();
    }
    if (!text || typing) return;

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    // Simulate brief typing delay
    const reply = matchIntent(text);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setTyping(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 450 + Math.min(reply.length * 4, 800));
  };

  const clearChat = () => setMessages([WELCOME]);

  return (
    <>
      <style>{`
        @keyframes auriseg-pop-in {
          0% { opacity: 0; transform: translateY(20px) scale(0.85); }
          60% { opacity: 1; transform: translateY(-4px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes auriseg-msg-in {
          0% { opacity: 0; transform: translateY(8px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes auriseg-ring {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes auriseg-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes auriseg-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes auriseg-chip-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .auriseg-panel { animation: auriseg-pop-in 0.35s cubic-bezier(.34,1.56,.64,1) both; transform-origin: bottom right; }
        .auriseg-msg { animation: auriseg-msg-in 0.3s ease-out both; }
        .auriseg-fab { animation: auriseg-float 3s ease-in-out infinite; }
        .auriseg-ring { animation: auriseg-ring 1.8s ease-out infinite; }
        .auriseg-header-shimmer {
          background: linear-gradient(90deg, #f97316 0%, #fb923c 25%, #f97316 50%, #ea580c 75%, #f97316 100%);
          background-size: 200% 100%;
          animation: auriseg-shimmer 6s linear infinite;
        }
        .auriseg-chip { animation: auriseg-chip-in 0.35s ease-out both; }
        .auriseg-status-dot {
          width: 6px; height: 6px; border-radius: 9999px; background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74,222,128,0.7);
          animation: auriseg-pulse-dot 1.6s ease-out infinite;
        }
        @keyframes auriseg-pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.7); }
          70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
      `}</style>

      <div className="fixed bottom-5 right-5 z-[9999]">
        {!open && (
          <span className="absolute inset-0 rounded-full bg-orange-500 auriseg-ring pointer-events-none" />
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 ${open ? '' : 'auriseg-fab'}`}
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
            <MessageCircle size={24} />
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
            <X size={24} />
          </span>
        </button>
      </div>

      {open && (
        <div className="auriseg-panel fixed bottom-24 right-5 z-[9999] w-[92vw] max-w-[380px] h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-orange-200 bg-white text-gray-900">
          {/* Header */}
          <div className="auriseg-header-shimmer flex items-center justify-between px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm shadow-md transition-transform hover:rotate-12">A</div>
              <div>
                <div className="font-semibold text-sm leading-tight">AurisegBot</div>
                <div className="text-[11px] text-white/90 leading-tight flex items-center gap-1.5">
                  <span className="auriseg-status-dot" />
                  Online · instant replies
                </div>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="text-white/80 hover:text-white p-1 transition-transform hover:rotate-12 hover:scale-110"
              aria-label="Clear conversation"
              title="Clear conversation"
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm bg-orange-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex auriseg-msg ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl leading-relaxed transition-transform hover:-translate-y-0.5 ${
                    m.role === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-br-sm shadow-md'
                      : 'bg-white text-gray-800 border border-orange-100 rounded-bl-sm shadow-sm'
                  }`}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content || '') }}
                />
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-orange-100 px-3 py-2 rounded-2xl rounded-bl-sm text-gray-500 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '120ms' }} />
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '240ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          <div className="px-3 pt-2 pb-1 border-t border-orange-100 bg-white">
            <div className="text-[10px] uppercase tracking-wide text-gray-400 mb-1.5 font-medium">Suggested</div>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  disabled={typing}
                  className="text-xs px-2.5 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:border-orange-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Composer */}
          <form
            onSubmit={sendMessage}
            className="flex items-end gap-2 p-3 border-t border-orange-100 bg-white"
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
              className="flex-1 resize-none bg-orange-50/50 border border-orange-200 text-gray-900 rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white max-h-28"
              disabled={typing}
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
