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
import logo14 from "../../assets/Recruiters logos/logo14.png";
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

export default function Companies() {
  const logos = [
     logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
     logo9, logo10, logo11, logo12, logo42, logo14, logo41, logo16,
     logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
     logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,
     logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
     logo43, logo44,
   ];

  return (
    <>
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase">
            Your Career, Connected to the Best
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            The consistent quality and industry-readiness of ICEM graduates have
            made our campus a preferred recruitment destination for top-tier
            companies across the globe. These partnerships are a testament to
            our shared commitment to nurturing future-ready professionals
          </p>

          {/* ✅ Recruiter Logos Grid (replaces placeholders) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-3 place-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-28 h-16 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Recruiter Logo ${index + 1}`}
                  className="max-w-[80%] max-h-[70px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
