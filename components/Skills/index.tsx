import { motion } from "framer-motion";
import { SkillType } from "../../@types/api";
import { Skill } from "../Skill";

type SkillsProps = {
  skills: SkillType[];
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-6 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Conhecimentos
      </h3>
      <h4 className="absolute top-28 uppercase tracking-[3px] text-zinc-500 text-xs">
        Passe o mouse para ver minha proficiência
      </h4>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4 gap-6 mt-32 lg:mt-40 lg:grid lg:grid-cols-6 overflow-x-hidden overflow-y-scroll w-fit max-h-[400px] lg:max-h-[600px] scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary sm:gap-3"
      >
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};
