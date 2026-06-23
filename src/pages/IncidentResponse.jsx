import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/incident-section/IncidentHero'));
const SocStats = lazy(() => import('../components/incident-section/IncidentStatics'));
const SocWhatYouGet = lazy(() => import('../components/incident-section/IncidentWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/incident-section/IncidentIntegrations'));
const SocEngagementModels = lazy(() => import('../components/incident-section/IncidentEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/incident-section/IncidentDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/incident-section/IncidentProcessTimeline'));
const IncidentTestimonials = lazy(() => import('../components/incident-section/IncidentTestimonials'));
const Casestudies = lazy(() => import('../components/incident-section/Casestudies'));
const FAQ = lazy(() => import('../components/incident-section/IncidentFaq'));
const CtaSection = lazy(() => import('../components/incident-section/IncidentToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const IncidentResponse = () => {
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
                    <IncidentTestimonials />
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

export default IncidentResponse;