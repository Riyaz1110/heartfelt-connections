import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const TechnologyHero = lazy(() => import('../components/technology/TechnologyHero'));
const TechnologyStats = lazy(() => import('../components/technology/TechnologyStats'));
const TechnologyProblem = lazy(() => import('../components/technology/TechnologyProblem'));
const TechnologySolutions = lazy(() => import('../components/technology/TechnologySolutions'));
const TechnologyCompliance = lazy(() => import('../components/technology/TechnologyCompliance'));
const TechnologyTargetAudience = lazy(() => import('../components/technology/TechnologyTargetAudience'));
const TechnologyCaseStudies = lazy(() => import('../components/technology/TechnologyCaseStudies'));
const TechnologyTestimonials = lazy(() => import('../components/technology/TechnologyTestimonials'));
const WhyAuriseg = lazy(() => import('../components/technology/WhyAuriseg'));
const FAQ = lazy(() => import('../components/technology/Faq'));
const SocWhatYouGet = lazy(() => import('../components/technology/SocWhatYouGet'));
const TalkToExpert = lazy(() => import('../components/technology/TalkToExpert'));

// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const TechnologyPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <Suspense fallback={<SectionLoader />}>
                <TechnologyHero />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyStats />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyProblem />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologySolutions />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyCompliance />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyTargetAudience />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyCaseStudies />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechnologyTestimonials />
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

export default TechnologyPage;