"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scale, Users, Brain, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Scale,
    title: "Justice Awaits",
    description: "Break free from the shadows of legal uncertainty. Our platform illuminates the path to justice with crystal-clear guidance.",
    color: "from-[#7a0000] to-[#460000]"
  },
  {
    icon: Users,
    title: "Unite in Knowledge",
    description: "Join a growing community of seekers and experts, where legal wisdom flows freely through the darkness.",
    color: "from-[#460000] to-[#7a0000]"
  },
  {
    icon: Brain,
    title: "Unleash Understanding",
    description: "Transform complex legal mysteries into clear insights with our AI-powered guidance system.",
    color: "from-[#7a0000] to-[#460000]"
  },
  {
    icon: Zap,
    title: "Swift Justice",
    description: "When time is of the essence, our platform delivers instant legal clarity through the shadows.",
    color: "from-[#460000] to-[#7a0000]"
  }
];

const userTypes = [
  {
    title: "For Citizens",
    features: [
      "Instant access to legal knowledge",
      "24/7 AI-powered legal guidance",
      "Multilingual support (Sinhala & English)",
      "Direct connection to verified lawyers",
      "Interactive learning modules"
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "For Lawyers",
    features: [
      "Enhanced visibility in the legal community",
      "Direct client connections",
      "Professional profile management",
      "Case management tools",
      "Reputation building platform"
    ],
    image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
  }
];

export function WhyChooseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-[#1a0000] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
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
            className="inline-block px-4 py-2 bg-[#7a0000] rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Yukkthiya
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Illuminate Your Legal Path
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Step into a realm where legal knowledge becomes power, and justice is within reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r bg-opacity-50 rounded-lg transform transition-transform group-hover:scale-105" />
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#7a0000] transition-colors duration-300">
                <feature.icon className="h-12 w-12 text-[#7a0000] mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <ChevronRight className="h-4 w-4 text-[#7a0000]" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  className="bg-[#7a0000] hover:bg-[#5a0000] text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}