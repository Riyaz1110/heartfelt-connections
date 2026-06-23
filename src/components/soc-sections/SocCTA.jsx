import { Link } from 'react-router-dom';

const SocCTA = () => {
  return (
    <section 
      className="relative w-full max-w-[1441px] mx-auto overflow-hidden"
      style={{
        minHeight: '600px',
        height: 'auto',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}
    >
      <div className="container-custom px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center justify-center min-h-[600px] py-6 md:py-10">

        {/* Top Content */}
        <div className="w-full max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center justify-center gap-2 mb-8"
            style={{
              border: '1px solid #444444',
              padding: '10px 11px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} />
            <span className="uppercase" style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: '600' }}>
              Get Started Today
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '110%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#FFFFFF'
            }}
          >
            Transform Your Security <span style={{ color: '#FE5538' }}>Operations</span>
          </h2>

          {/* Description */}
          <p 
            className="mb-8 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              textAlign: 'center',
              color: '#A9A9A9',
              maxWidth: '650px'
            }}
          >
            Join leading enterprises that trust Auriseg's SOC augmentation for 24/7 threat detection, incident response, and compliance management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/talk-to-experts"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                width: '100%',
                maxWidth: '240px',
                height: '57px',
                background: '#FF5536',
                borderRadius: '10px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                color: '#FFFFFF',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Schedule a Consultation
            </Link>

            <Link 
              to="/resources"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                width: '100%',
                maxWidth: '240px',
                height: '57px',
                border: '2px solid #FE5538',
                backgroundColor: 'transparent',
                borderRadius: '10px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                color: '#FE5538',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Learn More
            </Link>
          </div>

          {/* Trust Badge */}
          <div 
            className="mt-12 pt-8"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                color: '#999999',
                marginBottom: '16px'
              }}
            >
              Trusted by enterprise leaders
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <img 
                src="/images/customers/logo1.png" 
                alt="customer" 
                style={{ height: '40px', opacity: 0.6, objectFit: 'contain' }}
              />
              <img 
                src="/images/customers/logo2.png" 
                alt="customer" 
                style={{ height: '40px', opacity: 0.6, objectFit: 'contain' }}
              />
              <img 
                src="/images/customers/logo3.png" 
                alt="customer" 
                style={{ height: '40px', opacity: 0.6, objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocCTA;
