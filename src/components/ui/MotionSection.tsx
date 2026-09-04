"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export function MotionSection({
  children,
  delay = 0,
  className = "",
  id,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionCard({
  children,
  index = 0,
  className = "",
  onClick,
  onMouseEnter,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        rotateX: 3,
        rotateY: -3,
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`glass-card-3d ${className}`}
    >
      {children}
    </motion.div>
  );
}
