import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Drive The Car You Ever Dream",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg",
    description: [
      "SNP Rent A Car are a team of highly experienced, energetic professionals with decades of practical",
      "Our expansion plans include building a capable and effective pan India network of travel."
    ]
  },
  {
    title: "Luxury Cars For Every Occasion",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg",
    description: [
      "Experience the thrill of driving premium vehicles with our extensive fleet",
      "From business meetings to special events, we have the perfect car for you"
    ]
  },
  {
    title: "Premium Service Guaranteed",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg",
    description: [
      "24/7 customer support with dedicated service professionals",
      "Comprehensive insurance coverage for peace of mind"
    ]
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="container mx-auto">
              <p className="text-white tracking-[0.2em] mb-2 sm:mb-4 text-sm sm:text-base">
                WELCOME TO SNP RENT A CAR
              </p>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mb-4 sm:mb-6">
                {slide.title}
              </h1>
              <div className="max-w-2xl mb-6 sm:mb-8">
                {slide.description.map((text, idx) => (
                  <p key={idx} className="text-white/90 mb-2 sm:mb-4 last:mb-0 text-sm sm:text-base">
                    {text}
                  </p>
                ))}
              </div>
              <button 
                className="bg-[#f4442e] hover:bg-[#d63a26] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-lg transition-colors duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

