import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Video,
  MapPin,
  Menu,
  RotateCcw,
} from "lucide-react";

const FixedActionBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2  -translate-y-1/2 z-[99999] flex items-center">
      {/* Main container */}
      <div
        className="flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Hamburger Button with animated light border */}
        <div className="relative group">
          {/* Outer animated light border */}
          <div className="absolute inset-0 rounded-r-md bg-gradient-to-r from-transparent via-white to-transparent animate-border-move"></div>

          {/* Inner button (actual hamburger) */}
          <button
            title="Menu"
            className="relative bg-primary hover:brightness-110 p-4 shadow-md transition shrink-0 z-10 rounded-r-md overflow-hidden"
          >
            <Menu size={22} className="text-white relative z-10" />
          </button>
        </div>

        {/* Expanding Icons container */}
        <div
          className={`flex items-center gap-2 ml-3 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5 pointer-events-none"
          }`}
        >
          <div className="bg-primary px-3 py-2 shadow-lg flex items-center gap-3 rounded-md">
            {/* 360° View */}
            <a
              href="#"
              title="360° View"
              className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
            >
              <RotateCcw size={20} className="text-primary" />
            </a>

            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* Call */}
            <a
              href="tel:+910000000000"
              title="Call Us"
              className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
            >
              <Phone size={20} className="text-primary" />
            </a>

            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
            >
              <MessageCircle size={20} className="text-primary" />
            </a>

            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* Video */}
            <a
              href="#"
              title="Campus Video"
              className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
            >
              <Video size={20} className="text-primary" />
            </a>

            <span className="w-[1px] h-6 bg-white/40"></span>

            {/* Location */}
            <a
              href="https://maps.google.com?q=Indira+College+of+Engineering+and+Management"
              target="_blank"
              rel="noopener noreferrer"
              title="Find Us"
              className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
            >
              <MapPin size={20} className="text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind animation styles */}
      <style>{`
        @keyframes border-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-border-move {
          background-size: 200% 200%;
          animation: border-move 2s linear infinite;
          opacity: 1;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.3));
        }
      `}</style>
    </div>
  );
};

export default FixedActionBar;
