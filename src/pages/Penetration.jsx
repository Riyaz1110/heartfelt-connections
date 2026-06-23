import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/penetration-section/PenetrationHero'));
const SocStats = lazy(() => import('../components/penetration-section/PenetrationStatics'));
const SocWhatYouGet = lazy(() => import('../components/penetration-section/PenetrationWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/penetration-section/PenetrationIntegrations'));
const SocEngagementModels = lazy(() => import('../components/penetration-section/PenetrationEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/penetration-section/PenetrationDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/penetration-section/PenetrationProcessTimeline'));
const PenetrationTestimonials = lazy(() => import('../components/penetration-section/PenetrationTestimonials'));
const Casestudies = lazy(() => import('../components/penetration-section/Casestudies'));
const FAQ = lazy(() => import('../components/penetration-section/PenetrationFaq'));
const CtaSection = lazy(() => import('../components/penetration-section/PenetrationToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const PenetrationMonitoring = () => {
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
                    <PenetrationTestimonials />
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

export default PenetrationMonitoring;