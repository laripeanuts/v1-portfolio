import { motion } from "framer-motion";
import { ExperienceType } from "../../@types/api";
import { ExperienceCard } from "../ExperienceCard";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-2xl">
        Experiências
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" w-full flex space-x-5 overflow-x-scroll snap-mandatory"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </motion.div>
    </div>
  );
};
