"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Brain, Zap } from 'lucide-react';

const advantages = [
  {
    icon: Users,
    title: "Community-Driven Platform",
    description: "Connect with a growing community of users and legal professionals."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Access content in both Sinhala and English languages."
  },
  {
    icon: Brain,
    title: "Interactive Learning",
    description: "Enhance legal knowledge through quizzes and interactive content."
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "Powered by advanced technology for the best user experience."
  }
];

export function WhySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="why" className="py-20 bg-[#7a0000] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Yukkthiya?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Experience the advantages of our comprehensive legal knowledge platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <advantage.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-200">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}