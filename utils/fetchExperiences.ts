import { ExperienceType } from "../@types/api";

export const fetchExperiences = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperiences`,
  );

  const data = await response.json();
  const experiences: ExperienceType[] = data.experiences;

  return experiences;
};
