import React from 'react';
import { Link } from 'react-router-dom';

const ThreatHero = () => {
    return (
        <>
            {/* Desktop View - Hidden on mobile */}
            <section
                className="hidden md:block relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    height: '667px',
                    background: '#030407'
                }}
            >
                {/* Desktop Background Image - Full Width */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/images/soc-augmentation/hero-bg.jpg"
                        alt="SOC Operations Background"
                        className="w-full h-full object-cover object-center"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            opacity: 1
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                        }}
                    />
                </div>

                {/* Desktop Content - Over Background - Full Width with proper padding */}
                <div className="relative z-10 w-full h-full flex items-center">
                    <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
                        <div className="max-w-[900px]">
                            {/* Threat Monitoring - Badge */}
                            <div className="mb-8">
                                <div
                                    className="px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] border text-center inline-flex items-center justify-center gap-1.5 sm:gap-2"
                                    style={{
                                        border: '1px solid #444444',
                                        borderRadius: '0px',
                                        display: 'inline-flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img
                                        src="/icons/playbook-icon.png"
                                        alt="icon"
                                        style={{
                                            width: '6px',
                                            height: '8.4px',
                                            borderRadius: '0.4px'
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <span
                                        className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 500,
                                            lineHeight: '100%',
                                            letterSpacing: '-3%',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        OT/IoT security and automotive security
                                    </span>
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h1
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '62px',
                                    lineHeight: '1.1',
                                    letterSpacing: '-2%',
                                    color: '#FFFFFF',
                                    marginBottom: '24px'
                                }}
                            >
                                OT/IoT & Automotive<br /> Security Built for<br />
                                <span style={{ color: '#FF5536' }}>Performance and Scale </span>
                            </h1>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    maxWidth: '600px',
                                    marginBottom: '40px'
                                }}
                            >
                                Auriseg helps you assess, harden, and continuously secure OT, IoT, and automotive systems with security-first testing, adversarial assessment, and deployment assurance so your connected factories and vehicles go live with confidence, not blind spots.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{
                                        width: '250px',
                                        height: '60px',
                                        borderRadius: '5px',
                                        gap: '10px',
                                        background: '#FF5536',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '-2%',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Start OT/IoT Security Testing →
                                    </span>
                                </Link>

                                <button
                                    onClick={() => {
                                        const el = document.getElementById('iot-process-timeline');
                                        if (el) {
                                            const offset = 100;
                                            const top = el.getBoundingClientRect().top + window.scrollY - offset;
                                            window.scrollTo({ top, behavior: 'smooth' });
                                        }
                                    }}
                                    className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#FF5536] hover:text-white hover:border-[#FF5536]"
                                    style={{
                                        width: '180px',
                                        height: '60px',
                                        borderRadius: '5px',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: '#FF5536',
                                        gap: '10px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '-2%',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        See How It Works
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile View - Visible only on mobile */}
            <section className="md:hidden" style={{
                background: '#030407',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)'
            }}>
                {/* Mobile Background Section - Content sits ON this background */}
                <div
                    className="relative w-full mx-auto overflow-hidden"
                    style={{
                        width: '100%',
                        minHeight: '550px',
                        background: '#030407'
                    }}
                >
                    {/* Mobile Background Image - Full Width */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <img
                            src="/images/soc-augmentation/hero-bg-mobile.jpg"
                            alt="SOC Operations Background"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 1
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentElement.style.backgroundColor = '#030407';
                            }}
                        />
                    </div>

                    {/* Mobile Content - Over Background Image - Full Width */}
                    <div className="relative z-10 w-full flex flex-col items-center justify-start pt-12 pb-12 px-6">
                        {/* Threat Monitoring - Badge (Mobile) */}
                        <div className="flex justify-center w-full mb-6">
                            <div
                                className="inline-flex items-center justify-center text-center"
                                style={{
                                    padding: '8px 16px',
                                    borderWidth: '0.52px',
                                    borderStyle: 'solid',
                                    borderColor: '#444444',
                                    gap: '5.18px',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <img
                                    src="/icons/playbook-icon.png"
                                    alt="icon"
                                    style={{
                                        width: '4px',
                                        height: '5.6px',
                                        borderRadius: '0.4px'
                                    }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <span
                                    className="uppercase text-center"
                                    style={{
                                        fontFamily: "'Roboto Mono', monospace",
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-3%',
                                        color: '#FFFFFF',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    OT/IoT security and automotive security
                                </span>
                            </div>
                        </div>

                        {/* Main Heading - Mobile */}
                        <div className="text-center mb-4 w-full">
                            <h1
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '1.2',
                                    letterSpacing: '-2%',
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    width: '100%',
                                    margin: '0 auto'
                                }}
                            >
                                OT/IoT & Automotive Security Built for
                            </h1>
                            <h1
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '1.2',
                                    letterSpacing: '-2%',
                                    textAlign: 'center',
                                    color: '#FF5536',
                                    width: '100%',
                                    margin: '0 auto'
                                }}
                            >
                                Performance and Scale
                            </h1>
                        </div>

                        {/* Description - Mobile - Full Width */}
                        <p
                            className="text-center mb-8"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                fontSize: '14px',
                                lineHeight: '1.5',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                width: '100%',
                                maxWidth: '320px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        >
                            Auriseg helps you assess, harden, and continuously secure OT, IoT, and automotive systems with security-first testing, adversarial assessment, and deployment assurance so your connected factories and vehicles go live with confidence, not blind spots.
                        </p>

                        {/* Buttons - Mobile (Stacked) - Full Width */}
                        <div className="flex flex-col gap-3 w-full items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
                                style={{
                                    width: '100%',
                                    maxWidth: '280px',
                                    height: '48px',
                                    borderRadius: '2.59px',
                                    gap: '5.18px',
                                    background: '#FF5536',
                                    textDecoration: 'none'
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-2%',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    Start OT/IoT Security Testing →
                                </span>
                            </Link>

                            <button
                                onClick={() => {
                                    const el = document.getElementById('iot-process-timeline-mobile') || document.getElementById('iot-process-timeline');
                                    if (el) {
                                        const offset = 100;
                                        const top = el.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: 'smooth' });
                                    }
                                }}
                                className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#FF5536] hover:text-white"
                                style={{
                                    width: '100%',
                                    maxWidth: '280px',
                                    height: '48px',
                                    borderRadius: '2.59px',
                                    borderWidth: '0.52px',
                                    borderStyle: 'solid',
                                    borderColor: '#FF5536',
                                    gap: '5.18px',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer'
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-2%',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    See How It Works
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second Image - BELOW the background section - Full Width, No Extra Space */}
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0',
                        margin: '0'
                    }}
                >
                    <img
                        src="/images/soc-augmentation/hero-mobile-image.png"
                        alt="SOC Operations Illustration"
                        style={{
                            width: '100%',
                            height: 'auto',
                            opacity: 1,
                            objectFit: 'contain',
                            display: 'block'
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            </section>
        </>
    );
};

export default ThreatHero;
