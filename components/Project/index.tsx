import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { ProjectType, SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";
import { localeAdapter } from "../../utils/locales";

type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
  const { locale } = useRouter();
  const projectLocale = useMemo(
    () => localeAdapter(project, locale, ["summary"]),
    [project, locale],
  );
  if (!project) return null;

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="flex flex-col items-center justify-center flex-shrink-0 w-full gap-4 p-4 mx-auto mt-10 md:p-20 snap-center"
    >
      <Image
        src={urlFor(project?.image)?.url()}
        alt="HTML"
        width={500}
        height={0}
        className="w-[250px] lg:w-[400px]"
      />
      <div className="max-w-6xl">
        <div className="flex flex-row items-center gap-4 w-100">
          <h4 className="text-2xl font-bold underline lg:text-4xl decoration-primary">
            {project.title}
          </h4>
          <a
            href={project.linkToBuild}
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 font-bold text-center bg-white rounded-full text-primary hover:bg-opacity-50"
          >
            +
          </a>
        </div>
        <div className="flex justify-center my-2 space-x-2 md:justify-start">
          {project?.technologies.map((skill: SkillType) => (
            <Image
              src={urlFor(skill.image).url()}
              alt={skill?.title}
              width={24}
              height={24}
              key={skill._id}
              className="w-8 h-8 rounded-full"
            />
          ))}
        </div>
        <p className="mt-2 text-sm md:text-base">{projectLocale.summary}</p>
      </div>
    </motion.div>
  );
};
