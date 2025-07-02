'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  category: 'ai' | 'web3' | 'fullstack' | 'mobile';
};

const projects: Project[] = [
  {
    title: "AI Code Assistant",
    description: "An intelligent coding assistant powered by advanced LLMs",
    tech: ["Python", "OpenAI", "React", "TypeScript"],
    image: "/file.svg",
    link: "#",
    category: "ai"
  },
  {
    title: "DeFi Platform",
    description: "Decentralized finance platform built on Sui blockchain",
    tech: ["Move", "React", "Web3"],
    image: "/window.svg",
    link: "#",
    category: "web3"
  },
  // Add more projects here
];

export function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-[#064E3B] to-[#065F46]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#F1F5F9]">Featured Projects</h2>
          <p className="text-[#F1F5F9] opacity-90">Showcasing my best work across different domains</p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {['all', 'ai', 'web3', 'fullstack', 'mobile'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors duration-200 ${filter === category ? 'bg-[#10B981] text-white' : 'bg-[#064E3B] text-[#A7F3D0] hover:bg-[#065F46]'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#064E3B]/50 backdrop-blur-sm border border-[#34D399] border-opacity-30 hover:border-opacity-50 rounded-lg overflow-hidden transition-all duration-200"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#F1F5F9]">{project.title}</h3>
                <p className="text-[#F1F5F9] opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#065F46] text-[#6EE7B7] rounded-full text-sm border border-[#34D399] border-opacity-20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}