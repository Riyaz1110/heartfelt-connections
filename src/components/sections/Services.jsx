import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      title: 'Offshore Security Operations',
      description: 'Enterprise-grade SOC capabilities delivered through scalable offshore expertise.',
      link: '/services/offshore-teams',
      linkText: 'Explore Offshore SOC Services →',
      image: '/images/services.png'
    },
    {
      title: 'Managed Security & Compliance Advisory',
      description: 'Security governance and auditing engineered for evolving risk landscapes.',
      link: '/services/managed-security',
      linkText: 'Learn More →',
      image: '/images/compliance-advisory.jpg'
    },
    {
      title: 'White-Label Security Enablement',
      description: 'Enterprise cybersecurity infrastructure ready for MSP deployment.',
      link: '/services/white-label-security',
      linkText: 'Explore White-Label →',
      image: '/images/white-label.jpg'
    }
  ];

  // Hover moves orange to that card; leaving the whole grid resets to card 0
  const handleCardHover = (index) => setActiveCard(index);
  const handleGridLeave = () => setActiveCard(0);
  const handleCardClick = (index) => setActiveCard(index);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstChild ? container.firstChild.offsetWidth + 12 : container.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeCard && newIndex >= 0 && newIndex < services.length) {
      setActiveCard(newIndex);
    }
    setScrollPosition(scrollLeft);
  };

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstChild;
      const cardWidth = firstCard ? firstCard.offsetWidth + 12 : scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setActiveCard(index);
    }
  };

  const rightPad = '3rem';

  return (
    <section className="w-full bg-black py-16 md:py-20">

      {/* ── DESKTOP: badge + heading ── */}
      <div className="hidden md:block" style={{ paddingLeft: '2.5cm', paddingRight: rightPad, marginBottom: '0' }}>
        <div className="flex justify-start mb-4">
          <div style={{ border: '1px solid #444444', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 11px' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '6px', height: '8.4px', borderRadius: '0.4px' }} onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0.02em', color: '#FFFFFF', textTransform: 'uppercase' }}>SERVICES</span>
          </div>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 6vw, 48px)', lineHeight: '110%', color: '#FFFFFF', maxWidth: '1152px', margin: 0 }}>
            Security Architecture for the AI Era
          </h2>
        </div>
      </div>

      {/* ── MOBILE: badge + heading ── */}
      <div className="md:hidden px-4 mb-8 text-center">
        <div className="flex justify-center mb-5">
          <div style={{ border: '1px solid #444444', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 11px' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '6px', height: '8.4px', borderRadius: '0.4px' }} onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0.02em', color: '#FFFFFF', textTransform: 'uppercase' }}>SERVICES</span>
          </div>
        </div>
        <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 8vw, 44px)', lineHeight: '110%', color: '#FFFFFF', margin: 0 }}>
          Security Architecture for the <span style={{ color: '#FE5538' }}>AI Era</span>
        </h2>
      </div>

      {/* ── DESKTOP Cards ── */}
      <div
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3"
        style={{ paddingLeft: '2.5cm', paddingRight: rightPad, marginTop: 0 }}
        onMouseLeave={handleGridLeave}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardHover(index)}
            className="group relative transition-all duration-300 overflow-hidden cursor-pointer"
            style={{
              width: '100%',
              minHeight: '273px',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              background: activeCard === index ? '#FE5538' : '#000000',
              transition: 'background 0.3s ease',
            }}
          >
            <div className="p-8 flex flex-col h-full">
              <h3
                className="font-bold mb-3"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 4.5vw, 32px)',
                  lineHeight: '1.3',
                  color: activeCard === index ? '#000000' : '#FFFFFF',
                  transition: 'color 0.3s ease',
                }}
              >
                {service.title}
              </h3>
              <p
                className="mb-4 flex-grow"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 3.5vw, 16px)',
                  lineHeight: '1.5',
                  color: activeCard === index ? '#000000' : '#9CA3AF',
                  transition: 'color 0.3s ease',
                }}
              >
                {service.description}
              </p>
              <div className="mt-auto">
                <Link
                  to={service.link}
                  className="inline-flex items-center font-semibold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 'clamp(13px, 3.5vw, 16px)',
                    lineHeight: '1.4',
                    color: activeCard === index ? '#000000' : '#FE5538',
                    transition: 'color 0.3s ease',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {service.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MOBILE Cards ── */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            gap: '0',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              style={{
                flex: '0 0 100%',
                width: '100%',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <div style={{
                background: activeCard === index ? '#FE5538' : '#1a1a1a',
                padding: '24px 16px 28px 16px',
                transition: 'background 0.3s ease',
              }}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '1.3', color: activeCard === index ? '#000000' : '#FFFFFF', marginBottom: '14px' }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '15px', lineHeight: '1.6', color: activeCard === index ? '#000000' : '#9CA3AF', marginBottom: '20px' }}>
                  {service.description}
                </p>
                <Link to={service.link} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '15px', color: activeCard === index ? '#000000' : '#FE5538', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }} onClick={(e) => e.stopPropagation()}>
                  {service.linkText}
                </Link>
              </div>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x240/1A1F2E/FE5538?text='; }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP Banner Image — updates with activeCard ── */}
      <div className="hidden md:block mt-10" style={{ paddingLeft: '2.5cm', paddingRight: rightPad }}>
        <img
          key={activeCard}
          src={services[activeCard].image}
          alt={`${services[activeCard].title} banner`}
          style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.3s ease' }}
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1440x353/1A1F2E/FE5538?text=Security+Banner'; }}
        />
      </div>

      {/* ── Navigation Dots — mobile only ── */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`transition-all duration-300 rounded-full ${activeCard === index ? 'w-8 h-2 bg-[#FE5538]' : 'w-2 h-2 bg-[#3A3A4A]'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Services;
