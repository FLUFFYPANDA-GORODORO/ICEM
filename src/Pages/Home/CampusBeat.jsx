import React from "react";

const CampusBeat = () => {
  return (
    <div className="bg-white py-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
            >
              [ Image {index + 1} Here ]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusBeat;