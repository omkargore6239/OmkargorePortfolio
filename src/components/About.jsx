import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20 space-y-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-left">About Me</h2>
      <p className="text-lg md:text-xl leading-relaxed text-left">
        Hi, I’m Omkar Gore, a passionate <strong>React.js developer</strong>. I
        specialize in building modern, scalable, and dynamic web applications
        that create exceptional user experiences.
      </p>
      <ul className="text-left space-y-3">
        <li>✔️ Expertise in React.js and state management libraries.</li>
        <li>✔️ Skilled in creating responsive, accessible UI designs.</li>
        <li>✔️ Proficient in REST APIs, deployments, and testing.</li>
      </ul>
      <div className="flex flex-col sm:flex-row sm:space-x-6">
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 transition"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 transition"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default About;
