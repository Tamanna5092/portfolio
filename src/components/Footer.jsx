import React from "react";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
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
    <div className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <span>
            <FaCode className="w-6 h-6" />
          </span>
          <h2 className="font-roboto text-2xl font-semibold text-[#facc15]">
            {" "}
            Tamanna
          </h2>
        </div>
        <div className="flex justify-center items-center my-4">
          <ul className="flex flex-col sm:flex-row gap-4">
            {navlinks.map((navlink) => (
              <li
                className="hover:text-[#facc15] transition duration-300 cursor-pointer"
                key={navlink.path}
              >
                <Link
                  to={`${navlink.path}`}
                  smooth={true}
                  duration={600}
                  offset={-40}
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm mt-2">Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
