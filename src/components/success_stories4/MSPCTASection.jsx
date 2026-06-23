import React from 'react';

const CtaSection = () => {
  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section
        className="hidden md:block relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '1440px',
          height: '511.6552734375px',
          background: '#030407'
        }}
      >
        {/* Background Image for Desktop */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%'
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
              display: 'block'
            }}
            onError={(e) => {
              console.error('Background image failed to load:', e.target.src);
              e.target.onerror = null;
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) {
                parent.style.backgroundColor = '#030407';
              }
            }}
          />
        </div>

        {/* Desktop Content - Left aligned heading + Right aligned button in same row */}
        <div className="relative z-10 w-full h-full px-8">
          <div className="max-w-[1240px] mx-auto h-full flex items-center justify-between">
            {/* Main Heading - Left aligned */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '54px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                maxWidth: '703.414306640625px',
                margin: 0
              }}
            >
              Ready to Add Security to Your Stack Without Adding Headcount?
            </h2>

            {/* Button - Right aligned */}
            <a
              href="/book-free-assessment"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
              style={{
                width: '278px',
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
                Book a Free Assessment {' →'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile View - Visible only on mobile with separate background image */}
      <section
        className="md:hidden relative w-full mx-auto overflow-hidden"
        style={{
          width: '374px',
          height: '334px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {/* Mobile Background Image - Separate image for mobile */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%'
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
              display: 'block'
            }}
            onError={(e) => {
              console.error('Mobile background image failed to load:', e.target.src);
              e.target.onerror = null;
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) {
                parent.style.backgroundColor = '#030407';
              }
            }}
          />
        </div>

        {/* Mobile Content - Centered (stacked layout) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <div className="text-center">
            {/* Main Heading - Mobile */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                width: '295.776123046875px',
                textAlign: 'center',
                marginBottom: '32px'
              }}
            >
              Ready to Add Security to Your Stack Without Adding Headcount?
            </h2>

            {/* Button - Mobile */}
            <a
              href="/book-free-assessment"
              className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
              style={{
                width: '278px',
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
                Book a Free Assessment {' →'}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
