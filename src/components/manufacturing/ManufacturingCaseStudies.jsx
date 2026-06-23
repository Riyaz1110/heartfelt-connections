import React, { useState } from 'react';

const fontFaces = `
  @import url('https://fonts.cdnfonts.com/css/cabinet-grotesk');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap');
`;

const IndustriesCaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Success Story",
      image: "/images/industries_navbar/healthcare/case-study-1.jpg",
      description: "",
      challenge: [
        "No asset inventory for IIoT/OT devices across 9 plant locations",
        "Active sub-contractor access violations with 4 vendors handling CUI",
        "Operator credentials exposed in a prior dark web leak undetected for 11 months",
        "No incident response plan or DoD breach reporting protocol in place"
      ],
      solution: [
        "Deployed Auriseg IIoT discovery and network segmentation across all 9 sites in 3 weeks",
        "Executed emergency CMMC gap assessments and supply chain risk remediations",
        "Launched 24/7 SOC monitoring with identity threat detection enabled on Day 1",
        "Delivered NIST-aligned IR playbook and conducted full-staff tabletop exercise"
      ],
      impact: [
        {
          value: "100%",
          label: "of IT/OT assets discovered, classified, and segmented before assessment date"
        },
        {
          value: "4",
          label: "critical vendor violations remediated and passed with zero findings"
        },
        {
          value: "5-Hrs",
          label: "MTTR reduced from 18 days to 5 hours post-SOC deployment"
        },
        {
          value: "$3.2M",
          label: "in potential contract penalties and debarment risk eliminated"
        }
      ],
      readMoreLink: "/case-studies/healthcare-success-story"
    },
    // {
    //   id: 2,
    //   title: "Healthcare Success Story",
    //   image: "/images/industries_navbar/healthcare/case-study-1.jpg",
    //   description: "A large hospital network with 8 facilities and 500+ medical devices faced a ransomware attack that threatened patient care and data integrity.",
    //   challenge: [
    //     "Outdated security infrastructure across 8 facilities",
    //     "Lack of 24/7 security monitoring for critical systems"
    //   ],
    //   solution: [
    //     "Deployed 24/7 SOC monitoring across all facilities",
    //     "Implemented Zero Trust Network Access for remote access"
    //   ],
    //   impact: [
    //     { value: "99.9%", label: "Threat detection rate" },
    //     { value: "2min", label: "Average response time" },
    //     { value: "$2.5M", label: "Saved in potential losses" },
    //     { value: "500+", label: "Devices protected" }
    //   ],
    //   readMoreLink: "/case-studies/hospital-network"
    // },
    // {
    //   id: 3,
    //   title: "Healthcare Success Story",
    //   image: "/images/industries_navbar/healthcare/case-study-1.jpg",
    //   description: "A healthcare SaaS provider needed HIPAA compliance before a major enterprise contract deadline of 8 weeks.",
    //   challenge: [
    //     "No formal compliance program in place",
    //     "Multiple third-party integrations with security gaps"
    //   ],
    //   solution: [
    //     "Implemented comprehensive HIPAA compliance framework",
    //     "Secured all third-party integrations and data flows"
    //   ],
    //   impact: [
    //     { value: "100%", label: "HIPAA compliance achieved" },
    //     { value: "6", label: "Weeks early completion" },
    //     { value: "$5M", label: "Contract secured" },
    //     { value: "24/7", label: "Ongoing compliance monitoring" }
    //   ],
    //   readMoreLink: "/case-studies/saas-provider"
    // }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === caseStudies.length - 1;

  const currentCase = caseStudies[currentSlide];

  return (
    <>
      <style>{fontFaces}</style>
      {/* ══════════════════════════════
          DESKTOP VIEW
      ══════════════════════════════ */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '786px',
          background: '#FFFFFF',
          padding: '100px'
        }}
      >
        <div className="w-full max-w-[1240px] mx-auto">

          {/* Header: badge + arrows */}
          <div className="flex justify-between items-center mb-12">
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
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
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em',
                  color: '#FF5536',
                  textTransform: 'uppercase'
                }}
              >
                CASE STUDIES
              </span>
            </div>

            {/* Arrow Buttons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                onClick={prevSlide}
                disabled={isPrevDisabled}
                style={{
                  width: '50.85px',
                  height: '50.85px',
                  padding: '12.71px',
                  backgroundColor: isPrevDisabled ? '#FFBDAD' : '#FF5536',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.3s'
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
                style={{
                  width: '50.85px',
                  height: '50.85px',
                  padding: '12.71px',
                  backgroundColor: isNextDisabled ? '#FFBDAD' : '#FF5536',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.3s'
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
          <div style={{ display: 'flex', gap: '32px' }}>

            {/* Left — Image */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={currentCase.image}
                alt={currentCase.title}
                style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x500/CCCCCC/FFFFFF?text=Case+Study';
                }}
              />
            </div>

            {/* Right — Content */}
            <div style={{ width: '690px', flexShrink: 0 }}>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '44px',
                  lineHeight: '110%',
                  letterSpacing: '0',
                  color: '#030407',
                  width: '496px',
                  height: '48px',
                  marginBottom: '16px'
                }}
              >
                {currentCase.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-0.02em',
                  color: '#606060',
                  width: '690px',
                  minHeight: '48px',
                  marginBottom: '24px'
                }}
              >
                {currentCase.description}
              </p>

              {/* Challenge & Solution */}
              <div style={{ display: 'flex', gap: '30px', marginBottom: '24px' }}>

                {/* Challenge */}
                <div style={{ width: '330px' }}>
                  <h3
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '16px',
                      letterSpacing: '0',
                      color: '#13284C',
                      width: '330px',
                      height: '16px',
                      marginBottom: '20px'
                    }}
                  >
                    Challenge
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '18px', listStyleType: 'disc' }}>
                    {currentCase.challenge.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '-0.02em',
                          color: '#606060',
                          marginBottom: '14px'
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div style={{ width: '330px' }}>
                  <h3
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '16px',
                      letterSpacing: '0',
                      color: '#13284C',
                      width: '330px',
                      height: '16px',
                      marginBottom: '20px'
                    }}
                  >
                    Solution
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '18px', listStyleType: 'disc' }}>
                    {currentCase.solution.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '-0.02em',
                          color: '#606060',
                          marginBottom: '14px'
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact — 4 stats in ONE row with centered dividers */}
              <div
                style={{
                  backgroundColor: '#F7F7F7',
                  borderRadius: '8px',
                  width: '690px',
                  minHeight: '150px',
                  padding: '20px',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    color: '#FF5536',
                    marginBottom: '16px'
                  }}
                >
                  IMPACT
                </div>

                {/* 4 columns — divider lines vertically centered */}
                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                  {currentCase.impact.map((stat, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        /* left border acts as the centered divider for all except first */
                        borderLeft: idx !== 0 ? '1px solid #D0D0D0' : 'none',
                        paddingLeft: idx !== 0 ? '20px' : '0',
                        paddingRight: idx !== currentCase.impact.length - 1 ? '20px' : '0'
                      }}
                    >
                      {/* inner wrapper so content aligns top while border stretches full height */}
                      <div>
                        <div
                          style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '100%',
                            color: '#FF5536',
                            marginBottom: '6px'
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '11px',
                            lineHeight: '140%',
                            letterSpacing: '-0.02em',
                            color: '#606060'
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Read Case Study Button */}
              <a
                href={currentCase.readMoreLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '213px',
                  height: '50px',
                  gap: '10px',
                  border: '1px solid #030407',
                  borderRadius: '10px',
                  padding: '15px 20px',
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#030407',
                  transition: 'background 0.3s, color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#030407';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#030407';
                }}
              >
                Read Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MOBILE VIEW
      ══════════════════════════════ */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: 'auto',
          background: '#FFFFFF',
          padding: '40px 16px'
        }}
      >
        <div style={{ maxWidth: '374px', margin: '0 auto' }}>

          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
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
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '12px',
                  letterSpacing: '-0.02em',
                  color: '#FF5536',
                  textTransform: 'uppercase'
                }}
              >
                CASE STUDIES
              </span>
            </div>
          </div>

          {/* Image */}
          <div style={{ width: '100%', marginBottom: '20px' }}>
            <img
              src={currentCase.image}
              alt={currentCase.title}
              style={{ width: '100%', height: '249px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/374x249/CCCCCC/FFFFFF?text=Case+Study';
              }}
            />
          </div>

          {/* Subheading — NO description below */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '30px',
              letterSpacing: '-0.02em',
              color: '#030407',
              marginBottom: '24px',
              textAlign: 'left'
            }}
          >
            {currentCase.title}
          </h2>

          {/* Challenge & Solution — no background card */}
          <div style={{ marginBottom: '24px' }}>

            <div style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: '#13284C',
                  marginBottom: '12px'
                }}
              >
                Challenge
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', listStyleType: 'disc' }}>
                {currentCase.challenge.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '160%',
                      letterSpacing: '-0.02em',
                      color: '#606060',
                      marginBottom: '8px'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: '#13284C',
                  marginBottom: '12px'
                }}
              >
                Solution
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', listStyleType: 'disc' }}>
                {currentCase.solution.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '160%',
                      letterSpacing: '-0.02em',
                      color: '#606060',
                      marginBottom: '8px'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact — Mobile with bullet prefix */}
          <div
            style={{
              backgroundColor: '#F7F7F7',
              border: '1px solid #E8E8E4',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '12px',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#FF5536',
                marginBottom: '16px'
              }}
            >
              IMPACT
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {currentCase.impact.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                      color: '#FF5536',
                      marginBottom: '4px'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '140%',
                      letterSpacing: '-0.02em',
                      color: '#606060'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Read Case Study Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <a
              href={currentCase.readMoreLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '209px',
                height: '44px',
                gap: '10px',
                border: '1px solid #000000',
                borderRadius: '10px',
                padding: '12px 20px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#000000'
              }}
            >
              Read Case Study →
            </a>
          </div>

          {/* Arrow Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <button
              onClick={prevSlide}
              disabled={isPrevDisabled}
              style={{
                width: '50.85px',
                height: '50.85px',
                backgroundColor: isPrevDisabled ? '#FFBDAD' : '#FF5536',
                border: 'none',
                borderRadius: '50%',
                cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
              style={{
                width: '50.85px',
                height: '50.85px',
                backgroundColor: isNextDisabled ? '#FFBDAD' : '#FF5536',
                border: 'none',
                borderRadius: '50%',
                cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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

export default IndustriesCaseStudies;
