import React from 'react';
import { Link } from 'react-router-dom';

const IndustriesHero = () => {
  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '709px',
          background: '#030407'
        }}
      >
        {/* Desktop Background Image - Full visible, NO BLUR, NO OVERLAY */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/industries_navbar/healthcare/hero-bg.jpg"
            alt="Financial Services "
            className="w-full h-full object-cover object-center"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              console.error('Desktop background image failed to load');
            }}
          />
        </div>

        {/* Desktop Content - Moved DOWN with pt-32 */}
        <div className="relative z-10 w-full h-full flex items-start pt-32">
          <div className="w-full pr-8 md:pr-12 lg:pr-16 xl:pr-20" style={{ paddingLeft: '2cm' }}>
            <div className="max-w-[800px]">
              {/* Financial Services  - Badge with Border & Icon */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center justify-center gap-2"
                  style={{
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
                    className="uppercase"
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '-3%',
                      color: '#FFFFFF'
                    }}
                  >
                    Manufacturing CyberSecurity
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '62px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Trusted Cybersecurity for <br />Critical Manufacturing Infrastructure
              </h1>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-2%',
                  color: '#F7F7F7',
                  maxWidth: '569px',
                  marginBottom: '40px'
                }}
              >
                Auriseg secures manufacturing organizations against ransomware, IP theft, and operational failure without disrupting production lines. Purpose-built for the industrial continuum. Deployed with precision.

              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    width: '294px',
                    height: '60px',
                    padding: '20px',
                    gap: '10px',
                    borderRadius: '5px',
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
                    Get Your Security Assessment &rarr;
                  </span>
                </Link>

                <button
                  onClick={() => {
                    const el = document.getElementById('manufacturing-compliance');
                    if (el) {
                      const offset = 100;
                      const top = el.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#FF5536] hover:text-white hover:border-[#FF5536]"
                  style={{
                    width: '206px',
                    height: '60px',
                    padding: '24px 20px',
                    gap: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF5536',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
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
                    Explore Our Approach
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '717px',
          background: '#030407'
        }}
      >
        {/* Mobile Background Image - Full visible */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/industries_navbar/healthcare/hero-bg-mobile.jpg"
            alt="Financial Services "
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              console.error('Mobile background image failed to load');
              e.target.parentElement.style.backgroundColor = '#030407';
            }}
          />
          {/* Light Overlay on mobile only - to make text readable */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Mobile Content - Moved UP */}
        <div className="relative z-10 w-full flex flex-col items-center justify-start pt-6 px-6">
          <div className="text-center">
            {/* Financial Services  - Badge Mobile with Border & Icon */}
            <div className="flex justify-center mb-4">
              <div
                className="inline-flex items-center justify-center gap-2"
                style={{
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
                  Manufacturing CyberSecurity
                </span>
              </div>
            </div>

            {/* Main Heading - Mobile */}
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '40px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '16px',
                textAlign: 'center'
              }}
            >
              Trusted Cybersecurity for <br />Critical Manufacturing Infrastructure
            </h1>

            {/* Description - Mobile */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                maxWidth: '281px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '32px'
              }}
            >
              Auriseg secures manufacturing organizations against ransomware, IP theft, and operational failure without disrupting production lines. Purpose-built for the industrial continuum. Deployed with precision.

            </p>

            {/* Buttons - Mobile (Stacked) */}
            <div className="flex flex-col gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center"
                style={{
                  width: '278px',
                  height: '48px',
                  padding: '15px 10.36px',
                  gap: '5.18px',
                  borderRadius: '2.59px',
                  background: '#FF5536',
                  textDecoration: 'none'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FFFFFF'
                  }}
                >
                  Get Your Security Assessment &rarr;
                </span>
              </Link>

              <button
                onClick={() => {
                  const el = document.getElementById('manufacturing-compliance-mobile') || document.getElementById('manufacturing-compliance');
                  if (el) {
                    const offset = 100;
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#FF5536] hover:text-white"
                style={{
                  width: '278px',
                  height: '48px',
                  padding: '15px 10.36px',
                  gap: '5.18px',
                  borderRadius: '2.59px',
                  border: '0.52px solid #FF5536',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FFFFFF'
                  }}
                >
                  Explore Our Approach
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesHero;
