import { motion } from "framer-motion";
import Image from "next/image";

import iconTS from "../../assets/icons/typescript.svg";

type SkillsProps = {};

export const Skill = ({}: SkillsProps) => {
  return (
    <div className="group relative cursor-pointer flex w-20 h-20 lg:w-24 lg:h-24">
      <motion.div>
        <Image
          src={iconTS}
          alt="HTML"
          width={200}
          height={200}
          className="rounded-full bg-zinc-900 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-zinc-200 rounded-full w-full h-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold opacity-100 text-zinc-900">90%</p>
        </div>
      </div>
    </div>
  );
};
