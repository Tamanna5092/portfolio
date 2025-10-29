import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navlinks = [
    {
      title: "About",
      path: "about",
    },
    {
      title: "Skills",
      path: "skills",
    },
    {
      title: "Career",
      path: "career",
    },
    {
      title: "Project",
      path: "project",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <div className="relative shadow-lg border border-[#fde047] py-3 px-4">
      <div className="flex justify-between">
        <div className="logo">
          <div className="flex items-center gap-1">
            <span>
              <FaCode className="w-6 h-6" />
            </span>
            <h2 className="font-roboto text-2xl font-semibold text-[#facc15] dark:text-[#fde047]">
              {" "}
              Tamanna
            </h2>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-4">
            {navlinks.map((navlink) => (
              <li
                className="hover:text-[#facc15] transition duration-300"
                key={navlink.path}
              >
                <Link to={`${navlink.path}`}>{navlink.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="flex space-x-4">
            <button
              onClick={handleThemeToggle}
              className="border p-2 rounded-full text-[#facc15] border-[#facc15] hover:bg-[#facc15] hover:text-white transition duration-300"
            >
              {theme === "light" ? <FaRegMoon /> : <TiWeatherSunny />}
            </button>
            <button
              onClick={handleOpenMenu}
              className="flex items-center space-x-4 sm:hidden"
            >
              {openMenu ? (
                <span>
                  <IoClose className="w-6 h-6" />
                </span>
              ) : (
                <span>
                  <IoMenuSharp className="w-6 h-6" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* dropdown */}
      {openMenu && (
        <div className="absolute w-full -ml-4 mx-auto bg-base-100/80 backdrop-blur-md text-base-content shadow-xl rounded-2xl z-20 mt-4 sm:hidden">
          <ul className="flex flex-col">
            {navlinks.map((navlink) => (
              <li
                className="my-1 px-10 hover:bg-[#facc15] rounded-2xl py-1 transition duration-300"
                key={navlink.path}
              >
                <Link to={`${navlink.path}`}>{navlink.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
