import React, { useState } from 'react';

const CaseStudies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const caseStudies = [
        {
            id: 1,
            title: "Regional MSSP cut alert fatigue, scaled operations efficiently.",
            image: "/images/case-studies/case-study-1.jpg",
            challenge: "120-person MSSP faced 18,000 daily alerts; 80%",
            solution: "Auriseg integrated Sentinel and CrowdStrike, automating triage and reducing alerts by 83% in 30 days.",
            impact: "Response time cut to 18 minutes; enabled 12 new clients and boosted NPS by 34 points.",
            readMoreLink: "/case-studies/multi-finance-company-mauritius"
        },
        {
            id: 2,
            title: "Enterprise VAPT reduced critical exposure and accelerated remediation.",
            image: "/images/case-studies/case-study-2.jpg",
            challenge: "Global enterprise had 2,400 discovered issues; 15% critical findings left unprioritized, extending remediation cycles by six weeks",
            solution: "Auriseg performed targeted VAPT, delivered prioritized findings with remediation playbooks, and validated fixes, closing 95% of critical issues within 30 days.",
            impact: "Mean time to remediate critical vulnerabilities dropped to 8 days; audit readiness improved and stakeholder confidence increased.",
            readMoreLink: "/case-studies/global-retail-chain"
        },
        {
            id: 3,
            title: "Large financial firm achieved streamlined compliance and audit readiness.",
            image: "/images/case-studies/case-study-3.jpg",
            challenge: "Multi-branch bank struggled with fragmented controls across 60 systems; compliance reporting took 12 weeks and risk of non-compliance was high.",
            solution: "Auriseg mapped controls to regulations, centralized evidence collection, and automated compliance reporting across systems, producing continuous controls monitoring.",
            impact: "Compliance reporting time reduced to 5 days; audit preparedness improved, operational overhead decreased, and regulatory confidence strengthened.",
            readMoreLink: "/case-studies/healthcare-provider-network"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === caseStudies.length - 1;

    return (
        <>
            {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
            <section
                className="hidden md:block relative w-full overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    minHeight: '817px',
                    paddingTop: '100px',
                    paddingLeft: 'calc(60px + 1cm)',
                    paddingRight: '80px',
                    background: '#FFFFFF',
                    boxSizing: 'border-box',
                }}
            >
                <div className="relative w-full" style={{ maxWidth: '1240px' }}>

                    {/* Header row — badge + arrows */}
                    <div className="flex justify-between items-center mb-12">

                        {/* CASE STUDIES Badge */}
                        <div
                            className="inline-flex items-center justify-center gap-2"
                            style={{
                                border: '1px solid #CACACA',
                                padding: '10px 11px',
                                backgroundColor: '#FFFFFF',
                            }}
                        >
                            <img
                                src="/icons/playbook-icon.png"
                                alt="icon"
                                style={{ width: '8px', height: '11.2px' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Roboto Mono', monospace",
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    color: '#FE5538',
                                    textTransform: 'uppercase',
                                }}
                            >
                                CASE STUDIES
                            </span>
                        </div>

                        {/* Arrow Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                disabled={isPrevDisabled}
                                className={`flex items-center justify-center transition-all duration-300 ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                                    }`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#FF5536',
                                    border: 'none',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                aria-label="Previous slide"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isNextDisabled}
                                className={`flex items-center justify-center transition-all duration-300 ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                                    }`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#FF5536',
                                    border: 'none',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                aria-label="Next slide"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Slide Content */}
                    <div className="flex items-start gap-8 w-full">

                        {/* Left — Image */}
                        <div style={{ flex: '1.1', minWidth: 0 }}>
                            <img
                                src={caseStudies[currentSlide].image}
                                alt={caseStudies[currentSlide].title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '639 / 426',
                                    objectFit: 'cover',
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/639x426/CCCCCC/FFFFFF?text=Case+Study+Image';
                                }}
                            />
                        </div>

                        {/* Right — Content */}
                        <div style={{ flex: '1', minWidth: 0 }}>

                            {/* Title */}
                            <h2
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '40px',
                                    lineHeight: '110%',
                                    color: '#030407',
                                    margin: '0 0 30px 0',
                                }}
                            >
                                {caseStudies[currentSlide].title}
                            </h2>

                            {/* Challenge + Solution */}
                            <div
                                className="flex gap-8"
                                style={{ marginBottom: '30px' }}
                            >
                                {/* Challenge */}
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            color: '#13284C',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        Challenge
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            color: '#606060',
                                            margin: 0,
                                        }}
                                    >
                                        {caseStudies[currentSlide].challenge}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            fontFamily: "'Roboto Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            color: '#13284C',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        Solution
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            color: '#606060',
                                            margin: 0,
                                        }}
                                    >
                                        {caseStudies[currentSlide].solution}
                                    </p>
                                </div>
                            </div>

                            {/* Impact */}
                            <div
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    background: '#F7F7F7',
                                    padding: '20px 24px',
                                    marginBottom: '30px',
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Roboto Mono', monospace",
                                        fontWeight: 400,
                                        fontSize: '10px',
                                        lineHeight: '16px',
                                        letterSpacing: '0.8px',
                                        textTransform: 'uppercase',
                                        color: '#FF5536',
                                        marginBottom: '8px',
                                    }}
                                >
                                    IMPACT
                                </div>
                                <p
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#030407',
                                        margin: 0,
                                    }}
                                >
                                    {caseStudies[currentSlide].impact}
                                </p>
                            </div>

                            {/* Read Case Study Button */}
                            <a
                                href={caseStudies[currentSlide].readMoreLink}
                                className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#030407] hover:text-white"
                                style={{
                                    width: '213px',
                                    height: '50px',
                                    border: '1px solid #030407',
                                    borderRadius: '30px',
                                    backgroundColor: 'transparent',
                                    textDecoration: 'none',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#030407',
                                }}
                            >
                                Read Case Study →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
            <section className="md:hidden w-full" style={{ background: '#FFFFFF' }}>
                <div
                    className="mx-auto flex flex-col"
                    style={{
                        maxWidth: '374px',
                        minHeight: '970px',
                        gap: '32px',
                        background: '#FFFFFF',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                    }}
                >
                    {/* CASE STUDIES Badge - Mobile */}
                    <div className="flex justify-center w-full">
                        <div
                            className="inline-flex items-center justify-center gap-2"
                            style={{
                                border: '1px solid #CACACA',
                                padding: '8px 12px',
                                backgroundColor: '#FFFFFF',
                            }}
                        >
                            <img
                                src="/icons/playbook-icon.png"
                                alt="icon"
                                style={{ width: '6px', height: '8.4px' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Roboto Mono', monospace",
                                    fontWeight: 500,
                                    fontSize: '12px',
                                    color: '#FE5538',
                                    textTransform: 'uppercase',
                                }}
                            >
                                CASE STUDIES
                            </span>
                        </div>
                    </div>

                    {/* Image - Mobile */}
                    <div className="w-full">
                        <img
                            src={caseStudies[currentSlide].image}
                            alt={caseStudies[currentSlide].title}
                            style={{
                                width: '100%',
                                height: '249px',
                                objectFit: 'cover',
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/374x249/CCCCCC/FFFFFF?text=Case+Study';
                            }}
                        />
                    </div>

                    {/* Title - Mobile */}
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '120%',
                            color: '#030407',
                            textAlign: 'center',
                            margin: '0 16px',
                        }}
                    >
                        {caseStudies[currentSlide].title}
                    </h2>

                    {/* Challenge - Mobile */}
                    <div className="px-4">
                        <div
                            style={{
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 400,
                                fontSize: '20px',
                                color: '#13284C',
                                marginBottom: '12px',
                            }}
                        >
                            Challenge
                        </div>
                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '20px',
                                color: '#606060',
                                margin: 0,
                            }}
                        >
                            {caseStudies[currentSlide].challenge}
                        </p>
                    </div>

                    {/* Solution - Mobile */}
                    <div className="px-4">
                        <div
                            style={{
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 400,
                                fontSize: '20px',
                                color: '#13284C',
                                marginBottom: '12px',
                            }}
                        >
                            Solution
                        </div>
                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '20px',
                                color: '#606060',
                                margin: 0,
                            }}
                        >
                            {caseStudies[currentSlide].solution}
                        </p>
                    </div>

                    {/* Impact - Mobile */}
                    <div
                        className="mx-4"
                        style={{
                            borderRadius: '8px',
                            background: '#F7F7F7',
                            border: '1px solid #E8E8E4',
                            padding: '16px',
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 400,
                                fontSize: '10px',
                                letterSpacing: '0.8px',
                                textTransform: 'uppercase',
                                color: '#FF5536',
                                marginBottom: '8px',
                            }}
                        >
                            IMPACT
                        </div>
                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '20px',
                                color: '#030407',
                                margin: 0,
                            }}
                        >
                            {caseStudies[currentSlide].impact}
                        </p>
                    </div>

                    {/* Read Case Study Button - Mobile */}
                    <div className="flex justify-center px-4">
                        <a
                            href={caseStudies[currentSlide].readMoreLink}
                            className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#030407] hover:text-white"
                            style={{
                                width: '209px',
                                height: '44px',
                                border: '1px solid #000000',
                                borderRadius: '30px',
                                padding: '12px 20px',
                                backgroundColor: 'transparent',
                                textDecoration: 'none',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                fontSize: '13px',
                                color: '#000000',
                            }}
                        >
                            Read Case Study →
                        </a>
                    </div>

                    {/* Arrow Buttons - Mobile */}
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={prevSlide}
                            disabled={isPrevDisabled}
                            className={`flex items-center justify-center transition-all duration-300 ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                                }`}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#FF5536',
                                border: 'none',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            aria-label="Previous slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={isNextDisabled}
                            className={`flex items-center justify-center transition-all duration-300 ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                                }`}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#FF5536',
                                border: 'none',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            aria-label="Next slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudies;
