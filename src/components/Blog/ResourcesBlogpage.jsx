import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ALL_BLOGS = [
  { id: 1, service: 'For MSPs and MSSPs', industry: 'Technology', category: 'CATEGORY', readTime: '5 min read', title: 'The 10-Minute Guide to Closing Security Gaps', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '24 April 2026', img: '/images/blog/post-1.jpg' },
  { id: 2, service: 'Security Testing & Assurance', industry: 'Financial Services', category: 'CATEGORY', readTime: '5 min read', title: 'Why Businesses Must Prioritize Cloud Security', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '20 April 2026', img: '/images/blog/post-2.jpg' },
  { id: 3, service: 'GRC and Compliance', industry: 'Healthcare', category: 'CATEGORY', readTime: '5 min read', title: 'From Compliance Checks to Real Security Protection', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '18 April 2026', img: '/images/blog/post-1.jpg' },
  { id: 4, service: 'Advisory and Enablement', industry: 'Government & Critical Infrastructure', category: 'CATEGORY', readTime: '5 min read', title: 'Beyond VPN: Building a Stronger Security Perimeter', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '15 April 2026', img: '/images/blog/post-2.jpg' },
  { id: 5, service: 'For MSPs and MSSPs', industry: 'Manufacturing', category: 'CATEGORY', readTime: '5 min read', title: 'Why IoT Security Matters for Modern Businesses', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '10 April 2026', img: '/images/blog/post-1.jpg' },
  { id: 6, service: 'Managed Security', industry: 'Technology', category: 'CATEGORY', readTime: '5 min read', title: 'The 2-Minute Phishing Trick That Threatens Businesses', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '05 April 2026', img: '/images/blog/post-2.jpg' },
  { id: 7, service: 'Security Testing & Assurance', industry: 'Healthcare', category: 'CATEGORY', readTime: '5 min read', title: 'How Attackers Turn Security Tactics Against Businesses', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '01 April 2026', img: '/images/blog/post-1.jpg' },
  { id: 8, service: 'Advisory and Enablement', industry: 'Financial Services', category: 'CATEGORY', readTime: '5 min read', title: 'How AI-Powered Attacks Threaten Digital Conversations', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '28 March 2026', img: '/images/blog/post-2.jpg' },
  { id: 9, service: 'GRC and Compliance', industry: 'Manufacturing', category: 'CATEGORY', readTime: '5 min read', title: '4 Hidden OT Threats That Put SCADA Systems at Risk', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '25 March 2026', img: '/images/blog/post-2.jpg' },
  { id: 10, service: 'For MSPs and MSSPs', industry: 'Technology', category: 'CATEGORY', readTime: '5 min read', title: 'Strengthening Security with AI-Powered Threat Hunting', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '20 March 2026', img: '/images/blog/post-1.jpg' },
  { id: 11, service: 'Managed Security', industry: 'Government & Critical Infrastructure', category: 'CATEGORY', readTime: '5 min read', title: 'Why Modern Browser Threats Demand Zero Trust Security', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '15 March 2026', img: '/images/blog/post-2.jpg' },
  { id: 12, service: 'Security Testing & Assurance', industry: 'Manufacturing', category: 'CATEGORY', readTime: '5 min read', title: 'Chrome Zero-Day Threats: Key Security Lessons from 2025', author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' }, date: '10 March 2026', img: '/images/blog/post-1.jpg' },
];

const SERVICE_OPTIONS = ['For MSPs and MSSPs', 'Security Testing & Assurance', 'Advisory and Enablement', 'Managed Security', 'GRC and Compliance'];
const INDUSTRY_OPTIONS = ['Healthcare', 'Financial Services', 'Manufacturing', 'Technology', 'Government & Critical Infrastructure'];
const CARDS_PER_PAGE = 6;

// ─── AUTHOR AVATAR ────────────────────────────────────────────────────────────
const AuthorAvatar = ({ src, name, size = 46 }) => (
  <div style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentNode.style.background = '#FF5536';
        const span = document.createElement('span');
        span.textContent = name.charAt(0).toUpperCase();
        span.style.color = '#fff';
        span.style.fontWeight = '500';
        span.style.fontSize = `${size * 0.4}px`;
        e.target.parentNode.appendChild(span);
      }}
    />
  </div>
);

// ─── DESKTOP DROPDOWN ─────────────────────────────────────────────────────────
const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      <div onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '199px', height: '48px',
        border: `1px solid ${open ? '#FF5536' : '#8A8A8A'}`,
        borderRadius: '8px', padding: '0 14px', background: '#fff',
        cursor: 'pointer', gap: '8px', userSelect: 'none',
        transition: 'border-color 0.2s', boxSizing: 'border-box',
      }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '14px', color: value ? '#13284C' : '#6E6E6E', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {value || label}
        </span>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" stroke="#FF5536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <polyline points="0.5,0.5 6.5,7.5 12.5,0.5" />
        </svg>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, minWidth: '100%', background: '#fff', border: '1px solid #8A8A8A', borderRadius: '8px', zIndex: 200, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          {[{ label: `All`, val: '' }, ...options.map(o => ({ label: o, val: o }))].map((item) => {
            const isActive = value === item.val;
            return (
              <div key={item.val} onClick={() => { onChange(item.val); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 20px', fontFamily: "'Inter',sans-serif", fontSize: '13px', fontWeight: isActive ? 500 : 400, color: isActive ? '#FF5536' : '#393941', background: isActive ? '#fff5f3' : '#fff', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ─── MOBILE PILL BUTTON ───────────────────────────────────────────────────────
const PillBtn = ({ label, active, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        flexShrink: 0, height: '40px', padding: '0 18px',
        border: `1px solid ${active ? '#FF5536' : hov ? '#FF5536' : '#ADADAD'}`,
        borderRadius: '5px',
        background: active ? '#FF5536' : '#fff',
        color: active ? '#fff' : hov ? '#FF5536' : '#18181B',
        fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '13px',
        cursor: 'pointer', whiteSpace: 'nowrap',
        outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box',
      }}>
      {label}
    </button>
  );
};

// ─── PAGE NUMBER BUTTON (no arrows) ──────────────────────────────────────────
const PageBtn = ({ n, active, onClick, isMobile }) => {
  const [hov, setHov] = useState(false);
  const sz = isMobile ? '28px' : '40px';
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      aria-label={`Page ${n}`} aria-current={active ? 'page' : undefined}
      style={{
        width: sz, height: sz, minWidth: sz,
        borderRadius: isMobile ? '5px' : '10px',
        border: `1px solid ${active ? '#FF5536' : hov ? '#FF5536' : '#444444'}`,
        background: active ? '#FF5536' : '#fff',
        color: active ? '#FFFFFF' : hov ? '#FF5536' : '#444444',
        fontFamily: "'Inter',sans-serif", fontSize: isMobile ? '10px' : '14px', fontWeight: 400,
        cursor: 'pointer', outline: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s', boxSizing: 'border-box',
      }}>
      {n}
    </button>
  );
};

// ─── DESKTOP BLOG CARD ────────────────────────────────────────────────────────
const DesktopBlogCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <article onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ width: '100%', height: '360px', border: '0.9px solid #ADADAD', background: '#FFFFFF', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', transform: hov ? 'translateY(-3px)' : 'translateY(0)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      {/* Image — NO overlays */}
      <div style={{ width: '100%', height: '180px', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
        <img src={card.img} alt={card.title} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
          onError={(e) => { e.target.style.display = 'none'; }} />
      </div>
      {/* Body */}
      <div style={{ padding: '16px 18px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Category + Read Time badge row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{
            fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '12px',
            color: '#030407', backgroundColor: '#FFFFFF',
            border: '1px solid #ADADAD', padding: '3px 8px',
            letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0,
          }}>{card.category}</span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', color: '#ADADAD' }}>{card.readTime}</span>
        </div>
        <Link to={`/resources/blogs/${card.id}`} style={{ textDecoration: 'none' }}>
          <h3 onMouseEnter={(e) => e.currentTarget.style.color = '#FF5536'} onMouseLeave={(e) => e.currentTarget.style.color = '#030407'}
            style={{ fontFamily: "'Cabinet Grotesk','Inter',sans-serif", fontWeight: 500, fontSize: '26px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#030407', margin: '0 0 12px 0', transition: 'color 0.2s' }}>
            {card.title}
          </h3>
        </Link>
        <div style={{ flex: 1 }} />
        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0 14px' }}>
          <AuthorAvatar src={card.author.avatar} name={card.author.name} size={46} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14.41px', lineHeight: '18.87px', color: '#030407' }}>{card.author.name}</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', lineHeight: '100%', color: '#ADADAD' }}>{card.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── MOBILE BLOG CARD ─────────────────────────────────────────────────────────
const MobileBlogCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <article onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ width: '100%', maxWidth: '342px', height: '320px', border: '0.9px solid #ADADAD', background: '#FFFFFF', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', transform: hov ? 'translateY(-2px)' : 'translateY(0)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
      {/* Image — NO overlays */}
      <div style={{ width: '100%', height: '160px', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
        <img src={card.img} alt={card.title} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
          onError={(e) => { e.target.style.display = 'none'; }} />
      </div>
      {/* Body */}
      <div style={{ padding: '14px 14px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Category + Read Time badge row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{
            fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '8px',
            color: '#030407', backgroundColor: '#FFFFFF',
            border: '1px solid #ADADAD', padding: '3px 6px',
            letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0,
          }}>{card.category}</span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px', color: '#ADADAD' }}>{card.readTime}</span>
        </div>
        <Link to={`/resources/blogs/${card.id}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontFamily: "'Cabinet Grotesk','Inter',sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#13284C', margin: '0 0 12px 0' }}>
            {card.title}
          </h3>
        </Link>
        <div style={{ flex: 1 }} />
        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 0' }}>
          <AuthorAvatar src={card.author.avatar} name={card.author.name} size={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '13px', lineHeight: '18px', color: '#030407' }}>{card.author.name}</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px', lineHeight: '100%', color: '#ADADAD' }}>{card.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── MOBILE FILTERS — Tab + Pills ─────────────────────────────────────────────
const MobileFilters = ({ activeService, activeIndustry, onService, onIndustry }) => {
  const [activeTab, setActiveTab] = useState('service');
  const pills = activeTab === 'service' ? SERVICE_OPTIONS : INDUSTRY_OPTIONS;
  const activeValue = activeTab === 'service' ? activeService : activeIndustry;

  const handlePill = (val) => {
    if (activeTab === 'service') onService(activeService === val ? '' : val);
    else onIndustry(activeIndustry === val ? '' : val);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Tab row */}
      <div style={{ display: 'flex', borderBottom: '1px solid #E0E0E0', marginBottom: '12px' }}>
        {[{ key: 'service', label: 'By Service' }, { key: 'industry', label: 'By Industry' }].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '8px 16px',
              fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '14px',
              color: activeTab === tab.key ? '#13284C' : '#6E6E6E',
              background: 'transparent', border: 'none',
              borderBottom: activeTab === tab.key ? '2px solid #FF5536' : '2px solid transparent',
              cursor: 'pointer', outline: 'none', marginBottom: '-1px', transition: 'color 0.2s',
            }}>
            {tab.label}
          </button>
        ))}
      </div>
      {/* Pill row — horizontal scrollable */}
      <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {pills.map(opt => (
          <PillBtn key={opt} label={opt} active={activeValue === opt} onClick={() => handlePill(opt)} />
        ))}
      </div>
    </div>
  );
};

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const ResourcesBlogpage = () => {
  const [search, setSearch] = useState('');
  const [activeService, setActiveService] = useState('');
  const [activeIndustry, setActiveIndustry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filtered = ALL_BLOGS.filter(c => {
    const q = search.toLowerCase().trim();
    const ok1 = !q || c.title.toLowerCase().includes(q);
    const ok2 = !activeService || c.service === activeService;
    const ok3 = !activeIndustry || c.industry === activeIndustry;
    return ok1 && ok2 && ok3;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / CARDS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageCards = filtered.slice((safePage - 1) * CARDS_PER_PAGE, safePage * CARDS_PER_PAGE);

  const goPage = (n) => {
    if (n < 1 || n > totalPages) return;
    setCurrentPage(n);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} style={{ background: '#FFFFFF', width: '100%', margin: '0 auto', padding: isMobile ? '32px 16px 40px' : '48px 100px 56px', boxSizing: 'border-box' }}>

      {/* ── DESKTOP CONTROLS: Search left | Filter By Service + By Industry right ── */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', gap: '24px', flexWrap: 'wrap' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', width: '439px', height: '48px', border: '1px solid #8A8A8A', borderRadius: '8px', padding: '0 14px', background: '#fff', gap: '10px', flexShrink: 0, boxSizing: 'border-box' }}>
            <input type="text" value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Search anything..."
              style={{ flex: 1, border: 'none', outline: 'none', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '14px', color: '#6E6E6E', background: 'transparent' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5536" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </div>
          {/* Filter label + By Service + By Industry dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '16px', color: '#13284C', whiteSpace: 'nowrap' }}>Filter</span>
            <Dropdown label="By Service" options={SERVICE_OPTIONS} value={activeService} onChange={v => { setActiveService(v); setCurrentPage(1); }} />
            <Dropdown label="By Industry" options={INDUSTRY_OPTIONS} value={activeIndustry} onChange={v => { setActiveIndustry(v); setCurrentPage(1); }} />
          </div>
        </div>
      )}

      {/* ── MOBILE CONTROLS: Search + Tab filters ── */}
      {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          {/* Mobile search */}
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '48px', border: '1px solid #18181B', borderRadius: '8px', padding: '0 12px', background: '#fff', gap: '10px', boxSizing: 'border-box' }}>
            <input type="text" value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Search anything..."
              style={{ flex: 1, border: 'none', outline: 'none', fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: '12px', color: '#393941', background: 'transparent' }} />
            <div style={{ width: '32px', height: '32px', flexShrink: 0, border: '1.5px solid #FF5536', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5536" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </div>
          </div>
          {/* Tab + pill filters */}
          <MobileFilters
            activeService={activeService}
            activeIndustry={activeIndustry}
            onService={v => { setActiveService(v); setCurrentPage(1); }}
            onIndustry={v => { setActiveIndustry(v); setCurrentPage(1); }}
          />
        </div>
      )}

      {/* ── CARDS GRID: Desktop 3 cols | Mobile 1 col ── */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? '20px' : '24px', marginBottom: isMobile ? '28px' : '40px' }}>
        {pageCards.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '64px 0', fontFamily: "'Inter',sans-serif", fontSize: '16px', color: '#6E6E6E' }}>
            No results found. Try adjusting your filters.
          </div>
        ) : (
          pageCards.map(card => isMobile
            ? <MobileBlogCard key={card.id} card={card} />
            : <DesktopBlogCard key={card.id} card={card} />
          )
        )}
      </div>

      {/* ── PAGINATION: page numbers only, no Previous/Next arrows ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '5px' : '10px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
          <PageBtn key={n} n={n} active={n === safePage} onClick={() => goPage(n)} isMobile={isMobile} />
        ))}
      </div>

    </section>
  );
};

export default ResourcesBlogpage;
