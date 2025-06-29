import React from "react";
import HeroCarousel from "../Components/Hero";
import ServicesSection from "../Components/Services";
import ClientSection from "../Components/Clients";
import ChallengesSection from "../Components/Challenges";
import ApproachSection from "../Components/Approach";
import Industries from "../Components/Industries";
import Testimonials from "../Components/Testimonials";
import Elevate from "../Components/Elevate";
import Footer from "../Components/Footer";
import ExpertAdvise from "../Components/ExpertAdvise";

function Homepage() {
  return (
    <div>
      <HeroCarousel />
      <ServicesSection />
      <ClientSection />
      <ChallengesSection />
      <ApproachSection />
      <ExpertAdvise />
      <Industries />
      <Testimonials />
      <Elevate />
      <Footer />
    </div>
  );
}

export default Homepage;
