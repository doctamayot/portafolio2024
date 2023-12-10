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
  const resSocial = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`,
    {
      next: { revalidate: 60 },
    }
  );
  const socials = await resSocial.json();

  // const resPage = await fetch(`${BASEURL}/api/pageinfo`, {
  //   next: { revalidate: 60 },
  // });
  // const pageInfo = await resPage.json();

  // const resExp = await fetch(`${BASEURL}/api/experience`, {
  //   next: { revalidate: 60 },
  // });
  // const expInfo = await resExp.json();

  // const resSkills = await fetch(`${BASEURL}/api/skills`, {
  //   next: { revalidate: 60 },
  // });
  // const skillsInfo = await resSkills.json();

  // const resProjects = await fetch(`${BASEURL}/api/projects`, {
  //   next: { revalidate: 60 },
  // });
  // const projectsInfo = await resProjects.json();

  return { socials };
}

export default async function Home() {
  const { socials } = await getSocials();
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header data={socials?.socials} />
      {/* <section id="hero" className="snap-start">
        <Hero data={pageInfo} />
      </section> */}
      {/* <section id="about" className="snap-center">
        <About data={pageInfo} />
      </section> */}
      {/* <section id="experience" className="snap-center">
        <Experience data={expInfo?.experiences} />
      </section> */}
      {/* <section id="skills" className="snap-center">
        <Skills data={skillsInfo?.skills} />
      </section> */}
      {/* <section id="projects" className="snap-center">
        <Projects data={projectsInfo?.projects} />
      </section> */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      {/* <Link href="#hero">
        <footer className="sticky bottom-5 w-[50px] m-auto  ">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-5 justify-center">
              <ArrowUpCircleIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            </div>
          </div>
        </footer>
      </Link> */}
    </div>
  );
}
