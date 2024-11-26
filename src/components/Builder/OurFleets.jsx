
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function OurFleets() {
  const [currentPage, setCurrentPage] = useState(0)
  
  const fleet = [
    {
      id: 1,
      name: "Toyoto Innova Crysta",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 2,
      name: "Merc E Class",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 3,
      name: "BMW 5 Series",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 4,
      name: "Dzire / Xcent / Amaze",
      image: "/placeholder.svg?height=300&width=400"
    },
    // Additional cars for pagination
    {
      id: 5,
      name: "Honda City",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 6,
      name: "Audi A4",
      image: "/placeholder.svg?height=300&width=400"
    }
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(fleet.length / itemsPerPage)
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentFleet = fleet.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section className="">
      <div className="container mx-auto bg-white z-10 py-16 px-4">
        {/* Title with stars */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[#f4442e] text-2xl">-★</span>
            <span className="text-[#1e90ff] text-2xl">★</span>
            <span className="text-[#f4442e] text-2xl">★-</span>
          </div>
          <h2 className="text-4xl font-bold">OUR FLEET</h2>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentFleet.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

