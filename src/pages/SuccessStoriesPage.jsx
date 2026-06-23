import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const SuccessHero = lazy(() => import('../components/success_stories/SuccessHero'));
const BlogSection = lazy(() => import('../components/success_stories/BlogSection'));
const CtaSection = lazy(()=>import('../components/msp-sections/MSPCTASection.jsx'));


// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const SuccessStoriesPage = () => {
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <SuccessHero />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BlogSection />
      </Suspense>
    <Suspense fallback={<SectionLoader />}>
    < CtaSection/>
    </Suspense>
    </>
  );
};

export default SuccessStoriesPage;