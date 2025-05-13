import Skill from "../costomHook/Skill";
import Html_logo from "../costomHook/Html_logo";
import Css_logo from "../costomHook/Css_logo";
import Java_logo from "../costomHook/Java_logo";
import Tailwind_logo from "../costomHook/Tailwind_logo";
import Javascript_logo from "../costomHook/Javascript_logo";
import React_logo from "../costomHook/React_logo";
import Python_logo from "../costomHook/Python_logo";
// App.jsx
import { motion } from 'framer-motion';
export default function Skills() {
  return (
    // this div is for screen of skill
    <div className="min-h-screen bg-blue-950   flex items-center justify-center text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  ">
      {/* this is for container of skills */}
      <div className="flex justify-center flex-wrap flex-initial flex-grow m-20 mt-28 gap-5">
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200"
          initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, y: 0 }}       // Animate to visible and position
        transition={{ duration: 0.4,delay: 0.1 }}   
        >
          <Html_logo />
          <Skill Name="Html" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 "
         initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4 ,delay: 0.2 }}  
        >
          <Css_logo />
          <Skill Name="Css" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200  "
        initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4 ,delay: 0.3 }} 
        
        >
          <Tailwind_logo />
          <Skill Name="Tailwind" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 "
        initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4 ,delay: 0.4 }} 
        >
          <Javascript_logo />
          <Skill Name="JavaScript" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 "
        initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4,delay: 0.5 }} 
        >
          <React_logo />
          <Skill Name="React" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200  "
        initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4,delay: 0.6 }} 
        >
          <Java_logo />
          <Skill Name="Java" />
        </motion.div>
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 "
        initial={{ opacity: 0, }}     // Start hidden and below
        animate={{ opacity: 1, }}       // Animate to visible and position
        transition={{ duration: 0.4,delay: 0.7 }} 
        >
          <Python_logo />
          <Skill Name="Python" />
        </motion.div>
      </div>
    </div>
  );
}
