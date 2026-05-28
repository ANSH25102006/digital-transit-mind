import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Brain, Route, Zap, LineChart } from "lucide-react";

export function Intelligence() {
  return (
    <section id="intelligence" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-accent mb-4">03 — Intelligence</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="text-gradient-neon">AI</span> that thinks like<br />a transit operator.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Predictive models trained on billions of ride-events forecast congestion 12 minutes in advance — and reroute the network before commuters feel it.
          </p>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-2 gap-5">
          <Reveal>
            <PredictionPanel />
          </Reveal>
          <div className="grid gap-5">
            {[
              { icon: Brain, title: "Demand Forecasting", desc: "Neural models predict station-level demand 30 minutes ahead with 94% accuracy." },
              { icon: Route, title: "Smart Routing", desc: "Dynamic train scheduling adapts to live conditions, reducing dwell time by 23%." },
              { icon: Zap, title: "Delay Propagation", desc: "Cascading delay analysis isolates incidents before they ripple through the network." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 flex gap-5 group hover:border-white/20 transition-all">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 grid place-items-center group-hover:glow-primary transition-shadow">
                    <f.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PredictionPanel() {
  const points = Array.from({ length: 32 }, (_, i) => {
    const x = (i / 31) * 100;
    const y = 50 - Math.sin(i * 0.4) * 18 - Math.cos(i * 0.2) * 8;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="glass-strong rounded-2xl p-6 h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Forecast Engine</div>
          <div className="text-xl font-semibold mt-1">Next 60 minutes</div>
        </div>
        <div className="glass rounded-full px-3 py-1 flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-teal animate-pulse-glow" />
          <span className="text-muted-foreground">model · gpt-transit-4</span>
        </div>
      </div>

      <div className="mt-8 relative h-48">
        <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
            <linearGradient id="area-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polyline
            points={points} fill="none" stroke="url(#line-grad)" strokeWidth={0.6}
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <polygon points={`0,60 ${points} 100,60`} fill="url(#area-grad)" />
          {/* gridlines */}
          {[15, 30, 45].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="white" strokeOpacity="0.06" strokeWidth="0.2" />
          ))}
        </svg>
        {/* Pulse marker */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent glow-accent animate-pulse-glow" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { l: "Confidence", v: "94.2%" },
          { l: "Predicted Peak", v: "18:42" },
          { l: "Action Items", v: "7" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className="text-sm font-semibold mt-1 text-foreground">{s.v}</div>
          </div>
        ))}
      </div>

      <LineChart className="absolute bottom-4 right-4 w-4 h-4 text-muted-foreground/40" />
    </div>
  );
}