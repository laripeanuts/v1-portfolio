import { ProjectType } from "../../@types/api";
import { Project } from "../Project";

type ProjectsProps = {
  projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsProps) => (
  <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
    {projects.map((project) => (
      <Project key={project._id} project={project} />
    ))}
  </div>
);
