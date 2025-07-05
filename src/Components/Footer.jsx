import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Thank you for joining our membership with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white py-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded"></div>
              <div className="text-xl font-bold text-gray-800">HILLVIEW</div>
              <div className="text-sm text-gray-500">GROUP INC</div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            <h4 className="text-gray-800 text-lg font-semibold mb-4">Join our membership</h4>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Join
              </button>
            </div>
          </div>

          {/* Navigation Links - 3 Column Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Site Map */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Site map</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Home</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Services</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Terms & Condition</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors text-sm">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Large HILLVIEW Text Background */}
          <div className="mb-6">
            <div className="text-6xl font-bold text-gray-100 select-none pointer-events-none text-center">
              HILLVIEW
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © Copyright 2025 • All Rights Reserved
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded"></div>
              <div className="text-2xl font-bold text-gray-800">HILLVIEW</div>
              <div className="text-base text-gray-500">GROUP INC</div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8 max-w-md mx-auto">
            <h4 className="text-gray-800 text-lg font-semibold mb-4 text-center">Join our membership</h4>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Join
              </button>
            </div>
          </div>

          {/* Navigation Links - 3 Column Grid */}
          <div className="grid grid-cols-3 gap-8 mb-8 max-w-2xl mx-auto">
            {/* Site Map */}
            <div className="text-center">
              <h3 className="text-gray-500 text-sm font-medium mb-4">Site map</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center">
              <h3 className="text-gray-500 text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-gray-500 text-sm font-medium mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Large HILLVIEW Text Background */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-gray-100 select-none pointer-events-none text-center">
              HILLVIEW
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © Copyright 2025 • All Rights Reserved
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Main Footer Content */}
          <div className="flex items-start justify-between gap-8 mb-12">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded"></div>
                <div className="text-2xl font-bold text-gray-800">HILLVIEW</div>
                <div className="text-base text-gray-500">GROUP INC</div>
              </div>
            </div>

            {/* Site Map */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Site map</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-4">Contact</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Support</a></li>
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <div>
                <h4 className="text-gray-800 text-lg font-semibold mb-4">Join our membership</h4>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Large HILLVIEW Text Background */}
          <div className='flex items-center justify-between'>
            <div className="mb-8">
              <div className="text-8xl md:text-9xl lg:text-[150px] font-bold text-gray-100 select-none pointer-events-none">
                HILLVIEW
              </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-end">
              <p className="text-gray-600 text-sm">
                © Copyright 2025 • All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;