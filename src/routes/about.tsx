import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mr. Ankit Anand — Founder of Vimorphic" },
      {
        name: "description",
        content:
          "Mr. Ankit Anand is the designer behind Vimorphic — a studio practice blending design, attention psychology and AI production for creators and brands.",
      },
      { property: "og:title", content: "About Mr. Ankit Anand — Vimorphic" },
      {
        property: "og:description",
        content: "The designer behind Vimorphic: design, psychology and AI production.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { t: "Design", b: "Composition, colour and typography that carry a message before a word is read." },
  { t: "Psychology", b: "Curiosity gaps and attention loops — why people click, and how to earn it honestly." },
  { t: "AI Production", b: "Generative video and imagery pipelines that compress weeks of production into days." },
];

function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-32">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">— About</p>
      <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
        The Mind Behind <span className="text-primary">Vimorphic</span>
      </h1>
      <div className="mt-10 space-y-6 text-muted-foreground">
        <p>
          I'm Ankit Anand. Vimorphic is my studio practice — a made-up word for a very real idea:
          visuals that morph an idea into an experience. I started designing because I was obsessed with
          one question: why do we click?
        </p>
        <p>
          That obsession became a craft. Today I work across thumbnails, posters, AI video, AI UGC ads,
          logos, packaging and full web development for creators and emerging brands — 6+ clients and
          counting, all shipped solo with studio-level standards.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {pillars.map((p) => (
          <ScrollReveal key={p.t} distance={70}>
            <article className="glass-panel h-full rounded-2xl p-6">
              <h2 className="font-display text-xl uppercase">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}