"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

type Props = {};

export default function ExperienceCard({ exp }: any) {
  const [info, setInfo] = useState<any>([]);
  useEffect(() => {
    setInfo(exp);
  }, [exp]);

  return (
    <article className="flex flex-col rounded-l space-y-7 mt-24 flex-shrink-0 md:items-center w-[400px] md:w-[700px] md:justify-center md:snap-center p-10 bg-[#292929] hover:opacity-100  transition-opacity duration-200 overflow-hidden">
      {info?.companyImage && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[400px] h-[200px] object-contain"
          src={urlFor(info?.companyImage).url()}
          alt="Hugo Tamayo"
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{info.jobTitle}</h4>
        <p className="font-bold text-2xl mt-4"> en {info.company}</p>
        <div className="flex space-x-2 my-6">
          {info.technologies?.map((tech: any, i: number) => (
            <img
              key={i}
              className="md:h-12 md:w-12 w-5 rounded-full"
              src={urlFor(tech?.image).url()}
              alt="hugo tamayo"
            />
          ))}
        </div>
        <p>
          {info.dateStarted} - {info.dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg mt-1">
          {info.points?.map((point: any, i: number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
