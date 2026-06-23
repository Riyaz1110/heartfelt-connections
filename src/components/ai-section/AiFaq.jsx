import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Q1: Does Auriseg test only models, or full AI applications too?",
            answer: "Auriseg tests the full AI stack, including prompts, workflows, APIs, data exposure, access controls, and deployment safeguards."
        },
        {
            question: "Q2: Can this support pre-production and production environments?",
            answer: "Yes. Auriseg supports both pre-launch validation and ongoing security assurance after deployment."
        },
        {
            question: "Q3: Do you provide remediation guidance?",
            answer: "Yes. Every engagement includes actionable findings and practical recommendations your team can use immediately."
        },
        {
            question: "Q4: Is this suitable for LLM apps and agent-based systems?",
            answer: "Yes. The approach is designed for modern AI systems, including LLM-based apps, copilots, assistants, and automated agent workflows."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
            <section
                className="hidden md:block"
                style={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    background: '#FFFFFF',
                    padding: '80px 0 100px 0',
                    boxSizing: 'border-box',
                }}
            >
                {/* Inner content constrained to 1240px centered */}
                <div
                    style={{
                        maxWidth: '1440px',
                        paddingLeft: 'calc(60px + 1cm)',
                        paddingRight: '100px',
                        boxSizing: 'border-box',
                    }}
                >
                    {/* ── FAQ Badge ── */}
                    <div style={{ marginBottom: '32px' }}>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid #CACACA',
                                padding: '10px 11px',
                                backgroundColor: '#FFFFFF',
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
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    color: '#FE5538',
                                    textTransform: 'uppercase',
                                }}
                            >
                                FAQ
                            </span>
                        </div>
                    </div>

                    {/* ── Heading ── */}
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '46px',
                            lineHeight: '110%',
                            color: '#030407',
                            marginBottom: '40px',
                            maxWidth: '586px',
                        }}
                    >
                        Commonly asked Questions
                    </h2>

                    {/* ── Accordion Items ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                    border: '1px solid #ADADAD',
                                    backgroundColor: '#FFFFFF',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Question row */}
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    style={{
                                        width: '100%',
                                        minHeight: '68px',
                                        padding: '20px 24px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#FFFFFF',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: '22px',
                                            lineHeight: '100%',
                                            color: '#030407',
                                            flex: 1,
                                        }}
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Plus / Minus toggle */}
                                    <button
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            backgroundColor: openIndex === index ? '#FF5536' : '#FFFFFF',
                                            border: openIndex === index ? 'none' : '1.61px solid #ADADAD',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                lineHeight: '20px',
                                                color: openIndex === index ? '#FFFFFF' : '#606060',
                                            }}
                                        >
                                            {openIndex === index ? '−' : '+'}
                                        </span>
                                    </button>
                                </div>

                                {/* Answer panel */}
                                {openIndex === index && (
                                    <div
                                        style={{
                                            width: '100%',
                                            padding: '20px 24px',
                                            backgroundColor: '#F9F9F9',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '23.8px',
                                                color: '#606060',
                                                margin: 0,
                                                maxWidth: '877px',
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
            <section
                className="md:hidden"
                style={{
                    width: '100%',
                    background: '#FFFFFF',
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        width: '342px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                    }}
                >
                    {/* FAQ Badge - Mobile */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                border: '1px solid #CACACA',
                                padding: '8px 12px',
                                backgroundColor: '#FFFFFF',
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
                                    color: '#FE5538',
                                    textTransform: 'uppercase',
                                }}
                            >
                                FAQ
                            </span>
                        </div>
                    </div>

                    {/* Heading - Mobile */}
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '28px',
                            lineHeight: '120%',
                            letterSpacing: '-0.02em',
                            color: '#030407',
                            textAlign: 'center',
                            margin: 0,
                        }}
                    >
                        Common Asked Questions
                    </h2>

                    {/* Accordion - Mobile */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                    border: '1px solid #ADADAD',
                                    backgroundColor: '#FFFFFF',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Question - Mobile */}
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    style={{
                                        width: '100%',
                                        minHeight: '50px',
                                        padding: '12px 16px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#FFFFFF',
                                        gap: '12px',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: '140%',
                                            color: '#030407',
                                            flex: 1,
                                        }}
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Toggle button - Mobile */}
                                    <button
                                        style={{
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            backgroundColor: '#FF5536',
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            style={{
                                                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            <path d="M12 5V19M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Answer - Mobile */}
                                {openIndex === index && (
                                    <div
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: '#F9F9F9',
                                            borderTop: '1px solid #ADADAD',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '12px',
                                                lineHeight: '20px',
                                                color: '#606060',
                                                margin: 0,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
