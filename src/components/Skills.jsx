import { CgWebsite } from "react-icons/cg";
import { skills } from "../Shared/SkillsIcon";
import { AiOutlineDatabase } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      const section = document.getElementById('skills')
      if(section){
        const rect = section.getBoundingClientRect()
        if(rect.top < window.innerHeight - 150){
          setVisible(true)
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <div
      id="skills"
      className="shadow-lg border border-[#fde047] py-3 px-4 mt-10"
    >
      <h1 className="text-center text-3xl font-semibold font-roboto mt-6">
        My Skills
      </h1>
      <div className="w-52 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>
      {/* skill card */}
      <div data-aos="fade-up" className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ icon: Icon, name, level, color }, index) => (
          <div
            key={index}
            className="shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-lg hover:scale-105 duration-300 text-center rounded-lg py-10"
          >
            <div className="flex justify-center">
              <span className={`${color} bg-[#f3f1f1] p-4 rounded-full`}>
                <Icon className="w-6 h-6"></Icon>
              </span>
            </div>
            <div className="mt-6">
              <h4 className="font-bold font-roboto">{name}</h4>
              <span>{visible ? `${level}%` : "0%"}</span>
              <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] mt-2 rounded-full">
                <div
                  className="h-2 bg-[#fde047] rounded-full transition-all duration-[2000ms] ease-in-out"
                  style={{ width: visible? `${level}%` : "0%"}}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* skills card */}
      <div data-aos="fade-up" className="grid grid-cols-1 gap-6 mt-20 mb-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-green-200 rounded-lg shadow-md">
          <div className="flex flex-col justify-center items-center mt-6">
            <span>
              <CgWebsite className="w-8 h-8" />
            </span>
            <h2 className="font-bold font-roboto text-xl text-center mt-4">
              Frontend Development
            </h2>
          </div>
          <div className="p-6">
            {skills.slice(0, 5).map((skill, index) => (
              <div key={index} className="grid grid-cols-2 gap-2 mt-4 md:gap-4">
                <div>
                  <h4>{skill.name}</h4>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] rounded-full">
                    <div
                      className="h-2 bg-[#fde047] rounded-full  transition-all duration-[2000ms] ease-in-out"
                      style={{ width: visible? `${skill.level}%` : "0%"}}
                    ></div>
                  </div>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-violet-200 rounded-lg shadow-md">
          <div className="flex flex-col justify-center items-center mt-6">
            <span>
              <AiOutlineDatabase className="w-8 h-8" />
            </span>
            <h2 className="font-bold font-roboto text-xl text-center mt-4">
              Backend Development
            </h2>
          </div>
          <div className="p-6">
            {skills.slice(5, 8).map((skill, index) => (
              <div key={index} className="grid grid-cols-2 gap-2 mt-4 md:gap-4">
                <div>
                  <h4>{skill.name}</h4>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] rounded-full">
                    <div
                      className="h-2 bg-[#fde047] rounded-full  transition-all duration-[2000ms] ease-in-out"
                      style={{ width: visible? `${skill.level}%` : "0%"}}
                    ></div>
                  </div>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-cyan-200 rounded-lg shadow-md">
          <div className="flex flex-col justify-center items-center mt-6">
            <span>
              <LiaToolsSolid className="w-8 h-8" />
            </span>
            <h2 className="font-bold font-roboto text-xl text-center mt-4">
              Tools & Design
            </h2>
          </div>
          <div className="p-6">
            {skills.slice(8, 12).map((skill, index) => (
              <div key={index} className="grid grid-cols-2 gap-2 mt-4 md:gap-4">
                <div>
                  <h4>{skill.name}</h4>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] rounded-full">
                    <div
                      className="h-2 bg-[#fde047] rounded-full  transition-all duration-[2000ms] ease-in-out"
                      style={{ width: visible? `${skill.level}%` : "0%"}}
                    ></div>
                  </div>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
