import React from 'react';

const IndustriesStats = () => {
  const stats = [
    {
      value: "$4.88M",
      description: "Average cost of a technology sector data breach in 2024an all-time high, per IBM Cost of a Data Breach Report.",
    },
    {
      value: "60%",
      description: "Software supply chain attacks in 2024 targeted technology companies and SaaS providers as entry points into downstream customers.",
    },
    {
      value: "227 days",
      description: "Average time to identify and contain a data breach in technology environments  every day of exposure compounds IP loss and regulatory risk.",
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#030407',
          padding: '60px 0'
        }}
      >
        <div className="w-full">
          {/* Border image as background, full width, content overlaid */}
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/images/stats/stats-border.png')",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* Stats Grid - 3 columns desktop, padded inward */}
            <div className="grid grid-cols-3 max-w-[1440px] mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative min-h-[220px] py-12 flex flex-col items-start justify-center"
                  style={{
                    paddingLeft: index === 0 ? '8rem' : '4rem',
                    paddingRight: '4rem',
                  }}
                >
                  {/* Value */}
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '48px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                      color: '#FFFFFF',
                      marginBottom: '24px'
                    }}
                  >
                    {stat.value}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#9CA3AF',
                      maxWidth: '260px',
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
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
          padding: '40px 16px'
        }}
      >
        <div className="max-w-[342px] mx-auto">

          {/* Border container - Mobile */}
          <div className="relative border border-white/10 overflow-hidden">

            {/* Mobile Stats - Stacked */}
            <div className="divide-y divide-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="relative py-8 px-6 text-left">

                  {/* Orange accents - Bottom Left (on every row) */}
                  <div className="absolute bottom-0 left-[-1px] w-3 h-[1px] bg-[#FE5538] z-10"></div>
                  <div className="absolute bottom-0 left-[-1px] w-[1px] h-3 bg-[#FE5538] z-10"></div>

                  {/* Orange accents - Bottom Right (on every row) */}
                  <div className="absolute bottom-0 right-[-1px] w-3 h-[1px] bg-[#FE5538] z-10"></div>
                  <div className="absolute bottom-0 right-[-1px] w-[1px] h-3 bg-[#FE5538] z-10"></div>

                  {/* Value - Mobile */}
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '36px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                      color: '#FFFFFF',
                      marginBottom: '16px'
                    }}
                  >
                    {stat.value}
                  </div>

                  {/* Description - Mobile */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#9CA3AF'
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesStats;
