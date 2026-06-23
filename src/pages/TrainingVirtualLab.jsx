import React from 'react';
import TrainingVirtualLabHero from '../components/training/TrainingVirtualLabHero';
import SocStats from '../components/training/Socstatics';
import FrameworkFrontlineDefence from '../components/training/FrameworkFrontlineDefence';
import DefendFrontlineIntelligence from '../components/training/DefendFrontlineIntelligence';
import AboutFoundation from '../components/training/AboutFoundation';
import EnterpriseSecOpsTraining from '../components/training/EnterpriseSecOpsTraining';
import CtaSection from '../components/training/CaseStudyCtaseaction';

const TrainingVirtualLab = () => {
  return (
    <>
      <TrainingVirtualLabHero />
      <SocStats />
      <FrameworkFrontlineDefence />
      <DefendFrontlineIntelligence />
      <AboutFoundation/>
      <EnterpriseSecOpsTraining/>
      <CtaSection/>
      {/* Add more sections here as you build them */}
    </>
  );
};

export default TrainingVirtualLab;