import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/vciso-section/VcisoHero'));
const SocStats = lazy(() => import('../components/vciso-section/VcisoStatics'));
const SocWhatYouGet = lazy(() => import('../components/vciso-section/VcisoWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/vciso-section/VcisoIntegrations'));
const SocEngagementModels = lazy(() => import('../components/vciso-section/VcisoEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/vciso-section/VcisoDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/vciso-section/VcisoProcessTimeline'));
const VcisoTestimonials = lazy(() => import('../components/vciso-section/VcisoTestimonials'));
const Casestudies = lazy(() => import('../components/vciso-section/Casestudies'));
const FAQ = lazy(() => import('../components/vciso-section/VcisoFaq'));
const CtaSection = lazy(() => import('../components/vciso-section/VcisoToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const VcisoMonitoring = () => {
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
                    <VcisoTestimonials />
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

export default VcisoMonitoring;