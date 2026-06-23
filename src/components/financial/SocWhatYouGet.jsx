import React, { useState } from 'react';

const SocWhatYouGet = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      icon: "/icons/soc-augmentation/continuous-monitoring.png",
      title: "Healthcare",
      description: "Protect PHI and secure IoMT devices while meeting the mandates of the HIPAA Security Rule, all without disrupting clinical operations or patient care workflows."
    },
    {
      icon: "/icons/soc-augmentation/triage-escalation.png",
      title: "Government firms",
      description: "Client confidentiality isn’t optional. Auriseg secures matter management systems, remote access environments, and privileged communications at every endpoint."
    },
    {
      icon: "/icons/soc-augmentation/reporting.png",
      title: "Technology - based company",
      description: "proprietary Data, intellectual property and client information are constant targets for exfiltration attempts. Auriseg provides advanced threat monitoring to safeguard critical systems without disrupting workflows."
    }
  ];

  return (
    <>
      <style>{`
        /* ── ICON: orange by default, white on card hover ── */
        .wyg-card .wyg-icon {
          width: 40px;
          height: 40px;
          display: block;
          margin-bottom: 20px;
          filter: invert(42%) sepia(98%) saturate(1200%) hue-rotate(340deg) brightness(100%) contrast(101%);
          transition: filter 0.3s ease;
          object-fit: contain;
        }
        .wyg-card:hover .wyg-icon {
          filter: brightness(0) invert(1);
        }

        /* ── DESKTOP CARD ── */
        .wyg-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #ADADAD;
          padding: 28px 24px;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
          height: 100%;
          min-height: 340px;
        }
        .wyg-card:hover {
          background: #FF5536;
          border-color: transparent;
        }

        /* ── FIRST CARD: always active (orange) ── */
        .wyg-card-active {
          background: #FF5536 !important;
          border-color: transparent !important;
        }
        .wyg-card-active .wyg-icon {
          filter: brightness(0) invert(1) !important;
        }
        .wyg-card-active .wyg-title {
          color: #FFFFFF !important;
        }
        .wyg-card-active .wyg-desc {
          color: #FFFFFF !important;
        }
        .wyg-card-active .wyg-btn-wrapper {
          display: block !important;
        }

        .wyg-card .wyg-title {
          font-family: 'Cabinet Grotesk';
          font-weight: 500;
          font-size: 30px;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #13284C;
          margin: 0 0 16px 0;
          transition: color 0.3s ease;
        }
        .wyg-card:hover .wyg-title {
          color: #FFFFFF;
        }

        .wyg-card .wyg-desc {
          font-family: 'Inter';
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          color: #606060;
          margin: 0;
          transition: color 0.3s ease;
        }
        .wyg-card:hover .wyg-desc {
          color: #FFFFFF;
        }

        /* ── EXPLORE BUTTON ── */
        .wyg-btn-wrapper {
          display: none;
          margin-top: auto;
          padding-top: 28px;
          width: 100%;
        }
        .wyg-card:hover .wyg-btn-wrapper {
          display: block;
        }
        .wyg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px 24px;
          background: #FF5536;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .wyg-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* ── MOBILE CARD ── */
        .wyg-card-mobile {
          background: #FFFFFF;
          border: 1px solid #ADADAD;
          padding: 20px;
          box-sizing: border-box;
          width: 100%;
        }
        .wyg-card-mobile .wyg-icon-mobile {
          width: 32px;
          height: 32px;
          display: block;
          margin-bottom: 14px;
          filter: invert(42%) sepia(98%) saturate(1200%) hue-rotate(340deg) brightness(100%) contrast(101%);
          object-fit: contain;
        }
        .wyg-card-mobile .wyg-title-mobile {
          font-family: 'Cabinet Grotesk', system-ui, sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #13284C;
          margin: 0 0 12px 0;
        }
        .wyg-card-mobile .wyg-desc-mobile {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 1.5;
          color: #606060;
          margin: 0;
        }
      `}</style>

      {/* ════════════════════════════════
          DESKTOP — hidden on mobile
      ════════════════════════════════ */}
      <section
        className="hidden md:block"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#FFFFFF',
          padding: '80px 0',
          boxSizing: 'border-box',
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid #ADADAD',
                  padding: '10px 11px',
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src="/icons/playbook-icon.png"
                  alt=""
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    color: '#FF5536',
                    textTransform: 'uppercase',
                  }}
                >
                  WHAT YOU GET
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '110%',
                color: '#030407',
                margin: '0 0 16px 0',
              }}
            >
              Security Expertise Across Industries
            </h2>
            <br />
            {/* 3-column card grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="wyg-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="wyg-icon"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  <h3 className="wyg-title">{card.title}</h3>
                  <p className="wyg-desc">{card.description}</p>

                  {/* Explore button */}
                  <div className="wyg-btn-wrapper">
                    <button className="wyg-btn">
                      Explore {card.title} Security
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                        <path d="M12 1L17 6L12 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 6H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 2V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          MOBILE — hidden on desktop
      ════════════════════════════════ */}
      <section
        className="md:hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#FFFFFF',
          padding: '40px 0',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '374px', margin: '0 auto' }}>

            {/* Badge — centered on mobile */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '0.52px solid #ADADAD',
                  padding: '5px 6px',
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src="/icons/playbook-icon.png"
                  alt=""
                  style={{ width: '6px', height: '8.4px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#FF5536',
                    textTransform: 'uppercase',
                  }}
                >
                  WHAT YOU GET
                </span>
              </div>
            </div>

            {/* Heading — centered on mobile */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '28px',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#030407',
                textAlign: 'center',
                margin: '0 0 12px 0',
              }}
            >
              Security Expertise Across Industries
            </h2>
            <br />
            {/* Subheading — centered on mobile */}


            {/* Stacked cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {cards.map((card, index) => (
                <div key={index} className="wyg-card-mobile">

                  {/* Icon — NO wrapper badge, just raw SVG colored #FF5536 */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="wyg-icon-mobile"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  <h3 className="wyg-title-mobile">{card.title}</h3>
                  <p className="wyg-desc-mobile">{card.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SocWhatYouGet;
