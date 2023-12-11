import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { BASEURL } from "@/config";

//export const revalidate = 3600;

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
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header data={socials?.socials} />
      <section id="hero" className="snap-start">
        <Hero data={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About data={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience data={expInfo?.experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills data={skillsInfo?.skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects data={projectsInfo?.projects} />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
