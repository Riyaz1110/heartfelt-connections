import React, { useState } from 'react';

const IndustriesTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "“I joined as a Tier 1 analyst and was running complex threat investigations within 6 months. Auriseg gives you real ownership fast, because the work demands it. I’ve learned more here in 2 years.”",
      name: "Emily Thompson",
      title: "SOC Analyst | Auriseg",
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
      quote: "Working on engagements across the US, Middle East, and Southeast Asia in the same quarter is genuinely unusual for a company of this size. The global exposure here accelerated my career in ways I couldn't have predicted when I joined.",
      name: "Aswin",
      title: "Penetration Test Engineer | Auriseg",
      companyIcon: "/images/industries_navbar/healthcare/healthfirst-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "Being part of Auriseg’s GRC team means staying ahead of evolving regulations while working closely with security operations. It’s rare to see compliance this tightly integrated with actual defense.",
      name: "Praveen",
      title: "Senior GRC Consultant | Auriseg",
      companyIcon: "/images/industries_navbar/healthcare/medtech-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 4,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "My early career on Auriseg's marketing team has been pivotal. I've worked on developing marketing campaigns, built cybersecurity narratives, and contributed to positioning that drives business impact. ",
      name: "Rahul",
      title: "Digital Marketing Associate| Auriseg",
      companyIcon: "/images/industries_navbar/healthcare/medtech-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    }
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
        style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="5" fill="#FF5536" />
          <path fill="#F7F7F7" d="M6.5 19h3v-9h-3v9zM8 8.5c1 0 1.5-.7 1.5-1.5s-.5-1.5-1.5-1.5-1.5.7-1.5 1.5.5 1.5 1.5 1.5zm3.5 10.5h3v-5c0-2.5 3-2.7 3 0v5h3v-6c0-4.5-5-4.5-6-2.5v-1.5h-3v9z" />
        </svg>
      </a>
      {/* Instagram */}
      <a href={currentTestimonial.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
        style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="5" fill="#FF5536" />
          <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#F7F7F7" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="#F7F7F7" strokeWidth="1.8" />
          <circle cx="16.5" cy="7.5" r="1.2" fill="#F7F7F7" />
        </svg>
      </a>
      {/* Twitter / X */}
      <a href={currentTestimonial.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
        style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="5" fill="#FF5536" />
          <g transform="translate(3.6, 3.6) scale(0.7)">
            <path fill="#F7F7F7" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.012 2.25h6.962l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </g>
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
          <div className="max-w-[956px] mx-auto">

            {/* Badge — centered above box */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
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
                  LIFE ON THE INSIDE
                </span>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700, fontSize: '48px',
              color: '#030407', textAlign: 'center', margin: '0 0 40px 0'
            }}>
              The Caliber of the Team Is the Standard.
            </h2>

            {/* ── SINGLE BORDERED BOX — full width ── */}
            <div style={{
              width: '956px',
              height: '327px',
              border: '1px solid #ADADAD',
              borderRadius: '10px',
              padding: '14px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              gap: '44px',
              alignItems: 'stretch',
              boxSizing: 'border-box'
            }}>

              {/* Left — Image */}
              <div style={{ flexShrink: 0 }}>
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  style={{ width: '377px', height: '299px', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/377x299/CCCCCC/FFFFFF?text=Image'; }}
                />
              </div>

              {/* Right — Content */}
              <div style={{
                width: '454px',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '43px',
                boxSizing: 'border-box'
              }}>

                {/* Quote */}
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '22px',
                  lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407',
                  width: '454px', minHeight: '72px', margin: '0', textAlign: 'left'
                }}>
                  {currentTestimonial.quote}
                </p>

                {/* Divider */}
                <div style={{ width: '454px', height: '1px', backgroundColor: '#ADADAD', marginTop: '44px', marginBottom: '44px' }} />

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
                LIFE ON THE INSIDE
              </span>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700, fontSize: '32px',
            color: '#030407', textAlign: 'center', margin: '0 0 32px 0'
          }}>
            The Caliber of the Team Is the Standard.
          </h2>

          {/* Mobile Content Box */}
          <div style={{
            width: '308px', background: '#FFFFFF',
            border: '1px solid #ADADAD', borderRadius: '10px', padding: '13px 11.4px'
          }}>
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{ width: '285.2px', height: '226.15px', borderRadius: '10.74px', objectFit: 'cover', objectPosition: 'center center', display: 'block', marginBottom: '20px' }}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/285x226/CCCCCC/FFFFFF?text=Image'; }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '15px',
              lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407', marginBottom: '20px',
              textAlign: 'left'
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
            <div style={{ display: 'flex', gap: '8px' }}>
              {['linkedin', 'instagram', 'twitter'].map((platform) => (
                <a className="testimonial-social-icon" key={platform} href={currentTestimonial.socialLinks[platform]}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '44px', height: '44px', borderRadius: '100px',
                    backgroundColor: '#F7F7F7', color: '#FF5536', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {platform === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 9H2V21H6V9Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.908 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09406 12.5922C7.96044 11.7616 8.09196 10.9099 8.47027 10.1584C8.84858 9.40685 9.45418 8.79378 10.201 8.40627C10.9478 8.01876 11.7978 7.87655 12.63 7.99997C13.4789 8.12571 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8743 10.5211 16 11.37Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 6.5H17.51" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M23 3C22.0424 3.67552 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34668 17.567 3.12393C16.6767 2.90119 15.7395 2.95716 14.8821 3.28445C14.0247 3.61174 13.2884 4.19441 12.773 4.95372C12.2575 5.71304 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18582 6.93101 7.39545C5.36074 6.60509 4.01032 5.43886 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
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

export default IndustriesTestimonials;
