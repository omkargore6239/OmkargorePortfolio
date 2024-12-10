import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Web Development", icon: "🌐" },
  { title: "App Development", icon: "📱" },
  { title: "UI/UX Design", icon: "🎨" },
];

const Services = () => (
  <section
    id="services"
    className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-right">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
