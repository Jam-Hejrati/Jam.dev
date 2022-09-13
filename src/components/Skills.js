const Skills = function (props) {
  return (
    <div id="skills" className="my-16 lg:mt-40 flex items-center flex-col">
      <span className="mx-auto mb-8 pb-2 px-4 border-b border-gray-400 text-3xl text-slate-200 text-center">
        Skills
      </span>

      <div className="flex flex-wrap justify-center md:px-44 lg:px-80">
        {props.skillInfo.map((skill) => (
          <span className="py-2 px-6 rounded m-1 font-semibold text-lg bg-slate-500">{skill}</span>
        ))}
      </div>
    </div>
  );
};
export default Skills;
