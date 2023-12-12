import { baseUrl } from "./fetchPageInfo";

export const fetchProjects = async () => {
  const resProjects = await fetch(`${baseUrl}/api/projects`, {
    next: { revalidate: 60 },
  });
  const projectsInfo = await resProjects.json();
  return projectsInfo;
};
