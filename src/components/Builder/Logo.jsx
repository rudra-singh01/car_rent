import { Phone, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Logo = () => {
  return (
    <div className="w-full h-auto bg-[#09334E] flex flex-wrap items-center justify-between px-4 md:px-10 py-2 text-white">
      {/* Contact Information */}
      <div className="content flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-4">
        <a
          className="flex items-center justify-center transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          <Phone className="mr-1 sm:mr-2" />
          <p className="text-sm sm:text-base">+91-9811313632</p>
        </a>
        <a
          className="flex items-center justify-center transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          <Mail className="mr-1 sm:mr-2" />
          <p className="text-sm sm:text-base">sanjay.bameta@snprentacar.com</p>
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="logo mt-4 sm:mt-0">
        <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
          <a
            className="transition-colors duration-300 hover:text-red-500"
            href="#"
          >
            <Twitter
              size={40}
              className="px-1 cursor-pointer sm:px-2 py-2 border-l border-r"
            />
          </a>
          <a
            className="transition-colors duration-300 hover:text-red-500"
            href="#"
          >
            <Facebook
              size={40}
              className="px-1 cursor-pointer sm:px-2 py-2 border-l border-r"
            />
          </a>
          <a
            className="transition-colors duration-300 hover:text-red-500"
            href="#"
          >
            <Instagram
              size={40}
              className="px-1 cursor-pointer sm:px-2 py-2 border-l border-r"
            />
          </a>
          <a
            className="transition-colors duration-300 hover:text-red-500"
            href="#"
          >
            <Youtube
              size={40}
              className="px-1 cursor-pointer sm:px-2 py-2 border-l border-r"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;
