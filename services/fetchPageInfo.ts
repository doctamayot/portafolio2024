export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hugotamayo.com";

export const fetchPageInfo = async () => {
  const resPage = await fetch(`${baseUrl}/api/pageinfo`, {
    next: { revalidate: 60 },
  });
  const pageInfo = await resPage.json();
  return pageInfo;
};
