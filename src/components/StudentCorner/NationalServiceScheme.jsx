import React, { useState } from "react";
import Banner from "../../assets/ICEM_Banner.jpg";
import BEComp from "../../assets/BEComp.pdf";

function NationalServiceScheme() {
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

  const reports = [
    "NSS Activity Report 2022-23",
    "NSS Activity Report 2021-22",
    "NSS Activity Report 2020-21",
    "NSS Activity Report 2019-20",
    "NSS Activity Report 2018-19",
    "NSS Activity Report 2017-18",
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
            National Service Scheme (NSS)
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About National Service Scheme (NSS)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            NSS has been introduced at <b>Savitribai Phule Pune University</b>{" "}
            since 1969 as a part of the academic programs and since then NSS has
            been functioning as a regular feature in the realm of our university
            education. The overall objective of the scheme is educational, and
            service to the community is the activity through which the objective
            is sought to be achieved.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>National Service Scheme (NSS)</b> has been playing a vital role in
            enriching the souls and minds of the students of the university for a
            long time. The overall objective of this scheme is{" "}
            <b>‘Education and Service’</b> — to the community and by the community.
            It is a programme for students to cater to the needs of the community,
            as and when required. It also helps students to communicate effectively
            with the society.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Students joining this scheme develop interactive and behavioral skills.
            They visit rural areas as NSS volunteers during camps organized by the
            concerned colleges or departments of the university. The scheme promotes
            their ability to present themselves in a better and more confident way.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Objectives of NSS
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              To inculcate and develop social sensitivity, moral values, and
              professional ethics in ICEM students along with their academic
              formation.
            </li>
            <li>
              To arrange discussions and workshops regularly on issues of social
              importance, ethical relevance, and moral values.
            </li>
            <li>
              To organize social service groups, clubs, and outdoor field
              activities to involve students in community service initiatives.
            </li>
          </ul>

          {/* NSS Activity Report Accordion */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            NSS Activity Reports
          </h3>
          <div className="space-y-2">
            {reports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800 underline">
                    {report}
                  </span>
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

export default NationalServiceScheme;
