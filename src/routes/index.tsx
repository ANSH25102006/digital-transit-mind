import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Simulation } from "@/components/site/Simulation";
import { Intelligence } from "@/components/site/Intelligence";
import { Bento } from "@/components/site/Bento";
import { Vision } from "@/components/site/Vision";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metro Digital Twin — Smart City Transit Intelligence" },
      { name: "description", content: "A cinematic real-time digital twin of urban metro networks. Simulation, AI prediction and intelligence for the autonomous city." },
      { property: "og:title", content: "Metro Digital Twin" },
      { property: "og:description", content: "Cinematic real-time digital twin of urban metro networks." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Simulation />
      <Intelligence />
      <Bento />
      <Vision />
      <Footer />
    </main>
  );
}
