import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
