'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'TypeScript', category: 'Language', icon: '📘' },
  { name: 'Python', category: 'Language', icon: '🐍' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'GraphQL', category: 'API', icon: '📊' },
  // Add more technologies
];

export function TechUniverse() {
  return (
    <section id="tech" className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-indigo-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-indigo-50">Tech Universe</h2>
          <p className="text-indigo-200">
            Exploring the vast ecosystem of modern technologies
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="p-4 bg-indigo-800/50 backdrop-blur-sm border border-violet-600/30 hover:border-violet-500/50 rounded-lg text-center transition-all duration-200 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <h3 className="font-medium text-violet-300">{tech.name}</h3>
              <p className="text-sm text-indigo-300">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}