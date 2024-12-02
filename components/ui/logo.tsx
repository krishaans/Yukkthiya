"use client";

import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  textClassName?: string;
  iconClassName?: string;
}

export function Logo({ textClassName = "text-white", iconClassName = "text-[#7a0000]" }: LogoProps) {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Scale className={`h-8 w-8 ${iconClassName}`} />
      </motion.div>
      <span className={`font-bold text-xl ${textClassName}`}>Yukkthiya</span>
    </motion.div>
  );
}