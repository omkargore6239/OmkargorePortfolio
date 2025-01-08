import React, { useState } from "react";
import { FaLinkedin,  FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 w-full z-20 shadow-md transition-colors duration-300 bg-white text-black`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Omkar Gore</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
            // { icon: <FaFacebook />, link: "https://facebook.com" },
            { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-black transition-all"></span>
            <span className="block w-8 h-1 bg-black transition-all"></span>
            <span className="block w-8 h-1 bg-black transition-all"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden fixed top-0 left-0 w-full h-1/2 transition-transform duration-500 ease-in-out bg-white text-black`}
      >
        <div className="flex flex-col justify-between h-full p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Menu</h1>
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              ✖
            </button>
          </div>
          <ul className="space-y-4">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-medium hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-around">
            {[
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              // { icon: <FaFacebook />, link: "https://facebook.com" },
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
