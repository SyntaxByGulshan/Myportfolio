import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    // this id page of about
    <div className="min-h-screen bg-blue-950  justify-center items-center text-blue-100 flex  flex-col ">
      {/* this div contain photo and details */}
      <div className=" m-4 mt-20  items-center justify-center gap-10 flex flex-col md:flex-row">
        {/* this part is photo of self */}
        <motion.div
          className=" flex items-center flex-initial flex-shrink"
          initial={{ opacity: 0, x: -100 }} // Start hidden and below
          animate={{ opacity: 1, x: 0 }} // Animate to visible and position
          transition={{ duration: 1 }}
        >
          <img
            className="h-72 md:h-80 rounded-full shadow-2xl shadow-black "
            src="img1.jpg"
            alt="photo"
          />
        </motion.div>
        {/* this part is about me */}
        <motion.div
          className="w-1/2  flex items-center"
          initial={{ opacity: 0, x: 100 }} // Start hidden and below
          animate={{ opacity: 1, x: 0 }} // Animate to visible and position
          transition={{ duration: 1 }}
        >
          "As a skilled web developer, I specialize in creating user-friendly,
          responsive, and high-performance websites. Proficient in HTML, CSS,
          JavaScript, React, and Node.js, I build seamless user experiences with
          clean and scalable code. I’m driven by creativity, collaboration, and
          a passion for innovative web solutions. Let’s bring ideas to life
          together!"
        </motion.div>
      </div>
      {/* this part is for contect details */}

      <div className="">
        {/* contect me button */}
        <motion.div
          className="  shadow-blue-900 shadow-2xl p-2 md:p-4 hover:shadow-blue-200"
          initial={{ opacity: 0,y:100 }}     // Start hidden and below
        animate={{ opacity: 1,y:0 }}       // Animate to visible and position
        transition={{ duration: 1 }} 

        >
          <button>Click to Contect</button>
        </motion.div>
      </div>
    </div>
  );
}
