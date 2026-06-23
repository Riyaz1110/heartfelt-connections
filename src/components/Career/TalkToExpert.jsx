import { Link } from 'react-router-dom';

/* Mobile responsive button overrides */
const btnStyles = `
  @media (max-width: 767px) {
    .acta-btn-1 {
      width: 278px !important;
      height: 48px !important;
      font-size: 14px !important;
      border-radius: 2.59px !important;
      padding: 15px 10.36px !important;
    }
    .acta-btn-2 {
      width: 278px !important;
      height: 48px !important;
      font-size: 14px !important;
      border-radius: 2.59px !important;
      border-width: 0.52px !important;
      padding: 15px 10.36px !important;
    }
    .acta-btn-row {
      flex-direction: column !important;
    }
    .acta-heading-mobile { display: block !important; }
    .acta-heading-desktop { display: none !important; }
    .acta-description {
      font-size: 14px !important;
      line-height: 22px !important;
      padding: 0 16px !important;
    }
  }
  .acta-heading-mobile { display: none; }
  .acta-heading-desktop { display: inline; }
`;

const TalkToExpert = () => {
  return (
    <>
      <style>{btnStyles}</style>
      <section
        className="relative w-full max-w-[1441px] mx-auto bg-dark overflow-hidden"
        style={{
          minHeight: '650px',
          height: 'auto',
          background: '#030407',
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
                fontSize: '46px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              <span className="acta-heading-desktop">
                Join the Frontlines.
              </span>
              <span className="acta-heading-mobile">
                Join the Frontlines.
              </span>
            </h2>

            {/* ✅ ADDED: Description Text - Desktop & Mobile */}
            <p
              className="acta-description"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: '#ADADAD',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
              }}
            >
              The threats are real, the stakes are high, and the team you'll join is built for exactly this. Grow fast, go deep, and defend what matters.
            </p>

            {/* Two Buttons */}
            <div
              className="acta-btn-row flex flex-col sm:flex-row items-center justify-center"
              style={{ gap: '16px' }}
            >
              {/* Button 1 — Explore All open roles (orange filled) */}
              <button
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="acta-btn-1 inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
                style={{
                  width: 'clamp(278px, 299px, 299px)',
                  height: 'clamp(48px, 58px, 58px)',
                  background: '#FF5536',
                  borderRadius: '10px',
                  padding: '19px 20px',
                  gap: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Explore All open roles →
              </button>
            </div>

          </div>
        </div>

        {/* Image remains unchanged */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
          <div className="relative">

            {/* Orange Glow */}
            <div className="absolute inset-0 bg-[#FE5538] rounded-full blur-2xl opacity-30 scale-150"></div>

            {/* Image */}
            <div className="relative w-[250px] h-[260px] sm:w-[300px] sm:h-[320px] md:w-[300px] md:h-[320px] flex items-center justify-center">              <img
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
    </>
  );
};

export default TalkToExpert;
