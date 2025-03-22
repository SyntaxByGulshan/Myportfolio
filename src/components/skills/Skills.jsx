import Skill from "../costomHook/Skill";
import Html_logo from "../costomHook/Html_logo";
import Css_logo from "../costomHook/Css_logo";
import Java_logo from "../costomHook/Java_logo";
import Tailwind_logo from "../costomHook/Tailwind_logo";
import Javascript_logo from "../costomHook/Javascript_logo";
import React_logo from "../costomHook/React_logo";
import Python_logo from "../costomHook/Python_logo";
import { motion,animate } from "motion/react";
export default function Skills() {
  return (
    // this div is for screen of skill
    <div className="min-h-screen bg-blue-950   flex items-center text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  ">
      {/* this is for container of skills */}
      <div className="flex justify-center flex-wrap flex-initial flex-grow m-20 mt-28 gap-5">
        <motion.div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200"
        animate={{
          

        }}>
          <Html_logo />
          <Skill Name="Html" />
        </motion.div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 ">
          <Css_logo />
          <Skill Name="Css" />
        </div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200  ">
          <Tailwind_logo />
          <Skill Name="Tailwind" />
        </div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 ">
          <Javascript_logo />
          <Skill Name="JavaScript" />
        </div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 ">
          <React_logo />
          <Skill Name="React" />
        </div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200  ">
          <Java_logo />
          <Skill Name="Java" />
        </div>
        <div className="flex flex-col flex-initial flex-grow justify-center items-center   rounded-xl shadow-2xl shadow-blue-800 min-h-52  min-w-64 max-w-72 
        hover:shadow-current hover:text-blue-200 ">
          <Python_logo />
          <Skill Name="Python" />
        </div>
      </div>
    </div>
  );
}
