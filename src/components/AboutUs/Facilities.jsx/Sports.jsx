import React from "react";

function Sports() {
  const sports = [
    "Gymnastics",
    "Swimming",
    "Volleyball",
    "Archery",
    "Badminton",
    "Boxing",
    "Handball",
    "Table Tennis",
    "Wrestling",
    "Athletics",
    "Basketball",
    "Chess",
  ];

  const rightLinks = [
    "Sports",
    "Library",
    "Hostel",
    "Transport",
    "Canteen",
    "Gym",
    "Primary Health Centre",
    "Governance",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6 ">
        
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md flex flex-col">
        <div className="bg-primary py-8 flex justify-center items-center rounded-t-xl mb-6">
          <h2>Sports @ICEM</h2>
        </div>
          {/* Overview Section */}
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A strong sports infrastructure has several advantages, including
            enhancing community involvement and social interaction, encouraging
            talent development, generating economic benefits through events, and
            improving quality of life in general. High-quality sporting venues
            can motivate individuals to engage in physical activity, improving
            mental health outcomes and lowering healthcare expenditures.
          </p>

          {/* Sports Infrastructure Section */}
          <h3 className="text-2xl font-semibold text-secondary mb-6">
            Sports Infrastructure
          </h3>

          {/* Sports Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md bg-gray-200 flex justify-center items-center h-48 cursor-pointer group"
              >
                {/* Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:from-primary/70 group-hover:to-primary/60 transition-all duration-300"></div>

                {/* Sport Name */}
                <p className="relative text-white text-lg font-semibold z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                  {sport}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="md:w-1/3 bg-[#111] text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* About Links */}
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-gray-500 hover:text-primary cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-red-500 font-bold mb-4 border-t border-gray-500 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer transition-colors"
                >
                  <span className="text-red-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
