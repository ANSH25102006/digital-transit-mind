import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden bg-urban">
      <div className="absolute inset-0 bg-aurora opacity-70" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-6">05 — Smart City Vision</div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter max-w-5xl mx-auto leading-[1]">
            Infrastructure that <span className="text-gradient-neon">sees itself.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground text-lg">
            Metro Digital Twin is a foundation layer for the autonomous city — uniting transit, energy and mobility into a single living model.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-20">
          <div className="relative grid md:grid-cols-3 gap-5 text-left">
            {[
              { k: "01", t: "Sense", d: "Tens of thousands of sensors fuse into a unified spatial graph." },
              { k: "02", t: "Simulate", d: "Run alternate timelines of the network in milliseconds." },
              { k: "03", t: "Steer", d: "Closed-loop control nudges the city toward optimal flow." },
            ].map((c) => (
              <div key={c.k} className="glass-strong rounded-2xl p-7 relative group">
                <div className="text-xs tracking-[0.3em] text-secondary">{c.k}</div>
                <div className="text-2xl font-semibold mt-3">{c.t}</div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.d}</p>
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-24">
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-3xl opacity-40" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
                Bring your network into the twin.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Pilot deployments for transit authorities and smart-city programs are open.
              </p>
              <button className="mt-8 px-7 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium glow-primary">
                Request Access
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}