import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CloseComplianceGaps = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    /* Full-width white wrapper — overrides any dark page/body background */
    <div style={{ width: '100%', background: '#FFFFFF' }}>

      {/* ════════════════════ DESKTOP VIEW ════════════════════ */}
      {!isMobile && (
        <section
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '59px 101px',
            boxSizing: 'border-box',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '340px',
              position: 'relative',
              borderRadius: '9.07px',
              overflow: 'hidden',
              backgroundImage: "url('/images/certification/compliance-badge.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                padding: '0 40px',
                boxSizing: 'border-box',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '110%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 16px 0',
                  maxWidth: '700px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Close compliance gaps instantly.
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 28px 0',
                  maxWidth: '550px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                Regulatory enforcement ignores operational constraints. Map your current posture to target frameworks and build a definitive path to audit readiness.
              </p>

              <Link
                to="/talk-to-experts"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#FF5536',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e04a2d';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FF5536';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Talk to Experts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════ MOBILE VIEW ════════════════════ */}
      {isMobile && (
        <section
          style={{
            width: '100%',
            maxWidth: '375px',
            margin: '0 auto',
            padding: '16px',
            boxSizing: 'border-box',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '327px',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: "url('/images/certification/compliance-badgem.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                padding: '0 20px',
                boxSizing: 'border-box',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 12px 0',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Close compliance gaps instantly.
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '11px',
                  lineHeight: '16px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 20px 0',
                  maxWidth: '280px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                Regulatory enforcement ignores operational constraints. Map your current posture to target frameworks and build a definitive path to audit readiness.
              </p>

              <Link
                to="/talk-to-experts"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#FF5536',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Talk to Experts →
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default CloseComplianceGaps;
