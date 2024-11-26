import { Mail, Phone, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#222222] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-red-500">SNP RENT A CAR</h3>
            <p className="mb-4 text-gray-300">
              149/1-D, Third Floor Flat No. D-2, Devli Village, New Delhi
            </p>
            <p className="flex items-center gap-2 mb-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Phone size={18} /> +91-9811313632
            </p>
            <p className="flex items-center gap-2 mb-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Phone size={18} /> +91-8766304797
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Mail size={18} /> sanjay.bameta@snprentacar.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Our Fleet', 'Our Cities', 'Contact Us'].map((item) => (
                <li key={item} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Our Fleet */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Our Fleet</h4>
            <ul className="space-y-2">
              {['Dzire / Xcent / Amaze', 'Honda City / Ciaz / Sunny', 'Ertiga', 'Toyota Innova Crysta', 'Merc E Class', 'BMW 5 Series'].map((item) => (
                <li key={item} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Services We Offer */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Services We Offer</h4>
            <ul className="space-y-2">
              {['Corporate Car Rental', 'Employee Transportation', 'Event Transportation', 'Wedding Car Rental'].map((item) => (
                <li key={item} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Enquiry */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4 text-red-500">For Quick Enquiry</h4>
            <div className="flex items-center border-b border-gray-500 pb-2 mb-6 group">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-transparent outline-none flex-grow text-white placeholder-gray-400 focus:placeholder-gray-500 transition-colors duration-300"
              />
              <Mail className="text-gray-400 group-hover:text-white transition-colors duration-300" size={20} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Connect With Social Links</h4>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, hoverColor: 'hover:text-blue-500' },
                { Icon: Twitter, hoverColor: 'hover:text-blue-300' },
                { Icon: Instagram, hoverColor: 'hover:text-pink-500' },
                { Icon: Youtube, hoverColor: 'hover:text-red-600' }
              ].map(({ Icon, hoverColor }, index) => (
                <Icon 
                  key={index}
                  className={`text-gray-400 ${hoverColor} cursor-pointer transition-colors duration-300`}
                  size={24}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            Copyright © {new Date().getFullYear()} <span className="font-bold text-white">SNP Rent A Car</span>.
            All Rights Reserved. Design & Developed By:{" "}
            <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer">AWS</span>
          </p>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

