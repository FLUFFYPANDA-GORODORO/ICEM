import React from "react";

const CollegeUnplugged = () => {
  const videos = [
    {
      title: "Bharat Unbound | The Indira College Journey",
      subtitle: "Available soon on our media channel",
    },
    {
      title: "Experience Excellence at Indira College | World-Class Education",
    },
    {
      title: "A Journey of Learning, Research & Inspiring Excellence",
    },
    {
      title: "A Journey of Academic & Professional Transformation | Virtual Tour 2025",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Indira College Unplugged
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {videos.map((video, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-gray-500 text-sm rounded-md">
                  [ Thumbnail {index + 1} ]
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  {video.subtitle && (
                    <p className="text-sm text-gray-600">{video.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[360px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            [ YouTube Video Iframe Here ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeUnplugged;