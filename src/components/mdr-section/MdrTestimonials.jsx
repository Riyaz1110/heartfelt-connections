import React, { useState } from 'react';

const ThreatTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
            quote: "Auriseg’s audit and detailed reporting gave us clear visibility into security gaps and prioritized the risks we needed to fix first. Their team explained each finding, showed the business impact, and provided practical remediation steps. With their guidance we remediated critical vulnerabilities quickly, reduced exposure, and strengthened our security posture.",
            name: "Rathish",
            title: "CDirector — InvittyCognitive Solutions",
            companyIcon: "/images/industries_navbar/healthcare/samsung-icon.png",
            socialLinks: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com"
            }
        },
        {
            id: 2,
            image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
            quote: "Working with Auriseg was seamless and highly effective. Their team maintained clear, timely communication throughout the VAPT engagement, walked us through findings with practical context, and delivered actionable insights we could implement immediately. Their expertise and support noticeably strengthened our security posture and confidence in moving forward.",
            name: "Mohamed Liyakathali",
            title: "Senior Lead – Platform — Aparajitha Software Services Pvt. Ltd.",
            companyIcon: "/images/industries_navbar/healthcare/healthfirst-icon.png",
            socialLinks: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com"
            }
        },

    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === testimonials.length - 1;
    const currentTestimonial = testimonials[currentSlide];

    const ArrowBtn = ({ onClick, disabled, dir }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                width: '50.85px', height: '50.85px',
                backgroundColor: disabled ? '#FFBDAD' : '#FF5536',
                border: 'none', borderRadius: '50%',
                cursor: disabled ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'opacity 0.3s', flexShrink: 0
            }}
            aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
        >
            {dir === 'prev' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </button>
    );

    const SocialIcons = () => (
        <div style={{ display: 'flex', gap: '8px' }}>
            {/* LinkedIn */}
            <a href={currentTestimonial.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F0EFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF5536" />
                    <rect x="4.5" y="9.5" width="3" height="9" fill="white" />
                    <circle cx="6" cy="6.5" r="1.5" fill="white" />
                    <path d="M10 9.5h2.5v1.3c.4-.7 1.3-1.5 2.8-1.5C17.8 9.3 19 10.6 19 13v6h-3v-5.5c0-1.2-.4-2-1.4-2-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V19H10V9.5z" fill="white" />
                </svg>
            </a>

            {/* Instagram */}
            <a href={currentTestimonial.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F0EFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF5536" />
                    <rect x="6.5" y="6.5" width="11" height="11" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="16.2" cy="7.8" r="0.9" fill="white" />
                </svg>
            </a>

            {/* X / Twitter */}
            <a href={currentTestimonial.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F0EFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF5536" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.012 2.25h6.962l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
            </a>
        </div>
    );
    return (
        <>
            {/* ══════════════════════════════
          DESKTOP VIEW
      ══════════════════════════════ */}
            <section
                className="hidden md:block relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    minHeight: '683px',
                    background: '#FFFFFF',
                    padding: '80px 0'
                }}
            >
                <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="max-w-[1240px] mx-auto">

                        {/* Badge — centered above box */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                border: '1px solid #ADADAD', padding: '10px 11px', backgroundColor: 'transparent'
                            }}>
                                <img src="/icons/playbook-icon.png" alt="icon"
                                    style={{ width: '8px', height: '11.2px' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <span style={{
                                    fontFamily: "'Roboto Mono', monospace", fontWeight: 400, fontSize: '16px',
                                    lineHeight: '100%', letterSpacing: '-0.04em', color: '#FF5536', textTransform: 'uppercase'
                                }}>
                                    TESTIMONIALS
                                </span>
                            </div>
                        </div>
                        <h2
                            style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 500,
                                fontSize: '48px',
                                lineHeight: '110%',
                                color: '#030407',
                                textAlign: 'center',
                                margin: '0 0 16px 0',
                            }}
                        >
                            What Partners Report
                        </h2>

                        {/* ── SINGLE BORDERED BOX — full width ── */}
                        <div style={{
                            width: '100%',
                            border: '1px solid #ADADAD',
                            borderRadius: '10px',
                            padding: '24px',
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            gap: '32px',
                            alignItems: 'stretch'
                        }}>

                            {/* Left — Image */}
                            <div style={{ flexShrink: 0 }}>
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    style={{ width: '425px', height: '337px', borderRadius: '12px', objectFit: 'cover' }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/425x337/CCCCCC/FFFFFF?text=Image'; }}
                                />
                            </div>

                            {/* Right — Content */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                                {/* Quote */}
                                <p style={{
                                    fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '22px',
                                    lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407',
                                    margin: '0 0 24px 0', flex: 1
                                }}>
                                    {currentTestimonial.quote}
                                </p>

                                {/* Divider */}
                                <div style={{ width: '100%', height: '1px', backgroundColor: '#ADADAD', marginBottom: '20px' }} />

                                {/* Bottom row: company icon + name/title + social icons — all in ONE row */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                    {/* Left side: icon + name + title */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        {/* Company Icon Box */}
                                        <div style={{
                                            width: '50px', height: '50px', borderRadius: '10px',
                                            backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <img
                                                src={currentTestimonial.companyIcon}
                                                alt="Company Icon"
                                                style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                                                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                            />
                                        </div>
                                        {/* Name + Title */}
                                        <div>
                                            <div style={{
                                                fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                                                fontSize: '16px', lineHeight: '100%', letterSpacing: '-0.02em',
                                                color: '#030407', marginBottom: '4px'
                                            }}>
                                                {currentTestimonial.name}
                                            </div>
                                            <div style={{
                                                fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                                                fontSize: '14px', lineHeight: '150%', color: '#030407'
                                            }}>
                                                {currentTestimonial.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side: social icons */}
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>

                        {/* Arrow Buttons — below the box, centered */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
                            <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
                            <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          MOBILE VIEW  — unchanged
      ══════════════════════════════ */}
            <section
                className="md:hidden relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    minHeight: '812.63px',
                    background: '#FFFFFF',
                    padding: '60px 34px'
                }}
            >
                <div className="max-w-[376px] mx-auto">

                    {/* Badge Mobile */}
                    <div className="flex justify-center mb-8">
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            border: '0.52px solid #ADADAD', padding: '5.18px 5.7px', backgroundColor: 'transparent'
                        }}>
                            <img src="/icons/playbook-icon.png" alt="icon"
                                style={{ width: '6px', height: '8.4px' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span style={{
                                fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '12px',
                                lineHeight: '12px', letterSpacing: '-0.02em', color: '#FF5536', textTransform: 'uppercase'
                            }}>
                                TESTIMONIALS
                            </span>
                        </div>
                    </div>
                    {/* ── Heading - Mobile ── */}
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '28px',
                            lineHeight: '120%',
                            letterSpacing: '-0.02em',
                            color: '#030407',
                            textAlign: 'center',
                            width: '299px',
                            margin: '0 0 12px 0',
                        }}
                    >
                        What Partners Report
                    </h2>

                    {/* Mobile Content Box */}
                    <div style={{
                        width: '308px', background: '#FFFFFF',
                        border: '1px solid #ADADAD', borderRadius: '10px', padding: '13px 11.4px'
                    }}>
                        <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            style={{ width: '285.2px', height: '226.15px', borderRadius: '10.74px', objectFit: 'cover', marginBottom: '20px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/285x226/CCCCCC/FFFFFF?text=Image'; }}
                        />
                        <p style={{
                            fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px',
                            lineHeight: '100%', letterSpacing: '-0.02em', color: '#030407', marginBottom: '20px'
                        }}>
                            {currentTestimonial.quote}
                        </p>
                        <div style={{ width: '100%', height: '1px', backgroundColor: '#ADADAD', marginBottom: '20px' }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '10px', backgroundColor: '#EEEEEE',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <img src={currentTestimonial.companyIcon} alt="Company Icon"
                                    style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                />
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                                    fontSize: '14px', lineHeight: '150%', color: '#030407', marginBottom: '4px'
                                }}>
                                    {currentTestimonial.name}
                                </div>
                                <div style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                                    fontSize: '12px', lineHeight: '150%', color: '#444444'
                                }}>
                                    {currentTestimonial.title}
                                </div>
                            </div>
                        </div>
                        <SocialIcons />
                    </div>

                    {/* Arrow Buttons Mobile */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
                        <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
                        <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default ThreatTestimonials;
