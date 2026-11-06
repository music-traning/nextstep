"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
