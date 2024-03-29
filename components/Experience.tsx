"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from ".";
import { Experience } from "@/typings";

type Props = {};

export default function Experience({ data }: { data: Experience[] }) {
  const [info, getInfo] = useState<Experience[]>([]);

  useEffect(() => {
    getInfo(data);
  }, [data]);

  let ordenado = info.sort(
    (a, b) =>
      new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute md:top-24 top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiencia
      </h3>
      <div className="w-full relative flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {ordenado?.map((exp: Experience, i: number) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
}
