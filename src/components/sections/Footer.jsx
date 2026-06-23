import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState('Company'); // first open by default

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggle = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const navSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about-us' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Penetration Testing', to: '/services/penetration-testing' },
        { label: 'Cloud Security', to: '/services/cloud-security-audit' },
        { label: 'Social Engineering', to: '/services/social-engineering' },
        { label: 'OT/IoT Security', to: '/services/ot-iot-security' },
        { label: 'Mobile App Security', to: '/services/mobile-app-security' },
      ],
    },
    {
      title: 'Managed',
      links: [
        { label: 'SOC Operations', to: '/services/soc-augmentation' },
        { label: 'MDR', to: '/services/mdr' },
        { label: 'Incident Response', to: '/services/incident-response' },
        { label: 'White-labeled Security', to: '/services/white-label-security' },
        { label: 'Threat Monitoring', to: '/services/threat-monitoring' },
      ],
    },
    {
      title: 'Advisory',
      links: [
        { label: 'Risk Assessments', to: '/services/risk-assessments' },
        { label: 'vCISO Services', to: '/services/vciso' },
        { label: 'Maturity Assessments', to: '/services/maturity-assessments' },
        { label: 'Compliance', to: '/services/regulatory-compliance' },
        { label: 'Security Architecture', to: '/services/security-architecture' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Book intro call', to: 'https://cal.com/auriseg-consulting-pvt.-ltd' },
        { label: 'Get in touch', to: '/contact' },
        { label: 'Join newsletter', to: '/resources/blogs' },
        { label: 'Follow us', to: 'https://in.linkedin.com/company/auriseg' },
        { label: 'Send feedback', to: 'mailto:marketing@auriseg.ai?subject=Feedback' },
      ],
    },
  ];

  const socialIcons = [
    {
      name: 'Facebook',
      to: 'https://www.facebook.com/people/Auriseg/61551413094675/',
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      to: 'https://www.instagram.com/auriseg_cybersecurity/',
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'X',
      to: 'https://x.com/auriseg',
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.012 2.25h6.962l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      to: 'https://in.linkedin.com/company/auriseg',
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      to: 'https://youtube.com/@auriseg?si=SWcd3Ggfci4sg04j',
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#030407" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      to: 'https://in.pinterest.com/Auriseg2013/', // 🔁 replace with your actual Pinterest URL
      svg: (
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
  ];

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <footer
        style={{
          background: '#000000',
          paddingTop: '49px',
          paddingBottom: '51px',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(24px, 5vw, 100px)',
            boxSizing: 'border-box',
          }}
        >
          <Link to="/" style={{ display: 'inline-block' }}>
            <img
              src="/logo-new5.png"
              alt="Auriseg"
              style={{ height: '45px', width: 'auto', display: 'block' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>

          {/* Main grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
              columnGap: '10px',
              marginTop: '31px',
              marginBottom: '22px',
            }}
          >
            {/* Nav cols */}
            {navSections.map((section) => (
              <div key={section.title}>
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '22px',
                    lineHeight: '1.15',
                    marginBottom: '23px',
                    marginTop: 0,
                    fontFamily: "'Cabinet Grotesk', 'Inter', Arial, sans-serif",
                    letterSpacing: '-0.02em',
                  }}
                >
                  {section.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '17px' }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        style={{
                          color: '#e5e7eb',
                          fontSize: '15px',
                          lineHeight: '1.25',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                          fontFamily: "'Cabinet Grotesk', 'Inter', Arial, sans-serif",
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#FE5538'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#e5e7eb'; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              paddingTop: '25px',
              borderTop: '1px solid #2b2f36',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ color: '#f1f5f9', fontSize: '15px', margin: 0, fontFamily: "'Inter', Arial, sans-serif", lineHeight: '1.2' }}>
              &copy; {new Date().getFullYear()} Auriseg. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              {socialIcons.map((icon) => (
                <Link
                  key={icon.name}
                  to={icon.to}
                  style={{
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FE5538'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                  aria-label={icon.name}
                >
                  {icon.svg}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <footer
      style={{
        background: '#000000',
        width: '100%',
        maxWidth: '375px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo — centered */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 24px 24px 24px',
        }}
      >
        <Link to="/" style={{ display: 'inline-block', marginBottom: '6px' }}>
          <img
            src="/logo.png"
            alt="Auriseg"
            style={{ height: '36px', width: 'auto' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </Link>
      </div>

      {/* Accordion sections */}
      <div style={{ borderTop: '1px solid #1a1f2e' }}>
        {navSections.map((section) => {
          const isOpen = openSection === section.title;
          return (
            <div
              key={section.title}
              style={{ borderBottom: '1px solid #1a1f2e' }}
            >
              {/* Header row */}
              <button
                onClick={() => toggle(section.title)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 24px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    color: '#FFFFFF',
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                  }}
                >
                  {section.title}
                </span>
                {/* Chevron */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Collapsible links */}
              <div
                style={{
                  maxHeight: isOpen ? '400px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0 24px 20px 24px',
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        style={{
                          color: '#9ca3af',
                          fontSize: '14px',
                          textDecoration: 'none',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom — copyright + social icons */}
      <div
        style={{
          padding: '28px 24px 40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <p
          style={{
            color: '#6b7280',
            fontSize: '12px',
            margin: 0,
            textAlign: 'center',
          }}
        >
          &copy; {new Date().getFullYear()} Auriseg. All rights reserved.
        </p>

        {/* Social icons row */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {socialIcons.map((icon) => (
            <Link
              key={icon.name}
              to={icon.to}
              style={{
                color: '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FE5538'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
              aria-label={icon.name}
            >
              {icon.svg}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
