import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-25">
      <div
        className={`bg-white bg-opacity-95 backdrop-blur-sm mx-2 sm:mx-4 mt-4 rounded-[8px] py-2 sm:py-[5px] ${
          isHomePage ? "" : "border border-[#25AAE1]"
        } shadow-lg px-3 sm:px-5`}
      >
        <div className="flex items-center justify-between px-2 sm:px-6 py-2 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-regular transition-colors text-sm xl:text-base ${
                  location.pathname === link.to
                    ? "text-cyan-500"
                    : "text-gray-700 hover:text-cyan-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden sm:block bg-cyan-400 hover:bg-cyan-500 text-white px-4 sm:px-8 xl:px-12 py-2 rounded-lg font-medium transition-colors text-sm xl:text-base flex-shrink-0">
            Let's talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 mt-2 pt-4 pb-4">
            <nav className="flex flex-col space-y-4 px-2 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-regular transition-colors text-base ${
                    location.pathname === link.to
                      ? "text-cyan-500"
                      : "text-gray-700 hover:text-cyan-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="sm:hidden bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-colors text-base mt-4 w-full">
                Let's talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;