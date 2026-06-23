import React, { useState, useEffect } from 'react';

const STATS = [
  {
    number: '200+',
    label: 'Enterprises Defended',
    desc: 'Protecting enterprise-scale environments from mid-market to Fortune-equivalent.',
  },
  {
    number: '24/7/365',
    label: 'Continuous SOC Operations',
    desc: 'Every alert you act on has real consequences for a real organization.',
  },
  {
    number: '91%',
    label: 'Staff Retention Rate',
    desc: 'Practitioners explore challenging works, the learning never stops with new challenges.',
  },
  {
    splitNumber: true,
    label: 'Global Threat Exposure',
    desc: 'Engage threat actors across geographies from regional to global.',
  },
];

// ─── WHY AURISEG TAG ──────────────────────────────────────────────────────────
const WhyTag = ({ isMobile }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    gap: isMobile ? '5px' : '8px',
    border: isMobile ? '0.52px solid #444444' : '1px solid #444444',
    padding: isMobile ? '5px 8px' : '8px 12px',
    marginBottom: isMobile ? '20px' : '28px',
  }}>
    <img
      src="/icons/playbook-icon.png"
      alt="why icon"
      style={{ width: isMobile ? '11px' : '14px', height: isMobile ? '11px' : '14px', objectFit: 'contain', flexShrink: 0 }}
      onError={e => { e.target.outerHTML = `<span style="color:#FF5536;font-size:${isMobile ? '11' : '13'}px;font-weight:500;line-height:1">›</span>`; }}
    />
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 500,
      fontSize: isMobile ? '10px' : '12px',
      letterSpacing: '0.08em',
      color: '#ADADAD',
      textTransform: 'uppercase',
    }}>
      WHY AURISEG
    </span>
  </div>
);

const CareerStats = () => {
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
          background: '#0A0A0A',
          boxSizing: 'border-box',
          padding: '56px 100px 64px',
        }}
      >
        {/* WHY AURISEG tag — with icon + border */}
        <WhyTag isMobile={false} />

        {/* Heading row — left heading | right description */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '60px',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500, fontSize: '60px',
            lineHeight: '105%', letterSpacing: '-0.02em',
            color: '#FFFFFF', margin: 0,
            flexShrink: 0, maxWidth: '500px',
          }}>
            Real Threats.<br />Live Environments.
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400, fontSize: '16px',
            lineHeight: '24px', letterSpacing: '-0.02em',
            color: '#ADADAD', margin: 0,
            maxWidth: '420px', paddingTop: '39px',
          }}>
            You work across live SOC environments, enterprise incident response engagements, and cross-sector threat landscapes not sandboxed labs or staged exercises.
          </p>
        </div>

        {/* Stats grid — full rectangle border + inner dividers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid #333333',
        }}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '32px 28px',
                borderRight: i < STATS.length - 1 ? '1px solid #333333' : 'none',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                lineHeight: '100%', letterSpacing: '-0.02em',
              }}>
                {stat.splitNumber ? (
                  /* "5" large orange | "Countries" smaller white — same line */
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ color: '#FF5536', fontSize: '50px' }}>5</span>
                    <span style={{ color: '#FF5536', fontSize: '32px', fontWeight: 500 }}>Countries</span>
                  </div>
                ) : (
                  <span style={{ color: '#FF5536', fontSize: '50px' }}>{stat.number}</span>
                )}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500, fontSize: '30px',
                lineHeight: '120%', color: '#FFFFFF', margin: 0,
                paddingTop: '39px',
              }}>
                {stat.label}
              </p>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400, fontSize: '16px',
                lineHeight: '20px', color: '#ADADAD', margin: 0,
              }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          margin: '0 auto',
          background: '#0A0A0A',
          boxSizing: 'border-box',
          padding: '40px 20px 48px',
          textAlign: 'center',   /* ← 3. center all top content */
        }}
      >
        {/* WHY AURISEG tag — centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <WhyTag isMobile={true} />
        </div>

        {/* Heading — centered */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '36px',
          lineHeight: '105%', letterSpacing: '-0.02em',
          color: '#FFFFFF', margin: '0 0 16px 0',
          textAlign: 'center',
        }}>
          Real Threats.<br />Live Environments.
        </h2>

        {/* Description — centered */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '13px',
          lineHeight: '20px', letterSpacing: '-0.02em',
          color: '#ADADAD', margin: '0 0 36px 0',
          textAlign: 'center',
        }}>
          You work across live SOC environments, enterprise incident response engagements, and cross-sector threat landscapes not sandboxed labs or staged exercises.
        </p>

        {/* Stats stacked — full rectangle border */}
        <div style={{
          border: '1px solid #333333',
          textAlign: 'left',   /* stats content left-aligned inside border */
        }}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '24px 20px',
                borderBottom: i < STATS.length - 1 ? '1px solid #333333' : 'none',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                lineHeight: '100%', letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}>
                {stat.splitNumber ? (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ color: '#FF5536', fontSize: '42px' }}>5</span>
                    <span style={{ color: '#FF5536', fontSize: '24px', fontWeight: 500 }}>Countries</span>
                  </div>
                ) : (
                  <span style={{ color: '#FF5536', fontSize: '40px' }}>{stat.number}</span>
                )}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500, fontSize: '16px',
                lineHeight: '120%', color: '#FFFFFF',
                margin: '0 0 6px 0',
                paddingTop: '39px',
              }}>
                {stat.label}
              </p>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400, fontSize: '12px',
                lineHeight: '18px', color: '#777777', margin: 0,
              }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerStats;
