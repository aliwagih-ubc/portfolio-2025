"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, Monitor, User } from "lucide-react";

export function InteractiveHeadshot() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main container */}
      <motion.div
        className="relative w-full h-full rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Placeholder avatar - replace with actual photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted/50 border border-border flex items-center justify-center">
            <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
          </div>
        </div>

        {/* Left brain - Engineering (visible on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <HardHat className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />
                </div>
                <span className="text-xs font-medium text-amber-400">
                  Engineering
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right brain - Software (visible on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Monitor className="w-7 h-7 md:w-8 md:h-8 text-cyan-500" />
                </div>
                <span className="text-xs font-medium text-cyan-400">
                  Software
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover instruction */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <span className="text-xs text-muted-foreground">
                Hover to explore
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connecting line animation on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-px bg-gradient-to-r from-amber-500 via-transparent to-cyan-500 origin-center"
            />
          )}
        </AnimatePresence>

        {/* Background glow effects on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-amber-500/20 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/20 to-transparent"
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
