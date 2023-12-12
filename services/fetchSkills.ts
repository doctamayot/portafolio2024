import { baseUrl } from "./fetchPageInfo";

export const fetchSkills = async () => {
  const resSkills = await fetch(`${baseUrl}/api/skills`, {
    next: { revalidate: 60 },
  });
  const skillsInfo = await resSkills.json();
  return skillsInfo;
};
