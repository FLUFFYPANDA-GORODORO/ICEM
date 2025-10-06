import React, { useState } from "react";
// import React, { useState } from "react";


function IMCA() {

    const [activeFAQ, setActiveFAQ] = useState(null);

   
  return (
    <div className="w-full text-white">
      {/* ===== TOP DARK SECTION ===== */}
      <div className="w-full bg-[#111] py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              4-Year B.E. CSE Program <br />
              with specialisation in <br />
              <span className="text-red-500">
                Artificial Intelligence & Future Technologies
              </span>
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              This innovative program blends foundational computer science
              knowledge with cutting-edge skills in Artificial Intelligence,
              Blockchain, Cloud Computing, and Cyber Security, helping prepare
              students for high-impact careers in the tech industry.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
                Apply Now
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md">
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION (Placeholder) */}
          <div className="flex-1">
            <div className="w-full h-[300px] bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[ Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHITE INFO SECTION ===== */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              <span>🕓</span> Course Duration
            </h4>
            <p className="text-gray-700 leading-relaxed">
              The program spans 4 years, providing comprehensive education in
              computer science and emerging technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              <span>💼</span> Internship Opportunity
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Students undertake a 6-month to 1-year internship with global tech
              leaders to gain real-world experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              <span>🏫</span> Campus Recruitment
            </h4>
            <p className="text-gray-700 leading-relaxed">
              The program offers placement opportunities with top tech
              companies, including Fortune 500 corporations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              <span>🎓</span> Eligibility
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Click here to read more about the eligibility of our CSE Program
              with Specialisation in AI & Future Tech.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROGRAM STRUCTURE + FORM SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6">
          {/* LEFT TEXT */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              B.E. CSE with Artificial Intelligence <br />
              & Future Technologies
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The B.E. in CSE with Artificial Intelligence & Future Technologies
              program prepares graduates to drive innovation in industries like
              AI, Cloud Computing, Cyber Security, and Blockchain. The program
              combines academic rigor with practical experience, ensuring
              students acquire real-world skills and knowledge of emerging
              technologies.
            </p>

            <h3 className="font-semibold text-xl mb-2 text-gray-800">
              Program Structure
            </h3>
            <p className="text-gray-700 mb-4">
              The curriculum covers core areas including:
            </p>

            <ul className="space-y-2 text-gray-800">
              <li>➜ Foundations of Computer Science and Programming Languages</li>
              <li>➜ Advanced Algorithms and Data Structures</li>
              <li>➜ Fundamentals of Artificial Intelligence and Machine Learning</li>
              <li>➜ Blockchain Technology and its Applications</li>
              <li>➜ Cyber Security Practices and Cloud Computing Solutions</li>
              <li>➜ Hands-on Labs and Industry-Aligned Projects</li>
            </ul>

            <p className="text-red-600 mt-4 font-medium cursor-pointer hover:underline">
              Read more...
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">
              Be a part of India’s Top Rated University
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <div className="flex border border-gray-300 rounded-md">
                <span className="flex items-center justify-center px-3 border-r border-gray-300 text-gray-500">
                  🇮🇳
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="flex-1 px-3 py-2 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Your Email ID"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Engineering</option>
                <option>Computer Science</option>
                <option>AI & Data Science</option>
                <option>Information Technology</option>
              </select>

              <input
                type="text"
                placeholder="State"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <p className="text-xs text-gray-500 leading-relaxed">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== PROGRAM HIGHLIGHTS SECTION ===== */}
      <div className="w-full bg-[#f7f7f7] py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Program Highlights</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our B.E. in Computer Science with Artificial Intelligence & Future
            Technologies offers a unique blend of cutting-edge knowledge and
            practical experience. With a focus on innovation, industry-aligned
            projects, and hands-on labs, the program equips students to lead in
            emerging technologies, while our strong industry connections ensure
            enhanced career opportunities and real-world exposure.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                [ Image Placeholder ]
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg mb-2">
                  Interdisciplinary Expertise
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The Computer Science program with a specialisation in AI &
                  Future Technologies provides a multidisciplinary foundation in
                  AI, Blockchain, Cloud Computing, and Cyber Security, preparing
                  students to tackle complex challenges in a fast-paced industry.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                [ Image Placeholder ]
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg mb-2">
                  Cutting-Edge Laboratories
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hands-on experience in high-tech environments using
                  industry-standard tools. Students engage in real-world projects
                  bridging theory and practice, building critical skills for
                  modern tech careers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                [ Image Placeholder ]
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg mb-2">
                  Industry-Relevant Skills
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This program equips students to master technologies like AI,
                  Cloud Computing, and Blockchain, fostering innovation and
                  ensuring readiness for the future tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
<div className="w-full bg-white text-black py-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
    {/* LEFT TEXT SECTION */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        The field of AI and future technologies offers diverse career
        opportunities across various sectors. Professionals can shape
        innovations in industries like healthcare, finance, and tech, with
        roles focusing on data, security, and emerging technologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
        <p>➜ Artificial Intelligence Engineer</p>
        <p>➜ Data Scientist</p>
        <p>➜ Blockchain Developer</p>
        <p>➜ Cyber Security Analyst</p>
        <p>➜ Cloud Solutions Architect</p>
        <p>➜ Machine Learning Specialist</p>
        <p>➜ AI Researcher</p>
        <p>➜ Robotics Engineer</p>
      </div>
    </div>

    {/* RIGHT IMAGE SECTION (Placeholder) */}
    <div className="flex-1">
      <div className="w-full h-[300px] bg-gray-300 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">[ Image Placeholder ]</p>
      </div>
    </div>
  </div>
</div>

{/* ===== CAMPUS RECRUITMENT SECTION ===== */}
<div className="w-full bg-[#f7f7f7] text-black py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Campus Recruitment</h2>
    <p className="text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
      The program prepares students to excel in diverse fields, including AI research labs,
      Blockchain start-ups, Cyber Security firms, and Cloud Computing giants.
      Some of our top recruiters are:
    </p>

    {/* LOGO GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {Array(18)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-20 bg-white shadow-md rounded-md flex items-center justify-center text-gray-500"
          >
            [ Logo {index + 1} ]
          </div>
        ))}
    </div>
  </div>
</div>

{/* ===== NEXT STEPS SECTION ===== */}
<div className="w-full bg-[#f7f7f7] py-16 flex justify-center px-6">
  <div className="bg-[#1a1a1a] rounded-2xl max-w-5xl w-full text-center text-white py-12 px-6">
    <h2 className="text-3xl font-semibold mb-4">The Next Steps</h2>
    <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
      The steps you take today shape your future. At Indira College, we empower bright minds
      with strong fundamentals, a global perspective, and leadership skills to make a
      meaningful change in the world.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold">
        Download Brochure
      </button>
      <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-md font-semibold">
        Apply Now
      </button>
    </div>
  </div>
</div>

{/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
<div className="w-full bg-[#f7f7f7] text-black py-16">
  <div className="max-w-7xl mx-auto px-6">
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

      {/* RIGHT FAQ QUESTIONS */}
      {/* RIGHT FAQ QUESTIONS (Accordion Functionality) */}
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
      question: "Does the program support innovation and entrepreneurship?",
      answer:
        "Yes. The program encourages innovation and provides incubation support for entrepreneurial students through collaborations with tech industries.",
    },
    {
      question: "What career paths are available after completing this degree?",
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
        <div className="p-3 text-sm bg-gray-50 text-gray-700">{faq.answer}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</div>



    </div>
  );
}

export default IMCA;
