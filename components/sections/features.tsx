"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Bot, UserSearch, HelpCircle, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: MessageSquare,
    title: "Legal Forum",
    description: "Post problems, comment, and interact with lawyers. Get highlighted responses from legal professionals."
  },
  {
    icon: Bot,
    title: "Yukthi Bot",
    description: "AI-powered chatbot providing instant legal advice and explanations in simple terms."
  },
  {
    icon: UserSearch,
    title: "Find a Lawyer",
    description: "Search and connect with lawyers based on their expertise and specialization."
  },
  {
    icon: HelpCircle,
    title: "FAQ Section",
    description: "Access comprehensive answers to frequently asked legal questions."
  },
  {
    icon: Search,
    title: "Universal Search",
    description: "Search seamlessly across forums, lawyers, and legal content."
  }
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access a wide range of features designed to make legal knowledge accessible and actionable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-[#7a0000] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}