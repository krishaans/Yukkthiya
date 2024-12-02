"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ArrowRight, Scale } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
          style={{ filter: 'brightness(0.3) contrast(1.2)' }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="space-y-6"
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Scale className="h-20 w-20 text-[#7a0000]" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Sri Lankan Citizens Through{' '}
            <motion.span
              className="text-[#7a0000] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Legal Awareness
              <motion.div
                className="absolute -inset-1 bg-[#7a0000]/20 blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Navigate the shadows of legal complexity with our AI-powered platform. Your path to justice begins here.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={fadeInUp}
          >
            <Button 
              size="lg"
              className="bg-[#7a0000] hover:bg-[#5a0000] text-white px-8 group relative overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-[#460000]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="inline-block ml-2 relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore the Darkness</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #7a0000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </section>
  );
}