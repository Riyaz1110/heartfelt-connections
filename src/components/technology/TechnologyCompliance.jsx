import React, { useState } from 'react';

const IndustriesCompliance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const complianceTabs = [
    {
      title: "SOC 2 Type II Certification",
      description: "The gold standard for SaaS and cloud service providers demonstrating security, availability, and confidentiality controls to enterprise buyers.",
      whatItRequires: "12-month audit period with continuous evidence of access controls, incident response, encryption, and monitoring across your production environment.",
      howWeHelp: "Auriseg implements and manages the full SOC 2 control environment from policy engineering to evidence automation so your team focuses on shipping products."
    },
    {
      title: "ISO 27001 Certification",
      description: "The international standard for information security management systems (ISMS), required by enterprise customers across EMEA and APAC markets.",
      whatItRequires: "Establish, implement, and continuously improve a documented ISMS covering risk management, asset security, supplier relationships, and operational controls.",
      howWeHelp: "We run full ISO 27001 gap assessments, build your ISMS documentation, and support you through certification audits with a dedicated compliance team."
    },
    {
      title: "GDPR & CCPA Data Privacy Compliance",
      description: "Data privacy regulations governing how technology companies collect, process, store, and transfer personal data across EU and US markets.",
      whatItRequires: "Data mapping, privacy impact assessments, breach notification procedures within 72 hours, and documented lawful bases for all data processing activities.",
      howWeHelp: "Auriseg delivers data flow mapping, privacy engineering controls, and a tested breach notification playbook to meet every GDPR and CCPA obligation."
    },
    {
      title: "SEC Cyber Disclosure Rules",
      description: "Publicly traded technology companies must disclose material cybersecurity incidents within 4 business days and report annually on risk management programs.",
      whatItRequires: "Board-level cybersecurity governance, documented incident classification criteria, and a tested incident response program with legal and regulatory notification workflows.",
      howWeHelp: "Auriseg delivers the governance framework, IR playbooks, and 24/7 SOC coverage to meet every SEC cyber disclosure obligation and minimize material incident risk."
    },
    {
      title: "Third-Party & Vendor Risk Management",
      description: "Technology companies are accountable for the security posture of every vendor, partner, and open-source dependency with access to their environments or customer data.",
      whatItRequires: "Structured security assessments of all vendors and suppliers before and during contract periods, with continuous monitoring and documented risk decisions.",
      howWeHelp: "Auriseg operates a managed third-party risk program — vendor assessments, contract reviews, and continuous supply chain monitoring included."
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
        id="technology-compliance"
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
              Enterprise Compliance Mandates — Are You Ready?
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
        id="technology-compliance-mobile"
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
                Enterprise Compliance Mandates — Are You Ready?
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
