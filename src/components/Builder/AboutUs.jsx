export default function AboutUs({imageUri}) {
  return (
    <section className="bg-white z-10">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4 sm:p-6 md:p-10">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4 sm:mb-8">About Us</h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              SNP Rent A Car are a team of highly experienced, energetic professionals with decades of practical knowledge to provide the best travel solutions for business or leisure. Our expansion plans include building a capable and effective pan India network of travel professionals to grow with us and setting new trends in the travel industry. In the near future, we aspire to go international/overseas and bring the same synergy in overseas travel markets. SNP Rent A Car. offers best and effective travel solutions to business, leisure, student, incentive travel worldwide.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We introduce ourselves as a fast-growing Tour Operator and Travel Agent who has been in the tourism industry. It has been engaged in providing a variety of services for the corporate world and tourists coming from different parts of the country. Corporate World has recognized SNP Rent A Car for its services in the field of transport and tourism. Our company caters to all your requirements like Car rentals, Coach rentals, Ticketing, Corporate service, Package tours, Honeymoon tours, Pilgrimage tours, etc. under one roof. We assure you safety and comfort.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We provide cab service all over india. Prices are very fair in comparison to other companies. We have experienced and professional cab driver, luxury cars, neat and clean cars.
            </p>

            <button className="px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base capitalize bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
              View more
            </button>
          </div>

          {/* Image Section with Circular Overlay */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full mt-8 lg:mt-0">
            <img 
              src={imageUri} 
              alt="Car key handover"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
            
            {/* Circular Overlay */}
            <div className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-white rounded-full w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 flex flex-col items-center justify-center shadow-lg p-2 sm:p-4">
              <span className="text-blue-600 text-xs sm:text-sm font-medium">BOOKING FOR</span>
              <span className="text-[#f4442e] font-bold text-base sm:text-lg text-center">SNP RENT A CAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

