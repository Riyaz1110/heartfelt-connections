import React from 'react';

const CtaSection = () => {
  const tickItems = [
    'CERT-In Certified Instructors',
    '98% Certification Pass Rate',
    '47+ Live Lab Environments',
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative w-full overflow-hidden"
        style={{
          height: '511.6552734375px',
          background: '#030407'
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
        >
          <img
            src="/images/cta/cta-bg.jpg"
            alt="Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', opacity: 0.3 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) parent.style.backgroundColor = '#030407';
            }}
          />
        </div>

        {/* Desktop Content */}
        <div className="relative z-10 w-full h-full px-8">
          <div className="max-w-[1240px] mx-auto h-full flex items-center justify-between">

            {/* Left — Heading + Tick items stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: 0,
                  textAlign: 'left'
                }}
              >
                Your frontline defence starts here.
              </h2>

              {/* Tick items row */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                {tickItems.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#FF5536', fontSize: '14px', fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>✓</span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em',
                        color: '#ADADAD',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button - Right aligned */}
            <a
              href="https://cal.com/auriseg-consulting-pvt.-ltd"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
              style={{
                width: '360px',
                height: '58px',
                gap: '10px',
                paddingTop: '19px',
                paddingRight: '33px',
                paddingBottom: '19px',
                paddingLeft: '33px',
                borderRadius: '10px',
                background: '#FF5536',
                textDecoration: 'none',
                marginLeft: '40px'
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
                Plan a Collaborative Discovery {' →'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="md:hidden relative w-full mx-auto overflow-hidden"
        style={{ width: '374px', height: '334px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
        >
          <img
            src="/images/cta/cta-bg-mobile.jpg"
            alt="Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', opacity: 0.3 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) parent.style.backgroundColor = '#030407';
            }}
          />
        </div>

        {/* Mobile Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                width: '100%',
                maxWidth: '300px',
                textAlign: 'center',
                margin: 0
              }}
            >
              Your frontline defence starts here.
            </h2>

            {/* Tick items — stacked, left-aligned */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', width: '100%', maxWidth: '300px' }}>
              {tickItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#FF5536', fontSize: '13px', fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>✓</span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '100%',
                      letterSpacing: '0.02em',
                      color: '#ADADAD',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://cal.com/auriseg-consulting-pvt.-ltd"
              className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
              style={{
                width: '360px',
                height: '58px',
                gap: '10px',
                paddingTop: '19px',
                paddingRight: '33px',
                paddingBottom: '19px',
                paddingLeft: '33px',
                borderRadius: '10px',
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
                Plan a Collaborative Discovery {' →'}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
