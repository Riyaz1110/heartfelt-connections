import { useEffect, useRef } from 'react';

const Customers = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const customers = [
    { image: '/images/customers/Aliceblue.png' },
    { image: '/images/customers/Amrutanjan.png' },
    { image: '/images/customers/ANSR.png' },
    { image: '/images/customers/Aparajitha.png' },
    { image: '/images/customers/flipkart.png' },
    { image: '/images/customers/Bank of Ghana.png' },
    { image: '/images/customers/Burgerking.png' },
    { image: '/images/customers/Canara Robeco.png' },
    { image: '/images/customers/Chola.png' },
    { image: '/images/customers/Converse Now.png' },
    { image: '/images/customers/Costco.png' },
    { image: '/images/customers/Cred.png' },
    { image: '/images/customers/Cyble.png' },
    { image: '/images/customers/Droidal.png' },
    { image: '/images/customers/DVARA.png' },
    { image: '/images/customers/Easyrewardz.png' },
    { image: '/images/customers/Eclat Health.png' },
    { image: '/images/customers/equitas.png' },
    { image: '/images/customers/eroute Technologies.png' },
    { image: '/images/customers/FAB.png' },
    { image: '/images/customers/Flyjac.png' },
    { image: '/images/customers/ICT Academy.png' },
    { image: '/images/customers/Indifi.png' },
    { image: '/images/customers/Indusind Bank.png' },
    { image: '/images/customers/ITC copy.png' },
    { image: '/images/customers/JSW copy.png' },
    { image: '/images/customers/Karur Vysya Bank.png' },
    { image: '/images/customers/L&T.png' },
    { image: '/images/customers/Lumina Datamatics.png' },
    { image: '/images/customers/Mahaveer FInance.png' },
    { image: '/images/customers/Neugen Labs.png' },
    { image: '/images/customers/Nucleus Software.png' },
    { image: '/images/customers/OLA copy.png' },
    { image: '/images/customers/ONGC.png' },
    { image: '/images/customers/Open.png' },
    { image: '/images/customers/QIB.png' },
    { image: '/images/customers/Redington.png' },
    { image: '/images/customers/samsung.png' },
    { image: '/images/customers/sbm.png' },
    { image: '/images/customers/Syngene.png' },
    { image: '/images/customers/ttk.png' },
    { image: '/images/customers/tnega1.png' },
  ];

  // Split 43 logos into 2 rows
  const half = Math.ceil(customers.length / 2);
  const row1 = customers.slice(0, half);       // 22 logos
  const row2 = customers.slice(half);           // 21 logos

  // Duplicate for seamless infinite scroll
  const row1Dup = [...row1, ...row1];
  const row2Dup = [...row2, ...row2];

  useEffect(() => {
    const refs = [
      { ref: scrollRef1, direction: 'ltr', speed: 0.8 },
      { ref: scrollRef2, direction: 'rtl', speed: 0.8 },
    ];

    const amounts = [0, 0];
    let animationFrame;

    // Initialize RTL row to middle
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 2;
    }

    const scroll = () => {
      refs.forEach(({ ref, direction, speed }, i) => {
        const el = ref.current;
        if (!el || el.matches(':hover')) return;

        const halfWidth = el.scrollWidth / 2;

        if (direction === 'ltr') {
          amounts[i] += speed;
          if (amounts[i] >= halfWidth) amounts[i] = 0;
          el.scrollLeft = amounts[i];
        } else {
          amounts[i] += speed;
          if (amounts[i] >= halfWidth) amounts[i] = 0;
          el.scrollLeft = halfWidth - amounts[i];
        }
      });

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const LogoCard = ({ customer, index, rowKey }) => (
    <div
      key={`${rowKey}-${index}`}
      style={{
        flexShrink: 0,
        width: '200px',
        height: '90px',
        border: '1px solid rgba(165,158,158,0.4)',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 16px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src={customer.image}
        alt={`client-${rowKey}-${index}`}
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        onError={e => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/160x46/F5F5F5/CCCCCC?text=Logo';
        }}
      />
    </div>
  );

  const ScrollRow = ({ rowRef, logos, rowKey, mb }) => (
    <div
      ref={rowRef}
      style={{
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        marginBottom: mb ? '16px' : '0',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', gap: '16px', padding: '6px 0', width: 'fit-content' }}>
        {logos.map((customer, index) => (
          <LogoCard key={`${rowKey}-${index}`} customer={customer} index={index} rowKey={rowKey} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      style={{
        paddingTop: '64px',
        paddingBottom: '64px',
        background: '#FFFFFF',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 16px',
          boxSizing: 'border-box',
        }}
      >
        {/* Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #444444',
              padding: '8px 11px',
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt="icon"
              style={{ width: '8px', height: '11px', borderRadius: '0.4px' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#FF5536',
                textTransform: 'uppercase',
              }}
            >
              OUR CUSTOMERS
            </span>
          </div>
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '44px',
              lineHeight: '110%',
              letterSpacing: '-0.02em',
              color: '#000000',
              margin: '0 auto',
              maxWidth: '600px',
            }}
          >
            Clients Who Choose Security{' '}
            <span style={{ color: '#FE5538' }}>Without Compromise</span>
          </h2>
        </div>

        {/* Row 1 — Left to Right */}
        <ScrollRow rowRef={scrollRef1} logos={row1Dup} rowKey="r1" mb={true} />

        {/* Row 2 — Right to Left */}
        <ScrollRow rowRef={scrollRef2} logos={row2Dup} rowKey="r2" mb={false} />
      </div>
    </section>
  );
};

export default Customers;
