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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full h-auto overflow-hidden pb-[250px]"
      style={{ paddingLeft: "100px", paddingRight: "100px" }}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
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
        ))}
      </div>

      {/* Navigation Header with pt-48px */}
      <div className="!pt-12">
        <Navbar />
      </div>

      {/* Hero Content with padding */}
      <div
        className="relative z-10 h-auto w-full flex items-start justify-start mt-[187px]"
      >
        <div className="px-6">
          <div className="">
            <div className="inline-block bg-[#8DC63F] text-white !px-4 !py-2 rounded-sm text-sm font-medium mb-6">
              BUSINESS & SOLUTION
            </div>

            <h1 className="!w-[975px] text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
              Helping People & Businesses
              <br />
              thrive in the Digital Age
            </h1>

            <p className="text-xl font-regular  text-gray-200 !mb-8 max-w-2xl leading-relaxed">
              Delivering bespoke, outcome-focused solutions that enhance
              workflows, augment productivity and expedite corporate expansion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Let's talk
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-cyan-400 w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
