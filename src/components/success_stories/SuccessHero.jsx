import React from 'react';
import { Link } from 'react-router-dom';

const SuccessHero = () => {
  // Single story - no carousel/slides
  const story = {
    image: "/images/success-stories/story-1.jpg",
    mobileImage: "/images/success-stories/story-1-mobile.jpg",
    title: "Security Overhaul for a Post-Acquisition Finance Firm",
    mobileTitle: "Security Overhaul for a Post-Acquisition Finance Firm",  // ← Mobile specific title
    description: "A Mauritius-based consumer finance company, recently acquired by a leading East African bank, required a full security gap assessment to align its legacy infrastructure with banking-grade ISO 27001 standards across a newly merged, multi-stakeholder environment.",
    readMoreLink: "/success-stories/2"
  };

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '640px',
          background: '#030407'
        }}
      >
        {/* Desktop Background Image - NO OVERLAY */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/success-stories/success-bg.jpg"
            alt="Background"
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

        {/* Desktop Content */}
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 xl:px-20 py-16">
          <div className="max-w-[1240px] mx-auto">

            {/* Success Stories Unfold - Heading */}
            <h1
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk'",
                fontWeight: 500,
                fontSize: '62px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '16px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              Success Stories Unfold
            </h1>

            {/* Description */}
            <p
              className="text-center mx-auto"
              style={{
                fontFamily: "'Inter'",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                maxWidth: '864px',
                marginBottom: '32px',
                textShadow: '0 1px 5px rgba(0,0,0,0.3)'
              }}
            >
              Explore the challenges we solved, the strategies we applied, and the impact we delivered.
            </p>

            {/* Divider Line */}
            <div
              style={{
                width: '100%',
                maxWidth: '1198px',
                height: '0.3px',
                backgroundColor: '#FFFFFF',
                margin: '0 auto 24px auto',
                opacity: 0.5
              }}
            />

            {/* Recent Case Study - Subheading */}
            <h2
              style={{
                fontFamily: "'Inter'",
                fontWeight: 300,
                fontSize: '24px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '24px',
                textShadow: '0 1px 5px rgba(0,0,0,0.3)'
              }}
            >
              Recent Case Study
            </h2>

            {/* Content Box - SQUARE corners (no border-radius) */}
            <div
              style={{
                width: '100%',
                maxWidth: '1199px',
                minHeight: '304px',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '0px',  // ← Changed to 0px - NO CURVE
                overflow: 'hidden'
              }}
            >
              {/* Left Image */}
              <div
                style={{
                  width: '477px',
                  height: '304px',
                  background: '#FFFFFF',
                  flexShrink: 0
                }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  style={{
                    width: '477px',
                    height: '304px',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/477x304/CCCCCC/FFFFFF?text=Image';
                  }}
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 p-8">
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk',sans-serif",
                    fontWeight: 500,
                    fontSize: '48px',
                    lineHeight: '110%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '16px'
                  }}
                >
                  {story.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-2%',
                    color: '#FFFFFF',
                    marginBottom: '24px'
                  }}
                >
                  {story.description}
                </p>

                <Link
                  to={story.readMoreLink}
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '-2%',
                    color: '#FF5536',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Read →
                </Link>
              </div>
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
          minHeight: '702px',
          background: '#030407'
        }}
      >
        {/* Mobile Background Image - NO OVERLAY */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/success-stories/success-bg-mobile.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentElement.style.backgroundColor = '#030407';
            }}
          />
        </div>

        {/* Mobile Content */}
        <div className="relative z-10 w-full px-4 py-12">
          <div className="max-w-[375px] mx-auto">

            {/* Success Stories Unfold - Heading Mobile */}
            <h1
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk'",
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '35px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '16px',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              Success Stories<br />Unfold
            </h1>

            {/* Description - Mobile */}
            <p
              className="text-center mx-auto"
              style={{
                fontFamily: "'Inter'",
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                maxWidth: '281px',
                marginBottom: '24px',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              Explore the challenges we solved, the strategies we applied, and the impact we delivered.
            </p>

            {/* Divider Line - Mobile */}
            <div
              style={{
                width: '100%',
                maxWidth: '308.92px',
                height: '0.3px',
                backgroundColor: '#FFFFFF',
                margin: '0 auto 20px auto',
                opacity: 0.5
              }}
            />

            {/* Recent Case Study - Mobile */}
            <h2
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk'",
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '24px',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                marginBottom: '16px',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              Recent Case Study
            </h2>

            {/* Mobile Content Box - SQUARE corners (no border-radius) */}
            <div
              style={{
                width: '330px',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                margin: '0 auto',
                borderRadius: '0px',  // ← Changed to 0px - NO CURVE
                overflow: 'hidden'
              }}
            >
              {/* Top Image - Mobile */}
              <div
                style={{
                  width: '330px',
                  height: '172px',
                  background: '#FFFFFF'
                }}
              >
                <img
                  src={story.mobileImage || story.image}
                  alt={story.title}
                  style={{
                    width: '330px',
                    height: '172px',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/330x172/CCCCCC/FFFFFF?text=Image';
                  }}
                />
              </div>

              {/* Content below image */}
              <div className="p-4">
                {/* Mobile Title - Using mobileTitle instead */}
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk'",
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}
                >
                  {story.mobileTitle}  {/* ← Changed to mobileTitle */}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FFFFFF',
                    marginBottom: '16px'
                  }}
                >
                  {story.description}
                </p>

                <Link
                  to={story.readMoreLink}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '48px',
                    background: '#FF55361A',
                    fontFamily: "'Inter'",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: '#FF5536',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    marginTop: '16px'
                  }}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessHero;
