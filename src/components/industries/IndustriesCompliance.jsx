import React, { useState } from 'react';

const IndustriesCompliance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const complianceTabs = [
    {
      title: "MFA Mandate",
      description: "Multi-factor authentication is now required for all systems accessing electronic PHI (ePHI).",
      whatItRequires: "Deploy MFA across all ePHI-touching systems, EHRs,portals, and third-party apps by the compliance deadline.",
      howWeHelp: "Auriseg implements and manages phishing-resistant MFA across your full clinical and administrative stack."
    },
    {
      title: "Encryption Standards",
      description: "ePHI must be encrypted at rest and in transit using NIST-validated cryptographic controls.",
      whatItRequires: "Audit all storage and transmission pathways; remediate unencrypted channels and legacy systems handling ePHI.",
      howWeHelp: "We run full encryption gap assessments and deploy controls without disrupting clinical data flows."
    },
    {
      title: "72-Hour Breach Notification",
      description: "Covered entities must notify HHS within 72 hours of discovering a breach affecting ePHI.",
      whatItRequires: "Establish a documented, tested incident response plan with defined notification workflows and breach classification criteria.",
      howWeHelp: "Auriseg delivers pre-built IR playbooks, tabletop exercises, and 24/7 SOC coverage to meet every notification deadline."
    },
    {
      title: "Asset Inventory Controls",
      description: "Business Associates must meet the same security controls as covered entities and you're responsible for verifying compliance.",
      whatItRequires: "Implement automated discovery and continuous monitoring of all assets including IoT devices and third-party endpoints.",
      howWeHelp: "Our IoT security platform auto-discovers and classifies every device, updated in real time, audit-ready on-demand."
    },
    {
      title: "Vendor Risk Management",
      description: "Business Associates must meet the same security controls as covered entities — and you're responsible for verifying compliance.",
      whatItRequires: "Conduct structured security assessments of all Business Associates with access to ePHI before and during contract periods.",
      howWeHelp: "Auriseg operates a managed third-party risk program — BA reviews, vendor assessments, and continuous monitoring included."
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
        id="industries-compliance"
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
              2026 HIPAA Security Rule — Are You Ready?
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
        id="industries-compliance-mobile"
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
                COMPLIANCE FOCUS
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
            Is Your Organization HIPAA‑Ready?
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
