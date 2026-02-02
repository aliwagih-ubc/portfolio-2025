"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    triggerOnScroll?: boolean;
}

export function SplitText({
    text,
    className = "",
    delay = 0,
    duration = 0.5,
    triggerOnScroll = true,
}: SplitTextProps) {
    // Split text into words
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as const,
        },
        hidden: {
            opacity: 0,
            y: "100%", // Slide up from bottom
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            /* If triggerOnScroll is false, animate immediately. Otherwise wait for view. */
            animate={!triggerOnScroll ? "visible" : undefined}
            whileInView={triggerOnScroll ? "visible" : undefined}
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <Fragment key={index}>
                    <span className="inline-block overflow-hidden align-top">
                        <motion.span
                            variants={child}
                            className="inline-block relative"
                            style={{ willChange: "transform" }}
                        >
                            {word}
                        </motion.span>
                    </span>
                    {index < words.length - 1 && " "}
                </Fragment>
            ))}
        </motion.div>
    );
}
