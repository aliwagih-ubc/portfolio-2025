"use client";

import { motion } from "framer-motion";

const BG = "#fdf8f2";
const ORANGE = "#e8652a";
const TEXT = "#1a1a1a";
const MUTED = "#6b7280";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const leftIcons = [
  { label: "Community", cy: 138, bgColor: "#f0e8d4", emoji: "👥", cls: "float-0" },
  { label: "Environment", cy: 252, bgColor: "#dcefd8", emoji: "🌿", cls: "float-1" },
  { label: "Health",      cy: 366, bgColor: "#f9dde5", emoji: "❤️", cls: "float-2" },
];

const rightIcons = [
  { label: "Education", cy: 120, bgColor: "#d8eff4", emoji: "📖", cls: "float-3" },
  { label: "Animals",   cy: 244, bgColor: "#fef3d0", emoji: "🐾", cls: "float-4" },
  { label: "Events",    cy: 366, bgColor: "#e8e2f4", emoji: "📅", cls: "float-5" },
];

export function GoHelpMeDiagram() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      <defs>
        <style>{`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-9px); }
          }
          .float-0 { animation: floatUpDown 3.2s ease-in-out infinite 0.0s; }
          .float-1 { animation: floatUpDown 3.5s ease-in-out infinite 0.4s; }
          .float-2 { animation: floatUpDown 3.8s ease-in-out infinite 0.8s; }
          .float-3 { animation: floatUpDown 3.0s ease-in-out infinite 0.2s; }
          .float-4 { animation: floatUpDown 3.6s ease-in-out infinite 0.6s; }
          .float-5 { animation: floatUpDown 3.3s ease-in-out infinite 1.0s; }
        `}</style>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={BG} />

      {/* ── Navbar ── */}
      <motion.g {...fadeIn(0)}>
        <rect width="800" height="46" fill="#ffffff" />
        <line x1="0" y1="46" x2="800" y2="46" stroke="#e5e7eb" strokeWidth="1" />
        {/* Logo */}
        <text x="22" y="30" fill={ORANGE} fontSize="15" fontFamily="system-ui">♥</text>
        <text x="42" y="30" fill={ORANGE} fontSize="13" fontFamily="system-ui" fontWeight="700">GoHelpMe</text>
        {/* Nav */}
        <text x="222" y="29" fill="#374151" fontSize="10" fontFamily="system-ui">Browse Campaigns</text>
        <text x="344" y="29" fill="#374151" fontSize="10" fontFamily="system-ui">How It Works</text>
        <text x="424" y="29" fill="#374151" fontSize="10" fontFamily="system-ui">About</text>
        {/* Sign In */}
        <text x="524" y="29" fill="#374151" fontSize="10" fontFamily="system-ui">Sign In</text>
        {/* CTA */}
        <rect x="566" y="13" width="118" height="22" rx="11" fill={ORANGE} />
        <text x="625" y="28" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontFamily="system-ui" fontWeight="600">Start a Campaign</text>
      </motion.g>

      {/* ── Left floating icons ── */}
      {leftIcons.map((icon, i) => (
        <motion.g key={icon.label} {...fadeIn(0.3 + i * 0.15)}>
          <g className={icon.cls}>
            <circle cx="72" cy={icon.cy} r="28" fill={icon.bgColor} />
            <text x="72" y={icon.cy + 7} textAnchor="middle" fontSize="20" fontFamily="system-ui">{icon.emoji}</text>
            <text x="72" y={icon.cy + 46} textAnchor="middle" fill={MUTED} fontSize="9" fontFamily="system-ui">{icon.label}</text>
          </g>
        </motion.g>
      ))}

      {/* ── Right floating icons ── */}
      {rightIcons.map((icon, i) => (
        <motion.g key={icon.label} {...fadeIn(0.4 + i * 0.15)}>
          <g className={icon.cls}>
            <circle cx="728" cy={icon.cy} r="28" fill={icon.bgColor} />
            <text x="728" y={icon.cy + 7} textAnchor="middle" fontSize="20" fontFamily="system-ui">{icon.emoji}</text>
            <text x="728" y={icon.cy + 46} textAnchor="middle" fill={MUTED} fontSize="9" fontFamily="system-ui">{icon.label}</text>
          </g>
        </motion.g>
      ))}

      {/* ── Hero content ── */}
      <motion.g {...fadeIn(0.1)}>
        <text
          x="400" y="108"
          textAnchor="middle" fill={ORANGE}
          fontSize="9" fontFamily="system-ui" fontWeight="700" letterSpacing="1.5"
        >#1 VOLUNTEER MATCHING PLATFORM</text>
      </motion.g>

      <motion.g {...fadeIn(0.2)}>
        <text x="400" y="158" textAnchor="middle" fill={TEXT}   fontSize="44" fontFamily="system-ui" fontWeight="800">Volunteer hours</text>
        <text x="400" y="208" textAnchor="middle" fill={ORANGE} fontSize="44" fontFamily="system-ui" fontWeight="800">that make a</text>
        <text x="400" y="256" textAnchor="middle" fill={TEXT}   fontSize="44" fontFamily="system-ui" fontWeight="800">difference</text>
      </motion.g>

      <motion.g {...fadeIn(0.35)}>
        <text x="400" y="284" textAnchor="middle" fill={MUTED} fontSize="11" fontFamily="system-ui">Create campaigns, pledge your time, and connect with causes that</text>
        <text x="400" y="300" textAnchor="middle" fill={MUTED} fontSize="11" fontFamily="system-ui">matter. Every hour counts.</text>
      </motion.g>

      <motion.g {...fadeIn(0.5)}>
        {/* Primary */}
        <rect x="272" y="318" width="142" height="36" rx="18" fill={ORANGE} />
        <text x="343" y="341" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="system-ui" fontWeight="600">Start a Campaign</text>
        {/* Secondary */}
        <rect x="424" y="318" width="142" height="36" rx="18" fill="transparent" stroke="#d1d5db" strokeWidth="1.5" />
        <text x="495" y="341" textAnchor="middle" fill={TEXT} fontSize="11" fontFamily="system-ui" fontWeight="500">Find a Campaign</text>
      </motion.g>
    </svg>
  );
}
