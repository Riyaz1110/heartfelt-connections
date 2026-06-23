import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/program-section/ProgramHero'));
const SocStats = lazy(() => import('../components/program-section/ProgramStatics'));
const SocWhatYouGet = lazy(() => import('../components/program-section/ProgramWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/program-section/ProgramIntegrations'));
const SocEngagementModels = lazy(() => import('../components/program-section/ProgramEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/program-section/ProgramDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/program-section/ProgramProcessTimeline'));
const ProgramTestimonials = lazy(() => import('../components/program-section/ProgramTestimonials'));
const Casestudies = lazy(() => import('../components/program-section/Casestudies'));
const FAQ = lazy(() => import('../components/program-section/ProgramFaq'));
const CtaSection = lazy(() => import('../components/program-section/ProgramToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const ProgramMonitoring = () => {
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
                    <ProgramTestimonials />
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

export default ProgramMonitoring;