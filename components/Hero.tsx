"use client";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from ".";
import Link from "next/link";
import { urlFor } from "../sanity";
import { PageInfo } from "@/typings";

export default function Hero({ data }: { data: PageInfo }) {
  const [info, getInfo] = useState(data);

  const [text, count] = useTypewriter({
    words: ["Hola, soy Hugo Tamayo", "<StackMern/>", "<Javascript Developer/>"],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    getInfo(data);
  }, [data]);

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {info?.heroImage && (
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(info?.heroImage).url()}
          alt="hugo tamayo"
        />
      )}

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Web Developer
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About Me</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
