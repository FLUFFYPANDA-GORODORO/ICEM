import React, { useState } from "react";

function Sports() {
  const [activeFAQ, setActiveFAQ] = useState(null);

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

  const faqs = [
    {
      question: "Does ICEM have dedicated sports facilities on campus?",
      answer:
        "Yes, ICEM offers dedicated infrastructure for both indoor and outdoor sports including grounds, courts, and gymnasium facilities for students.",
    },
    {
      question: "Are intercollegiate sports tournaments conducted?",
      answer:
        "Yes. ICEM organizes and participates in intercollegiate, university, and national level tournaments in multiple sports disciplines.",
    },
    {
      question: "Is there a sports committee or coordinator?",
      answer:
        "Yes, ICEM has a dedicated Sports Committee and Faculty Sports Coordinator who plan, organize, and supervise sports activities throughout the academic year.",
    },
    {
      question: "Are there any awards or scholarships for athletes?",
      answer:
        "Outstanding performers in sports are recognized annually with awards, certificates, and in some cases, sports scholarships or fee concessions.",
    },
    {
      question: "Is participation in sports compulsory for students?",
      answer:
        "Participation is encouraged but not compulsory. However, students are motivated to take part in annual sports week and fitness programs.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ===== Page Container ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-12">
        
        {/* ===== Page Title ===== */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Sports @ ICEM
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            At Indira College of Engineering & Management (ICEM), sports are an
            integral part of the holistic development of students. The college
            provides a range of sports facilities that encourage physical fitness,
            teamwork, discipline, and leadership among students.
          </p>
        </div>

        {/* ===== Overview Section ===== */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Sports Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ICEM believes that participation in sports is vital for overall
            growth, instilling in students the values of teamwork, discipline,
            and perseverance. The college provides ample infrastructure for a
            variety of sports and games, both indoor and outdoor, to cater to
            diverse interests. Students are encouraged to participate in sports
            events, inter-college tournaments, and university-level competitions
            throughout the year.
          </p>
        </div>

        {/* ===== Sports Gallery Grid ===== */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Sports Infrastructure & Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="relative rounded-xl shadow-md overflow-hidden bg-gray-200 group h-56 flex items-center justify-center"
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:from-secondary/70 group-hover:to-secondary/60 transition-all duration-300"></div>

                <p className="relative text-white font-semibold text-lg z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {sport}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FAQ Section ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-md bg-white overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <div
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className={`flex justify-between items-center p-3 cursor-pointer font-medium transition-colors ${
                    activeFAQ === i ? "bg-secondary text-white" : "text-black"
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
                  <div className="p-3 text-sm bg-gray-50 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
