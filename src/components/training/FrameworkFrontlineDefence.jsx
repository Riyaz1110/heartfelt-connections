import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FrameworkFrontlineDefence = () => {
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
      title: 'Active Learning',
      description: 'Embedded checkpoints enforce retention throughout every module. Knowledge is proven not assumed.',
      icon: '/icons/Frame/active-learning-icon.png',
    },
    {
      id: 2,
      title: 'Dedicated Support',
      description: 'Active instructor support prevents dead ends. Resolve lateral movement scenarios immediately with practitioners.',
      icon: '/icons/Frame/dedicated-support-icon.png',
    },
    {
      id: 3,
      title: 'Hands-on Virtual Labs',
      description: 'Fully configured environments load live malware samples and modern intrusion scenarios. Knowledge becomes reflex.',
      icon: '/icons/Frame/virtual-labs-icon.png',
    },
    {
      id: 4,
      title: 'Structured Pathways',
      description: 'Modular frameworks map foundational threat analysis directly to advanced red and blue team operations. Progress is logical. Gaps are eliminated.',
      icon: '/icons/Frame/structured-pathways-icon.png',
    },
  ];

  const FrameworkCard = ({ card }) => (
    <div
      style={{
        width: isMobile ? '342px' : '100%',
        height: isMobile ? '220px' : 'auto',
        minHeight: isMobile ? 'auto' : '245px',
        background: '#F7F7F7',
        position: 'relative',
        boxSizing: 'border-box',
        padding: isMobile ? '20px 16px' : '24px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      {isMobile ? (
        <>
          <div style={{ position: 'absolute', top: '25px', left: '20px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={card.icon} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '26px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#13284C', margin: '48px 0 12px 0' }}>
            {card.title}
          </h3>
        </>
      ) : (
        <>
          <div style={{ width: '45px', height: '45px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={card.icon} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '26px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#13284C', margin: '0 0 12px 0' }}>
            {card.title}
          </h3>
        </>
      )}
      <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: isMobile ? 500 : 400, fontSize: isMobile ? '12px' : '15px', lineHeight: isMobile ? '100%' : '22px', letterSpacing: isMobile ? '0%' : '-0.02em', color: isMobile ? '#606060' : '#575759', margin: 0 }}>
        {card.description}
      </p>
    </div>
  );

  return (
    /* Full-width white wrapper to prevent dark page background bleeding on sides */
    <div style={{ width: '100%', background: '#FFFFFF' }}>

      {/* ════════════════════ DESKTOP VIEW ════════════════════ */}
      {!isMobile && (
        <section
          style={{
            width: '100%',
            minHeight: '795px',
            margin: '0 auto',
            background: '#FFFFFF',
            boxSizing: 'border-box',
            padding: '80px 100px 100px 100px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#030407',
              maxWidth: '700px',
              textAlign: 'center',
              margin: '0 auto 48px auto',
            }}
          >
            Framework for frontline defence.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              maxWidth: '1240px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            {cards.map((card) => (
              <FrameworkCard key={card.id} card={card} />
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════ MOBILE VIEW ════════════════════ */}
      {isMobile && (
        <section
          style={{
            width: '100%',
            margin: '0 auto',
            background: '#FFFFFF',
            boxSizing: 'border-box',
            padding: '48px 16px 60px 16px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#030407',
              margin: '0 auto 32px auto',
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            Framework for frontline defence.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {cards.map((card) => (
              <FrameworkCard key={card.id} card={card} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default FrameworkFrontlineDefence;
