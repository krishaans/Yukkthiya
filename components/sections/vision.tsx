"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scale, Users } from 'lucide-react';

export function VisionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
              <div className="flex items-start space-x-4 mt-6">
                <Scale className="h-6 w-6 text-[#7a0000] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Empowering Through Knowledge</h3>
                  <p className="text-gray-600">
                    We envision a Sri Lanka where every citizen has access to proper legal knowledge and understanding of their rights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <div className="flex items-start space-x-4 mt-6">
                <Users className="h-6 w-6 text-[#7a0000] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Building Legal Awareness</h3>
                  <p className="text-gray-600">
                    To foster a culture of legal awareness and empowerment through our user-friendly, accessible platform that connects citizens with legal professionals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center"
              style={{ filter: 'brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}