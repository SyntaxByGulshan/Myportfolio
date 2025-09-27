import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <div className="bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 min-h-screen flex justify-center items-center px-4">
      <motion.div
        className="w-full max-w-md p-6 bg-blue-900/80 backdrop-blur-md rounded-2xl shadow-lg text-center border border-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-200 mb-6">
          Contact Me
        </h1>
        <p className="text-blue-300 mb-6 text-sm sm:text-base">
          Feel free to reach out via email or connect on social media. I’d love to hear from you!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-400 transition-all text-sm sm:text-base"
        >
          Send Email
        </a>
        {/* Optional: Social icons */}
        
      </motion.div>
    </div>
  );
}
