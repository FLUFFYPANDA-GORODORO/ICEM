import React, { useRef, useEffect, useState } from "react";
import Banner1 from "../../assets/ICEMBANNER27.jpg";
import Banner2 from "../../assets/ICEMBANNERMECH.jpg";
import Banner3 from "../../assets/ICEMBANNERCOMP.jpg";
import Banner4 from "../../assets/ICEMBANNERAPPLE.jpg";
import Banner5 from "../../assets/ICEMBANNERCLASS.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      // When on last slide, transition smoothly to fake "next"
      setIsTransitioning(true);
      setCurrentIndex(images.length);
      setTimeout(() => {
        // Instantly reset to first image without animation
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // match transition duration
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      // Go to last image smoothly from the first
      setIsTransitioning(false);
      setCurrentIndex(images.length - 1);
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {/* Add clone of first image at end for smooth loop */}
        {[...images, images[0]].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-5 flex gap-2 items-center">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
              currentIndex % images.length === i
                ? "bg-primary w-8"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-3 right-5 flex gap-3">
        <button
          onClick={handlePrev}
          className="bg-gray-600 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-600 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
