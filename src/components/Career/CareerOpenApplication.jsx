import React, { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const BUCKET_NAME = 'resumes'; // ← change if your bucket is named differently
const MAX_FILE_SIZE_MB = 5;

// 🔁 Replace with your actual recipient email
const FORMSUBMIT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL || '';

const CareerOpenApplication = () => {
  const [form, setForm] = useState({ fullName: '', email: '', area: '', experience: '', linkedin: '' });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadProgress, setUploadProgress] = useState('');
  const fileRef = useRef(null);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File must be under ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
    setFile(f);
    setFileName(f.name);
  };

  /**
   * Uploads the resume to Supabase Storage and returns the public URL.
   * Files are stored as: resumes/{timestamp}_{sanitized-name}
   */
  const uploadResume = async () => {
    if (!file) return null;
    if (!supabase) {
      console.warn('Supabase not configured. Skipping upload.');
      return null;
    }

    const sanitized = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `${Date.now()}_${sanitized}`;

    setUploadProgress('Uploading resume…');

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(path, file, { cacheControl: '3600', upsert: false });

    if (error) throw new Error(`Upload failed: ${error.message}`);

    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(path);
    return data.publicUrl;
  };

  /**
   * Sends form data via FormSubmit's AJAX endpoint.
   * FormSubmit accepts a FormData POST and returns JSON when
   * the Content-Type header is NOT set (let the browser set it for FormData).
   *
   * Special hidden fields used:
   *  _subject  — email subject line
   *  _captcha  — disable FormSubmit's built-in captcha (you can remove this line to re-enable)
   *  _template — use the "table" template for a clean email layout
   */
  const sendViaFormSubmit = async (resumeUrl) => {
    const fd = new FormData();

    // Visible fields
    fd.append('Full Name', form.fullName);
    fd.append('Email', form.email);
    fd.append('Area of Expertise', form.area || 'Not specified');
    fd.append('Years of Experience', form.experience || 'Not specified');
    fd.append('LinkedIn / Portfolio', form.linkedin || 'Not provided');
    fd.append('Resume URL', resumeUrl || 'No file uploaded');

    // FormSubmit control fields
    fd.append('_subject', 'New Open Application — Auriseg Careers');
    fd.append('_template', 'table');
    fd.append('_captcha', 'false'); // remove this line to keep the honeypot captcha

    const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
      method: 'POST',
      // Do NOT set Content-Type — the browser must set it automatically
      // so that FormData boundaries are included correctly.
      body: fd,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`FormSubmit error ${res.status}: ${text}`);
    }

    const json = await res.json();
    // FormSubmit returns { success: "true", message: "..." } on success
    if (json.success !== 'true' && json.success !== true) {
      throw new Error(`FormSubmit rejected: ${json.message}`);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress('');

    try {
      // Step 1 — upload resume to Supabase (same as before)
      const resumeUrl = await uploadResume();

      // Step 2 — send email via FormSubmit (replaces EmailJS)
      setUploadProgress('Sending application…');
      await sendViaFormSubmit(resumeUrl);

      setSubmitStatus('success');
      setForm({ fullName: '', email: '', area: '', experience: '', linkedin: '' });
      setFile(null);
      setFileName('');
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setUploadProgress('');
    }
  };

  const inp = {
    width: '100%', background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px',
    padding: '14px 16px',
    fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14px',
    color: '#FFFFFF', outline: 'none', boxSizing: 'border-box',
    caretColor: '#FF5536',
  };
  const inpMobile = { ...inp, fontSize: '13px', padding: '12px 14px' };

  const fo = e => (e.target.style.borderColor = 'rgba(255,85,54,0.5)');
  const bl = e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)');

  const StatusBanner = ({ mobile }) => (
    <>
      {submitStatus === 'success' && (
        <div style={{ marginBottom: '16px', padding: '12px 16px', background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', borderRadius: '8px' }}>
          <p style={{ color: '#22c55e', margin: 0, fontSize: mobile ? '13px' : '14px' }}>✓ Application sent! We'll be in touch within 5 business days.</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div style={{ marginBottom: '16px', padding: '12px 16px', background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', borderRadius: '8px' }}>
          <p style={{ color: '#ef4444', margin: 0, fontSize: mobile ? '13px' : '14px' }}>✗ Something went wrong. Please try again.</p>
        </div>
      )}
    </>
  );

  return (
    <>
      <div id="open-application">
        {/* ════════════════════ DESKTOP VIEW ════════════════════ */}
        <div className="desktop-only">
          <section style={{
            width: '100%', minHeight: '783px',
            background: '#030407',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center',
            boxSizing: 'border-box',
          }}>
            <img
              src="/images/careers/open-application-bg.png" alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to right, #030407 45%, #1a0502 100%)'; }}
            />

            <div style={{
              position: 'relative', zIndex: 1,
              width: '100%', maxWidth: '1440px',
              margin: '0 auto', padding: '80px 105px',
              display: 'flex', alignItems: 'center',
              gap: '80px', boxSizing: 'border-box',
            }}>

              {/* LEFT */}
              <div style={{ flexShrink: 0, maxWidth: '420px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1px solid #444444', padding: '8px 11px', marginBottom: '24px',
                }}>
                  <img src="/icons/playbook-icon.png" alt=""
                    style={{ width: '12px', height: '12px', objectFit: 'contain', flexShrink: 0 }}
                    onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:12px;font-weight:500;line-height:1">›</span>'; }}
                  />
                  <span style={{
                    fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '16px',
                    lineHeight: '100%', letterSpacing: '-0.02em',
                    color: '#FFFFFF', textTransform: 'uppercase',
                  }}>
                    OPEN APPLICATION
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '48px',
                  lineHeight: '105%', letterSpacing: '-0.02em',
                  color: '#FFFFFF', margin: '0 0 24px 0',
                }}>
                  Don't See Your Role? Pitch Us.
                </h2>

                <p style={{
                  fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '16px',
                  lineHeight: '24px', letterSpacing: '-0.02em',
                  color: '#ADADAD', margin: 0, maxWidth: '420px',
                }}>
                  Elite practitioners rarely fit a standard job description. If you're a malware reverse-engineer, a seasoned offensive security expert, or a specialist in an underserved domain, tell us what you bring. We're always building toward what's next.
                </p>
              </div>

              {/* RIGHT — Form */}
              <div style={{
                flex: 1, minWidth: 0,
                background: 'linear-gradient(145deg, #2a0802 0%, #030407 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '48px 40px',
                boxSizing: 'border-box',
              }}>
                <h3 style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '48px',
                  lineHeight: '120%', letterSpacing: '-0.02em',
                  color: '#FFFFFF', margin: '0 0 28px 0', textAlign: 'left',
                }}>
                  Send Your Application
                </h3>

                <StatusBanner />

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                    <input name="fullName" value={form.fullName} onChange={handleChange}
                      placeholder="Full Name" required style={inp} onFocus={fo} onBlur={bl} />
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" required style={inp} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                    <input name="area" value={form.area} onChange={handleChange}
                      placeholder="Area of Expertise" style={inp} onFocus={fo} onBlur={bl} />
                    <input name="experience" value={form.experience} onChange={handleChange}
                      placeholder="Years of Experience" style={inp} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <input name="linkedin" value={form.linkedin} onChange={handleChange}
                      placeholder="Linkedin or Portfolio URL" style={inp} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div onClick={() => fileRef.current?.click()} style={{
                      width: '100%', padding: '14px 16px',
                      border: '1px solid rgba(255,85,54,0.45)',
                      borderRadius: '6px', cursor: 'pointer',
                      boxSizing: 'border-box',
                      display: 'flex', alignItems: 'center', gap: '6px',
                      background: 'transparent',
                    }}>
                      <span style={{ color: '#FF5536', fontFamily: "'Inter',sans-serif", fontSize: '14px', fontWeight: 500, flexShrink: 0 }}>Click to upload</span>
                      <span style={{ color: '#555555', fontFamily: "'Inter',sans-serif", fontSize: '14px' }}>
                        {fileName || 'your resume — PDF or DOCX, max 5MB'}
                      </span>
                    </div>
                    <input ref={fileRef} type="file" accept=".pdf,.docx" onChange={handleFile} style={{ display: 'none' }} />
                  </div>

                  {uploadProgress && (
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#FF5536', margin: '0 0 12px 0' }}>
                      {uploadProgress}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting} style={{
                    width: '100%', padding: '16px',
                    background: isSubmitting ? '#cc4429' : '#FF5536',
                    border: 'none', borderRadius: '6px', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '16px',
                    color: '#FFFFFF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    transition: 'background 0.2s',
                  }}>
                    {isSubmitting ? 'Sending…' : 'Submit Application →'}
                  </button>
                  <p style={{
                    fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '12px',
                    color: '#444444', textAlign: 'center', margin: '14px 0 0 0',
                  }}>
                    Every application is reviewed by a human. Expect a response within 5 business days.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* ════════════════════ MOBILE VIEW ════════════════════ */}
        <div className="mobile-only">
          <section style={{
            width: '100%', maxWidth: '375px',
            margin: '0 auto', background: '#030407',
            position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
          }}>
            <img
              src="/images/careers/open-application-bg-mobile.png" alt=""
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to bottom, #030407 30%, #1a0502 100%)'; }}
            />

            <div style={{ position: 'relative', zIndex: 1, padding: '48px 20px 60px', boxSizing: 'border-box' }}>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  border: '0.52px solid #444444', padding: '6px 10px',
                }}>
                  <img src="/icons/playbook-icon.png" alt=""
                    style={{ width: '10px', height: '10px', objectFit: 'contain', flexShrink: 0 }}
                    onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:10px;font-weight:500;line-height:1">›</span>'; }}
                  />
                  <span style={{
                    fontFamily: "'Roboto Mono',monospace", fontWeight: 500, fontSize: '11px',
                    lineHeight: '12px', letterSpacing: '-0.02em',
                    color: '#FF5536', textTransform: 'uppercase',
                  }}>
                    OPEN APPLICATION
                  </span>
                </div>
              </div>

              <h2 style={{
                fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '32px',
                lineHeight: '110%', letterSpacing: '-0.02em',
                color: '#FFFFFF', margin: '0 0 16px 0', textAlign: 'left',
              }}>
                Don't See Your Role?<br />Pitch Us.
              </h2>

              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '14px',
                lineHeight: '22px', letterSpacing: '-0.02em',
                color: '#ADADAD', margin: '0 0 32px 0', textAlign: 'left',
              }}>
                Elite practitioners rarely fit a standard job description. If you're a malware reverse-engineer, a seasoned offensive security expert, or a specialist in an underserved domain, tell us what you bring. We're always building toward what's next.
              </p>

              <div style={{
                width: '100%',
                background: 'linear-gradient(145deg, #2a0802 0%, #030407 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '28px 20px', boxSizing: 'border-box',
              }}>
                <h3 style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, fontSize: '24px',
                  lineHeight: '100%', letterSpacing: '-0.02em',
                  color: '#FFFFFF', margin: '0 0 24px 0', textAlign: 'left',
                }}>
                  Send Your Application
                </h3>

                <StatusBanner mobile />

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <input name="fullName" type="text" value={form.fullName} onChange={handleChange}
                      placeholder="Full Name" required style={inpMobile} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" required style={inpMobile} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input name="area" type="text" value={form.area} onChange={handleChange}
                      placeholder="Area of Expertise" style={inpMobile} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input name="experience" type="text" value={form.experience} onChange={handleChange}
                      placeholder="Years of Experience" style={inpMobile} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <input name="linkedin" type="text" value={form.linkedin} onChange={handleChange}
                      placeholder="Linkedin or Portfolio URL" style={inpMobile} onFocus={fo} onBlur={bl} />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div onClick={() => fileRef.current?.click()} style={{
                      width: '100%', padding: '12px 14px',
                      border: '1px solid rgba(255,85,54,0.45)',
                      borderRadius: '8px', cursor: 'pointer',
                      boxSizing: 'border-box', background: 'transparent',
                      display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px',
                    }}>
                      <span style={{ color: '#FF5536', fontFamily: "'Inter',sans-serif", fontSize: '13px', fontWeight: 500 }}>Click to upload</span>
                      <span style={{ color: '#888888', fontFamily: "'Inter',sans-serif", fontSize: '12px' }}>
                        {fileName || 'your resume — PDF or DOCX, max 5MB'}
                      </span>
                    </div>
                    <input ref={fileRef} type="file" accept=".pdf,.docx" onChange={handleFile} style={{ display: 'none' }} />
                  </div>

                  {uploadProgress && (
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#FF5536', margin: '0 0 12px 0' }}>
                      {uploadProgress}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting} style={{
                    width: '100%', padding: '14px',
                    background: isSubmitting ? '#cc4429' : '#FF5536',
                    border: 'none', borderRadius: '8px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '15px',
                    color: '#FFFFFF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    transition: 'background 0.2s',
                  }}>
                    {isSubmitting ? 'Sending…' : 'Submit Application →'}
                  </button>
                  <p style={{
                    fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: '11px',
                    color: '#666666', textAlign: 'center', margin: '16px 0 0 0', lineHeight: '16px',
                  }}>
                    Every application is reviewed by a human. Expect a response within 5 business days.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            .mobile-only { display: none !important; }
            .desktop-only { display: block !important; }
          }
          @media (max-width: 767px) {
            .desktop-only { display: none !important; }
            .mobile-only { display: block !important; }
          }
        `}</style>
      </div>
    </>
  );
};

export default CareerOpenApplication;