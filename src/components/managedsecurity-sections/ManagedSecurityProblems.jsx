import { Link } from 'react-router-dom';
import { useState } from 'react';

const MSPProblems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      title: 'Alert Fatigue',
      description: 'Thousands of daily alerts overwhelm analysts; critical threats get missed.',
      icon: '/icons/msp/soc-cost-icon.png'
    },
    {
      title: 'Talent Shortage',
      description: 'Skilled security analysts go unfilled while threat actors move faster.',
      icon: '/icons/msp/analyst-shortage-icon.png'
    },
    {
      title: 'Fragmented Visibility',
      description: 'Siloed tools leave blind spots attackers exploit without hesitation.',
      icon: '/icons/msp/coverage-icon.png'
    },
    {
      title: 'Reactive Culture',
      description: 'Teams manage incidents instead of building resilient programs that prevent them.',
      icon: '/icons/msp/enterprise-security-icon.png'
    }
  ];

  return (
    <section className="w-full bg-dark py-16 md:py-20">

      {/* ════════════════════════════════
          DESKTOP
      ════════════════════════════════ */}
      <div
        className="hidden md:block"
        style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: 'clamp(24px, 6.94vw, 100px)', paddingRight: 'clamp(24px, 6.94vw, 100px)', boxSizing: 'border-box' }}
      >
        {/* PROBLEM Badge */}
        <div className="flex justify-start mb-8 md:mb-10">
          <div
            className="inline-flex items-center justify-center"
            style={{
              border: '1px solid #444444',
              padding: '10px 11px',
              gap: '10px',
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
              className="uppercase"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                color: '#FFFFFF'
              }}
            >
              PROBLEM
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 62px)',
              lineHeight: '100%',
              textAlign: 'left',
              color: '#FFFFFF',
              maxWidth: '700px',
              margin: 0,
            }}
          >
            Threat Environment is Outpacing <span style={{ color: '#FE5538' }}>your Team</span>
          </h2>
        </div>

        {/* Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#444444]/60">
          {problems.map((problem, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative px-6 pt-12 pb-10 flex flex-col
                transition-all duration-300 cursor-pointer
                ${index % 4 !== 3 ? 'lg:border-r border-[#444444]/50' : ''}
                border-[#444444]/30
              `}
              style={{
                minHeight: '320px',
                height: '100%',
                backgroundColor: hoveredIndex === index ? '#FE5538' : 'transparent'
              }}
            >
              <div>
                <img
                  src={problem.icon}
                  alt={problem.title}
                  style={{
                    width: '44px',
                    height: '44px',
                    objectFit: 'contain',
                    filter: hoveredIndex === index ? 'brightness(0) invert(1)' : 'none'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/44x44/444444/FFFFFF?text=Icon";
                  }}
                />
              </div>
              <div className="mt-auto pt-16">
                <h3
                  className="font-bold mb-4 transition-all duration-300"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(25px, 3.5vw, 26px)',
                    lineHeight: '110%',
                    color: '#FFFFFF'
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  className="transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: hoveredIndex === index ? '#FFFFFF' : '#ADADAD'
                  }}
                >
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════
          MOBILE
      ════════════════════════════════ */}
      <div className="md:hidden" style={{ padding: '0 20px' }}>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid #444444', padding: '8px 12px',
            backgroundColor: 'transparent'
          }}>
            <img
              src="/icons/playbook-icon.png"
              alt="icon"
              style={{ width: '6px', height: '8.4px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span style={{
              fontFamily: "'Roboto Mono', monospace", fontWeight: 500,
              fontSize: '12px', lineHeight: '100%',
              color: '#FFFFFF', textTransform: 'uppercase'
            }}>
              PROBLEM
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: '28px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          Threat Environment is Outpacing your Team
        </h2>

        {/* Cards — stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#0D0D0F',
                border: '1px solid #2A2A2A',
                borderRadius: '4px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {/* Icon */}
              <img
                src={problem.icon}
                alt={problem.title}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  filter: 'invert(42%) sepia(98%) saturate(1200%) hue-rotate(340deg) brightness(100%) contrast(101%)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/40x40/444444/FFFFFF?text=Icon";
                }}
              />

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '120%',
                color: '#FFFFFF',
                margin: 0
              }}>
                {problem.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#ADADAD',
                margin: 0
              }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MSPProblems;
