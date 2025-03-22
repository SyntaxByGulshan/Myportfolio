import React from "react";
export default function About() {
  return (
    // this id page of about
    <div className="h-screen bg-blue-950 flex flex-col justify-center items-center text-blue-100 ">
      {/* this div contain photo and details */}
      <div className=" m-4 mt-10 flex text-sm sm:text-base md:text-lg  flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
        {/* this part is photo of self */}
        <div className=" flex items-center flex-initial flex-shrink">
          <img
            className="h-72 md:h-80 rounded-full shadow-2xl shadow-black "
            src="img1.jpg"
            alt="photo"
          />
        </div>
        {/* this part is about me */}
        <div className="w-1/2  flex items-center">
          "As a skilled web developer, I specialize in creating user-friendly,
          responsive, and high-performance websites. Proficient in HTML, CSS,
          JavaScript, React, and Node.js, I build seamless user experiences with
          clean and scalable code. I’m driven by creativity, collaboration, and
          a passion for innovative web solutions. Let’s bring ideas to life
          together!"
         
        </div>
      </div>
      {/* this part is for contect details */}

      <div className="">
        {/* contect me button */}
        <div className="  shadow-blue-900 shadow-2xl p-2 md:p-4 hover:shadow-blue-200  
">
          <button>
          Click to Contect
          </button>
        </div>
      </div>
    </div>
  );
}
