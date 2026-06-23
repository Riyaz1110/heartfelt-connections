import { lazy, Suspense } from 'react';

// Lazy load components
const CaseStudyHero = lazy(() => import('../components/success_stories4/Casestudyhero'));
const CaseStudyDetails = lazy(() => import('../components/success_stories4/CaseStudyDetails'));
const CaseStudyOverview = lazy(() => import('../components/success_stories4/CaseStudyOverview'));
const CaseStudyChallenge = lazy(() => import('../components/success_stories4/CaseStudyChallenge'));
const CaseStudySolution = lazy(() => import('../components/success_stories4/CaseStudySolution'));
const CaseStudyImplementation = lazy(() => import('../components/success_stories4/CaseStudyImplementation'));
const CaseStudyOutcome = lazy(() => import('../components/success_stories4/CaseStudyOutcome'));
const CaseStudyTestimonial = lazy(() => import('../components/success_stories4/CaseStudyTestimonial'));
const CaseStudyRelatedPosts = lazy(() => import('../components/success_stories4/CaseStudyRelatedPosts'));
const CtaSection = lazy(() => import('../components/success_stories4/CaseStudyCtaseaction.jsx'));

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