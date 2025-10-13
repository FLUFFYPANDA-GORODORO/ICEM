import React from "react";
import CampusLife from "../../assets/Marque.jpg";

const CampusBeat = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 44h-">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Campus Beat
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl leading-relaxed mb-10">
          From celebrity talks to Lit Fests and interactions with industry
          icons, our campus pulses with energy, big ideas, and unforgettable
          moments — making student life dynamic, buzzing, inspiring, and full of
          meaningful connections & opportunities.
        </p>
      </div>

      {/* ✅ Full-width marquee with true image scroll */}
      <div className="relative w-full overflow-hidden shadow-lg">
        <div className="flex w-[200%] animate-smoothScroll">
          <img src={CampusLife} alt="Campus Life" className="w-full h-auto" />
          <img
            src={CampusLife}
            alt="Campus Life duplicate"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* ✅ Animation Styles */}
      <style>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
