// HeroSection.jsx
import React from "react";
import Indira from "../assets/ICEM_Banner.jpg";

const Home = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Junior Research Fellow",
      location: "Rajpura, Punjab - Chitkara University",
      description:
        "Kickstart Your Research Career @ Chitkara University! 🌐 🌑 We're hiring Junior Research Fellows (JRF) in Computer Science & E...",
      experience: "0-3 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "M.Tech & UGC.NET",
    },
    {
      id: 2,
      title: "Assistant Professor",
      location: "Rajpura, Punjab - Chitkara University",
      description:
        "Join Chitkara University as an Assistant Professor! Now Hiring: Assistant Professors at Chitkara University! We're hiring...",
      experience: "0-10 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "Ph.D",
    },
    {
      id: 3,
      title: "Software Developer",
      location: "Rajpura, Punjab - Chitkara University",
      description:
        "Looking for passionate software developers to join our tech team...",
      experience: "3-10 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "B.Tech/BCA/B.Sc.IT/M.Tech/MCA, M.Sc.IT",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative w-full h-[65vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 z-10"></div>
        <img
          src={Indira}
          alt="University Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Careers Section */}
      <div className="w-full h-screen bg-white"></div>
    </div>
  );
};

export default Home;
