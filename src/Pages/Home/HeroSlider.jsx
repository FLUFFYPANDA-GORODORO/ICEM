import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:8080/api/banners";

const HeroSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // ✅ Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(API_URL);
        if (res.data && res.data.length > 0) {
          setImages(res.data.map((b) => b.imageUrl)); // expects [{id, imageUrl}, ...]
        } else {
          toast("No banners found, showing fallback images");
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
        toast.error("Failed to load banners from server");
      }
    };
    fetchImages();
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const handleNext = () => {
    if (images.length === 0) return;

    if (currentIndex === images.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex(images.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider container */}
      <div className="relative w-full overflow-hidden bg-black rounded-xl">
        {images.length > 0 ? (
          <>
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
                  className="w-full  object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* ✅ Dots (kept same as original styling) */}
            <div className="absolute bottom-5 right-5 flex gap-2 items-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-1.5 w-6 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex % images.length === i
                      ? "bg-primary w-8"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px] text-gray-400">
            No banners available
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSlider;
