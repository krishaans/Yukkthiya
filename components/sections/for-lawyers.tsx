"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ForLawyersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="for-lawyers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              For Legal Professionals
            </h2>
            <p className="text-gray-600 mb-8">
              Join our platform to expand your reach and make a meaningful impact in the legal community.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Star className="h-6 w-6 text-[#7a0000] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Reputation</h3>
                  <p className="text-gray-600">
                    Gain visibility through ratings and reviews from clients you help.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <TrendingUp className="h-6 w-6 text-[#7a0000] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Grow Your Practice</h3>
                  <p className="text-gray-600">
                    Connect with potential clients and expand your client base.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-[#7a0000] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                  <p className="text-gray-600">
                    Contribute to legal awareness and help citizens understand their rights.
                  </p>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-[#7a0000] hover:bg-[#5a0000] text-white mt-4"
              >
                Join as a Legal Professional
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center"
              style={{ filter: 'brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}