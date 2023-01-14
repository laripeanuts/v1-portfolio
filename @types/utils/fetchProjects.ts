import { ProjectType } from "../api";

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`,
  );

  const data = await response.json();
  const projects: ProjectType[] = data.projects;

  return projects;
};
