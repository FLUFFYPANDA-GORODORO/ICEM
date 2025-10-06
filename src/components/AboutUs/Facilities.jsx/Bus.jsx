import React, { useState } from "react";
import Banner from "../../../assets/ICEM_Banner.jpg";

function Bus() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const rightLinks = [
    "Overview",
    "Shree Chanakya Education Society",
    "Indira Group of Institute",
    "Chairpersons Profile & Chief Mentor IGL",
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
      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <img
          src={Banner}
          alt="Sports Facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Sports at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* LEFT SECTION */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Sports and Recreation Facilities
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Indira College of Engineering and Management, sports form an
            integral part of campus life. The college encourages students to
            actively participate in a variety of indoor and outdoor sporting
            activities that promote teamwork, discipline, and a healthy
            lifestyle.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The institution offers world-class facilities including cricket
            grounds, football fields, volleyball and basketball courts, and a
            modern indoor sports complex for games such as table tennis, chess,
            and badminton.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            ICEM also organizes annual sports festivals and inter-college
            competitions to promote sporting excellence and a spirit of
            leadership among students. The Sports Department ensures access to
            quality coaching and encourages participation in university,
            national, and intercollegiate tournaments.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The vision behind promoting sports at ICEM is to nurture a balance
            between academic rigor and physical fitness — shaping individuals
            who are confident, resilient, and mentally strong.
          </p>

          {/* Sports Image Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-sm"
              >
                [ Image Placeholder ]
              </div>
            ))}
          </div>

          {/* ===================== FAQ SECTION ===================== */}
          <div className="w-full bg-[#f7f7f7] text-black py-12 px-4 rounded-xl">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* LEFT MENU */}
                <div className="bg-white rounded-lg shadow-sm p-4 space-y-2 text-sm font-medium text-gray-700">
                  {[
                    "About the Program",
                    "Admissions Process",
                    "Eligibility & Requirements",
                    "Fee Structure & Scholarships",
                    "Specialisations & Curriculum",
                    "Industry Exposure & Internships",
                    "Placements & Career Opportunities",
                    "Campus Life & Student Support",
                    "Faculty & Teaching Methodology",
                    "Global Opportunities & Dual Degrees",
                    "Infrastructure & Labs",
                    "Location & Accessibility",
                    "Why Choose Indira College?",
                    "Parent/Guardian Queries",
                    "Post-Graduation Pathways (MS, MTech, MBA, etc.)",
                    "FAQs for NRI/International Students",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded cursor-pointer hover:bg-gray-100 ${
                        i === 0 ? "border-l-4 border-red-600 bg-gray-50" : ""
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* RIGHT FAQ QUESTIONS (Accordion) */}
                <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-4">
                  {[
                    {
                      question:
                        "What is the B.E. CSE with Specialisation in Artificial Intelligence & Future Technologies?",
                      answer:
                        "It’s a 4-year undergraduate program focusing on computer science fundamentals along with cutting-edge areas like Artificial Intelligence, Blockchain, Cloud Computing, and Cyber Security.",
                    },
                    {
                      question:
                        "What makes this AI and Future Technology course different from other CSE programs?",
                      answer:
                        "This program blends theoretical knowledge with industry-aligned training in AI, Cloud, and Blockchain to prepare students for modern tech roles.",
                    },
                    {
                      question:
                        "What subjects are included in the AI and Future Technology course?",
                      answer:
                        "Key subjects include Programming Languages, Data Structures, Artificial Intelligence, Machine Learning, Blockchain, Cloud Computing, and Cyber Security.",
                    },
                    {
                      question: "What is the program structure and duration?",
                      answer:
                        "The program is structured over 4 years with 8 semesters, combining academic theory, lab work, and internship opportunities.",
                    },
                    {
                      question: "Does the program support innovation and entrepreneurship?",
                      answer:
                        "Yes. Students are encouraged to work on startups and projects with incubation and mentorship support.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="border rounded-md bg-white overflow-hidden transition-all duration-300"
                    >
                      {/* Question Header */}
                      <div
                        onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                        className={`flex justify-between items-center p-3 cursor-pointer font-medium transition-colors ${
                          activeFAQ === i
                            ? "bg-red-600 text-white"
                            : "text-black"
                        }`}
                      >
                        <span>
                          {i + 1}. {faq.question}
                        </span>
                        <span className="text-xl font-bold">
                          {activeFAQ === i ? "−" : "+"}
                        </span>
                      </div>

                      {/* Answer */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          activeFAQ === i ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="p-3 text-sm bg-gray-50 text-gray-700">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* ===================== END FAQ SECTION ===================== */}
        </div>

        {/* RIGHT SECTION */}
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

export default Bus;
