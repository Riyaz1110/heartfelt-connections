import React from 'react';

const SocStatsSection = () => {
  const stats = [
    {
      number: '500K+',
      label1: 'Alerts Triaged',
      label2: 'Monthly'
    },
    {
      number: '90%',
      label1: 'MTTR Reduction',
      label2: 'Avg. Client'
    },
    {
      number: '150+',
      label1: 'MSP Partners',
      label2: 'Active'
    },
    {
      number: '99.98%',
      label1: 'SLA Adherence',
      label2: 'Rate'
    }
  ];

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section
        className="hidden md:block"
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: '#F9F9F9',
          height: '265px',
          border: 'none',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      >
        {/* Centered 1200px inner container */}
        <div
          style={{
            width: '1200px',
            maxWidth: '100%',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '54px',
                  lineHeight: '64px',
                  letterSpacing: '-1.92px',
                  color: '#FF5536',
                  textAlign: 'center',
                  marginBottom: '16px',
                }}
              >
                {stat.number}
              </div>

              {/* Label Line 1 */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '21.7px',
                  color: '#13284C',
                  textAlign: 'center',
                }}
              >
                {stat.label1}
              </div>

              {/* Label Line 2 */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '21.7px',
                  color: '#13284C',
                  textAlign: 'center',
                }}
              >
                {stat.label2}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View - Visible only on mobile — full width, unchanged */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#F9F9F9',
          minHeight: '215px',
          padding: '20px 0',
          border: 'none',
          outline: 'none',
        }}
      >
        <div className="w-full px-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
                style={{ padding: '12px 8px' }}
              >
                {/* Number - Mobile */}
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '29.45px',
                    letterSpacing: '-0.88px',
                    color: '#FF5536',
                    textAlign: 'center',
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>

                {/* Label Line 1 - Mobile */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    color: '#13284C',
                    textAlign: 'center',
                  }}
                >
                  {stat.label1}
                </div>

                {/* Label Line 2 - Mobile */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '100%',
                    color: '#13284C',
                    textAlign: 'center',
                  }}
                >
                  {stat.label2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocStatsSection;
