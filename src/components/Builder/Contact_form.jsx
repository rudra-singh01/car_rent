import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

const Contact_form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title with stars */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[#1e90ff] text-2xl">★</span>
            <span className="text-[#f4442e] text-2xl">★</span>
            <span className="text-[#1e90ff] text-2xl">★</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Send us message</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side text */}
          <div className="text-gray-600 leading-relaxed">
            <p>
              SNP Rent A Car are a team of highly experienced, energetic professionals with decades of practical knowledge to provide the best travel solutions for business or leisure. Our expansion plans include building a capable and effective pan India network of travel professionals to grow with us and setting new trends in the travel industry. In the near future, we aspire to go international/overseas and bring the same synergy in overseas travel markets. SNP Rent A Car. offers best and effective travel solutions to business, leisure, student, incentive travel worldwide.
            </p>
          </div>

          {/* Right side form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#1e90ff]"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#1e90ff]"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#1e90ff]"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#1e90ff]"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#1e90ff] resize-none"
                required
              />
            </div>

            <div>
              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"
                onChange={() => {}}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f4442e] text-white py-4 rounded hover:bg-[#d63a26] transition-colors font-medium"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact_form
