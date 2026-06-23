import { useState } from 'react';

const stats = [
  { number: '5-Days', subNumber: '', description: 'Days Average Compliance Reporting Time' },
  { number: '95%', description: 'Critical Control Gaps Closed Within 30 Days' },
  { number: '60+', description: 'Regulatory Frameworks Supported Globally' },
  { number: '12-Week', description: 'Saved Per Audit Cycle on Average ' },
];

const ThreatStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        background: '#030407',
        padding: '48px 0',
        boxSizing: 'border-box',
      }}
    >
      <style>{`
        .soc-outer {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }
 
        .soc-border {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
 
        .soc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
 
        .soc-card {
          padding: 40px 32px;
          background: #030407;
          cursor: pointer;
          transition: background 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }
        .soc-card:last-child {
          border-right: none;
        }
        .soc-card:hover {
          background: #0d0f18;
        }
 
        .soc-num-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: nowrap;
        }
 
        .soc-num {
          font-family: 'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif;
          font-size: clamp(30px, 3.6vw, 54px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #ffffff;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
 
        .soc-subnum {
          font-family: 'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif;
          font-size: clamp(30px, 3.6vw, 54px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #ffffff;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
 
        .soc-card:hover .soc-num,
        .soc-card:hover .soc-subnum {
          color: #FF5536;
        }
 
        .soc-desc {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
          color: #6B7280;
          transition: color 0.25s ease;
          margin: 10px 0 0 0;
          padding: 0;
          white-space: nowrap;
        }
        .soc-card:hover .soc-desc {
          color: #FF5536;
        }
 
        @media (min-width: 641px) and (max-width: 1023px) {
          .soc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .soc-card {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
          .soc-card:nth-child(2),
          .soc-card:nth-child(4) { border-right: none; }
          .soc-card:nth-child(3),
          .soc-card:nth-child(4) { border-bottom: none; }
          .soc-num, .soc-subnum { font-size: clamp(32px, 5vw, 48px); }
        }
 
        @media (max-width: 640px) {
          .soc-outer { padding: 0 16px; }
          .soc-grid { grid-template-columns: 1fr; }
          .soc-card {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding: 28px 20px;
            align-items: flex-start;
          }
          .soc-card:last-child { border-bottom: none; }
          .soc-num-row { justify-content: flex-start; gap: 10px; }
          .soc-num, .soc-subnum { font-size: clamp(36px, 10vw, 48px); }
          .soc-desc {
            font-size: 12px;
            white-space: normal;
            text-align: left;
            margin-top: 8px;
          }
        }
      `}</style>

      <div className="soc-outer">
        <div className="soc-border">
          <div className="soc-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="soc-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="soc-num-row">
                  <span className="soc-num">{stat.number}</span>
                  {stat.subNumber && (
                    <span className="soc-desc">{stat.subNumber}</span>
                  )}
                </div>
                <p className="soc-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatStats;
