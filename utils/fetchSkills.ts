import { SkillType } from "../@types/api";

export const fetchSkills = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`,
  );

  const data = await response.json();
  const skills: SkillType[] = data.skills;

  return skills;
};
