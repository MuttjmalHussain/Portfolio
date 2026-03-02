"use client";
import React from "react";
const Hero = ({tagline,title}) => {
  return (
    <div className='text-center'>
      <p className='text-[#fbf0df] text-sm'>{tagline} </p>
      <h2 className="group relative inline-block text-3xl font-bold text-white mb-8 pb-3">
        {title}
        <span className="absolute left-1/2 bottom-0 h-[3px] w-1/2 bg-green-600 
                      transition-all duration-500 
                      group-hover:w-full
                      -translate-x-1/2">

        </span>
      </h2>
    </div>
  );
};

export default Hero;