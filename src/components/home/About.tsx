'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <motion.div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#E2E8F0]">About Me</h2>
            <p className="text-[#E2E8F0] max-w-2xl mx-auto opacity-90">
              A versatile software engineer with expertise across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-opacity-10 bg-white border border-[#4ADE80] hover:border-opacity-100 border-opacity-50 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building scalable applications with MERN Stack, Java + Spring Boot, and modern React frameworks.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-background border border-foreground/10">
              <h3 className="text-xl font-semibold mb-4">AI Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing intelligent solutions using LLMs, creating AI-powered tools and assistants.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-background border border-foreground/10">
              <h3 className="text-xl font-semibold mb-4">Web3 Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating decentralized applications and smart contracts using Sui Move.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}