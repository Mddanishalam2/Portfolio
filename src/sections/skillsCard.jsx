import skillsData from "../data/skillsData";

const SkillsCard=()=>{
  return(
    <>
     {/* Technical Skills Section */}
        <section id="skills" className="py-24 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-gray-400">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center p-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-md animate-float dark:hover:bg-gray-700">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>

                <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
    </>
  );
}
export default SkillsCard;