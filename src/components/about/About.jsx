import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SecondPhoto from "../costomHook/SecondPhoto";

export default function About() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12
                    bg-gradient-to-b from-blue-900 via-blue-950 to-black text-blue-100">

      {/* Container for Photo and Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mt-20 md:mt-24 w-full max-w-6xl">

        {/* Photo with floating glow effect */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow behind photo */}
          <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 blur-3xl animate-pulse"></div>

          {/* Responsive Photo */}
          <SecondPhoto/>
        </motion.div>

        {/* Content (Text + Button) */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-lg md:text-xl text-blue-400 leading-relaxed px-4 md:px-8 gap-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <p className="mb-4">
              As a skilled web developer, I specialize in creating user-friendly,
              responsive, and high-performance websites. Proficient in HTML, CSS,
              JavaScript, React, and Node.js, I build seamless user experiences with
              clean and scalable code.
            </p>
            <p>
              I’m driven by creativity, collaboration, and a passion for innovative web
              solutions. Let’s bring ideas to life together!
            </p>
          </div>

          {/* Contact Button */}
          <button
           onClick={()=>{navigate('/myJurney')}}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-blue-200 font-semibold rounded-xl shadow-lg shadow-blue-900 hover:shadow-blue-400 transition-all"
          >
            My Jurney
          </button>
        </motion.div>

      </div>
    </div>
  );
}
