import CandidatesGrid from "../Components/CandidatesGrid";
import HeroSection from "../Components/HeroSection";
import PartnersSection from "../Components/PartnersSection";

const Homepages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <CandidatesGrid />
      <PartnersSection />
    </div>
  );
};

export default Homepages;
