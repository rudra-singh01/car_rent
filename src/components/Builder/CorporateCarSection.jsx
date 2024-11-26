const CorporateCarSection = ({image}) => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 w-full px-4 lg:px-20">
            {/* Stars decoration */}
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <span className="text-2xl text-blue-500">—★</span>
              <span className="text-2xl text-red-500">★</span>
              <span className="text-2xl text-blue-500">★—</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              CORPORATE CAR RENTAL
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              SNP Rent A Car Tour and Travels offer customized Corporate rental programs 
              designed specifically to meet your {"company's"} transportation needs while saving 
              you time and money at suitable rates on premium and luxury car rental choices.
            </p>
          </div>
  
          {/* Right Image */}
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <img
              src={image}
              alt="Corporate car service"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default CorporateCarSection