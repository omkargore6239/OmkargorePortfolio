import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white text-center">
      <p className="mb-4">© 2024 Omkar Gore. All Rights Reserved.</p>
      <SocialMediaLinks /> {/* Add the social media links here */}
    </footer>
  );
};

export default Footer;
