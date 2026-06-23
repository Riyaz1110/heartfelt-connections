import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/tool-section/ToolHero'));
const SocStats = lazy(() => import('../components/tool-section/ToolStatics'));
const SocWhatYouGet = lazy(() => import('../components/tool-section/ToolWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/tool-section/ToolIntegrations'));
const SocEngagementModels = lazy(() => import('../components/tool-section/ToolEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/tool-section/ToolDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/tool-section/ToolProcessTimeline'));
const ToolTestimonials = lazy(() => import('../components/tool-section/ToolTestimonials'));
const Casestudies = lazy(() => import('../components/tool-section/Casestudies'));
const FAQ = lazy(() => import('../components/tool-section/ToolFaq'));
const CtaSection = lazy(() => import('../components/tool-section/ToolToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const ToolMonitoring = () => {
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
                    <ToolTestimonials />
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

export default ToolMonitoring;