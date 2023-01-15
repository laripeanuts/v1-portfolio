import Image from "next/image";

import { ExperienceType, SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";

type ExperienceCardProps = {
  experience: ExperienceType;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="bg-zinc-700 text-left rounded-lg flex flex-col space-y-4 flex-shrink-0 items-start p-4 mt-20 w-[300px] snap-center opacity-60 hover:opacity-100 transition-opacity overflow-hidden duration-500 ease-in-out">
      <Image
        src={urlFor(experience?.companyImage).url()}
        width={200}
        height={200}
        alt="Raro Labs"
        className="relative rounded-full w-28 h-28 mx-auto object-cover md:w-[100px] md:h-[100px]"
      />
      <div>
        <h4 className="text-2xl font-light">{experience?.companyName}</h4>
        <p className="font-bold">{experience?.job}</p>
        <p className="text-xs font-semibold">{`${experience?.dateStarted} - ${
          experience?.isCurrentJob ? "Atualmente" : experience?.dateEnded
        }`}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((skill: SkillType) => (
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
      </div>
      <ul className="space-y-2 list-disc ml-4 text-sm">
        {experience?.points.map((point: string) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
};
