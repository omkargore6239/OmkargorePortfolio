import React from "react";
import { motion } from "framer-motion";

const services = [
  { 
    title: "Web Development", 
    icon: "🌐", 
    description: "Building modern, responsive websites using the latest web technologies."
  },
  { 
    title: "App Development", 
    icon: "📱", 
    description: "Creating cross-platform mobile applications for iOS and Android."
  },
  { 
    title: "UI/UX Design", 
    icon: "🎨", 
    description: "Designing user-friendly interfaces with a focus on seamless user experience."
  },
];

const Services = () => (
  <section
    id="services"
    className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-800"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
