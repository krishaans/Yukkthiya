"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: "Kasun Perera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Former Supreme Court lawyer with 15+ years of experience in constitutional law.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Amara Silva",
    role: "Legal Tech Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Tech innovator specializing in legal software solutions and AI implementation.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Malik Fernando",
    role: "Head of Legal Content",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Expert in simplifying complex legal concepts for public understanding.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const socialIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#7a0000]/10 text-[#7a0000] rounded-full text-sm font-semibold">
              Our Team
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#7a0000] to-[#460000] bg-clip-text text-transparent">
            Meet the Experts Behind Yukkthiya
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our diverse team of legal and technology experts is committed to making legal knowledge accessible to all Sri Lankans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <div className="relative group">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#7a0000] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url], i) => (
                    <motion.div
                      key={platform}
                      variants={socialIconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-600 hover:text-[#7a0000]"
                      >
                        {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                        {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                        {platform === 'github' && <Github className="h-5 w-5" />}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#7a0000] hover:bg-[#5a0000] text-white"
          >
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}