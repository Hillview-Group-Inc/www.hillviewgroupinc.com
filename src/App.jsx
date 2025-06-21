import "./App.css";
import ApproachSection from "./Components/Approach.jsx";
import ChallengesSection from "./Components/Challenges.jsx";
import ClientSection from "./Components/Clients";
import Elevate from "./Components/Elevate.jsx";
import ExpertAdvise from "./Components/ExpertAdvise.jsx";
import Footer from "./Components/Footer.jsx";
import HeroCarousel from "./Components/Hero";
import Hero from "./Components/Hero";
import Industries from "./Components/Industries.jsx";
import ServicesSection from "./Components/Services";
import Testimonials from "./Components/Testimonials.jsx";

function App() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <ClientSection/>
      <ChallengesSection/>
      <ApproachSection/>
      <ExpertAdvise/>
      <Industries/>
      <Testimonials/>
      <Elevate/>
      <Footer/>
    </>
  );
}

export default App;
