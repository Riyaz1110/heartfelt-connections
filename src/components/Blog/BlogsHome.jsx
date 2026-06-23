import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL =
  "https://auriseg.us7.list-manage.com/subscribe/post?u=fa1a7a2bb782996b42fce10ee&id=f0dc501dd6&f_id=000f8fe0f0";

// ── TOAST ─────────────────────────────────────────────────────
const Toast = ({ visible, onClose }) => {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', top: '24px', left: '50%',
      transform: 'translateX(-50%)', background: '#1a1a1a', color: '#fff',
      padding: '14px 18px', borderRadius: '12px', display: 'flex',
      alignItems: 'center', gap: '12px', fontFamily: "'Inter',sans-serif",
      fontSize: '14px', zIndex: 9999, boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
      minWidth: '280px', animation: 'toastSlideIn 0.35s cubic-bezier(.22,.68,0,1.2) forwards',
      whiteSpace: 'nowrap',
    }}>
      <style>{`
        @keyframes toastSlideIn {
          from { transform: translateX(-50%) translateY(-16px); opacity: 0; }
          to   { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
      `}</style>
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%', background: '#22c55e',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontWeight: 700, fontSize: '14px' }}>🎉 You're subscribed!</span>
        <span style={{ fontSize: '12px', opacity: 0.7 }}>Watch your inbox for the latest AI insights.</span>
      </div>
      <button onClick={onClose} style={{
        marginLeft: 'auto', background: 'none', border: 'none',
        color: '#fff', fontSize: '18px', cursor: 'pointer', opacity: 0.5, lineHeight: 1, padding: '0 2px',
      }} aria-label="Dismiss">×</button>
    </div>
  );
};

// ── SUCCESS BANNER ─────────────────────────────────────────────
const SuccessBanner = () => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '12px',
    backgroundColor: '#F0FFF4', border: '1px solid #68D391',
    borderRadius: '8px', padding: '14px 16px', marginBottom: '12px',
  }}>
    <div style={{
      width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#38A169',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px',
    }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7L5.5 10L11.5 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div>
      <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#22543D', margin: '0 0 2px' }}>
        You're subscribed!
      </p>
      <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', color: '#276749', margin: 0 }}>
        Thanks for signing up. Watch your inbox for the latest AI insights.
      </p>
    </div>
  </div>
);

// ── NEWSLETTER FORM INNER ──────────────────────────────────────
const NewsletterFormInnerHome = ({ compact = false, email, setEmail, subscribed, setSubscribed, setToastVisible, subscribe, status, message }) => {
  const [localStatus, setLocalStatus] = useState('idle');
  const [localMessage, setLocalMessage] = useState('');
  const validateEmail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  useEffect(() => {
    if (status === 'success' && !subscribed) {
      setSubscribed(true);
      setToastVisible(true);
      setLocalStatus('success');
    } else if (status === 'error') {
      setLocalStatus('error');
      if (message && (message.includes('already') || message.includes('subscribed'))) {
        setLocalMessage('This email is already registered.');
      } else {
        setLocalMessage(message || 'An error occurred.');
      }
    } else if (status === 'sending') {
      setLocalStatus('sending');
    }
  }, [status, message, subscribed, setSubscribed, setToastVisible]);

  useEffect(() => {
    let timer;
    if (localStatus === 'sending') {
      timer = setTimeout(() => {
        setLocalStatus('error');
        setLocalMessage('This email is already registered, or there is a connection issue.');
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [localStatus]);

  const submit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setLocalStatus('sending');
    subscribe({ EMAIL: email });
    setEmail('');
  };

  const isDisabled = localStatus === 'sending' || subscribed;
  const btnLabel =
    localStatus === 'sending' ? 'Sending…' :
      subscribed ? '✓ Subscribed!' :
        'Keep me updated';
  const btnBg = subscribed ? '#2e7d32' : '#FF5536';

  return (
    <div>
      {subscribed ? (
        <SuccessBanner />
      ) : (
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
            style={{
              width: '100%', padding: '10px 12px',
              border: '1px solid #030407',
              borderRadius: compact ? '0px' : '6px',
              fontFamily: "'Inter',sans-serif",
              fontSize: compact ? '12px' : '14px',
              marginBottom: '6px', outline: 'none',
              backgroundColor: '#FFFFFF', color: '#030407',
              boxSizing: 'border-box',
              opacity: isDisabled ? 0.6 : 1,
            }}
          />
          {!validateEmail(email) && email.length > 0 && (
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#FF5536', marginBottom: '8px' }}>
              Please enter a valid email address.
            </p>
          )}
          {localStatus === 'error' && (
            <p
              style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#FF5536', marginBottom: '8px' }}
              dangerouslySetInnerHTML={{ __html: localMessage }}
            />
          )}
          <button
            type="submit"
            disabled={isDisabled}
            style={{
              width: '100%',
              padding: compact ? '12px' : '14px',
              backgroundColor: btnBg, border: 'none',
              borderRadius: compact ? '0px' : '6px',
              fontFamily: "'Inter',sans-serif",
              fontWeight: compact ? 500 : 700,
              fontSize: compact ? '13px' : '16px',
              color: subscribed ? '#FFFFFF' : '#030407',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              marginBottom: '12px',
              transition: 'background 0.3s',
            }}
          >
            {btnLabel}
          </button>
        </form>
      )}
    </div>
  );
};

// ── NEWSLETTER FORM ────────────────────────────────────────────
const NewsletterForm = (props) => {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <NewsletterFormInnerHome
          subscribe={subscribe}
          status={status}
          message={message}
          {...props}
        />
      )}
    />
  );
};

// ── MAIN COMPONENT ────────────────────────────────────────────
const BlogsHome = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const [hoveredTitleMobile, setHoveredTitleMobile] = useState(false);

  const sharedFormProps = { email, setEmail, subscribed, setSubscribed, setToastVisible };

  const blogPosts = [
    {
      id: 1,
      title: "The 10-Minute Guide to Closing Security Gaps",
      category: "CATEGORY",
      date: "24 April 2026",
      readTime: "5 min read",
      author: "Jin",
      authorImage: "/images/blog/author-jin.jpg",
      image: "/images/blog/blog-main.jpg",
      mobileImage: "/images/blog/blog-main-mobile.jpg",
      link: "/resources/blogs/1"
    },
    {
      id: 2,
      title: "Why Businesses Must Prioritize Cloud Security",
      category: "CATEGORY",
      date: "24 April 2026",
      readTime: "5 min read",
      author: "Jin Kuris",
      authorImage: "/images/blog/author-jin.jpg",
      image: "/images/blog/blog-side-1.jpg",
      mobileImage: "/images/blog/blog-side-1-mobile.jpg",
      link: "/resources/blogs/2"
    }
  ];

  return (
    <>
      {/* ── GLOBAL TOAST ───────────────────────────────────────── */}
      <Toast visible={toastVisible} onClose={() => setToastVisible(false)} />

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw', marginLeft: 'calc(50% - 50vw)',
          background: '#030407', padding: '40px 0 48px', boxSizing: 'border-box',
        }}
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/images/blog/blog-bg.jpg" alt="Blog Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
        </div>

        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            <h1 className="text-center" style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 500, fontSize: '62px', lineHeight: '100%', letterSpacing: '-2%', color: '#FFFFFF', marginBottom: '16px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Discover What's New in Our Blogs
            </h1>
            <p className="text-center mx-auto" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#FFFFFF', maxWidth: '864px', marginBottom: '24px', textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
              Explore curated posts that turn complex threats and innovations into clear, actionable knowledge
            </p>
            <div style={{ width: '100%', maxWidth: '1198px', height: '0.3px', backgroundColor: '#FFFFFF', margin: '0 auto 24px', opacity: 0.5 }} />

            <div className="flex gap-8">

              {/* Left — Featured */}
              <div className="flex-1">
                <div style={{ background: '#161616', width: '100%', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '304px', background: '#333' }}>
                    <img src={blogPosts[0].image} alt={blogPosts[0].title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/763x304/CCCCCC/FFFFFF?text=Blog+Image'; }} />
                  </div>
                  <div className="p-6">
                    <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '40px', lineHeight: '110%', letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '14px' }}>
                      {blogPosts[0].title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <span style={{ fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '10px', color: '#FFFFFF', backgroundColor: '#2A2A2A', border: '1px solid #444', padding: '4px 8px', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>{blogPosts[0].category}</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>{blogPosts[0].date}</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14px', color: '#ADADAD' }}>{blogPosts[0].readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: '#444', flexShrink: 0 }}>
                        <img src={blogPosts[0].authorImage} alt={blogPosts[0].author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '15px', color: '#FFFFFF' }}>{blogPosts[0].author}</span>
                    </div>
                    <Link to={blogPosts[0].link} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '16px', color: '#FF5536', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right — Side card + Newsletter */}
              <div className="w-[380px]" style={{ display: 'flex', flexDirection: 'column' }}>

                {/* Side blog card */}
                <div style={{ background: '#161616', marginBottom: '16px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '140px', background: '#333' }}>
                    <img src={blogPosts[1].image} alt={blogPosts[1].title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/404x140/CCCCCC/FFFFFF?text=Blog'; }} />
                  </div>
                  <div className="p-4">
                    <Link to={blogPosts[1].link} style={{ textDecoration: 'none' }} onMouseEnter={() => setHoveredTitle(true)} onMouseLeave={() => setHoveredTitle(false)}>
                      <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '22px', lineHeight: '120%', letterSpacing: '-0.02em', color: hoveredTitle ? '#FF5536' : '#FFFFFF', marginBottom: '10px', transition: 'color 0.2s ease', cursor: 'pointer' }}>
                        {blogPosts[1].title}
                      </h3>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '9px', color: '#FFFFFF', backgroundColor: '#2A2A2A', border: '1px solid #444', padding: '3px 6px', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>{blogPosts[1].category}</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px', color: '#ADADAD' }}>{blogPosts[1].date}</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px', color: '#ADADAD' }}>{blogPosts[1].readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '50%', overflow: 'hidden', background: '#444', flexShrink: 0 }}>
                        <img src={blogPosts[1].authorImage} alt={blogPosts[1].author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '13px', color: '#FFFFFF' }}>{blogPosts[1].author}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Newsletter */}
                <div style={{ background: '#FFFFFF', padding: '20px', textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '100%', color: '#030407', marginBottom: '8px' }}>
                    Get the Smartest AI Insights in Your Inbox
                  </h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px', color: '#030407', marginBottom: '16px' }}>
                    No Spam. Just the latest releases and tips
                  </p>
                  <NewsletterForm {...sharedFormProps} />
                  <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '10px', color: '#000000', textDecoration: 'underline' }}>
                    You can unsubscribe at any time. Read our Privacy Policy
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────── */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw', marginLeft: 'calc(50% - 50vw)',
          background: '#030407', padding: '30px 16px 36px', boxSizing: 'border-box',
        }}
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/images/blog/blog-bg-mobile.jpg" alt="Blog Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
        </div>

        <div className="relative z-10">
          <h1 className="text-center" style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 500, fontSize: '36px', lineHeight: '35px', color: '#FFFFFF', marginBottom: '12px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Discover What's <br /> New in Our Blogs
          </h1>
          <p className="text-center mx-auto" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: '12px', lineHeight: '100%', color: '#FFFFFF', maxWidth: '281px', marginBottom: '16px', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            Explore curated posts that turn complex threats and innovations into clear, actionable knowledge
          </p>
          <div style={{ width: '100%', maxWidth: '308.92px', height: '0.3px', backgroundColor: '#FFFFFF', margin: '0 auto 16px', opacity: 0.5 }} />

          {/* Featured Card */}
          <div style={{ background: '#161616', marginBottom: '16px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '162px', background: '#FFFFFF' }}>
              <img src={blogPosts[0].mobileImage || blogPosts[0].image} alt={blogPosts[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/404x162/CCCCCC/FFFFFF?text=Blog'; }} />
            </div>
            <div className="p-4">
              <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 500, fontSize: '22px', lineHeight: '100%', color: '#FFFFFF', marginBottom: '12px' }}>
                {blogPosts[0].title}
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden', background: '#FFFFFF' }}>
                  <img src={blogPosts[0].authorImage} alt={blogPosts[0].author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '12px', color: '#FFFFFF' }}>{blogPosts[0].author}</span>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '10px', color: '#ADADAD' }}>{blogPosts[0].date} • {blogPosts[0].readTime}</div>
                </div>
              </div>
              <div style={{ width: '100%', height: '48px', backgroundColor: '#FF55361A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12px' }}>
                <Link to={blogPosts[0].link} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '11.05px', color: '#FF5536', textDecoration: 'none' }}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Side Card */}
          <div style={{ background: '#161616', marginBottom: '20px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '140px', background: '#FFFFFF' }}>
              <img src={blogPosts[1].mobileImage || blogPosts[1].image} alt={blogPosts[1].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/404x140/CCCCCC/FFFFFF?text=Blog'; }} />
            </div>
            <div className="p-3">
              <Link to={blogPosts[1].link} style={{ textDecoration: 'none' }} onMouseEnter={() => setHoveredTitleMobile(true)} onMouseLeave={() => setHoveredTitleMobile(false)}>
                <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '100%', color: hoveredTitleMobile ? '#FF5536' : '#FFFFFF', marginBottom: '8px', transition: 'color 0.2s ease', cursor: 'pointer' }}>
                  {blogPosts[1].title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', background: '#FFFFFF' }}>
                  <img src={blogPosts[1].authorImage} alt={blogPosts[1].author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '11px', color: '#FFFFFF' }}>{blogPosts[1].author}</span>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '9px', color: '#ADADAD' }}>{blogPosts[1].date} • {blogPosts[1].readTime}</div>
                </div>
              </div>
              <div style={{ width: '100%', height: '48px', backgroundColor: '#FF55361A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12px' }}>
                <Link to={blogPosts[1].link} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '11.05px', color: '#FF5536', textDecoration: 'none' }}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Newsletter */}
          <div style={{ background: '#FFFFFF', padding: '20px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '22px', lineHeight: '24px', color: '#030407', marginBottom: '8px' }}>
              Get the Smartest AI Insights in Your Inbox
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: '11px', color: '#030407', marginBottom: '16px' }}>
              No Spam. Just the latest releases and tips
            </p>
            <NewsletterForm compact {...sharedFormProps} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '9px', lineHeight: '12px', color: '#030407' }}>
              You can unsubscribe at any time. Read our Privacy Policy
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogsHome;