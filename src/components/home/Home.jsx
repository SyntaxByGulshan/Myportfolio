import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex flex-col md:flex-row-reverse 
                 justify-center items-center text-blue-100 gap-8 px-6 md:px-32
                 bg-gradient-to-br from-blue-900 via-blue-950 to-black overflow-hidden pt-16"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse top-4 left-4"></div>
        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce bottom-20 right-10"></div>
      </div>

      {/* Photo Section */}
      <motion.div
        className="relative z-10 flex justify-center items-center md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 
                       object-cover rounded-2xl shadow-2xl border-4 border-blue-400"
            src="IMG-20250630-WA0082.jpg"
            alt="photo"
          />
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl border-4 border-blue-500 opacity-30"></div>
        </motion.div>
      </motion.div>

      {/*  Content Section */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center 
                   md:items-start text-center md:text-left gap-6 md:w-1/2 md:pl-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="text-lg sm:text-xl md:text-2xl text-gray-200">
          Hey there, I am
        </div>

        <div className="flex flex-row text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
          <div className="text-blue-400">{"< "}</div>
          <div>
            <Typewriter
              options={{
                strings: ["Web Developer", "Software Engineer"],
                autoStart: true,
                loop: true,
                cursor: " />",
              }}
            />
          </div>
        </div>

        {/*  Social Icons */}
        <div className="flex justify-center md:justify-start items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/SyntaxByGulshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-10 w-10 rounded-lg border-2 border-blue-200 p-1 hover:scale-125 transition duration-300 bg-white"
              src="githublogo.png"
              alt="GitHub"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gulshan-kumar-84b270248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-10 w-10 rounded-lg border-2 border-blue-200 p-1 hover:scale-125 transition duration-300 bg-white"
              src="linkedinlogo.png"
              alt="LinkedIn"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-10 w-10 rounded-lg border-2 border-blue-200 p-1 hover:scale-125 transition duration-300 bg-white"
              src="instalogo.png"
              alt="Instagram"
            />
          </a>
        </div>

        {/*  Contact Button */}
        <motion.div
          className="shadow-blue-900 shadow-2xl p-3 md:p-4 w-36 text-center rounded-xl cursor-pointer 
                     font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-blue-400 transition mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="/contectme">
            {" "}
            <button>Contact Me</button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
