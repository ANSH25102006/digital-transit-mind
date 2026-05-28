import { motion } from "framer-motion";

/**
 * Animated futuristic metro network SVG.
 * Lines glow, dashes flow, stations pulse, trains move along the path.
 */
export function MetroMap({ className = "" }: { className?: string }) {
  // Three metro lines as SVG paths
  const lines = [
    { id: "blue", color: "var(--primary)", d: "M40,260 C160,260 200,120 360,120 C520,120 600,260 760,260" },
    { id: "cyan", color: "var(--secondary)", d: "M60,60 C200,60 240,200 400,200 C560,200 620,340 780,340" },
    { id: "purple", color: "var(--accent)", d: "M40,380 C180,380 240,300 380,300 C540,300 620,180 780,80" },
  ];

  const stations = [
    { cx: 40, cy: 260, r: 5, color: "var(--primary)" },
    { cx: 360, cy: 120, r: 6, color: "var(--primary)" },
    { cx: 760, cy: 260, r: 5, color: "var(--primary)" },
    { cx: 60, cy: 60, r: 5, color: "var(--secondary)" },
    { cx: 400, cy: 200, r: 7, color: "var(--neon-teal)" },
    { cx: 780, cy: 340, r: 5, color: "var(--secondary)" },
    { cx: 40, cy: 380, r: 5, color: "var(--accent)" },
    { cx: 380, cy: 300, r: 6, color: "var(--accent)" },
    { cx: 780, cy: 80, r: 5, color: "var(--accent)" },
  ];

  return (
    <svg viewBox="0 0 820 440" className={className} fill="none">
      <defs>
        {lines.map((l) => (
          <filter key={l.id} id={`glow-${l.id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
        <radialGradient id="station-glow">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Grid backdrop dots */}
      <g opacity="0.25">
        {Array.from({ length: 12 }).map((_, i) =>
          Array.from({ length: 22 }).map((_, j) => (
            <circle key={`${i}-${j}`} cx={20 + j * 36} cy={20 + i * 36} r={0.6} fill="white" />
          ))
        )}
      </g>

      {/* Base lines */}
      {lines.map((l, i) => (
        <g key={l.id} filter={`url(#glow-${l.id})`}>
          <motion.path
            d={l.d}
            stroke={l.color}
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 2.2, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
          />
          {/* Flowing dashes */}
          <path
            d={l.d}
            stroke={l.color}
            strokeWidth={1.5}
            strokeDasharray="3 14"
            className="animate-dash"
            opacity={0.9}
          />
        </g>
      ))}

      {/* Stations */}
      {stations.map((s, i) => (
        <g key={i}>
          <circle cx={s.cx} cy={s.cy} r={s.r * 3} fill="url(#station-glow)" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.2}s` }} />
          <circle cx={s.cx} cy={s.cy} r={s.r} fill={s.color} />
          <circle cx={s.cx} cy={s.cy} r={s.r - 1.5} fill="white" opacity={0.9} />
        </g>
      ))}

      {/* Moving trains (animated along path) */}
      {lines.map((l, i) => (
        <circle key={`train-${l.id}`} r={4} fill="white">
          <animateMotion dur={`${8 + i * 2}s`} repeatCount="indefinite" path={l.d} />
        </circle>
      ))}
      {lines.map((l, i) => (
        <circle key={`train2-${l.id}`} r={3} fill={l.color} opacity={0.9}>
          <animateMotion dur={`${8 + i * 2}s`} begin={`${-3 - i}s`} repeatCount="indefinite" path={l.d} />
        </circle>
      ))}
    </svg>
  );
}