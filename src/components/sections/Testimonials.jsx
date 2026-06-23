import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Auriseg’s EDR gives us continuous monitoring, rapid threat response, and stronger defenses to seamlessly expand our own capabilities without the overhead.",
      author: "PlaceHolder",
      position: "CEO",
      company: "SILENT BREACH",
      companyLogo: "/images/testimonials/silent brench clr-2.png",
      buildingImage: "/images/testimonials/side-1.png"
    },
    {
      quote: "Auriseg understood our unique challenges and designed a tailored security approach. Their continued guidance and real-time support make them feel less like a vendor and more like a true extension of our team.",
      author: "PlaceHolder",
      position: "CISO",
      company: "HARMAN",
      companyLogo: "/images/testimonials/harman clr-2.png",
      buildingImage: "/images/testimonials/side-2.png"
    },
    {
      quote: "Their attention to detail and commitment to excellence have been instrumental in strengthening our cybersecurity posture.",
      author: "PlaceHolder",
      position: "VP",
      company: "CAMEO SOFTWARE SERVICES",
      companyLogo: "/images/testimonials/cameo clr-2.png",
      buildingImage: "/images/testimonials/side-3.png"
    },
    {
      quote: "Auriseg’s security assessments helped us identify and address critical vulnerabilities in our system, preventing a potential cyber-attack.",
      author: "PlaceHolder",
      position: "CISO",
      company: "OLA",
      companyLogo: "/images/testimonials/ola clr-2.png",
      buildingImage: "/images/testimonials/side-4.png"
    },
    {
      quote: "Auriseg understood our unique healthcare needs and built a tailored framework to protect patient data and meet strict regulations. Their clear insights and global support let us focus on delivering care.",
      author: "PlaceHolder",
      position: "CTO",
      company: "ECLAT HEALTHCARE",
      companyLogo: "/images/testimonials/eclat clr-2.png",
      buildingImage: "/images/testimonials/side-5.png"
    },
    {
      quote: "We sincerely appreciate the team’s effort in completing the testing and related activities within a tight schedule. Their professionalism, seamless execution, and consistent support throughout the engagement were truly impressive. Working with such a dedicated and responsive team made the entire process smooth and successful.",
      author: "PlaceHolder",
      position: "HIT",
      company: "DOCFY",
      companyLogo: "/images/testimonials/docfy clr-2.png",
      buildingImage: "/images/testimonials/side-6.png"
    }
  ];

  const clientLogos = [
    { name: 'ECLAT', image: '/images/testimonials/silent brench clr-2.png' },
    { name: 'HARMAN', image: '/images/testimonials/harman clr-2.png' },
    { name: 'CAMEO', image: '/images/testimonials/cameo clr-2.png' },
    { name: 'OLA', image: '/images/testimonials/ola clr-2.png' },
    { name: 'ECLAT', image: '/images/testimonials/eclat clr-2.png' },
    { name: 'DOCFY', image: '/images/testimonials/docfy clr-2.png' },

  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-[#030407] py-16 md:py-20 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        {/* 1. TESTIMONIALS - Border with Icon */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div
            className="inline-flex items-center justify-center gap-2"
            style={{
              border: '1px solid #CACACA',
              paddingTop: '10px',
              paddingRight: '11px',
              paddingBottom: '10px',
              paddingLeft: '11px',
              gap: '10px',
              backgroundColor: '#030407'
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt="icon"
              style={{
                width: '8px',
                height: '11.2px',
                borderRadius: '0.4px'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span
              className="uppercase"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF'
              }}
            >
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* 2. Section Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 44px)',
              lineHeight: '110%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#FFFFFF',
              maxWidth: '650px',
              margin: '0 auto'
            }}
          >
            Security Partnerships <span style={{ color: '#FE5538' }}>That Endure</span>
          </h2>
        </div>

        {/* 3. Client Logos Strip */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-[69px] mb-10 md:mb-12">
          {clientLogos.map((client, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${activeIndex === index
                ? 'opacity-100 scale-110'
                : 'opacity-70 hover:opacity-100'
                }`}
            >
              <div className="w-[80px] sm:w-[100px] md:w-[134px] h-[40px] sm:h-[46px] flex items-center justify-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain transition-all duration-300"
                  style={{
                    filter: activeIndex === index ? 'grayscale(0%)' : 'grayscale(100%) brightness(0.8)'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* 4. Testimonial Box - FIXED MOBILE RESPONSIVE */}
        <div className="max-w-[1080px] mx-auto">
          <div
            className="relative bg-[#030407] rounded-[10px] border border-gray-800 shadow-lg overflow-hidden"
            style={{
              width: '100%',
              minHeight: 'auto'
            }}
          >
            {/* MOBILE VIEW - Stacked Layout */}
            <div className="md:hidden">
              {/* Mobile Building Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={testimonials[activeIndex].buildingImage}
                  alt={`${testimonials[activeIndex].company} building`}
                  className="w-full object-cover"
                  style={{
                    height: '212px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Mobile Content */}
              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#FE5538]/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="mb-6 text-white text-sm leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#030407] rounded-[10px] border border-gray-700 flex items-center justify-center overflow-hidden w-12 h-12">
                    <img
                      src={testimonials[activeIndex].companyLogo}
                      alt={testimonials[activeIndex].company}
                      className="w-full h-full object-contain p-1.5"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/50x50/1A1F2E/FFFFFF?text=${testimonials[activeIndex].company.charAt(0)}`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonials[activeIndex].position} of {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP VIEW - Side by Side Layout */}
            <div className="hidden md:flex md:flex-row">
              {/* Left Side - Building Image Area */}
              <div
                className="relative flex-shrink-0"
                style={{
                  width: '380px',
                  minHeight: '337px',
                  margin: '16px',
                  overflow: 'hidden'
                }}
              >
                <div className="w-full h-full">
                  <img
                    src={testimonials[activeIndex].buildingImage}
                    alt={`${testimonials[activeIndex].company} building`}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '16px' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Quote Icon Overlay - Desktop only */}
                  {/* <div className="absolute top-6 left-6 z-10">
                    <svg className="w-12 h-12 text-[#FE5538]/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Right Side - Content Desktop */}
              <div className="flex-1 p-6 md:p-8">
                {/* Quote Text */}
                <p
                  className="mb-6 leading-relaxed text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(13px, 3vw, 17px)',
                    lineHeight: '1.5',
                    letterSpacing: '0%',
                    maxWidth: '100%'
                  }}
                >
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info with Logo */}
                <div className="flex items-center gap-3">
                  <div
                    className="bg-[#030407] rounded-[10px] border border-gray-700 flex items-center justify-center overflow-hidden"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px'
                    }}
                  >
                    <img
                      src={testimonials[activeIndex].companyLogo}
                      alt={testimonials[activeIndex].company}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/50x50/1A1F2E/FFFFFF?text=${testimonials[activeIndex].company.charAt(0)}`;
                      }}
                    />
                  </div>

                  <div>
                    <h4
                      className="text-white text-sm font-medium"
                    >
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonials[activeIndex].position} of {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Arrow Navigation - Mobile & Desktop */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="group flex items-center justify-center rounded-full p-2 transition-all duration-300 border border-gray-700 hover:border-[#FE5538] hover:bg-[#FE5538]"
            style={{ width: '44px', height: '44px' }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="group flex items-center justify-center rounded-full p-2 transition-all duration-300 border border-gray-700 hover:border-[#FE5538] hover:bg-[#FE5538]"
            style={{ width: '44px', height: '44px' }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
