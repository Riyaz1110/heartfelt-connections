import React, { useState, useRef, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null;

// ── Your email address for FormSubmit ──
// Replace with your real email or use VITE_FORMSUBMIT_EMAIL env var
const FORMSUBMIT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL || '';

/* ── shared style helpers (defined once, stable references) ── */
const getInp = (isMobile) => ({
  width: '100%',
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '6px',
  padding: isMobile ? '12px 14px' : '14px 16px',
  fontFamily: "'Inter',sans-serif",
  fontWeight: 400,
  fontSize: isMobile ? '13px' : '14px',
  color: '#FFFFFF',
  outline: 'none',
  boxSizing: 'border-box',
  caretColor: '#FF5536',
});

const getSel = (isMobile) => ({
  ...getInp(isMobile),
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  paddingRight: '36px',
});

const fo = e => (e.target.style.borderColor = 'rgba(255,85,54,0.55)');
const bl = e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)');

/* ── TriageForm — defined OUTSIDE parent so ref stays stable ── */
const TriageForm = ({ isMobile, form, handleChange, handleSubmit, fileRef, fileName, handleFile, isSubmitting }) => {
  const inp = getInp(isMobile);
  const sel = getSel(isMobile);

  return (
    <div style={{
      background: 'rgba(28,6,2,0.92)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: '14px',
      padding: isMobile ? '28px 20px 24px' : '36px 32px',
      boxSizing: 'border-box',
      width: '100%',
    }}>
      {/* Form title */}
      <h3 style={{
        fontFamily: "'Cabinet Grotesk',sans-serif",
        fontWeight: 500,
        fontSize: isMobile ? '22px' : '26px',
        lineHeight: '120%',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        margin: '0 0 24px 0',
      }}>
        Incident Triage Form
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Row 1: Full Name + Organisation */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <input name="fullName" value={form.fullName} onChange={handleChange}
            placeholder="Full Name" required style={inp} onFocus={fo} onBlur={bl} />
          <input name="organisation" value={form.organisation} onChange={handleChange}
            placeholder="Organisation" style={inp} onFocus={fo} onBlur={bl} />
        </div>

        {/* Row 2: email or phone — full width */}
        <div style={{ marginBottom: '10px' }}>
          <input name="contact" value={form.contact} onChange={handleChange}
            placeholder="email@company.com or  +1 000 000 000"
            required style={inp} onFocus={fo} onBlur={bl} />
        </div>

        {/* Row 3: Select incident type + Estimate severity */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <select name="incidentType" value={form.incidentType} onChange={handleChange}
            style={{ ...sel, color: form.incidentType ? '#FFFFFF' : '#6b7280' }}
            onFocus={fo} onBlur={bl}>
            <option value="" disabled hidden>Select incident type</option>
            <option value="active-breach">Active Breach</option>
            <option value="ransomware">Ransomware Attack</option>
            <option value="data-exfiltration">Data Exfiltration</option>
            <option value="phishing">Phishing / Social Engineering</option>
            <option value="ddos">DDoS Attack</option>
            <option value="insider-threat">Insider Threat</option>
            <option value="other">Other</option>
          </select>
          <select name="severity" value={form.severity} onChange={handleChange}
            style={{ ...sel, color: form.severity ? '#FFFFFF' : '#6b7280' }}
            onFocus={fo} onBlur={bl}>
            <option value="" disabled hidden>Estimate severity</option>
            <option value="critical">Critical — Systems Down</option>
            <option value="high">High — Active Threat</option>
            <option value="medium">Medium — Suspected Compromise</option>
            <option value="low">Low — Precautionary</option>
          </select>
        </div>

        {/* Row 4: Describe what's happening */}
        <div style={{ marginBottom: '10px' }}>
          <input name="description" value={form.description} onChange={handleChange}
            placeholder="Describe What's Happening   (optional)"
            style={inp} onFocus={fo} onBlur={bl} />
        </div>

        {/* Row 5: Submit Incident Report file upload */}
        <div style={{ marginBottom: '20px' }}>
          <div onClick={() => fileRef.current?.click()} style={{
            ...inp,
            display: 'flex', alignItems: 'center', gap: '8px',
            cursor: 'pointer',
          }}>
            {/* Upload icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span style={{ color: fileName ? '#FFFFFF' : 'rgba(255,255,255,0.35)', fontSize: isMobile ? '13px' : '14px', fontFamily: "'Inter',sans-serif" }}>
              {fileName || 'Submit Incident Report   (optional)'}
            </span>
          </div>
          <input ref={fileRef} type="file" accept=".pdf,.docx,.txt,.log"
            onChange={handleFile} style={{ display: 'none' }} />
        </div>

        {/* Submit button */}
        <button type="submit" disabled={isSubmitting} style={{
          width: isMobile ? '100%' : 'auto',
          padding: '14px 28px',
          background: isSubmitting ? '#a33622' : '#FF5536',
          border: 'none',
          borderRadius: '6px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          fontFamily: "'Inter',sans-serif",
          fontWeight: 500,
          fontSize: '15px',
          color: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background 0.2s ease',
        }}
          onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#e04a2d'; }}
          onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = '#FF5536'; }}
        >
          {isSubmitting ? 'Submitting...' : (isMobile ? 'Submit Request' : 'Submit Emergency Request')} {!isSubmitting && '→'}
        </button>

        {/* Footnote */}
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontWeight: 400,
          fontSize: '11px',
          color: '#555555',
          margin: '14px 0 0 0',
          lineHeight: '1.6',
        }}>
          We respond to every submission within 15 minutes.
          <br />For immediate phone response call our 24/7 hotline.
        </p>
      </form>
    </div>
  );
};

/* ── LeftContent — defined OUTSIDE parent so ref stays stable ── */
const LeftContent = ({ isMobile }) => (
  <div style={{
    flexShrink: 0,
    maxWidth: isMobile ? '100%' : '380px',
    width: '100%',
    textAlign: isMobile ? 'center' : 'left',
  }}>

    {/* Tag */}
    <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', marginBottom: '24px' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        border: '1px solid #444444',
        padding: '6px 10px',
      }}>
        <img
          src="/icons/playbook-icon.png"
          alt=""
          style={{ width: '12px', height: '12px', objectFit: 'contain', flexShrink: 0 }}
          onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:11px;font-weight:500;line-height:1">›</span>'; }}
        />
        <span style={{
          fontFamily: "'Roboto Mono',monospace",
          fontWeight: 500, fontSize: isMobile ? '10px' : '14px',
          lineHeight: '100%', letterSpacing: '0.06em',
          color: '#FFFFFF', textTransform: 'uppercase',
        }}>
          OUR TEAM RESPONDS IN{' '}
          <span style={{ color: '#FF5536' }}>&lt; 15 MINUTES</span>
        </span>
      </div>
    </div>

    {/* Heading */}
    <h1 style={{
      fontFamily: "'Cabinet Grotesk',sans-serif",
      fontWeight: 500,
      fontSize: isMobile ? '40px' : '62px',
      lineHeight: '105%',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      margin: '0 0 20px 0',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      Are You<br />Under Attack?
    </h1>

    {/* Description */}
    <p style={{
      fontFamily: "'Inter',sans-serif",
      fontWeight: 400,
      fontSize: isMobile ? '13px' : '16px',
      lineHeight: '1.65',
      letterSpacing: '-0.01em',
      color: '#ADADAD',
      margin: isMobile ? '0 auto 32px auto' : '0 0 32px 0',
      maxWidth: '360px',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      active breach, ransomware active breach, ransomware attack, data exfiltration, or security incident our emergency response team is available right now. Every minute matters.
    </p>

    {/* Phone */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
      <div style={{
        width: '40px', height: '40px',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <span style={{
        fontFamily: "'Cabinet Grotesk',sans-serif",
        fontWeight: 500,
        fontSize: isMobile ? '18px' : '24px',
        color: '#FFFFFF',
        letterSpacing: '-0.01em',
      }}>
        +1-800-AURISEG
      </span>
    </div>
  </div>
);

/* ── Main component ── */
const UnderAttackHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    fullName: '', organisation: '', contact: '',
    incidentType: '', severity: '', description: '', report: '',
  });
  const [fileName, setFileName] = useState('');
  const [fileObj, setFileObj] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = e => {
    const f = e.target.files[0];
    if (f) {
      setFileName(f.name);
      setFileObj(f);
    }
  };

  const resetForm = () => {
    setForm({ fullName: '', organisation: '', contact: '', incidentType: '', severity: '', description: '', report: '' });
    setFileName('');
    setFileObj(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      let fileUrl = '';

      // ── 1. Upload file to Supabase Storage (same as before) ──────────────
      if (fileObj && supabase) {
        const fileExt = fileObj.name.split('.').pop();
        const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error } = await supabase.storage
          .from('incident-reports')
          .upload(filePath, fileObj);

        if (error) {
          console.error('Supabase upload error:', error);
          alert('Failed to upload file, but we will still submit your request.');
        } else {
          const { data: urlData } = supabase.storage
            .from('incident-reports')
            .getPublicUrl(filePath);
          fileUrl = urlData.publicUrl;
        }
      } else if (fileObj && !supabase) {
        console.warn('Supabase not configured. File will not be uploaded.');
      }

      // ── 2. Send via FormSubmit (replaces EmailJS) ─────────────────────────
      // FormSubmit AJAX mode — no page redirect, returns JSON
      const payload = {
        // FormSubmit special fields
        _subject: `[EMERGENCY] Incident Report — ${form.incidentType || 'Unknown'} (${form.severity || 'Unknown severity'})`,
        _template: 'table',      // formats email as a clean table
        _captcha: 'false',       // disable captcha for programmatic use

        // Your form data
        'Full Name': form.fullName,
        'Organisation': form.organisation,
        'Contact': form.contact,
        'Incident Type': form.incidentType,
        'Severity': form.severity,
        'Description': form.description || 'Not provided',
        'Incident Report File': fileUrl || 'No file attached',
      };

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
        alert('Emergency request submitted successfully. We will respond within 15 minutes.');
        resetForm();
      } else {
        // FormSubmit may require email activation on first use — check your inbox
        console.error('FormSubmit response:', result);
        alert(
          result.message ||
          'Submission may have failed. If this is your first submission, check your email to activate FormSubmit, then try again.'
        );
      }

    } catch (err) {
      console.error('Submission error:', err);
      alert('There was an error submitting your request. Please try again or call our hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── DESKTOP ──────────────────────────────────────────────────
  if (!isMobile) {
    return (
      <section style={{
        width: '100%',
        minHeight: '520px',
        background: '#030407',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}>
        {/* Subtle red glow bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: '-80px', right: '-80px',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,85,54,0.12) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: '100%', maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 105px',
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          boxSizing: 'border-box',
        }}>
          <LeftContent isMobile={isMobile} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <TriageForm
              isMobile={isMobile}
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              fileRef={fileRef}
              fileName={fileName}
              handleFile={handleFile}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </section>
    );
  }

  // ─── MOBILE ───────────────────────────────────────────────────
  return (
    <section style={{
      width: '100%',
      maxWidth: '375px',
      margin: '0 auto',
      background: '#030407',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Subtle red glow */}
      <div style={{
        position: 'absolute',
        top: '-60px', right: '-60px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,85,54,0.10) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: '48px 20px 56px',
        boxSizing: 'border-box',
      }}>
        <LeftContent isMobile={isMobile} />
        {/* Form below content on mobile */}
        <div style={{ marginTop: '40px' }}>
          <TriageForm
            isMobile={isMobile}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fileRef={fileRef}
            fileName={fileName}
            handleFile={handleFile}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </section>
  );
};

export default UnderAttackHero;