import React, { useState } from "react";

const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/0.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/0.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

// ✅ Simple, reliable YouTube embed converter
function toEmbedUrl(url) {
  if (!url) return "";
  const videoIdMatch =
    url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/) || [];
  const videoId = videoIdMatch[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

const CollegeUnplugged = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Indira College Unplugged
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT - Video List */}
          <div className="space-y-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video)}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition ${
                  selectedVideo.title === video.title
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-32 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-base font-medium text-gray-800 hover:underline">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - Main Video Player */}
          <div className="w-full h-[360px] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={toEmbedUrl(selectedVideo.url)}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeUnplugged;
