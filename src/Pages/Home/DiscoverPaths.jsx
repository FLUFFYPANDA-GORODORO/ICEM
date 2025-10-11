import React from "react";

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
              className="relative bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="h-44 w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                [ Image Here ]
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium text-center py-3 px-2 transition-opacity duration-300 group-hover:bg-black/70">
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