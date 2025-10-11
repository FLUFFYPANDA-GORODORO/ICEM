import React from "react";
import CampusLife from "../../assets/CampusLife.jpg";

const CampusBeat = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Campus Beat
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl leading-relaxed mb-10">
          From celebrity talks to Lit Fests and interactions with industry
          icons, our campus pulses with energy, big ideas, and unforgettable
          moments — making student life dynamic, buzzing, inspiring, and full
          of meaningful connections & opportunities.
        </p>
      </div>

      {/* Moving Background Section (Full Width) */}
      <div className="relative w-screen h-96 overflow-hidden shadow-lg">
        <div
          className="absolute top-0 left-0 w-[200%] h-full bg-cover bg-center bg-no-repeat animate-slide"
          style={{ backgroundImage: `url(${CampusLife})` }}
        ></div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
