import React from "react";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { projects } from "../Shared/projects";

const Project = () => {
  return (
    <div id="project" className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <h1 className="text-center text-3xl font-semibold font-roboto mt-6">
        Projects
      </h1>
      <div className="w-52 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>

      {/* porject card */}
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4 my-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* project image */}
            <div className="">
              <img
                className="w-full h-full sm:h-80 lg:h-64 rounded-lg"
                src={project.image}
                alt={project.title}
              />
            </div>
            {/* project info */}
            <div>
              <h3 className="text-[#facc15] text-2xl font-roboto font-semibold">
                {project.title}
              </h3>
              <p className="my-4">{project.description.length > 200 ?
              `${project.description.slice(0, 175)}...`
              : project.description
              }</p>
              <div className="flex flex-row border-t-[1px] border-b-[1px] py-4">
                <p className="font-roboto">Technologies:</p>
                <p className="ml-2">{project.technologies.join(", ")}</p>
              </div>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    className="flex justify-center items-center gap-2 text-[#facc15] hover:underline"
                  >
                    <span>
                      <FaRegEye />
                    </span>
                    Live Demo
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.frontend}
                    className="flex justify-center items-center gap-2 text-[#facc15] hover:underline"
                  >
                    <span>
                      <FaGithub />
                    </span>
                    Frontend
                  </a>
                </div>
                {project.backend && (
                  <div className="flex space-x-4">
                    <a
                      href={project.backend}
                      className="flex justify-center items-center gap-2 text-[#facc15] hover:underline"
                    >
                      <span>
                        <FaGithub />
                      </span>
                      Backend
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
