import React, { useState, useEffect } from 'react';

const OFFICES = [
  {
    id: 1,
    city: 'Chennai - Head Quarters',
    address: '3th floor, Workez, 210 feet MMRD Road, Zamin Pallavaram, Chennai – 600 043 Tamilnadu, India\n\nNo 17/22 Valliammal Street, Vijayalakshmi Nagar, Chromput, Chennai – 600 044',
    img: '/images/offices/chennai-landmark.png',
    span: false,
  },
  {
    id: 2,
    city: 'Bengaluru',
    address: 'Prestige, Atlanta, 80 Feet Road, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka.',
    img: '/images/offices/bengaluru-landmark.png',
    span: false,
  },
  {
    id: 3,
    city: 'Mumbai',
    address: 'NESCO IT Park, Building 4, North Wing, Western Express Hwy, Goregaon, Mumbai, Maharashtra.',
    img: '/images/offices/mumbai-landmark.png',
    span: false,
  },
  {
    id: 4,
    city: 'United States of America',
    address: 'Auriseg INC, 5900 Balcones Drive, Suite 20634 Austin, TX 78731',
    img: '/images/offices/usa-landmark.png',
    span: false,
  },
  {
    id: 5,
    city: 'Sydney',
    address: '123 Sample St, Sydney NSW 2000 AU',
    img: '/images/offices/sydney-landmark.png',
    span: true,
  },
];

/* ── WHERE WE WORK TAG ─────────────────────────────────────────────────────── */
const WhereTag = ({ isMobile }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    gap: isMobile ? '5.18px' : '10px',
    border: isMobile ? '0.52px solid #444444' : '1px solid #ADADAD',
    padding: isMobile ? '5.18px 5.7px' : '10px 11px',
    marginBottom: isMobile ? '14px' : '24px',
  }}>
    <img
      src="/icons/playbook-icon.png"
      alt=""
      style={{
        width: isMobile ? '11px' : '14px',
        height: isMobile ? '11px' : '14px',
        objectFit: 'contain', flexShrink: 0,
      }}
      onError={e => { e.target.outerHTML = `<span style="color:#FF5536;font-size:${isMobile ? '11' : '14'}px;font-weight:700;line-height:1">›</span>`; }}
    />
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: isMobile ? 500 : 400,
      fontSize: isMobile ? '12px' : '16px',
      lineHeight: isMobile ? '12px' : '100%',
      letterSpacing: isMobile ? '-0.02em' : '-0.04em',
      color: '#FFFFFF',
      textTransform: 'uppercase',
    }}>
      WHERE WE WORK
    </span>
  </div>
);

/* ── OFFICE CARD ───────────────────────────────────────────────────────────── */
const OfficeCard = ({ office, isMobile, extraStyle }) => (
  <div style={{
    position: 'relative',
    background: '#161616',
    border: isMobile ? '0.5px solid #696969' : '1px solid #444444',
    overflow: 'hidden',
    width: isMobile ? '341px' : '573px',
    height: isMobile ? '160px' : '150px',
    maxWidth: '100%',
    padding: isMobile ? '16.5px 17px' : '12.5px 34px',
    boxSizing: 'border-box',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'flex-start',
    ...extraStyle,
  }}>
    {/* City name */}
    <h3 style={{
      fontFamily: "'Cabinet Grotesk', sans-serif",
      fontWeight: 500,
      fontSize: isMobile ? '16px' : '18px',
      lineHeight: '150%',
      letterSpacing: '0%',
      color: '#FFFFFF',
      margin: '0 0 6px 0',
      position: 'relative', zIndex: 2,
      maxWidth: '60%',
    }}>
      {office.city}
    </h3>

    {/* Address */}
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: isMobile ? '12px' : '14px',
      lineHeight: '150%',
      letterSpacing: '0%',
      color: '#ADADAD', /* Fixed to grey on desktop too */
      margin: 0,
      whiteSpace: 'pre-line',
      position: 'relative', zIndex: 2,
      maxWidth: '60%',
    }}>
      {office.address}
    </p>

    {/* Landmark image — bottom-right corner, partially cut off */}
    <div style={{
      position: 'absolute',
      bottom: '-15px',
      right: '-15px',
      width: isMobile ? '120px' : '160px',
      height: isMobile ? '120px' : '160px', /* Slightly larger to match figma scale */
      zIndex: 1,
      opacity: 0.85, /* Massively increased opacity */
      pointerEvents: 'none',
    }}>
      <img
        src={office.img}
        alt={office.city}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
    </div>
  </div>
);

/* ── MAIN ──────────────────────────────────────────────────────────────────── */
const CareerOffices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          background: '#0A0A0A',
          boxSizing: 'border-box',
          padding: '64px 100px 72px',
        }}
      >
        {/* WHERE WE WORK tag */}
        <WhereTag isMobile={false} />

        {/* Heading row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '60px',
          marginBottom: '48px',
        }}>
          {/* Heading — bolder and larger matching Arsenal */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700, fontSize: '48px',
            lineHeight: '110%', letterSpacing: '0%',
            color: '#FFFFFF', margin: 0, flexShrink: 0,
          }}>
            5 Offices.<br />One Global Defense Operation.
          </h2>

          {/* Description — Inter 16px, #8A8A8A */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400, fontSize: '16px',
            lineHeight: '24px', letterSpacing: '-0.02em',
            color: '#8A8A8A',
            margin: 0, maxWidth: '454px', paddingTop: '8px',
          }}>
            Every Auriseg office operates as part of a single, unified security apparatus, shared threat intelligence, shared mission.
          </p>
        </div>

        {/* 2-col grid — all 5 offices, same size 573×150 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}>
          {OFFICES.map(office => (
            <OfficeCard key={office.id} office={office} isMobile={false}
              extraStyle={{ width: '100%', height: '150px' }} />
          ))}
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          margin: '0 auto',
          background: '#0A0A0A',
          boxSizing: 'border-box',
          padding: '40px 16px 48px',
        }}
      >
        {/* WHERE WE WORK tag */}
        <WhereTag isMobile={true} />

        {/* Heading — 28px, 500 weight, 30px line-height, -2% letter-spacing */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '28px',
          lineHeight: '30px', letterSpacing: '-0.02em',
          color: '#FFFFFF', margin: '0 0 12px 0',
        }}>
          5 Offices. One Global Defense Operation.
        </h2>

        {/* Description — Inter 14px, #8A8A8A */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '14px',
          lineHeight: '100%', letterSpacing: '-0.02em',
          color: '#8A8A8A', margin: '0 0 28px 0',
          maxWidth: '300px',
        }}>
          Every Auriseg office operates as part of a single, unified security apparatus, shared threat intelligence, shared mission.
        </p>

        {/* All 5 cards stacked — each 341×160 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {OFFICES.map(office => (
            <OfficeCard key={office.id} office={office} isMobile={true}
              extraStyle={{ width: '100%', height: '160px' }} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerOffices;
