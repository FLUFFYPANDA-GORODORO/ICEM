import React, { useState } from "react";
import ICEM_Banner from "../../assets/ICEM_Banner.jpg";

const testimonials = [
  {
    name: "Vidya Nair",
    company: "KPMG",
    position: "Analyst IT Audit",
    text: `Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full confidence & that key to the success is taught through various activities held by placement cell in ICEM.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  {
    name: "Rahul Sharma",
    company: "Infosys",
    position: "Software Engineer",
    text: `The Student Welfare program at ICEM has been instrumental in my overall development. The Earn & Learn scheme helped me financially while providing valuable work experience. The faculty support and guidance were exceptional throughout my journey.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  {
    name: "Priya Patel",
    company: "Wipro",
    position: "System Analyst",
    text: `I'm grateful for the opportunities provided by the Student Development Cell. The various workshops and training sessions helped me develop both technical and soft skills. The committee members were always approachable and supportive.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
];

const StudentWelfare = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
      {/* Hero Section */}
      <div className="w-full h-[65vh] relative">
        <img
          src={ICEM_Banner}
          alt="Student Welfare Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Welfare</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Empowering Students for Holistic Development and Success
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              {[
                { id: "overview", label: "Overview" },
                { id: "committees", label: "Committees" },
                { id: "welfare", label: "Welfare Scheme" }
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
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Objectives of the Students' Development Cell
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Propose various schemes from the Board of Students' Development (BSD) at Savitribai Phule Pune University (SPPU) and ensure their effective implementation once approved by BSD, SPPU.",
                    "Form a student council in accordance with BSD, SPPU guidelines, guiding students in fulfilling their responsibilities and implementing various schemes and welfare activities.",
                    "Serve as a liaison between the institute and SPPU, attend meetings at BSD, SPPU, and coordinate meetings with SDC faculty and student members.",
                    "Ensure the follow-up, implementation, and auditing of approved BSD, SPPU schemes."
                  ].map((objective, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Committees Tab */}
            {activeTab === "committees" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Student Development Cell Committee Members
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {committeeMembers.map((member, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Department:</span> {member.department}</p>
                        <p><span className="font-medium">Contact:</span> {member.contact}</p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          <a href={`mailto:${member.email}`} className="text-secondary hover:underline">
                            {member.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Welfare Scheme Tab */}
            {activeTab === "welfare" && (
              <div className="space-y-8">
                <div className="bg-[#fff4e1] rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Karmaveer Bhaurao Patil Earn & Learn Scheme
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Indira College of Engineering and Management, Pune, offers the Karmaveer Bhaurao Patil Earn & Learn Scheme for financially needy students. Sponsored by the Board of Students' Development, Savitribai Phule Pune University, this scheme provides students with opportunities to work in various labs, the library, and other areas within the college.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-4">Objectives</h3>
                      <ul className="space-y-3 text-gray-700">
                        {[
                          "To provide financial assistance to economically weaker, needy, and promising students",
                          "Upholding the dignity of human labor",
                          "To become a knowledge Servant",
                          "Motivating students about self-employment",
                          "Creating awareness of work culture among students"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-secondary mr-2 font-bold">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-4">Eligibility</h3>
                      <ul className="space-y-3 text-gray-700">
                        {[
                          "Parental annual income of Rs. 8,00,000/- or less",
                          "Income proof required (Tehsildar certificate or Form No. 16)",
                          "Applicable to regular degree or postgraduate students",
                          "Minimum 75% class attendance required"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-secondary mr-2 font-bold">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Opportunities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Laboratory Assistance",
                        "Library Support",
                        "Research Assistance",
                        "Technical Tasks",
                        "Administrative Work",
                        "Field Work",
                        "Computer-based Tasks",
                        "Skill Development"
                      ].map((work, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-700">{work}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Scheme Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary">Working Hours</h4>
                        <p className="text-gray-700">Up to 3 hours per day, maximum 75 hours per month</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Remuneration</h4>
                        <p className="text-gray-700">₹55 per hour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Holidays</h4>
                        <p className="text-gray-700">August 15th, January 26th, and May 1st</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-primary text-white rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover flex-shrink-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg mb-6 italic">"{currentTestimonial.text}"</p>
                  <div>
                    <p className="font-bold text-xl">{currentTestimonial.name}</p>
                    <p className="text-gray-300">{currentTestimonial.position}</p>
                    <p className="text-secondary font-semibold">{currentTestimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition shadow-lg"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === testimonialIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition shadow-lg"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Accreditation Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-sm">NAAC</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accreditation</h3>
            <p className="text-gray-700">
              ICEM has been accredited with 'B++' grade by "National Accreditation and Assessment Council" (NAAC).
            </p>
          </div>

          {/* Quick Links Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Explore Our Courses
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Civil Engineering",
                "Computer Engineering",
                "Mechanical Engineering",
                "AI & Data Science",
                "Electronics & Telecommunication"
              ].map((course, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-secondary transition-colors py-2 border-b border-gray-100 last:border-b-0"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-secondary text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-6">
              Have questions about student welfare programs? Reach out to our Student Development Cell.
            </p>
            <button className="bg-white text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition w-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-xl text-center text-white py-16 px-6">
          <h2 className="text-3xl font-bold mb-6">Join Our Student Community</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
            Become part of a vibrant community that supports your academic and personal growth. 
            Explore our welfare schemes and development programs designed to help you succeed.
          </p>
          <button className="bg-white text-secondary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
            Learn More About Programs <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentWelfare;