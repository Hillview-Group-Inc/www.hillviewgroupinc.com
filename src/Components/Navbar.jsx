import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="relative z-10">
      <div
        className={`bg-white bg-opacity-95 backdrop-blur-sm mx-4 mt-4 rounded-[8px] !py-[5px] ${
          isHomePage ? "" : "border border-[#25AAE1]"
        } shadow-lg !px-5`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 gap-7">
            <Link
              to="/"
              className={`font-regular transition-colors ${
                location.pathname === "/"
                  ? "text-cyan-500"
                  : "text-gray-700 hover:text-cyan-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-regular transition-colors ${
                location.pathname === "/services"
                  ? "text-cyan-500"
                  : "text-gray-700 hover:text-cyan-500"
              }`}
            >
              Services
            </Link>
            <Link
              to="/about-us"
              className={`font-regular transition-colors ${
                location.pathname === "/about-us"
                  ? "text-cyan-500"
                  : "text-gray-700 hover:text-cyan-500"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-regular transition-colors ${
                location.pathname === "/contact"
                  ? "text-cyan-500"
                  : "text-gray-700 hover:text-cyan-500"
              }`}
            >
              Contact
            </Link>
          </nav>

          <span className="bg-cyan-400 hover:bg-cyan-500 text-white !px-12 !py-2 rounded-lg font-medium transition-colors">
            Let's talk
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
