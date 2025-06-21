import React from "react";

function Navbar() {
  return (
    <div className="relative z-10">
      <div className="bg-white bg-opacity-95 backdrop-blur-sm mx-4 mt-4 rounded-[8px] !py-[5px] shadow-lg !px-5">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
                <img src="/assets/logo.png" alt="" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 gap-7">
            <a
              href="#"
              className="text-cyan-500 font-regular hover:text-cyan-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 font-regular hover:text-cyan-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 font-regular hover:text-cyan-500 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 font-regular hover:text-cyan-500 transition-colors"
            >
              Contact
            </a>
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
