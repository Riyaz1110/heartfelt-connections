import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: What does GRC stand for, and why does it matter?",
      answer: "GRC stands for Governance, Risk, and Compliance, a structured framework that aligns cybersecurity, legal obligations, and operational decisions into a unified, defensible program."
    },
    {
      question: "Q2: How do managed GRC services differ from in-house compliance teams?",
      answer: "Managed GRC provides dedicated framework expertise, continuous monitoring, and audit-ready documentation that most internal teams lack the bandwidth and specialization to sustain."
    },
    {
      question: "Q3: Which compliance frameworks does Auriseg support?",
      answer: "Auriseg delivers compliance coverage across ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST CSF, NIS2, DORA, and emerging AI governance standards."
    },
    {
      question: "Q4: How quickly can Auriseg get our organization audit-ready?",
      answer: "Auriseg's structured onboarding and baseline assessment accelerates audit readiness, and most organizations achieve a defensible compliance posture within 60 to 90 days."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          boxSizing: 'border-box',
          padding: '120px 0 100px 0'   /* ← increased top from 0 to 120px */
        }}
      >
        <div className="w-full">
          <div style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: 'clamp(24px, 6.94vw, 100px)', paddingRight: 'clamp(24px, 6.94vw, 100px)', boxSizing: 'border-box' }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', border: '1px solid #CACACA', padding: '10px 11px', backgroundColor: '#FFFFFF'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                  fontSize: '16px', color: '#FE5538'
                }}>
                  FAQ
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700,
              fontSize: '48px', lineHeight: '110%', color: '#030407',
              marginBottom: '28px', maxWidth: '586px'
            }}>
              Frequently Asked
            </h2>

            {/* FAQ Accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  width: '100%', borderRadius: '10px',
                  border: '1px solid #ADADAD', backgroundColor: '#FFFFFF', overflow: 'hidden'
                }}>
                  {/* Question */}
                  <div onClick={() => toggleFAQ(index)} style={{
                    width: '100%', minHeight: '68px', padding: '20px 24px',
                    cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', backgroundColor: '#FFFFFF'
                  }}>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                      fontSize: '22px', lineHeight: '100%', color: '#030407'
                    }}>
                      {faq.question}
                    </span>
                    <button style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      backgroundColor: openIndex === index ? '#FF5536' : '#FFFFFF',
                      border: openIndex === index ? 'none' : '1.61px solid #ADADAD',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', transition: 'all 0.3s ease', flexShrink: 0
                    }}>
                      <span style={{
                        fontSize: '20px', fontWeight: 500, lineHeight: '20px',
                        color: openIndex === index ? '#FFFFFF' : '#606060'
                      }}>
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </button>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <div style={{ width: '100%', padding: '20px 24px', backgroundColor: '#FFFFFF' }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 400,
                        fontSize: '16px', lineHeight: '23.8px', color: '#606060',
                        margin: 0, maxWidth: '877px'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

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
            display: 'flex', flexDirection: 'column',
            gap: '32px',
            paddingTop: '40px',    /* ← increased top from 40px to 80px */
            paddingBottom: '40px'
          }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', border: '1px solid #CACACA', padding: '8px 12px', backgroundColor: '#FFFFFF'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '6px', height: '8.4px', borderRadius: '0.4px' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
                  fontSize: '12px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#FE5538'
                }}>
                  FAQ
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
              fontSize: '28px', lineHeight: '120%', letterSpacing: '-0.02em',
              color: '#030407', textAlign: 'center', margin: '0 auto', maxWidth: '300px'
            }}>
              Frequently Asked
            </h2>

            {/* FAQ Accordion */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  width: '100%', borderRadius: '10px',
                  border: '1px solid #ADADAD', backgroundColor: '#FFFFFF', overflow: 'hidden'
                }}>
                  {/* Question */}
                  <div onClick={() => toggleFAQ(index)} style={{
                    width: '100%', minHeight: '50px', padding: '12px 16px',
                    cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', backgroundColor: '#FFFFFF', gap: '12px'
                  }}>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                      fontSize: '14px', lineHeight: '100%', color: '#030407', flex: 1
                    }}>
                      {faq.question}
                    </span>
                    <button style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      backgroundColor: '#FF5536', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.3s ease'
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        style={{
                          transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <path d="M12 5V19M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <div style={{
                      width: '100%', padding: '16px', backgroundColor: '#F9F9F9',
                      borderTop: '1px solid #ADADAD'
                    }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 400,
                        fontSize: '12px', lineHeight: '20px', color: '#606060', margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
