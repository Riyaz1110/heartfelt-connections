import React from 'react';

const IndustriesSolutions = () => {
  const solutions = [
    {
      icon: "/images/industries_navbar/healthcare/icon-iot.png",
      title: "Technology SOC-as-a-Service",
      description: "24/7/365 threat detection and incident response tuned to cloud, SaaS, and software development environments. Our analysts triage alerts in technical context — distinguishing a routine deploy anomaly from an active lateral movement before it reaches production."
    },
    {
      icon: "/images/industries_navbar/healthcare/icon-soc.png",
      title: "Cloud & Infrastructure Security",
      description: "Discover, segment, and continuously monitor every cloud workload, container, and API endpoint. Reduce attack surface in AWS, Azure, and GCP without slowing deployment pipelines or engineering velocity."
    },
    {
      icon: "/images/industries_navbar/healthcare/icon-hipaa.png",
      title: "Compliance Automation (SOC 2, ISO 27001, GDPR)",
      description: "Gap assessments, policy engineering, and technical controls mapped directly to SOC 2 Type II, ISO 27001, GDPR, and CCPA. Audit-ready evidence collection and continuous compliance monitoring included."
    },
    {
      icon: "/images/industries_navbar/healthcare/icon-ztna.png",
      title: "Zero Trust Network Access (ZTNA)",
      description: "Replace implicit trust with identity-verified, least-privilege access across cloud environments, remote engineering teams, and SaaS platforms. Deploy in weeks, not quarters."
    },
    {
      icon: "/images/industries_navbar/healthcare/icon-ransomware.png",
      title: "Software Supply Chain Security",
      description: "Continuous monitoring of dependencies, open-source packages, and third-party integrations. Detect and neutralize supply chain compromise before it propagates to customer environments."
    },
    {
      icon: "/images/industries_navbar/healthcare/icon-workforce.png",
      title: "Workforce Security Augmentation",
      description: "Embed Auriseg security engineers directly into your development and IT teams. Fill critical skill gaps without the 6-month hiring cycle. Scale up during product launches, M&A activity, or breach response."
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '1005px',
          background: '#FFFFFF',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            {/* Solutions/Services - Badge with Icon - Centered */}
            <div className="flex justify-center mb-6">
              <div
                className="inline-flex items-center justify-center gap-2"
                style={{
                  border: '1px solid #A1A1A1',
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
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    color: '#FF5536'
                  }}
                >
                  Solutions/Services
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#030407',
                marginBottom: '48px',
                maxWidth: '562px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Auriseg’s Technology Security Stack
            </h2>

            {/* 6 Cards Grid - connected 3x2 layout */}
            <div className="relative">
              <div className="absolute -top-[1px] left-0 w-5 h-[2px] bg-[#FF5536] z-10"></div>
              <div className="absolute -top-[1px] left-0 w-[2px] h-5 bg-[#FF5536] z-10"></div>
              <div className="absolute -top-[1px] right-0 w-5 h-[2px] bg-[#FF5536] z-10"></div>
              <div className="absolute -top-[1px] right-0 w-[2px] h-5 bg-[#FF5536] z-10"></div>
              <div className="absolute -bottom-[1px] left-0 w-5 h-[2px] bg-[#FF5536] z-10"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-5 bg-[#FF5536] z-10"></div>
              <div className="absolute -bottom-[1px] right-0 w-5 h-[2px] bg-[#FF5536] z-10"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-5 bg-[#FF5536] z-10"></div>

              <div className="grid grid-cols-3 gap-[4px]">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#E1E1E1]"
                    style={{
                      minHeight: '300px',
                      padding: '44px 32px 32px',
                      textAlign: 'left'
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px'
                      }}
                    >
                      <img
                        src={solution.icon}
                        alt={solution.title}
                        style={{
                          width: '44px',
                          height: '44px',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '22px',
                        lineHeight: '26px',
                        letterSpacing: '-2%',
                        color: '#13284C',
                        marginBottom: '12px',
                        maxWidth: '330px'
                      }}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '24px',
                        letterSpacing: '0%',
                        color: '#5D5D5D',
                        margin: 0,
                        maxWidth: '330px',
                        textAlign: 'left'
                      }}
                    >
                      {solution.description}
                    </p>
                  </div>
                ))}
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
          minHeight: '1671px',
          background: '#FFFFFF',
          padding: '40px 16px'
        }}
      >
        <div className="max-w-[342px] mx-auto">

          {/* Solutions/Services - Badge Mobile - Centered */}
          <div className="flex justify-center mb-6">
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
                  color: '#FF5536'
                }}
              >
                Solutions/Services
              </span>
            </div>
          </div>

          {/* Main Heading - Mobile */}
          <h2
            className="text-center"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '30px',
              letterSpacing: '-2%',
              color: '#030407',
              marginBottom: '32px',
              textAlign: 'center'
            }}
          >
            Auriseg’s Technology Security Stack
          </h2>

          {/* Mobile - 6 Cards Stacked */}
          <div className="flex flex-col gap-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  width: '342px',
                  minHeight: '230px',
                  background: '#FFFFFF',
                  border: '1px solid #ADADAD',
                  padding: '20px'
                }}
              >
                {/* Icon - Mobile */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    style={{
                      width: '38px',
                      height: '38px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Title - Mobile */}
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#13284C',
                    marginBottom: '12px'
                  }}
                >
                  {solution.title}
                </h3>

                {/* Description - Mobile */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#606060',
                    margin: 0
                  }}
                >
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesSolutions;
