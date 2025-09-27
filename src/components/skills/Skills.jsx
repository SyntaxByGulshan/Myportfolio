import Skill from "../costomHook/Skill";
import Html_logo from "../costomHook/Html_logo";
import Css_logo from "../costomHook/Css_logo";
import Java_logo from "../costomHook/Java_logo";
import Tailwind_logo from "../costomHook/Tailwind_logo";
import Javascript_logo from "../costomHook/Javascript_logo";
import React_logo from "../costomHook/React_logo";
import Python_logo from "../costomHook/Python_logo";
import Typescript_logo from "../costomHook/Typescript_logo";
import C_sharp from "../costomHook/C_sharp";
import { motion } from "framer-motion";

const skills = [
  { logo: Html_logo, name: "HTML", color: "from-orange-400 to-blue-600" },
  { logo: Css_logo, name: "CSS", color: "from-blue-400 to-blue-600" },
  { logo: Tailwind_logo, name: "Tailwind", color: "from-cyan-400 to-blue-600" },
  { logo: Javascript_logo, name: "JavaScript", color: "from-yellow-300 to-blue-600" },
  { logo: React_logo, name: "React", color: "from-sky-300 to-blue-600" },
  { logo: Java_logo, name: "Java", color: "from-red-400 to-blue-600" },
  { logo: Python_logo, name: "Python", color: "from-yellow-300 to-blue-600" },
  { logo: Typescript_logo, name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { logo: C_sharp, name: "C#", color: "from-purple-400 to-blue-600" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 
                    flex flex-col items-center justify-center px-6 py-20 pt-24">
      <h2 className="text-4xl  font-extrabold mb-12 text-center text-blue-200">
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
            <div className="p-4  ">
              <skill.logo />
            </div>
            <Skill Name={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
