import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, TrendingUp, AlertCircle, Train, Users } from "lucide-react";

type FeedItem = {
  id: number;
  icon: React.ElementType;
  tone: "info" | "warn" | "ok";
  station: string;
  text: string;
  time: string;
};

const SEED: Omit<FeedItem, "id" | "time">[] = [
  { icon: Users, tone: "warn", station: "Central Interchange", text: "Platform density rising · 84%" },
  { icon: Train, tone: "info", station: "Line B · Northbound", text: "Train T-204 departing in 12s" },
  { icon: AlertCircle, tone: "warn", station: "Harbor Quay", text: "Delay propagation +2m 14s" },
  { icon: TrendingUp, tone: "ok", station: "Skyline Tower", text: "Passenger flow stabilizing" },
  { icon: Activity, tone: "info", station: "Nova District", text: "Smart-routing applied · −18% load" },
  { icon: Users, tone: "ok", station: "Riverside", text: "Crowd dispersed in 3m 02s" },
  { icon: Train, tone: "info", station: "Line C · Loop", text: "Headway optimized · 96s" },
  { icon: AlertCircle, tone: "warn", station: "Grand Central", text: "Predicted surge in 6 min" },
];

const toneClass: Record<FeedItem["tone"], string> = {
  info: "text-secondary",
  warn: "text-signal-amber",
  ok: "text-neon-teal",
};

function now() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

export function LiveFeed({ className = "" }: { className?: string }) {
  const [items, setItems] = useState<FeedItem[]>(() =>
    SEED.slice(0, 5).map((s, i) => ({ ...s, id: i, time: now() })),
  );

  useEffect(() => {
    let id = items.length;
    const t = setInterval(() => {
      const next = SEED[Math.floor(Math.random() * SEED.length)];
      setItems((prev) => [{ ...next, id: id++, time: now() }, ...prev].slice(0, 6));
    }, 2600);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`glass-strong rounded-2xl p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-teal opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-teal" />
          </span>
          <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">Live Infrastructure Feed</div>
        </div>
        <span className="text-[10px] text-muted-foreground tabular-nums">streaming · {items[0]?.time}</span>
      </div>
      <ul className="space-y-2">
        <AnimatePresence initial={false}>
          {items.map((it) => (
            <motion.li
              key={it.id}
              layout
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/[0.04] border border-primary/10"
            >
              <div className={`shrink-0 w-7 h-7 rounded-lg grid place-items-center bg-card border border-primary/10 ${toneClass[it.tone]}`}>
                <it.icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground truncate">{it.station}</div>
                <div className="text-sm font-medium truncate">{it.text}</div>
              </div>
              <div className="text-[10px] text-muted-foreground tabular-nums shrink-0">{it.time}</div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}