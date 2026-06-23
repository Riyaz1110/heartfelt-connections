import React, { useState, useEffect } from 'react';

const CULTURE_CARDS = [
  {
    id: 1,
    icon: '/icons/Careers/practitioner-icon.png',
    title: 'Practitioner First',
    desc: 'Strategy and execution share the same room, ensuring decision-makers stay closely connected to the groundwork.',
  },
  {
    id: 2,
    icon: '/icons/Careers/upskilling-icon.png',
    title: 'Continuous Upskilling',
    desc: 'Auriseg funds your career growth by integrating threat intelligence, red team simulations, and vendor training.',
  },
  {
    id: 3,
    icon: '/icons/Careers/mission-icon.png',
    title: 'Autonomy & Trust',
    desc: 'Ensuring rapid incident response by empowering our technical teams to make critical decisions on the fly.',
  },
  {
    id: 4,
    icon: '/icons/Careers/Frame.png',
    title: 'Mission-Driven Impact',
    desc: 'Your internal work processes directly shape the experiences of external organizations and the general public.',
  },
  {
    id: 5,
    icon: '/icons/Careers/collaborative-icon.png',
    title: 'Collaborative Defense',
    desc: 'Proactive collaborative defense is our standard, utilizing shared intelligence, purple teaming and joint security exercises.',
  },
  {
    id: 6,
    icon: '/icons/Careers/intensity-icon.png',
    title: 'Sustainable Intensity',
    desc: 'Our operational framework prioritizes employee health through structured schedules, psychological support, and protected personal time.',
  },
];

// ─── CARD ICON — localhost PNG only ───────────────────────────────────────────
const CardIcon = ({ src, size = 40 }) => (
  <div style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, marginBottom: '16px' }}>
    <img
      src={src}
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      onError={e => { e.target.style.display = 'none'; }}
    />
  </div>
);

// ─── OUR CULTURE TAG ──────────────────────────────────────────────────────────
const CultureTag = ({ isMobile }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    gap: isMobile ? '5px' : '8px',
    border: isMobile ? '0.52px solid #D9D9D9' : '1px solid #D9D9D9', /* Lighter border matching image */
    padding: isMobile ? '5px 8px' : '8px 12px',
    marginBottom: isMobile ? '16px' : '24px',
  }}>
    <img
      src="/icons/playbook-icon.png"
      alt=""
      style={{ width: isMobile ? '11px' : '13px', height: isMobile ? '11px' : '13px', objectFit: 'contain', flexShrink: 0 }}
      onError={e => { e.target.outerHTML = `<span style="color:#FF5536;font-size:${isMobile ? '11' : '13'}px;font-weight:700">›</span>`; }}
    />
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 500, fontSize: isMobile ? '10px' : '12px',
      letterSpacing: '0.08em', color: '#FF5536',
      textTransform: 'uppercase',
    }}>
      OUR CULTURE
    </span>
  </div>
);

const CareerCulture = () => {
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
        {/* OUR CULTURE tag */}
        <CultureTag isMobile={false} />

        {/* Heading row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '60px',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700, fontSize: '54px', /* Bolder and sized closer to image */
            lineHeight: '105%', letterSpacing: '-0.02em',
            color: '#030407', margin: 0,
            flexShrink: 0, maxWidth: '600px',
          }}>
            Built by Practitioners.<br />Driven by Purpose.
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400, fontSize: '16px',
            lineHeight: '24px', letterSpacing: '-0.02em',
            color: '#777777', margin: 0,
            maxWidth: '400px', paddingTop: '12px',
          }}>
            We hire for instinct to think adversarially, communicate clearly under pressure, and care deeply about the craft. If you chase the "why" behind every alert, you belong here.
          </p>
        </div>

        {/* 3×2 Cards grid — with gaps and separate borders */}
        {/* Added maxWidth and margin auto to reduce box width and keep it centered */}
        <div style={{ position: 'relative' }}>

          {/* Orange corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid #FF5536', borderLeft: '2px solid #FF5536', zIndex: 5 }} />
          <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 14, borderTop: '2px solid #FF5536', borderRight: '2px solid #FF5536', zIndex: 5 }} />
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 14, borderBottom: '2px solid #FF5536', borderLeft: '2px solid #FF5536', zIndex: 5 }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid #FF5536', borderRight: '2px solid #FF5536', zIndex: 5 }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5px', // Restored gap between boxes
          }}>
            {CULTURE_CARDS.map((card) => (
              <div
                key={card.id}
                style={{
                  background: '#FFFFFF',
                  padding: '28px 28px',
                  height: '280px',
                  display: 'flex', flexDirection: 'column',
                  gap: '12px',
                  border: '1px solid #D9D9D9',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                }}
              >
                {/* Localhost PNG icon */}
                <CardIcon src={card.icon} size={44} />

                <h3 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '26px',
                  color: '#13284C', margin: 0,
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400, fontSize: '16px',
                  lineHeight: '22px', color: '#606060',
                  margin: 0,
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          margin: '0 auto',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          padding: '40px 20px 48px',
          textAlign: 'center',
        }}
      >
        {/* OUR CULTURE tag — centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <CultureTag isMobile={true} />
        </div>

        {/* Heading — centered */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '34px',
          lineHeight: '105%', letterSpacing: '-0.02em',
          color: '#030407', margin: '0 0 14px 0',
          textAlign: 'center',
        }}>
          Built by Practitioners.<br />Driven by Purpose.
        </h2>

        {/* Description — centered */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '13px',
          lineHeight: '20px', letterSpacing: '-0.02em',
          color: '#777777', margin: '0 0 32px 0',
          textAlign: 'center',
        }}>
          We hire for instinct to think adversarially, communicate clearly under pressure, and care deeply about the craft. If you chase the "why" behind every alert, you belong here.
        </p>

        {/* Cards — separate bordered square boxes, stacked one by one */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
          {CULTURE_CARDS.map((card) => (
            <div
              key={card.id}
              style={{
                padding: '20px 16px',
                border: '1px solid #ADADAD',
                background: '#FFFFFF',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Localhost PNG icon */}
              <CardIcon src={card.icon} size={32} />

              {/* Title — #13284C bold */}
              <h3 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 700, fontSize: '20px',
                lineHeight: '100%', letterSpacing: '-0.02em',
                color: '#13284C',
                margin: '0 0 10px 0',
              }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400, fontSize: '12px',
                lineHeight: '18px', color: '#777777',
                margin: 0,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerCulture;
