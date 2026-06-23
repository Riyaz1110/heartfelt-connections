import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const stats = [
    { number: '1500+', label: 'Cybersecurity projects securing global enterprises' },
    { number: '10+', label: 'Years of CERT-In empaneled MSSP leadership' },
    { number: '85%', label: 'Customer retention through long-term partnerships' },
  ];

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <section style={{ background: '#030407', width: '100%', paddingTop: '2cm' }}>
        <div style={{ width: '100%', maxWidth: '1500px', margin: '0 auto', boxSizing: 'border-box' }}>
          <div style={{ position: 'relative' }}>

            {/* Mobile border image — sits BEHIND the grid */}
            <img
              src="/images/stats/stats-border-mobile.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />

            {/* Stats grid — ON TOP of border image */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: '1fr',
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '28px 20px',
                    minHeight: '160px',
                    boxSizing: 'border-box',
                    gap: '16px',
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '32px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                      color: '#FFFFFF',
                      textAlign: 'left',
                    }}
                  >
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '13px',
                      lineHeight: '1.55',
                      letterSpacing: '-0.01em',
                      color: 'rgba(255,255,255,0.45)',
                      margin: 0,
                      textAlign: 'left',
                      maxWidth: '240px',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP LAYOUT ── */
  return (
    <section
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        marginLeft: '-50vw',
        background: '#030407',
        boxSizing: 'border-box',
        paddingTop: '2cm',
      }}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Desktop border image — sits BEHIND the grid */}
        <img
          src="/images/stats/stats-border.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            width: '100%',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: index === 0 ? '40px 48px 40px 80px' : index === 2 ? '40px 80px 40px 48px' : '40px 48px',
                minHeight: '272px',
                boxSizing: 'border-box',
                gap: '24px',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '72px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.45)',
                  margin: 0,
                  maxWidth: '260px',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
