import React from "react";

const Slider = () => {
  return (
    <div className="overflow-hidden">
      <style>
        {`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100% ); 
          }
        }
      
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        `}
      </style>

      <div className="flex space-x-0 animate-slide">
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
        <div className="flex-shrink-0 bg-pink-600 text-black font-supply font-bold text-xl uppercase p-4">
          <p>Stay tuned for 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
