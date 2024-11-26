import { useState, useRef, useEffect } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'CORPORATE CAR RENTAL', href: '/corporateRental' },
        { name: 'EMPLOYEE TRANSPORTATION', href: '/employeeTransportation' },
        { name: 'EVENTS TRANSPORTATION', href: '/eventTransportation' },
        { name: 'WEDDING CAR RENT', href: '/weddingCarRent' },
      ],
    },
    {
      name: 'Our Fleets',
      href: '#',
      dropdown: [
        { name: 'DZIRE/XCENT/AMAZE', href: '/Dzire' },
        { name: 'HONDA CITY', href: '/hondaCity' },
        { name: 'ERTIGA', href: 'ertiga' },
        { name: 'TOYOTA INNOVA CRYSTA', href: '/innova' },
        { name: 'MERC E CLASS', href: '/eclass' },
        { name: 'BMW 5 SERIES', href: '/bmwserise' },
      ],
    },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Cities', href: 'cities' },
    { name: 'Contact Us', href: 'contact' },
  ];

  return (
    <nav className="w-full h-20 sticky top-0 left-0 flex items-center justify-between px-[5vw] shadow-md bg-white z-20">
      <div className="logo flex items-center justify-center gap-2">
        <img
          src="https://www.snprentacar.com/images/SNP-logo.png"
          alt="SNP Rent A Car Logo"
          className="w-20 h-20 object-cover"
        />
        <h1 className="text-3xl font-bold text-red-500">SNP Rent A Car</h1>
      </div>
      <div className="nav-links hidden lg:flex">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-black hover:text-red-500 py-2 px-3 rounded-md transition duration-300 ease-in-out"
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    toggleDropdown(item.name);
                  }
                }}
              >
                {item.name}
                {item.dropdown && (
                  <span className="ml-1">{activeDropdown === item.name ? '▲' : '▼'}</span>
                )}
              </a>
              {item.dropdown && (
                <ul
                  className={`absolute w-56 bg-white text-black mt-2 rounded-md shadow-lg transition-all duration-300 ease-in-out ${
                    activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none p-2">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  className="text-black hover:text-red-500 block py-2 px-3 rounded-md transition duration-300 ease-in-out"
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      toggleDropdown(item.name);
                    }
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="ml-1">{activeDropdown === item.name ? '▲' : '▼'}</span>
                  )}
                </a>
                {item.dropdown && activeDropdown === item.name && (
                  <ul className="bg-gray-100 mt-2 rounded-md">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

