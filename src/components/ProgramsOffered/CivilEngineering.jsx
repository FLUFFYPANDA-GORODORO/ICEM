import React, { useState } from "react";
import placeholder from "../../assets/placeholder.jpg";

const CivilEngineering = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSemester, setActiveSemester] = useState("sem2");

  const testimonials = [
    {
      name: "Santanu Brahme",
      position: "Pre and post Sales Engineer",
      company: "Hettich India Pvt. Ltd",
      text: "ICEM has a wonderful group of faculties who have a great bonding with students and parents. Various good companies come to college for campus interview, placement is also good. College has very nice environment. Thanks ICEM for the great opportunity. There's a lot that I learned when I was working in the placement cell.",
      image: "https://indiraicem.ac.in/assets/images/icem/SantanuBrahme.png",
    },
    {
      name: "Vidya Nair",
      position: "Analyst IT Audit",
      company: "KPMG",
      text: "Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full confidence & that key to the success is taught through various activities held by placement cell in ICEM.",
      image: "https://indiraicem.ac.in/assets/images/icem/VidyaNair.png",
    },
  ];

  const facultyMembers = [
    {
      name: "Prof. Savita Jangale",
      position: "Assistant Professor",
      role: "I/C HOD",
      qualification: "ME Construction Management",
      academicExp: "13 years",
      industryExp: "1 year",
      interests:
        "Construction Management, Project Management, Transportation, Building Technology",
      research: "Papers: 10, Patents: 2, Copyrights: 1",
      image: "/assets/images/faculty/savita-jangale.jpg",
    },
    {
      name: "Prof. Vijay Kumar Saini",
      position: "Assistant Professor",
      role: "Dy. Director Student Welfare, Events & Branding",
      qualification: "M Tech Construction Management",
      academicExp: "8 years",
      industryExp: "4.5 years",
      interests:
        "Construction Management, Lean Construction, Innovation Management, Automation in Construction",
      research: "Papers: 7, Patents: 2, Copyrights: 2",
      image: "/assets/images/faculty/vijay-saini.jpg",
    },
  ];

  const laboratories = [
    {
      name: "CT/ACT/SOM Lab",
      equipment: [
        "UTM",
        "Torsion Testing Machine",
        "CTM",
        "Tile Abrasion Testing Machine",
        "Lab Concrete Mixer",
        "4-Channel Digital Indicator",
        "Vibrator",
      ],
    },
    {
      name: "Transportation Engineering Lab",
      equipment: [
        "Marshall Stability Test Apparatus",
        "Ductility Testing Apparatus",
        "C.B.R Apparatus",
        "Los Angeles Abrasion Test Machine",
      ],
    },
    {
      name: "Geotechnical Engineering Lab",
      equipment: [
        "Direct shear Apparatus",
        "Unconfined Compression Tester",
        "Load Frame",
        "Swell Test Apparatus",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Program Promotional Card */}
      <div className="bg-primary max-w-screen mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Text and Buttons */}
          <div className="p-8 lg:p-12 lg:w-1/2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                  4-Year B.E. Civil Engineering Program
                </h2>
              </div>

              <p className="text-black text-lg leading-relaxed">
                This innovative program blends foundational civil engineering
                knowledge with cutting-edge skills in Construction Technology,
                Structural Engineering, and Environmental Engineering, helping
                prepare students for high-impact careers in the construction and
                infrastructure industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  Apply Now
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center items-center lg:w-1/2 min-h-[400px]">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <img
                src={placeholder}
                alt="Civil Engineering Students in Action"
                className="w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
              <p className="font-semibold text-gray-900">Level</p>
              <p className="text-gray-600">Under Graduate</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
              <p className="font-semibold text-gray-900">Intake</p>
              <p className="text-gray-600">60 Seats</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
              <p className="font-semibold text-gray-900">Duration</p>
              <p className="text-gray-600">4 Years Full Time</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
              <p className="font-semibold text-gray-900">Location</p>
              <p className="text-gray-600">Indira Chanakya Campus, Pune</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              {[
                { id: "overview", label: "Overview" },
                { id: "syllabus", label: "Syllabus" },
                { id: "course", label: "Course Structure" },
                { id: "facilities", label: "Facilities" },
                { id: "staff", label: "Staff" },
                { id: "activity", label: "Activities" },
                { id: "gallery", label: "Gallery" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`mr-8 py-4 font-semibold border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-secondary text-secondary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    About Department
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      It has been beautifully said that, "Civilization is
                      through Civil Engineering." This statement speaks volume
                      about importance of Civil Engineering in everybody's day
                      to day life. Civil Engineering is the broadest of the
                      Engineering fields.
                    </p>
                    <p>
                      The Faculties of the Department continues to strive
                      excellence by exploring new frontiers of knowledge,
                      imparting the latest technical knowledge to the students.
                      Department is also planning for different well equipped
                      laboratories with modern instruments, classrooms, separate
                      computing facility with latest licensed software's, visual
                      aids like charts and models, audio video learning material
                      and specially prepared transparencies etc.
                    </p>
                  </div>
                </div>

                <div className="bg-[#fff4e1] rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Program Objectives
                  </h3>
                  <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    {[
                      "To meet the need of modern construction technology, geotechnical engineering, irrigation engineering, environmental engineering.",
                      "Imparting value based technical knowledge through qualitative theoretical input and practical exposure.",
                      "Promoting Industry institute interaction and bridging the gap between industry and interaction.",
                      "To keep pace with growing need of society at large and industry in particular through fundamental and applied research.",
                    ].map((objective, index) => (
                      <div key={index} className="flex items-start md:w-[48%]">
                        <span className="text-secondary mr-2 font-bold mt-1">
                          ›
                        </span>
                        <span className="text-gray-700">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === "syllabus" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Syllabus For Civil Engineering Course
                </h2>
                <div className="space-y-4">
                  {[
                    "B E Civil Engineering 2019 Pattern Syllabus",
                    "BE Civil Engineering 2015 Pattern Course Syllabus",
                    "SE Civil Engineering 2019 Pattern Course Syllabus",
                    "TE Civil Engineering 2019 Pattern Course Syllabus",
                  ].map((syllabus, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {syllabus}
                      </h3>
                      <button className="text-secondary font-medium hover:underline">
                        Click here to view
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course Structure Tab */}
            {activeTab === "course" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Civil Engineering College Course Structure
                </h2>

                {/* Semester Navigation */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex space-x-4">
                    {[
                      { id: "sem2", label: "Second Year" },
                      { id: "sem3", label: "Third Year" },
                      { id: "sem4", label: "Final Year" },
                    ].map((sem) => (
                      <button
                        key={sem.id}
                        onClick={() => setActiveSemester(sem.id)}
                        className={`px-4 py-2 rounded-md font-medium ${
                          activeSemester === sem.id
                            ? "bg-secondary text-white"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {sem.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Semester Content */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  {activeSemester === "sem2" && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Second Year Course Structure
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Semester III
                          </h4>
                          <div className="flex flex-col md:flex-row flex-wrap gap-4">
                            {[
                              "Building Technology and Architectural Planning",
                              "Mechanics of Structure",
                              "Fluid Mechanics",
                              "Engineering Mathematics III",
                              "Engineering Geology",
                            ].map((subject, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[200px]"
                              >
                                <p className="font-medium text-gray-900">
                                  {subject}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Semester IV
                          </h4>
                          <div className="flex flex-col md:flex-row flex-wrap gap-4">
                            {[
                              "Geotechnical Engineering",
                              "Survey",
                              "Concrete Technology",
                              "Structural Analysis",
                              "Project Management",
                            ].map((subject, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[200px]"
                              >
                                <p className="font-medium text-gray-900">
                                  {subject}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add similar structures for other semesters */}
                </div>
              </div>
            )}

            {/* Facilities Tab */}
            {activeTab === "facilities" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Civil Engineering College Laboratories
                </h2>
                <div className="flex flex-col md:flex-row flex-wrap gap-6">
                  {laboratories.map((lab, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex-1 min-w-[300px]"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {lab.name}
                      </h3>
                      <ul className="space-y-2">
                        {lab.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Staff Tab */}
            {activeTab === "staff" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Faculty
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  {facultyMembers.map((faculty, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-xs text-center">
                            Faculty Image
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {faculty.name}
                          </h3>
                          <p className="text-secondary font-medium">
                            {faculty.position}
                          </p>
                          <p className="text-gray-600 text-sm mb-3">
                            {faculty.role}
                          </p>

                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-semibold">
                                Qualification:
                              </span>{" "}
                              {faculty.qualification}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Academic Experience:
                              </span>{" "}
                              {faculty.academicExp}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Industry Experience:
                              </span>{" "}
                              {faculty.industryExp}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Areas of Interest:
                              </span>{" "}
                              {faculty.interests}
                            </p>
                            <p>
                              <span className="font-semibold">Research:</span>{" "}
                              {faculty.research}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activities Tab */}
            {activeTab === "activity" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Department Activities
                </h2>

                <div className="flex flex-col md:flex-row flex-wrap gap-8">
                  {[
                    {
                      title: "SE Confluence - A Freshers' Welcome Eve",
                      description:
                        "The Department of Civil Engineering hosted an unforgettable Freshers' Welcome Evening packed with exciting games, fun-filled activities, and a delicious lunch that brought everyone together!",
                      image: "/assets/images/activities/freshers.jpg",
                    },
                    {
                      title: "Project Poster Presentation",
                      description:
                        "Innovative minds at work! Our final-year civil engineering students showcased their groundbreaking projects in a poster presentation hosted by the Institution's Innovation Council.",
                      image:
                        "/assets/images/activities/poster-presentation.jpg",
                    },
                    {
                      title: "Bhorapgad Fort Cleaning",
                      description:
                        "Conservation trip to Bhorapgad Fort emphasizing environmental and historical preservation, reinforcing commitment to safeguarding Maharashtra's cultural legacy.",
                      image: "/assets/images/activities/fort-cleaning.jpg",
                    },
                    {
                      title: "Happy Meal Initiative",
                      description:
                        "Students initiated a Happy Meal Initiative for an orphanage, meticulously planning and preparing classic meals, fostering joy and connection.",
                      image: "/assets/images/activities/food-donation.jpg",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm overflow-hidden flex-1 min-w-[300px]"
                    >
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Activity Image</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {activity.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === "gallery" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Department Gallery
                </h2>
                <div className="flex flex-col md:flex-row flex-wrap gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm overflow-hidden flex-1 min-w-[200px]"
                    >
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">
                          Gallery Image {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Information */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="lg:w-3/4">
            {/* Testimonials Section */}
            <div className="bg-primary text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Student Success Stories
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs text-center">
                          Student Photo
                        </span>
                      </div>
                      <div>
                        <p className="italic mb-4">"{testimonial.text}"</p>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-white/80">
                            {testimonial.position}
                          </p>
                          <p className="text-secondary font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Accreditation Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-400 text-sm">NAAC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accreditation
              </h3>
              <p className="text-gray-700">
                ICEM has been accredited with 'B++' grade by "National
                Accreditation and Assessment Council" (NAAC).
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Explore Our Courses
              </h3>
              <div className="space-y-3">
                {[
                  "Civil Engineering",
                  "Computer Engineering",
                  "Mechanical Engineering",
                  "AI & Data Science",
                  "Electronics & Telecommunication",
                ].map((course, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-700 hover:text-secondary transition-colors py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {course}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-xl text-center text-white py-16 px-6 mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Civil Engineering Journey
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
            Join our Civil Engineering program and become part of a legacy that
            builds the future. Gain hands-on experience, learn from industry
            experts, and launch your career in one of the most dynamic fields.
          </p>
          <button className="bg-white text-secondary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
            Apply Now <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CivilEngineering;
