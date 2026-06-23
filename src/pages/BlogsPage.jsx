import { lazy, Suspense } from 'react';

// Lazy load components
const BlogsHome = lazy(() => import('../components/Blog/BlogsHome'));
const ResourcesBlogpage = lazy(() => import('../components/Blog/ResourcesBlogpage'));
const CtaSection = lazy(() => import('../components/Blog/CaseStudyCtaseaction'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const BlogsPage = () => {
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <BlogsHome />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ResourcesBlogpage />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CtaSection />
      </Suspense>
    </>
  );
};

export default BlogsPage;