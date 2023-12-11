"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project, Technology } from "@/typings";

export default function Projects({ data }: { data: Project }) {
  const [info, getInfo] = useState(data);

  useEffect(() => {
    getInfo(data);
  }, [data]);

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto md:items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Proyectos
      </h3>
      <div className="w-full relative overflow-hidden flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {info.map((project: Project, i: number) => (
          <div
            key={i}
            className="flex flex-col rounded-l space-y-7 mt-24 flex-shrink-0 items-center md:w-[700px] w-[400px]  justify-center snap-center p-10 bg-[#292929] hover:opacity-100  transition-opacity duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="Hugo Tamayo"
            />
            <div className="space-y-2 px-0 md:px-4 max-w-6xl">
              <h4 className="md:text-4xl text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Proyecto {i + 1} de {info.length}:
                </span>{" "}
                <span>{project.title}</span>
              </h4>

              <a
                href={project.linkToBuild}
                target="_blank"
                className="text-lg text-center md:text-left "
              >
                {project.linkToBuild}
              </a>
              <div className="flex space-x-2 ">
                {project.technologies?.map((tech: Technology, i: number) => (
                  <img
                    key={i}
                    className="h-8 w-8 rounded-full"
                    src={urlFor(tech?.image).url()}
                    alt="hugo tamayo"
                  />
                ))}
              </div>
            </div>
            <p className="font-bold md:text-xl text-base mt-4">
              {project.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
