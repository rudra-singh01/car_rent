import { MapPin, Clock, Users } from "lucide-react";

export default function HowItsWork() {
  const steps = [
    {
      icon: MapPin,
      step: "STEP 1",
      title: "Book Your Car",
    },
    {
      icon: Clock,
      step: "STEP 2",
      title: "Your Pick-Up",
    },
    {
      icon: Users,
      step: "STEP 3",
      title: "Enjoy Your Ride",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4">
        {/* Title with stars */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[#1e90ff] text-2xl">★</span>
            <span className="text-[#f4442e] text-2xl">★</span>
            <span className="text-[#1e90ff] text-2xl">★</span>
          </div>
          <h2 className="text-4xl font-bold">HOW IT WORKS</h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step with icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#e5f5ff] rounded-full scale-[1.8]"></div>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#1e90ff]" />
                </div>
              </div>

              {/* Step text */}
              <span className="text-[#f4442e] font-medium mb-2">{step.step}</span>
              <h3 className="text-xl font-bold">{step.title}</h3>

              {/* Arrow for all except the last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2">
                  <svg
                    width="80"
                    height="24"
                    viewBox="0 0 100 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 12L80 0.226497V23.7735L100 12ZM0 14H82V10H0V14Z"
                      fill="#E5E7EB"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cars Image */}
        <div className="relative w-full h-64 md:h-[80vh]">
          <img
            src="https://www.snprentacar.com/images/resource/product-33.png"
            alt="Cars showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
