import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectType, SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";

type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full flex-shrink-0 snap-center flex flex-col items-center mx-auto justify-center gap-4 p-20 mt-10"
    >
      <Image
        src={urlFor(project?.image).url()}
        alt="HTML"
        width={500}
        height={0}
        className="w-[250px] lg:w-[400px]"
      />
      <div className="max-w-6xl">
        <div className="flex flex-row w-100 items-center gap-4">
          <h4 className="text-2xl font-bold lg:text-4xl underline decoration-primary">
            {project.title}
          </h4>
          <a
            href={project.linkToBuild}
            target="_blank"
            rel="noreferrer"
            className="rounded-full w-6 h-6 font-bold  bg-white text-primary hover:bg-opacity-50 text-center"
          >
            +
          </a>
        </div>
        <div className="flex space-x-2 my-2 justify-center md:justify-start">
          {project?.technologies
            .reverse()
            .map((skill: SkillType) => (
              <Image
                src={urlFor(skill.image).url()}
                alt={skill.title}
                width={24}
                height={24}
                key={skill._id}
                className="w-8 h-8 rounded-full"
              />
            ))}
        </div>
        <p className="text-sm md:text-base mt-2">{project.summary}</p>
      </div>
    </motion.div>
  );
};
