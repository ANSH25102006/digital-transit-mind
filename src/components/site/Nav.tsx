import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function Nav() {
  const links = ["Network", "Simulation", "Intelligence", "Vision"];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))]"
    >
      <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center shadow-[0_8px_24px_-8px_oklch(0.65_0.19_255/0.6)]">
            <Activity className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-foreground">Metro<span className="text-gradient">DT</span></span>
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Digital Twin</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors hover:bg-primary/5">
              {l}
            </a>
          ))}
        </nav>
        <button className="relative group px-4 py-1.5 rounded-lg text-sm font-medium overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.65_0.19_255/0.7)]">
          <span className="relative z-10">Launch Console</span>
        </button>
      </div>
    </motion.header>
  );
}