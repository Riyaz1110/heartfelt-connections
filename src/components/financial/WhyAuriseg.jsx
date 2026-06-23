import { Link } from 'react-router-dom';

const WhyAuriseg = () => {
  const features = [
    {
      title: 'Financial-Native Expertise',
      description: 'Our analysts are CISSP, CISA and CISM-certified and understand the difference between a transaction alert and a security incident. Every decision is driven by regulatory and market context.',
      icon: '/icons/24-hours-fill.png'
    },
    {
      title: 'Compliance-First Engineering',
      description: 'All our controls are mapped to PCI DSS 4.0, DORA, NIST CSF and SOC 2. You get architecture built for financial services from day one.',
      icon: '/icons/ai.png'
    },
    {
      title: 'Zero Disruption to Trading & Banking Workflows',
      description: 'Inadequate security can actually harm your business. Auriseg delivers, monitors and remediates security without impacting client services or transaction processing.',
      icon: '/icons/shield-line.png'
    },
    {
      title: 'Augmentation Without the Hiring Timeline',
      description: 'Auriseg analysts embed into your team in days, not after a 6-month search for a CISO who may not exist in your budget. Scale up or down based on your operational and regulatory reality.',
      icon: '/icons/shake-hands-line.png'
    }
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '863px',
        height: 'auto'
      }}
    >
      {/* DESKTOP: Background Image - Only visible on desktop */}
      <div
        className="absolute inset-0 z-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: `url('/images/industries_navbar/healthcare/why-auriseg-desktop-top.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* MOBILE: Pure Black Background */}
      <div className="absolute inset-0 z-0 bg-black md:hidden"></div>

      {/* MOBILE: Top Image that OVERLAYS the top area */}
      <div className="absolute top-0 left-0 w-full md:hidden z-0">
        <img
          src="/images/industries_navbar/healthcare/why-auriseg-mobile-top.png"
          alt="Why Auriseg"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom px-4 sm:px-6 md:px-8 mx-auto relative z-10 pt-44 pb-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center min-h-[600px] pt-0 md:pt-30 lg:pt-52">

          {/* 1. WHY AURISEG - Border with Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #444444',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px'
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{
                  width: '8px',
                  height: '11.2px',
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
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FFFFFF'
                }}
              >
                WHY AURISEG
              </span>
            </div>
          </div>

          {/* 2. Section Header */}
          <div className="mb-10 md:mb-12 text-center">
            <h2
              style={{
                fontFamily: "'W Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(36px, 8vw, 54px)',
                lineHeight: '110%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Why Financial Organizations<br /> Choose Auriseg            </h2>
          </div>

          {/* 3. Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  minHeight: '310px',
                  height: 'auto',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '30px',
                  gap: '10px',
                  margin: '0 auto'
                }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={{
                      width: '36.67px',
                      height: '36.67px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/36x36/FF5536/FFFFFF?text=Icon";
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-medium mb-4"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 5vw, 26px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#13284C'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: '#5D5D5D'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAuriseg;
