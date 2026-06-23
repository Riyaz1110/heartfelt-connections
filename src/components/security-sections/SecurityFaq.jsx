import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: What is the difference between a vulnerability assessment and a penetration test?",
      answer: "A vulnerability assessment identifies and ranks security weaknesses without exploiting them. A penetration test goes further, our testers actively attempt to exploit those weaknesses to show the real-world impact of a breach."
    },
    {
      question: "Q2: How long does a security testing engagement typically take?",
      answer: "Timelines vary by scope. A focused web app penetration test typically takes 5–10 business days. Broader infrastructure or cloud audits may take 2–4 weeks from kickoff to final report delivery."
    },
    {
      question: "Q3: Will security testing disrupt our live systems or operations?",
      answer: "No. All Auriseg engagements are scoped and scheduled to avoid operational impact. We coordinate testing windows with your team and operate under strict rules of engagement throughout every assessment."
    },
    {
      question: "Q4: How do we know our data stays confidential during testing?",
      answer: "Every engagement is governed by a signed Non-Disclosure Agreement. Our testers follow strict data-handling protocols, and all findings are shared only with your designated stakeholders, never stored beyond the engagement period."
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
              Common questions
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
              Common questions
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
