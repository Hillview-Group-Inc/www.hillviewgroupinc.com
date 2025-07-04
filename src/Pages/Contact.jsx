import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ExpertAdvise from "../Components/ExpertAdvise";
import Industries from "../Components/Industries";
import Elevate from "../Components/Elevate";
import ContactPage from "../Components/ContactUs";

function Contact() {
  return (
    <div className="w-full pt-12">
      <Navbar />
      <ContactPage/>
      <ExpertAdvise />
      <Industries />
      <Elevate />
      <Footer />
    </div>
  );
}

export default Contact;
