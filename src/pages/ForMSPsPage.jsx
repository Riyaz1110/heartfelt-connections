import { lazy, Suspense } from 'react';

const MSPHero = lazy(() => import('../components/msp-sections/MSPHero'));
const MSPStats = lazy(() => import('../components/msp-sections/MSPStats'));
const MSPProblems = lazy(() => import('../components/msp-sections/MSPProblems'));
const MSPServices = lazy(() => import('../components/msp-sections/MSPServices'));
const HowItWorks = lazy(() => import('../components/msp-sections/MSPHowItWorks'));
const WhyAuriseg = lazy(() => import('../components/msp-sections/MSPWhyAuriseg'));
const CaseStudies = lazy(() => import('../components/msp-sections/MSPCaseStudies'));
const FAQ = lazy(() => import('../components/msp-sections/MSPFaq'));
const CtaSection = lazy(() => import('../components/msp-sections/MSPCTASection.jsx'));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ForMSPsPage = () => {
  return (
    <>
      <div className="bg-dark min-h-screen">
        <Suspense fallback={<SectionLoader />}>
          <MSPHero />
        </Suspense>

        <div className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <MSPStats />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <MSPProblems />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <MSPServices />
          </Suspense>
        </div>
      </div>

      <div className="bg-white">
        <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
          <Suspense fallback={<SectionLoader />}>
            <WhyAuriseg />
          </Suspense>
        </div>

        <div className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <HowItWorks />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <CaseStudies />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        </div>
      </div>

      <div className="bg-dark">
        <div className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <CtaSection />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ForMSPsPage;