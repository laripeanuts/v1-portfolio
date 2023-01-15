import { ProjectType } from "../@types/api";

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
  );

  const data = await response.json();
  const projects: ProjectType[] = data.projects;
  return projects;
};
