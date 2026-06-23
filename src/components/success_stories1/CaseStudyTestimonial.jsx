import React from 'react';

const CaseStudyTestimonial = () => {
  return (
    <>
      {/* Desktop View - Only visible on screens 768px and above */}
      <div className="hidden md:block">
        <section 
          style={{
            width: '100%',
            maxWidth: '1440px',
            minHeight: '691px',
            background: '#FFFFFF',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            padding: '60px 0',
          }}
        >
          {/* Testimonial Box */}
          <div
            style={{
              width: '896px',
              minHeight: '509.75px',
              background: '#161616',
              borderRadius: '16px',
              borderTop: '1px solid rgba(255, 85, 54, 0.2)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              boxSizing: 'border-box',
            }}
          >
            {/* Quote Icon - Left aligned */}
            <div
              style={{
                width: '93.05px',
                height: '93.05px',
                borderRadius: '19.39px',
                padding: '23.26px',
                backgroundColor: 'rgba(255, 85, 54, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
              }}
            >
              <img
                src="/images/success-stories/icons/quote-icon.png"
                alt="Quote"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Quote Text - Left aligned */}
            <p
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '26px',
                lineHeight: '130%',
                letterSpacing: '1%',
                color: '#FFFFFF',
                maxWidth: '760px',
                margin: '0 0 32px 0',
                textAlign: 'left',
              }}
            >
              "Auriseg transformed our business overnight. We went from struggling to offer basic 
              security monitoring to providing enterprise-grade 24/7 SOC services. Our clients see 
              us as their trusted security partner, and we've scaled without the massive overhead 
              of hiring a security team."
            </p>

            {/* Author with Person Image - Left aligned */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              {/* Person Image */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 85, 54, 0.3)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/success-stories/michael-torres.jpg"
                  alt="Michael Torres"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/64x64/CCCCCC/FFFFFF?text=MT';
                  }}
                />
              </div>

              {/* Author Info */}
              <div>
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  Michael Torres
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#ADADAD',
                  }}
                >
                  CEO, SecureEdge Solutions
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile View - Only visible on screens below 768px */}
      <div className="block md:hidden">
        <section 
          style={{
            width: '100%',
            maxWidth: '375px',
            minHeight: '510px',
            background: '#FFFFFF',
            margin: '0 auto',
            padding: '40px 16px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Testimonial Box - Mobile */}
          <div
            style={{
              width: '361px',
              minHeight: '510px',
              background: '#161616',
              borderRadius: '16px',
              borderTop: '1px solid rgba(255, 85, 54, 0.2)',
              padding: '32px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              boxSizing: 'border-box',
            }}
          >
            {/* Quote Icon - Mobile (Left aligned) */}
            <div
              style={{
                width: '75.16px',
                height: '75.16px',
                borderRadius: '15.66px',
                padding: '18.79px',
                backgroundColor: 'rgba(255, 85, 54, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <img
                src="/images/success-stories/icons/quote-icon.png"
                alt="Quote"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Quote Text - Mobile (Left aligned) */}
            <p
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '130%',
                letterSpacing: '1%',
                color: '#FFFFFF',
                maxWidth: '321.5px',
                margin: '0 0 24px 0',
                textAlign: 'left',
              }}
            >
              "Auriseg transformed our business overnight. We went from struggling to offer basic 
              security monitoring to providing enterprise-grade 24/7 SOC services. Our clients see 
              us as their trusted security partner, and we've scaled without the massive overhead 
              of hiring a security team."
            </p>

            {/* Author with Person Image - Mobile (Left aligned) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              {/* Person Image - Mobile */}
              <div
                style={{
                  width: '59px',
                  height: '59px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 85, 54, 0.3)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/success-stories/michael-torres.jpg"
                  alt="Michael Torres"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/59x59/CCCCCC/FFFFFF?text=MT';
                  }}
                />
              </div>

              {/* Author Info - Mobile */}
              <div>
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  Michael Torres
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#ADADAD',
                  }}
                >
                  CEO, SecureEdge Solutions
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyTestimonial;
