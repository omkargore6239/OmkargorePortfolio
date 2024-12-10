import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
  >
    <motion.div
      className="container mx-auto px-6 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-right">Contact Me</h2>
      <form className="mt-8 max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-gray-800 rounded-lg text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-gray-800 rounded-lg text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 bg-gray-800 rounded-lg text-white"
          rows="5"
          required
        ></textarea>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </section>
);

export default Contact;
