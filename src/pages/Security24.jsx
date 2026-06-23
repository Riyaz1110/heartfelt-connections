import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/24-section/Security24Hero'));
const SocStats = lazy(() => import('../components/24-section/Security24Statics'));
const SocWhatYouGet = lazy(() => import('../components/24-section/Security24WhatYouGet'));
const SocIntegrations = lazy(() => import('../components/24-section/Security24Integrations'));
const SocEngagementModels = lazy(() => import('../components/24-section/Security24EngagementModels'));
const SocDifferentiators = lazy(() => import('../components/24-section/Security24Differentiators'));
const SocProcessTimeline = lazy(() => import('../components/24-section/Security24ProcessTimeline'));
const SecurityTestimonials = lazy(() => import('../components/24-section/Security24Testimonials'));
const Casestudies = lazy(() => import('../components/24-section/Casestudies'));
const FAQ = lazy(() => import('../components/24-section/Security24Faq'));
const CtaSection = lazy(() => import('../components/24-section/Security24Today'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const security24 = () => {
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
                    <SecurityTestimonials />
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

export default security24;