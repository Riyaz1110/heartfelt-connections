import { useState } from 'react';

const SocBenefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      number: '24/7',
      title: 'Round-the-Clock Monitoring',
      description: 'Continuous threat detection and response, every hour of every day',
      icon: '/icons/how-it-works/monitoring.png'
    },
    {
      number: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade SLA ensuring your security operations never stop',
      icon: '/icons/how-it-works/analysis.png'
    },
    {
      number: '< 5min',
      title: 'Average Response Time',
      description: 'Rapid incident detection and containment to minimize damage',
      icon: '/icons/how-it-works/response.png'
    },
    {
      number: '50+',
      title: 'Compliance Frameworks',
      description: 'Support for HIPAA, PCI-DSS, SOC 2, ISO 27001, and more',
      icon: '/icons/how-it-works/reporting.png'
    }
  ];

  return (
    <section 
      className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden"
      style={{
        minHeight: '500px',
        height: 'auto',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1340px] mx-auto py-12 sm:py-16 md:py-20">

        {/* Header Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div 
            className="inline-flex items-center justify-center gap-2"
            style={{
              border: '1px solid #444444',
              padding: '10px 11px',
              backgroundColor: '#FFFFFF'
            }}
          >
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} />
            <span className="uppercase" style={{ color: '#000000', fontSize: '12px', fontWeight: '600' }}>
              Why Auriseg
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 
          className="text-center mb-4 md:mb-6"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: '110%',
            letterSpacing: '-2%',
            color: '#000000'
          }}
        >
          Why Choose Auriseg <span style={{ color: '#FE5538' }}>SOC</span>
        </h2>

        {/* Description */}
        <p 
          className="text-center mb-12 md:mb-16"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#666666',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}
        >
          Industry-leading security operations with proven results and enterprise reliability.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer transition-all duration-300 p-6 rounded-lg"
              style={{
                backgroundColor: hoveredIndex === index ? '#FE5538' : '#F9F9F9',
                border: hoveredIndex === index ? '2px solid #FE5538' : '1px solid #E5E7EB',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Icon */}
              {benefit.icon && (
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  style={{
                    width: '50px',
                    height: '50px',
                    marginBottom: '12px',
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                />
              )}

              {/* Number */}
              <div 
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: hoveredIndex === index ? '#FFFFFF' : '#FE5538',
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  lineHeight: '1'
                }}
              >
                {benefit.number}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '120%',
                  color: hoveredIndex === index ? '#FFFFFF' : '#000000',
                  marginTop: '12px'
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: hoveredIndex === index ? '#FFFFFF' : '#666666',
                  marginTop: '8px'
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocBenefits;
