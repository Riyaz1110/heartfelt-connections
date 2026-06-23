import React from 'react';

const CaseStudyHero = () => {
  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  (min-width: 1024px) - Only ONE Background Image
      ══════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <section
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            height: '471px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {/* Desktop Full Background Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <img
              src="/images/success-stories/case-study-hero-bg.jpg"
              alt="Background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #030407 0%, rgba(3,4,7,0.5) 60%, transparent 100%)',
                zIndex: 1,
              }}
            />
          </div>

          {/* Left content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '0 0 0 56px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '680px',
            }}
          >
            {/* Tag pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #444444',
                padding: '10px 11px',
                width: 'fit-content',
                boxSizing: 'border-box',
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{ width: '8px', height: '11.2px', flexShrink: 0 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                Cloud-Native Fortress
              </span>
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '52px',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '919px',
              }}
            >
              Unified Security Across Modern Infrastructure
            </h1>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE - NO SPACES, FULL WIDTH
      ══════════════════════════════════════════ */}
      <div className="lg:hidden">
        <section
          style={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            background: '#030407',
          }}
        >
          {/* Mobile Background Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '100vh',
            }}
          >
            <img
              src="/images/success-stories/case-study-hero-mobile-bg.jpg"
              alt="Background"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 0,
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />

            {/* Content overlay on background */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100vh',
                padding: '60px 0 0 0',
              }}
            >
              {/* Top text content - Centered */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  width: '100%',
                  padding: '0 20px',
                  textAlign: 'center',
                }}
              >
                {/* Tag pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    border: '0.5px solid rgba(255,255,255,0.3)',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}
                >
                  <img
                    src="/icons/playbook-icon.png"
                    alt="icon"
                    style={{ width: '6px', height: '8.4px' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 500,
                      fontSize: '11px',
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    Cloud-Native Fortress
                  </span>
                </div>

                {/* Main heading - NO MAX WIDTH LIMIT */}
                <h1
                  style={{
                    fontFamily: "'Cabinet Grotesk', 'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '32px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    margin: 0,
                    padding: '0 20px',
                    maxWidth: '919px'
                  }}
                >
                  Unified Security Across Modern Infrastructure
                </h1>
              </div>

              {/* Bottom Image - Full width, no margins */}
              <div
                style={{
                  width: '100%',
                  marginTop: 'auto',
                }}
              >
                <img
                  src="/images/success-stories/case-study-hero-mobile.jpg"
                  alt="Case study hero"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyHero;
