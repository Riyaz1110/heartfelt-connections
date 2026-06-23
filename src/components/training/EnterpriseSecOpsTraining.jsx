import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnterpriseSecOpsTraining = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section
        style={{
          width: '100%',
          height: '560px',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d0d0f',
          boxSizing: 'border-box',
        }}
      >
        {/* Background Image */}
        <img
          src="/images/training/enterprise-secops-bg.jpg"
          alt="Enterprise SecOps Training"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0,
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5,5,8,0.25) 0%, rgba(5,5,8,0.75) 60%, rgba(5,5,8,0.92) 100%)',
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
            justifyContent: 'flex-end',
            height: '100%',
            padding: '0 100px 32px 100px',
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '40px',
              lineHeight: '108%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0 0 20px 0',
            }}
          >
            Enterprise SecOps training. Deployed at scale.
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '1.65',
              letterSpacing: '-0.01em',
              color: '#ADADAD',
              margin: '0 0 32px 0',
              maxWidth: '620px',
            }}
          >
            The cybersecurity talent shortage accelerates. Adversaries move faster. Auriseg delivers cohort-based programs for security operations teams requiring effective threat detection and rapid incident mitigation. Operationalize advanced lateral movement containment immediately.
          </p>

          {/* <Link
            to="/training/enterprise"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#FF5536',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '100%',
              letterSpacing: '-0.01em',
              padding: '14px 28px',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background 0.25s ease, transform 0.25s ease',
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
            Plan a Collaborative Discovery →
          </Link> */}
        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '375px',
        height: '622px',
        margin: '0 auto',
        position: 'relative',
        background: 'var(--Black-200-030407, #030407)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '260px',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/training/enterprise-secops-bg-mobile.jpg"
          alt="Enterprise SecOps Training"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '80px',
            background:
              'linear-gradient(180deg, rgba(3,4,7,0) 0%, rgba(3,4,7,1) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          background: 'var(--Black-200-030407, #030407)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '16px 24px 24px 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '28px',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: '0 0 16px 0',
          }}
        >
          Enterprise SecOps training. Deployed at scale.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
            color: '#ADADAD',
            margin: '0 0 28px 0',
          }}
        >
          The cybersecurity talent shortage accelerates. Adversaries move faster. Auriseg delivers cohort-based programs for security operations teams requiring effective threat detection and rapid incident mitigation. Operationalize advanced lateral movement containment immediately.
        </p>

        {/* <Link
          to="/training/enterprise"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FF5536',
            color: '#FFFFFF',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '100%',
            letterSpacing: '-0.01em',
            padding: '12px 22px',
            borderRadius: '5px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Plan a Collaborative Discovery →
        </Link> */}
      </div>
    </section>
  );
};

export default EnterpriseSecOpsTraining;
