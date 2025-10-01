// Navbar.jsx
import React from 'react';
import Logo from '../assets/Logo.png'; // Update this path

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 shadow-sm font-sans text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-5 py-2 bg-gray-50 border-b border-gray-200 text-sm bg-zinc-500">
        {/* Logo on Left Corner */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20" />
        </div>

        {/* Top Bar Elements and Admissions Helpline */}
        <div className="flex items-center gap-6">
          {/* Top Bar Links */}
          <div className="flex items-center gap-2">
            <a href="/" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Home</a>
            <span className="text-gray-500">|</span>
            <a href="/alumni" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Alumni</a>
            <span className="text-gray-500">|</span>
            <a href="/request-document" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Request Document</a>
            <span className="text-gray-500">|</span>
            <a href="/careers" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Careers</a>
            <span className="text-gray-500">|</span>
            <a href="/chalkerp" className="text-gray-800 font-medium hover:text-blue-600 no-underline">ChalkERP</a>
            <span className="text-gray-500">|</span>
            <a href="/research-startup" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Research Start-up</a>
            <span className="text-gray-500">|</span>
            <a href="/placement-cell" className="text-gray-800 font-medium hover:text-blue-600 no-underline">Placement Cell</a>
          </div>

          {/* Admissions Helpline Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
            Admissions Helpline
          </button>
        </div>
      </div>

      {/* Main Navigation - Full Width */}
      <div className="w-full px-5 py-4 text-white">
        <div className="flex justify-center items-center">
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="/about-us" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">About Us</a>
            <a href="/institutions" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Our Institutions</a>
            <a href="/undergraduate" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Undergraduate Programs</a>
            <a href="/postgraduate" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Postgraduate Programs</a>
            <a href="/global" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Global Programs</a>
            <a href="/phd" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">PhD Programs</a>
            <a href="/online" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Online Programs</a>
            <a href="/centres" className="text-white font-medium hover:text-blue-600 no-underline text-sm whitespace-nowrap transition-colors">Centres of Excellence</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;