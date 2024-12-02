"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    title: "Limited Access to Legal Knowledge",
    description: "Many Sri Lankans struggle to access and understand legal information crucial for their rights and responsibilities."
  },
  {
    title: "Language Barriers",
    description: "Legal content is often available only in English, making it inaccessible to many citizens."
  },
  {
    title: "Complex Legal Jargon",
    description: "Legal terms and concepts are typically presented in complex language that's hard for the average person to understand."
  }
];

const solutions = [
  {
    title: "AI-Powered Simplification",
    description: "Our AI technology breaks down complex legal concepts into simple, understandable language."
  },
  {
    title: "Multilingual Support",
    description: "Access all content in both Sinhala and English, ensuring wider accessibility."
  },
  {
    title: "Expert-Verified Content",
    description: "All legal information is verified by experienced lawyers for accuracy and reliability."
  }
];

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#7a0000]/10 text-[#7a0000] rounded-full text-sm font-semibold mb-4"
          >
            The Challenge
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bridging the Legal Knowledge Gap
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understanding the challenges faced by Sri Lankan citizens in accessing legal knowledge, and how we're solving them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <AlertTriangle className="h-8 w-8 text-[#7a0000]" />
              <h3 className="text-2xl font-bold">The Problems</h3>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h4 className="text-xl font-semibold mb-2">{problem.title}</h4>
                  <p className="text-gray-600">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold">Our Solutions</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600"
                >
                  <h4 className="text-xl font-semibold mb-2">{solution.title}</h4>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}