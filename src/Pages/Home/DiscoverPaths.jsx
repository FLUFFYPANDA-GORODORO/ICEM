import React from "react";

// ✅ Import images
import CompEng from "../../assets/Comp.jpg";
import MechEng from "../../assets/Mech.jpg";
import AidsEng from "../../assets/Entc.jpg";
import EntcEng from "../../assets/AIDS1.jpg";


import ITEng from "../../assets/IT1.jpg";

// ✅ Placeholder (use a simple stock image or blank)
import Placeholder from "../../assets/ICEM_Banner.jpg"; // <-- you can replace this with your own placeholder
// if you don't have one, create a plain gray box as fallback

const DiscoverPaths = () => {
  // ✅ Match images to courses
  const courses = [
    { name: "Computer Engineering", img: CompEng },
    { name: "Mechanical Engineering", img: MechEng },
    { name: "Artificial Intelligence and Data Science", img: AidsEng },
    { name: "Electronics and Telecommunication", img: EntcEng },
    { name: "Information Technology", img: ITEng },
    { name: "MBA", img: Placeholder },
    { name: "MCA", img: Placeholder },
    { name: "M-Tech in Mechanical Engineering", img: Placeholder },
    { name: "M-Tech in Computer Science", img: Placeholder },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Discover Your Path to Success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-44 object-cover group-hover:brightness-75 transition-all duration-300"
              />

              {/* Transparent Overlay Title */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-white font-semibold text-xs whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:underline transition-transform duration-300">
                {course.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
