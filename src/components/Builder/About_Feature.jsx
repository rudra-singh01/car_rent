import { Car, Clock, Shield } from 'lucide-react'

export default function About_Feature() {
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
      description: "Our paperwork process is very easy & fast so that you can get the keys and enjoy your trip, It will also save your time for your next trip by avoiding few.",
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
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#f4442e]">
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-[30px] sm:h-[60px]" viewBox="0 0 1440 30" preserveAspectRatio="none">
            <path 
              fill="white" 
              d="M0,0 L1440,0 L1440,30 L0,30 L0,0 Z M0,30 L1440,0 L1440,30 L0,30 Z"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-6 lg:p-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#e5f5ff] rounded-full scale-[1.8]" />
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#f4442e]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 w-full sm:w-[80%] lg:w-[60%] mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a 
                href={feature.link}
                className="text-[#f4442e] font-semibold inline-flex items-center hover:text-[#d63a26] transition-colors"
              >
                READ MORE
                <svg 
                  className="w-4 h-4 ml-2" 
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
      
      <div className="call flex flex-col items-center justify-center gap-10">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-center px-4'>Call Now For Booking +91-9811313632</h1>
        <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[#f4442e] text-2xl">-★</span>
            <span className="text-[#1e90ff] text-2xl">★</span>
            <span className="text-[#f4442e] text-2xl">★-</span>
          </div>
      </div>
    </section>
  )
}

