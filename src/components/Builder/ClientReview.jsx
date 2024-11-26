import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ClientReview() {
  const [currentReview, setCurrentReview] = useState(0)
  
  const reviews = [
    {
      text: "snprentacar from Angad Car rentals was given a duty on a last moment for a specific irregular vehicle requirement at the odd timing means super early morning. He owns his duty so professionally that I did not have to do anything after I called him. Happy to consider him and his company for all my future cab Requirements. I wish him Best of Luck for all future endeavours",
      name: "VISHAL BHATIA",
      location: "India"
    },
    {
      text: "Excellent service provided by SNP Rent A Car. The vehicle was clean and well-maintained. Driver was punctual and professional. Highly recommended for both business and leisure travel.",
      name: "RAHUL SHARMA",
      location: "India"
    },
    {
      text: "Great experience with SNP Rent A Car. They provided a luxury vehicle for our wedding ceremony. The service was impeccable and the staff was very courteous.",
      name: "PRIYA PATEL",
      location: "India"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="bg-white z-10">
      <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 md:px-8">
        {/* Title with stars */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[#1e90ff] text-2xl">★</span>
            <span className="text-[#f4442e] text-2xl">★</span>
            <span className="text-[#1e90ff] text-2xl">★</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">CUSTOMER REVIEW</h2>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-[#1e90ff] text-white rounded-full flex items-center justify-center hover:bg-[#1a7fd9] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-[#1e90ff] text-white rounded-full flex items-center justify-center hover:bg-[#1a7fd9] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Review Content */}
          <div className="text-center px-4">
            <div className="relative h-[250px] sm:h-[200px] flex items-center justify-center mb-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-opacity duration-500 ${
                    index === currentReview ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg sm:text-xl text-[#1e90ff]">
                {reviews[currentReview].name}
              </h3>
              <p className="text-gray-500">
                {reviews[currentReview].location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Lower">
        
      </div>
    </section>
  )
}

