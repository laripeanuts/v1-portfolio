import { motion } from "framer-motion";
import { Skill } from "../Skill";

type SkillsProps = {};

export const Skills = ({}: SkillsProps) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-6 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-2xl">
        Conhecimentos
      </h3>
      <h4 className="absolute top-28 uppercase tracking-[3px] text-zinc-500 text-sm">
        Passe o mouse para ver minha proficiência
      </h4>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4 gap-6 mt-32 lg:mt-40 lg:grid lg:grid-cols-6 overflow-y-scroll w-fit max-h-[400px] lg:max-h-[600px]"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </div>
  );
};
