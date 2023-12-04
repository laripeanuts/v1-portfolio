import { motion } from "framer-motion";
import { ExperienceType } from "../../@types/api";
import { ExperienceCard } from "../ExperienceCard";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto overflow-hidden text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Experiências
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full space-x-5 overflow-x-scroll  snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary"
      >
        {experiences.map((experience: ExperienceType) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </motion.div>
    </div>
  );
};
