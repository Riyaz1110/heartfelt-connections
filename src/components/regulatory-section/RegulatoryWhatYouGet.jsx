import React, { useState } from 'react';

const ThreatWhatYouGet = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        {
            icon: "/icons/soc-augmentation/continuous-monitoring.png",
            title: "Continuous Controls Monitoring",
            description: " Our compliance engineers continuously monitor your control environment across all active frameworks. We track control effectiveness, flag deviations, and alert your team before gaps become findings — so audits hold no surprises."
        },
        {
            icon: "/icons/soc-augmentation/triage-escalation.png",
            title: "Regulatory Gap Assessment",
            description: " Every engagement begins with a structured gap analysis mapped against your applicable regulations. Our specialists identify non-conformances, quantify risk exposure, and deliver a prioritized remediation roadmap your teams can act on immediately."
        },
        {
            icon: "/icons/soc-augmentation/reporting.png",
            title: "Audit Readiness & Evidence Management",
            description: "When auditors arrive, your evidence is already organized, mapped, and reviewable. We centralize documentation collection, maintain an always-current evidence repository, and coordinate directly with your audit teams to reduce burden on internal staff."
        },

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
          /* SVG icons colored via filter: #d52e11 */
          filter: invert(42%) sepia(98%) saturate(1200%) hue-rotate(340deg) brightness(100%) contrast(101%);
          transition: filter 0.3s ease;
          object-fit: contain;
        }
        .wyg-card:hover .wyg-icon {
          /* White on hover */
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
          min-height: 295px;
        }
        .wyg-card:hover {
          background: #FF5536;
          border-color: transparent;
        }

        .wyg-card .wyg-title {
          font-family: 'Cabinet Grotesk', system-ui, sans-serif;
          font-weight: 500;
          font-size: 25px;
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
          font-family: 'Inter', system-ui, sans-serif;
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
          /* SVG icon colored #FF5536 */
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
                <div style={{ paddingLeft: 'calc(60px + 1cm)', paddingRight: '80px' }}>
                    <div style={{ maxWidth: '1240px' }}>

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
                                fontWeight: 500,
                                fontSize: '48px',
                                lineHeight: '110%',
                                color: '#030407',
                                margin: '0 0 16px 0',
                            }}
                        >
                            Expert Compliance. Continuously Managed.
                        </h2>

                        {/* Subheading */}
                        <p
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#444444',
                                maxWidth: '525px',
                                margin: '0 0 60px 0',
                            }}
                        >
                            Every engagement delivers continuous compliance monitoring, expert-led gap assessments, and audit-ready documentation — built to reduce your regulatory exposure at a fraction of the cost of building in-house.
                        </p>

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
                                    {/* Icon — NO wrapper badge, just the SVG image directly */}
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="wyg-icon"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />

                                    <h3 className="wyg-title">{card.title}</h3>
                                    <p className="wyg-desc">{card.description}</p>
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
                            Expert Compliance. Continuously Managed.
                        </h2>

                        {/* Subheading — centered on mobile */}
                        <p
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '150%',
                                color: '#444444',
                                textAlign: 'center',
                                margin: '0 0 32px 0',
                            }}
                        >
                            Every engagement delivers continuous compliance monitoring, expert-led gap assessments, and audit-ready documentation — built to reduce your regulatory exposure at a fraction of the cost of building in-house.
                        </p>

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

export default ThreatWhatYouGet;
