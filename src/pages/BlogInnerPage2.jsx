import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const BlogInnerHero = lazy(() => import('../components/blog2/BlogInnerHero'));
const Bloginnercontent = lazy(() => import('../components/blog2/Bloginnercontent'));
const RelatedBlogs = lazy(() => import('../components/blog2/Relatedblogs'));
const CtaSection = lazy(() => import('../components/blog2/CaseStudyCtaseactioncopy'));


// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const BlogInnerPage = () => {
    return (
        <>
            <Suspense fallback={<SectionLoader />}>
                <BlogInnerHero />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Bloginnercontent />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <RelatedBlogs />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <CtaSection />
            </Suspense>
        </>
    );
};

export default BlogInnerPage;