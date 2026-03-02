"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-1 max-w-[1556px] mx-auto">
      <ParticlesBackground />
          <h1 className="text-4xl text-white lg:text-6xl font-extrabold mb-4 md:mb-6 text-center ">
            Muttjmal Hussain
          </h1>
            <ReactTyped
              className="text-xl md:text-2xl text-white text-center "
              strings={["I'm a Software Engineer", "I'm a Front-end Developer", "I'm a Web Developer", "I'm an App developer","I'm a MERN Stack Developer"]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={2000}
              loop
            />
    </section>
  );
};

export default Page;