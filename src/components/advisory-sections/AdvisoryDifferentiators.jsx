import React, { useState } from 'react';

const AdvisoryDifferentiators = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const features = [
        {
            title: "200+ Engagements Completed",
            description: "Full white-label infrastructure on client portals, reports, and dashboards, branded to your MSP."
        },
        {
            title: "98% Client Retention Rate",
            description: "Per-endpoint, per-tier pricing with no hidden escalation fees. Forecast costs precisely and protect your margins."
        },
        {
            title: "15+ Industries Served",
            description: "Direct access to Tier 2 and Tier 3 analysts — no automated runaround, no ticket black holes. Escalate in minutes, not hours."
        },
        {
            title: "48hr Avg. Engagement Kickoff",
            description: "A named onboarding engineer owns your go-live. From integration to first detection, Auriseg gets you operational in 72 hours or less."
        }
    ];

    return (
        <>
            {/* Desktop View */}
            <section
                className="hidden md:block relative w-full overflow-hidden"
                style={{
                    minHeight: '820px',
                    backgroundImage: "url('/images/why-auriseg/Bg Image.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative z-10 w-full h-full px-8 py-16">
                    <div className="max-w-[1440px] mx-auto h-full flex items-center">

                        {/* LEFT SIDE */}
                        <div className="w-1/2 pr-12 -translate-y-[50px] translate-x-28">
                            <div className="mb-6">
                                <div
                                    className="inline-flex items-center justify-center"
                                    style={{ border: '1px solid #444444', padding: '10px 11px', gap: '10px' }}
                                >
                                    <img
                                        src="/icons/playbook-icon.png"
                                        alt="icon"
                                        style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                    />
                                    <span className="uppercase" style={{
                                        fontFamily: "'Roboto Mono', monospace",
                                        fontWeight: 500, fontSize: '16px',
                                        lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF'
                                    }}>
                                        DIFFERENTIATORS
                                    </span>
                                </div>
                            </div>

                            <h2 style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 500, fontSize: '38px',
                                lineHeight: '110%', color: '#FFFFFF',
                                marginBottom: '32px', maxWidth: '630px'
                            }}>
                                What Sets Auriseg Apart
                                <br />More than advising on security
                                <br />we enable organizations to own it.
                            </h2>

                            <a
                                href="/become-a-partner"
                                className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: '#FF5536', borderRadius: '5px',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500, fontSize: '16px',
                                    lineHeight: '100%', letterSpacing: '-0.02em',
                                    color: '#FFFFFF', textDecoration: 'none', padding: '16px 32px'
                                }}
                            >
                                View Partner Case Studies →
                            </a>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="w-1/2 pl-8 translate-y-32">
                            <div className="flex flex-col gap-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <h3 style={{
                                            fontFamily: "'Cabinet Grotesk', sans-serif",
                                            fontWeight: 500, fontSize: '24px',
                                            lineHeight: '27.2px',
                                            color: index === 0 ? '#FF5536' : (hoveredIndex === index ? '#FF5536' : '#FFFFFF'),
                                            marginBottom: '12px', transition: 'color 0.3s ease'
                                        }}>
                                            {feature.title}
                                        </h3>
                                        <p style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 400, fontSize: '16px',
                                            lineHeight: '23.1px', color: '#ADADAD',
                                            margin: 0, maxWidth: '453px'
                                        }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── Mobile View ─── */}
            <section
                className="md:hidden w-full"
                style={{
                    /* bg image full-bleed + dark fallback so no white ever shows */
                    background: '#030407',
                    backgroundImage: "url('/images/why-auriseg/Bg Image.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    /* let height be driven purely by content — no minHeight forcing gaps */
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                {/* Full-width padding wrapper — no fixed width that leaves white edges */}
                <div style={{
                    width: '100%',
                    maxWidth: '420px',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    padding: '40px 24px 40px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '32px',
                }}>

                    {/* Badge */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div className="inline-flex items-center justify-center"
                            style={{ border: '1px solid #444444', padding: '10px 11px', gap: '10px' }}
                        >
                            <img src="/icons/playbook-icon.png" alt="icon"
                                style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                            />
                            <span className="uppercase" style={{
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 500, fontSize: '16px',
                                lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF'
                            }}>
                                DIFFERENTIATORS
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 500, fontSize: '28px',
                        lineHeight: '120%', letterSpacing: '-0.02em',
                        color: '#FFFFFF', textAlign: 'center', margin: 0, width: '100%'
                    }}>
                        What Sets Auriseg Apart
                        <br />More than advising on security
                        <br />we enable organizations to own it.
                    </h2>

                    {/* CTA */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <a
                            href="/become-a-partner"
                            className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
                            style={{
                                background: '#FF5536', borderRadius: '5px',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500, fontSize: '14px',
                                lineHeight: '100%', letterSpacing: '-0.02em',
                                color: '#FFFFFF', textDecoration: 'none', padding: '14px 28px'
                            }}
                        >
                            View Partner Case Studies →
                        </a>
                    </div>

                    {/* Features */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '100%', padding: '20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderLeft: hoveredIndex === index ? '3px solid #FF5536' : '3px solid transparent',
                                    transition: 'all 0.3s ease', cursor: 'pointer',
                                    boxSizing: 'border-box'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <h3 style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500, fontSize: '20px',
                                    lineHeight: '27.2px',
                                    color: hoveredIndex === index ? '#FF5536' : '#FFFFFF',
                                    marginBottom: '12px', transition: 'color 0.3s ease'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400, fontSize: '12px',
                                    lineHeight: '23.1px',
                                    color: 'rgba(255, 255, 255, 0.45)', margin: 0
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default AdvisoryDifferentiators;
