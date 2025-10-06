import React from "react";
import Banner from "../../assets/ICEM_Banner.jpg";
import Students from "../../assets/studentsraisinghands.jpg";
import { FaBriefcase, FaGlobe, FaLightbulb, FaIndustry } from "react-icons/fa";

function Placement() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Career Advancement Services (CAS)
          </h2>
          <p className="text-md text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            At Indira College, we don’t just prepare students for jobs—we
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
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                Internships: Learn by Doing
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We believe experience is the best teacher. That’s why we offer
                6-month to 1-year summer and winter internships across all our
                schools, allowing students to apply their knowledge in
                real-world settings. These internships equip students with
                industry exposure, practical skills, and a competitive edge in
                the job market.
              </p>
            </div>

            {/* Placements */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
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
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                Strong Industry Network
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our deep-rooted ties with leading companies ensure that our
                students have a competitive edge. From exclusive recruitment
                opportunities to industrial training, we ensure they are able to
                thrive in world’s top organisations. Regular industry
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
              <h3 className="text-4xl font-bold text-blue-700 mb-2">₹27 LPA</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Highest Package
              </p>
              <p className="text-gray-600 text-sm">
                offered to a student by global giant Amazon
              </p>
            </div>

            {/* Students */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">₹10 LPA</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                870+ Students
              </p>
              <p className="text-gray-600 text-sm">
                Received Super Dream Offers from Juspay
              </p>
            </div>

            {/* Companies */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">2000+</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Recruiting Companies
              </p>
              <p className="text-gray-600 text-sm">
                visit our campus annually for student placements
              </p>
            </div>

            {/* Graduates */}
            <div className="bg-white shadow-md border border-blue-100 p-8">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">72%</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
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

              <h3 className="text-lg font-semibold text-blue-800 mb-2">
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
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

              <h3 className="text-lg font-semibold text-blue-800 mb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
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

              <h3 className="text-lg font-semibold text-blue-800 mb-4">
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
                <FaBriefcase className="text-5xl mb-4 text-blue-400" />
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
                <FaGlobe className="text-5xl mb-4 text-blue-400" />
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
                <FaLightbulb className="text-5xl mb-4 text-blue-400" />
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
                <FaIndustry className="text-5xl mb-4 text-blue-400" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            For Recruiters: Upgrade your Workforce
          </h2>
          <p className="text-md text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            Whether your organisation is looking to hire exceptional,
            industry-ready talent for jobs or internships, engage directly with
            students and faculty, collaborate across multiple levels, or explore
            research opportunities — we will work with you to craft an
            engagement strategy aligned with your company’s interests.
          </p>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 text-left max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
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
              <h3 className="text-lg font-bold text-blue-700 mb-4">
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
              <h3 className="text-lg font-bold text-blue-700 mb-4">
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Empowering Students for Career Success
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Indira College, we don’t just prepare students for jobs—we
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
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

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white mb-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Industry Ready?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Indira College and kickstart your career with our comprehensive
            industry-ready program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Placement;
