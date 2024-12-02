"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const downloadVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

const phoneVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export function DownloadSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-[#7a0000] to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={downloadVariants}
            className="text-white"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Download Now
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Legal Knowledge in Your Pocket
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Access legal expertise anytime, anywhere. Download the Yukkthiya app and take control of your legal journey.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-[#7a0000] hover:bg-gray-100 space-x-2"
                >
                  <Apple className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-[#7a0000] hover:bg-gray-100 space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={phoneVariants}
            className="relative"
          >
            <div className="relative z-10 transform rotate-12">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                alt="Yukkthiya App"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-[#7a0000]/30 to-transparent blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}