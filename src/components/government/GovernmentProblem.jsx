import React, { useState } from 'react';

const IndustriesProblem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const problems = [
    {
      title: "Service Disruption Has National Consequences",
      description: "Government networks, utilities, transportation systems, and public service platforms are not just IT assets; they are operational lifelines. A single cyber incident can interrupt citizen services, emergency response, communications, energy delivery, or water operations.",
      image: "/images/industries_navbar/healthcare/problem-ransomware.jpg",
    },
    {
      title: "Nation-State and Advanced Threat Actors Are Already Inside the Perimeter",
      description: "Threat actors increasingly target public agencies and critical infrastructure to gain long-term access, conduct espionage, and pre-position for disruption during geopolitical conflict. These campaigns are designed for persistence, not just quick financial gain.",
      image: "/images/industries_navbar/healthcare/problem-iomt.jpg",
    },
    {
      title: "Legacy Systems Expand the Attack Surface",
      description: "Many agencies and infrastructure operators must secure aging operational technology, unsupported systems, vendor-connected environments, and distributed field assets. This creates blind spots that traditional IT-first security programs often miss.",
      image: "/images/industries_navbar/healthcare/problem-regulatory.jpg",
    },
    {
      title: "Compliance and Public Accountability Raise the Stakes",
      description: "Government and critical infrastructure organizations must protect sensitive data, meet sector-specific mandates, and demonstrate defensible incident response under public scrutiny. A failure is not just technical; it becomes operational, legal, and reputational.",
      image: "/images/industries_navbar/healthcare/problem-insider.jpg",
    }
  ];

  return (
    <>
      {/* Desktop View - NO BOTTOM BORDERS */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '794px',
          background: '#030407',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            {/* THE PROBLEM - Badge with Icon - CENTERED */}
            <div className="flex justify-center mb-6">
              <div
                className="inline-flex items-center justify-center gap-2"
                style={{
                  border: '1px solid #444444',
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
                    color: '#FFFFFF'
                  }}
                >
                  THE PROBLEM
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
                color: '#FFFFFF',
                marginBottom: '60px',
                maxWidth: '757px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Why Government and Critical Infrastructure Are High-Value Targets
            </h2>

            {/* Content Area - Left (Tabs) + Right (Image) */}
            <div className="flex gap-12">
              {/* Left Side - Problem Tabs (NO BORDERS) */}
              <div className="flex-1">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setActiveTab(index)}
                    className="cursor-pointer group"
                    style={{
                      paddingBottom: index !== problems.length - 1 ? '24px' : '0',
                      marginBottom: index !== problems.length - 1 ? '24px' : '0'
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: '30px',
                        lineHeight: '100%',
                        letterSpacing: '-2%',
                        color: activeTab === index ? '#FF5536' : '#FFFFFF',
                        marginBottom: activeTab === index ? '16px' : '0',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {problem.title}
                    </h3>

                    {/* Description - Shows only when active */}
                    {activeTab === index && (
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '23.1px',
                          letterSpacing: '0%',
                          color: '#8A8A8A',
                          maxWidth: '503px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {problem.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Dynamic Image */}
              <div className="flex-shrink-0">
                <img
                  src={problems[activeTab].image}
                  alt={problems[activeTab].title}
                  style={{
                    width: '374.07px',
                    height: '358.56px',
                    objectFit: 'cover',
                    opacity: 1
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/374x359/333333/FFFFFF?text=Problem+Image';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View - KEEPS BOTTOM BORDERS */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '751px',
          background: '#030407',
          padding: '40px 16px'
        }}
      >
        <div className="max-w-[342px] mx-auto">

          {/* THE PROBLEM - Badge Mobile */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '0.52px solid #444444',
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
                  color: '#FFFFFF'
                }}
              >
                THE PROBLEM
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
              color: '#FFFFFF',
              marginBottom: '32px',
              textAlign: 'center'
            }}
          >
            Why Government and Critical Infrastructure Are High-Value Targets
          </h2>

          {/* Mobile - All Problems Stacked (WITH BOTTOM BORDERS) */}
          <div className="flex flex-col gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                style={{
                  borderBottom: index !== problems.length - 1 ? '1px solid #444444' : 'none',
                  paddingBottom: index !== problems.length - 1 ? '20px' : '0'
                }}
              >
                {/* Title - Mobile */}
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}
                >
                  {problem.title}
                </h3>

                {/* Description - Mobile (Always visible) */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#8A8A8A'
                  }}
                >
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesProblem;
