"use client"
import Hero from "@/components/layout/Hero";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  }
  const projects = [
    {
      title: "QuickHire",
      description: "Showcase platform for photographers with image optimization",
      imageUrl: "/movie.png",
      url: 'https://github.com/MuttjmalHussain/QuickHIre',
      techStack: "MERN Stack"
    },

    {
      title: "Movies Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      imageUrl: "/movie.png",
      url: 'https://muttjmalhussain.github.io/MovieWebsite/',
      techStack: "React.js"
    },
    {
      title: "React Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      imageUrl: "/java.png",
      url: 'https://muttjmalhussain.github.io/MovieWebsite/',
      techStack: "Java Swing"
    },

  ];

  return (
    <section id="projects" className="py-16 max-w-[1560px] mx-auto bg-[#1c1917]">
      <div className="container mx-auto px-6">
        <Hero title={'My Projects'} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden hover:shadow-lg transition-shadow mb-2"
            >
              <div className="relative group">
                <button className="bg-black/50 p-3 rounded-lg  cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:flex gap-2" onClick={() => handleClick(project.url)}>
                  <ArrowUpRightFromSquare color="white " className="inline my-auto" size={17} strokeWidth={3} />
                  <span>Link</span>
                </button>
                <Image width={1000} height={1000} src={project.imageUrl} alt={project.title} />
              </div>

              <h3 className="text-xl font-bold text-white my-2">{project.title}</h3>
              <p className="text-gray-200 text-xs mb-4">{project.description}</p>
              <p className="text-white text-sm mb-2">Tech Stack: <span className="px-2 py-1 bg-orange-600 rounded-full">{project.techStack}</span>  </p>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;