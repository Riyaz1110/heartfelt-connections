import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const GovernmentHero = lazy(() => import('../components/government/GovernmentHero'));
const GovernmentStats = lazy(() => import('../components/government/GovernmentStats'));
const GovernmentProblem = lazy(() => import('../components/government/GovernmentProblem'));
const GovernmentSolutions = lazy(() => import('../components/government/GovernmentSolutions'));
const GovernmentCompliance = lazy(() => import('../components/government/GovernmentCompliance'));
const GovernmentTargetAudience = lazy(() => import('../components/government/GovernmentTargetAudience'));
const GovernmentCaseStudies = lazy(() => import('../components/government/GovernmentCaseStudies'));
const GovernmentTestimonials = lazy(() => import('../components/government/GovernmentTestimonials'));
const WhyAuriseg = lazy(() => import('../components/government/WhyAuriseg'));
const FAQ = lazy(() => import('../components/government/Faq'));
const SocWhatYouGet = lazy(() => import('../components/government/SocWhatYouGet'));
const TalkToExpert = lazy(() => import('../components/government/TalkToExpert'));

// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const GovernmentPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <Suspense fallback={<SectionLoader />}>
                <GovernmentHero />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentStats />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentProblem />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentSolutions />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentCompliance />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentTargetAudience />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentCaseStudies />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <GovernmentTestimonials />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhyAuriseg />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <SocWhatYouGet />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TalkToExpert />
            </Suspense>
        </div>
    );
};

export default GovernmentPage;