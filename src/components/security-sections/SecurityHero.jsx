import { Link } from 'react-router-dom';

const MSPHero = () => {
  return (
    <section className="relative w-full bg-dark min-h-screen overflow-hidden">
      {/* Desktop Background Image - Hidden on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <img
          src="/images/For MSPs and MSSP/hero-bg-fallback.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Mobile Background - Just black (no image) */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden bg-black"></div>

      {/* Desktop Content - Left aligned */}
      <div className="hidden md:block w-full relative z-10 pt-32 pb-16 sm:pb-20 md:pb-24" style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: 'clamp(24px, 6.94vw, 100px)', paddingRight: 'clamp(24px, 6.94vw, 100px)', boxSizing: 'border-box' }}>
        <div className="flex flex-col items-start justify-start text-left">
          <div className="w-full max-w-[600px]">
            {/* Security Testing & Assurance  - Badge with Icon */}
            <div className="inline-block mb-4 sm:mb-6">
              <div
                className="px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] border text-center inline-flex items-center justify-center gap-1.5 sm:gap-2"
                style={{
                  border: '1px solid #444444',
                  borderRadius: '0px',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src="/icons/playbook-icon.png"
                  alt="icon"
                  style={{
                    width: '6px',
                    height: '8.4px',
                    borderRadius: '0.4px'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span
                  className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#FFFFFF'
                  }}
                >
                  Security Testing & Assurance
                </span>
              </div>
            </div>

            {/* Main Heading - Left aligned */}
            <h1
              className="mb-3 sm:mb-4 text-white text-left"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 'clamp(32px, 8vw, 62px)',
                lineHeight: 'clamp(38px, 9vw, 74px)',
                letterSpacing: '-2%',
                fontWeight: 500,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              Find Your Weaknesses Before<br className="hidden md:block" />
              <span style={{ color: '#FE5538' }}>Attackers Do</span>
            </h1>

            {/* Description Text - Left aligned */}
            <p
              className="mb-5 sm:mb-6 text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(13px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 28.9px)',
                letterSpacing: '0%',
                color: '#E0E0E0',
                maxWidth: '522px'
              }}
            >
              Intelligence-driven security testing that bypasses the illusion of compliance to expose your true organizational risk.
            </p>

            {/* Button - Left aligned */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                width: 'clamp(300px, 45vw, 202px)',
                height: 'clamp(42px, 10vw, 60px)',
                background: '#FF5536',
                borderRadius: '5px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                lineHeight: 'clamp(18px, 5vw, 24px)',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '0 16px'
              }}
            >
              Book Your Security Assessment →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Content - Centered with exact specifications (IMAGE AT TOP) */}
      <div className="md:hidden relative z-10 w-full">
        <div
          className="flex flex-col items-start justify-start w-full"
          style={{
            minHeight: '652px',
            marginTop: '80px',
            gap: '24px',
            opacity: 1,
            paddingBottom: '40px'
          }}
        >
          {/* 1. IMAGE - Mobile (Full Width) - AT THE TOP */}
          <div className="w-full">
            <img
              src="/images/For MSPs and MSSP/hero-mobile.jpg"
              alt="Auriseg Security Operations"
              className="w-full object-cover"
              style={{
                height: '300px',
                opacity: 1,
                display: 'block'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/For MSPs and MSSP/hero-bg-fallback.jpg';
              }}
            />
          </div>

          <div className="w-full px-4 flex flex-col gap-6">
            {/* 2. Security Testing & Assurance  - Badge - Mobile */}
            <div className="w-full flex justify-start">
              <div
                className="inline-flex items-center justify-center"
                style={{
                  height: '28px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#444444',
                  padding: '4px 8px',
                  backgroundColor: 'transparent'
                }}
              >
                <img
                  src="/icons/playbook-icon.png"
                  alt="icon"
                  className="mr-2"
                  style={{
                    width: '6px',
                    height: '8.4px',
                    borderRadius: '0.4px'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#FFFFFF',
                    textTransform: 'uppercase'
                  }}
                >
                  Security Testing & Assurance
                </span>
              </div>
            </div>

            {/* 3. Main Heading - Mobile */}
            <div className="w-full flex justify-start">
              <h1
                className="text-white text-left"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '36px',
                  lineHeight: '110%',
                  letterSpacing: '-2%',
                  margin: 0,
                  textAlign: 'left'
                }}
              >
                Find Your Weaknesses Before<br />
                <span style={{ color: '#FE5538' }}>Attackers Do</span>
              </h1>
            </div>

            {/* 4. Description Text - Mobile */}
            <div className="w-full flex justify-start">
              <p
                className="text-left"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#E0E0E0',
                  margin: 0,
                  textAlign: 'left'
                }}
              >
                Intelligence-driven security testing that bypasses the illusion of compliance to expose your true organizational risk.
              </p>
            </div>

            {/* 5. Button - Mobile */}
            <div className="w-full flex justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
                style={{
                  width: 'auto',
                  minWidth: '300px',
                  height: '48px',
                  background: '#FF5536',
                  borderRadius: '4px',
                  padding: '0 24px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none'
                }}
              >
                Book Your Security Assessment →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MSPHero;
