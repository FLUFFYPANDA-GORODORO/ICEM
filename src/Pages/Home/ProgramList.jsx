import React from "react";

const ProgramList = () => {
  const programs = [
    "Civil Engineering",
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
    <div className="lg:col-span-2 bg-white rounded-lg p-4 sm:p-8 shadow-sm border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        ACADEMIC <span className="text-secondary">YEAR 2026</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 text-gray-800">
        {programs.map((item, index) => (
          <p key={index} className="flex items-start text-sm sm:text-base">
            <span className="text-secondary mr-2 font-bold">›</span>
            <span className="hover:underline cursor-pointer hover:text-primary transition-colors">
              {item}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProgramList;