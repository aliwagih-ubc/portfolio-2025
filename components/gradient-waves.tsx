"use client";

import { motion } from "framer-motion";

interface GradientWavesProps {
  className?: string;
}

export function GradientWaves({ className = "" }: GradientWavesProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Animated wave 1 - Primary orange */}
      <motion.div
        className="absolute -bottom-1/2 -left-1/4 w-[150%] h-[100%] opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C360,400 720,200 1080,300 C1260,350 1380,280 1440,300 L1440,600 L0,600 Z"
            fill="url(#wave1Gradient)"
          />
        </svg>
      </motion.div>

      {/* Animated wave 2 - Deeper orange */}
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[150%] h-[80%] opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave2Gradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,250 C180,150 360,350 720,250 C1080,150 1260,350 1440,250 L1440,500 L0,500 Z"
            fill="url(#wave2Gradient)"
          />
        </svg>
      </motion.div>

      {/* Subtle cyan accent glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orange glow point */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
    </div>
  );
}
