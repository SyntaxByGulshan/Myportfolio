import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <div>
      <div className="bg-blue-950 h-screen flex flex-col md:flex-row-reverse md:justify-around justify-center items-center text-blue-100 gap-4 ">
        <div className=" h-96 w-96  flex justify-center items-center ">
          <img
            className="h-72 md:h-80 w-auto rounded-full shadow-2xl hover:h-80 md:hover:h-96  shadow-blue-300 "
            src="img1.jpg"
            alt="photo"
          />
        </div>
        {/* content part */}
        <div className="w-72 md:w-1/2 flex flex-col justify-center items-center gap-4 md:gap-6 ">
          <div className="  flex flex-col justify-center items-center">
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
          </div>
          {/* logo of different accounts */}
          <div className="h-20  flex justify-center items-center gap-4">
            <div className="w-10 h-10  flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10 " src="githublogo.png" alt="" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10" src="linkedinlogo.png" alt="" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center">
              <img className="h-8 rounded-full border-2 bg-white hover:h-10" src="instalogo.png" alt="" />
            </div>
          </div>
          <div className="  shadow-blue-900 shadow-2xl p-2 md:p-4 hover:shadow-blue-200 w-40 flex justify-center items-center
">
          <button>
          Click to Contect
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
