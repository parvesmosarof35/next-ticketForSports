"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

interface HeroSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({ 
  title, 
  description, 
  children, 
  className = ""
}: HeroSectionProps) {
  return (
    <div className={`bg-[#051D3B] pt-32 pb-24 px-16 relative overflow-hidden ${montserrat.className} ${className}`}>
      {/* Background glow shadow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-gray-400 text-lg md:text-xl font-medium ${children ? 'mb-10' : ''} max-w-2xl leading-relaxed`}
            >
              {description}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
