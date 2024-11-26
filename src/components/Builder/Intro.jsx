import React from 'react';

const Intro = ({ info, secondary }) => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Image Section */}
      <div className="h-full">
        <img
          className="w-full h-full object-cover"
          src="https://www.bmw-special-sales.com/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-special-sales-protection-vehicle-protection-sd-01.jpg"
          alt="About Us Background"
        />
      </div>

      {/* Overlay Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">{info}</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">{secondary}</p>
      </div>
    </div>
  );
};

export default Intro;

