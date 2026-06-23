import { Link } from 'react-router-dom';

const HERO_ASSETS = {
  bgDesktop: '/images/About Us/hero-desktop.png',
  bgMobile: '/images/About Us/hero-mobile.png',
  video: '/images/About Us/hero-orb.mp4',
};

const AboutHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

        @font-face {
          font-family: 'Cabinet Grotesk';
          src: url('/fonts/CabinetGrotesk-Medium.woff2') format('woff2'),
               url('/fonts/CabinetGrotesk-Medium.woff')  format('woff');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        .about-hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #030407;
        }

        /* ══ DESKTOP ══ */
        @media (min-width: 768px) {
          .about-hero-section { height: 700px; }

          .about-hero-bg-desktop {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            z-index: 0;
          }
          .about-hero-bg-mobile { display: none; }
          .about-hero-mobile-overlay { display: none; }

          .about-hero-inner {
            position: relative;
            z-index: 2;
            max-width: 1440px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 100px;
            padding-right: 100px;
          }

          .about-hero-content {
            position: relative;
            z-index: 3;
            max-width: 482px;
          }

          .about-hero-video-wrap {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 55%;
            max-width: 780px;
            height: 700px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 5%, black 35%, black 100%);
            mask-image: linear-gradient(to right, transparent 0%, transparent 5%, black 35%, black 100%);
          }
          .about-hero-video-wrap video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          /* ── Desktop headline: wider so it wraps in exactly 2 lines ── */
          .about-hero-headline {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 500;
            font-size: 62px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            margin: 0 0 24px;
            width: 620px;
          }

          .about-hero-body {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            margin: 0 0 32px;
            max-width: 482px;
          }
          .about-hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            text-decoration: underline;
            text-decoration-style: solid;
            text-underline-offset: 3px;
            text-decoration-thickness: 1px;
            text-decoration-skip-ink: auto;
            transition: opacity 0.2s;
          }
        }

        /* ══ MOBILE — unchanged ══ */
        @media (max-width: 767px) {
          .about-hero-section { height: 648px; min-height: 648px; }
          .about-hero-bg-desktop { display: none; }

          .about-hero-bg-mobile {
            display: block;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            z-index: 0;
          }
          .about-hero-mobile-overlay {
            display: block;
            position: absolute;
            inset: 0;
            background: rgba(3, 4, 7, 0.45);
            z-index: 1;
            pointer-events: none;
          }
          .about-hero-video-wrap { display: none; }

          .about-hero-inner {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 60px 24px 40px;
          }
          .about-hero-content {
            position: relative;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-hero-headline {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 500;
            font-size: 36px;
            line-height: 35px;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            text-align: center;
            margin: 0 0 16px;
            max-width: 307px;
          }
          .about-hero-body {
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 12px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            text-align: center;
            margin: 0 0 24px;
            max-width: 281px;
          }
          .about-hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            text-decoration: underline;
            text-decoration-style: solid;
            text-underline-offset: 3px;
            text-decoration-thickness: 1px;
            text-decoration-skip-ink: auto;
            transition: opacity 0.2s;
          }
        }

        .about-hero-cta:hover { opacity: 0.8; }
        .about-hero-cta svg { flex-shrink: 0; transition: transform 0.2s; }
        .about-hero-cta:hover svg { transform: translateX(3px); }
      `}</style>

      <section className="about-hero-section">
        <img src={HERO_ASSETS.bgDesktop} alt="" className="about-hero-bg-desktop" draggable="false" aria-hidden="true" />
        <img src={HERO_ASSETS.bgMobile} alt="" className="about-hero-bg-mobile" draggable="false" aria-hidden="true" />
        <div className="about-hero-mobile-overlay" aria-hidden="true" />

        <div className="about-hero-video-wrap">
          <video src={HERO_ASSETS.video} autoPlay loop muted playsInline />
        </div>

        <div className="about-hero-inner">
          <div className="about-hero-content">

            <h1 className="about-hero-headline">
              Securing the modern enterprise<br />At scale
            </h1>

            <p className="about-hero-body">
              Auriseg unifies offensive and defensive security for enterprises
              operating at scale, delivering intelligence-led protection across
              every vertical, every attack vector, every region.
            </p>

            {/* <Link to="/services" className="about-hero-cta">
              Discover Our Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16667 10H15.8333" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link> */}

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
