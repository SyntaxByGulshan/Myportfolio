import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Detect screen size changes
window.addEventListener("resize", () => { 
    setMenuOpen(false); 
});
  

  return (
    <>
    {/* this is navigation bar */}
      <nav className=" md:w-screen md:h-20 md:fixed  md:flex md:flex-row md:shadow-xl  md:items-center md:justify-between md:right-0 md:left-0 md:z-10 md:bg-blue-950">
        {/* this div is for options */}
        <div>
          <div
            className={`${
              menuOpen
                ? "text-blue-400 h-screen w-screen absolute  flex flex-col items-center justify-center  gap-8   backdrop-blur-lg md:static  md:flex  md:flex-row md:h-auto md:w-fit  md:gap-8  "
                : "hidden  md:flex  md:flex-row md:gap-8 md:static  md:h-auto   md:text-blue-400 "
            }`}
          >
            <div className="md:pl-10 md:pr-4">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "text-blue-100 underline" : ""
                }
              >
                <div className=" hover:text-blue-100 hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
                  Home
                </div>
              </NavLink>
            </div>
            <div className="md:pl-4 md:pr-4">
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  isActive ? "text-blue-100 underline" : ""
                }
              >
                <div className=" hover:text-blue-100 hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
                  Skills
                </div>
              </NavLink>
            </div>
            <div className="md:pl-4 md:pr-4">
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-100 underline" : ""
                }
              >
                <div className=" hover:text-blue-100 hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
                  Projects
                </div>
              </NavLink>
            </div>
            <div className="md:pl-4 md:pr-4">
              <NavLink
                to="resume"
                className={({ isActive }) =>
                  isActive ? "text-blue-100 underline" : ""
                }
              >
                <div className="  hover:text-blue-100 hover:underline " onClick={() => setMenuOpen(!menuOpen)}>
                  Resume
                </div>
              </NavLink>
            </div>
            <div className="md:pl-4 md:pr-4">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "text-blue-100 underline" : ""
                }
              >
                <div className=" hover:text-blue-100 hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
                  About
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 w-screen  flex items-center justify-between fixed  pl-10 pr-10 shadow-blue shadow-xl md:static md:w-fit md:shadow-none ">
          {/* this is for LOGO */}
          <div className="">
            <Link to="">
              <div className="">
                <img className="h-16" src="\logo.png" alt="G" />
              </div>
            </Link>
          </div>
          {/* this is options button */}
          <div className="md:hidden">
            <div>
              <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
