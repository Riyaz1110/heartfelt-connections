import React, { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   ABOUT TIMELINE  —  src/components/Aboutus/AboutTimeline.jsx

   Fixes applied:
   1. Vertical line REMOVED
   2. Icon = /icons/playbook-icon.png — hidden by default, shows on hover/active
   3. Description ALWAYS visible (not hidden)
   4. Auto-scrolling viewport with half-page height
─────────────────────────────────────────────────────────────── */

const TIMELINE = [
  {
    year: '2013',
    description: 'Founded in Chennai, India. First Managed SOC deployed — offensive and defensive mandates unified from day one.',
  },
  {
    year: '2015',
    description: 'Expanded into Government & Defense vertical. Achieved HIPAA compliance; healthcare security practice launched.',
  },
  {
    year: '2017',
    description: 'Launched AI-driven Threat Intelligence service. Crossed 50-client milestone across four verticals.',
  },
  {
    year: '2019',
    description: 'Opened European operations. Achieved PCI-DSS Level 1 certification Fintech and Retail practices scaled',
  },
  {
    year: '2021',
    description: 'Introduced Zero Trust architecture framework across all client engagements. Asia-Pacific presence established.',
  },
  {
    year: '2025',
    description: 'Crossed $1M ARR milestone. ICS/SCADA security and Identity access Simulation practices expanded across North America and Europe.',
  },
];

/* ── Playbook icon (same as Certifications section) ────────── */
const PlaybookIcon = () => (
  <img
    src="/icons/playbook-icon.png"
    alt=""
    aria-hidden="true"
    style={{ width: '8px', height: '11.2px', borderRadius: '0.4px', display: 'block' }}
    onError={(e) => { e.target.style.display = 'none'; }}
  />
);

/* ── Single timeline row ────────────────────────────────────── */
const TimelineRow = ({ item, active, onHover }) => (
  <div
    className={`atl-row ${active ? 'atl-row--active' : ''}`}
    onMouseEnter={onHover}
  >
    {/* Left: icon (hidden until hover/active) + year */}
    <div className="atl-year-block">
      {/* Icon — hidden by default, shown on hover/active */}
      <span className="atl-icon-wrap">
        <PlaybookIcon />
      </span>
      <span className="atl-year">{item.year}</span>
    </div>

    {/* Right: description — ALWAYS visible */}
    <p className="atl-desc">
      {item.description}
    </p>
  </div>
);

/* ── Component ──────────────────────────────────────────────── */
const AboutTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Set up IntersectionObserver to detect if the timeline is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance the active timeline item every 3 seconds ONLY when visible in viewport
  useEffect(() => {
    if (!isIntersecting) return;
    if (activeIdx >= TIMELINE.length - 1) return; // Stop advancing at the last item

    const timer = setInterval(() => {
      setActiveIdx((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIdx, isIntersecting]); // Reset timer if manually hovered or intersection changes

  // Scroll the viewport so the active item is properly aligned
  useEffect(() => {
    if (trackRef.current) {
      const container = trackRef.current;
      const innerList = container.querySelector('.atl-list');
      if (innerList && innerList.children[activeIdx]) {
        const activeEl = innerList.children[activeIdx];
        const containerHeight = container.clientHeight;
        const elTop = activeEl.offsetTop;
        const elHeight = activeEl.clientHeight;

        // On desktop (container > 400px), align the active item exactly 80px from the top 
        // of the viewport so it sits right next to the heading. 
        // On mobile, center it.
        const offset = containerHeight > 400 ? 80 : (containerHeight / 2 - elHeight / 2);

        container.scrollTo({
          top: elTop - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIdx]);

  return (
    <>
      <style>{`

        /* ── Section ────────────────────────────────────────── */
        .atl-section {
          position: relative;
          width: 100%;
          background: #030407;
          overflow: hidden;
        }

        /* BG image */
        .atl-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6;
        }

        /* ── Heading ─────────────────────────────────────────── */
        .atl-heading {
          font-family: 'Cabinet Grotesk', sans-serif;
          color: #FFFFFF;
          margin: 0;
        }

        /* ── Timeline Viewport ────────────────────────────────── */
        .atl-list-viewport {
          overflow-y: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE/Edge */
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .atl-list-viewport::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        /* ── Timeline List — NO ::before line ─────────────────── */
        .atl-list {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        /* ── Row ─────────────────────────────────────────────── */
        .atl-row {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          position: relative;
          z-index: 1;
          transition: opacity 0.4s ease;
        }
        /* Non-active rows dimmed */
        .atl-row:not(.atl-row--active) { opacity: 0.35; }
        .atl-row:hover,
        .atl-row.atl-row--active { opacity: 1; }

        /* ── Year block ──────────────────────────────────────── */
        .atl-year-block {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Icon wrap — HIDDEN by default */
        .atl-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          flex-shrink: 0;
        }
        /* Show icon ONLY on hover or active */
        .atl-row:hover .atl-icon-wrap,
        .atl-row--active .atl-icon-wrap {
          opacity: 1;
        }

        /* ── Year text ───────────────────────────────────────── */
        .atl-year {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 62px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 100%;
          letter-spacing: -0.02em;
          transition: color 0.4s ease;
        }
        /* Year turns orange on hover/active */
        .atl-row:hover .atl-year,
        .atl-row--active .atl-year {
          color: #FF5536;
        }

        /* ── Description — ALWAYS visible ────────────────────── */
        .atl-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: #F7F7F7;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════
           DESKTOP  ≥ 768px
        ══════════════════════════════════════════════════════ */
        @media (min-width: 768px) {

          .atl-section { height: 650px; }

          /* Heading — moved to top margin area */
          .atl-heading {
            position: absolute;
            top: 120px;
            transform: none;
            left: 100px;
            font-weight: 500;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: 0;
            max-width: 697px;
            z-index: 2;
          }

          /* Timeline Viewport — aligns active item straight with heading */
          .atl-list-viewport {
            position: absolute;
            right: 100px;
            top: 40px; /* 40px + 80px scroll offset = 120px heading position */
            transform: none;
            width: 518px;
            height: 440px;
            z-index: 2;
          }

          .atl-list {
            gap: 44px;
            padding: 150px 0; /* Ensures first/last items can be centered */
          }

          /* Row layout — icon left + year + desc */
          .atl-row {
            gap: 24px;
            align-items: flex-start;
            min-height: 84px;
          }

          /* Icon wrap desktop */
          .atl-icon-wrap {
            width: 16px;
            margin-right: 8px;
          }

          /* Year block desktop */
          .atl-year-block {
            gap: 8px;
            min-width: 120px;
          }

          /* Year desktop — 54px */
          .atl-year { font-size: 54px; }

          /* Desc desktop */
          .atl-desc {
            font-size: 13px;
            line-height: 20px;
            letter-spacing: -0.01em;
            padding-top: 10px;
            max-width: 260px;
          }

          .atl-mobile-only { display: none; }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE  < 768px
        ══════════════════════════════════════════════════════ */
        @media (max-width: 767px) {

          .atl-section {
            height: auto;
            min-height: auto; /* Removed the excessive min-height to fix the bottom gap */
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 24px 60px;
            gap: 20px; /* Reduced gap to keep timeline tightly bound to text */
          }

          /* Heading mobile */
          .atl-heading {
            position: static;
            font-weight: 500;
            font-size: 28px;
            line-height: 30px;
            letter-spacing: -0.02em;
            text-align: center;
            max-width: 300px;
            z-index: 2;
          }

          /* Timeline Viewport mobile */
          .atl-list-viewport {
            width: 100%;
            max-width: 342px;
            height: 350px;
            z-index: 2;
            position: relative;
          }

          .atl-list {
            gap: 24px;
            padding: 80px 0;
          }

          /* Row mobile */
          .atl-row {
            gap: 12px;
            align-items: flex-start;
            min-height: 90px;
          }

          /* Icon wrap mobile */
          .atl-icon-wrap {
            width: 12px;
            margin-right: 4px;
          }

          /* Year block mobile */
          .atl-year-block {
            gap: 6px;
            min-width: 80px;
          }

          /* Year mobile — 36px */
          .atl-year { font-size: 36px; }

          /* Desc mobile */
          .atl-desc {
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.01em;
            padding-top: 6px;
            max-width: 220px;
          }

          .atl-desktop-only { display: none; }
        }

      `}</style>

      <section ref={sectionRef} className="atl-section" aria-labelledby="atl-heading">

        {/* BG — desktop */}
        <img
          src="/images/About Us/timeline-bg-desktop.png"
          alt="" className="atl-bg atl-desktop-only"
          aria-hidden="true" draggable="false"
        />

        {/* BG — mobile */}
        <img
          src="/images/About Us/timeline-bg-mobile.png"
          alt="" className="atl-bg atl-mobile-only"
          aria-hidden="true" draggable="false"
        />

        {/* Heading */}
        <h2 id="atl-heading" className="atl-heading">
          Over a Decade<br />of Proven Resilience
        </h2>

        {/* Scrolling Timeline Viewport */}
        <div className="atl-list-viewport" ref={trackRef}>
          <div className="atl-list">
            {TIMELINE.map((item, idx) => (
              <TimelineRow
                key={item.year}
                item={item}
                active={activeIdx === idx}
                onHover={() => setActiveIdx(idx)}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutTimeline;

