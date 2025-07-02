'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type Metric = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

const metrics: Metric[] = [
  { value: 50000, label: 'Lines of Code', suffix: '+' },
  { value: 25, label: 'Projects Delivered', suffix: '+' },
  { value: 99.9, label: 'System Uptime', suffix: '%' },
  { value: 40, label: 'Open Source Contributions', suffix: '+' },
];

const Counter = ({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCount(Math.floor(value * progress));

        if (currentStep === steps) {
          clearInterval(timer);
          setCount(value);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] bg-clip-text text-transparent">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export function Metrics() {
  return (
    <section id="impact" className="py-20 px-4 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/10 to-[#38BDF8]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#F1F5F9]">
            Impact & Achievements
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Quantifiable results and metrics that demonstrate my technical expertise and project success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#111111]/80 backdrop-blur-xl border border-[#4ADE80]/20 hover:border-[#4ADE80]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ADE80]/10"
            >
              <div className="space-y-2 text-center">
                <Counter 
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
                <p className="text-[#94A3B8] font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}