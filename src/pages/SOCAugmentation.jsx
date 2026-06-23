import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const SocHero = lazy(() => import('../components/soc-sections/SocHero'));
const SocStats = lazy(() => import('../components/soc-sections/Socstatics'));
const SocWhatYouGet = lazy(() => import('../components/soc-sections/SocWhatYouGet'));
const SocIntegrations = lazy(() => import('../components/soc-sections/SocIntegrations'));
const SocEngagementModels = lazy(() => import('../components/soc-sections/SocEngagementModels'));
const SocDifferentiators = lazy(() => import('../components/soc-sections/SocDifferentiators'));
const SocProcessTimeline = lazy(() => import('../components/soc-sections/SocProcessTimeline'));
const SocTestimonials = lazy(() => import('../components/soc-sections/SocTestimonials'));
const Casestudies = lazy(() => import('../components/soc-sections/Casestudies'));
const FAQ = lazy(() => import('../components/soc-sections/SocFaq'));
const CtaSection = lazy(() => import('../components/soc-sections/SOCToday'));
// Loading fallback component
const SectionLoader = () => (
   <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
   </div>
);

const SOCAugmentation = () => {
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
               <SocTestimonials />
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

export default SOCAugmentation;