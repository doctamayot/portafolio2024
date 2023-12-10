"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skill } from ".";

type Props = {};

export default function Skills({ data }: any) {
  const [info, getInfo] = useState<any>([]);
  useEffect(() => {
    getInfo(data);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex flex-col relative text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-7 mx-auto items-center"
    >
      <h3 className="relative uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="relative uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proeficiency
      </h3>
      <div className="relative">
        <div className="grid grid-cols-4 gap-5">
          {info.slice(0, info.length / 2).map((skill: any, i: any) => (
            <Skill skill={skill} key={i} />
          ))}
          {info
            .slice(info.length / 2, info.length)
            .map((skill: any, i: any) => (
              <Skill directionLeft skill={skill} key={i} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
