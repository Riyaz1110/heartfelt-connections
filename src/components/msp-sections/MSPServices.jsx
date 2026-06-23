import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const MSPServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      title: 'SOC Operations',
      description: 'Fully managed SOC operations running continuously across your entire client environment.',
      link: '/services/soc-augmentation',
      linkText: 'Explore →',
      icon: '/icons/msp/soc-icon.png'
    },
    {
      title: 'Threat Monitoring',
      description: 'Real-time threat monitoring across endpoints, networks, and your cloud infrastructure.',
      link: '/services/threat-monitoring',
      linkText: 'Explore →',
      icon: '/icons/msp/threat-icon.png'
    },
    {
      title: 'Incident Response',
      description: 'Structured incident response to contain, investigate, and remediate active security threats.',
      link: '/services/incident-response',
      linkText: 'Explore →',
      icon: '/icons/msp/incident-icon.png'
    },
    {
      title: 'White-Label Security Services',
      description: 'Rebrandable threat reports, vulnerability scans, and compliance outputs sold as yours.',
      link: '/services/white-label-security',
      linkText: 'Explore →',
      icon: '/icons/msp/whitelabel-icon.png'
    },
    {
      title: 'Offshore Cybersecurity Teams',
      description: 'Offshore SOC analysts delivering expert-level security coverage at a lower cost.',
      link: '/services/offshore-teams',
      linkText: 'Explore →',
      icon: '/icons/msp/codelivery-icon.png'
    },
    {
      title: 'Co-Delivery and Enablement',
      description: 'Work with our analysts to build your internal security delivery capabilities.',
      link: '/services/co-delivery',
      linkText: 'Explore →',
      icon: '/icons/msp/whitelabel-security-icon.png'
    },
    // {
    //   title: 'Offshore Cybersecurity Teams',
    //   description: 'Offshore SOC analysts delivering expert-level security coverage at a lower cost.',
    //   link: '/services/offshore-cybersecurity-teams',
    //   linkText: 'Explore →',
    //   icon: '/icons/msp/threat-icon.png'
    // },
    // {
    //   title: 'SOC Augmentation and Coverage',
    //   description: 'Extent SOC capacity with on-demand SIEM monitoring and IR analysts.',
    //   link: '/services/soc-augmentation-and-coverage',
    //   linkText: 'Explore →',
    //   icon: '/icons/msp/soc-icon.png'
    // }
  ];

  const GAP = 12;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const index = Math.round(scrollLeft / (cardWidth + GAP));
      setCurrentIndex(index);
      setScrollPosition(scrollLeft);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index];
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    setCurrentIndex(index);
  };

  const handlePrev = () => { if (currentIndex > 0) scrollToCard(currentIndex - 1); };
  const handleNext = () => { if (currentIndex < services.length - 1) scrollToCard(currentIndex + 1); };

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
          background: '#FFFFFF',
          padding: '80px 0',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            maxWidth: '1440px', margin: '0 auto', paddingLeft: 'clamp(24px, 6.94vw, 100px)', paddingRight: 'clamp(24px, 6.94vw, 100px)', boxSizing: 'border-box',
          }}
        >
          {/* SERVICE Badge */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: '1px solid #CACACA',
                padding: '10px 11px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{ width: '8px', height: '11.2px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                color: '#FE5538'
              }}>
                SERVICE
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: '110%',
                letterSpacing: '-0.02em',
                textAlign: 'left',
                color: '#000000',
                margin: 0
              }}
            >
              Deploy Enterprise Security <br />
              Infrastructure Instantly
            </h2>
          </div>

          {/* Desktop Grid with corner indicators */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '3px solid #FF5536', borderLeft: '3px solid #FF5536', zIndex: 10 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', borderTop: '3px solid #FF5536', borderRight: '3px solid #FF5536', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderBottom: '3px solid #FF5536', borderLeft: '3px solid #FF5536', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '3px solid #FF5536', borderRight: '3px solid #FF5536', zIndex: 10 }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: 'calc(33.333% - 6px)',
                    minHeight: '308px',
                    background: hoveredIndex === index ? '#FF5536' : '#FFFFFF',
                    border: '0.5px solid #ADADAD',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 10, padding: '24px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        style={{
                          width: '44px',
                          height: '44px',
                          objectFit: 'contain',
                          transition: 'filter 0.3s',
                          filter: hoveredIndex === index
                            ? 'brightness(0) invert(1)'
                            : 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.backgroundColor = hoveredIndex === index ? '#FFFFFF' : '#FF5536';
                          e.target.style.borderRadius = '8px';
                          e.target.style.padding = '10px';
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: 'clamp(16px, 3vw, 26px)',
                        lineHeight: '100%',
                        letterSpacing: '-0.02em',
                        color: hoveredIndex === index ? '#FFFFFF' : '#13284C',
                        marginBottom: '12px',
                        transition: 'color 0.3s'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 'clamp(12px, 3vw, 16px)',
                        lineHeight: '150%',
                        color: hoveredIndex === index ? '#FFFFFF' : '#606060',
                        marginBottom: '16px',
                        transition: 'color 0.3s'
                      }}
                    >
                      {service.description}
                    </p>

                    {hoveredIndex === index && (
                      <Link
                        to={service.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '133px',
                          height: '50px',
                          background: 'transparent',
                          border: '1px solid #FFFFFF',
                          borderRadius: '0px',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '14px',
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          gap: '8px'
                        }}
                      >
                        Explore →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
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
          padding: '40px 0',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '374px', margin: '0 auto' }}>

            {/* SERVICE Badge — centered on mobile */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  border: '0.52px solid #CACACA',
                  padding: '5px 6px',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <img
                  src="/icons/playbook-icon.png"
                  alt="icon"
                  style={{ width: '6px', height: '8.4px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FE5538'
                }}>
                  SERVICE
                </span>
              </div>
            </div>

            {/* Heading — centered on mobile */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '28px',
                lineHeight: '110%',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: '#000000',
                margin: '0 0 32px 0'
              }}
            >
              Deploy Enterprise Security Infrastructure Instantly
            </h2>

            {/* Mobile Carousel */}
            <div style={{ position: 'relative' }} role="region" aria-label="Services carousel">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                role="list"
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  gap: '12px',
                  paddingBottom: '16px',
                  paddingLeft: 'calc(50% - 133.5px)',
                  paddingRight: 'calc(50% - 133.5px)'
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    role="listitem"
                    style={{
                      flexShrink: 0,
                      scrollSnapAlign: 'center',
                      width: '267px',
                      minHeight: '209px',
                      border: '0.78px solid #ADADAD',
                      background: '#FFFFFF'
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <div style={{ marginBottom: '12px' }}>
                        <img
                          src={service.icon}
                          alt={service.title}
                          style={{
                            width: '35px',
                            height: '35px',
                            objectFit: 'contain',
                            filter: 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.backgroundColor = '#FF5536';
                            e.target.style.borderRadius = '6px';
                            e.target.style.padding = '8px';
                          }}
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '-0.02em',
                          color: '#13284C',
                          marginBottom: '8px'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '150%',
                          color: '#606060',
                          marginBottom: '12px'
                        }}
                      >
                        {service.description}
                      </p>

                      <Link
                        to={service.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '97px',
                          height: '34px',
                          background: 'transparent',
                          border: '1px solid #000000',
                          borderRadius: '0px',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '11px',
                          color: '#000000',
                          textDecoration: 'none',
                          gap: '6px'
                        }}
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Arrows */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', marginTop: '24px' }}>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous services"
                  style={{
                    width: '48px', height: '48px',
                    background: '#FF5536', borderRadius: '50%', border: 'none',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: currentIndex === 0 ? 0.3 : 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'opacity 0.3s'
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === services.length - 1}
                  aria-label="Next services"
                  style={{
                    width: '48px', height: '48px',
                    background: '#FF5536', borderRadius: '50%', border: 'none',
                    cursor: currentIndex === services.length - 1 ? 'not-allowed' : 'pointer',
                    opacity: currentIndex === services.length - 1 ? 0.3 : 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'opacity 0.3s'
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MSPServices;
