import { createFileRoute } from "@tanstack/react-router";
import { ServicesSticky } from "@/components/site/ServicesSticky";
import { Faq } from "@/components/site/Faq";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vimorphic | Design Strategy, Branding & Web Dev" },
      {
        name: "description",
        content:
          "Vimorphic services: design strategy, brand identity, web development solutions and packaging design by Mr. Ankit Anand.",
      },
      { property: "og:title", content: "Services — Vimorphic" },
      {
        property: "og:description",
        content: "Design strategy, brand identity, web dev solutions and packaging design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">— Capabilities</p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
          Services That <span className="text-primary">Move Metrics</span>
        </h1>
      </section>

      <ServicesSticky />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <ScrollReveal key={s.title} distance={80}>
              <article className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="font-display text-sm tracking-[0.3em] text-primary">{s.n}</span>
                <h2 className="mt-3 font-display text-3xl uppercase">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Faq />
    </main>
  );
}