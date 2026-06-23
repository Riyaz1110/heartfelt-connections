const AboutFoundation = () => (
  <>
    <style>{`

      .af-section {
        width: 100%;
        background: #030407;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .af-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .af-icon {
        width:  127.086px;
        height: 109.169px;
        object-fit: contain;
        flex-shrink: 0;
      }

      .af-heading {
        font-family: 'Cabinet Grotesk', sans-serif;
        color: #FFFFFF;
        margin: 0;
        text-align: center;
      }

      .af-para {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        text-align: center;
        color: #6E6E6E;
        margin: 0;
      }

      /* ══ DESKTOP ══ */
      @media (min-width: 768px) {

        .af-section { height: 700px; }

        .af-inner {
          max-width: 1440px;
          width: 100%;
          padding: 0 100px;
          gap: 32px;
        }

        /* Widened from 565.6px → 780px so "Changing Enterprise Risk" sits on one line */
        .af-heading {
          font-weight: 700;
          font-size: 48px;
          line-height: 110%;
          letter-spacing: 0%;
          max-width: 780px;
        }

        .af-para-1 {
          font-size: 18px;
          line-height: 28px;
          max-width: 871px;
        }

        .af-para-2 {
          font-size: 18px;
          line-height: 28px;
          max-width: 871px;
        }
      }

      /* ══ MOBILE — unchanged ══ */
      @media (max-width: 767px) {

        .af-section { height: auto; padding: 60px 0; }

        .af-inner { width: 310px; gap: 32px; }

        .af-heading {
          font-weight: 700;
          font-size: 28px;
          line-height: 30px;
          letter-spacing: -0.02em;
          max-width: 310px;
        }

        .af-para-1 {
          font-size: 14px;
          line-height: 100%;
          max-width: 310px;
        }

        .af-para-2 {
          font-size: 14px;
          line-height: 100%;
          max-width: 310px;
        }
      }

    `}</style>

    <section className="af-section" aria-labelledby="af-heading">
      <div className="af-inner">

        <img
          src="/images/About Us/logo-icon.png"
          alt="Auriseg"
          className="af-icon"
          draggable="false"
        />

        <h2 id="af-heading" className="af-heading">
          Changing Enterprise Risk<br />Into Proactive Defense
        </h2>

        <p className="af-para af-para-1">
          In 2013, Auriseg was founded with the idea that cybersecurity should
          be proactive, not reactive. The team saw a gap in enterprise risk and
          security and built the platform to address it. Since then, Auriseg has
          grown from pioneering Managed SOC operations to leading global
          cybersecurity.
        </p>

        <p className="af-para af-para-2">
          Auriseg now delivers intelligence-led security to organisations across
          eight industries and three continents. Here, offensive and defensive
          strategies work together to meet your needs.
        </p>

      </div>
    </section>
  </>
);

export default AboutFoundation;
