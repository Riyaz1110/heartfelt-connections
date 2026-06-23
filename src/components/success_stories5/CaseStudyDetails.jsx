import React from 'react';

const CaseStudyDetails = () => {
  const details = [
    { label: 'Industry', value: 'Shipping & Logistics' },
    { label: 'Company Size', value: '50-200' },
    { label: 'Head Quarters', value: 'Iceland' },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  ≥ 768px
          label  [badge]   label  [badge]   label  [badge]
          — NO divider lines
      ══════════════════════════════════════════ */}
      <section
        style={{
          display: 'none',          /* hidden by default (mobile-first) */
          width: '100%',
          maxWidth: '1440px',
          height: '200px',
          background: '#FFFFFF',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
        className="desktop-case-details"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              {/* Label */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#161616',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </span>

              {/* Value Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '247px',
                  height: '56px',
                  padding: '16px',
                  backgroundColor: '#FF5536',
                  borderRadius: '4px',
                  gap: '10px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '22px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MOBILE  < 768px
          Each row: label on left, badge on right
      ══════════════════════════════════════════ */}
      <section
        style={{
          display: 'flex',          /* shown by default (mobile-first) */
          flexDirection: 'column',
          width: '100%',
          maxWidth: '375px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '32px 16px',
          boxSizing: 'border-box',
        }}
        className="mobile-case-details"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              {/* Label */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#161616',
                  whiteSpace: 'nowrap',
                  minWidth: '110px',
                }}
              >
                {item.label}
              </span>

              {/* Value Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '147px',
                  height: '56px',
                  padding: '16px',
                  backgroundColor: '#FF5536',
                  borderRadius: '4px',
                  gap: '10px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Responsive toggle via a real <style> tag (no Tailwind dependency) ── */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-case-details {
            display: flex !important;
          }
          .mobile-case-details {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-case-details {
            display: none !important;
          }
          .mobile-case-details {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudyDetails;
