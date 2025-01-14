import React from 'react'
import { useState } from 'react';
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        {/* <a href="#" className="flex items-center text-primary hover:text-secondary">
          <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-2xl font-bold">MyBrand</span>
        </a> */}
        <img width="50" height="50" src="https://img.icons8.com/stickers/50/k.png" alt="k" />


        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation (Hidden on smaller screens) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-black hover:text-primary transition-colors duration-300">Home</a></li>
            <li><a href="#" className="text-black hover:text-primary transition-colors duration-300">Skills</a></li>
            <li className="group relative">
              <a href="#" className="text-black hover:text-primary transition-colors duration-300">Projects</a>
              {/* Dropdown Menu */}
              {/* <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md w-48 transition-all duration-300">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 3</a></li>
              </ul> */}
            </li>
            <li><a href="#" className="text-black hover:text-primary transition-colors duration-300">Testimonials</a></li>
            <li><a href="#" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <nav className={`md:hidden bg-gray-50 border-t border-gray-200 transition-height duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="px-4 py-2">
          <li><a href="#" className="text-black block py-2 hover:text-primary">Home</a></li>
          <li><a href="#" className="text-black block py-2 hover:text-primary">Skills</a></li>
          <li>
            <a
              onClick={toggleServicesDropdown}
              className="text-black block py-2 hover:text-primary"
            >
              Services
            </a>
            {/* Mobile Dropdown */}
            {/* <ul className={`pl-4 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block py-2 hover:text-primary">Service 1</a></li>
              <li><a href="#" className="block py-2 hover:text-primary">Service 2</a></li>
              <li><a href="#" className="block py-2 hover:text-primary">Service 3</a></li>
            </ul> */}
          </li>
          <li><a href="#" className="text-black block py-2 hover:text-primary">Projects</a></li>
          <li><a href="#" className="block py-2 bg-primary hover:bg-blue-500 text-white rounded-md text-center transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const ListItem = ({ children, NavLink, open }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium hover:text-primary lg:ml-10 lg:inline-flex`}
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default Header
