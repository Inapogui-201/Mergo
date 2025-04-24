import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import Homepages from "./Pages/Homepages";
import Candidatures from "./Pages/Candidates";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import VotingPage from "./Pages/VotingPage";
import LoginPages from "./Pages/LoginPages";
import RegisterPages from "./Pages/RegisterPages";
import Index from "./admin/pages/Index";
import DashboardLayout from "./admin/layout/DashboardLayout";
import CandidatePage from "./admin/pages/CandidatePage/CandidatePage";
import NewCandidate from "./admin/pages/CandidatePage/NewCandidate";
import HowToVote from "./Pages/Help/HowToVote";
import PrivacyPolicy from "./Pages/Help/PrivacyPolicy";
import TermsOfUse from "./Pages/Help/TermsOfUse";
import  NotFound  from "./Pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepages />} />
          <Route path="/candidates" element={<Candidatures />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/inscription" element={<RegisterPages />} />
          <Route path="/help/how-to-vote" element={<HowToVote />} />
          <Route path="/help/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound/>} />
        </Route>

        {/* Admin Routes */}
        {/* 
        
          <Route element={<DashboardLayout />}>
          <Route path="/wp-admin" element={<Index />} />
          <Route path="/wp-admin/candidates" element={<CandidatePage />} />
          <Route path="/wp-admin/candidates/add" element={<NewCandidate />} />
        </Route>
        */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;