import ServiceLocations from "../Builder/ServiceLocations";

const Cities = () => {
  return (
    <div className="w-full">
      <div className="heading w-full py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="flex justify-center space-x-1 mb-4">
          <span className="text-blue-500 text-2xl">★</span>
          <span className="text-red-500 text-2xl">★</span>
          <span className="text-blue-500 text-2xl">★</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4">Our Operation Cities</h1>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="map w-full lg:w-[60%]">
            <img 
              src="https://www.snprentacar.com/images/cities-we-covered.jpg" 
              alt="Cities we cover map" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="name w-full lg:w-[40%] h-[60vh] lg:h-[80vh] bg-black overflow-y-auto rounded-lg shadow-md">
            <ServiceLocations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;

