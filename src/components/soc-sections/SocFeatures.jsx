import { useState } from 'react';

const SocFeatures = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const features = [
    {
      title: '24/7 Threat Monitoring',
      description: 'Round-the-clock surveillance with AI-powered analytics detecting threats in real-time across your entire infrastructure.',
      details: 'Our SOC operates continuously to identify and respond to threats before they can impact your business operations.',
      icon: '/icons/solutions/icon.png'
    },
    {
      title: 'Incident Response',
      description: 'Rapid containment and remediation of security incidents with expert-led investigation and root cause analysis.',
      details: 'From detection to resolution, our experts ensure minimal damage and swift recovery from security events.',
      icon: '/icons/solutions/icon (1).png'
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance tracking and reporting for major standards including HIPAA, PCI-DSS, SOC 2, and ISO 27001.',
      details: 'Stay audit-ready with continuous compliance monitoring and comprehensive documentation.',
      icon: '/icons/solutions/icon (2).png'
    },
    {
      title: 'Vulnerability Management',
      description: 'Proactive identification, assessment, and remediation of vulnerabilities across your entire attack surface.',
      details: 'Regular scanning and penetration testing ensure your infrastructure remains secure against emerging threats.',
      icon: '/icons/solutions/icon.png'
    },
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat feeds and intelligence integration to keep your defenses updated against the latest attack patterns.',
      details: 'Leverage global threat data and AI insights to stay ahead of attackers.',
      icon: '/icons/solutions/icon (1).png'
    },
    {
      title: 'Security Training',
      description: 'Ongoing security awareness programs and training for your team to reduce human-factor vulnerabilities.',
      details: 'Build a security-conscious culture with regular updates on emerging threats and best practices.',
      icon: '/icons/solutions/icon (2).png'
    }
  ];

  return (
    <section 
      className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden"
      style={{
        minHeight: '800px',
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
              Features
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
          Enterprise SOC <span style={{ color: '#FE5538' }}>Capabilities</span>
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
          Comprehensive security operations capabilities designed for enterprises of all sizes.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              className="cursor-pointer transition-all duration-300 p-6 md:p-8 rounded-lg"
              style={{
                backgroundColor: expandedIndex === index ? '#FE5538' : '#F9F9F9',
                border: expandedIndex === index ? '2px solid #FE5538' : '1px solid #E5E7EB',
                minHeight: 'auto'
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  style={{
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    opacity: expandedIndex === index ? 1 : 0.8
                  }}
                />

                {/* Content */}
                <div className="flex-1">
                  <h3 
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '120%',
                      color: expandedIndex === index ? '#FFFFFF' : '#000000'
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '150%',
                      color: expandedIndex === index ? '#FFFFFF' : '#666666',
                      marginTop: '8px'
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Expandable Details */}
                  {expandedIndex === index && (
                    <p 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '150%',
                        color: '#FFFFFF',
                        marginTop: '12px',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      {feature.details}
                    </p>
                  )}
                </div>

                {/* Chevron */}
                <div 
                  style={{
                    fontSize: '20px',
                    color: expandedIndex === index ? '#FFFFFF' : '#999999',
                    flexShrink: 0,
                    transition: 'transform 0.3s'
                  }}
                >
                  {expandedIndex === index ? '−' : '+'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocFeatures;
