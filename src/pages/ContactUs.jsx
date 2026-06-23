import { useState } from 'react';

const OFFICES = [
    {
        id: 1,
        city: 'Chennai - Head Quarters',
        address: '3th floor, Workez, 200 feet MMRD Road, Zamin Pallavaram, Chennai – 600 043 Tamilnadu, India\n\nNo 17/22 Valliammal Street, Vijayalakshmi Nagar, Chrompet, Chennai – 600 044',
        img: '/images/offices/chennai-landmark.png',
    },
    {
        id: 2,
        city: 'Bengaluru',
        address: 'Prestige, Atlanta, 80 Feet Road, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka.',
        img: '/images/offices/bengaluru-landmark.png',
    },
    {
        id: 3,
        city: 'Mumbai',
        address: 'NESCO IT Park, Building 4, North Wing, Western Express Hwy, Goregaon, Mumbai, Maharashtra.',
        img: '/images/offices/mumbai-landmark.png',
    },
    {
        id: 4,
        city: 'United States of America',
        address: 'Auriseg INC. 5900 Balcones Drive, Suite 20624 Austin, TX 78731',
        img: '/images/offices/usa-landmark.png',
    },
    {
        id: 5,
        city: 'Sydney',
        address: '123 Sample St, Sydney NSW 2000 AU',
        img: '/images/offices/sydney-landmark.png',
    },
];

// ── Your email address for FormSubmit ──
// Replace with your real email or set VITE_FORMSUBMIT_EMAIL in your .env
const FORMSUBMIT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL || '';

const TalkToExpert = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        jobTitle: '',
        helpWith: 'penetrationTesting',
        challenge: '',
        agreeToContact: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const payload = {
            // FormSubmit special fields
            _subject: `Expert Consultation Request — ${formData.helpWith}`,
            _template: 'table',    // formats email as a clean table
            _captcha: 'false',     // disable captcha for programmatic use

            // Form data
            'Name': formData.name,
            'Email': formData.email,
            'Phone': formData.phone,
            'Company Name': formData.companyName || 'Not provided',
            'Job Title': formData.jobTitle || 'Not provided',
            'Help With': formData.helpWith,
            'Challenge': formData.challenge || 'Not specified',
        };

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success === 'true' || result.success === true) {
                setSubmitStatus('success');
                setFormData({
                    name: '', email: '', phone: '', companyName: '', jobTitle: '',
                    helpWith: 'penetrationTesting', challenge: '', agreeToContact: false
                });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                // FormSubmit requires email activation on first use — check your inbox
                console.error('FormSubmit response:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('FormSubmit error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const partnerLogos = [
        { name: 'Google', image: '/images/talk-to-expert/google1.png' },
        { name: 'Samsung', image: '/images/talk-to-expert/samsung.png' },
        { name: 'Microsoft', image: '/images/talk-to-expert/microsoft1.png' },
        { name: 'Larsen & Toubro', image: '/images/talk-to-expert/l&t1.png' },
        { name: 'Amazon', image: '/images/talk-to-expert/amazon1.png' },
        { name: 'OLA', image: '/images/talk-to-expert/ola11.png' },
        { name: 'Burger King', image: '/images/talk-to-expert/burger1.png' },
        { name: 'JSW', image: '/images/talk-to-expert/jsw1.png' },
        { name: 'LuLu Mall', image: '/images/talk-to-expert/lulu1.png' },
        { name: 'Flipkart', image: '/images/talk-to-expert/flipkart1.png' },
    ];

    const bulletPoints = [
        'Assess your tech stack, risks, and regulatory gaps.',
        'Get targeted advice on pentesting, VA, IR, cloud security, and MSS.',
        'Vendor-neutral advice + priority next steps, fully obligation-free.',
        'Clear, confidential, no-pressure guidance for your next move.',
    ];

    const helpOptions = [
        { key: 'penetrationTesting', label: 'Penetration Testing' },
        { key: 'incidentResponse', label: 'Incident Response' },
        { key: 'vulnerabilityAssessment', label: 'Vulnerability Assessment' },
        { key: 'cloudSecurity', label: 'Cloud Security' },
        { key: 'managedSecurityServices', label: 'Managed Security Services' },
        { key: 'other', label: 'Other' },
    ];

    const inputStyle = {
        width: '100%',
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '6px',
        padding: '12px 14px',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box',
    };

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .tte-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .tte-main-padding { padding: 40px 20px 60px 20px !important; }
          .tte-heading { font-size: 36px !important; max-width: 100% !important; text-align: center !important; }
          .tte-clarity-heading { font-size: 17px !important; }
          .tte-trusted-left { display: none !important; }
          .tte-trusted-after-form { display: block !important; }
          .tte-trusted-heading { font-size: 16px !important; text-align: center !important; }
          .tte-logos-row-desktop { display: none !important; }
          .tte-logos-mobile { display: flex !important; }
          .tte-form-card { padding: 28px 20px 36px 20px !important; border-radius: 12px !important; }
          .tte-form-heading { font-size: 26px !important; margin-bottom: 24px !important; }
          .tte-form-row { grid-template-columns: 1fr !important; }
          .tte-form-radio-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .tte-submit-btn { width: 100% !important; align-self: stretch !important; justify-content: center !important; }
          .tte-form-watermark { display: none !important; }
          .tte-contact-grid { grid-template-columns: 1fr !important; gap: 16px !important; margin-bottom: 48px !important; }
          .tte-contact-padding { padding: 64px 20px !important; }
          .tte-offices-grid { grid-template-columns: 1fr !important; }
          .tte-offices-box { padding: 24px 20px !important; }
          .tte-offices-heading { font-size: 28px !important; }
          .tte-office-card { padding: 24px 20px !important; }
          .tte-left-col-center { align-items: center !important; text-align: center !important; }
          .tte-bullet-list { align-items: flex-start !important; }
        }
      `}</style>

            <div style={{ background: '#000000', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div className="tte-main-padding" style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px 80px 40px', boxSizing: 'border-box' }}>

                    <div className="tte-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

                        {/* ── LEFT COLUMN ── */}
                        <div className="tte-left-col-center" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                            <h1 className="tte-heading" style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 500, fontSize: '52px', lineHeight: '105%',
                                letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0, maxWidth: '400px',
                            }}>
                                Talk to Expert today
                            </h1>

                            <div>
                                <h2 className="tte-clarity-heading" style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500, fontSize: '20px', lineHeight: '140%',
                                    letterSpacing: '-0.01em', color: '#FFFFFF', margin: '0 0 20px 0',
                                }}>
                                    Get clarity in 30 minutes:
                                </h2>
                                <ul className="tte-bullet-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {bulletPoints.map((point, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                            <span style={{
                                                flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                                                border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center', marginTop: '2px',
                                            }}>
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span style={{ color: '#A1A1A1', fontSize: '15px', lineHeight: '150%' }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trusted by — desktop only */}
                            <div className="tte-trusted-left" style={{ marginTop: '10px', width: '100%' }}>
                                <h3 className="tte-trusted-heading" style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 500, fontSize: '28px', lineHeight: '130%',
                                    color: '#FFFFFF', margin: '0 0 32px 0',
                                }}>
                                    Trusted by 100+ Enterprise
                                </h3>

                                <div className="tte-logos-row-desktop" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center', gap: '8px' }}>
                                        <img src="/images/talk-to-expert/google1.png" alt="Google" style={{ height: '36px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/samsung.png" alt="Samsung" style={{ height: '28px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/microsoft1.png" alt="Microsoft" style={{ height: '32px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center', gap: '8px' }}>
                                        <img src="/images/talk-to-expert/l&t1.png" alt="Larsen & Toubro" style={{ height: '28px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/amazon1.png" alt="Amazon" style={{ height: '40px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/ola1.png" alt="OLA" style={{ height: '32px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'center', gap: '8px' }}>
                                        <img src="/images/talk-to-expert/burger1.png" alt="Burger King" style={{ height: '52px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/jsw1.png" alt="JSW" style={{ height: '36px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/lulu1.png" alt="LuLu Mall" style={{ height: '44px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                        <img src="/images/talk-to-expert/flipkart1.png" alt="Flipkart" style={{ height: '36px', width: 'auto', maxWidth: '100%', opacity: 0.85, filter: 'grayscale(100%) brightness(1.8)' }} onError={e => e.target.style.display = 'none'} />
                                    </div>
                                </div>

                                <div className="tte-logos-mobile" style={{ display: 'none', flexWrap: 'wrap', gap: '20px 28px', justifyContent: 'center' }}>
                                    {partnerLogos.map((partner, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', minHeight: '28px' }}>
                                            <img src={partner.image} alt={partner.name}
                                                style={{ maxHeight: '26px', maxWidth: '80px', width: 'auto', opacity: 0.85, filter: 'grayscale(100%)', display: 'block' }}
                                                onError={e => e.target.style.display = 'none'} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN — FORM ── */}
                        <div style={{ position: 'relative' }}>
                            <div className="tte-form-card" style={{
                                background: 'linear-gradient(180deg, #1a0d0a 0%, #2a1208 100%)',
                                borderRadius: '16px', padding: '40px 36px 48px 36px',
                                position: 'relative', overflow: 'hidden',
                                border: '1px solid rgba(254,85,56,0.12)',
                            }}>

                                <h2 className="tte-form-heading" style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 700, fontSize: '36px', lineHeight: '115%',
                                    letterSpacing: '-0.01em', color: '#FFFFFF', margin: '0 0 32px 0',
                                }}>
                                    Request Expert Consultation
                                </h2>

                                {submitStatus === 'success' && (
                                    <div style={{ marginBottom: '20px', padding: '12px 16px', background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', borderRadius: '8px' }}>
                                        <p style={{ color: '#22c55e', margin: 0, fontSize: '14px' }}>✓ Request sent! We'll be in touch shortly.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div style={{ marginBottom: '20px', padding: '12px 16px', background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', borderRadius: '8px' }}>
                                        <p style={{ color: '#ef4444', margin: 0, fontSize: '14px' }}>✗ Something went wrong. If this is your first submission, check your email to activate FormSubmit, then try again.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                    <div className="tte-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" style={inputStyle} />
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" style={inputStyle} />
                                    </div>

                                    <div className="tte-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone No" style={inputStyle} />
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" style={inputStyle} />
                                    </div>

                                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job title" style={inputStyle} />

                                    <div style={{ marginTop: '8px' }}>
                                        <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500, margin: '0 0 14px 0' }}>
                                            What do you need help with?
                                        </p>
                                        <div className="tte-form-radio-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                                            {helpOptions.map(({ key, label }) => (
                                                <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                    <input
                                                        type="radio" name="helpWith" value={key}
                                                        checked={formData.helpWith === key} onChange={handleChange}
                                                        style={{
                                                            appearance: 'none', WebkitAppearance: 'none',
                                                            width: '16px', height: '16px', borderRadius: '50%',
                                                            border: '1.5px solid #FF5536',
                                                            background: formData.helpWith === key ? '#FF5536' : 'transparent',
                                                            flexShrink: 0, margin: 0, cursor: 'pointer'
                                                        }}
                                                    />
                                                    <span style={{ color: '#D0D0D0', fontSize: '14px', marginTop: '1px' }}>{label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <textarea
                                        name="challenge" value={formData.challenge} onChange={handleChange}
                                        rows="3" placeholder="Briefly describe your security challenge"
                                        style={{ ...inputStyle, resize: 'none', borderRadius: '6px', lineHeight: '1.5', marginTop: '4px' }}
                                    />

                                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
                                        <input
                                            type="checkbox" name="agreeToContact"
                                            checked={formData.agreeToContact} onChange={handleChange} required
                                            style={{ accentColor: '#FF5536', width: '15px', height: '15px', flexShrink: 0, marginTop: '2px' }}
                                        />
                                        <span style={{ color: '#A1A1A1', fontSize: '13px', lineHeight: '1.5' }}>
                                            I agree to be contacted by Auriseg regarding my inquiry.
                                        </span>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !formData.agreeToContact}
                                        className="tte-submit-btn"
                                        style={{
                                            marginTop: '8px', width: '60%', alignSelf: 'flex-start',
                                            background: '#FF5536', color: '#FFFFFF',
                                            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '15px',
                                            padding: '14px 28px', borderRadius: '999px', border: 'none',
                                            cursor: formData.agreeToContact && !isSubmitting ? 'pointer' : 'not-allowed',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            gap: '8px', transition: 'background 0.2s',
                                            opacity: formData.agreeToContact && !isSubmitting ? 1 : 0.5,
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : <>Submit Request &nbsp;→</>}
                                    </button>
                                </form>
                            </div>

                            <img
                                className="tte-form-watermark" src="/images/logo-tte.png" alt="" aria-hidden="true"
                                style={{
                                    position: 'absolute', bottom: '0', right: '0',
                                    transform: 'translate(50%, 50%)', width: '220px', height: 'auto',
                                    pointerEvents: 'none', zIndex: 0,
                                }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                    </div>

                    {/* ── Trusted by — mobile only ── */}
                    <div className="tte-trusted-after-form" style={{ display: 'none', marginTop: '40px' }}>
                        <h3 style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                            fontSize: '16px', lineHeight: '130%', color: '#FFFFFF',
                            margin: '0 0 24px 0', textAlign: 'center',
                        }}>
                            Trusted by 100+ Enterprise
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 28px', justifyContent: 'center' }}>
                            {[
                                { name: 'Google', image: '/images/talk-to-expert/google.png' },
                                { name: 'Samsung', image: '/images/talk-to-expert/samsung.png' },
                                { name: 'Microsoft', image: '/images/talk-to-expert/microsoft1.png' },
                                { name: 'Larsen & Toubro', image: '/images/talk-to-expert/l&t1.png' },
                                { name: 'Amazon', image: '/images/talk-to-expert/amazon1.png' },
                                { name: 'OLA', image: '/images/talk-to-expert/ola1.png' },
                                { name: 'Burger King', image: '/images/talk-to-expert/burger.png' },
                                { name: 'JSW', image: '/images/talk-to-expert/jsw1.png' },
                                { name: 'LuLu Mall', image: '/images/talk-to-expert/lulu1.png' },
                                { name: 'Flipkart', image: '/images/talk-to-expert/flipkart1.png' },
                            ].map((partner, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', minHeight: '28px' }}>
                                    <img src={partner.image} alt={partner.name}
                                        style={{ maxHeight: '26px', maxWidth: '80px', width: 'auto', opacity: 0.85, filter: 'grayscale(100%)', display: 'block' }}
                                        onError={e => e.target.style.display = 'none'} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CONTACT INFO & OFFICES SECTION ── */}
                <div style={{ background: '#000000', width: '100%', boxSizing: 'border-box' }}>
                    <div className="tte-contact-padding" style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', boxSizing: 'border-box' }}>

                        <div className="tte-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
                            <div style={{ background: '#161616', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                                <div style={{ flexShrink: 0 }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF5536"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                </div>
                                <span style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>+91 9940871528</span>
                            </div>
                            <div style={{ background: '#161616', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                                <div style={{ flexShrink: 0 }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF5536"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </div>
                                <span style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>marketing@auriseg.ai</span>
                            </div>
                            <div style={{ background: '#161616', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                                <div style={{ flexShrink: 0 }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF5536"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </div>
                                <span style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>91+ 9940871528</span>
                            </div>
                        </div>

                        <div className="tte-offices-box" style={{ border: '1px solid #2A2A2A', padding: '32px', background: '#111111' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5536"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                <h2 className="tte-offices-heading" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700, fontSize: '36px', color: '#FFFFFF', margin: 0 }}>Our Offices</h2>
                            </div>
                            <div className="tte-offices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                                {OFFICES.map(office => (
                                    <div key={office.id} className="tte-office-card" style={{
                                        position: 'relative', background: '#161616', border: '1px solid #2A2A2A',
                                        overflow: 'hidden', padding: '32px 40px', display: 'flex',
                                        flexDirection: 'column', minHeight: '180px'
                                    }}>
                                        <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '18px', color: '#FFFFFF', margin: '0 0 12px 0', position: 'relative', zIndex: 2 }}>{office.city}</h3>
                                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#ADADAD', margin: 0, whiteSpace: 'pre-line', position: 'relative', zIndex: 2, maxWidth: '65%' }}>{office.address}</p>
                                        <div style={{ position: 'absolute', bottom: '0', right: '0', height: '100%', width: '180px', zIndex: 1, pointerEvents: 'none', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                            <img src={office.img} alt={office.city}
                                                style={{ width: '100%', height: '80%', objectFit: 'contain', opacity: 0.9, transform: 'translate(10px, 10px)' }}
                                                onError={e => e.target.style.display = 'none'} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TalkToExpert;