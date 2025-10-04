import React, { useState } from "react";
import ICEM_Banner from "../../assets/ICEM_Banner.jpg";

const testimonials = [
  {
    name: "Vidya Nair",
    company: "KPMG",
    position: "Analyst IT Audit",
    text: `Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full confidence & that key to the success is taught through various activities held by placement cell in ICEM.`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  {
    name: "Rahul Sharma",
    company: "Infosys",
    position: "Software Engineer",
    text: `The Student Welfare program at ICEM has been instrumental in my overall development. The Earn & Learn scheme helped me financially while providing valuable work experience. The faculty support and guidance were exceptional throughout my journey.`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  {
    name: "Priya Patel",
    company: "Wipro",
    position: "System Analyst",
    text: `I'm grateful for the opportunities provided by the Student Development Cell. The various workshops and training sessions helped me develop both technical and soft skills. The committee members were always approachable and supportive.`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
];

const StudentWelfare = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const committeeMembers = [
    {
      name: "Prof. Vijay Kumar Saini",
      department: "Civil",
      contact: "9819298069",
      email: "vijaykumar.saini@indiraicem.ac.in",
    },
    {
      name: "Prof. Pallavi Chavan",
      department: "AI&DS",
      contact: "9175151731",
      email: "pallavichavan@indiraicem.ac.in",
    },
    {
      name: "Prof. Sagar Chirade",
      department: "Mechanical",
      contact: "9860477823",
      email: "sagar.chirade@indiraicem.ac.in",
    },
    {
      name: "Prof. Minal Jungare",
      department: "Computer",
      contact: "9923979064",
      email: "minal.jungare@indiraicem.ac.in",
    },
    {
      name: "Prof. Meenakshi Patil",
      department: "EnTc",
      contact: "9921844112",
      email: "meenakshi.madgunaki@indiraicem.ac.in",
    },
  ];

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative mb-8 w-full">
        <img src={ICEM_Banner} className="w-full h-96 md:h-80 object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-indigo-900 bg-opacity-80 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold">Student Welfare</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 mb-12">
        {/* Tab Navigation */}
        <div className="border-b-2 border-indigo-900 mb-6">
          <nav className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab("overview")}
              className={`mr-2 py-3 px-4 font-semibold rounded-t-lg ${
                activeTab === "overview"
                  ? "bg-indigo-900 text-white border-b-2 border-indigo-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("committees")}
              className={`mr-2 py-3 px-4 font-semibold rounded-t-lg ${
                activeTab === "committees"
                  ? "bg-indigo-900 text-white border-b-2 border-indigo-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Committees
            </button>
            <button
              onClick={() => setActiveTab("welfare")}
              className={`mr-2 py-3 px-4 font-semibold rounded-t-lg ${
                activeTab === "welfare"
                  ? "bg-indigo-900 text-white border-b-2 border-indigo-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Welfare Scheme
            </button>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-indigo-900 mb-4">
                  Objectives of the Students' Development Cell:
                </h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Propose various schemes from the Board of Students'
                      Development (BSD) at Savitribai Phule Pune University
                      (SPPU) and ensure their effective implementation once
                      approved by BSD, SPPU.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Form a student council in accordance with BSD, SPPU
                      guidelines, guiding students in fulfilling their
                      responsibilities and implementing various schemes and
                      welfare activities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Serve as a liaison between the institute and SPPU, attend
                      meetings at BSD, SPPU, and coordinate meetings with SDC
                      faculty and student members.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Ensure the follow-up, implementation, and auditing of
                      approved BSD, SPPU schemes.
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {/* Committees Tab */}
            {activeTab === "committees" && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-indigo-900 mb-4">
                  Student Development Cell Committee Members:
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Staff Name
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Department
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Contact No.
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Mail ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {committeeMembers.map((member, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="border border-gray-300 px-4 py-2">
                            {member.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {member.department}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {member.contact}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:underline"
                            >
                              {member.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Welfare Scheme Tab */}
            {activeTab === "welfare" && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <p className="mb-4">
                  Indira College of Engineering and Management, Pune, offers the
                  Karmaveer Bhaurao Patil Earn & Learn Scheme for financially
                  needy students. Sponsored by the Board of Students'
                  Development, Savitribai Phule Pune University, this scheme
                  provides students with opportunities to work in various labs,
                  the library, and other areas within the college. In return,
                  they receive financial compensation for their contributions.
                </p>
                <p className="mb-6">
                  This program not only supports the college's operations but
                  also enables students to earn money while acquiring valuable
                  professional skills and understanding the importance of
                  financial responsibility. Each year, students are selected to
                  participate in the Earn & Learn Scheme during the academic
                  year.
                </p>

                <h3 className="text-lg font-bold text-indigo-900 mb-3">
                  Karmaveer Bhaurao Patil Earn & Learn Scheme:
                </h3>

                <h4 className="font-semibold text-indigo-800 mb-2">
                  Objectives of the scheme:
                </h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      To provide financial assistance to economically weaker,
                      needy, and promising students to acquire higher education.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Upholding the dignity of human labor.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>To become a knowledge Servant.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Motivating students about self-employment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Creating awareness of work culture among students.
                    </span>
                  </li>
                </ul>

                <h4 className="font-semibold text-indigo-800 mb-2">
                  Eligibility for the Scheme:
                </h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Students must have a parental annual income of Rs.
                      8,00,000/- or less, as per government rules.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Income proof must be provided: either a certificate signed
                      by the Tehsildar or Form No. 16 for employed parents.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Applicable to regular students in degree or postgraduate
                      courses at affiliated colleges, recognized institutes, or
                      university departments under Savitribai Phule Pune
                      University.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Re-admitted or failed students will be ineligible for the
                      Earn and Learn scheme.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Students participating in the scheme must maintain at
                      least 75% class attendance.
                    </span>
                  </li>
                </ul>

                <h4 className="font-semibold text-indigo-800 mb-2">
                  Work to be Done Under the 'Earn and Learn' Scheme:
                </h4>
                <p className="mb-3">
                  Students should be assigned tasks that promote their overall
                  development and help them acquire various skills. Activities
                  may include:
                </p>
                <ul className="space-y-2 mb-6 grid md:grid-cols-2 gap-2">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Producing seedlings through a nursery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Preparing stationery materials required by the university
                      or college.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Assisting with hostel administration.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Providing opportunities for students with skills in
                      plumbing, electrical work, etc.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Assist in educational laboratories.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Perform typing and printing tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Assist faculty as research assistants.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Undertake computer-based tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>Work as a library assistant.</span>
                  </li>
                </ul>

                <h4 className="font-semibold text-indigo-800 mb-2">
                  Working Hours:
                </h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Students can be assigned up to three hours of office work
                      per day.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Fieldwork may also be assigned for up to three hours per
                      day.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Students should be given a maximum of 75 hours of work per
                      month.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      No work should be assigned on August 15th, January 26th,
                      and May 1st.
                    </span>
                  </li>
                </ul>

                <h4 className="font-semibold text-indigo-800 mb-2">
                  Rate of Work for the 'Earn and Learn' Scheme:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      Students working under the scheme will be paid a
                      remuneration of Rs. 55/- per hour.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-900 mr-2">•</span>
                    <span>
                      This rate should remain unchanged unless revised by the
                      University Authority Board.
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {/* Testimonial Section */}
            <div className="bg-indigo-900 rounded-lg shadow-md p-8 mt-8 text-white relative">
              <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                />
                <div className="flex-1">
                  <p className="mb-4 text-sm md:text-base italic">"{currentTestimonial.text}"</p>
                  <p className="font-bold text-lg">{currentTestimonial.name}</p>
                  <p className="text-indigo-200">{currentTestimonial.company}</p>
                  <p className="text-indigo-200">{currentTestimonial.position}</p>
                </div>
              </div>
              {/* Carousel Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition shadow-md"
                  aria-label="Previous testimonial"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition shadow-md"
                  aria-label="Next testimonial"
                >
                  &#8594;
                </button>
              </div>
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === testimonialIndex ? "bg-white" : "bg-indigo-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-900 pb-2 mb-4">
                Awards
              </h3>
              <img
                src="https://indiraicem.ac.in/assets/images/naac.png"
                alt="NAAC Accreditation"
                className="w-full mb-4"
              />
              <h4 className="font-semibold text-indigo-800 mb-2">Awards</h4>
              <p className="text-sm">
                ICEM has been accredited with 'B++' grade by "National
                Accreditation and Assessment Council" (NAAC)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-center font-bold text-indigo-900 mb-4">
                EXPLORE OUR OTHER COURSES
              </h4>
              <div className="space-y-3">
                <a
                  href="https://indiraicem.ac.in/civil-engineering-course-admission-details"
                  className="block py-2 border-b border-gray-200 hover:text-blue-600 transition-colors"
                >
                  Civil Engineering
                </a>
                <a
                  href="https://indiraicem.ac.in/computer-engineering-course-admission-details"
                  className="block py-2 border-b border-gray-200 hover:text-blue-600 transition-colors"
                >
                  Computer Engineering
                </a>
                <a
                  href="https://indiraicem.ac.in/mechanical-engineeringcourse-admission-details"
                  className="block py-2 border-b border-gray-200 hover:text-blue-600 transition-colors"
                >
                  Mechanical Engineering
                </a>
                {activeTab === "welfare" && (
                  <a
                    href="https://indiraicem.ac.in/ETC_Engineering"
                    className="block py-2 hover:text-blue-600 transition-colors"
                  >
                    Electronics and Telecommunication Engineering
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentWelfare;