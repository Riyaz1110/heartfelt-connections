import { lazy, Suspense } from 'react';

// Lazy load components
const CaseStudyHero = lazy(() => import('../components/success_stories1/Casestudyhero'));
const CaseStudyDetails = lazy(() => import('../components/success_stories1/CaseStudyDetails'));
const CaseStudyOverview = lazy(() => import('../components/success_stories1/CaseStudyOverview'));
const CaseStudyChallenge = lazy(() => import('../components/success_stories1/CaseStudyChallenge'));
const CaseStudySolution = lazy(() => import('../components/success_stories1/CaseStudySolution'));
const CaseStudyImplementation = lazy(() => import('../components/success_stories1/CaseStudyImplementation'));
const CaseStudyOutcome = lazy(() => import('../components/success_stories1/CaseStudyOutcome'));
const CaseStudyTestimonial = lazy(() => import('../components/success_stories1/CaseStudyTestimonial'));
const CaseStudyRelatedPosts = lazy(() => import('../components/success_stories1/CaseStudyRelatedPosts'));
const CtaSection = lazy(() => import('../components/success_stories1/CaseStudyCtaseaction.jsx'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const CaseStudyInnerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyHero />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyDetails />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyOverview />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyChallenge />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudySolution />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyImplementation />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyOutcome />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyTestimonial />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyRelatedPosts />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        < CtaSection />
      </Suspense>
    </div>
  );
};

export default CaseStudyInnerPage;