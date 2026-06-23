import { useState } from 'react';

const SocHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Real-Time Monitoring',
      description: 'Continuous surveillance of your infrastructure with AI-powered threat detection across all endpoints and cloud environments.',
      icon: '/icons/how-it-works/monitoring.png'
    },
    {
      number: '02',
      title: 'Threat Analysis',
      description: 'Advanced analytics and behavioral analysis to identify suspicious activities and potential security threats instantly.',
      icon: '/icons/how-it-works/analysis.png'
    },
    {
      number: '03',
      title: 'Incident Response',
      description: 'Immediate response protocols with automated remediation and expert intervention to neutralize threats before impact.',
      icon: '/icons/how-it-works/response.png'
    },
    {
      number: '04',
      title: 'Reporting & Insights',
      description: 'Comprehensive security reports, compliance documentation, and actionable insights for strategic security decisions.',
      icon: '/icons/how-it-works/reporting.png'
    }
  ];

  return (
    <section 
      className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden"
      style={{
        minHeight: '700px',
        height: 'auto',
        borderTop: '1px solid #E5E7EB',
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
              How It Works
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
          SOC Operations <span style={{ color: '#FE5538' }}>Simplified</span>
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
          Our proven four-step process ensures comprehensive threat detection and rapid response.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className="cursor-pointer transition-all duration-300 p-6 rounded-lg"
              style={{
                backgroundColor: activeStep === index ? '#F5F5F5' : '#FFFFFF',
                border: activeStep === index ? '2px solid #FE5538' : '1px solid #E5E7EB',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Step Number */}
              <div 
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: activeStep === index ? '#FE5538' : '#CCCCCC',
                  fontFamily: "'Cabinet Grotesk', sans-serif"
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              {step.icon && (
                <img 
                  src={step.icon} 
                  alt={step.title}
                  style={{
                    width: '50px',
                    height: '50px',
                    margin: '16px 0',
                    opacity: activeStep === index ? 1 : 0.7
                  }}
                />
              )}

              {/* Title */}
              <h3 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '120%',
                  color: '#000000',
                  marginTop: '12px'
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#666666',
                  marginTop: '12px'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocHowItWorks;
