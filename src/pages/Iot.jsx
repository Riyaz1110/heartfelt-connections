import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/iot-section/IotHero'));
const SocStats = lazy(() => import('../components/iot-section/IotStatics'));
const SocWhatYouGet = lazy(() => import('../components/iot-section/IotWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/iot-section/IotIntegrations'));
const SocEngagementModels = lazy(() => import('../components/iot-section/IotEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/iot-section/IotDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/iot-section/IotProcessTimeline'));
const IotTestimonials = lazy(() => import('../components/iot-section/IotTestimonials'));
const Casestudies = lazy(() => import('../components/iot-section/Casestudies'));
const FAQ = lazy(() => import('../components/iot-section/IotFaq'));
const CtaSection = lazy(() => import('../components/iot-section/IotToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const IotMonitoring = () => {
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
                    <IotTestimonials />
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

export default IotMonitoring;