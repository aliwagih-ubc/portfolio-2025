"use client";

import { motion } from "framer-motion";

const C = {
  bg: "#0a0f1a",
  surface: "#111827",
  surfaceHigh: "#1a2535",
  border: "#1f2d3d",
  borderBright: "#334155",
  orange: "#f97316",
  orangeDim: "rgba(249,115,22,0.12)",
  cyan: "#06b6d4",
  cyanDim: "rgba(6,182,212,0.12)",
  green: "#22c55e",
  greenDim: "rgba(34,197,94,0.12)",
  text: "#f8fafc",
  muted: "#64748b",
  mutedLight: "#94a3b8",
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" as const },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, delay },
});

const stages = [
  { num: "1", label: "DISCOVERY",  subs: ["Trend Scout", "Creator Tracker"], color: C.cyan,       dimColor: C.cyanDim },
  { num: "2", label: "SCORING",    subs: ["Gemini Batch", "Relevance Score"], color: C.orange,     dimColor: C.orangeDim },
  { num: "3", label: "CURATION",   subs: ["Notion Pipeline", "Human Gate ◈"], color: C.mutedLight, dimColor: "rgba(148,163,184,0.1)" },
  { num: "4", label: "GENERATION", subs: ["Script Writer", "Egyptian Arabic"], color: C.orange,    dimColor: C.orangeDim },
  { num: "5", label: "DELIVERY",   subs: ["Google Docs", "Slack Notify"],      color: C.green,     dimColor: C.greenDim },
];

// Fixed: evenly spaced so no stage overlaps its neighbour
// Total: 5×120 + 4×36 + 2×20 = 784 → fits in 800
const stageW = 120;
const stageH = 130;
const stageY = 120;
const stageXs = [20, 176, 332, 488, 644];
const arrowMids = [140, 296, 452, 608]; // right edge of each stage except last

// Stage 3 center x for Notion hub connector
const stage3CX = stageXs[2] + stageW / 2; // 392
// Stage 2 center x for Recommended badge
const stage2CX = stageXs[1] + stageW / 2; // 236
// Stage 5 center x for output callout
const stage5CX = stageXs[4] + stageW / 2; // 704

export function ArabicPipelineDiagram() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      <defs>
        <marker id="arr-p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={C.orange} />
        </marker>
        <style>{`
          @keyframes marchRight {
            from { stroke-dashoffset: 16; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes notionPulse {
            0%, 100% { opacity: 0.5; }
            50%       { opacity: 1; }
          }
          .pipeline-arrow { stroke-dasharray: 6 4; animation: marchRight 1s linear infinite; }
          .notion-ring    { animation: notionPulse 2.5s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={C.bg} rx="10" />

      {/* ── Stage boxes ── */}
      {stages.map((stage, i) => (
        <motion.g key={stage.num} {...fadeUp(0.1 + i * 0.12)}>
          <rect
            x={stageXs[i]} y={stageY}
            width={stageW} height={stageH}
            rx="8"
            fill={stage.dimColor}
            stroke={stage.color}
            strokeWidth="1.5"
          />
          {/* Number badge */}
          <circle cx={stageXs[i] + stageW / 2} cy={stageY - 14} r="12" fill={C.surface} stroke={stage.color} strokeWidth="1.5" />
          <text
            x={stageXs[i] + stageW / 2} y={stageY - 10}
            textAnchor="middle" fill={stage.color}
            fontSize="11" fontFamily="system-ui" fontWeight="700"
          >{stage.num}</text>

          {/* Stage label */}
          <text
            x={stageXs[i] + stageW / 2} y={stageY + 26}
            textAnchor="middle" fill={stage.color}
            fontSize="9" fontFamily="system-ui" fontWeight="700" letterSpacing="1.5"
          >{stage.label}</text>

          <line x1={stageXs[i] + 12} y1={stageY + 36} x2={stageXs[i] + stageW - 12} y2={stageY + 36} stroke={stage.color} strokeWidth="0.5" opacity="0.4" />

          <text x={stageXs[i] + stageW / 2} y={stageY + 56} textAnchor="middle" fill={C.text} fontSize="10" fontFamily="system-ui">{stage.subs[0]}</text>
          <text x={stageXs[i] + stageW / 2} y={stageY + 74} textAnchor="middle" fill={C.mutedLight} fontSize="9" fontFamily="system-ui">{stage.subs[1]}</text>
        </motion.g>
      ))}

      {/* ── Connecting arrows ── */}
      <motion.g {...fadeIn(0.72)}>
        {arrowMids.map((x) => (
          <g key={x}>
            <line x1={x} y1={stageY + stageH / 2} x2={x + 36} y2={stageY + stageH / 2} stroke={C.border} strokeWidth="1.5" />
            <line
              x1={x} y1={stageY + stageH / 2}
              x2={x + 36} y2={stageY + stageH / 2}
              stroke={C.orange} strokeWidth="1.5"
              markerEnd="url(#arr-p)"
              className="pipeline-arrow"
            />
          </g>
        ))}
      </motion.g>

      {/* ── Notion hub (below stage 3) ── */}
      <motion.g {...fadeUp(0.6)}>
        {/* Wide enough to hold all the text */}
        <rect x={stage3CX - 145} y="310" width="290" height="44" rx="6" fill={C.surface} stroke={C.borderBright} strokeWidth="1" className="notion-ring" />
        <text x={stage3CX} y="328" textAnchor="middle" fill={C.mutedLight} fontSize="9" fontFamily="system-ui" letterSpacing="1">NOTION HUB</text>
        <text x={stage3CX} y="344" textAnchor="middle" fill={C.text} fontSize="10" fontFamily="system-ui">Trend Log · Content Pipeline · Creators</text>
        <line x1={stage3CX} y1="310" x2={stage3CX} y2={stageY + stageH} stroke={C.borderBright} strokeWidth="1" strokeDasharray="3 2" />
      </motion.g>

      {/* ── Arabic output callout (below stage 5) ── */}
      <motion.g {...fadeIn(1.1)}>
        <rect x={stage5CX - 80} y="310" width="160" height="54" rx="6" fill={C.greenDim} stroke={C.green} strokeWidth="1" />
        <text x={stage5CX} y="330" textAnchor="middle" fill={C.green} fontSize="9" fontFamily="system-ui" letterSpacing="1">OUTPUT</text>
        <text x={stage5CX} y="346" textAnchor="middle" fill={C.text} fontSize="11" fontFamily="system-ui">Google Docs</text>
        <text x={stage5CX} y="358" textAnchor="middle" fill={C.mutedLight} fontSize="9" fontFamily="system-ui">العامية المصرية</text>
        <line x1={stage5CX} y1="310" x2={stage5CX} y2={stageY + stageH} stroke={C.green} strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      </motion.g>

      {/* ── Bottom footnote ── */}
      <motion.g {...fadeIn(1.3)}>
        <text x="400" y="422" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui" letterSpacing="0.5">
          Daily 8AM Cairo · Creator checks every 6h · Weekly discovery · Slack notifications at delivery
        </text>
      </motion.g>
    </svg>
  );
}
