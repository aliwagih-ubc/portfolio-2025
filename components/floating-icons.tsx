"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
    { name: "Gemini", src: "/icons/gemini-color.svg", color: "rgba(66, 133, 244, 0.5)" },
    { name: "Claude", src: "/icons/claude-color.svg", color: "rgba(217, 119, 87, 0.5)" },
    { name: "Figma", src: "/icons/figma-color.svg", color: "rgba(162, 89, 255, 0.5)" },
    { name: "Perplexity", src: "/icons/perplexity-color.svg", color: "rgba(32, 178, 170, 0.5)" },
    { name: "n8n", src: "/icons/n8n-color.svg", color: "rgba(234, 76, 137, 0.5)" },
    { name: "DeepSeek", src: "/icons/deepseek-color.svg", color: "rgba(0, 122, 255, 0.5)" },
];

export function FloatingIcons() {
    return (
        <>
            {/* Desktop only - floating icons */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-[8%] xl:right-[12%] -translate-y-1/2 w-[320px] h-[320px] xl:w-[400px] xl:h-[400px]">
                    {techIcons.map((icon, index) => {
                        const angle = (index / techIcons.length) * Math.PI * 2 - Math.PI / 2;
                        const radius = 80 + (index % 2) * 30;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        const delay = index * 0.12;
                        const duration = 12 + index * 1.5;

                        return (
                            <motion.div
                                key={icon.name}
                                className="absolute left-1/2 top-1/2"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: [x, x + 8, x - 4, x],
                                    y: [y, y - 8, y + 4, y],
                                }}
                                transition={{
                                    opacity: { duration: 0.6, delay },
                                    scale: { duration: 0.6, delay, type: "spring", stiffness: 200 },
                                    x: { duration, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: duration + 1.5, repeat: Infinity, ease: "easeInOut" },
                                }}
                            >
                                {/* Glow behind icon */}
                                <motion.div
                                    className="absolute -inset-3 rounded-full blur-lg"
                                    style={{ backgroundColor: icon.color }}
                                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                />

                                {/* Icon container */}
                                <motion.div
                                    className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-card/90 backdrop-blur-sm border border-border/60 flex items-center justify-center shadow-lg"
                                    animate={{ rotate: [0, 3, -3, 0] }}
                                    transition={{ rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 } }}
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.name}
                                        width={28}
                                        height={28}
                                        className="w-6 h-6 xl:w-7 xl:h-7"
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Central subtle glow */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[70px] opacity-40"
                        style={{
                            background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 70%)",
                        }}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.5, 0.4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Mobile/Tablet - horizontal strip below hero content */}
            <div className="lg:hidden flex justify-center gap-3 mt-8 pointer-events-none">
                {techIcons.map((icon, index) => (
                    <motion.div
                        key={icon.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div
                            className="absolute -inset-2 rounded-full blur-md opacity-50"
                            style={{ backgroundColor: icon.color }}
                        />
                        {/* Icon */}
                        <div className="relative w-10 h-10 rounded-lg bg-card/90 backdrop-blur-sm border border-border/60 flex items-center justify-center shadow-md">
                            <Image
                                src={icon.src}
                                alt={icon.name}
                                width={24}
                                height={24}
                                className="w-5 h-5"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
