import { useState, useRef, useEffect } from 'react';

const TEAM = [
  { id: 1, photo: '/images/About Us/team/Srini - Photo.png', name: 'Srinivasan M. S.', role: 'Founder & CEO', linkedin: 'https://www.linkedin.com/in/srinivasan-m-s-5690831a0' },
  { id: 2, photo: '/images/About Us/team/Saranya - Photo.png', name: 'Saranya Srinivasan', role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/saranyaauriseg' },
  { id: 3, photo: '/images/About Us/team/Mukesh - Photo.png', name: 'Mukesh Sharma', role: 'VP Operations', linkedin: 'https://www.linkedin.com/in/mukesh2305' },
  { id: 4, photo: '/images/About Us/team/Sanjay - Photo.png', name: 'Sanjay G', role: 'VP Sales', linkedin: 'https://www.linkedin.com/in/sanjaygopinathan' },
  { id: 5, photo: '/images/About Us/team/Daniel - Photo.png', name: 'Daniel Rhodes', role: 'Head of Marketing and Analytics', linkedin: 'https://www.linkedin.com/in/daniel-rhodes-1094a36b' },
  { id: 6, photo: '/images/About Us/team/jeyarajan - Photo.png', name: 'Jeyarajan R', role: 'Senior Manager - Security Assesment Team', linkedin: 'https://www.linkedin.com/in/jeyarajan-gabriel-08546b16' },
  { id: 7, photo: '/images/About Us/team/Praveen - Photo.png', name: 'Praveen Kumar', role: 'Head of Compliance', linkedin: 'https://www.linkedin.com/in/praveen-p-4296615a' },
  { id: 8, photo: '/images/About Us/team/Rathinavel - Photo.png', name: 'Rathinavel M S', role: 'Manager - Product Engineering Team', linkedin: 'https://www.linkedin.com/in/rathinavelms' },
];

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.667 2.5H3.333A.833.833 0 002.5 3.333v13.334c0 .46.373.833.833.833h13.334a.833.833 0 00.833-.833V3.333A.833.833 0 0016.667 2.5zM7.083 14.167H5v-5.5h2.083v5.5zM6.042 7.75a1.208 1.208 0 110-2.416 1.208 1.208 0 010 2.416zm8.125 6.417H12.083V11.25c0-.792-.014-1.81-1.104-1.81-1.104 0-1.271.863-1.271 1.754v2.973H7.625v-5.5h1.997v.753h.028c.278-.527.958-1.083 1.972-1.083 2.108 0 2.498 1.39 2.498 3.197v3.633h.047z" fill="#FF5536" />
  </svg>
);

const ArrowBtn = ({ onClick, disabled, direction }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    style={{
      width: 50, height: 50,
      backgroundColor: '#FF5536',
      border: 'none', borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'opacity 0.2s',
      flexShrink: 0,
    }}
  >
    {direction === 'prev' ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
);

/* ─── Desktop: fluid card width so exactly 4 always fill the viewport ─── */
const DesktopCarousel = ({ current, onPrev, onNext, maxIndex }) => {
  const viewportRef = useRef(null);
  const [cardW, setCardW] = useState(295);
  const GAP = 24;
  const VISIBLE = 4;

  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.offsetWidth;
        // card width = (viewport - gaps between visible cards) / visible count
        setCardW((vw - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const offset = current * (cardW + GAP);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 48 }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: 48, lineHeight: '110%',
          color: '#030407', margin: 0, maxWidth: 490,
        }}>
          Leadership Driving<br />Enterprise Security
        </h2>
        <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
          <ArrowBtn direction="prev" disabled={current === 0} onClick={onPrev} />
          <ArrowBtn direction="next" disabled={current >= maxIndex} onClick={onNext} />
        </div>
      </div>

      {/* Carousel viewport — clips to exactly 4 cards */}
      <div ref={viewportRef} style={{ width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: GAP,
            transition: 'transform 0.4s ease',
            transform: `translateX(-${offset}px)`,
          }}
        >
          {TEAM.map((m) => (
            <div key={m.id} className="at-card" style={{ flexShrink: 0, width: cardW, display: 'flex', flexDirection: 'column', perspective: '1200px' }}>
              {/* Photo + hover overlay */}
              <div className="at-card-inner" style={{ width: cardW, height: cardW, background: '#F7F7F7', overflow: 'hidden', flexShrink: 0, position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.5s cubic-bezier(.2,.7,.3,1), box-shadow 0.5s' }}>
                <img
                  src={m.photo} alt={m.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.5s ease, filter 0.5s ease' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.background = '#F7F7F7'; }}
                />
                <div className="at-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(3,4,7,0) 30%, rgba(3,4,7,0.55) 60%, rgba(3,4,7,0.92) 100%)',
                  opacity: 0, transition: 'opacity 0.4s ease',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: 20, color: '#fff',
                }}>
                  <div className="at-overlay-content" style={{ transform: 'translateY(12px)', transition: 'transform 0.5s cubic-bezier(.2,.7,.3,1)' }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, lineHeight: '28px', letterSpacing: '-0.02em', marginBottom: 6 }}>{m.name}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 13, lineHeight: '18px', letterSpacing: '-0.01em', color: '#E5E7EB', marginBottom: 14 }}>{m.role}</div>
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: '#FF5536', color: '#fff', borderRadius: 4, textDecoration: 'none', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13 }}>
                      Connect
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 2.5H3.333A.833.833 0 002.5 3.333v13.334c0 .46.373.833.833.833h13.334a.833.833 0 00.833-.833V3.333A.833.833 0 0016.667 2.5zM7.083 14.167H5v-5.5h2.083v5.5zM6.042 7.75a1.208 1.208 0 110-2.416 1.208 1.208 0 010 2.416zm8.125 6.417H12.083V11.25c0-.792-.014-1.81-1.104-1.81-1.104 0-1.271.863-1.271 1.754v2.973H7.625v-5.5h1.997v.753h.028c.278-.527.958-1.083 1.972-1.083 2.108 0 2.498 1.39 2.498 3.197v3.633h.047z" fill="#fff" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 18, lineHeight: '28px', letterSpacing: '-0.02em', color: '#13284C' }}>{m.name}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '100%', letterSpacing: '-0.02em', color: '#606060' }}>{m.role}</span>
                </div>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ width: 44, height: 44, borderRadius: 2, background: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Mobile: fluid card width so ~1.2 cards show (peek effect) ─── */
const MobileCarousel = ({ current, onPrev, onNext, maxIndex }) => {
  const viewportRef = useRef(null);
  const [cardW, setCardW] = useState(262);
  const GAP = 16;
  const PEEK = 32; // how much of next card peeks

  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.offsetWidth;
        setCardW(vw - PEEK); // 1 full card + PEEK of next
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const offset = current * (cardW + GAP);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
      <h2 style={{
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500, fontSize: 28, lineHeight: '30px',
        letterSpacing: '-0.02em', color: '#030407',
        textAlign: 'center', margin: 0,
      }}>
        Leadership Driving<br />Enterprise Security
      </h2>

      <div ref={viewportRef} style={{ width: '100%', overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: GAP,
          transition: 'transform 0.4s ease',
          transform: `translateX(-${offset}px)`,
        }}>
          {TEAM.map((m) => (
            <div key={m.id} style={{ flexShrink: 0, width: cardW, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: cardW, height: cardW, background: '#F7F7F7', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={m.photo} alt={m.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.background = '#F7F7F7'; }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '100%', letterSpacing: '-0.02em', color: '#13284C' }}>{m.name}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '100%', letterSpacing: '-0.02em', color: '#606060' }}>{m.role}</span>
                </div>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ width: 39, height: 39, borderRadius: 2, background: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <ArrowBtn direction="prev" disabled={current === 0} onClick={onPrev} />
        <ArrowBtn direction="next" disabled={current >= maxIndex} onClick={onNext} />
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const AboutTeam = () => {
  const [current, setCurrent] = useState(0);

  const DESKTOP_VISIBLE = 4;
  const MOBILE_VISIBLE = 1;
  const maxDesktop = TEAM.length - DESKTOP_VISIBLE;
  const maxMobile = TEAM.length - MOBILE_VISIBLE;

  const prevDesktop = () => setCurrent((p) => Math.max(p - 1, 0));
  const nextDesktop = () => setCurrent((p) => Math.min(p + 1, maxDesktop));
  const prevMobile = () => setCurrent((p) => Math.max(p - 1, 0));
  const nextMobile = () => setCurrent((p) => Math.min(p + 1, maxMobile));

  return (
    <>
      <style>{`
        .at-desktop { display: none; }
        .at-mobile  { display: none; }
        @media (min-width: 768px) {
          .at-desktop { display: block; }
          .at-section { padding: 80px 100px; }
        }
        @media (max-width: 767px) {
          .at-mobile  { display: block; }
          .at-section { padding: 48px 16px; }
        }
      `}</style>

      <section className="at-section" style={{ width: '100%', background: '#FFFFFF', boxSizing: 'border-box' }}>

        <div className="at-desktop">
          <DesktopCarousel
            current={current}
            onPrev={prevDesktop}
            onNext={nextDesktop}
            maxIndex={maxDesktop}
          />
        </div>

        <div className="at-mobile">
          <MobileCarousel
            current={current}
            onPrev={prevMobile}
            onNext={nextMobile}
            maxIndex={maxMobile}
          />
        </div>

      </section>
    </>
  );
};

export default AboutTeam;