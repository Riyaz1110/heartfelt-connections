import React, { useState } from 'react';

const IndustriesTargetAudience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const audiences = [
    {
      image: "/images/industries_navbar/healthcare/audience-health-systems.jpg",
      title: "Government Agencies",
      description: "Local, regional, and national agencies responsible for citizen services, records, finance, public safety, and administrative operations need practical security programs that improve resilience without slowing service delivery."
    },
    {
      image: "/images/industries_navbar/healthcare/audience-physician-groups.jpg",
      title: "Energy & Utilities Providers",
      description: "Power, water, gas, and utility operators require visibility across industrial and enterprise systems to prevent outages, defend against targeted attacks, and protect continuity of service."
    },
    {
      image: "/images/industries_navbar/healthcare/audience-ambulatory.jpg",
      title: "Transportation & Smart Infrastructure Operators",
      description: "Transit systems, logistics hubs, and connected infrastructure environments depend on secure networks, monitored assets, and rapid response capabilities to reduce operational risk."
    },
    {
      image: "/images/industries_navbar/healthcare/audience-digital-health.jpg",
      title: "Public Institutions & Essential Service Networks",
      description: "Organizations supporting healthcare systems, communications, education, and public administration need scalable protection, compliance support, and stronger incident preparedness across distributed environments."
    }
  ];

  // Desktop: show 3 cards at a time
  const getVisibleCardsDesktop = () => {
    if (currentIndex === 0) return audiences.slice(0, 3);
    if (currentIndex === 1) return audiences.slice(1, 4);
    return audiences.slice(0, 3);
  };

  const nextSlideDesktop = () => {
    if (currentIndex < audiences.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlideDesktop = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Mobile: show 1 card at a time
  const nextSlideMobile = () => {
    setCurrentIndex((prev) => (prev + 1) % audiences.length);
  };

  const prevSlideMobile = () => {
    setCurrentIndex((prev) => (prev - 1 + audiences.length) % audiences.length);
  };

  const isPrevDisabledDesktop = currentIndex === 0;
  const isNextDisabledDesktop = currentIndex >= audiences.length - 3;

  const isPrevDisabledMobile = currentIndex === 0;
  const isNextDisabledMobile = currentIndex === audiences.length - 1;

  const visibleCardsDesktop = getVisibleCardsDesktop();

  return (
    <>
      {/* Desktop View - Show 3 cards with arrows */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '1020px',
          background: '#030407',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            {/* TARGET AUDIENCE - Badge with Icon - Centered */}
            <div className="flex justify-center mb-6">
              <div
                className="inline-flex items-center justify-center gap-2"
                style={{
                  border: '1px solid #F7F7F7',
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
                    color: '#FFFFFF'
                  }}
                >
                  TARGET AUDIENCE
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '44px',
                lineHeight: '50px',
                letterSpacing: '0%',
                color: '#FFFFFF',
                marginBottom: '48px',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Built for Essential-Service Environments
            </h2>

            {/* 3 Cards with Arrow Navigation */}
            <div className="relative">
              {/* Cards Container */}
              <div className="flex justify-center gap-8">
                {visibleCardsDesktop.map((audience, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col"
                    style={{
                      width: '380px',
                      minHeight: '547px',
                      gap: '32px'
                    }}
                  >
                    {/* Image */}
                    <img
                      src={audience.image}
                      alt={audience.title}
                      style={{
                        width: '380px',
                        height: '300px',
                        objectFit: 'cover',
                        opacity: 1
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/380x300/333333/FFFFFF?text=Image';
                      }}
                    />

                    {/* Content */}
                    <div style={{ width: '380px' }}>
                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 500,
                          fontSize: '30px',
                          lineHeight: '100%',
                          letterSpacing: '-2%',
                          color: '#FFFFFF',
                          width: '380px',
                          height: '74px',
                          marginBottom: '16px'
                        }}
                      >
                        {audience.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '18px',
                          lineHeight: '28px',
                          letterSpacing: '-2%',
                          color: '#F7F7F7',
                          width: '380px',
                          minHeight: '84px',
                          margin: 0
                        }}
                      >
                        {audience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <button
                  onClick={prevSlideDesktop}
                  disabled={isPrevDisabledDesktop}
                  className={`flex items-center justify-center transition-all duration-300 ${isPrevDisabledDesktop ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                    }`}
                  style={{
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    gap: '10px',
                    borderRadius: '40px',
                    backgroundColor: '#5D5D5D',
                    border: 'none',
                    cursor: isPrevDisabledDesktop ? 'not-allowed' : 'pointer'
                  }}
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={nextSlideDesktop}
                  disabled={isNextDisabledDesktop}
                  className={`flex items-center justify-center transition-all duration-300 ${isNextDisabledDesktop ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                    }`}
                  style={{
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    gap: '10px',
                    borderRadius: '40px',
                    backgroundColor: '#5D5D5D',
                    border: 'none',
                    cursor: isNextDisabledDesktop ? 'not-allowed' : 'pointer'
                  }}
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View - Carousel with 1 card at a time, NO DOTS */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '708px',
          background: '#030407',
          padding: '40px 16px'
        }}
      >
        <div className="max-w-[375px] mx-auto">

          {/* TARGET AUDIENCE - Badge Mobile - Centered */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '0.52px solid #444444',
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
                  lineHeight: '12px',
                  letterSpacing: '-2%',
                  color: '#FFFFFF'
                }}
              >
                TARGET AUDIENCE
              </span>
            </div>
          </div>

          {/* Main Heading - Mobile */}
          <h2
            className="text-center"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '30px',
              letterSpacing: '-2%',
              color: '#FFFFFF',
              marginBottom: '32px',
              textAlign: 'center'
            }}
          >
            Built for Essential-Service Environments
          </h2>

          {/* Mobile Carousel - Current Card */}
          <div
            className="flex flex-col mx-auto"
            style={{
              width: '339.85px',
              gap: '28.62px'
            }}
          >
            {/* Image */}
            <img
              src={audiences[currentIndex].image}
              alt={audiences[currentIndex].title}
              style={{
                width: '339.85px',
                height: '268.3px',
                objectFit: 'cover',
                opacity: 1
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/340x268/333333/FFFFFF?text=Image';
              }}
            />

            {/* Content */}
            <div>
              {/* Title - Mobile */}
              <h3
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
              >
                {audiences[currentIndex].title}
              </h3>

              {/* Description - Mobile */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '100%',
                  letterSpacing: '3%',
                  color: '#F7F7F7',
                  margin: 0
                }}
              >
                {audiences[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Mobile (NO DOTS) */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevSlideMobile}
              disabled={isPrevDisabledMobile}
              className={`flex items-center justify-center transition-all duration-300 ${isPrevDisabledMobile ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                }`}
              style={{
                width: '40px',
                height: '40px',
                padding: '10px',
                gap: '10px',
                borderRadius: '40px',
                backgroundColor: '#5D5D5D',
                border: 'none',
                cursor: isPrevDisabledMobile ? 'not-allowed' : 'pointer'
              }}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={nextSlideMobile}
              disabled={isNextDisabledMobile}
              className={`flex items-center justify-center transition-all duration-300 ${isNextDisabledMobile ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
                }`}
              style={{
                width: '40px',
                height: '40px',
                padding: '10px',
                gap: '10px',
                borderRadius: '40px',
                backgroundColor: '#5D5D5D',
                border: 'none',
                cursor: isNextDisabledMobile ? 'not-allowed' : 'pointer'
              }}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesTargetAudience;
