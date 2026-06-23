import React from 'react';

const CaseStudyImplementation = () => {
  const steps =
    [
      {
        title: "1. Scoping & Planning",
        description: "Define targets, testing windows, and constraints.",
        icon: "/images/success-stories/icons/connect-systems.png",
      },
      {
        title: "2. White-box Testing",
        description: "Deep code/configuration review and static analysis.",
        icon: "/images/success-stories/icons/deploy-monitoring.png",
      },
      {
        title: "3. Black-box Testing",
        description: "External attack simulation and exploit validation.",
        icon: "/images/success-stories/icons/activate-rules.png",
      },
      {
        title: "4. Remediation Roadmap",
        description: "Prioritized fixes and implementation guidance.",
        icon: "/images/success-stories/icons/go-live.png",
      },
    ];

  return (
    <>
      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <section
        className="hidden md:flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          minHeight: '534px',
          background: '#FFFFFF',
          paddingTop: '72px',
          paddingBottom: '72px',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading ── */}
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '110%',
            color: '#030407',
            textAlign: 'center',
            margin: '0 0 16px 0',
          }}
        >
          Implementation Process
        </h2>

        {/* ── Subheading ── */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#606060',
            maxWidth: '586px',
            margin: '0 0 64px 0',
          }}
        >
          From initial integration to full deployment in just 5 days
        </p>

        {/* ── Timeline Row ── */}
        <div
          style={{
            width: '100%',
            maxWidth: '1100px',
            paddingLeft: '40px',
            paddingRight: '40px',
            boxSizing: 'border-box',
          }}
        >
          {/* ── Row 1: Icon circles ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0px',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#FF5536',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    style={{
                      width: '26px',
                      height: '26px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Row 2: Line + dots ── */}
          <div
            style={{
              position: 'relative',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            {/* Full-width gradient line */}
            <div
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, #F5D3CD 0%, #FF5536 100%)',
                zIndex: 0,
              }}
            />

            {/* Dots — one per step, evenly spaced */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {steps.map((_, index) => {
                const dotColors = ['#F5D3CD', '#F0A090', '#F07050', '#FF5536'];
                return (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: dotColors[index],
                        border: '2px solid #FFFFFF',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Row 3: Text content ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginTop: '20px',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  paddingRight: index !== steps.length - 1 ? '24px' : '0',
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                    color: '#13284C',
                    margin: '0 0 10px 0',
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
                    color: '#606060',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
      <section
        className="md:hidden flex flex-col items-center"
        style={{
          width: '100%',
          background: '#FFFFFF',
          paddingTop: '40px',
          paddingBottom: '60px',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading - Mobile ── */}
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#030407',
            textAlign: 'center',
            width: '299px',
            margin: '0 0 12px 0',
          }}
        >
          Implementation Process
        </h2>

        {/* ── Subheading - Mobile ── */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#606060',
            width: '310px',
            margin: '0 0 40px 0',
          }}
        >
          From initial integration to full deployment in just 5 days
        </p>

        {/* ── Vertical Steps ── */}
        <div
          style={{
            width: '308px',
            position: 'relative',
          }}
        >
          {/* Vertical gradient line */}
          <div
            style={{
              position: 'absolute',
              top: '26px',
              bottom: '26px',
              left: '25px',
              width: '2px',
              background: 'linear-gradient(180deg, #F5D3CD 0%, #FF5536 100%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                position: 'relative',
                zIndex: 1,
                marginBottom: index !== steps.length - 1 ? '36px' : 0,
              }}
            >
              {/* Icon circle - Mobile */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#FF5536',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={step.icon}
                  alt={step.title}
                  style={{
                    width: '26px',
                    height: '26px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1, paddingTop: '10px' }}>
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em',
                    color: '#13284C',
                    margin: '0 0 8px 0',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '150%',
                    color: '#606060',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudyImplementation;
