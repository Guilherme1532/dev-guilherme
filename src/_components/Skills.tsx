import SkillCard from "./SkillCard";
import skills from "../../data/skills.json";



export default function Skills() {
  return (
    <div className="w-full animate-fade animate-duration-3000 flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              imgSrc={skill.imgSrc}
              color={skill.color}
            />
          ))}
        </div>
    </div>
  );
}