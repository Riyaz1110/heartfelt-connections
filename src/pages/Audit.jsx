import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/audit-section/AuditHero'));
const SocStats = lazy(() => import('../components/audit-section/AuditStatics'));
const SocWhatYouGet = lazy(() => import('../components/audit-section/AuditWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/audit-section/AuditIntegrations'));
const SocEngagementModels = lazy(() => import('../components/audit-section/AuditEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/audit-section/AuditDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/audit-section/AuditProcessTimeline'));
const AuditTestimonials = lazy(() => import('../components/audit-section/AuditTestimonials'));
const Casestudies = lazy(() => import('../components/audit-section/Casestudies'));
const FAQ = lazy(() => import('../components/audit-section/AuditFaq'));
const CtaSection = lazy(() => import('../components/audit-section/AuditToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const AuditMonitoring = () => {
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
                    <AuditTestimonials />
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

export default AuditMonitoring;