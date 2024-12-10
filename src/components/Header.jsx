import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 shadow-lg z-20 animate-fade-in">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white">Omkar Gore</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4 pt-4 pb-6`}
      >
        <ul className="space-y-4">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-gray-200 hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
