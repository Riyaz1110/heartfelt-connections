import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  const scrollRef = useRef(null);

  const industries = [
    {
      title: 'Healthcare',
      description: 'Safeguarding patient ecosystems through compliance-aligned monitoring and encrypted infrastructure resilience.',
      link: '/industries/healthcare',
      image: '/images/industries/healthcare.jpg',
      mobileImage: '/images/industries/mobile/healthcare.png'
    },
    {
      title: 'Financial Services',
      description: 'Real-time fraud defense and regulatory assurance protecting transaction integrity.',
      link: '/industries/financial',
      image: '/images/industries/financial.jpg',
      mobileImage: '/images/industries/mobile/financial.png'
    },
    {
      title: 'Manufacturing',
      description: 'Operational technology hardening and supply-chain risk defense.',
      link: '/industries/manufacturing',
      image: '/images/industries/manufacturing.jpg',
      mobileImage: '/images/industries/mobile/manufacturing.png'
    },
    {
      title: 'Technology',
      description: 'DevSecOps-driven frameworks ensure scalable, secure digital innovation.',
      link: '/industries/technology',
      image: '/images/industries/technology.jpg',
      mobileImage: '/images/industries/mobile/technology.png'
    },
    {
      title: 'Government & Critical Infrastructure',
      description: 'CERT-In aligned governance frameworks ensuring national-grade resilience.',
      link: '/industries/government',
      image: '/images/industries/government.jpg',
      mobileImage: '/images/industries/mobile/government.png'
    }
  ];

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - visibleCount));
  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + visibleCount;
      return next >= industries.length ? prev : Math.min(next, industries.length - visibleCount);
    });
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + visibleCount >= industries.length;
  const visibleIndustries = industries.slice(currentIndex, currentIndex + visibleCount);

  const handleMobileDotClick = (index) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstChild;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 12;
        scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      }
    }
    setCurrentIndex(index);
  };

  const handleMobileScroll = () => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstChild;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 12;
        const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
        if (index >= 0 && index < industries.length) setCurrentIndex(index);
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">

      {/* ══════════════════════════════
          DESKTOP — 2.5cm indent, unchanged
      ══════════════════════════════ */}
      <div className="hidden md:block" style={{ paddingLeft: '2.5cm', paddingRight: '3rem' }}>

        {/* Badge */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center justify-center gap-2" style={{ border: '1px solid #CACACA', padding: '10px 11px', backgroundColor: '#FFFFFF' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '16px', color: '#FE5538' }}>INDUSTRIES</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: '110%', letterSpacing: '-0.02em', color: '#000000', margin: 0 }}>
            Sector-Specific Cybersecurity Expertise
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-4 gap-6 md:gap-8 items-stretch">
          {visibleIndustries.map((industry, index) => (
            <div key={currentIndex + index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FE5538] transition">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{industry.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                  <Link to={industry.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', border: '1.5px solid #111111', backgroundColor: '#FFFFFF', color: '#111111', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none' }}>
                    Know More <span>→</span>
                  </Link>
                </div>
              </div>
              <div className="h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-[#FE5538] transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={handlePrev} disabled={isPrevDisabled} className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 border ${isPrevDisabled ? 'bg-gray-300 border-gray-300 cursor-not-allowed' : 'bg-white border-black hover:bg-[#FE5538] hover:border-[#FE5538] cursor-pointer'}`} style={{ width: '44px', height: '44px' }}>
            <svg className={`w-5 h-5 ${isPrevDisabled ? 'text-gray-500' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={handleNext} disabled={isNextDisabled} className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 border ${isNextDisabled ? 'bg-gray-300 border-gray-300 cursor-not-allowed' : 'bg-white border-black hover:bg-[#FE5538] hover:border-[#FE5538] cursor-pointer'}`} style={{ width: '44px', height: '44px' }}>
            <svg className={`w-5 h-5 ${isNextDisabled ? 'text-gray-500' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE — no 2.5cm, full width
      ══════════════════════════════ */}
      <div className="md:hidden">

        {/* Badge — centered */}
        <div className="flex justify-center mb-6 px-4">
          <div className="inline-flex items-center gap-2" style={{ border: '1px solid #CACACA', padding: '10px 20px', backgroundColor: '#FFFFFF' }}>
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '14px', color: '#FE5538', textTransform: 'uppercase' }}>INDUSTRIES</span>
          </div>
        </div>

        {/* Heading — centered, "Cybersecurity Expertise" in orange */}
        <div className="text-center mb-8 px-4">
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '36px', lineHeight: '115%', color: '#000000', margin: 0 }}>
            Sector-Specific<br />
            <span style={{ color: '#FE5538' }}>Cybersecurity Expertise</span>
          </h2>
        </div>

        {/* Cards — horizontal swipe, 80% width, image top + white text bottom */}
        <div
          ref={scrollRef}
          onScroll={handleMobileScroll}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '12px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '12px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              style={{
                scrollSnapAlign: 'start',
                flex: '0 0 80%',
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '230px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={industry.mobileImage || industry.image}
                  alt={industry.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = industry.image; }}
                />
              </div>

              {/* Text */}
              <div style={{ padding: '18px 16px 20px 16px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: '#FFFFFF' }}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '1.3', color: '#FE5538', marginBottom: '10px' }}>
                  {industry.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '1.65', color: '#555555', marginBottom: '20px', flexGrow: 1 }}>
                  {industry.description}
                </p>
                <Link
                  to={industry.link}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 24px', border: '1.5px solid #111111', backgroundColor: '#FFFFFF', color: '#111111', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}
                >
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          {industries.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleMobileDotClick(dotIndex)}
              style={{ border: 'none', cursor: 'pointer', padding: 0, borderRadius: '9999px', height: '8px', width: currentIndex === dotIndex ? '32px' : '8px', backgroundColor: currentIndex === dotIndex ? '#FE5538' : '#D1D5DB', transition: 'all 0.3s ease' }}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Industries;
