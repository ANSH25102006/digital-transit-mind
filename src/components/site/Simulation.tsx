import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Users, Gauge, AlertTriangle } from "lucide-react";

export function Simulation() {
  return (
    <section id="simulation" className="relative py-32 overflow-hidden bg-urban">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">02 — Simulation</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Every train. Every passenger.<br />
            <span className="text-gradient">Simulated in real time.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            A high-fidelity twin of the entire network — running thousands of agents per second to model congestion, delay propagation, and rush-hour dynamics.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {[
            { icon: Users, title: "Crowd Flow", value: "14,827", sub: "active passengers", tone: "primary" },
            { icon: Gauge, title: "Network Load", value: "72%", sub: "real-time capacity", tone: "neon" },
            { icon: AlertTriangle, title: "Congestion Zones", value: "3", sub: "predictive alerts", tone: "accent" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <SimCard {...c} />
            </Reveal>
          ))}
        </div>

        {/* Heatmap strip */}
        <Reveal delay={0.2} className="mt-16">
          <div className="glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Congestion Heatmap</div>
                <div className="text-lg font-semibold mt-1">Line A — 24h Density</div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[11px] text-muted-foreground">
                <span>00:00</span>
                <span className="h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                <span>24:00</span>
              </div>
            </div>
            <div className="grid grid-cols-24 gap-1" style={{ gridTemplateColumns: "repeat(48, minmax(0,1fr))" }}>
              {Array.from({ length: 48 * 6 }).map((_, i) => {
                const intensity = Math.abs(Math.sin(i * 0.35) * Math.cos(i * 0.13));
                const hue = intensity > 0.7 ? "var(--accent)" : intensity > 0.4 ? "var(--secondary)" : "var(--primary)";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 0.2 + intensity * 0.8, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 48) * 0.01 + Math.floor(i / 48) * 0.05, duration: 0.4 }}
                    style={{ background: hue, height: 14 + intensity * 24 }}
                    className="rounded-sm origin-bottom"
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SimCard({ icon: Icon, title, value, sub, tone }: { icon: React.ElementType; title: string; value: string; sub: string; tone: string }) {
  const glow = tone === "primary" ? "from-primary/30" : tone === "neon" ? "from-neon-teal/30" : "from-accent/30";
  return (
    <div className={`group relative glass rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all`}>
      <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-radial ${glow} to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
      <Icon className="w-5 h-5 text-secondary mb-6" />
      <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{title}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-4xl font-semibold tracking-tight text-gradient">{value}</div>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{sub}</div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}