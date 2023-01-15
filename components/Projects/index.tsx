import { motion } from "framer-motion";
import { ProjectType } from "../../@types/api";
import { Project } from "../Project";

type ProjectsProps = {
  projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-2xl">
        Projetos
      </h3>
      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </motion.div>
      <div className="w-full absolute top-[20%] bg-primary/30 left-0 h-[50vh] -skew-y-12" />
    </div>
  );
};
