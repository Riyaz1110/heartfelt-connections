import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: What is a cybersecurity advisory and enablement service?",
      answer: "It's a structured engagement where expert advisors help organizations build, improve, and operate security programs covering strategy, governance, architecture, and tool decisions without replacing your internal team."
    },
    {
      question: "Q2: How is a vCISO different from a full-time CISO?",
      answer: "A virtual CISO delivers executive-level security leadership on a fractional basis — providing strategic oversight, board reporting, and program direction at a fraction of the full-time cost, ideal for growing or mid-market organizations."
    },
    {
      question: "Q3: How long does a typical advisory engagement take?",
      answer: "Engagements range from a focused 4-week maturity assessment to ongoing 12-month advisory programs. Scope and duration are tailored to your specific objectives, team size, and desired outcomes."
    },
    {
      question: "Q4: Do we need a security team in place to work with Auriseg?",
      answer: "No. Auriseg works with organizations at every stage, from those building their first security function to established teams seeking to mature and scale existing capabilities with expert guidance."
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
