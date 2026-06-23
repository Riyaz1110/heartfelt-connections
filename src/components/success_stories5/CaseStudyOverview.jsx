import React from 'react';

const CaseStudyOverview = () => {
  const stats = [
    {
      number: "45+",
      label: "Active Clients"
    },
    {
      number: "5 Years",
      label: "In Business"
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          maxWidth: '1440px',
          minHeight: '691px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '60px 0',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            border: '1px solid rgba(173, 173, 173, 0.5)',
            borderRadius: '6px',
            padding: '28px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '60px',
            }}
          >
            {/* Left Content */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Client Overview Heading */}
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '48px',
                  lineHeight: '110%',
                  letterSpacing: '0%',
                  color: '#030407',
                  margin: 0,
                }}
              >
                Client Overview
              </h2>

              {/* Description 1 */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '146%',
                  letterSpacing: '-2%',
                  color: '#606060',
                  margin: 0,
                }}
              >
                The client is Iceland’s largest transportation company, operating 50 vessels, 2,000 trucks and trailers, 180 cold stores, and 200 operational bases across 30 countries. The organisation employs 14,500 people and generates an annual turnover exceeding EUR 1.45 billion.
              </p>

              {/* Description 2 */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '146%',
                  letterSpacing: '-2%',
                  color: '#606060',
                  margin: 0,
                }}
              >
                {/* Their challenge was clear: scale security operations to meet client demands while maintaining 
                profitability and delivering enterprise-grade protection. */}
              </p>

              {/* Stats Cards - Desktop */}
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginTop: '16px',
                }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '300px',
                      height: '76px',
                      padding: '17px 17px 1px 17px',
                      backgroundColor: '#030407',
                      borderTop: '1px solid #ADADAD',
                      gap: '4px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '32px',
                        letterSpacing: '0.07px',
                        color: '#FFFFFF',
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0px',
                        color: '#ADADAD',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div
              style={{
                flexShrink: 0,
                width: '450px',
                height: '469px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/success-stories/case-study-overview.jpg"
                alt="Client Overview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/450x469/EEEEEE/CCCCCC?text=Image';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          minHeight: '809px',
          background: '#FFFFFF',
          margin: '0 auto',
          padding: '40px 0',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '348px',
            margin: '0 auto',
            border: '1px solid #ADADAD',
            borderRadius: '6px',
            paddingBottom: '30px',
            backgroundColor: '#FFFFFF',
            gap: '12px',
          }}
        >
          {/* Image Top - Mobile */}
          <div
            style={{
              width: '348px',
              height: '362px',
              overflow: 'hidden',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
            }}
          >
            <img
              src="/images/success-stories/case-study-overview-mobile.jpg"
              alt="Client Overview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/348x362/EEEEEE/CCCCCC?text=Image';
              }}
            />
          </div>

          {/* Content */}
          <div
            style={{
              padding: '0 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Client Overview Heading - Mobile */}
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '38px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#13284C',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Client Overview
            </h2>

            {/* Description 1 - Mobile */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#030407',
                margin: 0,
                textAlign: 'center',
              }}
            >
              The client is Iceland’s largest transportation company, operating 50 vessels, 2,000 trucks and trailers, 180 cold stores, and 200 operational bases across 30 countries. The organisation employs 14,500 people and generates an annual turnover exceeding EUR 1.45 billion.
            </p>

            {/* Description 2 - Mobile */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                color: '#030407',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {/* Their challenge was clear: scale security operations to meet client demands while maintaining 
              profitability and delivering enterprise-grade protection. */}
            </p>

            {/* Stats Cards - Mobile */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '8px',
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '45px',
                    padding: '0 16px',
                    backgroundColor: '#030407',
                    border: '1px solid #ADADAD',
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '32px',
                      letterSpacing: '0.07px',
                      color: '#FFFFFF',
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                      color: '#ADADAD',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyOverview;
