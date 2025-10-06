import React from "react";
import research from "../../assets/research.jpg"; // your uploaded image path

const Research = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={research}
          alt="Innovation at Indira College"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
          <div className="max-w-2xl bg-black/60 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Innovation that Makes a Difference
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Turn ideas into impact through real-world research, invention, and
              entrepreneurial thinking. Our research culture encourages
              curiosity, creativity, and collaboration — empowering students and
              faculty to pioneer solutions that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">
          Research & Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Indira College, research and innovation are not confined to
          laboratories—they are embedded in the culture. We empower our students
          and faculty to imagine, investigate, and implement solutions for
          real-world challenges. From internationally recognised research
          outputs to cutting-edge prototypes, our ecosystem supports every stage
          of innovation
        </p>
      </section>
      {/* Our Impact in Numbers Section */}
      <section className="py-5 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-lg md:text-4xl font-bold text-blue-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Year after year, Indira College has been recognized among the top
            institutions in India for pioneering research and innovation. This
            reflects our strong research team, advanced infrastructure, and
            unwavering commitment to developing new ideas and emerging
            technologies.
          </p>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "5000+",
                label: "Patents Successfully Filed",
              },
              {
                number: "51+",
                label: "Highly Acclaimed Centres of Excellence",
              },
              {
                number: "₹90 Cr+",
                label: "Research Grants Received",
              },
              {
                number: "11000+",
                label: "Scopus-indexed Research Papers",
              },
              {
                number: "17+",
                label: "Joint Research Projects with Global Universities",
              },
              {
                number: "Erasmus+ Program",
                label: "Empowering Education through Global Collaboration",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
                  {item.number}
                </h3>
                <p className="font-semibold text-gray-800 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vibrant Research Ecosystem Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
            Vibrant Research Ecosystem
          </h2>
          <p className="text-gray-700 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
            From breakthroughs in sustainable technologies to transformative
            research in healthcare and AI, Indira College’s vibrant research
            ecosystem drives innovation, empowers communities, and inspires
            global scientific progress.
          </p>

          {/* Research Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                13690+ Publications & 97000+ Citations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Indira’s growing publication record reflects its commitment to
                impactful research that resonates globally. Our strong citation
                index stands as a testament to our academic credibility and
                innovation.
              </p>
            </div>

            {/* 2 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Global Research Network Across 140+ Countries
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborations with over 180 institutions and 3700+
                international authors enable interdisciplinary breakthroughs
                across fields such as Computer Science, Engineering, and Life
                Sciences.
              </p>
            </div>

            {/* 3 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Focus on UN Sustainable Development Goals (SDGs)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With thousands of publications aligned with the SDGs, our
                researchers actively address challenges in Good Health &
                Well-being, Clean Energy, and Industry Innovation.
              </p>
            </div>

            {/* 4 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Undergraduate Research Participation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We nurture early research aptitude—our undergraduates engage in
                real-world problem-solving, contributing to impactful papers and
                industry-ready projects.
              </p>
            </div>

            {/* 5 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Global Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our faculty and researchers have been recognized among the Top
                2% Scientists globally, spanning diverse domains of science,
                engineering, and technology.
              </p>
            </div>

            {/* 6 */}
            <div className="border border-gray-200 shadow-md bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Sponsored Research & Funding Success
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over ₹90 Crores in competitive research grants, our faculty
                are continuously driving cutting-edge projects aligned with
                national and international priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Central Prototyping Facility Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Central Prototyping Facility
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed">
            At Indira College, research and innovation are not confined to
            laboratories – they are embedded in our culture. We empower students
            and faculty to imagine, investigate, and implement real-world
            solutions that make a lasting impact.
          </p>

          {/* Three Gray Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Advanced Prototyping Infrastructure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our state-of-the-art facility includes CO₂ laser cutting
                  machines, FDM 3D printers, 3-axis vertical milling machines,
                  and industry-grade metal forming & surface coating equipment
                  for precision prototyping and fabrication.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Free Access for Students and Faculty
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The facility is provided at no cost to students and faculty,
                  encouraging hands-on experimentation and prototype
                  development, fostering innovation and collaborative learning.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium border-b border-gray-300">
                (image here)
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Real-World Impact
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>42 projects supported with CAD designing</li>
                  <li>74 projects 3D printed</li>
                  <li>36 projects utilized laser cutting</li>
                  <li>
                    14 projects fabricated using machining and surface
                    treatments
                  </li>
                  <li>
                    1000+ corporate gifts created using these technologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conferences on Research & Innovation Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Conferences on Research & Innovation
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            At Indira College, conferences are an extension of our innovation
            culture. We bring together researchers, thought leaders, and
            students to exchange ideas, present breakthroughs, and encourage
            collaborations that address real-world challenges through
            interdisciplinary research and forward-thinking discussions.
          </p>

          {/* Conference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  29th - 30th August, 2025
                </p>
                <h3 className="text-lg font-bold text-blue-700 leading-snug">
                  2nd International Conference on Machine Learning Algorithms
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  7th - 9th August, 2025
                </p>
                <h3 className="text-lg font-bold text-blue-700 leading-snug">
                  29th Conference on VLSI Design and Test
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                (image here)
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-700 font-medium mb-2">
                  28th - 29th September, 2025
                </p>
                <h3 className="text-lg font-bold text-blue-700 leading-snug">
                  International Conference on Management & Information Systems
                  at Thailand
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Prototypes Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
            Student Prototypes at a Glance
          </h2>
          <p className="text-gray-700 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
            Fuelled by curiosity and a drive to innovate, Indira College
            students transform ideas into functional prototypes. These creations
            showcase their technical expertise, creativity, and problem-solving
            mindset—bringing real-world solutions to life through hands-on
            learning and collaboration.
          </p>

          {/* Prototypes List */}
          <div className="space-y-6">
            {/* Prototype 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  InteLights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  InteLights is an AI-powered traffic management system that
                  optimises signal timing using real-time traffic data, reducing
                  wait times, fuel usage, and vehicular emissions.
                </p>
              </div>
            </div>

            {/* Prototype 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Video Laryngoscope
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Video laryngoscopes enhance laryngeal view and support remote
                  monitoring and cloud storage—offering ease of use for both
                  beginner and experienced anaesthesiologists.
                </p>
              </div>
            </div>

            {/* Prototype 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">E-Bike</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Smart Electric Bike transforms old motorcycles into
                  eco-friendly, low-maintenance rides with remote ignition,
                  digital display, and enhanced performance for sustainable
                  commuting.
                </p>
              </div>
            </div>

            {/* Prototype 4 - New */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Cold Storage Robot
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Designed for agricultural applications, the Cold Storage Robot
                  helps preserve perishables using smart temperature monitoring
                  and autonomous storage mechanisms.
                </p>
              </div>
            </div>

            {/* Prototype 5 - New */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition-all">
              <div className="col-span-1 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium h-48 md:h-full">
                (image here)
              </div>
              <div className="col-span-3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Smart Water Quality Analyzer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This IoT-based prototype analyzes pH, turbidity, and
                  contamination levels in real time, alerting users through a
                  connected app for water safety and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Innovation & Start-up Culture Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Student Innovation & Start-up Culture
          </h2>

          {/* Subtitle */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-12">
            Driven by an entrepreneurial spirit and a passion for solving
            real-world problems, students at Indira College are leading a
            vibrant culture of innovation and start-ups. From breakthrough
            product ideas to scalable tech-enabled ventures, they're turning
            creativity into impact—building sustainable solutions that shape
            industries and communities alike.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                NewGen IEDC – Pre-incubation Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our New Generation Innovation and Entrepreneurship Development
                Centre (NewGen IEDC), funded by the Department of Science &
                Technology, supports student-led innovations through mentorship
                and funding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                INR 2 Crores+ in Prototype Grants
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over the past five years, 114 student projects have received
                prototyping grants, enabling breakthrough innovations across
                diverse domains. These have led to 60 patents and the creation
                of 20 thriving start-ups.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 shadow-md bg-gray-50 text-left p-8 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                From Ideas to Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Projects range from AI drones and biofuel reactors to low-cost
                medical devices and AR-based learning tools, showcasing
                innovation across disciplines and real-world applications that
                impact industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
