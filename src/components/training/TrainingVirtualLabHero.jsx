import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TrainingVirtualLabHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    /* Full-width wrapper to prevent dark page background bleeding on sides */
    <div style={{ width: '100%', background: '#030407' }}>

      {/* ════════════════════ DESKTOP VIEW ════════════════════ */}
      {!isMobile && (
        <section
          style={{
            width: '100%',
            height: '720px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            background: '#030407',
            boxSizing: 'border-box',
          }}
        >
          {/* Background Image - Full width */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <img
              src="/images/training/training-hero-bg.jpg"
              alt="Training Background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(3,4,7,0.85) 40%, rgba(3,4,7,0.3) 100%)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              paddingLeft: '105px',
              paddingTop: '180px',
              maxWidth: '700px',
              boxSizing: 'border-box',
            }}
          >
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #444444',
                padding: '10px 11px',
                marginBottom: '24px',
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt=""
                style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:14px;font-weight:700;line-height:1">›</span>'; }}
              />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                TRAINING & VIRTUAL LAB
              </span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '62px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: '0 0 24px 0',
                maxWidth: '573px',
              }}
            >
              Outpace attackers.<br />Train in the breach.
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.02em',
                color: '#8A8A8A',
                margin: '0 0 32px 0',
                maxWidth: '574px',
              }}
            >
              Auriseg virtual labs replicate live production environments, beyond sandboxed theory. Hunt active intrusions and build incident response muscle memory before real attacks test your network.
            </p>

            {/* CTA Button */}
            {/* <Link
              to="/training/labs"
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
                padding: '16px 32px',
                borderRadius: '5px',
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
              Explore the Labs →
            </Link> */}
          </div>
        </section>
      )}

      {/* ════════════════════ MOBILE VIEW ════════════════════ */}
      {isMobile && (
        <section
          style={{
            width: '100%',
            height: '593px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            background: '#030407',
            boxSizing: 'border-box',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <img
              src="/images/training/training-hero-bg-mobile.jpg"
              alt="Training Background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(3,4,7,0.7)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '100%',
              padding: '80px 24px 0 24px',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Tag - Mobile */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5.18px',
                border: '0.52px solid #444444',
                padding: '5.18px 5.7px',
                marginBottom: '20px',
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt=""
                style={{ width: '10px', height: '10px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:10px;font-weight:700;line-height:1">›</span>'; }}
              />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '12px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                TRAINING & VIRTUAL LAB
              </span>
            </div>

            {/* Main Heading - Mobile */}
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '35px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: '0 0 16px 0',
                maxWidth: '324px',
                textAlign: 'center',
              }}
            >
              Outpace attackers.<br />Train in the breach.
            </h1>

            {/* Description - Mobile */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: '#FFFFFF',
                margin: '0 0 28px 0',
                maxWidth: '282px',
              }}
            >
              Auriseg virtual labs replicate live production environments, beyond sandboxed theory. Hunt active intrusions and build incident response muscle memory before real attacks test your network.
            </p>

            {/* CTA Button - Mobile */}
            {/* <Link
              to="/training/labs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: '#FF5536',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                padding: '16px 32px',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Explore the Labs →
            </Link> */}
          </div>
        </section>
      )}

    </div>
  );
};

export default TrainingVirtualLabHero;
