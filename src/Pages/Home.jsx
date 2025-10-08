import React, { useRef, useEffect, useState } from "react";
import Indira from "../assets/ICEM.jpg";
import College from "../assets/ICEM_Banner.jpg";
import Juspay from "../assets/Juspay.jpeg";
import InstagramFeed from "./instagramFeed";

const Home = () => {
  const images = [Indira, College, Juspay];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
  setCurrentIndex(0);
  setIsTransitioning(true);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle seamless looping
  useEffect(() => {
    if (currentIndex === images.length) {
      // Wait until the transition finishes, then jump back instantly
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // same as CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images.length]);

  return (
    <div>
      {/* Hero Image Section */}
      {/* ✅ Hero Slider Section */}
     <div className="w-full relative overflow-hidden bg-black">
  <div
    ref={sliderRef}
    className={`flex ${
      isTransitioning
        ? "transition-transform duration-700 ease-in-out"
        : ""
    }`}
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {[...images, images[0]].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Slide ${i + 1}`}
        className="
          w-full 
          h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] 
          object-cover flex-shrink-0"
      />
    ))}
  </div>

  {/* Dots Indicator */}
  <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex justify-center gap-2">
    {images.map((_, i) => (
      <span
        key={i}
        className={`
          w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
          ${currentIndex % images.length === i ? "bg-primary" : "bg-gray-300"}
        `}
      ></span>
    ))}
  </div>
</div>


      {/* Explore Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Explore Your Potential with
          </h2>
          <h2 className="text-2xl font-bold text-secondary mb-4 leading-snug">
            INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Located near Pune, Indira College of Engineering & Management, one
            of the leading NAAC accredited engineering institutions, offers a
            world of learning to help you achieve your goals. Choose from
            industry-led programs, learn from outstanding faculty in
            state-of-the-art facilities, and access limitless placement
            opportunities with top campus recruiters. Join a vibrant community
            of students with ambitions as big as yours.
          </p>
        </div>

        {/* Ranking Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-28">
            <span className="text-gray-400 text-sm">[ NAAC Image Here ]</span>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-28">
            <span className="text-gray-400 text-sm">[ NIRF Image Here ]</span>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-28">
            <span className="text-gray-400 text-sm">
              [ QS Ranking Image Here ]
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-28">
            <span className="text-gray-400 text-sm">
              [ World Ranking Image Here ]
            </span>
          </div>
        </div>
      </div>

      {/* Discover Path Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Discover Your Path to Success
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Civil Engineering",
              "Computer Engineering",
              "Mechanical Engineering",
              "Artificial Intelligence and Data Science",
              "Electronics and Telecommunication",
              "First Year Engineering",
              "Information Technology",
              "Integrated MBA (BBA + MBA)",
              "Integrated MBA (BCA + MCA)",
              "MBA",
              "MCA",
              "M-Tech in Mechanical Engineering",
              "M-Tech in Computer Science",
            ].map((course, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-sm overflow-hidden group"
              >
                <div className="h-44 w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  [ Image Here ]
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium text-center py-3 px-2 transition-opacity duration-300 group-hover:bg-black/70">
                  {course}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Year 2026 + Apply Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section - Program List */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ACADEMIC <span className="text-secondary">YEAR 2026</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-gray-800">
              {[
                "Civil Engineering",
                "Computer Engineering",
                "Mechanical Engineering",
                "Artificial Intelligence and Data Science",
                "Electronics and Telecommunication",
                "First Year Engineering",
                "Information Technology",
                "Integrated MBA (BBA + MBA)",
                "Integrated MBA (BCA + MCA)",
                "MBA",
                "MCA",
                "M-Tech in Mechanical Engineering",
                "M-Tech in Computer Science",
              ].map((item, index) => (
                <p key={index} className="flex items-start text-sm">
                  <span className="text-secondary mr-2 font-bold">›</span>
                  <span className="hover:underline cursor-pointer hover:text-primary transition-colors">
                    {item}
                  </span>
                </p>
              ))}
            </div>
          </div>

          {/* Right Section - Apply Now Form */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Apply Now
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select State *</option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select City *</option>
                </select>
              </div>

              {/* Discipline first, Course below */}
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Discipline Applying For *</option>
              </select>

              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Course *</option>
              </select>

              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Program *</option>
              </select>

              <input
                type="text"
                placeholder="Enter CET Score"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Captcha Section */}
              <div className="flex gap-3 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2">
                  <span className="text-lg font-bold text-gray-700 select-none">
                    8fcb09
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to receive information regarding my submitted enquiry*
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-md transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Recruiters Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            INDIRA DEGREE OPENS DOORS. WIDE.
          </h2>

          <p className="text-gray-700 text-sm max-w-5xl mx-auto leading-relaxed mb-12">
            At Indira College of Engineering & Management, there is a strong
            focus on preparing every student to be industry ready. With numerous
            recruiters visiting our campus each year, our graduates gain access
            to a network of opportunities, resources, and the support needed to
            excel in a rapidly evolving job market.
          </p>

          {/* Placeholder for Recruiter Logos Image */}
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            [ Recruiter Logos Image Here ]
          </div>
        </div>
      </div>

      {/* Energy & Innovation Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-14 leading-snug">
            At Indira College of Engineering & Management, you will discover an
            Energy that runs through Everything and Everyone.
          </h2>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Card 1 */}
            <div>
              <div className="w-full h-60 bg-white/20 rounded-lg mb-4 flex items-center justify-center text-white/70 text-sm">
                [ Image 1 Here ]
              </div>
              <h3 className="text-lg font-semibold mb-2 underline underline-offset-4">
                Get Industry-ready
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                We ensure every graduate is industry-ready through cutting-edge
                curriculum, innovation labs, and strong industry collaborations
                that keep students aligned with the latest technologies and
                trends.
              </p>
              <p className="text-white font-medium hover:underline cursor-pointer flex items-center gap-2">
                Know more <span>➜</span>
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="w-full h-60 bg-white/20 rounded-lg mb-4 flex items-center justify-center text-white/70 text-sm">
                [ Image 2 Here ]
              </div>
              <h3 className="text-lg font-semibold mb-2 underline underline-offset-4">
                Research from Day One
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                At Indira College, research is a way of life, supported by
                state-of-the-art facilities, experienced faculty, and
                collaborations that empower students to solve real-world
                challenges.
              </p>
              <p className="text-white font-medium hover:underline cursor-pointer flex items-center gap-2">
                Know more <span>➜</span>
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="w-full h-60 bg-white/20 rounded-lg mb-4 flex items-center justify-center text-white/70 text-sm">
                [ Image 3 Here ]
              </div>
              <h3 className="text-lg font-semibold mb-2 underline underline-offset-4">
                Start-up
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Indira College's Innovation Incubator equips students with
                design, prototyping, marketing, and funding resources, turning
                start-up ideas into impactful ventures that shape the future.
              </p>
              <p className="text-white font-medium hover:underline cursor-pointer flex items-center gap-2">
                Know more <span>➜</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Beat Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Campus Beat
          </h2>

          {/* Subtext */}
          <p className="text-gray-700 text-lg max-w-5xl leading-relaxed mb-10">
            From celebrity talks to Lit Fests and interactions with industry
            icons, our campus pulses with energy, big ideas, and unforgettable
            moments — making student life dynamic, buzzing, inspiring, and full
            of meaningful connections & opportunities.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  [ Image {index + 1} Here ]
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Indira College Unplugged Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Indira College Unplugged
          </h2>

          {/* Video Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Video List */}
            <div className="space-y-6">
              {/* Video 1 */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-gray-500 text-sm rounded-md">
                  [ Thumbnail 1 ]
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-primary transition-colors">
                    Bharat Unbound | The Indira College Journey
                  </h3>
                  <p className="text-sm text-gray-600">
                    Available soon on our media channel
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-gray-500 text-sm rounded-md">
                  [ Thumbnail 2 ]
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-primary transition-colors">
                    Experience Excellence at Indira College | World-Class
                    Education
                  </h3>
                </div>
              </div>

              {/* Video 3 */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-gray-500 text-sm rounded-md">
                  [ Thumbnail 3 ]
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-primary transition-colors">
                    A Journey of Learning, Research & Inspiring Excellence
                  </h3>
                </div>
              </div>

              {/* Video 4 */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-gray-500 text-sm rounded-md">
                  [ Thumbnail 4 ]
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-primary transition-colors">
                    A Journey of Academic & Professional Transformation |
                    Virtual Tour 2025
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - YouTube Player Placeholder */}
            <div className="w-full h-[360px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              [ YouTube Video Iframe Here ]
            </div>
          </div>
        </div>
      </div>

      {/* Our Faculty Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Faculty, Our Strength
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-6xl leading-relaxed mb-10">
            Indira College of Engineering & Management's faculty combines
            academic rigor with real-world expertise, guiding students to think
            critically and creatively. Alongside our accomplished professors, we
            host distinguished guest faculty, including industry leaders and
            global experts, who bring fresh perspectives and practical insights.
            Together, they ensure learning is dynamic, relevant, and prepares
            students for future success.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  [ Image {index + 1} Here ]
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* News & Announcements Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              News & Announcements
            </h2>
            <button className="text-sm text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors">
              See All News <span className="text-lg">→</span>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Main News */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                  [ Main News Image Here ]
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 hover:underline cursor-pointer">
                    Indira College and Industry Partner Launch Innovation Centre
                    for Research and Emerging Technologies
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">
                    Indira College has launched a new Innovation Centre in
                    collaboration with industry leaders, an initiative designed
                    to promote research, innovation, and technology-driven
                    solutions for modern challenges.
                  </p>
                  <p className="text-sm text-gray-500">
                    Published on — October 2, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right News List */}
            <div className="space-y-6">
              {[
                {
                  tag: "RANKINGS",
                  title:
                    "Indira Business School Among India's Top Institutions in GHRDC Rankings",
                  date: "September 26, 2025",
                },
                {
                  title:
                    "Director Leads Dialogue on Transforming India's Education Ecosystem",
                  date: "September 26, 2025",
                },
                {
                  title:
                    "Indira Faculty Chairs Session on Strengthening India's Global Education Network",
                  date: "September 26, 2025",
                },
              ].map((news, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-32 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    [ Img ]
                  </div>
                  <div>
                    {news.tag && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        {news.tag}
                      </span>
                    )}
                    <h4 className="text-base font-semibold text-gray-900 hover:underline cursor-pointer hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Published on — {news.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Conferences & Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Academic Conferences & Events
            </h2>
            <button className="text-sm text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors">
              See All <span className="text-lg">→</span>
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                date: "10th – 11th October, 2025",
                title:
                  "8th World Engineering Conference on Contemporary Technologies",
              },
              {
                date: "10th – 11th November, 2025",
                title: "Indira College Doctoral Consortium",
              },
              {
                date: "28th – 29th November, 2025",
                title:
                  "1st International Conference on Cyber Security & Data Protection",
              },
              {
                date: "12th – 13th December, 2025",
                title:
                  "International Conference on Applied Data Science and Smart Systems",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                  [ Event Image ]
                </div>
                <div className="p-4">
                  <p className="text-primary font-semibold text-sm mb-2">
                    {event.date}
                  </p>
                  <h4 className="text-gray-900 font-medium text-base">
                    {event.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-xl text-center text-white py-14 px-6">
            <h2 className="text-3xl font-bold mb-4">
              Shape Your Future with Us
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
              Discover limitless opportunities at Indira College, where
              innovation, learning, and industry connect. Take the first step
              towards your dreams. Explore our programs and get in touch to
              begin your journey with us.
            </p>
            <button className="bg-white text-secondary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              Get in touch <span className="text-xl">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Blogs & Insights Section */}
      
   


      <InstagramFeed />
    </div>
  );
};

export default Home;
