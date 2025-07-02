'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 overflow-hidden bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1F5F9]">
            Full-Stack Engineer<br />
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] bg-clip-text text-transparent">Building the Future</span>
          </h1>
          <p className="text-lg text-[#F1F5F9]">
            Specializing in AI, Web3, and modern web technologies. Creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-[#4ADE80] hover:bg-opacity-90 text-[#0D0D0D] rounded-lg transition-colors duration-200">View Projects</a>
            <a href="#contact" className="px-6 py-3 border border-[#38BDF8] text-[#F1F5F9] rounded-lg transition-colors duration-200 hover:bg-[#38BDF8] hover:bg-opacity-10">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md mx-auto aspect-[3/4] lg:aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] rounded-2xl -rotate-6 blur-2xl opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] rounded-2xl rotate-3" />
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}