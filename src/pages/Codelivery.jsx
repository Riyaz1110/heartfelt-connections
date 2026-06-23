import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/codelivery-section/CodeliveryHero'));
const SocStats = lazy(() => import('../components/codelivery-section/CodeliveryStatics'));
const SocWhatYouGet = lazy(() => import('../components/codelivery-section/CodeliveryWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/codelivery-section/CodeliveryIntegrations'));
const SocEngagementModels = lazy(() => import('../components/codelivery-section/CodeliveryEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/codelivery-section/CodeliveryDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/codelivery-section/CodeliveryProcessTimeline'));
const CodeliveryTestimonials = lazy(() => import('../components/codelivery-section/CodeliveryTestimonials'));
const Casestudies = lazy(() => import('../components/codelivery-section/Casestudies'));
const FAQ = lazy(() => import('../components/codelivery-section/CodeliveryFaq'));
const CtaSection = lazy(() => import('../components/codelivery-section/CodeliveryToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const CodeliveryMonitoring = () => {
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
                    <CodeliveryTestimonials />
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

export default CodeliveryMonitoring;