import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", image: "/assets/project1.jpg" },
  { title: "E-commerce App", image: "/assets/project2.jpg" },
  { title: "Social Media App", image: "/assets/project3.jpg" },
  { title: "Dashboard Design", image: "/assets/project4.jpg" },
];

const Projects = () => (
  <section
    id="projects"
    className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-left">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
