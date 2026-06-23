import React, { useState, useEffect } from 'react';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DEPARTMENTS = [
  'All Departments',
  'SOC Operations',
  'Offensive Security',
  'Cloud Security',
  'Threat Intelligence',
  'Advisory & GRC',
];

const JOBS = [
  {
    id: 1,
    dept: 'SOC Operations',
    deptLabel: 'SOC OPERATIONS',
    title: 'SOC Analyst – Tier 1',
    desc: 'Incident Response & Escalation: Investigate high-priority alerts escalated from Tier 1, utilizing SIEM, EDR, and NDR tools to reconstruct attack timelines.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 2,
    dept: 'SOC Operations',
    deptLabel: 'SOC OPERATIONS',
    title: 'SOC Analyst – Tier 2',
    desc: 'Incident Response & Escalation: Investigate high-priority alerts escalated from Tier 1, utilizing SIEM, EDR, and NDR tools to reconstruct attack timelines.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 3,
    dept: 'SOC Operations',
    deptLabel: 'SOC OPERATIONS',
    title: 'SOC Analyst – Tier 3',
    desc: 'Incident Response & Escalation: Investigate high-priority alerts escalated from Tier 1, utilizing SIEM, EDR, and NDR tools to reconstruct attack timelines.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 4,
    dept: 'SOC Operations',
    deptLabel: 'SOC OPERATIONS',
    title: 'SOC Analyst – Tier 4',
    desc: 'Incident Response & Escalation: Investigate high-priority alerts escalated from Tier 1, utilizing SIEM, EDR, and NDR tools to reconstruct attack timelines.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 5,
    dept: 'Offensive Security',
    deptLabel: 'OFFENSIVE SECURITY',
    title: 'Penetration Tester – Web',
    desc: 'Conduct thorough web application penetration tests, identify vulnerabilities, and provide actionable remediation advice to clients.',
    type: 'Full-time',
    exp: '3+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 6,
    dept: 'Cloud Security',
    deptLabel: 'CLOUD SECURITY',
    title: 'Cloud Security Engineer',
    desc: 'Design and implement security controls across AWS, Azure and GCP environments, ensuring compliance with industry standards.',
    type: 'Full-time',
    exp: '3+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 7,
    dept: 'Threat Intelligence',
    deptLabel: 'THREAT INTELLIGENCE',
    title: 'Threat Intelligence Analyst',
    desc: 'Collect, analyze, and disseminate threat intelligence to support proactive defense strategies across client environments.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
  {
    id: 8,
    dept: 'Advisory & GRC',
    deptLabel: 'ADVISORY & GRC',
    title: 'GRC Consultant',
    desc: 'Support clients in building governance frameworks, conducting risk assessments, and achieving regulatory compliance objectives.',
    type: 'Full-time',
    exp: '2+ yrs exp',
    location: 'Chennai',
  },
];

// ─── OPEN POSITIONS TAG ───────────────────────────────────────────────────────
const OpenTag = ({ isMobile }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    border: '1px solid #FF5536',
    padding: isMobile ? '4px 8px' : '6px 10px',
    marginBottom: isMobile ? '14px' : '20px',
  }}>
    <img
      src="/icons/playbook-icon.png"
      alt=""
      style={{ width: '11px', height: '11px', objectFit: 'contain', flexShrink: 0 }}
      onError={e => { e.target.outerHTML = '<span style="color:#FF5536;font-size:11px;font-weight:700">›</span>'; }}
    />
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 500, fontSize: isMobile ? '10px' : '11px',
      letterSpacing: '0.08em', color: '#FF5536',
      textTransform: 'uppercase',
    }}>
      OPEN POSITIONS
    </span>
  </div>
);

// ─── JOB CARD ─────────────────────────────────────────────────────────────────
const JobCard = ({ job, isMobile }) => (
  <div style={{
    border: '1px solid #E5E7EB',
    background: '#FFFFFF',
    padding: isMobile ? '20px 16px' : '24px 24px 20px',
    display: 'flex', flexDirection: 'column', gap: '10px',
    boxSizing: 'border-box',
  }}>
    {/* Dept label — orange small caps */}
    <span style={{
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 500, fontSize: '10px',
      letterSpacing: '0.1em', color: '#FF5536',
      textTransform: 'uppercase',
    }}>
      {job.deptLabel}
    </span>

    {/* Job title */}
    <h3 style={{
      fontFamily: "'Cabinet Grotesk', sans-serif",
      fontWeight: 500, fontSize: isMobile ? '18px' : '20px',
      lineHeight: '120%', letterSpacing: '-0.02em',
      color: '#030407', margin: 0,
    }}>
      {job.title}
    </h3>

    {/* Description */}
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400, fontSize: '13px',
      lineHeight: '20px', color: '#555555',
      margin: 0, flex: 1,
    }}>
      {job.desc}
    </p>

    {/* Meta + Apply row */}
    <div style={{
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: '10px', marginTop: '4px',
    }}>
      {/* Meta — Full-time | exp | location */}
      {!isMobile && (
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '12px',
          color: '#888888', whiteSpace: 'nowrap',
        }}>
          {job.type} &nbsp;|&nbsp; {job.exp} &nbsp;|&nbsp; {job.location}
        </span>
      )}
      {isMobile && (
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '11px',
          color: '#888888',
        }}>
          {job.type} | {job.exp}
        </span>
      )}

      {/* Apply button */}
      <button
        onClick={() => {
          document.getElementById('open-application')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
        background: '#FF5536', border: 'none',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600, fontSize: '13px',
        padding: isMobile ? '10px 0' : '9px 18px',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '6px',
        width: isMobile ? '100%' : 'auto',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: '0',
      }}>
        Apply &nbsp;→
      </button>
    </div>
  </div>
);

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const CareerPositions = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDept, setActiveDept] = useState('All Departments');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filtered = activeDept === 'All Departments'
    ? JOBS
    : JOBS.filter(j => j.dept === activeDept);

  return (
    <div id="open-positions">
      {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
      <section
        className="hidden md:block"
        style={{
          width: '100%',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          padding: '64px 100px 72px',
        }}
      >
        {/* OPEN POSITIONS tag */}
        <OpenTag isMobile={false} />

        {/* Heading row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '60px',
          marginBottom: '36px',
        }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500, fontSize: '53px',
            lineHeight: '105%', letterSpacing: '-0.02em',
            color: '#030407', margin: 0, flexShrink: 0,
          }}>
            Find Your Frontline.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400, fontSize: '14px',
            lineHeight: '22px', color: '#777777',
            margin: 0, maxWidth: '380px', paddingTop: '8px',
          }}>
            We seek driven problem-solvers. Can't find the perfect role? Submit an open application, we value your mindset over matching checkboxes
          </p>
        </div>

        {/* Department filter pills */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          flexWrap: 'wrap', marginBottom: '32px',
        }}>
          {DEPARTMENTS.map(dept => {
            const active = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500, fontSize: '13px',
                  padding: '9px 18px',
                  border: active ? 'none' : '1px solid #CCCCCC',
                  background: active ? '#FF5536' : '#FFFFFF',
                  color: active ? '#FFFFFF' : '#333333',
                  cursor: 'pointer', borderRadius: '0',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = '#FF5536'; e.currentTarget.style.color = '#FF5536'; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = '#CCCCCC'; e.currentTarget.style.color = '#333333'; } }}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* 2-column job cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          {filtered.map(job => (
            <JobCard key={job.id} job={job} isMobile={false} />
          ))}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '48px 0', color: '#888', fontFamily: "'Inter',sans-serif", fontSize: '15px' }}>
              No positions available in this department currently.
            </div>
          )}
        </div>
      </section>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <section
        className="md:hidden"
        style={{
          width: '100%',
          maxWidth: '375px',
          margin: '0 auto',
          background: '#FFFFFF',
          boxSizing: 'border-box',
          padding: '40px 16px 48px',
        }}
      >
        {/* OPEN POSITIONS tag — centered */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'14px' }}>
          <OpenTag isMobile={true} />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 500, fontSize: '36px',
          lineHeight: '105%', letterSpacing: '-0.02em',
          color: '#030407', margin: '0 0 12px 0',
          textAlign: 'center',
        }}>
          Find Your Frontline.
        </h2>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, fontSize: '12px',
          lineHeight: '18px', color: '#777777',
          margin: '0 0 24px 0', textAlign: 'center',
        }}>
          We seek driven problem-solvers. Can't find the perfect role? Submit an open application, we value your mindset over matching checkboxes
        </p>

        {/* Department filter — horizontal scrollable pills */}
        <div style={{
          display: 'flex', gap: '8px',
          overflowX: 'auto', paddingBottom: '4px',
          scrollbarWidth: 'none', msOverflowStyle: 'none',
          marginBottom: '24px',
        }}>
          {DEPARTMENTS.map(dept => {
            const active = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  flexShrink: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500, fontSize: '12px',
                  padding: '8px 14px',
                  border: active ? 'none' : '1px solid #CCCCCC',
                  background: active ? '#FF5536' : '#FFFFFF',
                  color: active ? '#FFFFFF' : '#333333',
                  cursor: 'pointer', borderRadius: '0',
                  whiteSpace: 'nowrap',
                }}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Stacked job cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map(job => (
            <JobCard key={job.id} job={job} isMobile={true} />
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#888', fontFamily: "'Inter',sans-serif", fontSize: '14px' }}>
              No positions available in this department currently.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerPositions;
