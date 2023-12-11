import React from "react";
import {
  About,
  Contact,
  Experience,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {
  Experience as ExperienceType,
  PageInfo,
  Project,
  Skill,
  Social,
} from "@/typings";

type Props = {
  data: {
    socials: Social[];
    pageInfo: PageInfo;
    experiences: ExperienceType[];
    skills: Skill[];
    projects: Project[];
  };
};

async function getSocials() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hugotamayo.com";
  const resSocial = await fetch(`${baseUrl}/api/socials`, {
    next: { revalidate: 60 },
  });
  const socials = await resSocial.json();

  const resPage = await fetch(`${baseUrl}/api/pageinfo`, {
    next: { revalidate: 60 },
  });
  const pageInfo = await resPage.json();
  const resExp = await fetch(`${baseUrl}/api/experience`, {
    next: { revalidate: 60 },
  });
  const expInfo = await resExp.json();
  const resSkills = await fetch(`${baseUrl}/api/skills`, {
    next: { revalidate: 60 },
  });
  const skillsInfo = await resSkills.json();
  const resProjects = await fetch(`${baseUrl}/api/projects`, {
    next: { revalidate: 60 },
  });
  const projectsInfo = await resProjects.json();
  return { socials, pageInfo, expInfo, skillsInfo, projectsInfo };
}

export default async function Home() {
  const { socials, pageInfo, expInfo, skillsInfo, projectsInfo } =
    await getSocials();
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header data={socials?.socials} />
      <section id="hero" className="snap-start">
        <Hero data={pageInfo} />
      </section>
      <section id="about" className="snap-center md:mt-0 -mt-36">
        <About data={pageInfo} />
      </section>
      <section id="experience" className="snap-end">
        <Experience data={expInfo?.experiences} />
      </section>
      <section id="skills" className="snap-center mt-20">
        <Skills data={skillsInfo?.skills} />
      </section>
      <section id="projects" className="snap-center md:mt-0 -mt-48">
        <Projects data={projectsInfo?.projects} />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-[50px] m-auto  ">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-5 justify-center">
              <ArrowUpCircleIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}
