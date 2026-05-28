import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Radio, Map, TrendingUp, Cpu, ShieldCheck } from "lucide-react";

export function Bento() {
  return (
    <section id="network" className="relative py-32 bg-urban">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-neon-teal mb-4">04 — Dashboard</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            One console.<br />
            <span className="text-gradient">The entire city.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
          <Tile className="col-span-12 md:col-span-7 row-span-2">
            <div className="flex items-start justify-between">
              <div>
                <Label icon={Radio}>Live Network Feed</Label>
                <div className="mt-4 text-5xl font-semibold tracking-tight text-gradient">2.4M</div>
                <div className="text-sm text-muted-foreground mt-1">events streamed in the last hour</div>
              </div>
              <span className="glass rounded-full px-2.5 py-1 text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-teal animate-pulse-glow" /> STREAMING
              </span>
            </div>
            {/* animated bars */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end gap-1.5 h-24">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div key={i}
                  initial={{ height: 4 }}
                  animate={{ height: [10 + (i * 7) % 60, 30 + (i * 13) % 70, 10 + (i * 11) % 50] }}
                  transition={{ duration: 2 + (i % 5) * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ background: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--secondary)" : "var(--primary)" }}
                  className="flex-1 rounded-sm opacity-80"
                />
              ))}
            </div>
          </Tile>

          <Tile className="col-span-12 md:col-span-5">
            <Label icon={TrendingUp}>On-Time Performance</Label>
            <div className="mt-3 text-4xl font-semibold tracking-tight">99.2<span className="text-2xl text-muted-foreground">%</span></div>
            <div className="text-xs text-neon-teal mt-1">▲ 1.4% vs last week</div>
            <div className="mt-4 h-2 rounded-full bg-primary/10 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "99%" }} viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-neon-teal" />
            </div>
          </Tile>

          <Tile className="col-span-6 md:col-span-3">
            <Label icon={Cpu}>AI Cores</Label>
            <div className="mt-2 text-3xl font-semibold">128</div>
            <div className="text-xs text-muted-foreground">inference units</div>
          </Tile>

          <Tile className="col-span-6 md:col-span-2">
            <Label icon={ShieldCheck}>Uptime</Label>
            <div className="mt-2 text-3xl font-semibold text-gradient-neon">5.9s</div>
            <div className="text-xs text-muted-foreground">total YTD</div>
          </Tile>

          <Tile className="col-span-12 md:col-span-7">
            <div className="flex items-center justify-between">
              <Label icon={Map}>Top Stations · Last 60m</Label>
              <span className="text-[10px] text-muted-foreground tracking-wider">PASSENGER FLOW</span>
            </div>
            <div className="mt-4 space-y-2.5">
              {[
                { s: "Central Interchange", v: 92, t: "12,402" },
                { s: "Harbor Quay", v: 78, t: "9,118" },
                { s: "Skyline Tower", v: 64, t: "7,604" },
                { s: "Nova District", v: 48, t: "5,221" },
              ].map((row, i) => (
                <div key={row.s} className="flex items-center gap-3 text-sm">
                  <span className="w-44 text-muted-foreground truncate">{row.s}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-primary/10 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${row.v}%` }} viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent" />
                  </div>
                  <span className="w-16 text-right tabular-nums text-xs text-foreground">{row.t}</span>
                </div>
              ))}
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}

function Tile({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative glass rounded-2xl p-6 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
function Label({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
      <Icon className="w-3.5 h-3.5" /> {children}
    </div>
  );
}