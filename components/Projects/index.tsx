import { motion } from "framer-motion";
import { ProjectType } from "../../@types/api";
import { Project } from "../Project";

type ProjectsProps = {
  projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-center md:text-left md:flex-row justify-evenly">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Projetos
      </h3>
      <motion.div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </motion.div>
      <div className="w-full absolute top-[20%] bg-primary/30 left-0 h-[50vh] -skew-y-12" />
    </div>
  );
};
