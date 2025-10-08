import { useState } from "react";
import Banner from "../../assets/ICEM_Banner.jpg";
import Students from "../../assets/studentsraisinghands.jpg";
import { FaBriefcase, FaGlobe, FaLightbulb, FaIndustry } from "react-icons/fa";
import BEComp from "../../assets/BEComp.pdf";

function Placement() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Placement Team");
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="w-full h-[60vh] relative">
        <img
          src={Banner}
          alt="Indira College Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
            Industry Ready Program
          </h1>
        </div>
      </section>

      {/* Career Advancement Services (CAS) Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
            Career Advancement Services (CAS)
          </h2>
          <p className="text-md text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            At Indira College, we don't just prepare students for jobs—we
            prepare them for thriving careers. Our Career Advancement Services
            (CAS) team is dedicated to building strong industry-academia
            collaborations, ensuring that our students have access to the best
            career opportunities while top companies gain access to the finest
            talent.
          </p>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Internships */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Internships: Learn by Doing
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We believe experience is the best teacher. That's why we offer
                6-month to 1-year summer and winter internships across all our
                schools, allowing students to apply their knowledge in
                real-world settings. These internships equip students with
                industry exposure, practical skills, and a competitive edge in
                the job market.
              </p>
            </div>

            {/* Placements */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Record Breaking Placements
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our stellar placements ensure the perfect launchpad for careers
                with global giants like Google, Deloitte, and Amazon. The CAS
                team matches talent with opportunity, offering career guidance,
                skill-building workshops, and recruitment training—ensuring
                students enter the workforce with confidence and a clear path to
                success.
              </p>
            </div>

            {/* Industry Network */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left  max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Strong Industry Network
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our deep-rooted ties with leading companies ensure that our
                students have a competitive edge. From exclusive recruitment
                opportunities to industrial training, we ensure they are able to
                thrive in world's top organisations. Regular industry
                interactions, corporate talks, and live projects prepare them
                for dynamic career opportunities.
              </p>
            </div>
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
              <h3 className="text-4xl font-bold text-secondary mb-2">₹27 LPA</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Highest Package
              </p>
              <p className="text-gray-600 text-sm">
                offered to a student by global giant Amazon
              </p>
            </div>

            {/* Students */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">₹10 LPA</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                870+ Students
              </p>
              <p className="text-gray-600 text-sm">
                Received Super Dream Offers from Juspay
              </p>
            </div>

            {/* Companies */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">2000+</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Recruiting Companies
              </p>
              <p className="text-gray-600 text-sm">
                visit our campus annually for student placements
              </p>
            </div>

            {/* Graduates */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-secondary mb-2">72%</h3>
              <p className="text-lg font-semibold text-primary mb-2">
                Indira Graduates
              </p>
              <p className="text-gray-600 text-sm">
                earn higher salary than market average
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Partnerships & MOUs Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200  shadow-md p-8 bg-white">
            {/* Left Image Placeholder */}
            <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium ">
              (image here)
            </div>

            {/* Right Content */}
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

              {/* Placeholder Boxes for Logos */}
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
      </section>
      {/* Research Labs & Facilities Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200 shadow-md p-8 bg-white">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Research Labs & Facilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Indira College is committed to fostering a culture of research
                and innovation through state-of-the-art research labs in AI,
                Data Science, Cybersecurity, Robotics, and Engineering Sciences.
                Our research ecosystem enables students and faculty to work on
                breakthrough technologies, collaborate with global institutions,
                and contribute to industry-focused Research and Development.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                Industry & Research Collaborators:
              </h3>

              {/* Placeholder Boxes for Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Adobe",
                  "Airtel",
                  "Biocon",
                  "DRDO",
                  "Honda",
                  "Intel",
                  "ISRO",
                  "NVIDIA",
                  "Philips",
                  "Siemens",
                  "Texas Instruments",
                  "TCS",
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="w-full h-20 bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 text-sm font-medium"
                  >
                    (image here)
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full h-[520px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
              (image here)
            </div>
          </div>
        </div>
      </section>

      {/* Centre of Excellence */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200 shadow-md p-8 bg-white">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Centres of Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Indira College's Centres of Excellence (CoEs) serve as the
                epicentre of industry-academia collaboration, equipping students
                with cutting-edge skills, industry-recognised certifications,
                and exposure to real-world challenges. Each CoE is established
                in partnership with global leaders, ensuring students get
                hands-on training, live projects, and access to the latest
                technology
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                COE Partners:
              </h3>

              {/* Placeholder Boxes for Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Adobe",
                  "Airtel",
                  "Biocon",
                  "DRDO",
                  "Honda",
                  "Intel",
                  "ISRO",
                  "NVIDIA",
                  "Philips",
                  "Siemens",
                  "Texas Instruments",
                  "TCS",
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="w-full h-20 bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 text-sm font-medium"
                  >
                    (image here)
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full h-[520px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
              (image here)
            </div>
          </div>
        </div>
      </section>
      {/* For Students: Building Future Leaders */}
      <section
        className="relative py-20 bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${Students})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            For Students: Building Future Leaders
          </h2>

          {/* Subheading */}
          <p className="text-lg max-w-4xl mx-auto mb-14 leading-relaxed opacity-90">
            Indira College goes beyond placements, focusing on holistic career
            development. Leadership training, entrepreneurship opportunities,
            and real-world problem-solving empower students to excel as future
            leaders. With industry-aligned curricula, structured collaborations,
            and cutting-edge training, we prepare graduates not just for their
            first job, but for lifelong success.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1️⃣ Internships & Industry Exposure */}
            <div className="bg-white/10 border border-white/20 p-8 shadow-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <FaBriefcase className="text-5xl mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">
                  Internships & Industry Exposure
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Our students gain hands-on experience through paid
                  internships, semester-long industry immersions, and global
                  internship opportunities with leading brands like FIFA and
                  Disney.
                </p>
              </div>
            </div>

            {/* 2️⃣ Global Learning Opportunities */}
            <div className="bg-white/10 border border-white/20 p-8 shadow-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <FaGlobe className="text-5xl mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">
                  Global Learning Opportunities
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  With collaborations across 300+ global institutions, our
                  students explore international internships, semester
                  exchanges, and dual-degree programs in Europe, North America,
                  and Asia.
                </p>
              </div>
            </div>

            {/* 3️⃣ Skills That Set You Apart */}
            <div className="bg-white/10 border border-white/20 p-8 shadow-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <FaLightbulb className="text-5xl mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">
                  Skills That Set You Apart
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Beyond academics — presentation, communication, and leadership
                  skills through resume workshops, mock interviews, and
                  professional development sessions.
                </p>
              </div>
            </div>

            {/* 4️⃣ Industry-Specific Expertise */}
            <div className="bg-white/10 border border-white/20 p-8 shadow-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <FaIndustry className="text-5xl mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">
                  Industry-Specific Expertise
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Industry-driven curriculum co-created with experts: live
                  projects, case studies, certifications, and technical training
                  ensure job readiness from day one.
                </p>
              </div>
            </div>
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
      {/* For Recruiters: Upgrade your Workforce */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
            For Recruiters: Upgrade your Workforce
          </h2>
          <p className="text-md text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            Whether your organisation is looking to hire exceptional,
            industry-ready talent for jobs or internships, engage directly with
            students and faculty, collaborate across multiple levels, or explore
            research opportunities — we will work with you to craft an
            engagement strategy aligned with your company's interests.
          </p>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Summer & Winter Internships
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We understand the importance of hands-on experience in preparing
                students for their careers. That is why we offer summer and
                winter internships for 6 months to 1 year across all our
                schools. Our students are available for internships in various
                fields, giving companies the opportunity to train and work with
                the next generation of leaders.
              </p>
            </div>

            {/* Placements */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Talent Acquisition
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our Career Advancement Services team is committed to providing
                students with the best opportunities and industry partners with
                the brightest minds. We connect companies with top tier talent.
                Through combined placement drives, we streamline recruitment,
                offering companies access to a wider pool of candidates across
                campuses.
              </p>
            </div>

            {/* Industry Network */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left  max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Program Co-creation
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We collaborate with industry experts to co-create curricula that
                aligns with current trends and real-world challenges. This
                ensures our programs are industry-relevant, equipping our
                students with a competitive edge. Through ongoing partnerships
                and feedback, we ensure that our graduates are prepared for the
                workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Students for Career Success Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center border border-gray-200 shadow-md bg-white overflow-hidden">
            {/* Left Text Section */}
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Empowering Students for Career Success
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Indira College, we don't just prepare students for jobs—we
                shape their future for long-term career growth and stability.
                Industry readiness is not an add-on; it is ingrained in every
                aspect of our education. With over <strong>2,000+</strong>{" "}
                organisations recruiting from our campus each year, we have
                established ourselves as a preferred talent hub for top
                employers across industries.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
                Our strong placement record reflects our commitment to ensuring
                that students step into the workforce with confidence and
                competence. We ensure that our students are industry-ready from
                day one, equipped with the right mix of technical expertise,
                soft skills, and real-world experience.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="bg-gray-200 h-64 md:h-full flex items-center justify-center text-gray-500 text-base font-medium">
              (image here)
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase">
            Indira Degree Opens Doors. Wide.
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            At Indira College, there is an intensive focus on ensuring every
            student is industry-ready. With more than{" "}
            <strong>2000 recruiters</strong> visiting our campus each year, our
            graduates receive the support, resources, and opportunities they
            need to thrive in a dynamic global job market.
          </p>

          {/* Company Placeholder Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="h-20 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                (image here)
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Placement Information Section */}
      <section className="py-16 bg-gray-50">
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