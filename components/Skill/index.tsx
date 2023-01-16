import { motion } from "framer-motion";
import Image from "next/image";

import { SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";

type SkillsProps = {
  skill: SkillType;
};

export const Skill = ({ skill }: SkillsProps) => {
  return (
    <div className="group relative cursor-pointer flex w-16 h-16 lg:w-24 lg:h-24">
      <motion.div>
        <Image
          src={urlFor(skill.image).url()}
          alt={skill.title}
          width={200}
          height={200}
          className="rounded-full w-16 h-16 lg:w-24 lg:h-24 bg-zinc-900 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-zinc-200 rounded-full w-full h-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold opacity-100 text-zinc-900">{`${skill.progress}%`}</p>
        </div>
      </div>
    </div>
  );
};
