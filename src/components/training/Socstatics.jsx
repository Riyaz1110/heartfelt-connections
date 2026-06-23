import { useState } from 'react';

const stats = [
  { number: '27', subNumber: '+', description: 'Certified Threat Researchers Behind Every Module' },
  { number: '1200+', description: 'Active Virtual Lab Environments' },
  { number: '98%', description: 'Real-World Scenario Accuracy' },
  { number: '12+', description: 'Global SOC Locations Feeding Live Intelligence' },
];

const SocStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        width: '100%',
        background: '#030407',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      }}
    >
      <style>{`
        .soc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }

        .soc-card {
          padding: 64px 32px;
          background: #030407;
          cursor: pointer;
          transition: background 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          text-align: center;
          min-height: 220px;
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
          gap: 8px;
          flex-wrap: nowrap;
          justify-content: center;
          margin-bottom: 28px;
        }

        /* SC1 — Cabinet Grotesk, 500, 54px, 100% line-height, -2% letter-spacing */
        .soc-num {
          font-family: 'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif;
          font-size: 54px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #ffffff;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .soc-card:hover .soc-num {
          color: #FF5536;
        }

        /* SC2 — Inter, 500, 18px, 28px line-height, -2% letter-spacing, center */
        .soc-desc {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: -0.02em;
          text-align: center;
          color: #6B7280;
          transition: color 0.25s ease;
          margin: 0;
          padding: 0;
          white-space: normal;
          max-width: 200px;
        }
        .soc-card:hover .soc-desc {
          color: #9ca3af;
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .soc-grid { grid-template-columns: repeat(2, 1fr); }
          .soc-card {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            min-height: 180px;
          }
          .soc-card:nth-child(2),
          .soc-card:nth-child(4) { border-right: none; }
          .soc-card:nth-child(3),
          .soc-card:nth-child(4) { border-bottom: none; }
          .soc-num { font-size: 42px; }
          .soc-desc { font-size: 16px; line-height: 24px; }
        }

        @media (max-width: 640px) {
          .soc-grid { grid-template-columns: repeat(2, 1fr); }
          .soc-card {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding: 40px 16px;
            min-height: 160px;
          }
          .soc-card:nth-child(2),
          .soc-card:nth-child(4) { border-right: none; }
          .soc-card:nth-child(3),
          .soc-card:nth-child(4) { border-bottom: none; }
          .soc-num { font-size: 36px; }
          .soc-num-row { margin-bottom: 16px; }
          .soc-desc { font-size: 14px; line-height: 22px; max-width: 140px; }
        }
      `}</style>

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
                <span className="soc-num">{stat.subNumber}</span>
              )}
            </div>
            <p className="soc-desc">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocStats;
