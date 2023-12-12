import { baseUrl } from "./fetchPageInfo";

export const fetchSocials = async () => {
  const resSocial = await fetch(`${baseUrl}/api/socials`, {
    next: { revalidate: 60 },
  });
  const socials = await resSocial.json();
  return socials;
};
