import { baseUrl } from "./fetchPageInfo";

export const fetchExperience = async () => {
  const resExp = await fetch(`${baseUrl}/api/experience`, {
    next: { revalidate: 60 },
  });
  const expInfo = await resExp.json();
  return expInfo;
};
