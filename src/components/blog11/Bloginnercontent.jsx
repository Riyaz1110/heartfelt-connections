import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL = "https://auriseg.us7.list-manage.com/subscribe/post-json?u=fa1a7a2bb782996b42fce10ee&id=f0dc501dd6&f_id=000f8fe0f0";

/* ─── DATA ───────────────────────────────────────────────────────────────────── */
const TOC = [
  "Is Browser Turning Against You? Why Quantum Threats Demand Zero Trust",
  "Why AI-Enhanced Browser Exploits",
  "How Today’s Encryption Becomes Tomorrow’s Breach",
  "Auriseg's Comprehensive Protection",
  "Secure Your Defences Today"
];
const TABLE_ROWS = [
  { feature: '24/7 SOC Monitoring', auriseg: true, others: false },
  { feature: 'AI-Powered Detection', auriseg: true, others: true },
  { feature: 'White-label Solution', auriseg: true, others: false },
  { feature: '99.9% SLA Guarantee', auriseg: true, others: false },
  { feature: 'Incident Response Team', auriseg: true, others: true },
  { feature: 'Real-time Threat Intel', auriseg: true, others: false },
  { feature: 'Custom Playbooks', auriseg: true, others: false },
  { feature: 'Dedicated Support', auriseg: true, others: false },
];

const SECTIONS = [
  {
    id: 's0',
    heading: 'Is Browser Turning Against You? Why Quantum Threats Demand Zero Trust',
    body: [
      <>
        AI cyber threats and advanced browser exploits are blending with quantum computing risks,
        challenging traditional defences.
        <br /><br />

        Attackers use
        <span style={{ color: '#FF5536' }}>
          {' '}AI-enhanced browsers to quickly steal data,
        </span>
        {' '}stockpiling it for future quantum decryption.
      </>
    ],
  },


  {
    id: 's1',
    heading: 'Why AI-Enhanced Browser Exploits',
    body: [
      <>
        AI-powered browsers, including advanced agentic models like Comet and Atlas,
        are facing a growing wave of attacks from malicious websites that inject prompts
        designed to circumvent security measures.
        <br /><br />

        These exploits bypass same-origin policies,
        facilitating the automated extraction of sensitive cross-site data such as
        <span style={{ color: '#FF5536' }}>
          {' '}emails, one-time passwords, and session tokens.
        </span>
      </>
    ],
  },


  {
    id: 's2',
    heading: 'How Today’s Encryption Becomes Tomorrow’s Breach',
    body: [
      <>
        Cyber adversaries are increasingly leveraging a
        <span style={{ color: '#FF5536' }}>
          {' '}“harvest now, decrypt later”
        </span>
        {' '}approach, gathering encrypted data today with the intent of decrypting it using future quantum technologies.
        <br /><br />

        While the full impact of such threats may not materialize until the 2030s,
        rapid technological advancements are already posing significant risks to
        critical infrastructure, digital currencies, and national security systems.
        <br /><br />

        The integration of quantum capabilities with AI-driven browser attacks
        is enabling data collection at an unparalleled scale,
        raising urgent concerns for cybersecurity resilience.
      </>
    ],
  },


  {
    id: 's3',
    heading: "Auriseg's Comprehensive Protection",
    hasChecklist: true,
    body: [
      <>
        Auriseg provides specialized solutions to safeguard organizations against these evolving dangers
        and threat intelligence and hardened gateways detect and neutralize such incursions in real time.
        <br /><br />

        ● <span style={{ color: '#FF5536' }}>Real-Time Darknet Monitoring:</span>
        {' '}Tracks underground threats instantly, alerting teams before attacks escalate.
        <br /><br />

        ● <span style={{ color: '#FF5536' }}>Secure LLM Deployments:</span>
        {' '}Hardens AI models against exploits, preventing tools from turning against users in browser or workflow scenarios.
        <br /><br />

        ● <span style={{ color: '#FF5536' }}>Zero-Trust Architectures:</span>
        {' '}Enforces strict access controls, blocking unauthorized pivots from browser breaches to core systems.
        <br /><br />

        ● <span style={{ color: '#FF5536' }}>Vulnerability Audits:</span>
        {' '}Proactive scans identify and patch risks like IDEsaster RCEs,
        ensuring browsers and encryptions stay robust.
      </>
    ],
  },


  {
    id: 's4',
    heading: 'Secure Your Defences Today',
    body: [
      <>
        Contact Auriseg for a complimentary threat assessment or consultation.
        <br /><br />

        <span style={{ color: '#FF5536' }}>
          Share your insights in the comments.
        </span>
      </>
    ],
  },
];
/* ─── TICK / X ICONS ─────────────────────────────────────────────────────────── */
const TickIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#FF5536" />
    <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CrossIcon = () => (
  <span style={{ fontSize: '15px', color: '#888', fontWeight: 400 }}>✕</span>
);

/* ─── AURISEG TABLE ──────────────────────────────────────────────────────────── */
const AurisegTable = () => (
  <div style={{ margin: '24px 0', overflowX: 'auto' }}>
    <div style={{ background: '#111', overflow: 'hidden' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid #222' }}>
        <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '16px', color: '#FFFFFF', margin: 0 }}>
          Why Choose Auriseg?
        </p>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter',sans-serif", fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #222' }}>
            <th style={{ padding: '10px 18px', textAlign: 'left', fontWeight: 500, color: '#888', width: '55%' }}>Feature</th>
            <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700, color: '#FF5536', width: '22%', background: 'rgba(255,85,54,0.1)' }}>Auriseg</th>
            <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 500, color: '#888', width: '23%' }}>Others</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #1e1e1e' }}>
              <td style={{ padding: '11px 18px', color: '#CCCCCC' }}>{row.feature}</td>
              <td style={{ padding: '11px 14px', textAlign: 'center', background: 'rgba(255,85,54,0.05)' }}>
                {row.auriseg ? <TickIcon /> : <CrossIcon />}
              </td>
              {/* Others column: always plain ✕ in grey — no orange */}
              <td style={{ padding: '11px 14px', textAlign: 'center' }}>
                <CrossIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ─── FREE SOC CHECKLIST BANNER ─────────────────────────────────────────────── */
const ChecklistBanner = () => (
  <div style={{ background: '#111', padding: '24px 20px', margin: '28px 0', textAlign: 'center' }}>
    <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', color: '#FFFFFF', marginBottom: '6px' }}>
      Free SOC Checklist
    </p>
    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#ADADAD', marginBottom: '18px', maxWidth: '340px', margin: '0 auto 18px' }}>
      Essential security operations checklist for building a robust SOC. 25 critical items every security team needs.
    </p>
    <button style={{ background: '#FF5536', border: 'none', color: '#FFFFFF', fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '13px', padding: '12px 32px', cursor: 'pointer', width: '100%', maxWidth: '340px' }}>
      ↓  Download Free Checklist
    </button>
  </div>
);

/* ─── SHARE BAR — orange border, B&W icons ───────────────────────────────────── */
const ShareBar = ({ isMobile }) => (
  <div style={{
    display: 'flex', alignItems: 'center',
    justifyContent: isMobile ? 'space-between' : 'space-between',
    border: '1px solid #FF5536',
    padding: '14px 16px', margin: '32px 0',
    flexWrap: 'wrap', gap: '12px',
  }}>
    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#555' }}>
      Like what you see? Share with a friend.
    </span>
    <div style={{ display: 'flex', gap: '8px', justifyContent: isMobile ? 'center' : 'flex-end', flex: isMobile ? '1 0 100%' : 'none' }}>
      {[
        { l: 'f', bg: '#000' },
        { l: 'IG', bg: '#000' },
        { l: 'X', bg: '#000' },
        { l: 'in', bg: '#000' },
        { l: '▶', bg: '#000' },
      ].map(s => (
        <a key={s.l} href="#"
          style={{ width: '28px', height: '28px', borderRadius: '50%', background: s.bg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '10px', textDecoration: 'none', flexShrink: 0 }}>
          {s.l}
        </a>
      ))}
    </div>
  </div>
);

/* ─── AUTHOR CARD ────────────────────────────────────────────────────────────── */
const AuthorCard = () => (
  <div style={{ background: '#1a1a1a', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
    <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/images/blog/author-1.jpg" alt="Alex Richardson"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={e => { e.target.style.display = 'none'; }} />
    </div>
    <div style={{ flex: 1 }}>
      <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#FFFFFF', marginBottom: '2px' }}>Alex Richardson</p>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#FF5536', marginBottom: '8px' }}>SOC Analyst</p>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#ADADAD', lineHeight: '1.6', marginBottom: '12px' }}>
        10+ years in cybersecurity operations, specializing in threat detection and incident response. Passionate about building resilient security systems.
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['in', 'X'].map(s => (
          <a key={s} href="#"
            style={{ width: '26px', height: '26px', borderRadius: '4px', border: '1px solid #444', color: '#ADADAD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '11px', textDecoration: 'none' }}>
            {s}
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* ─── TL;DR BOX — grey bg, ADADAD border, no orange border ──────────────────── */
const TlDrBox = ({ isMobile }) => (
  <div style={{
    background: '#F7F7F7',
    border: '1px solid rgba(173,173,173,0.3)',
    boxShadow: '0px 1px 2px 0px rgba(15,30,60,0.04), 0px 1px 4px 0px rgba(15,30,60,0.06)',
    padding: '16px',
    marginBottom: '24px',
  }}>
    {/* TL;DR label — grey border box */}
    <div style={{
      display: 'inline-block',
      border: '1px solid #ADADAD',
      padding: '6px 11px',
      marginBottom: '12px',
    }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '12px', color: '#FF5536' }}>TL :DR</span>
    </div>
    <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        'Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience.',
        'Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results.',
        'Creating brilliant AI-powered blogs is a fun blending of logic with just the right dose of creativity.',
        "Let's be clear: ChatGPT wrote this article and generated the hero image. It combined my personal experience, knowledge, and research.",
      ].map((item, i) => (
        <li key={i} style={{ fontFamily: "'Inter',sans-serif", fontSize: isMobile ? '12px' : '13px', color: '#555', lineHeight: '1.6', paddingLeft: '4px' }}>{item}</li>
      ))}
    </ul>
  </div>
);

/* ─── SUMMARIZE BAR (desktop) — white bg inside grey container ───────────────── */
const SummarizeBarDesktop = () => (
  <div style={{
    background: '#F7F7F7',
    padding: '12px',
    marginBottom: '20px',
  }}>
    {/* Inner white row */}
    <div style={{ background: '#FFFFFF', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#555', whiteSpace: 'nowrap' }}>
        Summarize this content with AI
      </span>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { label: 'ChatGPT', bg: '#030407' },
          { label: 'Perplexity', bg: '#030407' },
          { label: 'Google AI', bg: '#030407' },
        ].map(ai => (
          <button key={ai.label}
            style={{ background: ai.bg, border: 'none', color: '#FFFFFF', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '12px', padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '120px', justifyContent: 'center' }}>
            {ai.label}
          </button>
        ))}
      </div>
    </div>
    {/* TL;DR inside same grey container */}
    <TlDrBox isMobile={false} />
  </div>
);

/* ─── SUMMARIZE BAR (mobile) — grey bg, stacked layout ──────────────────────── */
const SummarizeBarMobile = () => (
  <div style={{
    background: '#F7F7F7',
    border: '1px solid rgba(173,173,173,0.3)',
    padding: '20px 10px',
    marginBottom: '20px',
    boxShadow: '0px 1px 2px 0px rgba(15,30,60,0.04), 0px 1px 4px 0px rgba(15,30,60,0.06)',
    width: '311px',
    boxSizing: 'border-box',
  }}>
    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#555', marginBottom: '10px', letterSpacing: '-0.02em', textAlign: 'center' }}>
      Summarize this content with AI
    </p>
    {['ChatGPT', 'Perplexity', 'Google'].map(label => (
      <div key={label} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid #FEF1F7',
        background: '#000000',
        width: '269px', height: '40px',
        margin: '0 auto 8px',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#FFFFFF', fontWeight: 400, letterSpacing: '-0.02em' }}>{label}</span>
      </div>
    ))}
  </div>
);

/* ─── NEWSLETTER BOX ─────────────────────────────────────────────────────────── */
/* ─── NEWSLETTER FORM INNER ─────────────────────────────────────────── */
const NewsletterFormInner = ({ subscribe, status, message, email, setEmail }) => {
  const [localStatus, setLocalStatus] = useState('idle');
  const [localMessage, setLocalMessage] = useState('');

  const validateEmail = (mail) => /^[^s@]+@[^s@]+\.[^s@]+$/.test(mail);

  useEffect(() => {
    if (status === 'success') {
      setLocalStatus('success');
      setLocalMessage("✓ You're subscribed! Thanks for signing up.");
    } else if (status === 'error') {
      setLocalStatus('error');
      if (message && (message.includes('already') || message.includes('subscribed'))) {
        setLocalMessage('This email is already registered.');
      } else {
        setLocalMessage(message || 'An error occurred.');
      }
    } else if (status === 'sending') {
      setLocalStatus('sending');
    }
  }, [status, message]);

  useEffect(() => {
    let timer;
    if (localStatus === 'sending') {
      timer = setTimeout(() => {
        setLocalStatus('error');
        setLocalMessage('This email is already registered, or there is a connection issue.');
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [localStatus]);

  const submit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setLocalStatus('sending');
    subscribe({ EMAIL: email });
  };

  const isDisabled = localStatus === 'sending' || localStatus === 'success';

  return (
    <form onSubmit={submit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your Email"
        disabled={isDisabled}
        style={{
          width: '100%', padding: '11px 12px',
          border: (!validateEmail(email) && email.length > 0) ? '1px solid #FF5536' : '1px solid #333',
          background: 'transparent',
          fontFamily: "'Inter',sans-serif", fontSize: '13px',
          color: '#FFFFFF', marginBottom: '6px', outline: 'none',
          boxSizing: 'border-box', borderRadius: '0',
          opacity: localStatus === 'success' ? 0.5 : 1,
        }}
      />

      {!validateEmail(email) && email.length > 0 && (
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#FF5536', marginBottom: '8px' }}>
          Please enter a valid email address.
        </p>
      )}

      {localStatus === 'error' && (
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#FF5536', marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: localMessage }} />
      )}
      {localStatus === 'success' && (
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#4CAF50', marginBottom: '8px' }}>
          {localMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        style={{
          width: '100%', padding: '12px',
          background: localStatus === 'success' ? '#2e7d32' : '#FF5536',
          border: 'none',
          fontFamily: "'Inter',sans-serif", fontWeight: 700,
          fontSize: '13px', color: '#FFFFFF',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          borderRadius: '0', transition: 'background 0.3s',
          opacity: localStatus === 'sending' ? 0.8 : 1,
        }}>
        {localStatus === 'sending' ? 'Sending…' : localStatus === 'success' ? '✓ Subscribed!' : 'Keep me updated'}
      </button>
    </form>
  );
};

/* ─── NEWSLETTER BOX ─────────────────────────────────────────────────────────── */
const NewsletterBox = ({ isMobile }) => {
  const [email, setEmail] = useState('');

  return (
    <div style={{
      background: '#030407',
      padding: isMobile ? '20px 16px' : '24px',
      border: isMobile ? '1px solid #FF5536' : 'none',
      marginBottom: isMobile ? '0' : '24px',
    }}>
      <h3 style={{
        fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700,
        fontSize: isMobile ? '18px' : '19px', lineHeight: '120%',
        color: '#FFFFFF', marginBottom: '6px',
      }}>
        Get the Smartest AI Insights in Your Inbox
      </h3>
      <p style={{
        fontFamily: "'Inter',sans-serif", fontSize: '12px',
        color: '#ADADAD', marginBottom: '18px',
      }}>
        No Spam. Just the latest releases and tips
      </p>

      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsletterFormInner
            subscribe={subscribe}
            status={status}
            message={message}
            email={email}
            setEmail={setEmail}
          />
        )}
      />

      <p style={{
        fontFamily: "'Inter',sans-serif", fontSize: '9px',
        color: '#555', marginTop: '10px',
        textDecoration: 'underline', cursor: 'pointer',
      }}>
        You can unsubscribe at any time. Read our Privacy Policy
      </p>
    </div>
  );
};
/* ─── TOC SIDEBAR ────────────────────────────────────────────────────────────── */
const TableOfContents = () => (
  <div>
    <h4 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '16px', color: '#030407', marginBottom: '14px' }}>
      In this article
    </h4>
    {TOC.map((item, i) => (
      <a key={i} href={`#s${i}`}
        style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontSize: '13px', color: i === 0 ? '#FF5536' : '#555', textDecoration: 'none', padding: '7px 0 7px 12px', borderLeft: i === 0 ? '2px solid #FF5536' : '2px solid transparent', marginBottom: '2px', lineHeight: '1.4', transition: 'color 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#FF5536'; e.currentTarget.style.borderLeftColor = '#FF5536'; }}
        onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderLeftColor = 'transparent'; } }}>
        {item}
      </a>
    ))}
  </div>
);

/* ─── TOP SHARE ICONS (desktop sidebar — LEFT aligned) ───────────────────────── */
const TopShareIcons = () => (
  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
    {[
      <svg key="li" width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
      <svg key="x" width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
      <svg key="em" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>,
      <svg key="sh" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
    ].map((icon, i) => (
      <a key={i} href="#"
        style={{ width: '32px', height: '32px', border: '1px solid #DEDEDE', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', background: '#FFFFFF', borderRadius: '4px' }}>
        {icon}
      </a>
    ))}
  </div>
);

/* ─── MOBILE TOC BOX ─────────────────────────────────────────────────────────── */
const MobileTocBox = () => (
  <div style={{
    background: '#F7F7F7',
    border: '1px solid rgba(173,173,173,0.3)',
    borderRadius: '10px',
    padding: '20px 10px',
    marginBottom: '16px',
    width: '311px',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 2px 0px rgba(15,30,60,0.04), 0px 1px 4px 0px rgba(15,30,60,0.06)',
  }}>
    {TOC.map((item, i) => (
      <a key={i} href={`#s${i}`}
        style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontSize: '12px', letterSpacing: '-0.02em', color: '#FF5536', textDecoration: 'none', padding: '5px 0 5px 10px', borderLeft: i === 0 ? '2px solid #FF5536' : '2px solid transparent', marginBottom: '3px', lineHeight: '1.4' }}>
        {item}
      </a>
    ))}
  </div>
);

/* ─── ARTICLE CONTENT ────────────────────────────────────────────────────────── */
const ArticleContent = ({ isMobile }) => {
  const bodyStyle = {
    fontFamily: "'Inter',sans-serif", fontWeight: 400,
    fontSize: isMobile ? '13px' : '14px', lineHeight: '1.85',
    color: '#444', marginBottom: '16px',
  };
  const headingStyle = {
    fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700,
    fontSize: isMobile ? '20px' : '24px', lineHeight: '120%',
    color: '#030407', marginBottom: '12px', marginTop: '32px',
  };

  return (
    <div>
      {/* ── DESKTOP TOP: grey container with summarize + TL;DR ── */}
      {!isMobile && <SummarizeBarDesktop />}

      {/* ── MOBILE TOP: share icons + TOC + summarize stacked ── */}
      {isMobile && (
        <div style={{ marginBottom: '20px' }}>
          {/* Share icons row */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
            {['in', 'X', '✉', '⇗'].map((s, i) => (
              <a key={i} href="#"
                style={{ width: '30px', height: '30px', border: '1px solid #DEDEDE', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', borderRadius: '4px', fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#555' }}>
                {s}
              </a>
            ))}
          </div>
          {/* TOC box */}
          <MobileTocBox />
          {/* Summarize */}
          <SummarizeBarMobile />
          {/* TL;DR on mobile */}
          <TlDrBox isMobile={true} />
        </div>
      )}

      {/* ── SECTIONS ── */}
      {SECTIONS.map((sec, i) => (
        <div key={sec.id} id={sec.id}>
          <h2 style={headingStyle}>{sec.heading}</h2>
          {sec.body.map((p, j) => <p key={j} style={bodyStyle}>{p}</p>)}
          {sec.hasTable && <AurisegTable />}
          {/* Free SOC Checklist banner — shown ABOVE "Understand Your Readers" (before s3) */}
          {sec.id === 's2' && <ChecklistBanner />}
        </div>
      ))}

      {/* ── MOBILE: newsletter + share after "Understand Your Readers" only ── */}
      {isMobile && (
        <>
          <NewsletterBox isMobile={true} />
          <ShareBar isMobile={true} />
          <AuthorCard />
        </>
      )}

      {/* ── DESKTOP: share bar + author card ── */}
      {!isMobile && (
        <>
          <ShareBar isMobile={false} />
          <AuthorCard />
        </>
      )}
    </div>
  );
};

/* ─── MAIN ───────────────────────────────────────────────────────────────────── */
const BlogInnerContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{
      background: '#FFFFFF', width: '100%', margin: '0 auto',
      padding: isMobile ? '24px 16px 48px' : '56px 107px 64px',
      boxSizing: 'border-box',
    }}>

      {/* ── DESKTOP: left 704px | gap 30px | right 454px ── */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', maxWidth: '1244px', margin: '0 auto' }}>

          {/* LEFT — article 704px */}
          <div style={{ width: '704px', flexShrink: 0 }}>
            <ArticleContent isMobile={false} />
          </div>

          {/* RIGHT — sidebar, narrower than before */}
          <div style={{ flex: 1, position: 'sticky', top: '90px', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Share icons LEFT aligned */}
            <TopShareIcons />
            {/* Newsletter — contained width */}
            <NewsletterBox isMobile={false} />
            {/* TOC */}
            <TableOfContents />
          </div>
        </div>
      )}

      {/* ── MOBILE: single col max 375px ── */}
      {isMobile && (
        <div style={{ width: '100%', maxWidth: '375px', margin: '0 auto' }}>
          <ArticleContent isMobile={true} />
        </div>
      )}
    </section>
  );
};

export default BlogInnerContent;
