/* ─────────────────────────────────────────────────────────────
   ABOUT GLOBAL  —  src/components/Aboutus/AboutGlobal.jsx
   Section 6: "Deployed Globally. Compliant Locally."

   DESKTOP layout:
     Top row (100px from top): Heading LEFT + Description RIGHT
     Map image: covers full section as background (no pins overlay)

   MOBILE layout:
     Content centered (heading + desc) → map image below

   Map asset — /public/images/About Us/world-map.png
   (location pins are baked into the map image itself)
─────────────────────────────────────────────────────────────── */

const AboutGlobal = () => (
  <>
    <style>{`

      /* ── Section ──────────────────────────────────────────── */
      .ag-section {
        width: 100%;
        background: #FFFFFF;
        overflow: hidden;
        position: relative;
      }

      /* ══════════════════════════════════════════════════════
         DESKTOP  ≥ 768px
      ══════════════════════════════════════════════════════ */
      @media (min-width: 768px) {

        /* Section — 1440 × 820 */
        .ag-section {
          min-height: 820px;
          height: auto;
          padding-bottom: 0;
        }

        /* Map — full section background, z-index 0 */
        .ag-map-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          z-index: 0;
          opacity: 0.9;
          pointer-events: none;
        }

        /* Content wrapper — sits on top, top-left, 100px from edges */
        .ag-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          padding: 100px 100px 0 100px;
          gap: 40px;
        }

        /* Heading — Cabinet Grotesk Bold 700, 48px, left */
        .ag-heading {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 500;
          font-size: 48px;
          line-height: 110%;
          letter-spacing: 0;
          color: #030407;
          margin: 0;
          max-width: 485px;
          flex-shrink: 0;
        }

        /* Description — Inter 500, 18px, right side same row */
        .ag-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          letter-spacing: -0.02em;
          color: #606060;
          margin: 0;
          max-width: 420px;
          padding-top: 8px;
        }

        /* Hide mobile-only elements */
        .ag-mobile-only { display: none !important; }
      }

      /* ══════════════════════════════════════════════════════
         MOBILE  < 768px
      ══════════════════════════════════════════════════════ */
      @media (max-width: 767px) {

        /* Section — auto height, no min-height, tight layout */
        .ag-section {
          height: auto;
          min-height: unset;
          padding: 48px 16px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          background: #FFFFFF;
        }

        /* No bg map on mobile */
        .ag-map-bg    { display: none !important; }
        .ag-content   { display: none !important; }

        /* Mobile content block — centered, tight gap */
        .ag-mobile-only {
          display: flex !important;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        /* Heading mobile — Cabinet Grotesk Medium 500, 28px, centered */
        .ag-heading-mobile {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 500;
          font-size: 28px;
          line-height: 30px;
          letter-spacing: -0.02em;
          color: #030407;
          text-align: center;
          margin: 0;
          max-width: 300px;
        }

        /* Description mobile — Inter 400, 12px, centered */
        .ag-desc-mobile {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #444444;
          text-align: center;
          margin: 0;
          max-width: 297px;
        }

        /* Map image — full width, larger size */
        .ag-map-mobile {
          width: 100%;
          max-width: 375px;
          height: 280px;
          object-fit: contain;
          object-position: center;
          flex-shrink: 0;
          display: block;
          margin-top: 4px;
        }
      }

    `}</style>

    <section className="ag-section" aria-labelledby="ag-heading">

      {/* ══ DESKTOP ════════════════════════════════════════════
          Map as full background — pins are baked into the image
      ══════════════════════════════════════════════════════ */}
      <img
        src="/images/About Us/world-map.png"
        alt=""
        className="ag-map-bg"
        aria-hidden="true"
        draggable="false"
      />

      {/* Top row: Heading LEFT + Description RIGHT */}
      <div className="ag-content">
        <h2 id="ag-heading" className="ag-heading">
          Global Intelligence With<br />Regional Precision.
        </h2>
        <p className="ag-desc">
          Auriseg operates across North America, Europe, and Asia,
          delivering a global threat perspective with regional
          compliance precision.
        </p>
      </div>

      {/* ══ MOBILE ════════════════════════════════════════════
          Content top-centered, map image below
      ══════════════════════════════════════════════════════ */}
      <div className="ag-mobile-only">

        {/* Heading + description — centered */}
        <h2 id="ag-heading" className="ag-heading-mobile">
          Global Intelligence With<br />Regional Precision.
        </h2>
        <p className="ag-desc-mobile">
          Auriseg operates across North America, Europe, and Asia,
          delivering a global threat perspective with regional
          compliance precision.
        </p>

        {/* Map — full width below */}
        <img
          src="/images/About Us/world_Mobile-map.png"
          alt="World map showing Auriseg office locations"
          className="ag-map-mobile"
          draggable="false"
        />

      </div>

    </section>
  </>
);

export default AboutGlobal;
