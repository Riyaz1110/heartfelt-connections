import React from 'react';

const ThreatIntegrations = () => {
    const integrations = {
        siem: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Cloudflare'],
        edr: ['Microsoft Defender', 'CrowdStrike', 'SentinelOne', 'IAM environments'],
        firewall: ['Palo Alto', 'Fortinet', 'Cisco Meraki', 'Check Point'],
        cloud: ['SIEM platforms', 'configuration data', 'policy sets', 'security tooling']
    };

    // Dot component
    const Dot = () => (
        <div
            style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#FF5536',
                flexShrink: 0
            }}
        />
    );

    return (
        <>
            {/* Desktop View - Hidden on mobile */}
            <section
                className="hidden md:block relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    background: '#FFFFFF',
                    padding: '80px 0'
                }}
            >
                <div style={{ paddingLeft: 'calc(60px + 1cm)', paddingRight: '80px' }}>
                    <div className="max-w-[1240px]">

                        {/* INTEGRATIONS - Badge */}
                        <div className="flex mb-8">
                            <div
                                className="inline-flex items-center gap-2"
                                style={{
                                    border: '1px solid #ADADAD',
                                    padding: '10px 11px',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <img
                                    src="/icons/playbook-icon.png"
                                    alt="icon"
                                    style={{ width: '8px', height: '11.2px' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <span
                                    className="uppercase"
                                    style={{
                                        fontFamily: "'Roboto Mono', monospace",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '-4%',
                                        color: '#FF5536'
                                    }}
                                >
                                    INTEGRATIONS
                                </span>
                            </div>
                        </div>

                        {/* Heading and Description - Desktop Layout */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '40px',
                                alignItems: 'flex-start',
                                marginBottom: '48px',
                                justifyContent: 'space-between'
                            }}
                        >
                            {/* Plug In. Instantly. - Heading - Left Side */}
                            <h2
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '48px',
                                    lineHeight: '110%',
                                    letterSpacing: '0%',
                                    color: '#030407',
                                    margin: '0',
                                    flex: '0 0 auto',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Plug In Instantly.
                            </h2>

                            {/* Description - Right Side - Smaller Font */}
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '150%',
                                    letterSpacing: '0%',
                                    color: '#444444',
                                    maxWidth: '400px',
                                    margin: '0',
                                    flex: '1',
                                    textAlign: 'left'
                                }}
                            >
                                Auriseg works with your existing technology environment and assessment inputs and no rip-and-replace required.
                            </p>
                        </div>

                        {/* Main Container Box */}
                        <div
                            style={{
                                width: '100%',
                                maxWidth: '1238px',
                                borderRadius: '10px',
                                border: '1px solid #ADADAD',
                                background: '#F9F9F9',
                                overflow: 'hidden',
                                margin: '0 auto'
                            }}
                        >
                            {/* Cloud  Row */}
                            <div className="flex border-b border-[#ADADAD]">
                                <div
                                    className="flex-shrink-0"
                                    style={{
                                        width: '266px',
                                        background: '#FFFFFF',
                                        padding: '20px',
                                        borderTopLeftRadius: '8px',
                                        borderRight: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#13284C',
                                            margin: 6,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Cloud
                                    </h3>
                                </div>
                                <div className="flex-1 p-5">
                                    <div className="flex flex-wrap gap-4">
                                        {integrations.siem.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '12px 16px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '16px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Endpoint / Identity   Row */}
                            <div className="flex border-b border-[#ADADAD]">
                                <div
                                    className="flex-shrink-0"
                                    style={{
                                        width: '266px',
                                        background: '#FFFFFF',
                                        padding: '20px',
                                        borderRight: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#13284C',
                                            margin: 33,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Endpoint / Identity
                                    </h3>
                                </div>
                                <div className="flex-1 p-5">
                                    <div className="flex flex-wrap gap-4">
                                        {integrations.edr.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '12px 16px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '16px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Network / Firewall    Row */}
                            <div className="flex border-b border-[#ADADAD]">
                                <div
                                    className="flex-shrink-0"
                                    style={{
                                        width: '266px',
                                        background: '#FFFFFF',
                                        padding: '20px',
                                        borderRight: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#13284C',
                                            margin: 4,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Network / Firewall
                                    </h3>
                                </div>
                                <div className="flex-1 p-5">
                                    <div className="flex flex-wrap gap-4">
                                        {integrations.firewall.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '12px 16px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '16px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Visibility / Security Data    Row */}
                            <div className="flex">
                                <div
                                    className="flex-shrink-0"
                                    style={{
                                        width: '266px',
                                        background: '#FFFFFF',
                                        padding: '20px',
                                        borderRight: '1px solid #ADADAD',
                                        borderBottomLeftRadius: '8px'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#13284C',
                                            margin: 9,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Visibility / Security Data
                                    </h3>
                                </div>
                                <div className="flex-1 p-5">
                                    <div className="flex flex-wrap gap-4">
                                        {integrations.cloud.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '12px 16px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '16px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile View - Visible only on mobile */}
            <section
                className="md:hidden relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    background: '#FFFFFF',
                    padding: '40px 0'
                }}
            >
                <div className="w-full px-4">
                    <div className="max-w-[342px] mx-auto">

                        {/* INTEGRATIONS - Badge Mobile */}
                        <div className="flex justify-center mb-6">
                            <div
                                className="inline-flex items-center justify-center gap-2"
                                style={{
                                    border: '0.52px solid #ADADAD',
                                    padding: '5.18px 5.7px',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <img
                                    src="/icons/playbook-icon.png"
                                    alt="icon"
                                    style={{ width: '6px', height: '8.4px' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <span
                                    className="uppercase"
                                    style={{
                                        fontFamily: "'Roboto Mono', monospace",
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-2%',
                                        color: '#FF5536'
                                    }}
                                >
                                    INTEGRATIONS
                                </span>
                            </div>
                        </div>

                        {/* Plug In. Instantly. - Heading Mobile */}
                        <h2
                            className="text-center"
                            style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 500,
                                fontSize: '28px',
                                lineHeight: '120%',
                                letterSpacing: '-2%',
                                color: '#030407',
                                marginBottom: '12px',
                                textAlign: 'center'
                            }}
                        >
                            Plug In Instantly.
                        </h2>

                        {/* Description Mobile - Centered */}
                        <p
                            className="text-center"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: '#444444',
                                marginBottom: '32px',
                                textAlign: 'center'
                            }}
                        >
                            Auriseg works with your existing technology environment and assessment inputs and no rip-and-replace required.
                        </p>

                        {/* Mobile Main Container Box */}
                        <div
                            style={{
                                width: '342px',
                                borderRadius: '8px',
                                border: '1px solid #ADADAD',
                                background: '#F9F9F9',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Cloud  - Mobile */}
                            <div className="border-b border-[#ADADAD]">
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '12px 16px',
                                        borderBottom: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#030407',
                                            margin: 0,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Cloud
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-3">
                                        {integrations.siem.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '10px 14px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '12px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Endpoint / Identity   - Mobile */}
                            <div className="border-b border-[#ADADAD]">
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '12px 16px',
                                        borderBottom: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#030407',
                                            margin: 0,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Endpoint / Identity
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-3">
                                        {integrations.edr.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '10px 14px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '12px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Network / Firewall    - Mobile */}
                            <div className="border-b border-[#ADADAD]">
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '12px 16px',
                                        borderBottom: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#030407',
                                            margin: 0,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Network / Firewall
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-3">
                                        {integrations.firewall.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '10px 14px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '12px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Visibility / Security Data    - Mobile */}
                            <div>
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '12px 16px',
                                        borderBottom: '1px solid #ADADAD'
                                    }}
                                >
                                    <h3
                                        className="text-center"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '150%',
                                            letterSpacing: '0%',
                                            color: '#030407',
                                            margin: 0,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Visibility / Security Data
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-3">
                                        {integrations.cloud.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '11px',
                                                    padding: '10px 14px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #DBD8D8',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    minWidth: 'fit-content'
                                                }}
                                            >
                                                <Dot />
                                                <span
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: '12px',
                                                        lineHeight: '150%',
                                                        letterSpacing: '0%',
                                                        color: '#030407',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThreatIntegrations;
