import { skills } from "../Shared/SkillsIcon";

const Skills = () => {
  return (
    <div className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <h1 className="text-center text-3xl font-semibold font-roboto mt-6">
        My Skills
      </h1>
      <div className="w-52 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>
      <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <span>{level}%</span>
              <div className="w-2/3 mx-auto h-2 bg-[#f3f1f1] mt-2 rounded-full">
                <div
                  className="w-full h-2 bg-[#fde047] rounded-full"
                  style={{ width: `${level}%` }}
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
