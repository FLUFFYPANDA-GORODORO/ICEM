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
      <div className="flex items-center">
        {/* Hamburger Button with glowing animated border */}
        <div
          className="relative group p-[2px] rounded-md bg-gradient-to-r from-[#00e5ff] via-[#ff00ea] to-[#00e5ff] bg-[length:200%_100%] animate-glow-border transition-all duration-500"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Button itself */}
          <button
            title="Menu"
            className="relative flex items-center justify-center bg-[#003c84] text-white p-4 rounded-md shadow-lg hover:brightness-110 transition-all duration-300"
          >
            <Menu size={22} />
          </button>

          {/* Expanding Icons container (only visible when hovering the button) */}
          <div
            className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 flex items-center gap-2 transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5 pointer-events-none"
            }`}
          >
            <div className="bg-[#003c84] px-3 py-2 shadow-lg flex items-center gap-3 rounded-md">
              {/* 360° View */}
              <a
                href="#"
                title="360° View"
                className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
              >
                <RotateCcw size={20} className="text-[#003c84]" />
              </a>

              <span className="w-[1px] h-6 bg-white/40"></span>

              {/* Call */}
              <a
                href="tel:+910000000000"
                title="Call Us"
                className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
              >
                <Phone size={20} className="text-[#003c84]" />
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
                <MessageCircle size={20} className="text-[#003c84]" />
              </a>

              <span className="w-[1px] h-6 bg-white/40"></span>

              {/* Video */}
              <a
                href="#"
                title="Campus Video"
                className="bg-white hover:bg-gray-100 p-2 rounded-full border border-white transition"
              >
                <Video size={20} className="text-[#003c84]" />
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
                <MapPin size={20} className="text-[#003c84]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🌈 Glowing Border Animation Styles */}
      <style>{`
        @keyframes glow-border {
          0% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 15px rgba(255, 0, 234, 0.6);
          }
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
        }

        .animate-glow-border {
          animation: glow-border 3s ease-in-out infinite;
          filter: drop-shadow(0 0 5px rgba(0, 229, 255, 0.5));
        }
      `}</style>
    </div>
  );
};

export default FixedActionBar;
