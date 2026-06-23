import React, { useState, useEffect, useRef } from 'react';

const LiveIncidentCounter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 527;
  const hasAnimated = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1800;
          const step = 16;
          const increment = targetCount / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= targetCount) {
              setCount(targetCount);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section
        ref={sectionRef}
        style={{
          width: '100%',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          // FIX 1: no border, no outline anywhere
          border: 'none',
          outline: 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            position: 'relative',
            height: '712px',
            boxSizing: 'border-box',
            border: 'none',
          }}
        >
          {/* LEFT — Heading */}
          <div
            style={{
              position: 'absolute',
              left: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '110%',
                letterSpacing: '-0.02em',
                color: 'var(--Blue-2-500, #13284C)',
                margin: 0,
                maxWidth: '280px',
              }}
            >
              Live Incident Counter
            </h2>
          </div>

          {/* CENTER — Globe video, no border */}
          <div
            style={{
              position: 'absolute',
              top: '0.18px',
              left: '376.26px',
              width: '711.6px',
              height: '711.6px',
              zIndex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                border: 'none',
                outline: 'none',
                background: 'transparent',
              }}
            >
              <source src="/videos/globe-animation.mp4" type="video/mp4" />
            </video>
          </div>

          {/* RIGHT — Stats */}
          <div
            style={{
              position: 'absolute',
              right: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '64px', lineHeight: '100%', letterSpacing: '-0.03em', color: '#FF5536', margin: '0 0 6px 0' }}>
                {count}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '13px', lineHeight: '1.4', color: '#575759', textAlign: 'right' }}>
                Incidents Handled<br />Counter
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '64px', lineHeight: '100%', letterSpacing: '-0.03em', color: '#FF5536', margin: '0 0 6px 0' }}>
                8+
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '13px', lineHeight: '1.4', color: '#575759', textAlign: 'right' }}>
                In Last 24 hr
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  // FIX 2: Everything centered
  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        maxWidth: '375px',
        margin: '0 auto',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        overflow: 'hidden',
        border: 'none',
        outline: 'none',
        paddingBottom: '40px',
      }}
    >
      {/* Heading — centered */}
      <div style={{ textAlign: 'center', padding: '32px 20px 0 20px' }}>
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '26px',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            color: 'var(--Blue-2-500, #13284C)',
            margin: 0,
          }}
        >
          Live Incident Counter
        </h2>
      </div>

      {/* Globe video — centered */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '16px 0 0 0',
          border: 'none',
          outline: 'none',
        }}
      >
        <div
          style={{
            width: '299px',
            height: '299px',
            flexShrink: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              border: 'none',
              outline: 'none',
              background: 'transparent',
            }}
          >
            <source src="/videos/globe-animation-mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Stats row — centered */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '40px',
          padding: '20px 20px 0 20px',
        }}
      >
        {/* Stat 1 */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-0.03em',
              color: '#FF5536',
              margin: '0 0 6px 0',
            }}
          >
            {count}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.4',
              color: '#575759',
              textAlign: 'center',
            }}
          >
            Incidents Handled<br />Counter
          </div>
        </div>

        {/* Stat 2 */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-0.03em',
              color: '#FF5536',
              margin: '0 0 6px 0',
            }}
          >
            8+
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.4',
              color: '#575759',
              textAlign: 'center',
            }}
          >
            In Last 24 hr
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveIncidentCounter;
