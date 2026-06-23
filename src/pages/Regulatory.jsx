import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/regulatory-section/RegulatoryHero'));
const SocStats = lazy(() => import('../components/regulatory-section/RegulatoryStatics'));
const SocWhatYouGet = lazy(() => import('../components/regulatory-section/RegulatoryWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/regulatory-section/RegulatoryIntegrations'));
const SocEngagementModels = lazy(() => import('../components/regulatory-section/RegulatoryEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/regulatory-section/RegulatoryDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/regulatory-section/RegulatoryProcessTimeline'));
const RegulatoryTestimonials = lazy(() => import('../components/regulatory-section/RegulatoryTestimonials'));
const Casestudies = lazy(() => import('../components/regulatory-section/Casestudies'));
const FAQ = lazy(() => import('../components/regulatory-section/RegulatoryFaq'));
const CtaSection = lazy(() => import('../components/regulatory-section/RegulatoryToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const RegulatoryMonitoring = () => {
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
                    <RegulatoryTestimonials />
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

export default RegulatoryMonitoring;