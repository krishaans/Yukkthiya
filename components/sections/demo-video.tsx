"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DemoVideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Yukkthiya in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how our platform makes legal knowledge accessible to everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gray-900">
            {/* Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                <Play className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}