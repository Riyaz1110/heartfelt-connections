import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AttestationsCertifications = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Certification cards data
  const certifications = [
    {
      id: 1,
      shortTitle: 'CISA',
      fullTitle: 'Certified Information Systems Auditor',
      description: 'Ensure rigorous IT audit, control assessment, and governance. Withstand institutional-grade scrutiny.',
      certificateImage: '/images/certification/cisa-card-bg.jpg',
    },
    {
      id: 2,
      shortTitle: 'CISM',
      fullTitle: 'Certified Information Security Manager',
      description: 'Align security management with business goals. Lead enterprise-wide security programs effectively.',
      certificateImage: '/images/certification/cism-cert.png',
    },
    {
      id: 3,
      shortTitle: 'CISSP',
      fullTitle: 'Certified Information Systems Security Professional',
      description: 'Design, implement, and manage best-in-class cybersecurity programs across complex organizations.',
      certificateImage: '/images/certification/cissp-cert.png',
    },
    {
      id: 4,
      shortTitle: 'CRISC',
      fullTitle: 'Certified in Risk and Information Systems Control',
      description: 'Identify and manage enterprise IT risk. Implement and maintain information systems controls.',
      certificateImage: '/images/certification/crisc-cert.png',
    },
    {
      id: 5,
      shortTitle: 'ISO 9001:2015',
      fullTitle: 'Quality Management Systems',
      description: 'Guarantee consistent, structured quality management systems across every engagement.',
      certificateImage: '/images/certification/iso-cert.png',
    },
    {
      id: 6,
      shortTitle: 'CERT-in',
      fullTitle: 'Indian Computer Emergency Response Team',
      description: 'Certified authorized entity audits and assessment of compliance with latest frameworks.',
      certificateImage: '/images/certification/certin-cert.png',
    },
    {
      id: 7,
      shortTitle: 'OSCP',
      fullTitle: 'Offensive Security Certified Professional',
      description: 'Hands-on penetration testing certification. Prove ability to identify and exploit vulnerabilities.',
      certificateImage: '/images/certification/oscp-cert.png',
    },
    {
      id: 8,
      shortTitle: 'CEH',
      fullTitle: 'Certified Ethical Hacker',
      description: 'Master the art of ethical hacking. Learn to think and act like a real attacker.',
      certificateImage: '/images/certification/ceh-cert.png',
    },
  ];

  // Certification Card Component
  const CertificationCard = ({ cert }) => (
    <div
      style={{
        width: isMobile ? '100%' : 'calc(33.33% - 21.33px)',
        maxWidth: isMobile ? '327px' : 'none',
        minWidth: isMobile ? '280px' : '280px',
        height: isMobile ? 'auto' : 'auto',
        minHeight: isMobile ? 'auto' : 'auto',
        position: 'relative',
        overflow: 'hidden',
        background: '#040410',
        border: '1.96px solid #444444',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: isMobile ? '16px' : '24px 20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {/* DESKTOP VIEW: Certificate Image Centered + Short Title at Top Left */}
        {!isMobile && (
          <>
            {/* Short Title at Top Left Corner */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 3,
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                {cert.shortTitle}
              </span>
            </div>

            {/* Certificate Image - Centered */}
            <div
              style={{
                width: '177.15px',
                height: '177.15px',
                margin: '20px auto 0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={cert.certificateImage}
                alt={cert.shortTitle}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  parent.innerHTML = `<span style="color:#FFFFFF; font-size:20px; font-weight:bold;">${cert.shortTitle}</span>`;
                }}
              />
            </div>
          </>
        )}

        {/* MOBILE VIEW: Image and Title in SAME ROW (horizontal layout) */}
        {isMobile && (
          <>
            {/* Image and Title - Same Row (Flex Row) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              {/* Certificate Image */}
              <div
                style={{
                  width: '37.94px',
                  height: '37.23px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={cert.certificateImage}
                  alt={cert.shortTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    parent.innerHTML = `<span style="color:#FFFFFF; font-size:12px; font-weight:bold;">${cert.shortTitle}</span>`;
                  }}
                />
              </div>

              {/* Full Title - Same Row as Image */}
              <h3
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: 0,
                  flex: 1,
                }}
              >
                {cert.fullTitle}
              </h3>
            </div>

            {/* Description - Below Image & Title Row */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '11px',
                lineHeight: '15px',
                letterSpacing: '-0.02em',
                color: '#ADADAD',
                margin: 0,
              }}
            >
              {cert.description}
            </p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* ════════════════════ DESKTOP VIEW ════════════════════ */}
      {!isMobile && (
        <section
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            background: '#030407',
            boxSizing: 'border-box',
            padding: '80px 100px 100px 100px',
          }}
        >
          {/* ATTESTATIONS & CERTIFICATIONS tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #444444',
              padding: '10px 11px',
              marginBottom: '24px',
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt=""
              style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
              onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:14px;font-weight:700;line-height:1">›</span>'; }}
            />
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
              }}
            >
              ATTESTATIONS & CERTIFICATIONS
            </span>
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              maxWidth: '712px',
            }}
          >
            Secure compliance across every required framework.
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '-0.01em',
              color: '#8A8A8A',
              margin: '0 0 48px 0',
              maxWidth: '454px',
            }}
          >
            Mandates shift constantly. Deploy credentialed practitioners to align your architecture with the frameworks regulators demand.
          </p>

          {/* Cards Grid - 3 columns with gap 32px */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              maxWidth: '1236px',
              margin: '0 auto',
            }}
          >
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════ MOBILE VIEW ════════════════════ */}
      {isMobile && (
        <section
          style={{
            width: '100%',
            maxWidth: '375px',
            margin: '0 auto',
            background: '#030407',
            boxSizing: 'border-box',
            padding: '48px 16px 60px 16px',
          }}
        >
          {/* ATTESTATIONS & CERTIFICATIONS tag - Centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5.18px',
                border: '0.52px solid #444444',
                padding: '5.18px 5.7px',
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt=""
                style={{ width: '10px', height: '10px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.outerHTML = '<span style="color:#FF5536;font-size:10px;font-weight:700;line-height:1">›</span>'; }}
              />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '12px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                ATTESTATIONS & CERTIFICATIONS
              </span>
            </div>
          </div>

          {/* Main Heading - Mobile - Centered */}
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '30px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              textAlign: 'center',
              maxWidth: '325px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Secure compliance across every required framework.
          </h2>

          {/* Description - Mobile - Centered */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '-0.01em',
              color: '#8A8A8A',
              margin: '0 0 32px 0',
              textAlign: 'center',
              maxWidth: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Mandates shift constantly. Deploy credentialed practitioners to align your architecture with the frameworks regulators demand.
          </p>

          {/* Cards - Vertical Stack - Centered */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default AttestationsCertifications;
