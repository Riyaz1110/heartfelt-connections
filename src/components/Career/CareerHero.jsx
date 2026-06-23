import React, { useState, useEffect } from 'react';

const CareerHero = () => {
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
          height: '733px',
          position: 'relative',
          overflow: 'hidden',
          background: '#030407',
          boxSizing: 'border-box',
          backgroundImage: "url('/images/careers/career-hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(3,4,7,0.85) 40%, rgba(3,4,7,0.2) 100%)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          paddingLeft: '105px',
          paddingTop: '120px',
          maxWidth: '800px',
        }}>
          {/* JOIN THE MISSION tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            border: '1px solid #444444',
            padding: '10px 11px',
            marginBottom: '24px',
          }}>
            <img
              src="/icons/playbook-icon.png"
              alt="mission icon"
              style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
              onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:14px;font-weight:500;line-height:1">›</span>'; }}
            />
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}>
              JOIN THE MISSION
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '60px',
            lineHeight: '105%',
            letterSpacing: '-0.04px',
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            maxWidth: '1500px',
          }}>
            Defend What the World Runs On.
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.09px',
            color: '#FFFFFF',
            margin: 0,
            maxWidth: '499px',
          }}>
            You will be a part of intersecting live threat intelligence, enterprise SOC, and active incident response, defending the digital infrastructure that keeps industries standing.
          </p>
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          height: '689px',
          position: 'relative',
          overflow: 'hidden',
          background: '#030407',
          boxSizing: 'border-box',
          backgroundImage: "url('/images/careers/career-hero-bg-mobile.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(3,4,7,0.55)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '80px',
          paddingLeft: '24px', paddingRight: '24px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}>
          {/* JOIN THE MISSION tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '5.18px',
            border: '0.52px solid #444444',
            padding: '5.18px 5.7px',
            marginBottom: '20px',
          }}>
            <img
              src="/icons/playbook-icon.png"
              alt="mission icon"
              style={{ width: '12px', height: '12px', objectFit: 'contain', flexShrink: 0 }}
              onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:12px;font-weight:500;line-height:1">›</span>'; }}
            />
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}>
              JOIN THE MISSION
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: '105%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: '0 0 20px 0',
          }}>
            Defend What the World Runs On.
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: '#FFFFFF',
            margin: 0,
            maxWidth: '281px',
          }}>
            You will be a part of intersecting live threat intelligence, enterprise SOC, and active incident response, defending the digital infrastructure that keeps industries standing.
          </p>
        </div>
      </section>
    </>
  );
};

export default CareerHero;
