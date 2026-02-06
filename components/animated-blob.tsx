"use client";

import { motion } from "framer-motion";

export function AnimatedBlob() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary morphing blob */}
            <motion.div
                className="absolute top-1/2 right-0 md:right-[5%] lg:right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] -translate-y-1/2"
                animate={{
                    scale: [1, 1.1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Gradient layer 1 - Orange/Amber */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-[80px] opacity-40"
                    style={{
                        background:
                            "radial-gradient(ellipse at 30% 40%, rgba(249,115,22,0.6) 0%, transparent 60%)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, -10, 0],
                        y: [0, -15, 10, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Gradient layer 2 - Cyan */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-[100px] opacity-30"
                    style={{
                        background:
                            "radial-gradient(ellipse at 70% 60%, rgba(6,182,212,0.5) 0%, transparent 55%)",
                    }}
                    animate={{
                        scale: [1.1, 1, 1.15, 1.1],
                        x: [0, -30, 15, 0],
                        y: [0, 20, -10, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Gradient layer 3 - Purple accent */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-[120px] opacity-20"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.4) 0%, transparent 50%)",
                    }}
                    animate={{
                        scale: [1, 1.3, 0.95, 1],
                        rotate: [0, -10, 5, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                />

                {/* Core glow */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-[60px] opacity-50"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Subtle grid overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}
