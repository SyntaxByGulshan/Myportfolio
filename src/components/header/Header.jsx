import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["", "Skills", "Projects", "Resume", "About"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-blue-900 shadow-xl z-20">
      <div className="flex items-center justify-between px-6 md:px-10 min-h-16">
        {/* Logo */}
        <Link to="/">
          <img className="h-16" src="\logo.png" alt="Logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-blue-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
         <GiHamburgerMenu />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 underline"
                  : "text-blue-400 hover:text-blue-100 hover:underline"
              }
            >
              {path || "Home"}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 shadow-xl transform transition-transform duration-300 z-30
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start mt-20 ml-6 gap-6">
          {navLinks.map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 underline text-lg"
                  : "text-blue-400 hover:text-blue-100 hover:underline text-lg"
              }
              onClick={() => setMenuOpen(false)}
            >
              {path || "Home"}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
