const AboutFoundation = () => (
  <>
    <style>{`

      /* ── Section shell ──────────────────────────────────── */
      .af-section {
        width: 100%;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* ── Inner wrapper ──────────────────────────────────── */
      .af-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      /* ── Logo icon ──────────────────────────────────────── */
      .af-icon {
        width:  127.086px;
        height: 109.169px;
        object-fit: contain;
        flex-shrink: 0;
      }

      /* ── Heading ────────────────────────────────────────── */
      .af-heading {
        font-family: 'Cabinet Grotesk', sans-serif;
        color: #030407;
        margin: 0;
        text-align: center;
      }

      /* ── Paragraph shared ───────────────────────────────── */
      .af-para {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        text-align: center;
        color: #6E6E6E;
        margin: 0;
      }

      /* ══════════════════════════════════════════════════════
         DESKTOP  ≥ 768px
      ══════════════════════════════════════════════════════ */
      @media (min-width: 768px) {

        .af-section {
          height: 700px;
        }

        .af-inner {
          max-width: 1440px;
          width: 100%;
          padding: 0 100px;
          gap: 32px;
        }

        /* Heading — 565×106, Cabinet Grotesk Bold 700, 48px, lh 110% */
        .af-heading {
          font-weight: 500;
          font-size: 48px;
          line-height: 110%;
          letter-spacing: 0%;
          max-width: 565.6px;
          color: #030407;
        }

        /* Para 1 — 871×84, Inter 500, 18px, lh 28px */
        .af-para-1 {
          font-size: 18px;
          line-height: 28px;
          max-width: 871px;
        }

        /* Para 2 — 871×56, Inter 500, 18px, lh 28px */
        .af-para-2 {
          font-size: 18px;
          line-height: 28px;
          max-width: 871px;
        }
      }

      /* ══════════════════════════════════════════════════════
         MOBILE  < 768px
      ══════════════════════════════════════════════════════ */
      @media (max-width: 767px) {

        .af-section {
          height: auto;
          padding: 60px 0;
        }

        .af-inner {
          width: 310px;
          gap: 32px;
        }

        /* Heading — 310×60, Cabinet Grotesk Medium 500, 28px, lh 30px, ls -2% */
        .af-heading {
          font-weight: 500;
          font-size: 28px;
          line-height: 30px;
          letter-spacing: -0.02em;
          max-width: 310px;
          color: #030407;
        }

        /* Para 1 — 310×119, Inter 500, 14px, lh 100%, ls -2% */
        .af-para-1 {
          font-size: 14px;
          line-height: 100%;
          max-width: 310px;
        }

        /* Para 2 — 310×68, Inter 500, 14px, lh 100%, ls -2% */
        .af-para-2 {
          font-size: 14px;
          line-height: 100%;
          max-width: 310px;
        }
      }

    `}</style>

    <section className="af-section" aria-labelledby="af-heading">

      <div className="af-inner">

        {/* ── Auriseg asterisk icon ──────────────────────────── */}
        <img
          src="/images/About Us/logo-icon.png"
          alt="Auriseg"
          className="af-icon"
          draggable="false"
        />

        {/* ── Heading ───────────────────────────────────────── */}
        <h2 id="af-heading" className="af-heading">
          Offensive insight.<br />Defensive precision.
        </h2>

        {/* ── Paragraph 1 ───────────────────────────────────── */}
        <p className="af-para af-para-1">
          In 2013, Auriseg was founded with the idea that cybersecurity should
          be proactive, not reactive. The team saw a gap in enterprise risk and
          security and built the platform to address it. Since then, Auriseg has
          grown from pioneering Managed SOC operations to leading global
          cybersecurity.
        </p>

        {/* ── Paragraph 2 ───────────────────────────────────── */}
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
