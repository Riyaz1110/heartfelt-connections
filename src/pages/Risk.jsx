import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/risk-section/RiskHero'));
const SocStats = lazy(() => import('../components/risk-section/RiskStatics'));
const SocWhatYouGet = lazy(() => import('../components/risk-section/RiskWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/risk-section/RiskIntegrations'));
const SocEngagementModels = lazy(() => import('../components/risk-section/RiskEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/risk-section/RiskDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/risk-section/RiskProcessTimeline'));
const RiskTestimonials = lazy(() => import('../components/risk-section/RiskTestimonials'));
const Casestudies = lazy(() => import('../components/risk-section/Casestudies'));
const FAQ = lazy(() => import('../components/risk-section/RiskFaq'));
const CtaSection = lazy(() => import('../components/risk-section/RiskToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const RiskMonitoring = () => {
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
                    <RiskTestimonials />
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

export default RiskMonitoring;