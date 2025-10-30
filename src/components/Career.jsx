import React from "react";
import { FaBriefcase, FaRegEye } from "react-icons/fa";
import { PiGraduationCapDuotone } from "react-icons/pi";

const Career = () => {
  return (
    <div id="career" className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <h1 className="text-center text-3xl font-semibold font-roboto mt-6">
        Experience & Education
      </h1>
      <div className="w-52 sm:w-96 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* work section */}
        <div data-aos="fade-left">
          <h2 className="flex items-center text-xl font-roboto font-semibold mb-2 gap-2">
            <FaBriefcase className="text-[#facc15]" /> Work
          </h2>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <h2 className="text-lg font-medium">
              Frontend Web Developer Intern
            </h2>
            <h3 className="font-medium">SyntexHub</h3>
            <p className="italic">Joined: 16th October, 2025 </p>
            <div className="flex space-x-4">
              <a
                href="https://drive.google.com/file/d/1WbfcLmNHo5Frd8Hg7HNiK0dGijU4I2yv/view?usp=sharing"
                className="flex justify-center items-center gap-2 text-[#facc15] hover:underline"
              >
                <span>
                  <FaRegEye />
                </span>
                View Internship
              </a>
            </div>
          </div>
        </div>
        {/* academic section */}
        <div data-aos="fade-left">
          <h2 className="flex items-center text-xl font-roboto font-semibold mb-2 gap-2">
            <PiGraduationCapDuotone className="text-[#facc15]" /> Academic
            Achievment
          </h2>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <h2 className="text-lg font-medium">
              Bachelor of Business Administration (BBA)
            </h2>
            <h3 className="font-medium">National University</h3>
            <p className="italic">Expected Graduation: March, 2029 </p>
          </div>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <h2 className="text-lg font-medium">
              Higher Secondary Certificate (HSC)
            </h2>
            <h3 className="font-medium">Kazi Azim Uddin College</h3>
            <p>Group: Science</p>
            <p className="italic">Year of Passing: 2020-2022</p>
          </div>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <h2 className="text-lg font-medium">
              Secondary School Certificate (SSC)
            </h2>
            <h3 className="font-medium">I E S School & College</h3>
            <p>Group: Science</p>
            <p className="italic">Year of Passing: 2015-2020 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
