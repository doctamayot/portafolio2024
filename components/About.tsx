"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

type Props = {};

export default function About({ data }: any) {
  const [info, getInfo] = useState(data);
  useEffect(() => {
    getInfo(data);
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative text-center max-w-7xl md:px-10 px-4 justify-evenly mx-auto items-center md:text-left md:flex-row h-screen"
    >
      <h3 className="absolute md:top-24 top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(info?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold"> Background</h4>
        <p className="text-base">{info.background}</p>
      </div>
    </motion.div>
  );
}
