import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/maturity-section/MaturityHero'));
const SocStats = lazy(() => import('../components/maturity-section/MaturityStatics'));
const SocWhatYouGet = lazy(() => import('../components/maturity-section/MaturityWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/maturity-section/MaturityIntegrations'));
const SocEngagementModels = lazy(() => import('../components/maturity-section/MaturityEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/maturity-section/MaturityDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/maturity-section/MaturityProcessTimeline'));
const MaturityTestimonials = lazy(() => import('../components/maturity-section/MaturityTestimonials'));
const Casestudies = lazy(() => import('../components/maturity-section/Casestudies'));
const FAQ = lazy(() => import('../components/maturity-section/MaturityFaq'));
const CtaSection = lazy(() => import('../components/maturity-section/MaturityToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const MaturityMonitoring = () => {
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
                    <MaturityTestimonials />
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

export default MaturityMonitoring;