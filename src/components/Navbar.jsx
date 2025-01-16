import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggle]);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMenuItemClick = () => {
    setToggle(false);
  };

  return (
    <nav className="shadow-lg shadow-purple-500/80 fixed top-0 w-full z-50 bg-white">
      <div className="w-11/12 mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 cursor-pointer" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-semibold">
          <li className="hover:text-purple-500 transition-all ease-in-out hover:scale-110 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-purple-500 cursor-pointer transition-all ease-in-out hover:scale-110">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-purple-500 cursor-pointer transition-all ease-in-out hover:scale-110">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-purple-500 cursor-pointer transition-all ease-in-out hover:scale-110">
            <a href="#education">Education</a>
          </li>
          <li className="hover:text-purple-500 cursor-pointer transition-all ease-in-out hover:scale-110">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-purple-500 cursor-pointer transition-all ease-in-out hover:scale-110">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative" ref={menuRef}>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setToggle(true)}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setToggle(false)}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}

          {/* Mobile Menu */}
          {toggle && (
            <ul
              className="fixed inset-0 bg-black bg-opacity-90 text-md flex flex-col items-center justify-center gap-6 text-white font-semibold"
              onClick={handleMenuItemClick}
            >
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#home">Home</a>
              </li>
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#about">About Me</a>
              </li>
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#skills">Skills</a>
              </li>
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#education">Education</a>
              </li>
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#projects">Projects</a>
              </li>
              <li className="transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-purple-300">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
