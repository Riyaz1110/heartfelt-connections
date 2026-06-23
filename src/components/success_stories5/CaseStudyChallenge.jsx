import React from 'react';

const CaseStudyChallenge = () => {
  const challenges = [
    {
      icon: "/images/success-stories/icons/icon-24x7.png",
      title: "Bottom-up Constraints",
      description: "Assessment required limited access to some information."
    },
    {
      icon: "/images/success-stories/icons/icon-alert.png",
      title: "Offshore Execution Complexity",
      description: "Testing performed from offshore while setup remained in Iceland."
    },
    {
      icon: "/images/success-stories/icons/icon-soc.png",
      title: "Distributed Coordination Needs",
      description: "Required tight coordination with vendors and local IT teams."
    },
    {
      icon: "/images/success-stories/icons/icon-hiring.png",
      title: "Real-time Monitoring Demands",
      description: "Traffic monitoring and device analysis had to run continuously."
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          maxWidth: '1440px',
          minHeight: '720px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '60px 0',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            gap: '135px',
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flex: 1,
              maxWidth: '500px',
              paddingTop: '24px',
            }}
          >
            {/* Icon + Heading Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#13284C',
                  borderRadius: '0px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '2px solid #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: 'serif',
                    lineHeight: 1,
                  }}
                >
                  !
                </div>
              </div>

              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '39px',
                  lineHeight: '90%',
                  letterSpacing: '0%',
                  color: '#030407',
                  margin: 0,
                }}
              >
                The Challenge
              </h2>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.02em',
                color: '#030407',
                margin: 0,
              }}
            >
              The Firm faced multiple obstacles preventing them from offering comprehensive security services to their growing client base.
            </p>
          </div>

          {/* Right Column - Challenge Cards */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {challenges.map((challenge, index) => (
              <div
                key={index}
                style={{
                  padding: '32px 0',
                  borderBottom: index !== challenges.length - 1 ? '1px solid #444444' : 'none',
                }}
              >
                {/* Icon + Title Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={challenge.icon}
                      alt={challenge.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/32x32/EEEEEE/CCCCCC?text=Icon';
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '27.2px',
                      letterSpacing: '0%',
                      color: '#030407',
                      margin: 0,
                    }}
                  >
                    {challenge.title}
                  </h3>
                </div>

                {/* Description — aligned to left edge of icon (no indent) */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23.1px',
                    letterSpacing: '0%',
                    color: '#606060',
                    margin: 0,
                    paddingLeft: '0px',
                  }}
                >
                  {challenge.description}
                </p>
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
          maxWidth: '375px',
          minHeight: '570px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '40px 16px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '343.5px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* Icon + Heading Row - Mobile (inline, matching desktop pattern) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '4px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#13284C',
                borderRadius: '0px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '2px solid #FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'serif',
                  lineHeight: 1,
                }}
              >
                !
              </div>
            </div>

            {/* The Challenge Heading - Mobile */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '35px',
                lineHeight: '90%',
                letterSpacing: '0%',
                color: '#030407',
                margin: 0,
              }}
            >
              The Challenge
            </h2>
          </div>

          {/* Description - Mobile */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px',
              letterSpacing: '-0.02em',
              color: '#030407',
              margin: 0,
              marginBottom: '8px',
            }}
          >
            The Firm faced multiple obstacles preventing them from offering comprehensive security services to their growing client base.
          </p>

          {/* Challenge Cards - Mobile */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {challenges.map((challenge, index) => (
              <div
                key={index}
                style={{
                  padding: '20px 0',
                  borderBottom: index !== challenges.length - 1 ? '0.61px solid #444444' : 'none',
                }}
              >
                {/* Icon + Title Row - Mobile */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={challenge.icon}
                      alt={challenge.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/32x32/EEEEEE/CCCCCC?text=Icon';
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '16.68px',
                      letterSpacing: '0%',
                      color: '#030407',
                      margin: 0,
                    }}
                  >
                    {challenge.title}
                  </h3>
                </div>

                {/* Description - Mobile (no indent) */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: '#606060',
                    margin: 0,
                  }}
                >
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyChallenge;
