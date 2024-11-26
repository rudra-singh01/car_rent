import { Eye, Headphones, Car, Mountain } from 'lucide-react';

const SNPRentACarFeatures = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-1 mb-4">
            <span className="text-blue-500 text-2xl">★</span>
            <span className="text-red-500 text-2xl">★</span>
            <span className="text-blue-500 text-2xl">★</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">SNP RENT A CAR FEATURES</h2>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-between mb-8">
            {/* Left Column */}
            <div className="w-full sm:w-1/3 text-left sm:text-right sm:pr-8 mb-8 sm:mb-0">
              <div className="flex items-start justify-start sm:justify-end">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Safe Travel</h3>
                  <p className="text-xl text-gray-600 w-full sm:w-[70%] mx-auto sm:mx-28">
                    We take extra care in airing out and disinfect all our cars before and after every trip to eliminate all chances of communicable infection.
                  </p>
                </div>
                <div className="bg-red-500 rounded-full p-3 flex-shrink-0 ml-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="w-0 sm:w-1/3"></div>
            {/* Right Column */}
            <div className="w-full sm:w-1/3 text-left sm:text-left sm:pl-8">
              <div className="flex items-start">
                <div className="bg-red-500 rounded-full p-3 flex-shrink-0 mr-4">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Choose Your Vehicle</h3>
                  <p className="text-xl text-gray-600 w-full sm:w-[70%]">
                    We have many options to select i.e. Luxury, Sporty, Economy, Suv, or family-friendly, from which you can choose in a very affordable price.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Circle */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 sm:w-96 sm:h-96 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
              <img
                src="https://www.snprentacar.com/images/resource/product-9.png"
                alt="Luxury Car"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-8">
            {/* Left Column */}
            <div className="w-full sm:w-1/3 text-left sm:text-right sm:pr-8 mb-8 sm:mb-0">
              <div className="flex items-start justify-start sm:justify-end">
                <div className="mr-4">
                  <h3 className="font-bold text-2xl mb-2">Faster Process</h3>
                  <p className="text-xl text-gray-600 w-full sm:w-[70%] mx-auto sm:mx-28">
                    Our paperwork process is very easy & fast so that you can get the keys and enjoy your trip, It will also save your time for your next trip.
                  </p>
                </div>
                <div className="bg-red-500 rounded-full p-3 flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="w-0 sm:w-1/3"></div>
            {/* Right Column */}
            <div className="w-full sm:w-1/3 text-left sm:pl-8">
              <div className="flex items-start">
                <div className="bg-red-500 rounded-full p-3 flex-shrink-0 mr-4">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">24/7 Support</h3>
                  <p className="text-xl text-gray-600 w-full sm:w-[70%]">
                    Sit amet consectetur adipis incidid labore et dolore magna aliqua ut nostrud exercitation incidid labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SNPRentACarFeatures;
