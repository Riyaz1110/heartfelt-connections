import { Link } from 'react-router-dom';
import { useState } from 'react';

const Solutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    {
      title: 'Intelligent Threat Defense',
      description: 'Advanced AI analytics, behavioral monitoring, and rapid response frameworks that neutralize emerging threats before impact.',
      link: '/solutions/threat-defense',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon.png',
      backgroundImage: '/images/solutions/Card.png'
    },
    {
      title: 'Integrated Security Operations',
      description: 'Unified visibility across endpoints, cloud, and enterprise networks to maintain operational continuity under pressure.',
      link: '/solutions/security-operations',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon (1).png',
      backgroundImage: '/images/solutions/Card.png'
    },
    {
      title: 'Compliance & Governance Intelligence',
      description: 'Regulatory-aligned frameworks ensuring audit readiness, risk transparency, and enterprise assurance.',
      link: '/solutions/compliance-governance',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon (2).png',
      backgroundImage: '/images/solutions/Card.png'
    }
  ];

  return (
    <section
      className="relative w-full mx-auto bg-white overflow-hidden"
      style={{
        minHeight: '878.2px',
        height: 'auto',
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB'
      }}
    >

      {/* ══════════════════════════════
          DESKTOP
      ══════════════════════════════ */}
      <div className="hidden md:block w-full py-20"
        style={{ paddingLeft: '2.5cm', paddingRight: '3rem' }}
      >
        {/* Badge */}
        <div className="flex justify-start mb-8">
          <div style={{ border: '1px solid #444444', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 11px', backgroundColor: '#FFFFFF' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0.02em', color: '#FE5538', textTransform: 'uppercase' }}>SOLUTIONS</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 6vw, 48px)', lineHeight: '110%', letterSpacing: '0px', color: '#030407' }}>
            Unified defense across every<br />surface.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full">
          <div className="grid grid-cols-3 divide-x divide-gray-800">
            {solutions.map((solution, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                className="relative cursor-pointer"
                style={{ minHeight: '493px' }}
              >
                {/* Background */}
                <div className="absolute inset-0" style={{ backgroundImage: `url(${solution.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-black/40" />

                {/* Icon */}
                <div className="absolute top-6 left-6 z-10">
                  <img src={solution.icon} alt="icon" className="w-10 h-10" />
                </div>

                {/* Text block — title in a fixed-height container so all first words sit on the same line */}
                <div className="absolute bottom-20 left-0 right-0 p-8 z-10">
                  {/*
                    Fixed height = 2 lines of the heading at ~30px font / 1.3 line-height
                    (30 * 1.3 * 2 = 78px → use 80px for a touch of breathing room).
                    alignItems: 'flex-start' pins the text to the top of that box,
                    so "Intelligent Threat Defense", "Integrated Security", and
                    "Compliance & Governance" all start on the exact same y-coordinate.
                  */}
                  <div style={{ minHeight: '110px', display: 'flex', alignItems: 'flex-start' }}>
                    <h3 style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(18px, 4vw, 30px)',
                      lineHeight: '1.3',
                      color: '#FFFFFF',
                      margin: 0,
                    }}>
                      {solution.title}
                    </h3>
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 3.5vw, 16px)',
                    lineHeight: '150%',
                    color: '#ADADAD',
                    marginTop: '12px',
                    marginBottom: 0,
                  }}>
                    {solution.description}
                  </p>
                </div>

                {/* Hover CTA (currently commented out — preserved) */}
                {/* <div className={`absolute bottom-8 left-0 right-0 px-8 z-10 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <Link to={solution.link} className="inline-flex items-center justify-center font-semibold gap-2" style={{ color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '10px 24px', borderRadius: '6px' }}>
                    {solution.linkText}
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE — unchanged
      ══════════════════════════════ */}
      <div className="md:hidden w-full py-10 px-4">

        {/* Badge — centered */}
        <div className="flex justify-center mb-6">
          <div style={{ border: '1px solid #444444', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', backgroundColor: '#FFFFFF' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0.02em', color: '#FE5538', textTransform: 'uppercase' }}>SOLUTIONS</span>
          </div>
        </div>

        {/* Heading — centered */}
        <div className="text-center mb-8">
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 8vw, 44px)', lineHeight: '110%', color: '#030407', margin: 0 }}>
            Unified defense across{' '}
            <span style={{ color: '#FE5538' }}>every surface.</span>
          </h2>
        </div>

        {/* Cards — stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{ position: 'relative', width: '100%', minHeight: '380px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${solution.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />

              <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
                <img src={solution.icon} alt="icon" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
              </div>

              <div style={{ position: 'absolute', bottom: '24px', left: '20px', right: '20px', zIndex: 10 }}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '22px', lineHeight: '1.3', color: '#FFFFFF', marginBottom: '10px' }}>
                  {solution.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '1.6', color: '#ADADAD', margin: 0 }}>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Solutions;
