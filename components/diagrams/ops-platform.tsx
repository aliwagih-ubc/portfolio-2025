"use client";

import { motion } from "framer-motion";

const C = {
  bg: "#0a0f1a",
  surface: "#111827",
  surfaceHigh: "#1a2535",
  border: "#1f2d3d",
  borderBright: "#334155",
  orange: "#f97316",
  orangeDim: "rgba(249,115,22,0.15)",
  cyan: "#06b6d4",
  cyanDim: "rgba(6,182,212,0.12)",
  text: "#f8fafc",
  muted: "#64748b",
  mutedLight: "#94a3b8",
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: "easeOut" as const },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay, ease: "easeOut" as const },
});

// Data sources
const sources = [
  { label: "SharePoint", sub: "Documents & Sites" },
  { label: "Acumatica CRM", sub: "Project & Finance" },
  { label: "Dayforce HR", sub: "Workforce Data" },
];

// Hub modules
const modules = [
  { label: "Portfolio Dashboard", icon: "▦" },
  { label: "Project Health Module", icon: "◎" },
  { label: "Cost Forecasting + Earned Value Management", icon: "◈" },
];

// Outputs
const outputs = [
  { label: "Exec Dashboard" },
  { label: "PM Monthly Report" },
  { label: "Earned Value Report" },
];

// Row Y-centers for the three data rows
const rowY = [118, 216, 314];
const nodeH = 60;

export function OpsPlatformDiagram() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      <defs>
        <marker id="arr-o" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={C.orange} />
        </marker>
        <filter id="hub-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes hubPulse {
            0%, 100% { stroke: ${C.border}; }
            50%       { stroke: ${C.cyan}; filter: drop-shadow(0 0 6px ${C.cyan}); }
          }
          @keyframes arrowFlow {
            from { stroke-dashoffset: 14; }
            to   { stroke-dashoffset: 0; }
          }
          .hub-border { animation: hubPulse 3s ease-in-out infinite; }
          .flow-line  { stroke-dasharray: 5 3; animation: arrowFlow 1.2s linear infinite; }
        `}</style>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={C.bg} rx="10" />

      {/* ── Column labels ── */}
      <motion.g {...fadeIn(0.1)}>
        <text x="91" y="48" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui" letterSpacing="2" textDecoration="none">DATA SOURCES</text>
        <text x="400" y="48" textAnchor="middle" fill={C.orange} fontSize="9" fontFamily="system-ui" letterSpacing="2">PLATFORM CORE</text>
        <text x="709" y="48" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui" letterSpacing="2">OUTPUTS</text>
      </motion.g>

      {/* ── Hub container ── */}
      <motion.g {...fadeIn(0.5)}>
        <rect
          x="182" y="62" width="436" height="300"
          rx="8"
          fill={C.surface}
          stroke={C.border}
          strokeWidth="1"
          className="hub-border"
        />
        {/* Platform label */}
        <rect x="254" y="53" width="292" height="20" rx="4" fill={C.surfaceHigh} stroke={C.orange} strokeWidth="1" />
        <text x="400" y="66" textAnchor="middle" fill={C.orange} fontSize="10" fontFamily="system-ui" fontWeight="600">Operations Intelligence Platform</text>
      </motion.g>

      {/* ── Hub modules ── */}
      {modules.map((mod, i) => (
        <motion.g key={mod.label} {...fadeUp(0.6 + i * 0.12)}>
          <rect
            x="200" y={rowY[i] - nodeH / 2}
            width="400" height={nodeH}
            rx="6"
            fill={C.surfaceHigh}
            stroke={C.borderBright}
            strokeWidth="1"
          />
          <text x="230" y={rowY[i] - 7} fill={C.mutedLight} fontSize="9" fontFamily="system-ui" letterSpacing="1">{mod.icon}</text>
          <text x="245" y={rowY[i] - 6} fill={C.mutedLight} fontSize="9" fontFamily="system-ui" letterSpacing="1">MODULE</text>
          <text x="230" y={rowY[i] + 12} fill={C.text} fontSize="12" fontFamily="system-ui" fontWeight="600">{mod.label}</text>
        </motion.g>
      ))}

      {/* ── Data source nodes ── */}
      <motion.g {...fadeUp(0.2)}>
        {sources.map((src, i) => (
          <g key={src.label}>
            <rect
              x="16" y={rowY[i] - nodeH / 2}
              width="150" height={nodeH}
              rx="6"
              fill={C.surface}
              stroke={C.borderBright}
              strokeWidth="1"
            />
            <text x="91" y={rowY[i] - 6} textAnchor="middle" fill={C.text} fontSize="11" fontFamily="system-ui" fontWeight="600">{src.label}</text>
            <text x="91" y={rowY[i] + 11} textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui">{src.sub}</text>
          </g>
        ))}
      </motion.g>

      {/* ── Output nodes ── */}
      <motion.g {...fadeUp(0.8)}>
        {outputs.map((out, i) => (
          <g key={out.label}>
            <rect
              x="634" y={rowY[i] - nodeH / 2}
              width="150" height={nodeH}
              rx="6"
              fill={C.surface}
              stroke={C.borderBright}
              strokeWidth="1"
            />
            <text x="709" y={rowY[i] + 5} textAnchor="middle" fill={C.text} fontSize="11" fontFamily="system-ui" fontWeight="600">{out.label}</text>
          </g>
        ))}
      </motion.g>

      {/* ── Arrows: sources → hub ── */}
      <motion.g {...fadeIn(1.0)}>
        {rowY.map((y, i) => (
          <g key={i}>
            {/* static background arrow */}
            <line x1="166" y1={y} x2="198" y2={y} stroke={C.border} strokeWidth="1.5" markerEnd="url(#arr-o)" />
            {/* animated flow overlay */}
            <line x1="166" y1={y} x2="198" y2={y} stroke={C.orange} strokeWidth="1.5" className="flow-line" />
          </g>
        ))}
      </motion.g>

      {/* ── Arrows: hub → outputs ── */}
      <motion.g {...fadeIn(1.0)}>
        {rowY.map((y, i) => (
          <g key={i}>
            <line x1="602" y1={y} x2="632" y2={y} stroke={C.border} strokeWidth="1.5" markerEnd="url(#arr-o)" />
            <line x1="602" y1={y} x2="632" y2={y} stroke={C.orange} strokeWidth="1.5" className="flow-line" />
          </g>
        ))}
      </motion.g>

    </svg>
  );
}
