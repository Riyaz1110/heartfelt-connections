import React, { useState } from 'react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Regional MSSP cut alert fatigue, scaled operations efficiently.",
      image: "/images/case-studies/case-study-1.jpg",
      challenge: "120-person MSSP faced 18,000 daily alerts; 80% false positives delayed response by 4.2 hours.",
      solution: "Auriseg integrated Sentinel and CrowdStrike,automating triage and reducing alerts by 83% in 30 days.",
      impact: "Response time cut to 18 minutes; enabled 12 new clients and boosted NPS by 34 points.",
      readMoreLink: "/case-studies/multi-finance-company-mauritius"
    },
    {
      id: 2,
      title: "Enterprise VAPT reduced critical exposure and accelerated remediation",
      image: "/images/case-studies/case-study-2.jpg",
      challenge: "Global enterprise had 2,400 discovered issues; 15% critical findings left unprioritized, extending remediation cycles by six weeks.",
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === caseStudies.length - 1;

  return (
    <>
      {/* ════════════════════════════════
          DESKTOP — hidden on mobile
      ════════════════════════════════ */}
      <section
        className="hidden md:block"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '817px',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          overflow: 'hidden',
          padding: '100px 0'
        }}
      >
        <div className="w-full">
          <div style={{ paddingLeft: 'calc(60px + 1cm)', paddingRight: '80px' }}>

            {/* Header: badge + arrows */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '64px' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', border: '1px solid #E5E5E5', padding: '10px 16px', backgroundColor: '#FFFFFF'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                  fontSize: '14px', color: '#FF5536', letterSpacing: '0.05em'
                }}>
                  CASE STUDIES
                </span>
              </div>

              {/* Arrow Buttons */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <button onClick={prevSlide} disabled={isPrevDisabled}
                  style={{
                    width: '48px', height: '48px',
                    backgroundColor: isPrevDisabled ? '#FFE5E0' : '#FF5536',
                    border: 'none', borderRadius: '50%',
                    cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                  aria-label="Previous slide"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={nextSlide} disabled={isNextDisabled}
                  style={{
                    width: '48px', height: '48px',
                    backgroundColor: isNextDisabled ? '#FFE5E0' : '#FF5536',
                    border: 'none', borderRadius: '50%',
                    cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                  aria-label="Next slide"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slide Content */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '64px' }}>

              {/* Left — Image */}
              <div style={{ flexShrink: 0, width: '50%' }}>
                <img
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x450/CCCCCC/FFFFFF?text=Case+Study+Image';
                  }}
                />
              </div>

              {/* Right — Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '40px', lineHeight: '1.2', color: '#030407',
                  margin: '0 0 40px 0'
                }}>
                  {caseStudies[currentSlide].title}
                </h2>

                {/* Challenge + Solution */}
                <div style={{ display: 'flex', gap: '32px', marginBottom: '40px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Roboto Mono', monospace", fontWeight: 400,
                      fontSize: '22px', color: '#030407', marginBottom: '16px'
                    }}>
                      Challenge
                    </div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 400,
                      fontSize: '14px', lineHeight: '1.6', color: '#444444', margin: 0
                    }}>
                      {caseStudies[currentSlide].challenge}
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Roboto Mono', monospace", fontWeight: 400,
                      fontSize: '22px', color: '#030407', marginBottom: '16px'
                    }}>
                      Solution
                    </div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 400,
                      fontSize: '14px', lineHeight: '1.6', color: '#444444', margin: 0
                    }}>
                      {caseStudies[currentSlide].solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div style={{
                  borderRadius: '12px', background: '#F4F4F5',
                  padding: '24px', marginBottom: '40px', width: '100%'
                }}>
                  <div style={{
                    fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                    fontSize: '10px', letterSpacing: '0.05em',
                    textTransform: 'uppercase', color: '#FF5536', marginBottom: '12px'
                  }}>
                    IMPACT
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: '12px', lineHeight: '1.6', color: '#030407', margin: 0
                  }}>
                    {caseStudies[currentSlide].impact}
                  </p>
                </div>

                {/* Read Case Study Button */}
                <div>
                  <a href={caseStudies[currentSlide].readMoreLink}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid #030407', borderRadius: '8px', backgroundColor: '#FFFFFF',
                      padding: '16px 24px', textDecoration: 'none',
                      fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px',
                      color: '#030407', transition: 'all 0.3s', gap: '8px'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F4F4F5'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                  >
                    Read Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#030407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>
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
          boxSizing: 'border-box'
        }}
      >
        <div style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
          <div style={{
            maxWidth: '374px', margin: '0 auto',
            display: 'flex', flexDirection: 'column',
            gap: '32px', paddingTop: '40px', paddingBottom: '40px'
          }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', border: '1px solid #CACACA',
                padding: '8px 12px', backgroundColor: '#FFFFFF'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '6px', height: '8.4px', borderRadius: '0.4px' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                  fontSize: '12px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#FE5538'
                }}>
                  CASE STUDIES
                </span>
              </div>
            </div>

            {/* Slide Content */}
            <div style={{ width: '100%' }}>

              {/* Image */}
              <div style={{ width: '100%', marginBottom: '24px' }}>
                <img
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  style={{ width: '100%', height: '249px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/374x249/CCCCCC/FFFFFF?text=Case+Study';
                  }}
                />
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700,
                fontSize: '24px', lineHeight: '120%', letterSpacing: '-0.02em',
                color: '#030407', textAlign: 'center', marginBottom: '24px'
              }}>
                {caseStudies[currentSlide].title}
              </h2>

              {/* Challenge */}
              <div style={{ marginBottom: '20px', padding: '0 16px' }}>
                <div style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 400,
                  fontSize: '20px', lineHeight: '16px', color: '#13284C', marginBottom: '12px'
                }}>
                  Challenge
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: '12px', lineHeight: '20.15px', color: '#606060', margin: 0
                }}>
                  {caseStudies[currentSlide].challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: '20px', padding: '0 16px' }}>
                <div style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 400,
                  fontSize: '20px', lineHeight: '16px', color: '#13284C', marginBottom: '12px'
                }}>
                  Solution
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: '12px', lineHeight: '20.15px', color: '#606060', margin: 0
                }}>
                  {caseStudies[currentSlide].solution}
                </p>
              </div>

              {/* Impact */}
              <div style={{
                borderRadius: '8px', background: '#F7F7F7',
                border: '1px solid #E8E8E4', padding: '16px',
                margin: '0 16px 24px 16px'
              }}>
                <div style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 400,
                  fontSize: '10px', lineHeight: '16px', letterSpacing: '0.8px',
                  textTransform: 'uppercase', color: '#FF5536', marginBottom: '8px'
                }}>
                  IMPACT
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: '12px', lineHeight: '20px', color: '#030407', margin: 0
                }}>
                  {caseStudies[currentSlide].impact}
                </p>
              </div>

              {/* Button */}
              <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                <a href={caseStudies[currentSlide].readMoreLink}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '209px', height: '44px', border: '1px solid #000000',
                    borderRadius: '30px', padding: '12px 20px', backgroundColor: 'transparent',
                    textDecoration: 'none', fontFamily: "'Inter', sans-serif",
                    fontWeight: 500, fontSize: '13px', lineHeight: '100%',
                    letterSpacing: '-0.02em', color: '#000000', transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#030407'; e.currentTarget.style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000000'; }}
                >
                  Read Case Study →
                </a>
              </div>
            </div>

            {/* Arrow Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <button onClick={prevSlide} disabled={isPrevDisabled}
                style={{
                  width: '50.85px', height: '50.85px', padding: '12.71px',
                  backgroundColor: '#FF5536', border: 'none', borderRadius: '50%',
                  cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                  opacity: isPrevDisabled ? 0.5 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={nextSlide} disabled={isNextDisabled}
                style={{
                  width: '50.85px', height: '50.85px', padding: '12.71px',
                  backgroundColor: '#FF5536', border: 'none', borderRadius: '50%',
                  cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                  opacity: isNextDisabled ? 0.5 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
