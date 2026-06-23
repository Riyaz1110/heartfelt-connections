import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      label: "Assess",
      icon: "/icons/how-it-works/1.png",
      title: "",
      description: "Conduct a baseline maturity assessment across governance, risk tracking and compliance alignment using proven frameworks."
    },
    {
      label: "Architect",
      icon: "/icons/how-it-works/2.png",
      title: "",
      description: "Design a GRC program tailored to your regulatory obligations, risk appetite, and operational structure."
    },
    {
      label: "Activate",
      icon: "/icons/how-it-works/3.png",
      title: "",
      description: "Deploy policy engines, control libraries, and continuous monitoring workflows that eliminate manual compliance overhead."
    },
    {
      label: "Assure",
      icon: "/icons/how-it-works/4.png",
      title: "",
      description: "Deliver board-level reporting, audit evidence packages, and risk quantification that stakeholders can act on."
    }
  ];

  return (
    <>
      {/* ════════════════════════════════
          DESKTOP — hidden on mobile
      ════════════════════════════════ */}
      <section
        className="hidden md:block"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#FFFFFF',
          position: 'relative',
          boxSizing: 'border-box',
          paddingTop: '60px',
          paddingBottom: '80px',
        }}
      >
        <div style={{ width: '100%', paddingLeft: '60px', paddingRight: '80px', boxSizing: 'border-box' }}>

          {/* Badge — centered */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', border: '1px solid #CACACA',
              paddingTop: '8px', paddingRight: '12px', paddingBottom: '8px', paddingLeft: '12px',
            }}>
              <img src="/icons/playbook-icon.png" alt="icon"
                style={{ width: '8px', height: '11.2px' }}
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px',
                lineHeight: '100%', letterSpacing: '0.05em', color: '#FF5536', textTransform: 'uppercase'
              }}>
                HOW IT WORKS
              </span>
            </div>
          </div>

          {/* Heading — centered */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '48px',
            lineHeight: '110%', color: '#030407', margin: '0 0 64px 0',
            textAlign: 'center'
          }}>
            From Gap to Governed in 90 Days
          </h2>

          {/* Steps Row */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '40px',
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div style={{
                  width: '64px', height: '64px',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '16px'
                }}>
                  <img src={step.icon} alt={step.title}
                    style={{
                      width: '48px', height: '48px', objectFit: 'contain',
                      filter: 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                    }}
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 600, fontSize: '12px',
                  lineHeight: '100%', letterSpacing: '0.08em', color: '#FF5536',
                  textTransform: 'uppercase', marginBottom: '16px'
                }}>
                  {step.label}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '20px',
                  lineHeight: '1.3', color: '#13284C', marginBottom: '12px'
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px',
                  lineHeight: '1.6', color: '#606060', margin: 0,
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          MOBILE — hidden on desktop
      ════════════════════════════════ */}
      <section
        className="md:hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#FFFFFF',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
          <div style={{
            maxWidth: '374px', margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '32px', paddingTop: '40px', paddingBottom: '40px'
          }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', border: '1px solid #CACACA',
                paddingTop: '8px', paddingRight: '12px', paddingBottom: '8px', paddingLeft: '12px',
                backgroundColor: '#FFFFFF'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '12px',
                  lineHeight: '100%', letterSpacing: '-0.02em', color: '#FE5538', textTransform: 'uppercase'
                }}>
                  HOW IT WORKS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '28px',
              lineHeight: '120%', letterSpacing: '-0.02em', color: '#030407',
              textAlign: 'center', margin: 0, maxWidth: '300px'
            }}>
              From Gap to Governed in 90 Days
            </h2>

            {/* Steps */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {steps.map((step, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '8px',
                    background: '#FF55361A', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '12px'
                  }}>
                    <img src={step.icon} alt={step.title}
                      style={{
                        width: '32px', height: '32px', objectFit: 'contain',
                        filter: 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                      }}
                      onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div style={{
                    fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px',
                    lineHeight: '18.19px', letterSpacing: '0.91px', color: '#FF5536',
                    textTransform: 'uppercase', marginBottom: '12px'
                  }}>
                    {step.label}
                  </div>
                  <h3 style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '20px',
                    lineHeight: '29.76px', color: '#13284C', textAlign: 'center',
                    marginBottom: '12px', maxWidth: '262px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '12px',
                    lineHeight: '22.17px', color: '#030407', textAlign: 'center',
                    margin: 0, maxWidth: '262px'
                  }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
