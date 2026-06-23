const Certifications = () => {
  const certifications = [
    { 
      name: 'ISO 9001:2015',
      image: '/certifications/iso.png',
    },
    { 
      name: 'CISSP',
      image: '/certifications/cissp1.png'
    },
    { 
      name: 'CISA',
      image: '/certifications/cisa.png'
    },
    { 
      name: 'OSCP',
      image: '/certifications/oscp.png'
    },
    { 
      name: 'CRISC',
      image: '/certifications/crisc1.png'
    },
    { 
      name: 'CISM',
      image: '/certifications/cism.png'
    },
    { 
      name: 'CERT-IN',
      image: '/certifications/cert-in.png'
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/certifications/OPTION 1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7
        }}
      ></div>

      <div className="container-custom px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col justify-center">
          {/* "CERTIFICATIONS" text with icon inside box */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px',
                backgroundColor: '#FFFFFF'
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
                className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FE5538'
                }}
              >
                CERTIFICATIONS
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 6vw, 48px)',
                lineHeight: '127%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Certified Security <span style={{ color: '#FE5538' }}>Experts</span>
            </h2>
          </div>

          {/* Certifications Grid - EXACTLY 2 columns on mobile, 7 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-5">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Logo Container */}
                <div 
                  className="relative flex items-center justify-center mb-2 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-[#FE5538] transition-all duration-300 group-hover:-translate-y-1"
                  style={{ 
                    width: '100px',
                    height: '100px',
                    padding: '8px'
                  }}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Background glow on hover */}
                  <div className="absolute -inset-0.5 bg-[#FE5538] rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                  
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain relative z-10"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/80x80/F5F5F5/CCCCCC?text=${cert.name.split(' ')[0]}`;
                    }}
                  />
                </div>
                
                {/* Certification Name */}
                <h3 className="text-[10px] sm:text-xs font-bold text-gray-900 group-hover:text-[#FE5538] transition-colors duration-300 text-center break-words max-w-[80px]">
                  {cert.name}
                </h3>
                
                {/* Decorative dot on hover */}
                <div className="hidden sm:block w-1 h-1 bg-[#FE5538] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
