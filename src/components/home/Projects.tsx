'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  category: 'ai' | 'backend' | 'fullstack' | 'mobile' | 'web3';
};

const projects: Project[] = [
  {
    title: "AI Code Assistant",
    description: "An intelligent coding assistant powered by advanced LLMs",
    tech: ["Python", "OpenAI", "React", "TypeScript"],
    image: "/file.svg",
    liveLink: "#",
    githubLink: "#",
    category: "ai"
  },
  {
    title: "DeFi Platform",
    description: "Decentralized finance platform built on Sui blockchain",
    tech: ["Move", "React", "Web3"],
    image: "/window.svg",
    liveLink: "#",
    githubLink: "#",
    category: "web3"
  },
  // Backend Projects
  {
    title: "Myhome Agency",
    description: "A comprehensive real estate management system for property listings, client management, and transaction processing",
    tech: ["Node.js", "Express", "MongoDB", "RESTful API", "JWT"],
    image: "/globe.svg",
    liveLink: "https://myhome-agency.example.com",
    githubLink: "https://github.com/samuelEze21/myhome-agency",
    category: "backend"
  },
  {
    title: "RenewConnect",
    description: "Renewable Energy Financing platform connecting investors with sustainable energy projects through secure payment processing and project tracking",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Docker"],
    image: "/file.svg",
    liveLink: "https://renewconnect.example.com",
    githubLink: "https://github.com/samuelEze21/renewconnect",
    category: "backend"
  },
  {
    title: "FastPay",
    description: "Crypto to fiat conversion service with real-time exchange rates, secure wallet integration, and instant transaction processing",
    tech: ["Python", "Django", "Redis", "Blockchain API", "Celery"],
    image: "/window.svg",
    liveLink: "https://fastpay.example.com",
    githubLink: "https://github.com/samuelEze21/fastpay",
    category: "backend"
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
          {['all', 'ai', 'backend', 'web3', 'fullstack', 'mobile'].map(category => (
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
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
                <div className="flex gap-4 mt-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors"
                  >
                    View Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#10B981] text-[#10B981] rounded-lg hover:bg-[#10B981] hover:bg-opacity-10 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}