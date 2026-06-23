import React from 'react';

const stats = [
  { value: '500k+', label: 'Alerts Triaged Monthly.' },
  { value: '90% ', label: 'MTTR Reduction\nAverage Client.' },
  { value: '150+', label: 'MSP Partners Active.' },
  { value: '99.98%', label: 'SLA Adherence Rate' },
];

const steps = [
  {
    title: '1. Scoping call',
    description: 'Define environments, coverage scope, escalation paths, and SLA tiers aligned to your security operations requirements.',
    icon: '/icons/timeline/scoping-call.png',
  },
  {
    title: '2. Integration Setup',
    description: 'Connect SIEM, EDR, firewall, and cloud telemetry sources seamlessly into the Auriseg platform for centralized visibility.',
    icon: '/icons/timeline/integration-setup.png',
  },
  {
    title: '3. Baseline & Tuning',
    description: 'Establish baselines, suppress errors, and configure detection rules tailored to your environment and risk profile.',
    icon: '/icons/timeline/baseline-tuning.png',
  },
  {
    title: '4. Playbook Alignment',
    description: 'Co-develop runbooks and escalation workflows mapped directly to your incident response processes',
    icon: '/icons/timeline/playbook-alignment.png',
  },
  {
    title: '5. Go-Live',
    description: '24/7 monitoring activates. SLA clock starts. Your SOC is live.',
    icon: '/icons/timeline/go-live.png',
  },
];

const ThreatProcessTimeline = () => {
  return (
    <>
      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <div className="hidden md:block" style={{ width: '100%' }}>

        {/* ── Stats Band — full bleed background ── */}
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            background: '#F8F8F6',
            padding: '70px 0',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '0 48px',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  justifySelf: index === 0 ? 'start' : index === stats.length - 1 ? 'end' : 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '64px',
                    lineHeight: '100%',
                    color: '#FF5536',
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#13284C',
                    textAlign: 'center',
                    margin: 0,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process Timeline Section ── */}
        <section
          id="whitelabel-process-timeline"
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            background: '#FFFFFF',
            paddingTop: '72px',
            paddingBottom: '72px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* ── Badge ── */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #ADADAD',
              padding: '10px 11px',
              marginBottom: '28px',
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt=""
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
                textTransform: 'uppercase',
                color: '#FF5536',
              }}
            >
              PROCESS TIMELINE
            </span>
          </div>

          {/* ── Heading ── */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '110%',
              color: '#030407',
              textAlign: 'center',
              margin: '0 0 16px 0',
            }}
          >
            Operational in Hours.
          </h2>

          {/* ── Subheading ── */}
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              textAlign: 'center',
              color: '#444444',
              maxWidth: '586px',
              margin: '0 0 56px 0',
            }}
          >
            Auriseg’s onboarding process moves fast, taking you from signed contract to full SOC coverage in under two weeks.
          </p>

                    {/* ── Timeline Row ── */}
          <div
            style={{
              width: '100%',
              maxWidth: '1440px',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '64px',
              paddingLeft: '10px',
              paddingRight: '10px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '61px', // 40px icon + 16px gap + 6px (half of 12px dot) - 1px (half of 2px line)
                left: '60px',
                right: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #F5D3CD 0%, #FF5536 100%)',
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Large Icon */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '31.58px',
                    background: '#FF5536',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Small Dot on Timeline */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: ['#F5D3CD', '#F7B3A6', '#F9937E', '#FB7357', '#FF5536'][index] || '#FF5536',
                    marginBottom: '24px',
                    marginLeft: '14px', // Center under the 40px icon (40 - 12) / 2
                    zIndex: 2,
                  }}
                />

                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '17px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em',
                    color: '#13284C',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '150%',
                    color: '#444444',
                    maxWidth: '240px',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
      <div className="md:hidden" style={{ width: '100%' }}>

        {/* ── Stats Band - Mobile ── */}
        <div
          style={{
            width: '100%',
            background: '#F8F8F6',
            padding: '40px 24px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px 0',
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '36px',
                    lineHeight: '100%',
                    color: '#FF5536',
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '150%',
                    color: '#444444',
                    textAlign: 'center',
                    margin: 0,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process Timeline Section - Mobile ── */}
        <section
          id="whitelabel-process-timeline-mobile"
          style={{
            width: '100%',
            background: '#FFFFFF',
            paddingTop: '40px',
            paddingBottom: '40px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* ── Badge - Mobile ── */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5.18px',
              border: '0.52px solid #ADADAD',
              padding: '5.18px 5.7px',
              marginBottom: '20px',
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt=""
              style={{ width: '6px', height: '8.4px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#FF5536',
              }}
            >
              PROCESS TIMELINE
            </span>
          </div>

          {/* ── Heading - Mobile ── */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#030407',
              textAlign: 'center',
              width: '299px',
              margin: '0 0 12px 0',
            }}
          >
            Operational in Hours.
          </h2>

          {/* ── Subheading - Mobile ── */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '150%',
              textAlign: 'center',
              color: '#606060',
              width: '310px',
              margin: '0 0 37px 0',
            }}
          >
            Auriseg’s onboarding process moves fast, taking you from signed contract to full SOC coverage in under two weeks.
          </p>

          {/* ── Vertical Steps ── */}
          <div style={{ width: '308px', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '15px',
                bottom: '15px',
                left: '14px',
                width: '2.25px',
                background: 'linear-gradient(180deg, #F5D3CD 0%, #FF5536 100%)',
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: index !== steps.length - 1 ? '32px' : 0,
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '23.68px',
                    background: '#FF5536',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                      color: '#13284C',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '150%',
                      color: '#030407',
                      maxWidth: '183px',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreatProcessTimeline;
