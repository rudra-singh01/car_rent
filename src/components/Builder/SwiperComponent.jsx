import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SwiperComponent = () => {
  const images = [
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M5-2025/11821/1719462197562/front-left-side-47.jpg", // Replace with your actual image URLs
    "https://media.zigcdn.com/media/content/2024/Oct/cover_66ffec43a6c4c.jpg",
    "https://www.motortrend.com/uploads/sites/5/2018/03/BMW-M8-Gran-Coupe-Concept-front-side-view.jpg?w=768&width=768&q=75&format=webp",
    "https://www.motortrend.com/uploads/sites/5/2018/03/BMW-M8-Gran-Coupe-Concept-06.jpg",
    "https://www.netcarshow.com/BMW-M8_Competition_Gran_Coupe-2023-Side_Profile.4b1dd9c1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-10">
      {/* Large Swiper */}
      <div className="relative w-full h-screen overflow-hidden rounded-lg"> {/* Increased size here */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Small Swiper */}
      <div className="relative w-full max-w-3xl">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-24 h-24 flex-shrink-0 border-2 rounded-lg cursor-pointer ${
                currentIndex === index ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Navigation Buttons for Small Swiper */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
