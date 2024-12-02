"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function MarketingVideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#1a0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#7a0000] rounded-full text-sm font-semibold"
            >
              Watch Our Story
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforming Legal Knowledge Access in Sri Lanka
            </h2>
            
            <p className="text-gray-400">
              Witness how Yukkthiya is illuminating the path to justice for Sri Lankan citizens through accessible legal knowledge and expert connections.
            </p>
            
            <Button
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm group-hover:bg-black/40 transition-all duration-500" />
            
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Marketing Video"
              className="w-full h-full object-cover"
            />
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full w-16 h-16 p-0"
              >
                <Play className="h-8 w-8" />
              </Button>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                backgroundImage: 'radial-gradient(circle at center, #7a0000 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}