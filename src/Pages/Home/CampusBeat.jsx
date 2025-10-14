import React from "react";
import CampusLife from "../../assets/newnewMarque.jpg";

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
          moments — making student life dynamic, buzzing, inspiring, and full of
          meaningful connections & opportunities.
        </p>
      </div>

      {/* ✅ Horizontal marquee for wide image */}
      <div className="relative w-full  overflow-hidden">
        <div className="flex w-[1000%] h-[60vh] animate-smoothScroll">
          {/* Two identical images for seamless looping */}
          <img
            src={CampusLife}
            alt="Campus Life"
            className="w-1/2 h-auto object-cover"
          />
          <img
            src={CampusLife}
            alt="Campus Life duplicate"
            className="w-1/2 h-auto object-cover"
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
