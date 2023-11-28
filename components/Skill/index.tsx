import { motion } from "framer-motion";
import Image from "next/image";

import { SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";

type SkillsProps = {
  skill: SkillType;
};

export const Skill = ({ skill }: SkillsProps) => {
  return (
    <div className="relative flex w-16 h-16 cursor-pointer group lg:w-24 lg:h-24">
      <motion.div>
        <Image
          src={urlFor(skill.image).url()}
          alt={skill?.title}
          width={200}
          height={200}
          className="object-cover w-16 h-16 transition duration-300 ease-in-out rounded-full lg:w-24 lg:h-24 bg-zinc-900 filter group-hover:grayscale"
        />
      </motion.div>
      <div className="absolute w-full h-full transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-zinc-200">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold opacity-100 text-zinc-900">{`${skill.progress}%`}</p>
        </div>
      </div>
    </div>
  );
};
