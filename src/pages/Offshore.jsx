import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/offshore-section/OffshoreHero'));
const SocStats = lazy(() => import('../components/offshore-section/OffshoreStatics'));
const SocWhatYouGet = lazy(() => import('../components/offshore-section/OffshoreWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/offshore-section/OffshoreIntegrations'));
const SocEngagementModels = lazy(() => import('../components/offshore-section/OffshoreEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/offshore-section/OffshoreDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/offshore-section/OffshoreProcessTimeline'));
const OffshoreTestimonials = lazy(() => import('../components/offshore-section/OffshoreTestimonials'));
const Casestudies = lazy(() => import('../components/offshore-section/Casestudies'));
const FAQ = lazy(() => import('../components/offshore-section/OffshoreFaq'));
const CtaSection = lazy(() => import('../components/offshore-section/OffshoreToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const OffshoreMonitoring = () => {
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
                    <OffshoreTestimonials />
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

export default OffshoreMonitoring;