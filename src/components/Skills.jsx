import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: <FaHtml5 className="text-orange-500 text-2xl" />,
    },
    {
      name: "CSS",
      level: 90,
      icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    },
    {
      name: "JavaScript",
      level: 75,
      icon: <FaJs className="text-yellow-400 text-2xl" />,
    },
    {
      name: "React",
      level: 70,
      icon: <FaReact className="text-cyan-400 text-2xl" />,
    },
    {
      name: "Node.js",
      level: 45,
      icon: <FaNodeJs className="text-green-500 text-2xl" />,
    },
    {
      name: "MongoDB",
      level: 55,
      icon: <SiMongodb className="text-green-600 text-2xl" />,
    },
    {
      name: "Firebase",
      level: 78,
      icon: <SiFirebase className="text-orange-400 text-2xl" />,
    },
    {
      name: "Git",
      level: 85,
      icon: <FaGitAlt className="text-red-500 text-2xl" />,
    },
    {
      name: "GitHub",
      level: 88,
      icon: <FaGithub className="text-gray-800 dark:text-white text-2xl" />,
    },
    {
      name: "Responsive Design",
      level: 90,
      icon: <FaTools className="text-purple-500 text-2xl" />,
    },
  ];

  return (
    <div className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <h1 className="text-center text-3xl font-roboto mt-6">My Skills</h1>
      <div className="w-52 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>
      <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-lg hover:scale-105 duration-300 text-center rounded-lg py-10"
          >
            <div className="flex justify-center">
              <span className="bg-[#f3f1f1] p-4 rounded-full">
                {skill.icon}
              </span>
            </div>
            <div className="mt-6">
              <h4 className="font-bold font-roboto">{skill.name}</h4>
              <span>{skill.level}%</span>
              <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] mt-2 rounded-full">
                <div
                  className="w-full h-2 bg-[#fde047] rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
