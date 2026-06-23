import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const MSPHero = lazy(() => import('../components/grc-sections/GRCHero'));
const MSPStats = lazy(() => import('../components/grc-sections/GRCStats'));
const MSPProblems = lazy(() => import('../components/grc-sections/GRCProblems'));
const MSPServices = lazy(() => import('../components/grc-sections/GRCServices'));
const HowItWorks = lazy(() => import('../components/grc-sections/GRCHowItWorks')); // ← ADD THIS LINE
const WhyAuriseg = lazy(() => import('../components/grc-sections/GRCWhyAuriseg'));
// const GRCDifferentiators = lazy(() => import('../components/grc-sections/GRCDifferentiators'));
// const CaseStudies = lazy(() => import('../components/grc-sections/MSPCaseStudies'));
const FAQ = lazy(() => import('../components/grc-sections/GRCFaq'));
const CtaSection = lazy(() => import('../components/grc-sections/GRCCTASection.jsx'));
// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const managedsecurity = () => {
    return (
        <>
            <div className="bg-dark min-h-screen">
                {/* Hero Section */}
                <Suspense fallback={<SectionLoader />}>
                    <MSPHero />
                </Suspense>

                <div className="w-full">
                    {/* Stats Section - 4 boxes with numbers */}
                    <Suspense fallback={<SectionLoader />}>
                        <MSPStats />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <MSPProblems />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <MSPServices />
                    </Suspense>
                </div>
            </div>
            <div className="bg-white">
                <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
                    <Suspense fallback={<SectionLoader />}>
                        <WhyAuriseg />
                    </Suspense>
                </div>
                <div className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        < HowItWorks />
                    </Suspense>
                    {/* <Suspense fallback={<SectionLoader />}>
                    < ManagedSecurityDifferentiators />
                </Suspense> */}
                    {/* <Suspense fallback={<SectionLoader />}>
                    < CaseStudies />
                </Suspense> */}
                    <Suspense fallback={<SectionLoader />}>
                        < FAQ />
                    </Suspense>
                </div>
            </div>
            <div className="bg-dark">
                <div className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        < CtaSection />
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default managedsecurity;