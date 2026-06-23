import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const FinancialHero = lazy(() => import('../components/financial/FinancialHero'));
const FinancialStats = lazy(() => import('../components/financial/FinancialStats'));
const FinancialProblem = lazy(() => import('../components/financial/FinancialProblem'));
const FinancialSolutions = lazy(() => import('../components/financial/FinancialSolutions'));
const FinancialCompliance = lazy(() => import('../components/financial/FinancialCompliance'));
const FinancialTargetAudience = lazy(() => import('../components/financial/FinancialTargetAudience'));
const FinancialCaseStudies = lazy(() => import('../components/financial/FinancialCaseStudies'));
const FinancialTestimonials = lazy(() => import('../components/financial/FinancialTestimonials'));
const WhyAuriseg = lazy(() => import('../components/financial/WhyAuriseg'));
const FAQ = lazy(() => import('../components/financial/Faq'));
const SocWhatYouGet = lazy(() => import('../components/financial/SocWhatYouGet'));
const TalkToExpert = lazy(() => import('../components/financial/TalkToExpert'));

// Loading fallback component
const SectionLoader = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const FinancialPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <Suspense fallback={<SectionLoader />}>
                <FinancialHero />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialStats />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialProblem />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialSolutions />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialCompliance />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialTargetAudience />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialCaseStudies />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FinancialTestimonials />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhyAuriseg />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <SocWhatYouGet />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TalkToExpert />
            </Suspense>
        </div>
    );
};

export default FinancialPage;