import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assets/hero1.png",
      alt: "Woman working on laptop with a smile",
    },
    {
      id: 2,
      image: "/assets/hero2.png",
      alt: "Business team in modern office",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Fallback */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`w-full h-full bg-gray-700`}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${slide.image}`);
                  e.target.style.backgroundColor = "#374151";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.innerHTML = `<div style="color: white; text-align: center; padding: 20px;">
                    <div>Image not found</div>
                    <div style="font-size: 12px; margin-top: 10px;">${slide.image}</div>
                  </div>`;
                }}
                onLoad={() => console.log(`Successfully loaded: ${slide.image}`)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <div className="pt-6 sm:pt-8 md:pt-12">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex mt-20 md:mt-0 items-start md:items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left max-w-6xl">
          <div className="inline-block bg-[#8DC63F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            BUSINESS & SOLUTION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 sm:mb-6 leading-tight">
            Helping People & Businesses
            <br />
            thrive in the Digital Age
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-regular text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Delivering bespoke, outcome-focused solutions that enhance
            workflows, augment productivity and expedite corporate expansion.
          </p>

          <div className="flex flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto md:mx-0">
            <button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-colors">
              Let's talk
            </button>
            <button className="flex-1 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-cyan-400 w-6 sm:w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;