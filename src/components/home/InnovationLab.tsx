'use client';

import { motion } from 'framer-motion';

type Demo = {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  category: string;
};

const demos: Demo[] = [
  {
    title: "AI Code Analyzer",
    description: "Live demo of an AI-powered code analysis tool that provides instant code quality feedback.",
    tech: ["Python", "TensorFlow", "React"],
    demoUrl: "#",
    category: "AI/ML"
  },
  {
    title: "Real-time Data Visualization",
    description: "Interactive dashboard showcasing real-time data processing and visualization capabilities.",
    tech: ["D3.js", "WebSocket", "Node.js"],
    demoUrl: "#",
    category: "Data Viz"
  },
  {
    title: "WebAssembly Performance Demo",
    description: "Comparative performance analysis of JavaScript vs WebAssembly implementations.",
    tech: ["Rust", "WebAssembly", "JavaScript"],
    demoUrl: "#",
    category: "Performance"
  }
];

export function InnovationLab() {
  return (
    <section className="py-20 px-4 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 to-[#38BDF8]/5 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#F1F5F9]">
            Innovation Lab
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Interactive demos showcasing cutting-edge technology implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={demo.demoUrl}
                className="block p-6 rounded-xl bg-[#111111]/80 backdrop-blur-xl border border-[#4ADE80]/20 hover:border-[#4ADE80]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ADE80]/10"
              >
                <span className="px-3 py-1 rounded-full text-sm bg-[#4ADE80]/10 text-[#4ADE80] inline-block mb-4">
                  {demo.category}
                </span>
                <h3 className="text-xl font-semibold text-[#F1F5F9] group-hover:text-[#4ADE80] transition-colors duration-300">
                  {demo.title}
                </h3>
                <p className="mt-2 text-[#94A3B8]">{demo.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-[#4ADE80] text-sm font-medium group-hover:underline">
                  Try Demo →
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}