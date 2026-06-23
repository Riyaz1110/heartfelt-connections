import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { HeartPulse, CreditCard, Factory, Cpu, Landmark, BookText, Award, GraduationCap } from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES_COLUMNS = [
  {
    id: 'msps',
    icon: '/icons/msp-icon.png',
    label: 'For MSPs and MSSPs',
    labelLink: '/services/for-msps',
    items: [
      { to: '/services/soc-augmentation', text: 'SOC Operations & Augmentation' },
      { to: '/services/threat-monitoring', text: 'Threat Monitoring' },
      { to: '/services/incident-response', text: 'Incident Response' },
      { to: '/services/white-label-security', text: 'White-label Security Services' },
      { to: '/services/offshore-teams', text: 'Offshore Cybersecurity Teams' },
      { to: '/services/co-delivery', text: 'Co-delivery and Enablement Support' },
    ],
  },
  {
    id: 'managed',
    icon: '/icons/managed-icon.png',
    label: 'Managed Security',
    labelLink: '/services/managed-security',
    items: [
      { to: '/services/247-monitoring', text: '24/7 Security Monitoring' },
      { to: '/services/mdr', text: 'Managed Detection and Response (MDR)' },
    ],
  },
  {
    id: 'testing',
    icon: '/icons/testing-icon.png',
    label: 'Security Testing & Assurance',
    labelLink: '/services/security-testing-assurance',
    items: [
      { to: '/services/vulnerability-assessment', text: 'Vulnerability Assessment' },
      { to: '/services/penetration-testing', text: 'Penetration Testing' },
      { to: '/services/mobile-app-security', text: 'Mobile App Security Testing' },
      { to: '/services/cloud-security-audit', text: 'Cloud Security Audit' },
      { to: '/services/social-engineering', text: 'Social Engineering & Phishing Simulations' },
      { to: '/services/source-code-review', text: 'Source Code Review' },
      { to: '/services/ai-security', text: 'AI Security, Testing, Deployment' },
      { to: '/services/ot-iot-security', text: 'OT/IoT security and automotive security' },
    ],
  },
  {
    id: 'advisory',
    icon: '/icons/advisory-icon.png',
    label: 'Advisory and Enablement',
    labelLink: '/services/advisory-and-enablement',
    items: [
      { to: '/services/security-architecture', text: 'Security Architecture' },
      { to: '/services/program-advisory', text: 'Program Advisory' },
      { to: '/services/vciso', text: 'vCISO Services' },
      { to: '/services/tool-selection', text: 'Tool Selection and Implementation' },
      { to: '/services/maturity-assessments', text: 'Maturity Assessments' },
    ],
  },
  {
    id: 'grc',
    icon: '/icons/grc-icon.png',
    label: 'GRC and Compliance',
    labelLink: '/services/grc-and-compliance',
    items: [
      { to: '/services/risk-assessments', text: 'Risk Assessments' },
      { to: '/services/regulatory-compliance', text: 'Regulatory Compliance' },
      { to: '/services/audit-readiness', text: 'Audit Readiness' },
    ],
  },
];

const RESOURCES_OPTIONS = [
  { id: 'blogs', icon: BookText, iconFallback: '📝', label: 'Blogs', to: '/resources/blogs', panel: 'blogs' },
  { id: 'certification', icon: Award, iconFallback: '🏅', label: 'Certification and Compliance', to: '/resources/certification', panel: 'certification' },
  { id: 'training', icon: GraduationCap, iconFallback: '🎓', label: 'Training and Virtual Lab', to: '/resources/training', panel: 'training' },
];

const RESOURCES_PANELS = {
  blogs: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Stay ahead of every threat.',
    description: 'Insights, deep-dives, and expert perspectives on the latest in cybersecurity — written by practitioners for practitioners.',
    cta: { label: 'Explore Blogs', to: '/resources/blogs' },
  },
  certification: {
    bg: '/images/resources/compliance-bg.jpg',
    heading: 'Close compliance gaps instantly.',
    description: 'Regulatory timelines ignore operational constraints. Map your current posture to target frameworks and build a definitive path to audit readiness.',
    cta: { label: 'Talk to Experts', to: '/talk-to-experts' },
  },
  training: {
    bg: '/images/resources/training-bg.jpg',
    heading: "Train like it's a real attack.",
    description: 'Hands-on virtual labs and certification paths built around real adversary techniques — sharpen your team before adversaries test them.',
    cta: { label: 'Start Training', to: '/resources/training' },
  },
};

const MAIN_NAV = [
  // { label: 'Solutions', to: '/solutions' },
  { label: 'Success Stories', to: '/success-stories' },
];

const INDUSTRIES_OPTIONS = [
  { id: 'healthcare', icon: HeartPulse, iconFallback: '🏥', label: 'Healthcare', to: '/industries/healthcare', panel: 'healthcare' },
  { id: 'financial', icon: CreditCard, iconFallback: '💰', label: 'Financial Services', to: '/industries/financial', panel: 'financial' },
  { id: 'manufacturing', icon: Factory, iconFallback: '🏭', label: 'Manufacturing', to: '/industries/manufacturing', panel: 'manufacturing' },
  { id: 'technology', icon: Cpu, iconFallback: '💻', label: 'Technology', to: '/industries/technology', panel: 'technology' },
  { id: 'government', icon: Landmark, iconFallback: '🏛️', label: 'Government & Critical Infrastructure', to: '/industries/government', panel: 'government' },
];

const INDUSTRIES_PANELS = {
  healthcare: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Healthcare Security.',
    description: 'Protecting patient data and critical healthcare infrastructure.',
    cta: { label: 'Explore Healthcare', to: '/industries/healthcare' },
  },
  financial: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Financial Services Security.',
    description: 'Securing financial assets and ensuring regulatory compliance.',
    cta: { label: 'Explore Financial Services', to: '/industries/financial' },
  },
  manufacturing: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Manufacturing Security.',
    description: 'Securing industrial control systems and manufacturing processes.',
    cta: { label: 'Explore Manufacturing', to: '/industries/manufacturing' },
  },
  technology: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Technology Security.',
    description: 'Protecting intellectual property and technology infrastructure.',
    cta: { label: 'Explore Technology', to: '/industries/technology' },
  },
  government: {
    bg: '/images/resources/blogs-bg.jpg',
    heading: 'Government Security.',
    description: 'Securing critical infrastructure and government data.',
    cta: { label: 'Explore Government', to: '/industries/government' },
  },
};

const COMPANY_LINKS = [
  { label: 'About us', to: '/about-us' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact us', to: '/contact' },
];

/* ─────────────────────────────────────────────
   ICON FALLBACK
───────────────────────────────────────────── */
const ColIcon = ({ src, alt, fallback }) => (
  <img
    src={src}
    alt={alt}
    className="w-[18px] h-[18px] flex-shrink-0"
    onError={(e) => {
      e.target.style.display = 'none';
      const span = document.createElement('span');
      span.textContent = fallback || '•';
      span.style.fontSize = '14px';
      span.style.flexShrink = '0';
      e.target.parentNode.insertBefore(span, e.target);
    }}
  />
);

/* ─────────────────────────────────────────────
   SERVICES DROPDOWN GROUP
───────────────────────────────────────────── */
const DropdownGroup = ({ col, onClose }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-center gap-2 mb-3">
      <ColIcon src={col.icon} alt={col.label} />
      {col.labelLink ? (
        <Link to={col.labelLink} onClick={onClose}
          className="text-[#030407] font-bold leading-tight hover:underline"
          style={{ fontSize: '14px', letterSpacing: '0.01em' }}>
          {col.label}
        </Link>
      ) : (
        <span className="text-[#030407] font-bold leading-tight" style={{ fontSize: '14px' }}>
          {col.label}
        </span>
      )}
    </div>
    <ul className="space-y-[7px]">
      {col.items.map((item) => (
        <li key={item.to}>
          <Link to={item.to} onClick={onClose}
            className="block text-gray-700 hover:text-[#FF5536] transition-colors duration-150 leading-snug"
            style={{ fontSize: '13px' }}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ─────────────────────────────────────────────
   SERVICES MEGA DROPDOWN
───────────────────────────────────────────── */
const ServicesDropdown = ({ onClose }) => (
  <div className="fixed left-0 right-0 bg-white z-40"
    style={{ top: '92px', borderTop: '3px solid #FF5536', borderBottom: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
    onMouseLeave={onClose}>
    <div style={{ maxWidth: '1441px', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px', paddingLeft: 'clamp(24px, 5vw, 100px)', paddingRight: 'clamp(24px, 5vw, 100px)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'clamp(16px, 2.5vw, 40px)' }}>
      <div>
        <DropdownGroup col={SERVICES_COLUMNS[0]} onClose={onClose} />
        <DropdownGroup col={SERVICES_COLUMNS[1]} onClose={onClose} />
      </div>
      <div><DropdownGroup col={SERVICES_COLUMNS[2]} onClose={onClose} /></div>
      <div>
        <DropdownGroup col={SERVICES_COLUMNS[3]} onClose={onClose} />
        <DropdownGroup col={SERVICES_COLUMNS[4]} onClose={onClose} />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   RESOURCES RIGHT PANEL
───────────────────────────────────────────── */
const ResourcesPanel = ({ panelKey }) => {
  const panel = RESOURCES_PANELS[panelKey];
  if (!panel) return null;
  return (
    <div style={{ flex: 1, borderRadius: '9.07px', border: '1px solid #FF5536', minHeight: '280px', position: 'relative', overflow: 'hidden', background: '#030407', boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.72)' }} />
      <img src="/images/logo_resource.png" alt="Auriseg"
        style={{ position: 'absolute', bottom: '-40px', left: '-10px', height: '150px', width: 'auto', zIndex: 2, opacity: 0.9 }} />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 32px 64px 32px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '48px', lineHeight: '110%', color: '#FFFFFF', margin: '0 0 16px 0' }}>{panel.heading}</h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '150%', color: '#ADADAD', maxWidth: '500px', margin: '0 0 28px 0' }}>{panel.description}</p>
        <Link to={panel.cta.to} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '16px', color: '#FFFFFF', background: '#FF5536', borderRadius: '5px', padding: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', minWidth: '165px', justifyContent: 'center' }}>
          {panel.cta.label} →
        </Link>
      </div>
    </div>
  );
};

const ResourcesOptionRow = ({ opt, isActive, onHover, onClose }) => {
  const [hovered, setHovered] = useState(false);
  const highlighted = isActive || hovered;
  const Icon = opt.icon;
  return (
    <Link to={opt.to} onClick={onClose}
      onMouseEnter={() => { setHovered(true); onHover(opt.panel); }}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 4px', textDecoration: 'none', background: 'transparent' }}>
      <Icon size={26} strokeWidth={2} color="#ff4b36" style={{ flexShrink: 0 }} />
      <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 600, fontSize: '15px', lineHeight: '150%', color: highlighted ? '#FF5536' : '#030407', transition: 'color 0.18s' }}>
        {opt.label}
      </span>
    </Link>
  );
};

const ResourcesDropdown = ({ onClose }) => {
  const [activePanel, setActivePanel] = useState(RESOURCES_OPTIONS[0].panel);
  return (
    <div className="fixed left-0 right-0 bg-white z-40"
      style={{ top: '92px', borderTop: '3px solid #FF5536', borderBottom: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
      onMouseLeave={onClose}>
      <div style={{ maxWidth: '1441px', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px', paddingLeft: 'clamp(24px, 5vw, 100px)', paddingRight: 'clamp(24px, 5vw, 100px)', display: 'flex', gap: 'clamp(16px, 2.5vw, 40px)', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', minWidth: '280px', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
          {RESOURCES_OPTIONS.map((opt) => (
            <ResourcesOptionRow key={opt.id} opt={opt} isActive={activePanel === opt.panel} onHover={setActivePanel} onClose={onClose} />
          ))}
        </div>
        <ResourcesPanel panelKey={activePanel} />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   INDUSTRIES RIGHT PANEL & DROPDOWN
───────────────────────────────────────────── */
const IndustriesPanel = ({ panelKey }) => {
  const panel = INDUSTRIES_PANELS[panelKey];
  if (!panel) return null;
  return (
    <div style={{ flex: 1, borderRadius: '9.07px', border: '1px solid #FF5536', minHeight: '280px', position: 'relative', overflow: 'hidden', background: '#030407', boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.72)' }} />
      <img src="/images/logo_resource.png" alt="Auriseg"
        style={{ position: 'absolute', bottom: '-40px', left: '-10px', height: '150px', width: 'auto', zIndex: 2, opacity: 0.9 }} />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 32px 64px 32px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '48px', lineHeight: '110%', color: '#FFFFFF', margin: '0 0 16px 0' }}>{panel.heading}</h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '150%', color: '#ADADAD', maxWidth: '500px', margin: '0 0 28px 0' }}>{panel.description}</p>
        <Link to={panel.cta.to} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '16px', color: '#FFFFFF', background: '#FF5536', borderRadius: '5px', padding: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', minWidth: '165px', justifyContent: 'center' }}>
          {panel.cta.label} →
        </Link>
      </div>
    </div>
  );
};

const IndustriesOptionRow = ({ opt, isActive, onHover, onClose }) => {
  const [hovered, setHovered] = useState(false);
  const highlighted = isActive || hovered;
  const Icon = opt.icon;
  return (
    <Link to={opt.to} onClick={onClose}
      onMouseEnter={() => { setHovered(true); onHover(opt.panel); }}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 4px', textDecoration: 'none', background: 'transparent' }}>
      <Icon size={26} strokeWidth={2} color="#ff4b36" style={{ flexShrink: 0 }} />
      <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 600, fontSize: '15px', lineHeight: '150%', color: highlighted ? '#FF5536' : '#030407', transition: 'color 0.18s' }}>
        {opt.label}
      </span>
    </Link>
  );
};

const IndustriesDropdown = ({ onClose }) => {
  const [activePanel, setActivePanel] = useState(INDUSTRIES_OPTIONS[0].panel);
  return (
    <div className="fixed left-0 right-0 bg-white z-40"
      style={{ top: '92px', borderTop: '3px solid #FF5536', borderBottom: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
      onMouseLeave={onClose}>
      <div style={{ maxWidth: '1441px', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px', paddingLeft: 'clamp(24px, 5vw, 100px)', paddingRight: 'clamp(24px, 5vw, 100px)', display: 'flex', gap: 'clamp(16px, 2.5vw, 40px)', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', minWidth: '280px', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
          {INDUSTRIES_OPTIONS.map((opt) => (
            <IndustriesOptionRow key={opt.id} opt={opt} isActive={activePanel === opt.panel} onHover={setActivePanel} onClose={onClose} />
          ))}
        </div>
        <IndustriesPanel panelKey={activePanel} />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MOBILE ACCORDION ITEM
───────────────────────────────────────────── */
const MobileAccordion = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-800">
      <button onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 px-0 text-left"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px', color: open ? '#FF5536' : '#9CA3AF' }}>
        <span>{label}</span>
        <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-4 px-1">{children}</div>}
    </div>
  );
};

const MobileServiceGroup = ({ col, onClose }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-1">
      <div className="flex items-center justify-between w-full py-2 px-2 rounded-md transition-colors"
        style={{ background: open ? 'rgba(255,85,54,0.08)' : 'transparent' }}>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <ColIcon src={col.icon} alt={col.label} />
          {col.labelLink ? (
            <Link to={col.labelLink} onClick={onClose}
              className="text-white font-medium hover:text-[#FF5536] transition-colors truncate"
              style={{ fontSize: '13px' }}>{col.label}</Link>
          ) : (
            <span className="text-white font-medium truncate" style={{ fontSize: '13px' }}>{col.label}</span>
          )}
        </div>
        <button onClick={() => setOpen(!open)} className="ml-2 flex-shrink-0 p-1" aria-label="Expand">
          <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="pl-8 mt-1 space-y-1">
          {col.items.map((item) => (
            <Link key={item.to} to={item.to} onClick={onClose}
              className="block text-gray-400 hover:text-[#FF5536] transition-colors py-[3px]"
              style={{ fontSize: '12px' }}>{item.text}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const servicesTimerRef = useRef(null);
  const resourcesTimerRef = useRef(null);
  const industriesTimerRef = useRef(null);
  const companyTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false); setResourcesOpen(false); setIndustriesOpen(false); setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const openServices = () => { clearTimeout(servicesTimerRef.current); setServicesOpen(true); setResourcesOpen(false); setIndustriesOpen(false); setCompanyOpen(false); };
  const closeServices = () => { servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 150); };
  const openResources = () => { clearTimeout(resourcesTimerRef.current); setResourcesOpen(true); setServicesOpen(false); setIndustriesOpen(false); setCompanyOpen(false); };
  const closeResources = () => { resourcesTimerRef.current = setTimeout(() => setResourcesOpen(false), 150); };
  const openIndustries = () => { clearTimeout(industriesTimerRef.current); setIndustriesOpen(true); setServicesOpen(false); setResourcesOpen(false); setCompanyOpen(false); };
  const closeIndustries = () => { industriesTimerRef.current = setTimeout(() => setIndustriesOpen(false), 150); };
  const openCompany = () => { clearTimeout(companyTimerRef.current); setCompanyOpen(true); setServicesOpen(false); setResourcesOpen(false); setIndustriesOpen(false); };
  const closeCompany = () => { companyTimerRef.current = setTimeout(() => setCompanyOpen(false), 150); };

  useEffect(() => () => {
    clearTimeout(servicesTimerRef.current);
    clearTimeout(resourcesTimerRef.current);
    clearTimeout(industriesTimerRef.current);
    clearTimeout(companyTimerRef.current);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkStyle = {
    fontFamily: "'Inter', sans-serif", fontWeight: 500,
    fontSize: 'clamp(13px, 1.1vw, 16px)', lineHeight: '100%',
    letterSpacing: '-0.02em', color: '#9CA3AF', transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  };

  const navBg = scrolled ? 'rgba(3, 4, 7, 0.92)' : 'transparent';

  return (
    <nav ref={navRef}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: navBg,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}>

      {/* ── TOP UTILITY BAR ── */}
      <div className="hidden md:block">
        <div style={{
          maxWidth: '1441px', margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 100px)', paddingRight: 'clamp(24px, 5vw, 100px)',
          height: '28px', display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', gap: 'clamp(12px, 1.5vw, 24px)', flexWrap: 'nowrap',
        }}>
          {/* Company links — no border, no divider */}
          {COMPANY_LINKS.map((link) => (
            <Link key={link.to} to={link.to}
              style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 500,
                fontSize: 'clamp(11px, 1vw, 13px)', lineHeight: '100%',
                letterSpacing: '-0.02em', color: '#9CA3AF',
                textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
              {link.label}
            </Link>
          ))}

          {/* "Are you under attack?" — orange underline, no vertical divider */}
          <Link to="/under-attack"
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
              fontSize: 'clamp(11px, 1vw, 13px)', lineHeight: '100%',
              letterSpacing: '-0.02em', color: '#FF5536',
              textDecoration: 'underline',
              textDecorationColor: '#FF5536',
              textUnderlineOffset: '3px',
              textDecorationThickness: '1.5px',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'opacity 0.2s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
            <svg width="13" height="13" fill="none" stroke="#FF5536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Are you under attack?
          </Link>
        </div>
      </div>

      {/* ── MAIN NAV BAR — no top border ── */}
      <div className="hidden md:flex items-center justify-between"
        style={{
          maxWidth: '1441px',
          margin: '0 auto',
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: 'clamp(24px, 5vw, 100px)',
          paddingRight: 'clamp(24px, 5vw, 100px)',
        }}>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logo-new5.png" alt="Auriseg" style={{ height: '38px', width: 'auto' }} />
        </Link>

        {/* Right group */}
        <div className="flex items-center" style={{ gap: 'clamp(12px, 2vw, 32px)' }}>

          {/* Services */}
          <div className="relative" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button onClick={() => { setServicesOpen(!servicesOpen); setResourcesOpen(false); setIndustriesOpen(false); }}
              className="flex items-center gap-1 py-2"
              style={{ ...navLinkStyle, ...(servicesOpen ? { color: '#FF5536' } : {}) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => { if (!servicesOpen) e.currentTarget.style.color = '#9CA3AF'; }}>
              Services
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && <ServicesDropdown onClose={() => setServicesOpen(false)} />}
          </div>

          {/* Industries */}
          <div className="relative" onMouseEnter={openIndustries} onMouseLeave={closeIndustries}>
            <button onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); setResourcesOpen(false); }}
              className="flex items-center gap-1 py-2"
              style={{ ...navLinkStyle, ...(industriesOpen ? { color: '#FF5536' } : {}) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => { if (!industriesOpen) e.currentTarget.style.color = '#9CA3AF'; }}>
              Industries
              <svg className={`w-3 h-3 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriesOpen && <IndustriesDropdown onClose={() => setIndustriesOpen(false)} />}
          </div>

          {MAIN_NAV.map((item) => (
            <Link key={item.label} to={item.to} style={navLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              className="whitespace-nowrap py-2">
              {item.label}
            </Link>
          ))}

          {/* Resources */}
          <div className="relative" onMouseEnter={openResources} onMouseLeave={closeResources}>
            <button onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); setIndustriesOpen(false); }}
              className="flex items-center gap-1 py-2"
              style={{ ...navLinkStyle, ...(resourcesOpen ? { color: '#FF5536' } : {}) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => { if (!resourcesOpen) e.currentTarget.style.color = '#9CA3AF'; }}>
              Resources
              <svg className={`w-3 h-3 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && <ResourcesDropdown onClose={() => setResourcesOpen(false)} />}
          </div>

          {/* CTA Button */}
          <Link to="/talk-to-experts"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1vw, 14px)', fontWeight: 600, letterSpacing: '-0.2px', padding: 'clamp(7px, 0.7vw, 9px) clamp(12px, 1.5vw, 20px)', background: '#FF5536', color: '#FFFFFF', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#e04a2d')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FF5536')}>
            Talk to Experts
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

        </div>
      </div>

      {/* ── MOBILE TOPBAR ── */}
      <div className="md:hidden flex items-center justify-between px-5 py-3"
        style={{ borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Auriseg" className="h-9 w-auto" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-700 text-white"
          aria-label="Toggle menu">
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <div className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[calc(100vh-56px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{ background: '#0A0A0A' }}>
        <div className="px-5 pb-8 pt-2">

          <MobileAccordion label="Services">
            <div className="mt-2 space-y-1">
              {SERVICES_COLUMNS.map((col) => (
                <MobileServiceGroup key={col.id} col={col} onClose={() => setMobileOpen(false)} />
              ))}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Industries">
            <div className="mt-2 space-y-1">
              {INDUSTRIES_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <Link key={opt.id} to={opt.to} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2 px-2 text-gray-400 hover:text-[#FF5536] transition-colors rounded-md"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                    <Icon size={18} strokeWidth={2} color="#ff4b36" style={{ flexShrink: 0 }} />
                    {opt.label}
                  </Link>
                );
              })}
            </div>
          </MobileAccordion>

          {MAIN_NAV.map((item) => (
            <div key={item.label} className="border-b border-gray-800">
              <Link to={item.to} onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-gray-400 hover:text-[#FF5536] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px' }}>
                {item.label}
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}

          <MobileAccordion label="Resources">
            <div className="mt-2 space-y-1">
              {RESOURCES_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <Link key={opt.id} to={opt.to} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2 px-2 text-gray-400 hover:text-[#FF5536] transition-colors rounded-md"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                    <Icon size={18} strokeWidth={2} color="#ff4b36" style={{ flexShrink: 0 }} />
                    {opt.label}
                  </Link>
                );
              })}
            </div>
          </MobileAccordion>

          <div className="my-5">
            <Link to="/talk-to-experts" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#FF5536] hover:bg-[#e04a2d] text-white font-semibold rounded-lg py-3 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600 }}>
              Talk to Experts →
            </Link>
          </div>

          <MobileAccordion label="Company">
            <div className="mt-2">
              {COMPANY_LINKS.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-2 text-gray-400 hover:text-[#FF5536] transition-colors border-b border-gray-800 last:border-0"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                  {link.label}
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}

              <Link to="/under-attack" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 mt-3 px-3 py-3 rounded-lg"
                style={{ background: 'rgba(255,85,54,0.1)', border: '1px solid rgba(255,85,54,0.25)', textDecoration: 'none' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#FF5536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '13px', color: '#FF5536' }}>
                  Are you under attack?
                </span>
              </Link>
            </div>
          </MobileAccordion>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
