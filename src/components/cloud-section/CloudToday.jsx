import React from 'react';

const CtaSection = () => {
    return (
        <>
            {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
            <section
                className="hidden md:block"
                style={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    height: '511px',
                    background: '#030407',
                    overflow: 'hidden',
                }}
            >
                {/* Background Image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                >
                    <img
                        src="/images/cta/cta-bg.jpg"
                        alt="Background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            opacity: 0.5
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentElement.style.backgroundColor = '#030407';
                        }}
                    />
                </div>

                {/* Content */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 100px',
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            maxWidth: '1240px',
                            width: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {/* Heading - Left */}
                        <h2
                            style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 500,
                                fontSize: '54px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF',
                                maxWidth: '703px',
                                margin: 0,
                            }}
                        >
                            Audit Your Cloud Before Hackers Do
                        </h2>

                        {/* Button - Right */}
                        <a
                            href="https://cal.com/auriseg-consulting-pvt.-ltd"
                            className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                                width: '278px',
                                height: '58px',
                                paddingTop: '19px',
                                paddingRight: '33px',
                                paddingBottom: '19px',
                                paddingLeft: '33px',
                                borderRadius: '10px',
                                background: '#FF5536',
                                textDecoration: 'none',
                                flexShrink: 0,
                                marginLeft: '40px',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '-0.02em',
                                    color: '#FFFFFF',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Book Free Cloud Risk Scan →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
            <section
                className="md:hidden"
                style={{
                    width: '100%',
                    height: '334px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#030407',
                }}
            >
                {/* Mobile Background Image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                >
                    <img
                        src="/images/cta/cta-bg-mobile.jpg"
                        alt="Background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentElement.style.backgroundColor = '#030407';
                        }}
                    />
                </div>

                {/* Mobile Content - Centered stacked */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 16px',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                    }}
                >
                    {/* Heading - Mobile */}
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '110%',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF',
                            maxWidth: '296px',
                            textAlign: 'center',
                            marginBottom: '32px',
                        }}
                    >
                        Audit Your Cloud Before Hackers Do
                    </h2>

                    {/* Button - Mobile */}
                    <a
                        href="https://cal.com/auriseg-consulting-pvt.-ltd"
                        className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
                        style={{
                            width: '278px',
                            height: '58px',
                            paddingTop: '19px',
                            paddingRight: '33px',
                            paddingBottom: '19px',
                            paddingLeft: '33px',
                            borderRadius: '10px',
                            background: '#FF5536',
                            textDecoration: 'none',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Book Free Cloud Risk Scan →
                        </span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default CtaSection;
