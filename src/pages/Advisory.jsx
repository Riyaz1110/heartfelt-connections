import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const MSPHero = lazy(() => import('../components/advisory-sections/AdvisoryHero'));
const MSPStats = lazy(() => import('../components/advisory-sections/AdvisoryStats'));
const MSPProblems = lazy(() => import('../components/advisory-sections/AdvisoryProblems'));
const MSPServices = lazy(() => import('../components/advisory-sections/AdvisoryServices'));
const HowItWorks = lazy(() => import('../components/advisory-sections/AdvisoryHowItWorks')); // ← ADD THIS LINE
const WhyAuriseg = lazy(() => import('../components/advisory-sections/AdvisoryWhyAuriseg'));
// const AdvisoryDifferentiators = lazy(() => import('../components/advisory-sections/AdvisoryDifferentiators'));
// const CaseStudies = lazy(() => import('../components/advisory-sections/MSPCaseStudies'));
const FAQ = lazy(() => import('../components/advisory-sections/AdvisoryFaq'));
const CtaSection = lazy(() => import('../components/advisory-sections/AdvisoryCTASection.jsx'));
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