import React from "react";
import { Link } from "react-router-dom";

// ✅ Import images
import CompEng from "../../assets/Comp.jpg";
import MechEng from "../../assets/Mech.jpg";
import AidsEng from "../../assets/Entc.jpg";
import EntcEng from "../../assets/AIDS1.jpg";
import ITEng from "../../assets/IT1.jpg";
import MBA from "../../assets/IBBAMBA1.jpg";
import MCA from "../../assets/IBCAMCA.jpg";

// ✅ Placeholder
import Placeholder from "../../assets/ICEM_Banner.jpg";

const DiscoverPaths = () => {
  // ✅ Match images to courses and include correct routes
  const courses = [
    { name: "Computer Engineering", img: CompEng, link: "/programs/computer-engineering" },
    { name: "Mechanical Engineering", img: MechEng, link: "/programs/mechanical-engineering" },
    { name: "Artificial Intelligence and Data Science", img: AidsEng, link: "/programs/ai-ds" },
    { name: "Electronics and Telecommunication", img: EntcEng, link: "/programs/entc" },
    { name: "Information Technology", img: ITEng, link: "/programs/it" },
    { name: "MBA", img: MBA, link: "/programs/mba" },
    { name: "MCA", img: MCA, link: "/programs/mca" },
    { name: "M-Tech in Mechanical Engineering", img: Placeholder, link: "/programs/mtech-mech" },
    { name: "M-Tech in Computer Science", img: Placeholder, link: "/programs/mtech-comp" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Discover Your Path to Success
        </h2>

        {/* ✅ Responsive Course Grid (Now 3 Columns on Large Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.link}
              className="relative bg-white shadow-md overflow-hidden group transition-transform duration-300 hover:scale-[1.02] rounded-md"
            >
              {/* Background Image */}
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-44 object-cover group-hover:brightness-75 transition-all duration-300"
              />

              {/* Overlay Title */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-white font-semibold text-xs sm:text-sm px-2 whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:underline transition-transform duration-300">
                {course.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
