import { useState } from 'react';

const MSPStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    { number: '50+', description: 'Certified Threat\nResearchers' },
    { number: '24/7', description: 'SOC Monitoring\nCapability' },
    { number: '<15m', description: 'Avg. Threat Detection-\nto-Response Time' },
    { number: '03', description: 'Global SOC\nLocations' },
  ];

  const CORNER = 12; // px length of each corner arm
  const C = '#FF5536';
  const GRAY = 'rgba(96,96,96,0.4)';

  // Renders 4 orange L-corners around a box
  const Corners = () => (
    <>
      {/* Top-left */}
      <span style={{ position: 'absolute', top: 0, left: 0, width: CORNER, height: 1, background: C }} />
      <span style={{ position: 'absolute', top: 0, left: 0, width: 1, height: CORNER, background: C }} />
      {/* Top-right */}
      <span style={{ position: 'absolute', top: 0, right: 0, width: CORNER, height: 1, background: C }} />
      <span style={{ position: 'absolute', top: 0, right: 0, width: 1, height: CORNER, background: C }} />
      {/* Bottom-left */}
      <span style={{ position: 'absolute', bottom: 0, left: 0, width: CORNER, height: 1, background: C }} />
      <span style={{ position: 'absolute', bottom: 0, left: 0, width: 1, height: CORNER, background: C }} />
      {/* Bottom-right */}
      <span style={{ position: 'absolute', bottom: 0, right: 0, width: CORNER, height: 1, background: C }} />
      <span style={{ position: 'absolute', bottom: 0, right: 0, width: 1, height: CORNER, background: C }} />
    </>
  );

  return (
    <>
      <style>{`
        .msp-section {
          width: 100vw;
          position: relative;
          left: 50%;
          margin-left: -50vw;
          background: #030407;
          box-sizing: border-box;
        }
        .msp-border-top { width:100%; height:0.5px; background:#606060; }
        .msp-grid { display:grid; width:100%; }

        .msp-card {
          min-height: 272px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .msp-number {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          transition: color 0.3s;
          display: block;
          margin-bottom: 20px;
          text-align: center;
        }
        .msp-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.55;
          color: #9CA3AF;
          transition: color 0.3s;
          text-align: center;
          margin: 0;
          white-space: pre-line;
          max-width: 180px;
        }
        .msp-border-bottom {
          position: relative;
          width: 100%;
          height: 0.5px;
          background: #606060;
        }
        .msp-tick { position:absolute; bottom:0; transform:translateX(-50%); width:18px; height:8.5px; }
        .msp-tick-h { position:absolute; bottom:0; left:0; width:100%; height:1px; background:#FF5536; }
        .msp-tick-v { position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:1px; height:100%; background:#FF5536; }

        @media (min-width: 768px) {
          .msp-grid { grid-template-columns: repeat(4, 1fr); }
          .msp-card { border-right: 0.5px solid rgba(96,96,96,0.5); }
          .msp-card:last-child { border-right: none; }
          .msp-number { font-size: clamp(40px, 4vw, 72px); }
          .msp-ticks-visible { display: block; }
          .msp-mobile-wrap { display: none; }
        }

        @media (max-width: 767px) {
          .msp-grid { display: none; }
          .msp-border-top { display: none; }
          .msp-border-bottom { display: none; }
          .msp-ticks-visible { display: none; }
          .msp-mobile-wrap { display: block; }
        }
      `}</style>

      <section className="msp-section">
        <div className="msp-border-top" />

        {/* Desktop Grid */}
        <div className="msp-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="msp-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="msp-number" style={{ color: hoveredIndex === index ? '#FF5536' : '#FFFFFF' }}>
                {stat.number}
              </span>
              <p className="msp-desc" style={{ color: hoveredIndex === index ? '#FF5536' : '#9CA3AF' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="msp-border-bottom">
          <div className="msp-ticks-visible">
            {[25, 50, 75].map((pct) => (
              <div key={pct} className="msp-tick" style={{ left: `${pct}%` }}>
                <div className="msp-tick-h" />
                <div className="msp-tick-v" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="msp-mobile-wrap" style={{ padding: '0 20px 32px 20px' }}>
          {/* Outer container — gray border, orange corners */}
          <div style={{ position: 'relative', border: `1px solid ${GRAY}`, boxSizing: 'border-box' }}>
            <Corners />

            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  padding: '28px 20px',
                  borderBottom: index !== stats.length - 1 ? `1px solid ${GRAY}` : 'none',
                  boxSizing: 'border-box',
                }}
              >
                {/* Orange corners at each row divider intersection */}
                {index !== stats.length - 1 && (
                  <>
                    {/* Left intersection tick */}
                    <span style={{ position: 'absolute', bottom: -1, left: -1, width: CORNER, height: 1, background: C }} />
                    <span style={{ position: 'absolute', bottom: -(CORNER / 2), left: -1, width: 1, height: CORNER, background: C }} />
                    {/* Right intersection tick */}
                    <span style={{ position: 'absolute', bottom: -1, right: -1, width: CORNER, height: 1, background: C }} />
                    <span style={{ position: 'absolute', bottom: -(CORNER / 2), right: -1, width: 1, height: CORNER, background: C }} />
                  </>
                )}

                {/* Number */}
                <div style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '42px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>

                {/* Description */}
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '1.55',
                  color: '#9CA3AF',
                  whiteSpace: 'pre-line'
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MSPStats;
