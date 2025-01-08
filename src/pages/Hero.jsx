import React from "react";
// Importing assets
import resumePDF from "../assets/resume.pdf"; // Path to your resume PDF

const Hero = () => (
  <section
    id="home"
    className="relative h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 transition-colors duration-300 bg-white dark:bg-black"
  >
    {/* Background Animated Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient-xy"></div>

    <div className="text-center animate-fade-in space-y-6 max-w-4xl relative z-10">
      {/* Simple Name Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Omkar Gore</span>
      </h1>
      {/* Subtext */}
      <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-800 dark:text-gray-300">
        Crafting beautiful, functional web experiences with React.js and modern tools.
      </p>
      {/* Motivational Tagline */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
        "Turning complex ideas into simple and elegant solutions."
      </p>
      {/* Resume Button */}
      <a
        href={resumePDF} // Link to your resume file
        download="Omkar_Gore_Resume" // Name of the file when downloaded
        className="mt-6 inline-block px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 transition-transform transform hover:scale-105"
      >
        Download Resume
      </a>
    </div>

    {/* Decorative Floating Elements */}
    <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-purple-600 rounded-full opacity-30 animate-bounce"></div>

    {/* Parallax Background Effect */}
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed opacity-40 dark:opacity-30"
        style={{ backgroundImage: "url('/assets/hero-background.jpg')" }}
      ></div>
    </div>

    {/* Particles Animation */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="particle-container">
        {/* Add particle animation here */}
      </div>
    </div>
  </section>
);

export default Hero;
