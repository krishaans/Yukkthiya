"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Features', 'Vision', 'For Lawyers', 'Contact'];

  return (
    <motion.header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo 
              textClassName={cn(
                'transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
              iconClassName={cn(
                'transition-colors duration-300',
                isScrolled ? 'text-[#7a0000]' : 'text-white'
              )}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={cn(
                    'transition-colors duration-300',
                    isScrolled
                      ? 'text-gray-700 hover:text-[#7a0000]'
                      : 'text-white hover:text-gray-200'
                  )}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Button
              variant="default"
              className={cn(
                'transition-colors duration-300',
                isScrolled
                  ? 'bg-[#7a0000] hover:bg-[#5a0000] text-white'
                  : 'bg-white text-[#7a0000] hover:bg-gray-100'
              )}
            >
              Get Started
            </Button>
          </nav>

          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className={cn(
              'h-6 w-6 transition-colors duration-300',
              isScrolled ? 'text-gray-900' : 'text-white'
            )} />
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4"
            >
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className={cn(
                        'transition-colors duration-300',
                        isScrolled
                          ? 'text-gray-700 hover:text-[#7a0000]'
                          : 'text-white hover:text-gray-200'
                      )}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  variant="default"
                  className={cn(
                    'w-full transition-colors duration-300',
                    isScrolled
                      ? 'bg-[#7a0000] hover:bg-[#5a0000] text-white'
                      : 'bg-white text-[#7a0000] hover:bg-gray-100'
                  )}
                >
                  Get Started
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}