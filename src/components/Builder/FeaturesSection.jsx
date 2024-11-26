import { Car, Clock, Shield } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Safe Travel",
      description: "We take extra care in airing out and disinfect all our cars before and after every trip to eliminate all chances of communicable infection.",
      link: "#safe-travel"
    },
    {
      icon: Clock,
      title: "Faster Process",
      description: "Our paperwork process is very easy & fast so that you can get the keys and enjoy your trip, It will also save your time for your next trip.",
      link: "#faster-process"
    },
    {
      icon: Car,
      title: "Choose Your Vehicle",
      description: "We have many options to select i.e. Luxury, Sporty, Economy, Suv, or family-friendly, from which you can choose in a very affordable price range.",
      link: "#choose-vehicle"
    }
  ]

  return (
    <section className="relative bg-white z-10">
      {/* Top angular shape */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-[#f4442e]">
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-[30px] sm:h-[45px] md:h-[60px]" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path 
              fill="white" 
              d="M0,0 L1440,0 L1440,60 L0,60 L0,0 Z M0,60 L1440,0 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-4 p-4 sm:p-6 md:p-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#e5f5ff] rounded-full scale-[1.8]" />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#f4442e]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base w-full sm:w-[80%] md:w-[60%] mb-4 sm:mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a 
                href={feature.link}
                className="text-[#f4442e] font-semibold inline-flex items-center hover:text-[#d63a26] transition-colors text-sm sm:text-base"
              >
                READ MORE
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

