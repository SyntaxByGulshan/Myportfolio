import Skill from "../costomHook/Skill";
import Html_logo from "../costomHook/Html_logo";
import Css_logo from "../costomHook/Css_logo";
import Java_logo from "../costomHook/Java_logo";
import Tailwind_logo from "../costomHook/Tailwind_logo";
import Javascript_logo from "../costomHook/Javascript_logo";
import React_logo from "../costomHook/React_logo";
import Python_logo from "../costomHook/Python_logo";
import { motion } from "framer-motion";

const skills = [
  { logo: Html_logo, name: "HTML", color: "from-blue-700 to-blue-500" },
  { logo: Css_logo, name: "CSS", color: "from-blue-800 to-blue-600" },
  { logo: Tailwind_logo, name: "Tailwind", color: "from-cyan-700 to-blue-400" },
  { logo: Javascript_logo, name: "JavaScript", color: "from-blue-600 to-blue-400" },
  { logo: React_logo, name: "React", color: "from-cyan-500 to-blue-300" },
  { logo: Java_logo, name: "Java", color: "from-blue-700 to-blue-500" },
  { logo: Python_logo, name: "Python", color: "from-blue-500 to-cyan-400" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 
                    flex flex-col items-center justify-center px-6 py-20 pt-24">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-blue-200">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className={`flex flex-col justify-center items-center rounded-3xl min-h-52 min-w-64 max-w-72 
                        bg-gradient-to-br ${skill.color} text-blue-100 font-semibold 
                        shadow-lg shadow-black/50
                        transform transition duration-500 hover:scale-105 hover:rotate-0 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="p-6">
              <skill.logo />
            </div>
            <Skill Name={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
