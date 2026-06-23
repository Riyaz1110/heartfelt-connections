import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const ManufacturingHero = lazy(() => import('../components/manufacturing/ManufacturingHero'));
const ManufacturingStats = lazy(() => import('../components/manufacturing/ManufacturingStats'));
const ManufacturingProblem = lazy(() => import('../components/manufacturing/ManufacturingProblem'));
const ManufacturingSolutions = lazy(() => import('../components/manufacturing/ManufacturingSolutions'));
const ManufacturingCompliance = lazy(() => import('../components/manufacturing/ManufacturingCompliance'));
const ManufacturingTargetAudience = lazy(() => import('../components/manufacturing/ManufacturingTargetAudience'));
const ManufacturingCaseStudies = lazy(() => import('../components/manufacturing/ManufacturingCaseStudies'));
const ManufacturingTestimonials = lazy(() => import('../components/manufacturing/ManufacturingTestimonials'));
const WhyAuriseg = lazy(() => import('../components/manufacturing/WhyAuriseg'));
const FAQ = lazy(() => import('../components/manufacturing/Faq'));
const SocWhatYouGet = lazy(() => import('../components/manufacturing/SocWhatYouGet'));
const TalkToExpert = lazy(() => import('../components/manufacturing/TalkToExpert'));

// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const ManufacturingPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingHero />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingStats />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingProblem />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingSolutions />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingCompliance />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingTargetAudience />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingCaseStudies />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ManufacturingTestimonials />
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

export default ManufacturingPage;