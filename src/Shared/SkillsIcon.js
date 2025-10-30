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
  { name: "HTML", level: 95, icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", level: 90, icon: FaCss3Alt, color: "text-blue-500" },
  {
    name: "Tailwind CSS",
    level: 88,
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  { name: "JavaScript", level: 75, icon: FaJs, color: "text-yellow-400" },
  { name: "React", level: 70, icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", level: 45, icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", level: 55, icon: SiMongodb, color: "text-green-600" },
  { name: "Firebase", level: 78, icon: SiFirebase, color: "text-orange-400" },
  { name: "Git", level: 85, icon: FaGitAlt, color: "text-red-500" },
  {
    name: "GitHub",
    level: 88,
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
