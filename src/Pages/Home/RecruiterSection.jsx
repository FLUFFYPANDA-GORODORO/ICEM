import React from "react";

// ✅ Import all 44 logos
import logo1 from "../../assets/Recruiters logos/logo1.png";
import logo2 from "../../assets/Recruiters logos/logo2.png";
import logo3 from "../../assets/Recruiters logos/logo3.png";
import logo4 from "../../assets/Recruiters logos/logo4.png";
import logo5 from "../../assets/Recruiters logos/logo5.png";
import logo6 from "../../assets/Recruiters logos/logo6.png";
import logo7 from "../../assets/Recruiters logos/logo7.png";
import logo8 from "../../assets/Recruiters logos/logo8.png";
import logo9 from "../../assets/Recruiters logos/logo9.png";
import logo10 from "../../assets/Recruiters logos/logo10.png";
import logo11 from "../../assets/Recruiters logos/logo11.png";
import logo12 from "../../assets/Recruiters logos/logo12.png";
import logo13 from "../../assets/Recruiters logos/logo13.png";
import logo14 from "../../assets/Recruiters logos/logo14.png";
import logo15 from "../../assets/Recruiters logos/logo15.png";
import logo16 from "../../assets/Recruiters logos/logo16.png";
import logo17 from "../../assets/Recruiters logos/logo17.png";
import logo18 from "../../assets/Recruiters logos/logo18.png";
import logo19 from "../../assets/Recruiters logos/logo19.png";
import logo20 from "../../assets/Recruiters logos/logo20.png";
import logo21 from "../../assets/Recruiters logos/logo21.png";
import logo22 from "../../assets/Recruiters logos/logo22.png";
import logo23 from "../../assets/Recruiters logos/logo23.png";
import logo24 from "../../assets/Recruiters logos/logo24.png";
import logo25 from "../../assets/Recruiters logos/logo25.png";
import logo26 from "../../assets/Recruiters logos/logo26.png";
import logo27 from "../../assets/Recruiters logos/logo27.png";
import logo28 from "../../assets/Recruiters logos/logo28.png";
import logo29 from "../../assets/Recruiters logos/logo29.png";
import logo30 from "../../assets/Recruiters logos/logo30.png";
import logo31 from "../../assets/Recruiters logos/logo31.png";
import logo32 from "../../assets/Recruiters logos/logo32.png";
import logo33 from "../../assets/Recruiters logos/logo33.png";
import logo34 from "../../assets/Recruiters logos/logo34.png";
import logo35 from "../../assets/Recruiters logos/logo35.png";
import logo36 from "../../assets/Recruiters logos/logo36.png";
import logo37 from "../../assets/Recruiters logos/logo37.png";
import logo38 from "../../assets/Recruiters logos/logo38.png";
import logo39 from "../../assets/Recruiters logos/logo39.png";
import logo40 from "../../assets/Recruiters logos/logo40.png";
import logo41 from "../../assets/Recruiters logos/logo41.png";
import logo42 from "../../assets/Recruiters logos/logo42.png";
import logo43 from "../../assets/Recruiters logos/logo43.png";
import logo44 from "../../assets/Recruiters logos/logo44.png";

const RecruitersSection = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
    logo9, logo10, logo11, logo12, logo42, logo14, logo41, logo16,
    logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
    logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,
    logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
    logo43, logo44,
  ];

  return (
    <div className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          INDIRA DEGREE OPENS DOORS. WIDE.
        </h2>

        <p className="text-gray-700 text-sm max-w-5xl mx-auto leading-relaxed mb-10">
          At Indira College of Engineering & Management, there is a strong
          focus on preparing every student to be industry ready. With numerous
          recruiters visiting our campus each year, our graduates gain access
          to a network of opportunities, resources, and the support needed to
          excel in a rapidly evolving job market.
        </p>

        {/* ✅ Recruiter Logos Grid (7 per row on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 gap-y-4 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-28 h-16 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="max-w-[80%] max-h-[60px] object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;
