import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyRelatedPosts = () => {
  const relatedPosts = [
    {
      id: 2,
      title: "Unified Security Across Modern Infrastructure",
      description: "Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.",
      image: "/images/success-stories/blog/post-1.jpg",
      link: "/success-stories/2"
    },
    {
      id: 3,
      title: "Unified Security Across Modern Infrastructure",
      description: "Lorem ipsum dolor sit amet consectetur. Cras viverra netus vitae quis. Diam bibendum neque lobortis lorem.",
      image: "/images/success-stories/blog/post-2.jpg",
      link: "/success-stories/3"
    }
  ];

  return (
    <>
      {/* Desktop View - Text link (no background) */}
      <section 
        className="hidden md:block"
        style={{
          width: '100%',
          maxWidth: '1440px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '40px 0',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          {/* Top Border Line */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#ADADAD',
              marginBottom: '40px',
            }}
          />

          {/* Related Case Study Heading */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#161616',
              marginBottom: '40px',
            }}
          >
            Related Case Study
          </h2>

          {/* Two Cards Grid - SQUARE CORNERS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              marginBottom: '40px',
            }}
          >
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={post.link}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ADADAD',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '-2%',
                      color: '#030407',
                      padding: '20px 20px 0 20px',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#606060',
                      padding: '12px 20px 20px 20px',
                      margin: 0,
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Desktop: Read More Link - Text only (NO background) */}
                  <div
                    style={{
                      padding: '0 20px 20px 20px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '-2%',
                        color: '#FF5536',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button - Centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/success-stories"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '22.54px',
                lineHeight: '33.81px',
                letterSpacing: '0%',
                color: '#FF5536',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              View More →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile View - Orange background button */}
      <section 
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          minHeight: '962px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '40px 16px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '342px',
            margin: '0 auto',
          }}
        >
          {/* Top Border Line - Mobile */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#ADADAD',
              marginBottom: '24px',
            }}
          />

          {/* Related Case Study Heading - Mobile */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '100%',
              letterSpacing: '-2%',
              color: '#030407',
              marginBottom: '24px',
            }}
          >
            Related Case Study
          </h2>

          {/* Two Cards - Mobile (Stacked) - SQUARE CORNERS */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={post.link}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ADADAD',
                    borderRadius: '0px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Image - Mobile */}
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Title - Mobile */}
                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '-2%',
                      color: '#030407',
                      padding: '16px 16px 0 16px',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Description - Mobile */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#606060',
                      padding: '10px 16px 16px 16px',
                      margin: 0,
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Mobile: Read More Link - FULL WIDTH ORANGE BACKGROUND BUTTON */}
                  <div
                    style={{
                      padding: '0 16px 20px 16px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '12px 20px',
                        backgroundColor: '#FF5536',
                        borderRadius: '0px',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '-2%',
                          color: '#FFFFFF',
                        }}
                      >
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button - Mobile (Centered) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/success-stories"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FF5536',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              View More →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyRelatedPosts;
