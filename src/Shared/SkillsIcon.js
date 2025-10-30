import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { PiDesktopTowerLight } from "react-icons/pi";
import { SiFigma, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

export const skills = [
  { name: "HTML", level: 90, icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", level: 85, icon: FaCss3Alt, color: "text-blue-500" },
  {
    name: "Tailwind CSS",
    level: 88,
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  { name: "JavaScript", level: 60, icon: FaJs, color: "text-yellow-400" },
  { name: "React", level: 65, icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", level: 30, icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", level: 45, icon: SiMongodb, color: "text-green-600" },
  { name: "Firebase", level: 60, icon: SiFirebase, color: "text-orange-400" },
  { name: "Git", level: 78, icon: FaGitAlt, color: "text-red-500" },
  {
    name: "GitHub",
    level: 75,
    icon: FaGithub,
    color: "text-gray-800 dark:text-white",
  },
  { name: "Figma", level: 65, icon: SiFigma, color: "text-pink-500" },
  {
    name: "Responsive Design",
    level: 90,
    icon: PiDesktopTowerLight,
    color: "text-purple-500",
  },
];
