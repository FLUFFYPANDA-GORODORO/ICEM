import React, { useState } from "react";
import Banner from "../../assets/ICEM_Banner.jpg";
import BEComp from "../../assets/BEComp.pdf";

function IcemStudentCouncil() {
  const [openIndex, setOpenIndex] = useState(null);

  const rightLinks = [
    "Student Welfare",
    "Induction Programme",
    "Student Council",
    "National Service Scheme (NSS)",
    "ICEM Awards",
    "Academic Cell",
    "Academic Calendar",
    "Statutory Committee",
    "Non-Statutory Committee",
    "Grievance Redressal",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const councilReports = [
    "Student Council A.Y. 2024-25",
    "Student Council A.Y. 2023-24",
    "Student Council A.Y. 2022-23",
    "Student Council A.Y. 2019-20",
    "Student Council A.Y. 2018-19",
    "Student Council A.Y. 2017-18",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        <img
          src={Banner}
          alt="ICEM Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            ICEM Student Council
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About ICEM Student Council
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The purpose of the <b>Students Council (SC)</b> is to provide programs,
            activities, and services which serve the co-curricular, cultural,
            social, recreational, and educational interests of students at the
            University and Colleges. The SC seeks to contribute to the development
            of students’ leadership skills and experience, program planning and
            development, volunteering, and fiscal management.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Students’ Council is established under the{" "}
            <b>Maharashtra Public Universities Act, 1994 section 40 (B)</b> and
            under the new <b>Maharashtra Public University Act 2016, Section 99</b>.
            The act was passed with a view to improve the quality of higher
            education and provides innovative measures for the welfare of
            students, teachers, colleges, and universities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This act provides for the formation of student unions or associated
            student bodies, distinctively called <b>Students’ Councils</b>. There
            shall be a University Students’ Council and a College Students’
            Council for each affiliated college to look after the welfare of
            students and to promote and coordinate extra-curricular activities
            for a better campus life. It is specifically noted that the Councils
            shall not engage in political activities. This chartered student
            council is authorized by the University to manage student activity
            funds responsibly.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <b>Indira College of Engineering and Management (ICEM)</b> has formed
            its Student Council under the guidance of the above-mentioned Act.
            The following are the council members.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Objective of Student Council
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The <b>Students’ Council (SC)</b> is the representative body of the
            entire student community of Indira College of Engineering and
            Management, Pune.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The <b>ICEM Student Council’s mission</b> is to encourage and promote
            the values that represent good character in all students and build
            responsible leaders within the student community. Together with ICEM
            faculty, staff, alumni, and university support, it seeks to inspire
            visions and actions for a more ethical and just world through the
            exchange of ideas and information.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            The executive committee of <b>ICEM-SC</b> comprises advisors from the
            management and faculty, and students elected as office bearers and
            representatives from all classes across disciplines.
          </p>

          {/* Student Council Accordion Section */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Student Council Reports
          </h3>

          <div className="space-y-2">
            {councilReports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">{report}</span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-white border-t border-gray-300">
                    <p className="text-gray-700 mb-2">
                      Click below to view the {report} PDF.
                    </p>
                    <a
                      href={BEComp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold underline hover:text-blue-800"
                    >
                      View Report
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
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

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4">
              GET IN TOUCH WITH US
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded"
              />
              <select className="w-full p-2 text-black rounded">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded"
              />
              <p className="text-xs text-gray-400">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
              >
                Apply Now
              </button>
            </form>
          </div>

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

export default IcemStudentCouncil;
