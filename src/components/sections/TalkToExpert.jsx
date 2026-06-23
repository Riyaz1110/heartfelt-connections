import { Link } from 'react-router-dom';

const TalkToExpert = () => {
  return (
    <section
      className="relative w-full max-w-[1441px] mx-auto bg-dark overflow-hidden"
      style={{
        minHeight: '650px',
        height: 'auto'
      }}
    >
      <div className="container-custom px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center min-h-[650px] py-6 md:py-10">

        {/* Top Content */}
        <div className="w-full max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#FFFFFF'
            }}
          >
            Talk to a Security Expert
          </h2>

          {/* Description */}
          <p
            className="mb-8 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#A9A9A9',
              maxWidth: '650px'
            }}
          >
            Our team of security experts is available 24/7 to keep your business protected.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Link
              to="/talk-to-experts"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                width: '228px',
                height: '57px',
                background: '#FF5536',
                borderRadius: '10px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0%',
                color: '#FFFFFF',
                textDecoration: 'none'
              }}
            >
              Book a Consultation →
            </Link>
          </div>

          {/* Trust Badges */}


          {/* Bottom Availability */}

        </div>

      </div>

      {/* ✅ IMAGE FIXED AT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
        <div className="relative">

          {/* Orange Glow */}
          <div className="absolute inset-0 bg-[#FE5538] rounded-full blur-2xl opacity-30 scale-150"></div>

          {/* Image */}
          <div className="relative w-[250px] h-[260px] sm:w-[300px] sm:h-[320px] md:w-[400px] md:h-[430px] flex items-center justify-center">
            <img
              src="/images/freepik__photo-a-hand-holding-a-glowing-orange-square-with-__6565 1 (3).png"
              alt="Security Expert"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/240x240/1A1F2E/FE5538?text=Expert";
              }}
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default TalkToExpert;
