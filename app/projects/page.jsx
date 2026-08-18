"use client"
import Hero from "@/components/layout/Hero";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  }

  const projects = [
    {
      title: "Inventory management system",
      description: "A GUI-based inventory and sales management system for a mobile shop, built using Java Swing. Includes secure admin login and modules for tracking products, customers, suppliers, and sales.",
      imageUrl: "/javaswing.png",
      url: 'https://github.com/MuttjmalHussain/Inventory-management-system',
      techStack: ["Java Swing", "JDBC", "MySQL"],
    },
    {
      title: "QuickHire",
      description: "Showcase platform for photographers with image optimization",
      imageUrl: "/quick.png",
      url: 'https://github.com/MuttjmalHussain/QuickHire',
      techStack: ["MongoDB", "Express", "React.js", "Node.js"],
    },
    {
      title: "Movies Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      imageUrl: "/movie.png",
      url: 'https://muttjmalhussain.github.io/MovieWebsite/',
      techStack: ["React.js", "Tailwind CSS"],
    }
  ];

  return (
    <section id="projects" className="py-16 max-w-[1560px] mx-auto bg-[#1c1917]">
      <div className="container mx-auto px-6">
        <Hero title={'My Projects'} />
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleClick(project.url)}
              className="group relative w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]
         rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800
         cursor-default flex flex-col
         transition-all duration-300 ease-out
         hover:-translate-y-1 hover:scale-[1.02]
         hover:border-emerald-500/60
         hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <Image
                  fill
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Dark overlay + Code button on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span
                    className="opacity-0 group-hover:opacity-100 
         scale-95 group-hover:scale-100
         translate-y-2 group-hover:translate-y-0
         transition-all duration-300 ease-out
         flex items-center gap-2
         bg-white/5 group-hover:bg-white/15 hover:bg-white/25
         backdrop-blur-md
         border border-white/10 group-hover:border-white/40 hover:border-white/60
         text-white text-sm font-medium px-5 py-2.5 rounded-full
         cursor-pointer"
                  >
                    <FaGithub size={20} className="text-white" />
                    Code
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-emerald-600/50 text-emerald-400 bg-emerald-600/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;