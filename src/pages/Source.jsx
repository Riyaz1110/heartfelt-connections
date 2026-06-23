import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/source-section/SourceHero'));
const SocStats = lazy(() => import('../components/source-section/SourceStatics'));
const SocWhatYouGet = lazy(() => import('../components/source-section/SourceWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/source-section/SourceIntegrations'));
const SocEngagementModels = lazy(() => import('../components/source-section/SourceEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/source-section/SourceDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/source-section/SourceProcessTimeline'));
const SourceTestimonials = lazy(() => import('../components/source-section/SourceTestimonials'));
const Casestudies = lazy(() => import('../components/source-section/Casestudies'));
const FAQ = lazy(() => import('../components/source-section/SourceFaq'));
const CtaSection = lazy(() => import('../components/source-section/SourceToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const SourceMonitoring = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">

                {/* Hero Section */}
                <Suspense fallback={<SectionLoader />}>
                    <SocHero />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocStats />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocWhatYouGet />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocIntegrations />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocEngagementModels />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocDifferentiators />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SocProcessTimeline />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <SourceTestimonials />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Casestudies />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <FAQ />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <CtaSection />
                </Suspense>
            </div>
        </div>
    );
};

export default SourceMonitoring;