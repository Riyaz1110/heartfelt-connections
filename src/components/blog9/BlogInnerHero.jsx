import React from 'react';
import { Link } from 'react-router-dom';

const BlogInnerHero = ({ blog }) => {
  // Default blog data if not provided
  const blogData = blog || {
    title: "Your SCADA Isn’t Safe: 4 OT Threats That Can Silently Kill Your Operations",
    description: "Catch up with our latest news and stay in the loop on recent updates, insightful stories, and exciting announcements shaping our journey forward!",
    author: { name: "Jin Kuris", avatar: "/images/blog/author-1.jpg" },
    date: "24 April 2026",
    readTime: "5 min read",
    category: "Threat Intelligence",
    image: "/images/blog/blog-mains.jpg",
    mobileImage: "/images/blog/blog-mains.jpg",
  };

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          // ← was fixed 599px; now expands to fit content
          background: '#030407',
          boxSizing: 'border-box',
          // ← breathing room below the image
        }}
      >
        {/* Desktop Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/blog/blog-inner-bg.jpg"
            alt="Blog Background"
            className="w-full h-full object-cover object-center"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 xl:px-20 pt-12">
          <div className="max-w-[900px] mx-auto text-center">

            {/* Title */}
            <h1
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '62px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '16px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              {blogData.title}
            </h1>

            {/* Description */}
            <p
              className="text-center mx-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                maxWidth: '864px',
                marginBottom: '24px',
                textShadow: '0 1px 5px rgba(0,0,0,0.3)'
              }}
            >
              {blogData.description}
            </p>

            {/* Author Info Row */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {/* Author Image */}
              <div
                style={{
                  width: '33.45px',
                  height: '33.45px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#E0E0E0',
                }}
              >
                <img
                  src={blogData.author.avatar}
                  alt={blogData.author.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.backgroundColor = '#FF5536';
                    e.target.parentNode.style.display = 'flex';
                    e.target.parentNode.style.alignItems = 'center';
                    e.target.parentNode.style.justifyContent = 'center';
                    const span = document.createElement('span');
                    span.textContent = blogData.author.name.charAt(0).toUpperCase();
                    span.style.color = '#fff';
                    span.style.fontSize = '16px';
                    e.target.parentNode.appendChild(span);
                  }}
                />
              </div>

              {/* Author Name and Date */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#FFFFFF',
                  }}
                >
                  {blogData.author.name}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>•</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>{blogData.date}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>•</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>{blogData.readTime}</span>
              </div>
            </div>

            {/* Category + Read Time row */}
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '10px',
                color: '#030407',
                backgroundColor: '#FFFFFF',
                border: '1px solid #ADADAD',
                padding: '4px 10px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}>
                {blogData.category}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>
                {blogData.readTime}
              </span>
            </div> */}

            {/* Featured Image - full height, not clipped */}
            <div
              style={{
                width: '100%',
                maxWidth: '789.5px',
                margin: '0 auto',
                lineHeight: 0,
              }}
            >
              <img
                src={blogData.image}
                alt={blogData.title}
                style={{
                  width: '100%',
                  height: 'auto',       // ← was fixed 394px; now shows the full image
                  display: 'block',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/790x394/1a2a3a/FFFFFF?text=Blog+Image';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#030407',
          padding: '20px 16px 0 16px',
          boxSizing: 'border-box',
        }}
      >
        {/* Mobile Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/blog/blog-inner-bg-mobile.jpg"
            alt="Blog Background"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Title - Mobile */}
          <h1
            className="text-center"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '36px',
              lineHeight: '35px',
              letterSpacing: '-2%',
              color: '#FFFFFF',
              marginBottom: '16px',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            {blogData.title}
          </h1>

          {/* Description - Mobile */}
          <p
            className="text-center mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '-1%',
              color: '#FFFFFF',
              maxWidth: '281px',
              marginBottom: '20px',
              textAlign: 'center',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)'
            }}
          >
            {blogData.description}
          </p>

          {/* Author Info Row - Mobile */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              style={{
                width: '33.45px',
                height: '33.45px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#E0E0E0',
              }}
            >
              <img
                src={blogData.author.avatar}
                alt={blogData.author.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#FF5536';
                  e.target.parentNode.style.display = 'flex';
                  e.target.parentNode.style.alignItems = 'center';
                  e.target.parentNode.style.justifyContent = 'center';
                  const span = document.createElement('span');
                  span.textContent = blogData.author.name.charAt(0).toUpperCase();
                  span.style.color = '#fff';
                  span.style.fontSize = '16px';
                  e.target.parentNode.appendChild(span);
                }}
              />
            </div>

            <div className="flex flex-col items-start">
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', color: '#FFFFFF' }}>
                {blogData.author.name}
              </span>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', color: '#ADADAD' }}>{blogData.date}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', color: '#ADADAD' }}>•</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', color: '#ADADAD' }}>{blogData.readTime}</span>
              </div>
            </div>
          </div>

          {/* Category + Read Time row - Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '9px',
              color: '#030407',
              backgroundColor: '#FFFFFF',
              border: '1px solid #ADADAD',
              padding: '3px 8px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              {blogData.category}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '12px', color: '#ADADAD' }}>
              {blogData.readTime}
            </span>
          </div>

          {/* Featured Image - Mobile (full height, not clipped) */}
          <div
            style={{
              width: '100%',
              maxWidth: '475.94px',
              margin: '0 auto',
              lineHeight: 0,
            }}
          >
            <img
              src={blogData.mobileImage || blogData.image}
              alt={blogData.title}
              style={{
                width: '100%',
                height: 'auto',       // ← was fixed 237px; now shows full image
                display: 'block',
                objectFit: 'cover',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/476x238/1a2a3a/FFFFFF?text=Blog+Image';
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInnerHero;
