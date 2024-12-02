"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Shield, BookOpen } from 'lucide-react';

export function ForPeopleSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="for-people" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For Citizens
          </h2>
          <p className="text-gray-600">
            Access the legal knowledge and support you need to understand and protect your rights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <MessageSquare className="h-12 w-12 text-[#7a0000] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
            <p className="text-gray-600">
              Post your legal questions and receive answers from qualified professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Shield className="h-12 w-12 text-[#7a0000] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Know Your Rights</h3>
            <p className="text-gray-600">
              Learn about your legal rights and obligations through our comprehensive resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <BookOpen className="h-12 w-12 text-[#7a0000] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn</h3>
            <p className="text-gray-600">
              Access educational content and interactive materials to enhance your legal knowledge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}