"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from ".";

type Props = {};

export default function Experience({ data }: any) {
  const [info, getInfo] = useState<any>([]);

  useEffect(() => {
    getInfo(data);
  }, [data]);

  let ordenado = info.sort(
    (a: any, b: any) =>
      new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full relative flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {ordenado?.map((exp: any, i: any) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
}
