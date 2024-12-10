import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-6 justify-center mt-6">
      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
      >
        <FaTwitter />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/omkargore/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-800 hover:text-gray-600 transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourusername/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
