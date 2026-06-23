import React from 'react';

const CaseStudyOutcome = () => {
  const outcomes = [
    {
      number: "90%",
      label: "Coverage of external attack surface and web apps"
    },
    {
      number: "24/7",
      label: "Persistent monitoring during testing windows"
    },
    {
      number: "<15m",
      label: "Rapid detection-to-response for critical findings"
    },
    {
      number: "3x",
      label: "Reduction in alert noise through tuned controls"
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          background: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Content */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '48px 40px 32px 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* The Outcome Heading */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '110%',
              letterSpacing: '-0.01em',
              color: '#030407',
              margin: '0 0 16px 0',
            }}
          >
            The Outcome
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              letterSpacing: '0',
              color: '#444444',
              maxWidth: '600px',
              margin: 0,
            }}
          >
            The Firm faced multiple obstacles preventing them from offering comprehensive security services to their growing client base.
          </p>
        </div>

        {/* Stats Bar - TRUE full bleed, no max-width wrapper */}
        <div
          style={{
            width: '100%',
            background: '#0A0A0A',
            borderTop: '0.5px solid #333333',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              display: 'flex',
              padding: '0 40px',
              boxSizing: 'border-box',
            }}
          >
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  padding: '48px 40px 52px 40px',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
              >
                {/* T-shape divider: vertical line + orange bar at bottom */}
                {index !== outcomes.length - 1 && (
                  <>
                    {/* Vertical line — gray top fading to orange at bottom */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '0.5px',
                      height: '100%',
                      background: 'linear-gradient(180deg, #555555 60%, #FF5536 100%)',
                      zIndex: 2,
                    }} />
                    {/* Horizontal orange tick — thin, centered on the line at bottom */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      right: '-9px',
                      width: '18px',
                      height: '1px',
                      background: '#FF5536',
                      zIndex: 3,
                    }} />
                  </>
                )}
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '60px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    marginBottom: '16px',
                  }}
                >
                  {outcome.number}
                </div>
                {/* Label */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpacing: '0',
                    color: '#888888',
                  }}
                >
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          background: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            padding: '40px 16px 0 16px',
            boxSizing: 'border-box',
          }}
        >
          {/* The Outcome Heading - Mobile */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#030407',
              margin: '0 0 16px 0',
            }}
          >
            The Outcome
          </h2>

          {/* Description - Mobile */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#606060',
              margin: '0 0 32px 0',
            }}
          >
            The Firm faced multiple obstacles preventing them from offering comprehensive security services to their growing client base.
          </p>
        </div>

        {/* Stats Bar - Mobile full bleed */}
        <div
          style={{
            width: '100%',
            background: '#0A0A0A',
            borderTop: '0.5px solid #333333',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              style={{
                padding: '28px 24px',
                position: 'relative',
                boxSizing: 'border-box',
              }}
            >
              {/* T-shape divider: horizontal line + orange bar at center */}
              {index !== outcomes.length - 1 && (
                <>
                  {/* Horizontal line */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#333333',
                    zIndex: 2,
                  }} />
                  {/* Orange bar centered on line */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '8.5px',
                    background: '#FF5536',
                    zIndex: 3,
                  }} />
                </>
              )}
              {/* Number - Mobile */}
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '44px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                }}
              >
                {outcome.number}
              </div>
              {/* Label - Mobile */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '150%',
                  color: '#888888',
                }}
              >
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudyOutcome;
