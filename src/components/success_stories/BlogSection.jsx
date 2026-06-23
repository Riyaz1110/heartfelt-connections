import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


// ─── DATA ─────────────────────────────────────────────────────────────────────
const ALL_CARDS = [
  { id: 1, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Empowering businesses with scalable cloud security, 24/7 SOC monitoring, and intelligent threat detection for modern digital environments.', service: 'For MSPs and MSSPs', industry: 'Technology', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 2, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'ISO 27001 Gap Assessment for a Post-Acquisition Finance Company', desc: 'Auriseg assessed security posture across a newly merged consumer finance firm, aligning legacy infrastructure with banking-grade ISO 27001 controls and a risk-based remediation roadmap.', service: 'Security Testing & Assurance', industry: 'Financial Services', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 3, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Network & Application Penetration Testing for a Global Shipping Group', desc: 'Auriseg executed a structured VAPT engagement for one of Icelands largest transport operators, uncovering critical vulnerabilities across perimeter systems and web applications within a strict four-week window.', service: 'GRC and Compliance', industry: 'Healthcare', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 4, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Pan-India Network Security Assessment for a Tier-1 Telecom Provider', desc: 'Auriseg delivered a comprehensive security assessment spanning Oracle-Forms applications, SAN storage, and network perimeters across 20 telecom circles, combining white-box and black-box testing methodologies.', service: 'Advisory and Enablement', industry: 'Government & Critical Infrastructure', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 5, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Central Hosting Security Assessment for Icelands Largest Transport Company', desc: 'Auriseg performed a remote four-phase security engagement for a 14,500-person shipping group operating across 30 countries, covering firewall posture, traffic monitoring, and vulnerability validation.', service: 'For MSPs and MSSPs', industry: 'Manufacturing', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 6, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Managed Security', industry: 'Technology', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 7, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Security Testing & Assurance', industry: 'Healthcare', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 8, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Advisory and Enablement', industry: 'Financial Services', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 9, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'GRC and Compliance', industry: 'Manufacturing', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 10, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'For MSPs and MSSPs', industry: 'Technology', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 11, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Managed Security', industry: 'Government & Critical Infrastructure', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 12, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Security Testing & Assurance', industry: 'Manufacturing', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 13, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Advisory and Enablement', industry: 'Healthcare', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 14, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'GRC and Compliance', industry: 'Technology', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 15, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'For MSPs and MSSPs', industry: 'Financial Services', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 16, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Managed Security', industry: 'Manufacturing', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 17, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Security Testing & Assurance', industry: 'Government & Critical Infrastructure', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 18, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'Advisory and Enablement', industry: 'Technology', img: '/images/success-stories/blog/post-2.jpg' },
  { id: 19, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'GRC and Compliance', industry: 'Healthcare', img: '/images/success-stories/blog/post-1.jpg' },
  { id: 20, category: 'CATEGORY', tag: 'MODERN  INFRASTRUCTURE', title: 'Unified Security Across Modern Infrastructure', desc: 'Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.', service: 'For MSPs and MSSPs', industry: 'Government & Critical Infrastructure', img: '/images/success-stories/blog/post-2.jpg' },
];

const SERVICE_OPTIONS = ['For MSPs and MSSPs', 'Security Testing & Assurance', 'Advisory and Enablement', 'Managed Security', 'GRC and Compliance'];
const INDUSTRY_OPTIONS = ['Healthcare', 'Financial Services', 'Manufacturing', 'Technology', 'Government & Critical Infrastructure'];
const CARDS_PER_PAGE = 4;

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
      <div
        onClick={() => setOpen(o => !o)}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '199px', height: '48px',
          border: `1px solid ${open ? '#FF5536' : '#8A8A8A'}`,
          borderRadius: '8px', padding: '0 14px', background: '#fff',
          cursor: 'pointer', gap: '8px', userSelect: 'none',
          transition: 'border-color 0.2s', boxSizing: 'border-box',
        }}
      >
        <span style={{
          fontFamily: "'Inter'", fontWeight: 500, fontSize: '18px',
          color: value ? '#13284C' : '#6E6E6E',
          flex: 1, textAlign: 'left', whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {value || label}
        </span>
        <svg
          width="13" height="8" viewBox="0 0 13 8"
          fill="none" stroke="#FF5536" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <polyline points="0.5,0.5 6.5,7.5 12.5,0.5" />
        </svg>
      </div>

      {open && (
        <div role="listbox" style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0,
          minWidth: '100%', background: '#fff',
          border: '1px solid #8A8A8A', borderRadius: '8px',
          zIndex: 200, overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        }}>
          <DropItem
            label={`All ${label.replace('By ', '')}s`}
            active={!value}
            onClick={() => { onChange(''); setOpen(false); }}
          />
          {options.map(opt => (
            <DropItem
              key={opt} label={opt} active={value === opt}
              onClick={() => { onChange(opt); setOpen(false); }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DropItem = ({ label, active, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      role="option" aria-selected={active}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center',
        height: '48px', padding: '9px 20px',
        fontFamily: "'Inter'", fontSize: '18px',
        fontWeight: active ? 500 : 400,
        color: active || hov ? '#FF5536' : '#393941',
        background: active || hov ? '#fff5f3' : '#fff',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer', whiteSpace: 'nowrap',
        transition: 'background 0.15s, color 0.15s', boxSizing: 'border-box',
      }}
    >
      {label}
    </div>
  );
};

// ─── MOBILE FILTER PILLS ─────────────────────────────────────────────────────
const MobileFilters = ({ activeService, activeIndustry, onService, onIndustry }) => {
  const [activeTab, setActiveTab] = useState('service');
  const pills = activeTab === 'service' ? SERVICE_OPTIONS : INDUSTRY_OPTIONS;
  const activeValue = activeTab === 'service' ? activeService : activeIndustry;

  const handlePill = (val) => {
    if (activeTab === 'service') {
      onService(activeService === val ? '' : val);
    } else {
      onIndustry(activeIndustry === val ? '' : val);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #E0E0E0', marginBottom: '12px' }}>
        {['service', 'industry'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              fontFamily: "'Inter',sans-serif",
              fontWeight: 500, fontSize: '14px',
              color: activeTab === tab ? '#13284C' : '#6E6E6E',
              background: 'transparent', border: 'none',
              borderBottom: activeTab === tab ? '2px solid #FF5536' : '2px solid transparent',
              cursor: 'pointer', outline: 'none',
              marginBottom: '-1px', transition: 'color 0.2s',
            }}
          >
            {tab === 'service' ? 'By Service' : 'By Industry'}
          </button>
        ))}
      </div>
      <div style={{
        display: 'flex', gap: '8px',
        overflowX: 'auto', paddingBottom: '4px',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
      }}>
        {pills.map(opt => (
          <PillBtn
            key={opt}
            label={opt}
            active={activeValue === opt}
            onClick={() => handlePill(opt)}
          />
        ))}
      </div>
    </div>
  );
};

const PillBtn = ({ label, active, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flexShrink: 0, height: '48px', padding: '9px 20px',
        border: `1px solid ${active ? '#FF5536' : hov ? '#FF5536' : '#91939F'}`,
        borderRadius: '5px',
        background: active ? '#FF5536' : '#fff',
        color: active ? '#fff' : hov ? '#FF5536' : '#18181B',
        fontFamily: "'Inter',sans-serif",
        fontWeight: 500, fontSize: '14px',
        lineHeight: '100%', letterSpacing: '-0.02em',
        cursor: 'pointer', whiteSpace: 'nowrap',
        outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box',
      }}
    >
      {label}
    </button>
  );
};

// ─── DESKTOP CARD ─────────────────────────────────────────────────────────────
const DesktopCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '100%',
        border: '1px solid #E0E0E0',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hov ? '0 8px 24px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: '100%', aspectRatio: '1.6', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={card.img} alt={card.title} loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.35s',
            transform: hov ? 'scale(1.04)' : 'scale(1)',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '9px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: '#FF5536', background: 'transparent',
            border: '1px solid #FF5536', padding: '4px 6px', lineHeight: '1',
          }}>{card.category}</span>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '9px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: '#000000', background: 'transparent',
            border: '1px solid #D1D1D1', padding: '4px 8px', lineHeight: '1',
          }}>{card.tag}</span>
        </div>
        <h3 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '26px',
          lineHeight: '115%', letterSpacing: '-0.02em',
          color: '#000000', marginBottom: '12px', flexShrink: 0,
        }}>
          {card.title}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500, fontSize: '14px',
          lineHeight: '22px', letterSpacing: '-0.01em',
          color: '#000000', flex: 1, marginBottom: '20px',
        }}>
          {card.desc}
        </p>
        <Link to={`/success-stories/${card.id}`} style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 600,
          fontSize: '18px', lineHeight: '1',
          color: '#FF5536', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          marginTop: 'auto', flexShrink: 0,
        }}>
          Read Case Study →
        </Link>
      </div>
    </article>
  );
};

// ─── MOBILE CARD ──────────────────────────────────────────────────────────────
const MobileCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '342px',
        border: '1px solid #E0E0E0',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hov ? '0 8px 24px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: '100%', height: '198px', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={card.img} alt={card.title} loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.35s',
            transform: hov ? 'scale(1.04)' : 'scale(1)',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div style={{ padding: '16px 16px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '9px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: '#FF5536', background: 'transparent',
            border: '1px solid #FF5536', padding: '4px 6px', lineHeight: '1',
          }}>{card.category}</span>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '9px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: '#000000', background: 'transparent',
            border: '1px solid #D1D1D1', padding: '4px 6px', lineHeight: '1',
          }}>{card.tag}</span>
        </div>
        <h3 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '22px',
          lineHeight: '115%', letterSpacing: '-0.02em',
          color: '#000000', marginBottom: '12px', flexShrink: 0,
        }}>
          {card.title}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500, fontSize: '13px',
          lineHeight: '20px', letterSpacing: '-0.01em',
          color: '#000000', flex: 1, marginBottom: '16px',
        }}>
          {card.desc}
        </p>
        <Link to={`/success-stories/${card.id}`} style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 600,
          fontSize: '16px', lineHeight: '1',
          color: '#FF5536', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          marginTop: 'auto', flexShrink: 0,
        }}>
          Read Case Study →
        </Link>
      </div>
    </article>
  );
};

// ─── PAGE BUTTON ──────────────────────────────────────────────────────────────
const PageBtn = ({ n, active, onClick, isMobile }) => {
  const [hov, setHov] = useState(false);
  const sz = isMobile ? '20.35px' : '40px';
  const fs = isMobile ? '9px' : '14px';
  const br = isMobile ? '5.09px' : '10px';
  const bw = isMobile ? '0.51px' : '1px';
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`Page ${n}`}
      aria-current={active ? 'page' : undefined}
      style={{
        width: sz, height: sz, minWidth: sz,
        borderRadius: br,
        border: `${bw} solid ${active ? '#FF5536' : hov ? '#FF5536' : '#444444'}`,
        background: active ? '#FF5536' : '#fff',
        color: active ? '#FFFFFF' : hov ? '#FF5536' : '#444444',
        fontFamily: "'Inter',sans-serif", fontSize: fs, fontWeight: 400,
        cursor: 'pointer', outline: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s', boxSizing: 'border-box',
      }}
    >
      {n}
    </button>
  );
};

// ─── NAV BUTTON ───────────────────────────────────────────────────────────────
const NavBtn = ({ direction, disabled, onClick }) => {
  const [hov, setHov] = useState(false);
  const isPrev = direction === 'prev';
  const color = disabled ? '#D1D1D1' : hov ? '#FF5536' : '#FF5536';
  const border = disabled ? '#E0E0E0' : hov ? '#FF5536' : '#ADADAD';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      disabled={disabled}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        height: '40px', padding: '0 20px',
        borderRadius: '10px',
        border: `1px solid ${border}`,
        background: '#fff',
        color: color,
        fontFamily: "'Inter',sans-serif", fontSize: '14px', fontWeight: 400,
        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box',
      }}
    >
      {isPrev ? '← Previous' : 'Next →'}
    </button>
  );
};

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
const BlogSection = () => {
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

  const filtered = ALL_CARDS.filter(c => {
    const q = search.toLowerCase().trim();
    const ok1 = !q || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    const ok2 = !activeService || c.service === activeService;
    const ok3 = !activeIndustry || c.industry === activeIndustry;
    return ok1 && ok2 && ok3;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / CARDS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageCards = filtered.slice((safePage - 1) * CARDS_PER_PAGE, safePage * CARDS_PER_PAGE);

  const handleSearch = (e) => { setSearch(e.target.value); setCurrentPage(1); };
  const handleService = (v) => { setActiveService(v); setCurrentPage(1); };
  const handleIndustry = (v) => { setActiveIndustry(v); setCurrentPage(1); };

  const goPage = (n) => {
    setCurrentPage(n);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const DesktopSearch = (
    <div style={{
      display: 'flex', alignItems: 'center',
      width: '439px', height: '48px',
      border: '1px solid #8A8A8A', borderRadius: '8px',
      padding: '0 14px', background: '#fff', gap: '10px',
      flexShrink: 0, boxSizing: 'border-box',
    }}>
      <input
        type="text" value={search} onChange={handleSearch}
        placeholder="Search anything..."
        style={{
          flex: 1, border: 'none', outline: 'none',
          fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '14px',
          color: '#6E6E6E', background: 'transparent',
        }}
      />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="#FF5536" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
    </div>
  );

  const MobileSearch = (
    <div style={{
      display: 'flex', alignItems: 'center',
      width: '312px', height: '52px',
      border: '1px solid #18181B', borderRadius: '8px',
      padding: '10px 14px', background: '#fff', gap: '10px',
      boxSizing: 'border-box',
    }}>
      <input
        type="text" value={search} onChange={handleSearch}
        placeholder="Search anything..."
        style={{
          flex: 1, border: 'none', outline: 'none',
          fontFamily: "'Inter',sans-serif", fontWeight: 300,
          fontSize: '12px', letterSpacing: '-0.02em',
          color: '#393941', background: 'transparent',
        }}
      />
      <div style={{
        width: '32px', height: '32px', flexShrink: 0,
        border: '1.5px solid #FF5536', borderRadius: '6px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#FF5536" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
      </div>
    </div>
  );

  return (
    /*
      KEY FIX: The outer section is 100% wide with white background and NO maxWidth cap.
      All inner content is constrained with a centred inner wrapper div.
      This prevents any black/dark background leaking on the sides.
    */
    <section
      ref={sectionRef}
      style={{
        background: '#FFFFFF',
        width: '100%',
        boxSizing: 'border-box',
        padding: isMobile ? '32px 16px 40px' : '48px 0 56px',
      }}
    >
      {/* ── Inner content wrapper — centred, max 1248px ── */}
      <div style={{
        width: '100%',
        maxWidth: isMobile ? '375px' : '1248px',
        margin: '0 auto',
        padding: isMobile ? '0' : '0 24px',
        boxSizing: 'border-box',
      }}>

        {/* ── DESKTOP CONTROLS ── */}
        {!isMobile && (
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px', gap: '24px', flexWrap: 'wrap',
          }}>
            {DesktopSearch}
            <div style={{
              display: 'flex', alignItems: 'center',
              height: '48px', gap: '16px', flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 500,
                fontSize: '16px', color: '#13284C',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                Filter
              </span>
              <Dropdown
                label="By Service"
                options={SERVICE_OPTIONS}
                value={activeService}
                onChange={handleService}
              />
              <Dropdown
                label="By Industry"
                options={INDUSTRY_OPTIONS}
                value={activeIndustry}
                onChange={handleIndustry}
              />
            </div>
          </div>
        )}

        {/* ── MOBILE CONTROLS ── */}
        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
            {MobileSearch}
            <MobileFilters
              activeService={activeService}
              activeIndustry={activeIndustry}
              onService={handleService}
              onIndustry={handleIndustry}
            />
          </div>
        )}

        {/* ── CARDS GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '342px' : 'repeat(2, 1fr)',
          gap: isMobile ? '20px' : '24px 32px',
          justifyContent: isMobile ? 'center' : 'stretch',
          marginBottom: isMobile ? '60px' : '64px',
          minHeight: '200px',
        }}>
          {pageCards.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '64px 0',
              fontFamily: "'Inter',sans-serif", fontSize: '16px', color: '#6E6E6E',
            }}>
              No results found. Try adjusting your filters.
            </div>
          ) : (
            pageCards.map(card =>
              isMobile
                ? <MobileCard key={card.id} card={card} />
                : <DesktopCard key={card.id} card={card} />
            )
          )}
        </div>

        {/* ── PAGINATION ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {!isMobile && (
            <NavBtn
              direction="prev"
              disabled={safePage === 1}
              onClick={() => goPage(safePage - 1)}
            />
          )}

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: isMobile ? '5.09px' : '10px',
            flex: isMobile ? 1 : 'unset',
          }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <PageBtn
                key={n}
                n={n}
                active={n === safePage}
                onClick={() => goPage(n)}
                isMobile={isMobile}
              />
            ))}
          </div>

          {!isMobile && (
            <NavBtn
              direction="next"
              disabled={safePage === totalPages}
              onClick={() => goPage(safePage + 1)}
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
