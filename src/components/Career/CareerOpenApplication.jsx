import React from 'react';
import { Link2, UserPlus, MousePointerClick, ArrowRight } from 'lucide-react';

const HR_PORTAL_URL = 'https://hr.auriseg.com';

const STEPS = [
  {
    icon: Link2,
    title: 'Click',
    desc: 'Head to our dedicated portal',
  },
  {
    icon: UserPlus,
    title: 'Connect',
    desc: 'Set up your profile in seconds',
  },
  {
    icon: MousePointerClick,
    title: 'Apply',
    desc: 'Choose your role and submit',
  },
];

const CareerOpenApplication = () => {
  const goToPortal = () => {
    window.open(HR_PORTAL_URL, '_blank', 'noopener,noreferrer');
  };

  const StepCard = ({ step, mobile }) => {
    const Icon = step.icon;
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: mobile ? '14px' : '20px',
          padding: mobile ? '16px 18px' : '20px 24px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          transition: 'all 0.25s ease',
          boxSizing: 'border-box',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(255,85,54,0.45)';
          e.currentTarget.style.background = 'rgba(255,85,54,0.06)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div style={{
          width: mobile ? '44px' : '56px',
          height: mobile ? '44px' : '56px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF5536',
        }}>
          <Icon size={mobile ? 28 : 36} strokeWidth={1.8} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Cabinet Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: mobile ? '20px' : '26px',
            lineHeight: '110%',
            color: '#FFFFFF',
            marginBottom: '4px',
          }}>
            {step.title}
          </div>
          <div style={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 400,
            fontSize: mobile ? '12px' : '14px',
            lineHeight: '140%',
            color: '#ADADAD',
          }}>
            {step.desc}
          </div>
        </div>
      </div>
    );
  };

  const SubmitButton = ({ mobile }) => (
    <button
      onClick={goToPortal}
      style={{
        width: '100%',
        padding: mobile ? '14px' : '16px',
        background: '#FF5536',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontFamily: "'Inter',sans-serif",
        fontWeight: 600,
        fontSize: mobile ? '15px' : '16px',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transition: 'background 0.2s, transform 0.2s',
        marginTop: mobile ? '20px' : '24px',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#ff6a4f'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#FF5536'; }}
    >
      Submit Application
      <ArrowRight size={18} strokeWidth={2.2} />
    </button>
  );

  return (
    <div id="open-application">
      {/* ════════════════════ DESKTOP ════════════════════ */}
      <div className="desktop-only">
        <section style={{
          width: '100%', minHeight: '783px',
          background: '#030407',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center',
          boxSizing: 'border-box',
        }}>
          <img
            src="/images/careers/open-application-bg.png" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
            onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to right, #030407 45%, #1a0502 100%)'; }}
          />

          <div style={{
            position: 'relative', zIndex: 1,
            width: '100%', maxWidth: '1440px',
            margin: '0 auto', padding: '80px 105px',
            display: 'flex', alignItems: 'flex-start',
            gap: '80px', boxSizing: 'border-box',
          }}>
            {/* LEFT */}
            <div style={{ flexShrink: 0, maxWidth: '420px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid #444444', padding: '8px 11px', marginBottom: '24px',
              }}>
                <span style={{ color: '#FF5536', fontSize: '12px', fontWeight: 500, lineHeight: 1 }}>›</span>
                <span style={{
                  fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '16px',
                  lineHeight: '100%', letterSpacing: '-0.02em',
                  color: '#FFFFFF', textTransform: 'uppercase',
                }}>
                  OPEN APPLICATION
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '48px',
                lineHeight: '105%', letterSpacing: '-0.02em',
                color: '#FFFFFF', margin: '0 0 24px 0',
              }}>
                Don't See Your Role? Pitch Us.
              </h2>

              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '16px',
                lineHeight: '24px', letterSpacing: '-0.02em',
                color: '#ADADAD', margin: 0, maxWidth: '420px',
              }}>
                Elite practitioners rarely fit a standard job description. If you're a malware reverse-engineer, a seasoned offensive security expert, or a specialist in an underserved domain, tell us what you bring. We're always building toward what's next.
              </p>
            </div>

            {/* RIGHT — Steps card */}
            <div style={{
              flex: 1, minWidth: 0,
              background: 'linear-gradient(145deg, #2a0802 0%, #030407 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px', padding: '40px',
              boxSizing: 'border-box',
            }}>
              <h3 style={{
                fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '40px',
                lineHeight: '120%', letterSpacing: '-0.02em',
                color: '#FFFFFF', margin: '0 0 28px 0',
              }}>
                Send Your Application
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {STEPS.map((s, i) => <StepCard key={i} step={s} />)}
              </div>

              <SubmitButton />

              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px',
                color: '#666', textAlign: 'center', margin: '14px 0 0 0',
              }}>
                Every application is reviewed by a human. Expect a response within 5 business days.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ════════════════════ MOBILE ════════════════════ */}
      <div className="mobile-only">
        <section style={{
          width: '100%', maxWidth: '375px',
          margin: '0 auto', background: '#030407',
          position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
        }}>
          <img
            src="/images/careers/open-application-bg-mobile.png" alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
            onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to bottom, #030407 30%, #1a0502 100%)'; }}
          />

          <div style={{ position: 'relative', zIndex: 1, padding: '48px 20px 60px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                border: '0.52px solid #444444', padding: '6px 10px',
              }}>
                <span style={{ color: '#FF5536', fontSize: '10px', fontWeight: 500, lineHeight: 1 }}>›</span>
                <span style={{
                  fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '11px',
                  lineHeight: '12px', letterSpacing: '-0.02em',
                  color: '#FF5536', textTransform: 'uppercase',
                }}>
                  OPEN APPLICATION
                </span>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '32px',
              lineHeight: '110%', letterSpacing: '-0.02em',
              color: '#FFFFFF', margin: '0 0 16px 0',
            }}>
              Don't See Your Role?<br />Pitch Us.
            </h2>

            <p style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14px',
              lineHeight: '22px', letterSpacing: '-0.02em',
              color: '#ADADAD', margin: '0 0 32px 0',
            }}>
              Elite practitioners rarely fit a standard job description. If you're a malware reverse-engineer, a seasoned offensive security expert, or a specialist in an underserved domain, tell us what you bring. We're always building toward what's next.
            </p>

            <div style={{
              width: '100%',
              background: 'linear-gradient(145deg, #2a0802 0%, #030407 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px', padding: '24px 18px', boxSizing: 'border-box',
            }}>
              <h3 style={{
                fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '24px',
                lineHeight: '110%', letterSpacing: '-0.02em',
                color: '#FFFFFF', margin: '0 0 20px 0',
              }}>
                Send Your Application
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {STEPS.map((s, i) => <StepCard key={i} step={s} mobile />)}
              </div>

              <SubmitButton mobile />

              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px',
                color: '#666', textAlign: 'center', margin: '12px 0 0 0',
              }}>
                Every application is reviewed by a human. Expect a response within 5 business days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerOpenApplication;
