'use client';

import { motion } from 'framer-motion';

type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Microservices with Spring Boot",
    description: "A deep dive into creating robust microservices architecture using Spring Boot and best practices for scalability.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Architecture",
    link: "#"
  },
  {
    title: "Advanced React Patterns for Enterprise Applications",
    description: "Exploring advanced React patterns and their practical applications in large-scale enterprise systems.",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Frontend",
    link: "#"
  },
  {
    title: "Implementing AI-Powered Features in Web Applications",
    description: "Step-by-step guide to integrating AI capabilities into your web applications using modern frameworks.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AI/ML",
    link: "#"
  }
];

export function Blog() {
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
            Tech Blog
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Sharing insights and experiences in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={post.link}
                className="block p-6 rounded-xl bg-[#111111]/80 backdrop-blur-xl border border-[#4ADE80]/20 hover:border-[#4ADE80]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ADE80]/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-[#4ADE80]/10 text-[#4ADE80]">
                    {post.category}
                  </span>
                  <span className="text-[#94A3B8] text-sm">{post.date}</span>
                  <span className="text-[#94A3B8] text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#F1F5F9] group-hover:text-[#4ADE80] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="mt-2 text-[#94A3B8]">{post.description}</p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}