import React from "react";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";
export default function Home() {
  return (
    <>
      <div className=" min-h-screen   bg-blue-950 flex flex-col md:flex-row-reverse justify-center items-center text-blue-100 gap-4 
      bg-[url('Element.png')] bg-no-repeat bg-cover
      ">
        <div className=" mt-20 flex text-sm sm:text-base md:text-lg  flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <motion.div className="   flex justify-center items-center "
        initial={{ opacity: 0,x:100 }}     // Start hidden and below
        animate={{ opacity: 1,x:0 }}       // Animate to visible and position
        transition={{ duration:2 }} 
        >
          <img
            className="h-72 md:h-80 w-auto rounded-full shadow-2xl  shadow-blue-300 "
            src="IMG-20250630-WA0082.jpg"
            alt="photo"
          />
        </motion.div>
        </div>
        {/* content part */}
        <div className=" md:w-1/2 flex flex-col justify-center items-center gap-4 md:gap-6 ">
          <motion.div className="  flex flex-col justify-center items-center"
          initial={{ opacity: 0,x:-100 }}     // Start hidden and below
        animate={{ opacity: 1,x:0 }}       // Animate to visible and position
        transition={{ duration: 2 }} 
          >
            {/* content */}
            <div>hey there I am Gulshan Kumar</div>
            <div className="flex flex-row text-xl md:text-3xl font-bold ">
              <div>i am a &lt;</div>
              <div>
                <Typewriter
                  options={{
                    strings: [" web developer", "software engneer"],
                    autoStart: true,
                    loop: true,
                    cursor: "/>",
                  }}
                />
              </div>
            </div>
          </motion.div>
          {/* logo of different accounts */}
          <motion.div className="h-20  flex justify-center items-center gap-4"
          initial={{ opacity:0, }}     // Start hidden and below
        animate={{ opacity:1, }}       // Animate to visible and position
        transition={{ duration:8,delay:1 }} 
          >
            <div className="w-10 h-10  flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10 " src="githublogo.png" alt="" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10" src="linkedinlogo.png" alt="" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10" src="instalogo.png" alt="" />
            </div>
          </motion.div>
          <motion.div className="  shadow-blue-900 shadow-2xl p-2 md:p-4 hover:shadow-blue-200 w-40 flex justify-center items-center"
          initial={{ opacity: 0,y:100 }}     // Start hidden and below
        animate={{ opacity: 1,y:0 }}       // Animate to visible and position
        transition={{ duration: 1 }} 
          >
          <button>
          Click to Contact
          </button>
        </motion.div>
        </div>
      </div>
    </>
  );
}
