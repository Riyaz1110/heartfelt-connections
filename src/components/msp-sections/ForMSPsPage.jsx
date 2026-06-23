import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ForMSPsPage = () => {
  return (
    <div className="pt-24 md:pt-28 lg:pt-32 bg-dark min-h-screen">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* White-Label Services Badge */}
            <div className="inline-block">
              <div
                className="inline-flex items-center justify-center gap-2"
                style={{
                  border: '1px solid #444444',
                  paddingTop: '10px',
                  paddingRight: '11px',
                  paddingBottom: '10px',
                  paddingLeft: '11px',
                  gap: '10px',
                }}
              >
                {/* ✅ Icon inside div */}
                <img
                  src="/icons/playbook-icon.png"
                  alt="icon"
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />

                {/* Text */}
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#FFFFFF'
                  }}
                >
                  WHITE-LABEL SERVICES
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-white"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(40px, 5vw, 62px)',
                lineHeight: '100%',
                letterSpacing: '-2%',
                maxWidth: '502px'
              }}
            >
              White-Label SOC <br />
              Services Built for <br />
              <span style={{ color: '#FE5538' }}>MSPs and MSSPs</span>
            </h1>

            {/* Description */}
            <p
              className="text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '28.9px',
                letterSpacing: '0%',
                maxWidth: '522px'
              }}
            >
              Auriseg delivers 24/7 managed security operations that MSPs can
              offer under their own brand — without the infrastructure cost, analyst
              overhead, or operational complexity.
            </p>

            {/* Button */}
            <Link
              to="/become-a-partner"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                width: '202px',
                height: '60px',
                background: '#FF5536',
                borderRadius: '5px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                gap: '10px'
              }}
            >
              Become a Partner →
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/For MSPs and MSSP/white-label-image.png"
              alt="White Label Services"
              style={{
                width: '600px',
                height: '600px',
                objectFit: 'contain',
                //   transform: 'rotate(-180deg)'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x600/1A1F2E/FE5538?text=White+Label+Services";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForMSPsPage;
