"use client"
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import React from 'react';
import Hero from "@/components/layout/Hero";
const AboutMe = () => {

  return (
    <section id="about" className="py-16 flex-1 bg-[#1c1917] max-w-[1536px] mx-auto">
      <div className="container mx-auto px-6">
        <Hero tagline={'Get to know me'} title={'About Me'} />
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='relative rounded-xl overflow-hidden w-full max-w-sm mx-auto shadow-xl shadow-green-600'>
            <Image
              className='object-cover w-full h-90 sm:h-112 sm:object-[center_50%] object-[center_35%]'
              src={"/my-image.jpeg"}
              alt='my image'
              width={1000}
              height={1000}
            />
          </div>
          <div className="mx-auto ">
            <span className='font-bold text-green-600 text-lg'>Who am I ?</span>
            <p className="text-white text-2xl font-bold my-2">
              I'm Muttjmal Hussian, a Full Stack Software Engineer
            </p>
            <p className="text-[13px] text-[#d2d1d1] ">
              I'm a passionate full stack developer with a strong foundation in both frontend and backend technologies. With a degree in Software Engineering and hands-on experience in developing scalable web applications, I specialize in building robust digital solutions that solve real-world problems. I love turning ideas into reality through clean, efficient code and intuitive user experiences.
            </p>
            <hr className='text-gray-500 my-4 ' />
            <section className='grid grid-cols-1 sm:grid-cols-2 text-white text-xs gap-4'>
              <div>
                <p>Name:
                  <span className='text-gray-400'> Muttjmal Hussain</span></p>
              </div>
              <div><p>Email: <span className='text-gray-400'>muttjmalhussain1@gmail.com</span></p></div>
              <div><p>Age: <span className='text-gray-400'>22</span></p></div>
              <div><p>
                From: <span className='text-gray-400'>Gujranwala, Pakistan</span></p></div>
            </section>
            <section className='mt-6 flex gap-4'>
              <a
                href="/cv.pdf"
                download
                className="w-40 bg-green-800 p-3 text-white rounded-full text-sm text-center"
              >
                Download CV
              </a>
              <hr className='text-gray-300 w-10 sm:w-20 my-auto' />
              <div className='flex gap-3 items-center'>
                <a
                  href="https://web.facebook.com/fasi.janda.37/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                >
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muttjmal-hussain-60871b350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/MuttjmalHussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5 text-white" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </div >
    </section >
  );
};


export default AboutMe;
