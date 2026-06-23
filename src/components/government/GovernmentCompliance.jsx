import React, { useState } from 'react';

const IndustriesCompliance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const complianceTabs = [
    {
      title: "NIST Cybersecurity Framework (CSF)",
      description: "A widely adopted framework for identifying, protecting, detecting, responding to, and recovering from cybersecurity risk across public-sector and essential-service organizations.",
      whatItRequires: "A structured, repeatable approach to risk governance, asset visibility, protection controls, monitoring, incident response, and resilience planning.",
      howWeHelp: "Auriseg aligns your security program to NIST CSF and DPDPA with prioritized control mapping, maturity assessments, and practical remediation plans that fit operational environments."
    },
    {
      title: "Government Control Baselines",
      description: "A control framework commonly used to secure information systems and contractors supporting regulated public-sector environments.",
      whatItRequires: "Documented administrative, technical, and operational controls across access management, monitoring, configuration, incident response, system integrity, and vendor oversight.",
      howWeHelp: "We assess existing security posture, identify control gaps, and support implementation, documentation, and evidence preparation for internal or external review."
    },
    {
      title: "Sector-Specific Critical Infrastructure Guidance",
      description: "Critical sectors such as energy, water, transportation, and communications often follow tailored cybersecurity recommendations and operational resilience expectations.",
      whatItRequires: "Security controls that account for distributed operations, OT exposure, service continuity, vendor access, and incident coordination across multiple stakeholders.",
      howWeHelp: "Auriseg builds sector-aware monitoring, segmentation, access controls, and incident workflows designed for mixed IT and OT ecosystems."
    },
    {
      title: "Privacy & Sensitive Data Protection",
      description: "Public agencies and infrastructure operators often handle citizen, employee, operational, and regulated data that must be protected against misuse, loss, or disclosure.",
      whatItRequires: "Clear data handling controls, access restrictions, encryption, retention discipline, and breach response processes.",
      howWeHelp: "We support data protection strategy, control implementation, and response planning that strengthen confidentiality and public trust."
    },
    {
      title: "Third-Party & Supply Chain Risk Oversight",
      description: "Government and critical infrastructure security increasingly depends on the resilience of integrators, vendors, software providers, and service partners.",
      whatItRequires: "Vendor risk reviews, secure access controls, continuous monitoring, and documented risk decisions for external dependencies.",
      howWeHelp: "Auriseg helps formalize third-party risk management with assessment workflows, access governance, and ongoing monitoring of supplier-connected risk."
    }
  ];

  const labelBadge = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #444444',
    paddingTop: '10px',
    paddingRight: '11px',
    paddingBottom: '10px',
    paddingLeft: '11px',
    backgroundColor: 'transparent',
    marginBottom: '22px'
  };

  const labelText = {
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FF5536',
    textTransform: 'uppercase'
  };

  const mobileLabelBadge = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: '1px solid #444444',
    paddingTop: '8px',
    paddingRight: '10px',
    paddingBottom: '8px',
    paddingLeft: '10px',
    backgroundColor: 'transparent',
    marginBottom: '10px'
  };

  const mobileLabelText = {
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FF5536',
    textTransform: 'uppercase'
  };

  const contentPara = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: '#F7F7F7',
    margin: 0
  };

  const mobileContentPara = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '150%',
    letterSpacing: '0%',
    color: '#ADADAD',
    margin: 0
  };

  return (
    <>
      {/* ══════════════════════════════
          DESKTOP VIEW
      ══════════════════════════════ */}
      <section
        id="government-compliance"
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: 'auto',         /* ← was 850px, now fits content */
          background: '#030407',
          padding: '80px 0 48px'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
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
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase'
                  }}
                >
                  COMPLIANCE FOCUS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '48px',
                color: '#FFFFFF',
                marginBottom: '54px',
                maxWidth: '536px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center'
              }}
            >
              Security, Resilience, and Regulatory Readiness
            </h2>

            {/* Tab Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '28px',
                marginBottom: '70px'
              }}
            >
              {complianceTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '20px',
                    width: '220px',
                    height: '60px',
                    borderRadius: '5px',
                    border: '1px solid #FF5536',
                    backgroundColor: activeTab === index ? '#FF5536' : 'transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* ── ONE SINGLE BORDERED BOX ── */}
            <div
              style={{
                width: '100%',
                maxWidth: '1180px',
                minHeight: '303px',
                padding: '32px 52px',
                background: '#030407',
                border: '1px solid #444444',
                margin: '0 auto',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)'
              }}
            >
              {/* Description */}
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '44px',
                  lineHeight: '48px',
                  color: '#FFFFFF',
                  maxWidth: '840px',
                  marginBottom: '58px'
                }}
              >
                {complianceTabs[activeTab].description}
              </div>

              {/* Two columns: HOW WE HELP (left) | WHAT IT REQUIRES (right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '88px',
                  fontsize: "18px",
                  fontWeight: '500',
                }}
              >
                {/* LEFT — HOW WE HELP */}
                <div>
                  <div style={labelBadge}>
                    <span style={labelText}>WHAT IT REQUIRES</span>
                  </div>
                  <p style={contentPara}>
                    {complianceTabs[activeTab].whatItRequires}
                  </p>
                </div>

                {/* RIGHT — WHAT IT REQUIRES */}
                <div>
                  <div style={labelBadge}>
                    <span style={labelText}>HOW WE HELP</span>
                  </div>
                  <p style={contentPara}>
                    {complianceTabs[activeTab].howWeHelp}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MOBILE VIEW
      ══════════════════════════════ */}
      <section
        id="government-compliance-mobile"
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: 'auto',         /* ← was 751px, now fits content */
          background: '#030407',
          padding: '28px 16px'       /* ← was 40px, reduced top/bottom */
        }}
      >
        <div style={{ maxWidth: '342px', margin: '0 auto' }}>

          {/* Badge Mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
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
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '12px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase'
                }}
              >
                Security, Resilience, and Regulatory Readiness
              </span>
            </div>
          </div>

          {/* Heading Mobile */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '30px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '20px',  /* ← was 24px */
              textAlign: 'center'
            }}
          >

          </h2>

          {/* Mobile Tabs — horizontally scrollable, no scrollbar */}
          <div
            className="mob-tabs"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '10px',
              marginBottom: '20px',  /* ← was 24px */
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`.mob-tabs::-webkit-scrollbar { display: none; }`}</style>
            {complianceTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  flexShrink: 0,
                  padding: '0 20px',
                  minWidth: '140px',
                  height: '48px',
                  borderRadius: '4px',
                  border: '0.8px solid #FF5536',
                  backgroundColor: activeTab === index ? '#FF5536' : 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile — ONE single bordered box */}
          <div
            style={{
              width: '100%',
              padding: '20px 16px',  /* ← was 24px */
              background: '#030407',
              border: '1px solid #444444',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)'
            }}
          >
            {/* Description */}
            <div
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '22px',
                lineHeight: '110%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '16px'  /* ← was 20px */
              }}
            >
              {complianceTabs[activeTab].description}
            </div>

            {/* WHAT IT REQUIRES — Mobile */}
            <div style={{ marginBottom: '16px' }}>  {/* ← was 20px */}
              <div style={mobileLabelBadge}>
                <span style={mobileLabelText}>WHAT IT REQUIRES</span>
              </div>
              <p style={mobileContentPara}>
                {complianceTabs[activeTab].whatItRequires}
              </p>
            </div>

            {/* HOW WE HELP — Mobile */}
            <div>
              <div style={mobileLabelBadge}>
                <span style={mobileLabelText}>HOW WE HELP</span>
              </div>
              <p style={mobileContentPara}>
                {complianceTabs[activeTab].howWeHelp}
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesCompliance;
