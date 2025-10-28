import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { skills } from "../Shared/SkillsIcon";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-10 shadow-lg border border-[#fde047] py-3 px-4 md:grid-cols-2">
      <div className="flex justify-center items-center p-6 md:p-10">
        <img
          className="w-96 rounded-full border-4 border-[#facc15] hover:scale-105 duration-300 hover:brightness-75"
          src="/src/assets/profile-image.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-roboto text-lg mb-4">Hi, I'm Tamanna Akter Moni</p>
        <h1 className="font-roboto text-3xl font-bold">
          Junior <span className="text-[#facc15]">Frontend Developer</span>
        </h1>
        <p className="text-lg my-4">
          I am a passionate Frontend Developer with expertise in building web
          applications. I specialize in creating responsive and interactive user
          interfaces using modern JavaScript frameworks and libraries.
        </p>
        <div className="px-4 mb-6">
    <Marquee pauseOnHover={true} direction="right">
        <ul className="flex items-center overflow-hidden">
          {skills.map(({ icon: Icon, color}, index) => (
            <li
              key={index}
              className="p-2 bg-[#f3f1f1] border hover:border hover:border-[#facc15] transition-transform duration-300 rounded-md mx-4"
            >
              <Icon
                className={`${color} w-6 h-6 hover:scale-125 transition-transform duration-300`}
              />
            </li>
          ))}
        </ul>
      </Marquee>
          </div>
        <div className="flex space-x-4">
          <a href="https://drive.google.com/file/d/1WbfcLmNHo5Frd8Hg7HNiK0dGijU4I2yv/view?usp=sharing" className="flex justify-center items-center gap-2 bg-[#facc15] text-white px-4 py-2">
            <span>
              <MdOutlineFileDownload />
            </span>
            Download CV
          </a>
          <button className="flex justify-center items-center gap-2 bg-[#facc15] text-white px-4 py-2">
            <span>
              <FaArrowRight />
            </span>{" "}
            Hire Me
          </button>
        </div>
        <div className="flex flex-row space-x-4 my-6">
          <a
            className="hover:text-[#facc15] hover:scale-125 transition duration-300"
            href="https://github.com/Tamanna5092"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            className="hover:text-[#facc15] hover:scale-125 transition duration-300"
            href="https://www.linkedin.com/in/tamanna51/"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            className="hover:text-[#facc15] hover:scale-125 transition duration-300"
            href="https://www.instagram.com/tamannaaktermoni51/"
          >
            <FaInstagram className="w-6 h-6 " />
          </a>
          <a
            className="hover:text-[#facc15] hover:scale-125 transition duration-300"
            href="https://www.facebook.com/tamannaaktermoni51"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a
            className="hover:text-[#facc15] hover:scale-125 transition duration-300"
            href="https://x.com/tamanna_51?s=09"
          >
            <FaXTwitter className="w-5 h-5 hover:text-[#facc15] transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
