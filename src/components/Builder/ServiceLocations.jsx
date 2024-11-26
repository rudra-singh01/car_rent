export default function ServiceLocations() {
    const cities = [
      // Left Column
      "DELHI",
      "GURGAON",
      "NOIDA",
      "MUMBAI",
      "BANGLORE",
      "CHENNAI",
      "HYDERABAD",
      "PUNE",
      "LUCKNOW",
      "VARANASI",
      "RANCHI,REWA",
      // Right Column
      "COIMBATOR",
      "HUBLI",
      "MANGALORE",
      "AURANGABAD",
      "JAIPUR",
      "NAGPUR",
      "INDORE",
      "RAIPUR",
      "BHOPAL"
    ]
  
    return (
      <div className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="flex items-center"
            >
              <span className="w-2 h-2 bg-white rounded-full mr-3" />
              <span className="text-white text-lg font-medium tracking-wide">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  