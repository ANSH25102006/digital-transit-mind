export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
        <div>© 2026 Metro Digital Twin · Smart City Systems</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-teal animate-pulse-glow" />
          All systems nominal · Latency 14ms
        </div>
      </div>
    </footer>
  );
}