// src/pages/Certification.jsx
import React from 'react';
import CertificationComplianceHero from '../components/certification/CertificationComplianceHero';
import AttestationsCertifications from '../components/certification/AttestationsCertifications';
import CloseComplianceGaps from '../components/certification/CloseComplianceGaps';
import Faq from '../components/certification/Faq';
import CtaSection from '../components/certification/CaseStudyCtaseaction';

const CertificationCompliance = () => {
  return (
    <>
      <CertificationComplianceHero />
      <AttestationsCertifications />
      <CloseComplianceGaps />
      <Faq />
      <CtaSection />
      {/* Add more sections here */}
    </>
  );
};

export default CertificationCompliance;