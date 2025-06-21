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
    <footer className="bg-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex items-start justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="" />
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
    </footer>
  );
}

export default Footer;
