import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MetroMap } from "./MetroMap";
import { LiveFeed } from "./LiveFeed";

export function Hero() {
  return (
    <section className="immersive relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      {/* Soft transit beams */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120%] h-72 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.19_255/0.35),transparent_60%)] blur-2xl" />

      {/* Floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-secondary/70"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass rounded-full px-4 py-1.5 flex items-center gap-2 text-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-on-dark/70">Urban Transit Intelligence</span>
            <span className="text-secondary">v3.2 · Live</span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-semibold tracking-tighter leading-[0.95] max-w-5xl">
            <span className="text-gradient">The Digital Twin</span>
            <br />
            <span className="text-on-dark/90">of Urban Transit.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base md:text-lg text-on-dark/65 leading-relaxed">
            Real-time simulation, AI prediction, and cinematic visualization for the world's
            most complex metro networks — rendered as a living, breathing twin.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium glow-primary overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Enter the Twin
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
            <button className="px-6 py-3 rounded-xl glass text-on-dark/90 font-medium hover:bg-white/10 transition-colors">
              Watch Simulation
            </button>
          </div>
        </motion.div>

        {/* Floating metro map + live feed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 grid lg:grid-cols-[1fr_320px] gap-5 items-stretch"
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/25 via-accent/20 to-secondary/25 blur-3xl opacity-60" />
          <div className="relative glass-strong rounded-3xl p-3 sm:p-5">
            <div className="relative rounded-2xl overflow-hidden bg-[oklch(0.13_0.03_260)] border border-white/5">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-teal animate-pulse-glow" />
                  <span className="text-xs text-on-dark/60 tracking-wide">LIVE · 14,827 active passengers</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-[11px] text-on-dark/60 tracking-wider uppercase">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-primary" />Line A</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-secondary" />Line B</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-neon-teal" />Line C</span>
                </div>
              </div>
              <MetroMap className="w-full h-[320px] sm:h-[460px]" />

              {/* Floating dashboard cards */}
              <FloatingCard className="absolute top-16 left-4 sm:left-8 animate-float" style={{ animationDelay: "0s" }}
                label="Throughput" value="98.4%" trend="+2.1%" tone="primary" />
              <FloatingCard className="absolute bottom-6 left-4 sm:left-10 animate-float" style={{ animationDelay: "2s" }}
                label="Avg Delay" value="0.42s" trend="-18%" tone="neon" />
              <FloatingCard className="absolute top-12 right-4 sm:right-8 animate-float" style={{ animationDelay: "1s" }}
                label="Predicted Surge" value="Stn 14" trend="in 6m" tone="accent" />
            </div>
          </div>
          <div className="relative">
            <LiveFeed className="h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  label, value, trend, tone, className = "", style,
}: {
  label: string; value: string; trend: string;
  tone: "primary" | "neon" | "accent";
  className?: string; style?: React.CSSProperties;
}) {
  const toneClass =
    tone === "primary" ? "text-primary" : tone === "neon" ? "text-neon-teal" : "text-accent";
  return (
    <div className={`glass-strong rounded-xl px-3.5 py-2.5 min-w-[140px] ${className}`} style={style}>
      <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
      <div className="flex items-baseline justify-between gap-3 mt-1">
        <div className="text-lg font-semibold text-foreground">{value}</div>
        <div className={`text-[11px] font-medium ${toneClass}`}>{trend}</div>
      </div>
    </div>
  );
}