import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer';
import ChatWidget from './components/ChatWidget';

// Scrolls to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};
import Home from './pages/Home';
import TalkToExpert from './pages/TalkToExpert';
import ForMSPsPage from './pages/ForMSPsPage';
import SOCAugmentation from './pages/SOCAugmentation';
import Aboutus from './pages/Aboutus';
import IndustriesPage from './pages/IndustriesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import CaseStudyInnerPage1 from './pages/CaseStudyInnerPage1';
import BlogsPage from './pages/BlogsPage';
import BlogInnerPage1 from './pages/BlogInnerPage1';
import Careerpage from './pages/Careerpage';
import CertificationCompliance from './pages/Certification';
import TrainingVirtualLab from './pages/TrainingVirtualLab';
import UnderAttack from './pages/UnderAttack'; // ← ADDED
import ThreatMonitoring from './pages/ThreatMonitoring';
import IncidentResponse from './pages/IncidentResponse';
import WhiteLabel from './pages/WhiteLabel';
import Offshore from './pages/Offshore';
import Managedsecurity from './pages/ManagedSecurity';
import Advisory from './pages/Advisory';
import GRC from './pages/GRC';
import Security from './pages/Security';
import ContactUs from './pages/ContactUs';
import Security24 from './pages/Security24';
import Mdr from './pages/Mdr';
import Vulnerability from './pages/Vulnerability';
import Penetration from './pages/Penetration';
import Mobile from './pages/Mobile';
import Cloud from './pages/Cloud';
import Social from './pages/Social';
import Source from './pages/Source';
import Ai from './pages/Ai';
import Iot from './pages/Iot';
import Program from './pages/Program';
import Vciso from './pages/Vciso';
import Maturity from './pages/Maturity';
import Tool from './pages/Tool';
import Securityarch from './pages/Securityarch';
import Risk from './pages/Risk';
import Audit from './pages/Audit';
import FinancialPage from './pages/FinancialPage';
import ManufacturingPage from './pages/ManufacturingPage';
import TechnologyPage from './pages/TechnologyPage';
import GovernmentPage from './pages/GovernmentPage';
import Regulatory from './pages/Regulatory';
import CaseStudyInnerPage2 from './pages/CaseStudyInnerPage2';
import CaseStudyInnerPage3 from './pages/CaseStudyInnerPage3';
import CaseStudyInnerPage4 from './pages/CaseStudyInnerPage4';
import CaseStudyInnerPage5 from './pages/CaseStudyInnerPage5';
import BlogInnerPage2 from './pages/BlogInnerPage2';
import BlogInnerPage3 from './pages/BlogInnerPage3';
import BlogInnerPage4 from './pages/BlogInnerPage4';
import BlogInnerPage5 from './pages/BlogInnerPage5';
import BlogInnerPage6 from './pages/BlogInnerPage6';
import BlogInnerPage7 from './pages/BlogInnerPage7';
import BlogInnerPage8 from './pages/BlogInnerPage8';
import BlogInnerPage9 from './pages/BlogInnerPage9';
import BlogInnerPage10 from './pages/BlogInnerPage10';
import BlogInnerPage11 from './pages/BlogInnerPage11';
import BlogInnerPage12 from './pages/BlogInnerPage12';
import Codelivery from './pages/Codelivery';
{/* ← ADD THIS */ }


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full pt-16 md:pt-20">
          <Routes>
            {/* Home & Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />

            {/* Placeholder Pages */}
            <Route path="/careers" element={<Careerpage />} />  {/* ← REPLACE THIS */}
            <Route path="/contact-us" element={<div className="pt-32 text-center text-white">Contact Page</div>} />
            <Route path="/report-attack" element={<div className="pt-32 text-center text-white">Report Attack Page</div>} />
            <Route path="/services" element={<div className="pt-32 text-center text-white">Services Page</div>} />
            <Route path="/solutions" element={<div className="pt-32 text-center text-white">Solutions Page</div>} />

            {/* Industries & Success Stories */}
            <Route path="/industries/healthcare" element={<IndustriesPage />} />
            <Route path="/industries/financial" element={<FinancialPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            <Route path="/industries/technology" element={<TechnologyPage />} />
            <Route path="/industries/government" element={<GovernmentPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />

            {/* Case Study Inner Page */}
            <Route path="/success-stories/1" element={<CaseStudyInnerPage1 />} />
            <Route path="/success-stories/2" element={<CaseStudyInnerPage2 />} />
            <Route path="/success-stories/3" element={<CaseStudyInnerPage3 />} />
            <Route path="/success-stories/4" element={<CaseStudyInnerPage4 />} />
            <Route path="/success-stories/5" element={<CaseStudyInnerPage5 />} />

            {/* Resources Routes */}
            <Route path="/resources" element={<div className="pt-32 text-center text-white">Resources Page</div>} />
            <Route path="/resources/blogs" element={<BlogsPage />} />
            <Route path="/resources/blogs/1" element={<BlogInnerPage1 />} />
            <Route path="/resources/blogs/2" element={<BlogInnerPage2 />} />
            <Route path="/resources/blogs/3" element={<BlogInnerPage3 />} />
            <Route path="/resources/blogs/4" element={<BlogInnerPage4 />} />
            <Route path="/resources/blogs/5" element={<BlogInnerPage5 />} />
            <Route path="/resources/blogs/6" element={<BlogInnerPage6 />} />
            <Route path="/resources/blogs/7" element={<BlogInnerPage7 />} />
            <Route path="/resources/blogs/8" element={<BlogInnerPage8 />} />
            <Route path="/resources/blogs/9" element={<BlogInnerPage9 />} />
            <Route path="/resources/blogs/10" element={<BlogInnerPage10 />} />
            <Route path="/resources/blogs/11" element={<BlogInnerPage11 />} />
            <Route path="/resources/blogs/12" element={<BlogInnerPage12 />} />


            <Route path="/resources/certification" element={<CertificationCompliance />} />
            <Route path="/resources/training" element={<TrainingVirtualLab />} />



            {/* Services & MSP Pages */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/talk-to-experts" element={<TalkToExpert />} />
            <Route path="/services/for-msps" element={<ForMSPsPage />} />
            <Route path="/services/soc-augmentation" element={<SOCAugmentation />} />
            <Route path="/services/threat-monitoring" element={<ThreatMonitoring />} />
            <Route path="/services/incident-response" element={<IncidentResponse />} />
            <Route path="/services/white-label-security" element={<WhiteLabel />} />
            <Route path="/services/offshore-teams" element={<Offshore />} />
            <Route path="/services/co-delivery" element={<Codelivery />} />
            <Route path="/under-attack" element={<UnderAttack />} />

            {/* Security Testing & Assurance Pages */}
            <Route path="/services/security-testing-assurance" element={<Security />} />
            <Route path="/services/vulnerability-assessment" element={<Vulnerability />} />
            <Route path="/services/penetration-testing" element={<Penetration />} />
            <Route path="/services/mobile-app-security" element={<Mobile />} />
            <Route path="/services/cloud-security-audit" element={<Cloud />} />
            <Route path="/services/social-engineering" element={<Social />} />
            <Route path="/services/source-code-review" element={<Source />} />
            <Route path="/services/ai-security" element={<Ai />} />
            <Route path="/services/ot-iot-security" element={<Iot />} />

            {/* Managed Security Pages */}
            <Route path="/services/managed-security" element={<Managedsecurity />} />
            <Route path="/services/247-monitoring" element={<Security24 />} />
            <Route path="/services/mdr" element={<Mdr />} />


            {/* Advisory Pages */}
            <Route path="/services/advisory-and-enablement" element={<Advisory />} />
            <Route path="/services/program-advisory" element={<Program />} />
            <Route path="/services/vciso" element={<Vciso />} />
            <Route path="/services/maturity-assessments" element={<Maturity />} />
            <Route path="/services/tool-selection" element={<Tool />} />
            <Route path="/services/security-architecture" element={<Securityarch />} />

            {/* GRC Pages */}
            <Route path="/services/grc-and-compliance" element={<GRC />} />
            <Route path="/services/risk-assessments" element={<Risk />} />
            <Route path="/services/regulatory-compliance" element={<Regulatory />} />
            <Route path="/services/audit-readiness" element={<Audit />} />
            {/* 404 Page */}
            <Route path="*" element={<div className="pt-32 px-4 text-center text-white">This page is coming soon.</div>} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;