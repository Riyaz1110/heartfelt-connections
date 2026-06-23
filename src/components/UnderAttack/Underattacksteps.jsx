import React, { useState, useEffect } from 'react';

const UnderAttackSteps = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'RECEIVE',
      description: 'We Receive Your Alert',
      icon: '/icons/UnderAttack/receive-icon.png',
    },
    {
      id: 2,
      number: '02',
      title: 'CONTACT',
      description: 'Analyst Contacts You',
      icon: '/icons/UnderAttack/contact-icon.png',
    },
    {
      id: 3,
      number: '03',
      title: 'TRIAGE',
      description: 'Remote Triage Begins',
      icon: '/icons/UnderAttack/triage-icon.png',
    },
    {
      id: 4,
      number: '04',
      title: 'CONTAIN',
      description: 'Containment & Response',
      icon: '/icons/UnderAttack/contain-icon.png',
    },
  ];

  // ─── DESKTOP Card ─────────────────────────────────────────────
  const DesktopCard = ({ step, isLast, index }) => (
    <div
      style={{
        position: 'relative',
        flex: 1,
        minHeight: '200px',
        background: '#000000',
        boxSizing: 'border-box',
        padding: `48px 40px 48px ${index === 0 ? '80px' : '40px'}`,
        borderRight: isLast ? 'none' : '1px solid #1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h3
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '120%',
          letterSpacing: '-0.01em',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {step.number} — {step.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '1.5',
          color: '#6B7280',
          margin: '0',
        }}
      >
        {step.description}
      </p>
    </div>
  );

  // ─── MOBILE Card ──────────────────────────────────────────────
  const MobileCard = ({ step, isLast }) => (
    <div
      style={{
        position: 'relative',
        background: '#000000',
        boxSizing: 'border-box',
        padding: '32px 24px',
        borderBottom: isLast ? 'none' : '1px solid #1A1A1A',
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '32px',
      }}
    >
      <h3
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '120%',
          letterSpacing: '-0.01em',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {step.number} — {step.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '1.5',
          color: '#6B7280',
          margin: 0,
        }}
      >
        {step.description}
      </p>
    </div>
  );

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section
        style={{
          width: '100%',
          background: '#000000',
          boxSizing: 'border-box',
        }}
      >
        {/* Heading container */}
        <div style={{ textAlign: 'center', padding: '48px 40px 32px 40px', width: '100%' }}>
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#FF5536',
              margin: 0,
            }}
          >
            Simple 4-Step Onboarding Process:
          </h2>
        </div>

        {/* Full-width borders and grid, no side padding */}
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              borderTop: '1px solid #1A1A1A',
              borderBottom: '1px solid #1A1A1A',
              boxSizing: 'border-box',
            }}
          >
            {steps.map((step, index) => (
              <DesktopCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
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
        margin: '0 auto',
        background: '#000000',
        boxSizing: 'border-box',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', padding: '36px 24px 24px 24px' }}>
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#FF5536',
            margin: 0,
          }}
        >
          Simple 4-Step Onboarding Process:
        </h2>
      </div>

      {/* Cards — single column */}
      <div
        style={{
          borderTop: '1px solid #1A1A1A',
          borderBottom: '1px solid #1A1A1A',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {steps.map((step, index) => (
          <MobileCard
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default UnderAttackSteps;
