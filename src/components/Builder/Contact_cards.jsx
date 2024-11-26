import { MapPin, Phone, Mail } from 'lucide-react'
const Contact_cards = () => {
    const contactCards = [
        {
          title: "Our Registered Office",
          icon: MapPin,
          content: [
            "SNP Rent A Car",
            "Shop No 31, First Floor , DDA Market",
            "L.S.C Madangir, Pushpa Bhawan",
            "New Delhi - 110062"
          ]
        },
        {
          title: "Call Us Today",
          icon: Phone,
          content: [
            "Contact Person : Sanjay Bameta",
            "+91-9811313632",
            "+91-8766304797"
          ]
        },
        {
          title: "Send us Email",
          icon: Mail,
          content: [
            "sanjay.bameta@snprentacar.com"
          ]
        }
      ]
  return (
    <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contactCards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Container */}
          <div className="w-full h-48 mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <card.icon className="w-16 h-16 text-[#1e90ff]" />
            </div>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full mx-2"></div>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4">{card.title}</h3>

          {/* Content */}
          <div className="space-y-2">
            {card.content.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-gray-600 ${
                  line.includes('+91') ? 'font-semibold text-[#1e90ff]' : ''
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Contact_cards