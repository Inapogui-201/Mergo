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


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
            <Routes>
        <Route element={<Layout/>}>

        <Route path="/" element={<Homepages/>} />
        <Route path="/candidatures" element={<Candidatures/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/voting" element={<VotingPage/>} />
        <Route path="/login" element={<LoginPages/>} />
        <Route path="/inscription" element={<RegisterPages/>} />
        
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;