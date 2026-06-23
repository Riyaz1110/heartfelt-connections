import React, { useState, useEffect } from 'react';

const DefendFrontlineIntelligence = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cards = [
    {
      id: 1,
      title: 'Hands-on training',
      description:
        'Textbooks do not stop breaches. Direct lab interaction builds operational muscle memory.',
      icon: '/icons/Defend/hands-on-training-icon.png',
    },
    {
      id: 2,
      title: 'Real life cases',
      description:
        'Frontline incident response drives the curriculum. Study exactly what attackers executed last quarter.',
      icon: '/icons/Defend/real-life-cases-icon.png',
    },
    {
      id: 3,
      title: 'Up to date knowledge',
      description:
        'Malware-free intrusions account for the majority of breaches. Training updates in real time based on active SOC telemetry and proprietary threat intelligence.',
      icon: '/icons/Defend/up-to-date-knowledge-icon.png',
    },
    {
      id: 4,
      title: 'Highly practical',
      description:
        'Lab techniques map directly to your environment. Deploy new defenses against your network within 24 hours.',
      icon: '/icons/Defend/highly-practical-icon.png',
    },
    {
      id: 5,
      title: 'Expert leadership',
      description:
        'Active analysts and incident responders teach the modules. They see the threat. They prepare your team.',
      icon: '/icons/Defend/expert-leadership-icon.png',
    },
  ];

  // ─── Orange T intersection marker ─────────────────────────────
  // Renders a ⊤ shape: horizontal bar + vertical stem, centered on the intersection point.
  // `position` = 'top' | 'bottom' controls which border the T sits on.
  // At top border: stem points DOWN  (⊤)
  // At bottom border: stem points UP (⊥, i.e. rotated 180°)
  const TMarker = ({ leftPercent, position }) => {
    const barW = 18;   // px — matches Figma width
    const barH = 1;    // px — border thickness
    const stemW = 1;   // px
    const stemH = 8.5; // px — matches Figma height minus bar

    const isTop = position === 'top';

    return (
      <div
        style={{
          position: 'absolute',
          left: `calc(${leftPercent} - ${barW / 2}px)`,
          // sit exactly on the border line
          top: isTop ? '-0.25px' : 'auto',
          bottom: isTop ? 'auto' : '-0.25px',
          width: `${barW}px`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          // flip for bottom position so stem points upward
          transform: isTop ? 'none' : 'rotate(180deg)',
        }}
      >
        {/* Horizontal bar */}
        <div style={{ width: `${barW}px`, height: `${barH}px`, background: '#FF5536' }} />
        {/* Vertical stem */}
        <div style={{ width: `${stemW}px`, height: `${stemH}px`, background: '#FF5536' }} />
      </div>
    );
  };

  // ─── DESKTOP Card ─────────────────────────────────────────────
  const DesktopCard = ({ card, borderLeft }) => (
    <div
      style={{
        position: 'relative',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        padding: '32px 32px 0px 32px',
        borderLeft: borderLeft
          ? '0.5px solid var(--Neutral-600-5D5D5D, #5D5D5D)'
          : 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '274px',
        overflow: 'hidden',
      }}
    >
      <h3
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '26px',
          lineHeight: '120%',
          letterSpacing: '-0.01em',
          color: 'var(--Blue-2-500, #13284C)',
          margin: '0 0 14px 0',
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.6',
          letterSpacing: '-0.01em',
          color: '#575759',
          margin: 0,
          maxWidth: '75%',
        }}
      >
        {card.description}
      </p>

      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '24px',
          width: '110px',
          height: '110px',
          opacity: 0.8,
          backgroundImage: `url(${card.icon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
        }}
      />
    </div>
  );

  // ─── MOBILE Card ──────────────────────────────────────────────
  const MobileCard = ({ card, isFirst }) => (
    <div
      style={{
        position: 'relative',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        padding: '28px 20px 0px 20px',
        borderTop: isFirst
          ? 'none'
          : '0.5px solid var(--Neutral-600-5D5D5D, #5D5D5D)',
        overflow: 'hidden',
        minHeight: '170px',
      }}
    >
      <h3
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '17px',
          lineHeight: '120%',
          letterSpacing: '-0.01em',
          color: 'var(--Blue-2-500, #13284C)',
          margin: '0 0 10px 0',
          textAlign: 'left',
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '160%',
          letterSpacing: '-0.01em',
          color: '#575759',
          margin: 0,
          maxWidth: '70%',
          paddingBottom: '100px',
        }}
      >
        {card.description}
      </p>

      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '16px',
          width: '90px',
          height: '90px',
          opacity: 0.8,
          backgroundImage: `url(${card.icon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
        }}
      />
    </div>
  );

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section style={{ width: '100%', background: '#FFFFFF', boxSizing: 'border-box' }}>
        {/* Heading */}
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px 80px 48px 80px',
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
              color: '#030407',
              margin: 0,
              textAlign: 'left',
            }}
          >
            Defend with frontline intelligence.
          </h2>
        </div>

        {/* ── Top row: 3 cards ──────────────────────────────────────
            Dividers fall at 33.333% and 66.666% of row width.
            T markers at each divider × top & bottom borders = 4 markers.
        ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '100%',
            borderTop: '0.5px solid #5D5D5D',
            borderBottom: '0.5px solid #5D5D5D',
            boxSizing: 'border-box',
          }}
        >
          {cards.slice(0, 3).map((card, index) => (
            <DesktopCard key={card.id} card={card} borderLeft={index !== 0} />
          ))}

          {/* Intersection markers for top row */}
          {/* Top border intersections (stem points down) */}
          <TMarker leftPercent="33.333%" position="top" />
          <TMarker leftPercent="66.666%" position="top" />
          {/* Bottom border intersections (stem points up) */}
          <TMarker leftPercent="33.333%" position="bottom" />
          <TMarker leftPercent="66.666%" position="bottom" />
        </div>

        {/* ── Bottom row: 2 cards ───────────────────────────────────
            Divider falls at 50% of row width.
            T markers at top border (shared with row above bottom) & bottom border.
        ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '100%',
            borderBottom: '0.5px solid #5D5D5D',
            boxSizing: 'border-box',
          }}
        >
          {cards.slice(3).map((card, index) => (
            <DesktopCard key={card.id} card={card} borderLeft={index !== 0} />
          ))}

          {/* Intersection markers for bottom row */}
          <TMarker leftPercent="50%" position="top" />
          <TMarker leftPercent="50%" position="bottom" />
        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <section style={{ width: '100%', background: '#FFFFFF', boxSizing: 'border-box' }}>
      <div
        style={{
          maxWidth: '375px',
          margin: '0 auto',
          padding: '48px 20px 60px 20px',
          boxSizing: 'border-box',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#030407',
            margin: '0 0 32px 0',
            textAlign: 'center',
          }}
        >
          Defend with frontline intelligence.
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '0.5px solid #5D5D5D',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          {cards.map((card, index) => (
            <MobileCard key={card.id} card={card} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefendFrontlineIntelligence;
