import React from 'react';

const CaseStudySolution = () => {
  const challenges =
    [
      {
        icon: "/images/success-stories/icons/Icon.png",
        title: "Business & Process Review",
        description: "Studied business processes, policies, and procedures."
      },
      {
        icon: "/images/success-stories/icons/Icon copy.png",
        title: "Risk Assessment",
        description: "Prioritized threats using risk-based analysis."
      },
      {
        icon: "/images/success-stories/icons/Icon copy 2.png",
        title: "Application & Network Testing",
        description: "Performed Oracle-Forms, web app, and network penetration tests."
      },
      {
        icon: "/images/success-stories/icons/Icon copy 3.png",
        title: "Storage & SAN Assessment",
        description: "Evaluated SAN configuration and storage security controls."
      },
      {
        icon: "/images/success-stories/icons/Icon copy.png",
        title: "Configuration & Access Review",
        description: "Assessed system hardening, access controls, and identity management."
      },
      {
        icon: "/images/success-stories/icons/Icon copy 2.png",
        title: "BCP & DR Validation",
        description: "Reviewed business continuity and disaster recovery planning."
      },
      {
        icon: "/images/success-stories/icons/Icon.png",
        title: "Recommendations & Reporting",
        description: "Delivered customized reports, remediation steps, and roadmap."
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
              {/* Orange square icon with lightbulb — pure CSS, sharp corners */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FF5536',
                  borderRadius: '0px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Lightbulb SVG icon in white */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21h6" />
                  <path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
                </svg>
              </div>

              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '40px',
                  lineHeight: '90%',
                  letterSpacing: '0%',
                  color: '#030407',
                  margin: 0,
                }}
              >
                The <span style={{ color: '#FF5536' }}>Auriseg</span> Solution
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
              Auriseg delivered a targeted security assessment covering applications, databases, network perimeter, and storage, producing prioritized remediation and a security roadmap.
            </p>
          </div>

          {/* Right Column - Solution Cards */}
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
                      width: '36px',
                      height: '36px',
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
                        e.target.src = 'https://via.placeholder.com/36x36/EEEEEE/CCCCCC?text=Icon';
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

                {/* Description — no indent, flush left */}
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
          {/* Icon + Heading Row - Mobile (inline) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '4px',
            }}
          >
            {/* Orange square icon — mobile */}
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FF5536',
                borderRadius: '0px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21h6" />
                <path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
              </svg>
            </div>

            {/* Heading - Mobile */}
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
              The <span style={{ color: '#FF5536' }}>Auriseg</span> Solution
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
            Auriseg delivered a targeted security assessment covering applications, databases, network perimeter, and storage, producing prioritized remediation and a security roadmap.
          </p>

          {/* Solution Cards - Mobile */}
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

export default CaseStudySolution;
