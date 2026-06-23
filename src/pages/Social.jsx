import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/social-section/SocialHero'));
const SocStats = lazy(() => import('../components/social-section/SocialStatics'));
const SocWhatYouGet = lazy(() => import('../components/social-section/SocialWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/social-section/SocialIntegrations'));
const SocEngagementModels = lazy(() => import('../components/social-section/SocialEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/social-section/SocialDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/social-section/SocialProcessTimeline'));
const SocialTestimonials = lazy(() => import('../components/social-section/SocialTestimonials'));
const Casestudies = lazy(() => import('../components/social-section/Casestudies'));
const FAQ = lazy(() => import('../components/social-section/SocialFaq'));
const CtaSection = lazy(() => import('../components/social-section/SocialToday'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const SocialMonitoring = () => {
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
                    <SocialTestimonials />
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

export default SocialMonitoring;