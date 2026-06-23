import React, { useRef } from 'react';

const STATS = [
  { id: 'market', label: 'Service Market', value: '$96B', icon: '/images/About Us/bar-chart.png' },
  { id: 'verticals', label: 'Industry Verticals Served', value: '08+', icon: '/images/About Us/building.png' },
  { id: 'countries', label: 'Countries', value: '05', icon: '/images/About Us/stats/globe.png' },
  { id: 'founded', label: 'Year Founded', value: '2013', icon: '/images/About Us/calendar.png' },
  { id: 'empanelled', label: 'Empanelled', value: 'Cert - In', icon: '/images/About Us/shield-check.png' },
];

const EarthIcon = () => (
  <svg
    className="as-card-icon as-earth-svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
    <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
    <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const StatCard = ({ stat, extraClass = '', cardRef }) => (
  <div className={`as-card ${extraClass}`} ref={cardRef}>
    <span className="as-card-label">{stat.label}</span>
    <span className="as-card-value">{stat.value}</span>
    {stat.id === 'countries' ? (
      <EarthIcon />
    ) : (
      <img
        src={stat.icon}
        alt=""
        className="as-card-icon"
        draggable="false"
        aria-hidden="true"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    )}
  </div>
);

const TShape = ({ type, style }) => (
  <div className={`as-t-shape as-t-shape--${type}`} style={style} />
);

const AboutStats = () => {
  const cardRefs = useRef([null, null, null, null, null]);

  return (
    <>
      <style>{`

        .as-section {
          width: 100%;
          background: #030407;
        }

        .as-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7B7B7B;
          display: block;
          margin: 0 0 12px;
        }

        .as-heading {
          font-family: 'Cabinet Grotesk', sans-serif;
          color: #FFFFFF;
          margin: 0;
        }

        .as-card {
          background: #030407;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.4s ease;
        }

        .as-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at bottom, rgba(230, 77, 36, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .as-card:hover::before {
          opacity: 1;
        }

        .as-card-label {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 24px;
          color: #F7F7F7;
          display: block;
          position: relative;
          z-index: 2;
        }

        .as-card-value {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 67px;
          color: #FFFFFF;
          display: block;
          position: relative;
          z-index: 2;
        }

        .as-card-icon {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
          pointer-events: none;
          object-fit: contain;
          opacity: 1;
          filter: brightness(1) grayscale(1) invert(0);
          border:        none !important;
          border-radius: 0    !important;
          background:    none !important;
          box-shadow:    none !important;
          outline:       none !important;
          padding:       0    !important;
        }

        .as-earth-svg {
          color: #FFFFFF;
          opacity: 0.15 !important;
        }

        .as-grid-wrap {
          position: relative;
        }

        .as-t-shape {
          position: absolute;
          width: 18px;
          height: 18px;
          transform: translate(-50%, -50%);
          z-index: 10;
          pointer-events: none;
        }
        
        /* UP variant (┻) at top row dividers */
        .as-t-shape--up::before {
          content: "";
          position: absolute;
          top: 50%; left: 0; right: 0; height: 1.5px;
          background: #FF5536;
          transform: translateY(-50%);
        }
        .as-t-shape--up::after {
          content: "";
          position: absolute;
          bottom: 50%; left: 50%; width: 1.5px; height: 8.5px;
          background: #FF5536;
          transform: translateX(-50%);
        }

        /* DOWN variant (┳) at bottom row divider */
        .as-t-shape--down::before {
          content: "";
          position: absolute;
          top: 50%; left: 0; right: 0; height: 1.5px;
          background: #FF5536;
          transform: translateY(-50%);
        }
        .as-t-shape--down::after {
          content: "";
          position: absolute;
          top: 50%; left: 50%; width: 1.5px; height: 8.5px;
          background: #FF5536;
          transform: translateX(-50%);
        }

        .as-grid {
          display: grid;
        }

        /* ══════════════════════════════════════════════════════
           DESKTOP  >= 768px
        ══════════════════════════════════════════════════════ */
        @media (min-width: 768px) {

          .as-section {
            height: 940px;
            padding: 100px 0 0; /* Removed horizontal padding so grid can touch edges */
          }

          .as-text-container {
            padding: 0 100px; /* Keep the text padded */
          }

          .as-eyebrow {
            font-size: 12px;
            margin-bottom: 14px;
          }

          .as-heading {
            font-weight: 700;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: 0;
            margin-bottom: 38px;
            max-width: 650px;
          }

          /* 6-column grid: top cards span 2 (= 3 equal thirds), bottom cards span 3 (= 2 equal halves) */
          .as-grid {
            width: 100%;
            max-width: none;
            grid-template-columns: repeat(6, 1fr);
          }

          .as-card {
            padding: 35px 50px;
            min-height: 274px;
            border: 0.5px solid #5D5D5D;
            justify-content: space-between;
          }

          /* Remove left border and align text with heading */
          .as-grid > .as-card:nth-child(1),
          .as-grid > .as-card:nth-child(4) {
            border-left: none;
            padding-left: 100px;
          }

          /* Remove right border and balance padding */
          .as-grid > .as-card:nth-child(3),
          .as-grid > .as-card:nth-child(5) {
            border-right: none;
            padding-right: 100px;
          }

          /* Top row: each of the 3 cards spans 2 out of 6 cols */
          .as-card--top { grid-column: span 2; }

          /* Bottom row: each of the 2 cards spans 3 out of 6 cols (50/50) */
          .as-card--half { grid-column: span 3; }

          .as-card-label { font-size: 20px; }
          .as-card-value { font-size: 54px; }

          .as-card-icon {
            width:  160px;
            height: 160px;
            bottom: -5px;
            right:  20px;
            top: auto;
            left: auto;
            transform: none;
          }

          .as-earth-svg {
            width: 180px;
            height: 180px;
            bottom: -60px;
            right: 40px;
          }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE  < 768px
        ══════════════════════════════════════════════════════ */
        @media (max-width: 767px) {

          .as-section {
            height: auto;
            min-height: 792px;
            padding: 48px 0; /* Remove horizontal padding for full bleed */
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .as-text-container {
            padding: 0 16px; /* Text padding */
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .as-eyebrow {
            font-size: 11px;
            text-align: center;
            margin-bottom: 10px;
          }

          .as-heading {
            font-weight: 700;
            font-size: 28px;
            line-height: 30px;
            letter-spacing: -0.02em;
            text-align: center;
            margin-bottom: 32px;
            max-width: 287px;
          }

          .as-grid {
            width: 100%;
            max-width: none; /* Full width */
            grid-template-columns: 1fr;
          }

          .as-card {
            padding: 20px 20px 28px;
            min-height: 110px;
            border: 0.5px solid #3A3A3A;
          }

          .as-card--span2 { grid-column: span 1; }

          .as-card-label { font-size: 13px; letter-spacing: 0; }

          .as-card-value {
            font-size: 36px;
            line-height: 36px;
            letter-spacing: -0.03em;
          }

          .as-card-icon {
            width:  56px;
            height: 56px;
            bottom: 12px;
            right:  16px;
          }

          /* Hide T-shapes on mobile to keep default design */
          .as-t-shape {
            display: none;
          }
        }

      `}</style>

      <section className="as-section" aria-labelledby="as-heading">

        <div className="as-text-container">
          <p className="as-eyebrow">PROVEN AT SCALE</p>
          <h2 id="as-heading" className="as-heading">
            Delivering measurable <br />security outcomes
          </h2>
        </div>

        <div className="as-grid-wrap">
          <div className="as-grid">
            {/* Row 1 — 3 equal thirds */}
            <StatCard stat={STATS[0]} extraClass="as-card--top" cardRef={el => cardRefs.current[0] = el} />
            <StatCard stat={STATS[1]} extraClass="as-card--top" cardRef={el => cardRefs.current[1] = el} />
            <StatCard stat={STATS[2]} extraClass="as-card--top" cardRef={el => cardRefs.current[2] = el} />
            {/* Row 2 — 2 equal halves */}
            <StatCard stat={STATS[3]} extraClass="as-card--half" cardRef={el => cardRefs.current[3] = el} />
            <StatCard stat={STATS[4]} extraClass="as-card--half" cardRef={el => cardRefs.current[4] = el} />
          </div>

          <TShape type="down" style={{ top: '0%', left: '33.333%' }} />
          <TShape type="down" style={{ top: '0%', left: '66.666%' }} />

          {/* Orange T-shapes at the 3 middle intersections */}
          <TShape type="up" style={{ top: '50%', left: '33.333%' }} />
          <TShape type="down" style={{ top: '50%', left: '50%' }} />
          <TShape type="up" style={{ top: '50%', left: '66.666%' }} />
        </div>

      </section>
    </>
  );
};

export default AboutStats;
