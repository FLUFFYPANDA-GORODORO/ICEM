// HeroSection.jsx
import React from 'react';

const Hero = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Junior Research Fellow",
      location: "Rajpura, Punjab - Chitkara University",
      description: "Kickstart Your Research Career @ Chitkara University! 🌐 🌑 We're hiring Junior Research Fellows (JRF) in Computer Science & E...",
      experience: "0-3 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "M.Tech & UGC.NET"
    },
    {
      id: 2,
      title: "Assistant Professor",
      location: "Rajpura, Punjab - Chitkara University",
      description: "Join Chitkara University as an Assistant Professor! Now Hiring: Assistant Professors at Chitkara University! We're hiring...",
      experience: "0-10 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "Ph.D"
    },
    {
      id: 3,
      title: "Software Developer",
      location: "Rajpura, Punjab - Chitkara University",
      description: "Looking for passionate software developers to join our tech team...",
      experience: "3-10 Years",
      jobType: "Full Time",
      domain: "Education",
      education: "B.Tech/BCA/B.Sc.IT/M.Tech/MCA, M.Sc.IT"
    }
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  YOUR DREAMS.
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  YOUR GOALS.
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  YOUR UNIVERSITY.
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Shape your future with world-class education and endless opportunities for your career growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Dummy Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full h-80 lg:h-96 bg-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">University Campus Image</p>
                  <p className="text-sm">Students learning and collaborating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
              
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.location}</p>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Experience:</span>
                        <p className="text-gray-600">{job.experience}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Job Type:</span>
                        <p className="text-gray-600">{job.jobType}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Domain:</span>
                        <p className="text-gray-600">{job.domain}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Mandatory Education:</span>
                        <p className="text-gray-600">{job.education}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-8">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
                <span className="px-2 text-gray-600">...</span>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">6</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center">
                  Next <span className="ml-1">►</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Post A Job
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Jobs</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Overview</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Life @ Chitkara</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Work Benefits</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Hiring Process</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Employee Speak</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;