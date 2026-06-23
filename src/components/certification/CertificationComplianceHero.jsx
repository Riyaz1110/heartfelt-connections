import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CertificationComplianceHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* ════════════════════ DESKTOP VIEW (1440x720) ════════════════════ */}
      {!isMobile && (
        <section
          style={{
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            height: '720px',
            position: 'relative',
            overflow: 'hidden',
            background: '#030407',
            boxSizing: 'border-box',
            backgroundImage: "url('/images/certification/certification-hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(3,4,7,0.85) 40%, rgba(3,4,7,0.3) 100%)',
            zIndex: 1,
          }} />

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            paddingLeft: '105px',
            paddingTop: '180px',
            maxWidth: '800px',
            boxSizing: 'border-box',
          }}>
            {/* COMPLIANCE & ATTESTATIONS tag - WITH PLAYBOOK ICON */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #444444',
              padding: '10px 11px',
              marginBottom: '24px',
            }}>
              <img
                src="/icons/playbook-icon.png"
                alt=""
                style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:14px;font-weight:700;line-height:1">›</span>'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
              }}>
                COMPLIANCE & ATTESTATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontFamily: "Cabinet Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: '62px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0 0 24px 0',
              maxWidth: '746px',
            }}>
              Prove your security.<br />Accelerate your pipeline.
            </h1>

            {/* Description */}
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
              maxWidth: '642px',
            }}>
              Organizations want proof, not promises. Auriseg helps you navigate complex regulations like SOC 2 and ISO 27001, ensuring audit readiness to drive your sales pipeline.
            </p>
          </div>
        </section>
      )}

      {/* ════════════════════ MOBILE VIEW (375x650) - CONTENT TOP ALIGNED ════════════════════ */}
      {isMobile && (
        <section
          style={{
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            height: '650px',
            position: 'relative',
            overflow: 'hidden',
            background: '#030407',
            boxSizing: 'border-box',
            backgroundImage: "url('/images/certification/certification-hero-bg-mobile.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(3,4,7,0.65)',
            zIndex: 1,
          }} />

          {/* ✅ FIXED: Content - TOP ALIGNED (not centered) */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',  // Changed from 'center' to 'flex-start'
            height: '100%',
            padding: '60px 24px 0 24px',  // Top padding only, no bottom padding
            textAlign: 'center',
            boxSizing: 'border-box',
          }}>
            {/* COMPLIANCE & ATTESTATIONS tag - WITH PLAYBOOK ICON */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5.18px',
              border: '0.52px solid #444444',
              padding: '5.18px 5.7px',
              marginBottom: '20px',
            }}>
              <img
                src="/icons/playbook-icon.png"
                alt=""
                style={{ width: '10px', height: '10px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:10px;font-weight:700;line-height:1">›</span>'; }}
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
                COMPLIANCE & ATTESTATIONS
              </span>
            </div>

            {/* Main Heading - Mobile - Center Aligned */}
            <h1 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '38px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              maxWidth: '324px',
              textAlign: 'center',
            }}>
              Prove your security.<br />Accelerate your pipeline.
            </h1>

            {/* Description - Mobile - Center Aligned */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: 0,
              maxWidth: '282px',
            }}>
              Organizations want proof, not promises. Auriseg helps you navigate complex regulations like SOC 2 and ISO 27001, ensuring audit readiness to drive your sales pipeline.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default CertificationComplianceHero;
