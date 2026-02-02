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

      {/* Ambient glow behind subject - shifts color on hover */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[80px] pointer-events-none"
        animate={{
          background: isHovered
            ? "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 60%)",
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Main image container - no card, uses mask for edge blending */}
      <motion.div
        className="relative aspect-[5/7] overflow-visible"
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* The headshot with edge fade mask */}
        <div
          className="relative w-full h-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 95% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 95% at 50% 50%, black 50%, transparent 100%)",
          }}
        >
          <Image
            src="/headshot-cropped.png"
            alt="Ali Wagih"
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered
                ? "grayscale-0 scale-[1.03] contrast-[1.05]"
                : "grayscale-[0.3] scale-100 contrast-[1.02]"
            }`}
            style={{ filter: "url(#sharpen)" }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        </div>

        {/* Grid overlay effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,6,23,0.4) 100%)",
          }}
        />

        {/* Bottom gradient fade for text/badges */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            background: "linear-gradient(to top, rgba(2,6,23,0.9) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Floating badges - appear on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Engineering badge - left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-background/80 backdrop-blur-sm border border-amber-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <HardHat className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-amber-400/90 text-center leading-tight">
                  Civil<br />Engineering
                </span>
              </motion.div>
            </motion.div>

            {/* Software badge - right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: 10 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-background/80 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Monitor className="w-6 h-6 md:w-7 md:h-7 text-cyan-500" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
                  Software
                </span>
              </motion.div>
            </motion.div>

            {/* Connecting arc/line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[2px] origin-center z-10"
              style={{
                background: "linear-gradient(90deg, rgba(245,158,11,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(6,182,212,0.6) 100%)",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
