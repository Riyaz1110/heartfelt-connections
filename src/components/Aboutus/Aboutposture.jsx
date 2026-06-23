const CARDS = [
  {
    id: 'intelligence',
    icon: '/images/About Us/posture/intelligence.png',
    title: 'Intelligence Led\nDetection',
    body: 'AI/ML-driven threat intelligence correlates behavioral signals across your full environment, surfacing threat actors before they breach your perimeter. Log correlation, SIEM, and automated remediation workflows operate in real time.',
  },
  {
    id: 'comprehensive',
    icon: '/images/About Us/posture/comprehensive.png',
    title: 'Comprehensive &\nCustomized',
    body: "Every engagement is scoped to your sector's regulatory mandates and IT architecture. Zero Trust, HIPAA, PCI-DSS, GDPR compliance frameworks are integrated from day one, not bolted on post-breach.",
  },
  {
    id: 'soc',
    icon: '/images/About Us/posture/soc.png',
    title: 'Managed SOC\nOperations',
    body: '24/7/365 Managed Security Operations from Incident Response and Digital Forensics to vCISO governance. Your attack surface is monitored continuously; your response capability is always ready.',
  },
];

/* ── Single Card ─────────────────────────────────────────────
   Mirrors SocEngagementModels card structure exactly:
   icon-wrap (orange bg, rounded) → title → body
───────────────────────────────────────────────────────────── */
const PostureCard = ({ card }) => (
  <div className="ap-card">

    {/* Icon wrap — orange tint bg, rounded 8px, 60×60 */}
    <div className="ap-icon-wrap">
      <img
        src={card.icon}
        alt={card.title.replace('\n', ' ')}
        className="ap-icon"
        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
      />
    </div>

    {/* Title */}
    <h3 className="ap-card-title">
      {card.title.split('\n').map((line, i) => (
        <span key={i}>{line}{i === 0 && <br />}</span>
      ))}
    </h3>

    {/* Body */}
    <p className="ap-card-body">{card.body}</p>

  </div>
);

/* ── Component ──────────────────────────────────────────────── */
const AboutPosture = () => (
  <>
    <style>{`

      /* ─────────────────────────────────────────────────────
         SECTION
      ───────────────────────────────────────────────────── */
      .ap-section {
        width: 100%;
        background: #FFFFFF;
        box-sizing: border-box;
      }

      /* ─────────────────────────────────────────────────────
         CARD — matches SocEngagementModels exactly
      ───────────────────────────────────────────────────── */
      .ap-card {
        background: #FFFFFF;
        border: 1px solid #ADADAD;
        /* NO border-radius — square corners like reference */
        display: flex;
        flex-direction: column;
        transition: box-shadow 0.3s ease;
      }
      .ap-card:hover {
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }

      /* Icon wrap — 60×60, orange tint bg, border-radius 8px */
      .ap-icon-wrap {
        width:  60px;
        height: 60px;
        border-radius: 8px;
        background: #FF55361A;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Icon image — 38×38 */
      .ap-icon {
        width:  38px;
        height: 38px;
        object-fit: contain;
      }

      /* Card title */
      .ap-card-title {
        font-family: 'Cabinet Grotesk', sans-serif;
        color: #13284C;
        letter-spacing: -0.02em;
        line-height: 100%;
        margin: 0;
      }

      /* Card body */
      .ap-card-body {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: #444444;
        margin: 0;
      }

      /* ══════════════════════════════════════════════════════
         DESKTOP  ≥ 768px
      ══════════════════════════════════════════════════════ */
      @media (min-width: 768px) {

        /* Section — 1440 × 726 */
        .ap-section {
          min-height: 726px;
          padding: 80px 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 48px;
        }

        /* Top row — heading LEFT + description RIGHT */
        .ap-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }

        /* Heading — Cabinet Grotesk Bold 700, 48px, lh 110% */
        .ap-heading {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 110%;
          letter-spacing: 0;
          color: #030407;
          margin: 0;
          max-width: 457px;
          flex-shrink: 0;
        }

        /* Description — Inter 400, 16px, lh 24px, #606060 */
        .ap-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #606060;
          margin: 0;
          max-width: 555px;
          padding-top: 8px;
        }

        /* Cards grid — 3 equal columns, gap 24px */
        .ap-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Card desktop — 400×335, padding 20px, icon-mb 20px */
        .ap-card {
          width: 100%;
          min-height: 335px;
          padding: 20px;
          gap: 0;
        }
        .ap-icon-wrap {
          margin-bottom: 20px;
        }

        /* Title desktop — Cabinet Grotesk 500, 30.22px */
        .ap-card-title {
          font-weight: 500;
          font-size: 30.22px;
          margin-bottom: 16px;
        }

        /* Body desktop — Inter 400, 16.12px, lh 24.17px */
        .ap-card-body {
          font-size: 16.12px;
          line-height: 24.17px;
          letter-spacing: 0;
        }
      }

      /* ══════════════════════════════════════════════════════
         MOBILE  < 768px
      ══════════════════════════════════════════════════════ */
      @media (max-width: 767px) {

        /* Section — min 874px, gap 32px */
        .ap-section {
          height: auto;
          min-height: 874px;
          padding: 60px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        /* Top block — centered column */
        .ap-top-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        /* Heading mobile — Cabinet Grotesk Medium 500, 28px, centered */
        .ap-heading {
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
        .ap-desc {
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

        /* Cards — stacked single column */
        .ap-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 342px;
        }

        /* Card mobile — 342×230, padding 20px */
        .ap-card {
          width: 100%;
          min-height: 230px;
          padding: 20px;
          gap: 0;
        }
        .ap-icon-wrap {
          margin-bottom: 16px;
        }

        /* Title mobile — Cabinet Grotesk Bold 700, 20px */
        .ap-card-title {
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 12px;
        }

        /* Body mobile — Inter 400, 12px, lh 100%, ls -2%, #606060 */
        .ap-card-body {
          font-size: 12px;
          line-height: 100%;
          letter-spacing: -0.02em;
          color: #606060;
        }
      }

    `}</style>

    <section className="ap-section" aria-labelledby="ap-heading">

      {/* ── Top row: Heading (left) + Description (right) ───── */}
      <div className="ap-top-row">
        <h2 id="ap-heading" className="ap-heading">
          One Unified<br />Security posture
        </h2>
        <p className="ap-desc">
          Reactive security is a liability. Auriseg's framework is built to anticipate, detect, and neutralize before breach becomes impact.
        </p>
      </div>

      {/* ── 3 Cards ─────────────────────────────────────────── */}
      <div className="ap-cards">
        {CARDS.map((card) => (
          <PostureCard key={card.id} card={card} />
        ))}
      </div>

    </section>
  </>
);

export default AboutPosture;
