import React from "react";
import Comp1 from "../../assets/Comp1.jpg"; // ✅ import your image here

const DiscoverPaths = () => {
  const courses = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Artificial Intelligence and Data Science",
    "Electronics and Telecommunication",
    "First Year Engineering",
    "Information Technology",
    "Integrated MBA (BBA + MBA)",
    "Integrated MBA (BCA + MCA)",
    "MBA",
    "MCA",
    "M-Tech in Mechanical Engineering",
    "M-Tech in Computer Science",
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Discover Your Path to Success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <img
                src={Comp1}
                alt={course}
                className="h-44 w-full object-cover group-hover:brightness-75 transition-all duration-300"
              />

              {/* Transparent Overlay Title */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-white font-semibold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300">
                {course}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
