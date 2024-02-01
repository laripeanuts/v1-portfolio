import { SkillType } from "../../@types/api";
import { Skill } from "../Skill";

type SkillsProps = {
  skills: SkillType[];
};

export const Skills = ({ skills }: SkillsProps) => (
  <div className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 overflow-x-hidden overflow-y-scroll w-fit max-h-[400px] lg:max-h-[600px] scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary sm:gap-3">
    {skills.map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ))}
  </div>
);
