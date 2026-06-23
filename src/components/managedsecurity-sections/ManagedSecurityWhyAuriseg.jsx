import React, { useState } from 'react';

const IotDifferentiators = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "Outcome-Focused",
      description: "Along with coverage metrics, Every engagement targets measurable risk reduction."
    },
    {
      title: "Platform-Native",
      description: "Integrates across your existing stack without ripping out infrastructure."
    },
    {
      title: "Threat-Intelligence Led",
      description: "Real-time global threat feeds inform every detection, response, and advisory decision."
    },
    {
      title: "Compliance-Ready",
      description: "Built-in frameworks covering ISO 27001, SOC 2, GDPR, HIPAA, and NIS2."
    }
  ];

  return (
    <>
      {/* DESKTOP */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          background: '#030407',
          position: 'relative',
          zIndex: 20,
          boxSizing: 'border-box',
          overflow: 'visible',
          marginBottom: '140px',
        }}
      >
        {/* Vector background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/images/diff/Vector.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }} />

        {/* Content — closer to left margin, more padding bottom for logo */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: 'clamp(40px, 5vw, 80px)',
            paddingBottom: 'clamp(100px, 10vw, 140px)',
            paddingLeft: 'clamp(40px, 5vw, 80px)',
            paddingRight: 'clamp(40px, 5vw, 80px)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(60px, 8vw, 120px)',
          }}
        >
          {/* LEFT — badge, heading, button */}
          <div style={{ flex: '0 0 48%', maxWidth: '48%' }}>

            {/* Badge */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', border: '1px solid #444444', padding: '10px 11px',
              }}>
                <img
                  src="/icons/playbook-icon.png"
                  alt="icon"
                  style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                  fontSize: 'clamp(12px, 1vw, 14px)',
                  lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF', textTransform: 'uppercase',
                }}>
                  WHY AURISEG?
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
              fontSize: 'clamp(28px, 2.6vw, 38px)',
              lineHeight: '110%', color: '#FFFFFF',
              marginBottom: '36px',
            }}>
              Advisory Built on Real Expertise.
            </h2>

            {/* Button */}
            <a
              href="/success-stories"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: '#FF5536', borderRadius: '5px',
                fontFamily: "'Inter', sans-serif", fontWeight: 500,
                fontSize: 'clamp(13px, 1.1vw, 16px)',
                lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF',
                textDecoration: 'none',
                padding: 'clamp(12px, 1.1vw, 16px) clamp(20px, 2.2vw, 32px)',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Become a Partner →
            </a>
          </div>

          {/* RIGHT — features with dividers */}
          <div style={{ flex: '1 1 0', minWidth: 0, marginTop: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    cursor: 'pointer',
                    paddingBottom: index !== features.length - 1 ? 'clamp(20px, 2vw, 28px)' : '0',
                    marginBottom: index !== features.length - 1 ? 'clamp(20px, 2vw, 28px)' : '0',
                    borderBottom: index !== features.length - 1 ? '1px solid rgba(68,68,68,0.4)' : 'none',
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                    fontSize: 'clamp(18px, 1.5vw, 22px)',
                    lineHeight: '1.2',
                    color: index === 0 ? '#FF5536' : (hoveredIndex === index ? '#FF5536' : '#FFFFFF'),
                    marginBottom: '10px', transition: 'color 0.3s ease',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 'clamp(13px, 1vw, 14px)',
                    lineHeight: '1.6', color: '#888888',
                    margin: 0,
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Logo — bottom-left corner, half in half out */}
        <img
          src="/images/diff/logo.png"
          alt=""
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-50px',
            width: 'clamp(200px, 22vw, 320px)',
            height: 'auto',
            objectFit: 'contain',
            zIndex: 15,
            pointerEvents: 'none',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </section>

      {/* MOBILE */}
      <section className="md:hidden w-full" style={{ background: '#030407', marginBottom: '80px' }}>
        <div style={{
          maxWidth: '374px',
          margin: '0 auto',
          padding: '40px 16px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}>
          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', border: '1px solid #444444', padding: '10px 11px',
            }}>
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '16px',
                lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF', textTransform: 'uppercase',
              }}>
                WHY AURISEG?
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
            fontSize: '28px', lineHeight: '120%', letterSpacing: '-0.02em',
            color: '#FFFFFF', textAlign: 'center', margin: 0,
          }}>
            Advisory Built on Real Expertise.
          </h2>

          {/* Button */}
          <a
            href="/success-stories"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: '#FF5536', borderRadius: '5px',
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px',
              lineHeight: '100%', color: '#FFFFFF',
              textDecoration: 'none', padding: '14px 28px',
            }}
          >
            Become a Partner →
          </a>

          {/* Features */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  width: '100%', padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderLeft: hoveredIndex === index ? '3px solid #FF5536' : '3px solid transparent',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '20px', lineHeight: '27.2px',
                  color: hoveredIndex === index ? '#FF5536' : '#FFFFFF',
                  marginBottom: '12px', transition: 'color 0.3s ease',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: '12px', lineHeight: '23.1px',
                  color: 'rgba(255,255,255,0.45)', margin: 0,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IotDifferentiators;
