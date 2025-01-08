import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks.jsx";

const Footer = () => {
  return (
    <footer className="py-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 text-center">
      <div className="container mx-auto space-y-0">
        <p className="text-sm md:text-base">&copy; 2024 Omkar Gore. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <SocialMediaLinks /> {/* Add the social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;