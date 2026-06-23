import React, { useState, useEffect } from 'react';

const RegionalTollFree = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const regions = [
    {
      id: 1,
      name: 'Chennai – Head Quarters',
      numbers: ['+91 8940 94040', '+91 8940 94041'],
    },
    {
      id: 2,
      name: 'Bengaluru',
      numbers: ['+91 8940 94042', '+91 8940 94043'],
    },
    {
      id: 3,
      name: 'Mumbai',
      numbers: ['+91 8940 94044', '+91 8940 94045'],
    },
    {
      id: 4,
      name: 'United States of America',
      numbers: ['866-329-4255', '866-301-4243'],
    },
    {
      id: 5,
      name: 'Sydney',
      numbers: ['866-100-4221', '866-129-0055'],
    },
  ];

  // ─── Region Block ─────────────────────────────────────────────
  const RegionBlock = ({ region, isFirst }) => (
    <div
      style={{
        padding: isMobile ? '24px 0' : '32px 0',
        boxSizing: 'border-box',
      }}
    >


      {/* Region name — orange */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: isMobile ? '13px' : '24px',
        lineHeight: '100%',
        color: '#FF5536',
        margin: '0 0 12px 0',
      }}>
        {region.name}
      </p>

      {/* Thin line under region name only */}
      <div style={{
        width: '100%',
        height: '0.5px',
        background: 'rgba(255,255,255,0.15)',
        marginBottom: '20px',
      }} />

      {/* Phone numbers */}
      {region.numbers.map((num, i) => (
        <p key={i} style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: isMobile ? '18px' : '28px',
          lineHeight: '150%',
          letterSpacing: '-0.01em',
          color: '#FFFFFF',
          margin: 0,
        }}>
          {num}
        </p>
      ))}
    </div>
  );

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    const col1 = [regions[0], regions[2], regions[4]];
    const col2 = [regions[1], regions[3]];

    return (
      <section style={{ width: '100%', background: '#030407', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 100px', boxSizing: 'border-box' }}>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '41px',
            lineHeight: '110%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: '0 0 56px 0',
            maxWidth: '320px',
          }}>
            Regional Toll-Free Options
          </h2>

          {/* 2-column layout with vertical divider */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0px 58px', width: '100%' }}>

            {/* Column 1 */}
            <div>
              {col1.map((region, index) => (
                <RegionBlock
                  key={region.id}
                  region={region}
                  isFirst={index === 0}
                />
              ))}
            </div>

            {/* Vertical divider */}
            <div style={{ background: 'rgba(255,255,255,0.12)', width: '0px', alignSelf: 'stretch' }} />

            {/* Column 2 */}
            <div>
              {col2.map((region, index) => (
                <RegionBlock
                  key={region.id}
                  region={region}
                  isFirst={index === 0}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <section style={{
      width: '100%',
      maxWidth: '375px',
      margin: '0 auto',
      background: '#030407',
      boxSizing: 'border-box',
      padding: '48px 20px 56px 20px',
    }}>
      {/* Heading */}
      <h2 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: '26px',
        lineHeight: '115%',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        margin: '0 0 36px 0',
      }}>
        Regional Toll-Free Options
      </h2>

      {/* All regions stacked */}
      <div>
        {regions.map((region, index) => (
          <RegionBlock
            key={region.id}
            region={region}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default RegionalTollFree;
