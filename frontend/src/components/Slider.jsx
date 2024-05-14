import React, { useState, useEffect } from "react";

const Slider = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) =>
        prevTranslateX <= -1500 ? 0 : prevTranslateX - 1
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider overflow-hidden">
      <div
        className="containeri flex"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <div className="sliderImg bg-pink-600 flex items-center justify-center font-supply text-lg text-black font-bold uppercase">
          <p className="mr-12">Stay tuned for 2024</p>
          <p className="mr-12">Stay tuned for 2024</p>
          <p className="mr-12">Stay tuned for 2024</p>
          <p className="mr-12">Stay tuned for 2024</p>
          <p className="mr-12">Stay tuned for 2024</p>
          <p className="mr-12">Stay tuned for 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
