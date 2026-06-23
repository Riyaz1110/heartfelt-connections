import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const RELATED_BLOGS = [
  {
    id: 1,
    category: 'CATEGORY',
    readTime: '5 min read',
    title: 'Multi-Finance Company Mauritius',
    author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' },
    date: '24 April 2026',
    img: '/images/blog/post-1.jpg',
    link: '/resources/blogs/1',
  },
  {
    id: 2,
    category: 'CATEGORY',
    readTime: '5 min read',
    title: 'Multi-Finance Company Mauritius',
    author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' },
    date: '20 April 2026',
    img: '/images/blog/post-2.jpg',
    link: '/resources/blogs/2',
  },
  {
    id: 3,
    category: 'CATEGORY',
    readTime: '5 min read',
    title: 'Multi-Finance Company Mauritius',
    author: { name: 'Jin Kuris', avatar: '/images/blog/author-1.jpg' },
    date: '18 April 2026',
    img: '/images/blog/post-1.jpg',
    link: '/resources/blogs/3',
  },
];

// ─── AUTHOR AVATAR ────────────────────────────────────────────────────────────
const AuthorAvatar = ({ src, name, size = 32 }) => (
  <div style={{
    width: `${size}px`, height: `${size}px`, borderRadius: '50%',
    overflow: 'hidden', flexShrink: 0, background: '#E0E0E0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <img src={src} alt={name}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentNode.style.background = '#FF5536';
        const span = document.createElement('span');
        span.textContent = name.charAt(0).toUpperCase();
        span.style.color = '#fff';
        span.style.fontWeight = '700';
        span.style.fontSize = `${size * 0.4}px`;
        e.target.parentNode.appendChild(span);
      }}
    />
  </div>
);

// ─── DESKTOP CARD ─────────────────────────────────────────────────────────────
const DesktopCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <Link to={card.link} style={{ textDecoration: 'none' }}>
      <article
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          width: '100%',
          border: '0.9px solid #ADADAD',
          background: '#FFFFFF',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          transform: hov ? 'translateY(-3px)' : 'translateY(0)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div style={{ width: '100%', height: '140px', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
          <img src={card.img} alt={card.title} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Body */}
        <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Title */}
          <h3 style={{
            fontFamily: "'Cabinet Grotesk','Inter',sans-serif",
            fontWeight: 700, fontSize: '18px', lineHeight: '120%',
            letterSpacing: '-0.02em', color: '#030407', margin: 0,
          }}>
            {card.title}
          </h3>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <AuthorAvatar src={card.author.avatar} name={card.author.name} size={28} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', color: '#030407' }}>
              {card.author.name}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

// ─── MOBILE CARD ──────────────────────────────────────────────────────────────
const MobileCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <Link to={card.link} style={{ textDecoration: 'none' }}>
      <article
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          width: '100%',
          border: '0.9px solid #ADADAD',
          background: '#FFFFFF',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          transform: hov ? 'translateY(-2px)' : 'translateY(0)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div style={{ width: '100%', height: '150px', background: '#1a2a3a', flexShrink: 0, overflow: 'hidden' }}>
          <img src={card.img} alt={card.title} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Body */}
        <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Title */}
          <h3 style={{
            fontFamily: "'Cabinet Grotesk','Inter',sans-serif",
            fontWeight: 700, fontSize: '18px', lineHeight: '120%',
            letterSpacing: '-0.02em', color: '#030407', margin: 0,
          }}>
            {card.title}
          </h3>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <AuthorAvatar src={card.author.avatar} name={card.author.name} size={28} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', color: '#030407' }}>
                {card.author.name}
              </span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '10px', color: '#ADADAD' }}>
                {card.date}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const RelatedBlogs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{
      background: '#FFFFFF',
      width: '100%',
      margin: '0 auto',
      padding: isMobile ? '24px 16px 40px' : '0 100px 56px',
      boxSizing: 'border-box',
    }}>
      {/* Top border line */}
      <div style={{ width: '100%', height: '1px', background: '#EBEBEB', marginBottom: '24px' }} />

      {/* Heading row */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '24px',
      }}>
        <h2 style={{
          fontFamily: "'Cabinet Grotesk','Inter',sans-serif",
          fontWeight: 700, fontSize: isMobile ? '22px' : '26px',
          color: '#030407', margin: 0,
        }}>
          Related Blogs
        </h2>


      </div>

      {/* ── DESKTOP: 3 cols ── */}
      {!isMobile && (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '24px',
          }}>
            {RELATED_BLOGS.map(card => (
              <DesktopCard key={card.id} card={card} />
            ))}
          </div>
          {/* View More bottom right */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/resources/blogs"
              style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 700,
                fontSize: '14px', color: '#FF5536', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
              }}>
              View More →
            </Link>
          </div>
        </>
      )}

      {/* ── MOBILE: stacked ── */}
      {isMobile && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            {RELATED_BLOGS.map(card => (
              <MobileCard key={card.id} card={card} />
            ))}
          </div>
          {/* View More centered mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            <Link to="/resources/blogs"
              style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 700,
                fontSize: '14px', color: '#FF5536', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
              }}>
              View More →
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default RelatedBlogs;
