import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/mobile-section/MobileHero'));
const SocStats = lazy(() => import('../components/mobile-section/MobileStatics'));
const SocWhatYouGet = lazy(() => import('../components/mobile-section/MobileWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/mobile-section/MobileIntegrations'));
const SocEngagementModels = lazy(() => import('../components/mobile-section/MobileEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/mobile-section/MobileDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/mobile-section/MobileProcessTimeline'));
const MobileTestimonials = lazy(() => import('../components/mobile-section/MobileTestimonials'));
const Casestudies = lazy(() => import('../components/mobile-section/Casestudies'));
const FAQ = lazy(() => import('../components/mobile-section/MobileFaq'));
const CtaSection = lazy(() => import('../components/mobile-section/MobileToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const MobileMonitoring = () => {
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
                    <MobileTestimonials />
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

export default MobileMonitoring;