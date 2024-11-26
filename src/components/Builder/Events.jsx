import  { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const statsData = [
    { id: 1, vehicles: "100", trips: "300", events: "200" },
    { id: 2, vehicles: "150", trips: "400", events: "250" },
    { id: 3, vehicles: "200", trips: "500", events: "300" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % statsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + statsData.length) % statsData.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-black bg-opacity-80 min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{backgroundImage: "url('/placeholder.svg?height=400&width=1200')"}}
      ></div>

      {/* Images on the left and right */}
      <div className="absolute hidden md:block left-4 md:left-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <img src="/placeholder.svg?height=100&width=100" alt="Car 1" className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover transform -skew-x-12" />
        <img src="/placeholder.svg?height=100&width=100" alt="Car 2" className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover transform -skew-x-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-white text-center px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {['vehicles', 'trips', 'events'].map((stat) => (
            <div key={stat} className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-bold mb-2 transition-all duration-500 ease-in-out">
                {statsData[currentIndex][stat]}
              </p>
              <p className="text-sm md:text-base uppercase tracking-wider">{stat}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Previous stat"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Next stat"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="absolute hidden md:block right-4 md:right-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <img src="/placeholder.svg?height=100&width=100" alt="Car 3" className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover transform skew-x-12" />
        <img src="/placeholder.svg?height=100&width=100" alt="Car 4" className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover transform skew-x-12" />
      </div>
    </div>
  );
};

export default Events;

