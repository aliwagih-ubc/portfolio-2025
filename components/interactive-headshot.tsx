"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, Monitor } from "lucide-react";

export function InteractiveHeadshot() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-md lg:max-w-lg mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG filter for sharpening */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="sharpen">
            <feConvolveMatrix
              order="3"
              preserveAlpha="true"
              kernelMatrix="0 -0.5 0 -0.5 3 -0.5 0 -0.5 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Ambient glow behind subject - intensifies dramatically on hover */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full blur-[100px] pointer-events-none"
        animate={{
          background: isHovered
            ? "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(6,182,212,0.4) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 60%)",
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Main image container */}
      <motion.div
        className="relative aspect-[5/7] overflow-visible"
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Split-screen layer container */}
        <div
          className="relative w-full h-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 95% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 95% at 50% 50%, black 50%, transparent 100%)",
          }}
        >
          {/* Base image layer - shifted slightly right */}
          <motion.div
            className="absolute inset-0"
            animate={{
              x: isHovered ? 8 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/headshot-cropped.png"
              alt="Ali Wagih"
              fill
              className={`object-cover transition-all duration-700 ease-out ${isHovered
                ? "grayscale-0 scale-[1.02] contrast-[1.08]"
                : "grayscale-[0.3] scale-100 contrast-[1.02]"
                }`}
              style={{ filter: "url(#sharpen)" }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            />
          </motion.div>

          {/* Amber (Construction) overlay - left side - INTENSE */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.5 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{
              background:
                "linear-gradient(90deg, rgba(245,158,11,0.7) 0%, rgba(245,158,11,0.4) 35%, transparent 55%)",
            }}
          />

          {/* Cyan (Software) overlay - right side - INTENSE */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.5 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              background:
                "linear-gradient(270deg, rgba(6,182,212,0.7) 0%, rgba(6,182,212,0.4) 35%, transparent 55%)",
            }}
          />

          {/* Central dividing line on hover - BOLD */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px]"
            animate={{
              opacity: isHovered ? 0.8 : 0,
              scaleY: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              background:
                "linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, transparent 95%)",
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
          />
        </div>

        {/* Grid overlay effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.08 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,6,23,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Floating badges - appear on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Engineering badge - left */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -40, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-background/95 backdrop-blur-md border-2 border-amber-500/60 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                  <HardHat className="w-7 h-7 md:w-9 md:h-9 text-amber-500" />
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-amber-400 text-center leading-tight drop-shadow-lg">
                  Civil<br />Engineering
                </span>
              </motion.div>
            </motion.div>

            {/* Software badge - right */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 40, y: 10 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-background/95 backdrop-blur-md border-2 border-cyan-500/60 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                  <Monitor className="w-7 h-7 md:w-9 md:h-9 text-cyan-500" />
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-cyan-400 drop-shadow-lg">
                  Software
                </span>
              </motion.div>
            </motion.div>

          </>
        )}
      </AnimatePresence>
    </div>
  );
}
