"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}
