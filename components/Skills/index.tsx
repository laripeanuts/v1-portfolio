import { SkillType } from "../../@types/api";
import { Skill } from "../Skill";

type SkillsProps = {
  skills: SkillType[];
};

export const Skills = ({ skills }: SkillsProps) => (
  <div className="w-full grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 px-4 md:px-12 lg:px-24 overflow-y-scroll mt-14 mx-auto h-[70vh] md:max-h-[600px] scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary sm:gap-3">
    {skills.map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ))}
  </div>
);
