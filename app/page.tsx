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
  fetchExperience,
  fetchPageInfo,
  fetchSocials,
  fetchSkills,
  fetchProjects,
} from "@/services";

async function getSocials() {
  const pageInfo = await fetchPageInfo();
  const expInfo = await fetchExperience();
  const socials = await fetchSocials();
  const skillsInfo = await fetchSkills();
  const projectsInfo = await fetchProjects();

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
