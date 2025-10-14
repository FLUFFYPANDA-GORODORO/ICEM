import { useState, useEffect } from "react";
import Banner from "../../assets/ICEMBANNERPLACEMENT.jpg";
import Students from "../../assets/studentsraisinghands.jpg";
import {
  FaUserGraduate,
  FaHandshake,
  FaLightbulb,
  FaIndustry,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import BEComp from "../../assets/BEComp.pdf";
import TrainingOverviewImg from "../../assets/trainingoverview2.png";

const words = ["Future", "Success", "Career", "Journey", "Impact", "Legacy"];
const testimonials = [
  {
    logo: "Logo Here",
    quote:
      "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare students for the industry.",
    name: "Mr. Rahul Bagale",
    position: "Group HR Head – Force Motors",
  },
  {
    logo: "Logo Here",
    quote:
      "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further.",
    name: "Mr. Siddharth Moorthy",
    position: "Managing Director – Vascon Engineers",
  },
  {
    logo: "Logo Here",
    quote:
      "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
    name: "Ms. Shilpi Mahar",
    position: "Manager, TA – Data Axle",
  },
  {
    logo: "Logo Here",
    quote:
      "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals.",
    name: "Ms. Sumana Chakraborty",
    position: "HR Business Partner – Bridgestone India",
  },
  {
    logo: "Logo Here",
    quote:
      "ICEM has been a part of the Ready Engineers Programme for a long time. Their way of creating resources ensures a transformative experience that prepares students effectively for the corporate world.",
    name: "Mr. Sushant Kumar",
    position:
      "India Lead – University Relations & Campus Recruitment, Tata Technologies",
  },
];
function Placement() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Placement Team");

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Words to cycle through dynamically

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing forward
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Deleting backward
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="w-full relative">
        {/* Background Banner */}
        <img
          src={Banner}
          alt="Indira College Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Typing Text Button Section */}
      <div className="flex justify-center items-center pr-6 pt-14 md:-mt-12 relative z-10">
        <button className="bg-primary text-white px-6 py-3 rounded-full text-2xl font-semibold shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
          Crafting Your{" "}
          <span className="relative inline-block text-white font-bold">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>
        </button>
      </div>

      {/* Cursor Blink Animation */}
      <style>
        {`
    @keyframes blink {
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-start infinite;
    }
  `}
      </style>

      {/* Career Advancement Services (CAS) Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
            We turn your potential into placement.
          </h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            Indira College of Engineering and Management ensures every student
            steps into the industry with confidence. From specialized training
            to top-tier recruiter connect, our placement ecosystem is built to
            transform academic learning into real-world success
          </p>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IRP */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 text-left rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Industry Readiness Programme (IRP)
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                IRP is curated by Gryphon Academy to be a structured training
                initiative designed to prepare students for the real-world
                demands of the corporate world. It focuses on building technical
                expertise, professional communication, problem-solving
                abilities, workplace discipline, and overall confidence. Through
                hands-on training, mentorship, and industry-aligned modules, IRP
                ensures that every student graduates with the skills, mindset,
                and readiness to excel from day one in their careers.
              </p>
            </div>

            {/* CLDP */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 text-left rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Career Leadership Development Programme (CLDP)
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                CLDP is conceptualized by Gryphon Academy as a specialized
                framework that trains the future MBA professionals to evolve
                into industry-ready leaders. It focuses on building aptitude,
                business communication, digital presence, and domain-specific
                competencies essential for corporate success. Through systematic
                training, guided mentorship, and specialization-driven modules,
                CLDP ensures every student is prepared to step confidently into
                leadership roles and achieve long-term career growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
            Training Overview
          </h2>

          {/* Section Description */}
          <p className="text-md text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Structured training across core and domain-specific areas,
            meticulously designed to equip students with the skills, knowledge,
            and industry readiness required for professional success.
          </p>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={TrainingOverviewImg}
              alt="Training Overview Summary"
              className=" shadow-md w-full "
            />
          </div>
        </div>
      </section>
      {/* Our Impact in Numbers Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Our Impact in Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highest Package */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">
                ₹27 LPA
              </h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Highest Package
              </p>
            </div>

            {/* Students */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">
                ₹8.16LPA
              </h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Average Package
              </p>
            </div>

            {/* Companies */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">350+</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Recruiting Companies
              </p>
            </div>

            {/* Graduates */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Placement Assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200  shadow-md p-8 bg-white">
            
            <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium ">
              (image here)
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Industry Partnerships & MOUs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our robust industry engagement model is built on{" "}
                <strong>300+ strategic MOUs</strong>
                with leading organisations across multiple sectors. These
                collaborations help shape career-ready graduates through
                co-created curricula, live corporate projects, and direct
                recruitment pipelines. Immersive experiences, industry
                certifications, and guest mentorship make our students stand out
                in hiring.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-2">
                Key Industry Partners:
              </h3>

              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "amazon",
                  "bosch",
                  "capgemini",
                  "cognizant",
                  "deloitte",
                  "ey",
                  "fortis",
                  "grant-thornton",
                  "hcl",
                  "infosys",
                  "siemens",
                  "wipro",
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="w-full h-20 bg-gray-200  flex items-center justify-center text-gray-500 text-sm font-medium"
                  >
                    (image here)
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Research Labs & Facilities Section */}
      {/* Research Labs & Facilities Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200 shadow-md p-8 bg-white rounded-lg">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Research Labs & Facilities
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                ICEM stands as a hub of innovation and experiential learning,
                where technology, creativity, and research converge. Every
                laboratory and facility is designed to nurture curiosity,
                encourage experimentation, and build industry-relevant
                expertise. These spaces empower students to translate concepts
                into real-world solutions, fostering hands-on learning,
                interdisciplinary collaboration, and future-ready innovation.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                Key Facilities Include:
              </h3>

              {/* ✅ Replaced Logos with List */}
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Programming Labs – I & II</li>
                <li>Artificial Intelligence & Research Labs – I & II</li>
                <li>Project Lab</li>
                <li>Database Management System Lab</li>
                <li>iOS (Apple) Lab</li>
                <li>Robotics & Automation Lab</li>
                <li>Mechatronics Lab</li>
                <li>CAD & Modelling Lab</li>
                <li>Electronics & Digital Electronics Labs</li>
                <li>Communication & IoT Labs</li>
              </ul>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full h-[580px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium rounded-md">
              (image here)
            </div>
          </div>
        </div>
      </section>

      {/* For Students: Building Future Leaders */}
      {/* Section Wrapper */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20"
        style={{ backgroundImage: `url(${Students})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Career is Our Mission.
          </h2>

          {/* Subheading */}
          <p className="text-lg max-w-3xl mx-auto mb-14 leading-relaxed text-gray-200">
            Your potential is limitless, and so are your opportunities at ICEM.
            We merge academic rigor with real-world readiness, empowering you
            with the skills, network, and experience to excel.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {[
              {
                icon: <FaUserGraduate className="text-4xl mb-2 text-primary" />,
                title: "Alumni Mentorship & Placement Guidance",
                desc: "Connect with our powerful network of accomplished alumni for one-on-one mentorship. Get personalized guidance on career paths, resume building, and interview strategies to land your dream role.",
              },
              {
                icon: <FaHandshake className="text-4xl mb-2 text-primary" />,
                title: "Corporate Partnerships & Recruitment Drive",
                desc: "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from exclusive recruitment drives, on-campus placements, and direct access to sought-after employers actively seeking ICEM talent.",
              },
              {
                icon: <FaLightbulb className="text-4xl mb-2 text-primary" />,
                title: "Internships & Industry Exposure",
                desc: "Theory meets practice through mandatory, paid internships with our partner companies. From semester-long projects in Pune to global opportunities, gain invaluable hands-on experience that makes your resume stand out.",
              },
              {
                icon: <FaIndustry className="text-4xl mb-2 text-primary" />,
                title: "Career Development Workshops",
                desc: "We polish your professional edge. Through a continuous schedule of workshops—from mastering communication and leadership to acing mock interviews and building a powerful personal brand—we ensure you are not just qualified, but truly job-ready.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 hover:border-primary/40 hover:bg-white/15 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                {/* ✅ Centered content */}
                <div className="flex flex-col items-center text-center flex-1 justify-between">
                  {card.icon}
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upskilling for the Future Section (Balanced Compact Layout) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future
          </h2>

          {/* Skillverse Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Skillverse: Gaining a Competitive Edge
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To keep students ahead in an evolving job market, Skillverse
                offers industry-specific certifications in AI, Digital
                Marketing, Finance, and other emerging domains. With training
                modules focusing on leadership skills, case studies, and live
                projects, students emerge as highly skilled professionals ready
                to thrive in a competitive landscape.
              </p>
            </div>
          </div>

          {/* URA Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                University Readiness Academy (URA): A Launchpad for Success
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The University Readiness Academy (URA) is an exclusive
                upskilling initiative that empowers students with advanced
                technical and business skills through hands-on training and
                projects, ensuring graduates excel in placements and corporate
                roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staying Future-Ready Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading and Intro */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
            Staying Future-Ready
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            At Indira College, industry readiness is seamlessly woven into our
            DNA. Through structured collaborations, cutting-edge training
            programs, and an industry-aligned curriculum, we ensure our students
            are prepared not just for their first job, but for a lifetime of
            career success. Your future begins here.
          </p>

          {/* 1️⃣ Board of Studies */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Board of Studies: Keeping Our Curriculum Aligned with Industry
                Needs
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our Board of Studies, comprising academicians and industry
                leaders, plays a crucial role in keeping our curriculum aligned
                with industry trends. By integrating the latest technologies and
                essential workplace skills, we foster critical thinking,
                innovation, and problem-solving abilities. This ensures that our
                graduates remain relevant and highly sought after by recruiters.
              </p>
            </div>
          </div>

          {/* 2️⃣ Professors of Practice */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 md:w-[35%] h-48 md:h-[180px] flex items-center justify-center text-gray-500 text-sm font-medium">
              (image here)
            </div>

            {/* Right Text */}
            <div className="p-5 md:w-[65%] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Professors of Practice: Learning from Industry Leaders
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                At Indira College, learning extends beyond textbooks through our
                Professors of Practice (PoP) initiative. With over 50 industry
                veterans actively involved in teaching, students gain insights
                into industry expectations, challenges, and best practices.
                These experts mentor students on real-world projects, case
                studies, and job-readiness strategies, enriching their learning
                experience with practical exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Trusted by the Best in the Business
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-14 leading-relaxed">
            Our strongest endorsements come from our recruitment partners.
            Discover why leading companies consistently choose ICEM graduates to
            drive their success.
          </p>

          {/* Horizontal Testimonial Cards */}
          <div className="flex flex-col space-y-5">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center text-left bg-primary/90 text-secondary shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 gap-6"
              >
                {/* Logo Circle */}
                <div className="flex-shrink-0 w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-sm font-medium text-gray-50">
                  {item.logo}
                </div>

                {/* Quote Section */}
                <div className="flex-1">
                  <FaQuoteLeft className="text-primary text-lg mb-2" />
                  <p className="italic leading-relaxed text-sm md:text-base">
                    {item.quote}
                  </p>
                  <FaQuoteRight className="text-primary text-lg mt-2" />
                </div>

                {/* Author Info */}
                <div className="text-center md:text-right md:w-1/4">
                  <h3 className="text-sm md:text-base font-bold text-secondary">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black">
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Information Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Placement Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Sidebar Tabs */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2">
                {[
                  "Placement Team",
                  "Our Recruiters",
                  "Placed Students",
                  "Placement Policy",
                ].map((tab, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 rounded-md cursor-pointer font-medium ${
                      activeTab === tab
                        ? "bg-tertiary border-l-4 border-secondary text-secondary"
                        : "hover:bg-gray-100 text-primary"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Accordion */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg">
              {/* Overview Accordion */}

              {activeTab === "Placement Team" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. About the Placement Cell",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            Placements give students the opportunity to gain
                            skills specific to their subject or industry of
                            choice as well as the employability skills required
                            for real-life work. It also increases their
                            knowledge of an industry or sector, allowing them to
                            make better-informed decisions about future career
                            choices.
                          </p>
                          <p className="mb-4 text-primary">
                            The Training & Placement department facilitates the
                            process of placement of students passing out from
                            the Institute besides collaborating with leading
                            organizations in setting up internship and training
                            programs for students. It enables them to get the
                            right direction and training to fulfil their dreams.
                          </p>
                          <p className="mb-4 text-primary">
                            The inculcation of guidance about market patterns
                            and employability helps the students in polishing
                            their skills — making a job available to every
                            student according to his capabilities.
                          </p>
                          <p className="text-primary">
                            To ensure the preparedness of students well before
                            they start facing recruiters, the dedicated Talent
                            Management Team under the placement cell edifies
                            students professionally. With the proper placement
                            and training, students learn how to put forth their
                            knowledge and abilities in the right way to fetch
                            the best of jobs.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Training Activities",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Create awareness about "career planning" and "career
                            mapping".
                          </li>
                          <li>
                            Organize training programmes in Quantitative
                            Aptitude, Logical Reasoning and Verbal Reasoning.
                          </li>
                          <li>Equip the students with life skills.</li>
                          <li>
                            Train the students on "Personality Development".
                          </li>
                          <li>
                            Conduct mock interviews and group discussions to
                            prepare students for corporate expectations.
                          </li>
                          <li>
                            Conduct online tests and written aptitude tests.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Placement Team Details",
                      content: (
                        <div className="space-y-3 text-primary">
                          <p>
                            <strong>
                              Director - Placement & Corporate Relations:
                            </strong>{" "}
                            Mr. J. S. Sidhu
                          </p>
                          <p>
                            <strong>Designation:</strong> Director - Placement &
                            Corporate Relations, Indira College of Engineering
                            and Management
                          </p>
                          <p>
                            <strong>Mobile:</strong> 9823091852
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            <a
                              href="mailto:js.sidhu@indiraicem.ac.in"
                              className="text-secondary underline"
                            >
                              js.sidhu@indiraicem.ac.in
                            </a>
                          </p>
                          <blockquote className="italic text-gray-600 mt-4 border-l-4 border-secondary pl-4">
                            "THERE IS NO ELEVATOR TO SUCCESS. YOU HAVE TO TAKE
                            THE STAIRS."
                          </blockquote>
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Our Recruiters Accordion */}
              {activeTab === "Our Recruiters" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. ICEM Top Recruiters",
                      content: (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-primary">
                          {[
                            "CLSA",
                            "Z S Solutions",
                            "R Systems",
                            "e-Zest",
                            "Infosys",
                            "Schlumberger",
                            "Tibco Software",
                            "KPMG",
                            "KPIT",
                            "Zycus Infotech",
                            "GS Labs",
                            "Odessa Technologies",
                            "Xoriant",
                            "Cybage",
                            "QED Baton",
                            "Sigma Electric",
                            "Pubmatic",
                            "Syntrosys",
                            "NeilSoft Limited",
                            "Meditab",
                            "Obara Corporation",
                            "Samsung",
                            "VANDERLANDE",
                            "Jaya Hind Industries",
                            "Sanmar Group",
                            "Forbes Marshall",
                            "Finolex Industries",
                            "Sandvik",
                            "JK Tyre",
                            "Steria",
                            "Anglo Eastern",
                            "Webtech Developers Pvt. Ltd",
                            "Asahi Glass",
                            "Amura Marketing Technologies",
                            "ATG",
                            "Forgeahead Solutions Pvt. Ltd",
                            "Excelize",
                            "Larsen & Toubro Infotech",
                            "Pernod Ricard",
                            "Bridgestone India Pvt. Ltd.",
                            "Finolex Pipes",
                            "Bitwise Solutions Pvt Ltd",
                            "SKF India Ltd.",
                            "Benchmark IT solutions",
                            "3DPLM",
                            "Vascon Engineers Pvt. Ltd",
                            "Emcure India",
                            "Gradmener Technology Pvt. Ltd.",
                            "Force Motors",
                            "Expat Properties India Ltd",
                            "Premium Transmission",
                            "Greeksoft Technologies Pvt Ltd",
                            "Hettich",
                            "ZF India",
                            "Kinetic",
                            "Vodafone",
                            "Spam Pumps",
                            "Suzlon",
                            "Everest Industries Ltd.",
                            "Fasttrack Software",
                            "Dimetrix Technology",
                            "Wishtree Technology",
                            "Open Silicon",
                            "Talent Beat",
                            "Gabriel India Ltd",
                            "Savy Soft",
                            "Amdocs",
                            "Zuti Engineering",
                            "Wipro",
                            "NTT Data",
                            "TCS",
                            "Hitachi",
                            "Persistent",
                            "Hurix",
                            "Capgemini",
                            "Alpha Health Venture",
                            "Quinnox, Inc.",
                            "Triveni Turbines",
                            "Mphasis",
                            "Globus Soft",
                            "Syntel",
                            "Impact Services",
                            "QuikHeal",
                            "Tech Mahindra",
                            "Harbinger Group",
                            "ADOR Welding Ltd.",
                            "HP",
                            "JUSPAY",
                            "Eternus",
                            "Syngenta",
                            "Cognizant",
                            "Jade Global",
                            "IBM",
                            "Prolifics",
                            "Barclays",
                            "Fiserv India",
                            "ATOS",
                            "Angular Minds Pvt Ltd",
                            "Tata Technologies",
                            "Avalara",
                            "Ennovate IT",
                            "Tudip Technologies",
                            "Infinite Computing",
                            "Gridlogics",
                            "Hexaview Technologies",
                            "Quorum Software",
                            "Crelio Health",
                            "Worldline India",
                            "SAS",
                            "Data Axle",
                            "NeoSoft Technologies",
                            "Merkle Sokrati (A dentsu Company)",
                            "Coditas Solutions LLP",
                            "RNF Technologies",
                            "InnoEye Technologies",
                            "Ace-micromatics",
                            "Polycab",
                            "Neilsoft Ltd.",
                            "Yardi Software",
                            "TVS Logistics Services Ltd.",
                            "FIS Global",
                            "Yazaki Solutions Pvt. Ltd",
                            "rtCamp Solutions Pvt. Ltd",
                            "Finquick Technology",
                            "Wolters Kluwer",
                            "Centium Consulting India",
                            "Indovance Pvt. Ltd.",
                            "Enpro Industries",
                            "Faurecia",
                            "Samson Controls Pvt. Ltd",
                            "VRF Aircon",
                            "Tetrapak",
                            "Blue Star India Ltd",
                            "Thyssenkrupp",
                            "DHL Supply Chain India",
                            "vConstruct Pvt. Ltd.",
                            "Knest Manufacturers LLP",
                            "AON | Sobha Developers",
                            "Plank and Weave India Pvt. Ltd.",
                            "Sell.do",
                            "GKN Powder Metullargy",
                            "Veritas Technologies",
                            "L&T Infotech",
                            "KSB Tech Pvt. Ltd.",
                            "Kinlong Hardware India Pvt. Ltd.",
                            "Polyrub Cooper Standard FTS Pvt. Ltd",
                            "DeltaX",
                            "Prometteur Solutions Pvt Ltd",
                            "eBaoTech India",
                            "Arihant Adroit InfoSystems Pvt. Ltd. (AAIS Global)",
                            "Equations Work",
                            "Synoptek",
                            "SANKEY BUSINESS SOLUTIONS PVT LTD",
                            "Visteon",
                            "Zepto",
                            "Wolters Kluwer",
                            "Deepak Fertilisers & Petrochemicals Ltd",
                            "Palo Alto Networks",
                            "Yash Technologies",
                            "TM Automotive Seating Systems Pvt. Ltd.",
                            "Triveni Turbines",
                            "Hexaware Technologies",
                            "Fundsroom Investment Services",
                            "Deltax",
                            "Namma Yatri",
                            "RDC Concrete",
                          ].map((company, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <span className="text-secondary font-medium">
                                {company}
                              </span>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Placed Students Accordion */}
              {activeTab === "Placed Students" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Placed Students 2024-25",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2024-25
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Placed Students 2023-24",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2023-24
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Placed Students 2022-23",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Placed Students 2021-22",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2021-22
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "5. Placed Students 2020-21",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2020-21
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "6. Placed Students 2019-20",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2019-20
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "7. Placed Students 2018-19",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2018-19
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "8. Placed Students 2017-18",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2017-18
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Placement Policy & Guidelines Accordion */}
              {activeTab === "Placement Policy" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Overview",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            The role of the Training and Placement Cell is that
                            of a facilitator and counselor for placement-related
                            activities. The Training and Placement Cell provides{" "}
                            <strong>100% placement assistance</strong>
                            to all registered students as per the norms provided
                            here.
                          </p>
                          <p className="text-primary">
                            The placement team endeavors to assist all genuinely
                            interested and eligible B.E. students in beginning
                            their careers with organizations of repute.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Registration Process",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            Students interested in placements need to register
                            themselves as per the registration link provided,
                            which includes their academic details and contact
                            information in the VI Semester.
                          </p>
                          <p className="text-primary">
                            Students failing to submit/update their details by
                            the end of the VI semester will{" "}
                            <strong>
                              not be permitted to attend interviews
                            </strong>
                            starting from the VII semester onwards.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "3. Selection of Companies",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>Job profile and growth prospects.</li>
                          <li>The package being offered by the company.</li>
                          <li>Past record of recruitment at ICEM.</li>
                          <li>Feedback from Alumni regarding the company.</li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Eligibility Criteria",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Minimum aggregate of 60% or above from SSC onwards.
                          </li>
                          <li>No backlog subjects in B.E.</li>
                          <li>
                            Minimum of 60% score in internal marks, soft skill,
                            technical, and aptitude training conducted by the
                            institute.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "5. Placement Rules",
                      content: (
                        <>
                          <p className="mb-3 text-primary">
                            The placement committee strictly enforces a
                            <strong>
                              {" "}
                              "One Student - One Job Offer" policy
                            </strong>
                            .
                          </p>
                          <p className="font-semibold mb-2 text-primary">
                            Company Categories:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-primary">
                            <li>
                              <strong>Category A:</strong> Companies offering
                              CTC ≥ ₹4 LPA.
                            </li>
                            <li>
                              <strong>Category B:</strong> Companies offering
                              CTC ≥ ₹1.8 LPA but less than ₹4 LPA.
                            </li>
                            <li>
                              <strong>Category C:</strong> Companies offering
                              CTC &lt; ₹1.8 LPA.
                            </li>
                          </ul>

                          <p className="mt-4 mb-2 font-semibold text-primary">
                            Additional Rules:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-primary">
                            <li>
                              Once a student's name is submitted for an
                              interview and they do not attend, they will be{" "}
                              <strong>blacklisted</strong> and fined ₹1000
                              (subject to management approval).
                            </li>
                            <li>
                              Once placed, students cannot appear for any
                              further interviews.
                            </li>
                            <li>
                              Students withdrawing during a selection process
                              will be disqualified for the rest of the year.
                            </li>
                            <li>
                              Students opting out of the placement process must
                              submit a written letter to the placement head
                              stating their reason.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      title: "6. Dress Code & Conduct",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Students must be <strong>formally dressed</strong>{" "}
                            during any company interaction.
                          </li>
                          <li>
                            Men: Formal shirt, trousers, tie, and leather shoes.
                          </li>
                          <li>
                            Women: Salwar-Kameez or formal shirt and trousers.
                          </li>
                          <li>
                            Misbehavior with placement cell staff or student
                            representatives will result in immediate
                            disqualification from placements.
                          </li>
                          <li>
                            Any false information in resumes will lead to
                            de-registration from the placement process.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "7. Policy Revisions",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            If market conditions or job scenarios necessitate
                            changes, the placement policy may be revised to{" "}
                            <strong>maximize student benefit</strong>.
                          </p>
                          <p className="text-primary">
                            The placement cell will select student coordinators
                            from all streams every December/January (post 5th
                            semester) to assist in the process.
                          </p>
                        </>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Placement;
