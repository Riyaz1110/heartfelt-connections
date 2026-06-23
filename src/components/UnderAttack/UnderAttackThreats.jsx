import React, { useState, useEffect } from 'react';

const UnderAttackThreats = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const threats = [
    {
      id: 1,
      title: 'Ransomware',
      description: "We've handled hundreds of ransomware incidents including LockBit, BlackCat, and Cl0p variants.",
      icon: '/icons/UnderAttack/ransomware-icon.png',
    },
    {
      id: 2,
      title: 'APT Intrusions',
      description: 'Nation-state and advanced persistent threat actors operate inside your network for weeks before detection. We find and remove them.',
      icon: '/icons/UnderAttack/apt-icon.png',
    },
    {
      id: 3,
      title: 'Malware Outbreak',
      description: 'Wiper malware, banking trojans, and remote access tools spread. We contain and remove all traces.',
      icon: '/icons/UnderAttack/malware-icon.png',
    },
    {
      id: 4,
      title: 'Unknown Incident',
      description: 'Something is wrong but unclear. We investigate anomalous behavior, system changes, and suspicious logins to determine the threat.',
      icon: '/icons/UnderAttack/unknown-icon.png',
    },
  ];

  // ─── Corner Brackets ──────────────────────────────────────────
  const CornerBrackets = () => (
    <>
      <span style={{ position: 'absolute', top: -2, left: -2, width: 20, height: 20, borderTop: '2px solid #FF5536', borderLeft: '2px solid #FF5536', zIndex: 2 }} />
      <span style={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderTop: '2px solid #FF5536', borderRight: '2px solid #FF5536', zIndex: 2 }} />
      <span style={{ position: 'absolute', bottom: -2, left: -2, width: 20, height: 20, borderBottom: '2px solid #FF5536', borderLeft: '2px solid #FF5536', zIndex: 2 }} />
      <span style={{ position: 'absolute', bottom: -2, right: -2, width: 20, height: 20, borderBottom: '2px solid #FF5536', borderRight: '2px solid #FF5536', zIndex: 2 }} />
    </>
  );

  // ─── DESKTOP Card ─────────────────────────────────────────────
  const DesktopCard = ({ threat }) => (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '32px 28px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: '#FFFFFF',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={threat.icon}
            alt={threat.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
        <h3 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '-0.02em',
          color: '#13284C',
          margin: 0,
        }}>
          {threat.title}
        </h3>
      </div>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '1.65',
        letterSpacing: '-0.01em',
        color: '#606060',
        margin: 0,
      }}>
        {threat.description}
      </p>
    </div>
  );

  // ─── MOBILE Card ──────────────────────────────────────────────
  const MobileCard = ({ threat }) => (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '28px 20px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        background: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <div style={{ width: '40px', height: '40px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={threat.icon}
          alt={threat.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
      <h3 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: '22px',
        lineHeight: '100%',
        letterSpacing: '-0.02em',
        color: '#13284C',
        margin: 0,
      }}>
        {threat.title}
      </h3>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '1.65',
        letterSpacing: '-0.01em',
        color: '#575759',
        margin: 0,
      }}>
        {threat.description}
      </p>
    </div>
  );

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section style={{ width: '100%', background: '#FFFFFF', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 100px', boxSizing: 'border-box' }}>

          {/* Tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #e5e7eb', padding: '6px 10px', marginBottom: '24px' }}>
            <img
              src="/icons/playbook-icon.png"
              alt=""
              style={{ width: '11px', height: '11px', objectFit: 'contain', flexShrink: 0 }}
              onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:11px;font-weight:500">›</span>'; }}
            />
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '100%',
              letterSpacing: '0.06em',
              color: '#FF5536',
              textTransform: 'uppercase',
            }}>
              WHAT WE RESPOND TO
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '44px',
            lineHeight: '110%',
            letterSpacing: '-0.03em',
            color: '#030407',
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            We've Seen Every Attack.<br />We Know How to Stop Them.
          </h2>

          {/* Outer bracket wrapper */}
          <div style={{ position: 'relative', padding: '2px' }}>
            <CornerBrackets />

            {/* 2×2 Grid — each card has its own border, gap between them */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              boxSizing: 'border-box',
            }}>
              {threats.map(threat => (
                <DesktopCard key={threat.id} threat={threat} />
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <section style={{ width: '100%', maxWidth: '375px', margin: '0 auto', background: '#FFFFFF', boxSizing: 'border-box', padding: '48px 20px 56px 20px' }}>

      {/* Tag */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #e5e7eb', padding: '5px 9px' }}>
          <img
            src="/icons/playbook-icon.png"
            alt=""
            style={{ width: '10px', height: '10px', objectFit: 'contain', flexShrink: 0 }}
            onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:10px;font-weight:500">›</span>'; }}
          />
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '100%',
            letterSpacing: '0.06em',
            color: '#FF5536',
            textTransform: 'uppercase',
          }}>
            WHAT WE RESPOND TO
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: '28px',
        lineHeight: '115%',
        letterSpacing: '-0.02em',
        color: '#030407',
        margin: '0 0 32px 0',
        textAlign: 'center',
      }}>
        We've Seen Every Attack. We Know How to Stop Them.
      </h2>

      {/* Outer bracket wrapper */}
      <div style={{ position: 'relative', padding: '2px' }}>
        <CornerBrackets />

        {/* Each card has its own border, gap between them */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', boxSizing: 'border-box' }}>
          {threats.map(threat => (
            <MobileCard key={threat.id} threat={threat} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default UnderAttackThreats;
