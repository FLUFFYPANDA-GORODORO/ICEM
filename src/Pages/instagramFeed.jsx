import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Create the Elfsight script tag dynamically
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span role="img" aria-label="instagram" className="text-pink-500 text-3xl">
          📸
        </span>
        Connect with us on social{" "}
        <span className="text-primary font-semibold">#IndiraCollege</span>
      </h2>

      {/* Elfsight Widget */}
      <div
        className="elfsight-app-65043cf7-b51d-4cfb-8865-033a04ad190c"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default InstagramFeed;
