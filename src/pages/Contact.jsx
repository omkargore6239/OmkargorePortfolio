import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-800"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900">
        Contact Me
      </h2>
      <form className="mt-8 max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-lg text-white hover:bg-blue-400 focus:ring-2 focus:ring-blue-500"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </section>
);

export default Contact;
