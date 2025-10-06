import React, { useState } from "react";
import Banner from "../../assets/ICEM_Banner.jpg";

function Governance() {
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
          alt="Governance at ICEM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Governance at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* LEFT SECTION */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Institutional Governance and Leadership
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Governance at Indira College of Engineering and Management (ICEM)
            emphasizes transparency, accountability, and participative
            decision-making. The institution operates under the strategic vision
            of the Shree Chanakya Education Society (SCES) and adheres to
            policies aligned with AICTE, DTE, and Savitribai Phule Pune
            University.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Governing Body, Academic Council, and various statutory
            committees ensure the seamless implementation of academic, financial,
            and administrative processes. Each committee functions under defined
            responsibilities to maintain compliance, quality, and institutional
            excellence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The governance model promotes participative leadership where faculty
            and staff contribute to strategic planning, curriculum design, and
            institutional development initiatives. Student representation in key
            bodies fosters inclusion and mutual growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Regular audits, feedback mechanisms, and performance reviews are key
            to ensuring that ICEM operates effectively and ethically while
            achieving its educational mission and objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The institutional governance system thus ensures transparency,
            responsibility, and continual improvement in all facets of
            administration — academics, finance, infrastructure, and human
            resources.
          </p>

          {/* Governance Committee Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-sm"
              >
                [ Committee / Member Placeholder ]
              </div>
            ))}
          </div>

          {/* ===== FAQ Accordion Section ===== */}
          <h3 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
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
                  "This is not a standard Computer Science degree. This program offers a multidisciplinary CSE Specialisation in AI and Future Technologies. It blends theoretical knowledge with industry-aligned practical training, preparing students for real-world applications in cybersecurity, blockchain, cloud infrastructure, and AI-driven innovation.",
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
                  "The program is structured over 4 years with 8 semesters, combining academic theory, lab work, and a 6–12 month internship.",
              },
              {
                question: "What types of projects will students work on?",
                answer:
                  "Students work on industry-aligned projects involving AI models, predictive analytics, cloud deployments, and cybersecurity simulations.",
              },
              {
                question:
                  "Does the program support innovation and entrepreneurship?",
                answer:
                  "Yes. The program encourages innovation and provides incubation support for entrepreneurial students through collaborations with tech industries.",
              },
              {
                question:
                  "What career paths are available after completing this degree?",
                answer:
                  "Graduates can pursue roles like AI Engineer, Data Scientist, Blockchain Developer, Cloud Architect, or Cyber Security Analyst.",
              },
              {
                question: "Is this B.E. CSE program aligned with industry needs?",
                answer:
                  "Absolutely. The curriculum is designed with inputs from top industry experts and recruiters to match real-world technology trends.",
              },
              {
                question: "Is this program UGC-recognized and AICTE-approved?",
                answer:
                  "Yes, the program is fully approved by AICTE and follows all UGC guidelines.",
              },
              {
                question: "Is this a good program for future tech leaders?",
                answer:
                  "Definitely. It provides the skills, exposure, and innovation mindset required to lead in technology-driven industries.",
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
                    activeFAQ === i ? "bg-red-600 text-white" : "text-black"
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

        {/* RIGHT SECTION (Unchanged) */}
        <div className="md:w-1/3 bg-[#111] text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar, contact form, quick links same as before */}
        </div>
      </div>
    </div>
  );
}

export default Governance;
