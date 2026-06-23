import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/securityarch-section/SecurityarchHero'));
const SocStats = lazy(() => import('../components/securityarch-section/SecurityarchStatics'));
const SocWhatYouGet = lazy(() => import('../components/securityarch-section/SecurityarchWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/securityarch-section/SecurityarchIntegrations'));
const SocEngagementModels = lazy(() => import('../components/securityarch-section/SecurityarchEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/securityarch-section/SecurityarchDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/securityarch-section/SecurityarchProcessTimeline'));
const SecurityarchTestimonials = lazy(() => import('../components/securityarch-section/SecurityarchTestimonials'));
const Casestudies = lazy(() => import('../components/securityarch-section/Casestudies'));
const FAQ = lazy(() => import('../components/securityarch-section/SecurityarchFaq'));
const CtaSection = lazy(() => import('../components/securityarch-section/SecurityarchToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const SecurityarchMonitoring = () => {
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
                    <SecurityarchTestimonials />
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

export default SecurityarchMonitoring;