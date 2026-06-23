import React, { useState, useEffect } from 'react';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ARSENAL_CARDS = [
  {
    id: 1,
    title: 'Growth & Training',
    desc: 'Auriseg actively supports its team in pursuing OSCP, CISSP, GIAC, and SANS cybersecurity training.',
    bgImage: '/images/careers/arsenal-growth.jpg',
    icon: '/images/careers/arsenal-growth.jpg',
  },
  {
    id: 2,
    title: 'Global Mobility',
    desc: 'Expand your career trajectory and threat expertise through international engagements across our global collaborative hubs.',
    bgImage: '/images/careers/arsenal-mobility.jpg',
    icon: '/images/careers/arsenal-icon-mobility.png',
  },
  {
    id: 3,
    title: 'Remote & Flexible Work',
    desc: 'Continuous SOC operations prioritize your health by offering flexible schedules, remote work and structured rotations.',
    bgImage: '/images/careers/arsenal-remote.jpg',
    icon: '/images/careers/arsenal-icon-remote.png',
  },
  {
    id: 4,
    title: 'Health & Wellbeing',
    desc: 'Comprehensive health and family benefits paired with proactive mental health resources to prevent employee burnout.',
    bgImage: '/images/careers/arsenal-health.jpg',
    icon: '/images/careers/arsenal-icon-health.png',
  },
];

// ─── YOUR ARSENAL TAG ─────────────────────────────────────────────────────────
const ArsenalTag = ({ isMobile }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    border: '1px solid #FF5536',
    padding: isMobile ? '4px 8px' : '6px 10px',
    marginBottom: isMobile ? '14px' : '20px',
  }}>
    <img
      src="/icons/playbook-icon.png"
      alt=""
      style={{ width: '11px', height: '11px', objectFit: 'contain', flexShrink: 0 }}
      onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:11px;font-weight:700">›</span>'; }}
    />
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 500, fontSize: isMobile ? '10px' : '11px',
      letterSpacing: '0.08em', color: '#FF5536',
      textTransform: 'uppercase',
    }}>
      YOUR ARSENAL
    </span>
  </div>
);

// ─── SINGLE CARD ──────────────────────────────────────────────────────────────
const ArsenalCard = ({ card, isMobile }) => (
  <div style={{
    position: 'relative',
    background: '#111111',
    overflow: 'hidden',
    minHeight: isMobile ? '180px' : '260px',
    display: 'flex', flexDirection: 'column',
    padding: isMobile ? '20px 16px' : '24px 20px',
    boxSizing: 'border-box',
  }}>
    {/* Background — Solid dark per design image (bg image removed) */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#030407' }} />

    {/* Content — above background */}
    <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'flex-start' }}>
      {/* Title */}
      <h3 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 700, fontSize: isMobile ? '18px' : '20px',
        lineHeight: '120%', letterSpacing: '-0.02em',
        color: '#FFFFFF', margin: '0 0 10px 0',
        maxWidth: '70%',
      }}>
        {card.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400, fontSize: isMobile ? '12px' : '12.5px',
        lineHeight: '18px', color: '#ADADAD',
        margin: 0, maxWidth: '85%',
      }}>
        {card.desc}
      </p>
    </div>

    {/* Decorative icon — large watermark placement matching Figma */}
    <div style={{
      position: 'absolute',
      bottom: isMobile ? '-25px' : '-40px',
      right: isMobile ? '-10px' : '-20px',
      width: isMobile ? '120px' : '180px', /* Much larger icons per Figma */
      height: isMobile ? '120px' : '180px',
      zIndex: 1, opacity: 0.85, 
    }}>
      <img
        src={card.icon}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
    </div>
  </div>
);

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const CareerArsenal = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          padding: '64px 100px 72px',
        }}
      >
        {/* YOUR ARSENAL tag */}
        <ArsenalTag isMobile={false} />

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700, fontSize: '54px',
          lineHeight: '105%', letterSpacing: '-0.02em',
          color: '#030407', margin: '0 0 40px 0',
          maxWidth: '600px',
          textAlign: 'left',
        }}>
          Built for people who think<br />&amp; execute.
        </h2>

        {/* 4-column cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}>
          {ARSENAL_CARDS.map(card => (
            <ArsenalCard key={card.id} card={card} isMobile={false} />
          ))}
        </div>
      </section>

      {/* ── MOBILE ── ✅ FIXED: Center alignment for title content ───────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          margin: '0 auto',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          padding: '40px 16px 48px',
        }}
      >
        {/* ✅ CHANGED: Center alignment wrapper */}
        <div style={{ textAlign: 'center' }}>
          {/* YOUR ARSENAL tag - centered */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArsenalTag isMobile={true} />
          </div>

          {/* Heading - centered */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: '105%',
            letterSpacing: '-0.02em',
            color: '#030407',
            margin: '0 0 28px 0',
            textAlign: 'center',
          }}>
            Built for people who think<br />&amp execute.
          </h2>
        </div>

        {/* Stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ARSENAL_CARDS.map(card => (
            <ArsenalCard key={card.id} card={card} isMobile={true} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerArsenal;
