import Image from "next/image";

import { ExperienceType, SkillType } from "../../@types/api";
import { urlFor } from "../../sanity";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { localeAdapter } from "../../utils/locales";

type ExperienceCardProps = {
  experience: ExperienceType;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const t = useTranslations("home.experiences");
  const { locale } = useRouter();
  const localeExperience = useMemo(
    () =>
      localeAdapter(experience, locale, ["job", "points"]),
    [experience, locale],
  );

  return (
    <article className="bg-zinc-700 text-left rounded-lg flex flex-col space-y-4 flex-shrink-0 items-start p-4 mt-20 w-[300px] lg:w-[500px] snap-center opacity-60 hover:opacity-100 transition-opacity overflow-hidden duration-500 ease-in-out">
      <div className="flex gap-4">
        <Image
          src={urlFor(experience?.companyImage).url()}
          width={200}
          height={200}
          alt="Raro Labs"
          className="relative rounded-full w-28 h-28 mx-auto object-cover md:w-[100px] md:h-[100px]"
        />
        <div>
          <a
            href={experience?.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-light cursor-pointer hover:underline decoration-primary"
          >
            {experience?.companyName}
          </a>
          <p className="font-bold">{localeExperience?.job}</p>
          <p className="text-xs font-semibold">{`${experience?.dateStarted} - ${
            experience?.isCurrentJob ? t('current') : experience?.dateEnded
          }`}</p>
          <div className="flex my-2 space-x-2">
            {experience?.technologies.map((skill: SkillType) => (
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
        </div>
      </div>
      <ul className="ml-4 space-y-2 text-sm list-disc">
        {localeExperience?.points.map((point: string) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
};
