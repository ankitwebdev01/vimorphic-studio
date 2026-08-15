import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { brandIdentityWorks, projects } from "@/data/site";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — Vimorphic | Thumbnails, Posters, AI Videos & Websites" },
      {
        name: "description",
        content:
          "Vimorphic works by Mr. Ankit Anand: brand identity (thumbnails, posters, AI videos, AI UGC ads) and web solutions (website development, AI receptionist, SEO).",
      },
      { property: "og:title", content: "Works — Vimorphic" },
      {
        property: "og:description",
        content: "Brand identity and web solutions portfolio by Vimorphic — Mr. Ankit Anand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksPage,
});

const webSolutions = [
  { title: "Website Development", body: "Custom, animation-driven websites and landing pages engineered to convert." },
  { title: "AI Receptionist", body: "An always-on AI that answers, qualifies and books your leads 24/7." },
  { title: "SEO", body: "Technical and on-page SEO so your brand is found, not scrolled past." },
];

function WorksPage() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">— Portfolio</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-[0.9] sm:text-8xl md:text-[7rem]">
          The <span className="text-primary">Work</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Two halves of one studio: Brand Identity for attention, Web Solutions for conversion.
        </p>
        <div className="mt-10 h-px w-full bg-border" />
      </section>

      <section id="brand-identity" className="mx-auto max-w-7xl px-5 pb-16">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Part 01</span>
          <h2 className="mt-2 font-display text-2xl uppercase sm:text-4xl">
            Brand <span className="text-primary">Identity</span>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Thumbnails · Posters · AI Videos · AI UGC Ads
          </p>
        </ScrollReveal>

        {Object.entries(brandIdentityWorks).map(([group, items]) => (
          <div key={group} className="mt-14">
            <h3 className="font-display text-xl uppercase tracking-[0.2em] text-foreground/80">{group}</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((w) => (
                <ScrollReveal key={w.title} distance={80}>
                  <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
                    <img
                      src={w.image}
                      alt={`${group} design — ${w.title} by Vimorphic`}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <figcaption className="px-5 py-4 text-sm text-muted-foreground">{w.title}</figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}

        <a
          href="https://ankitvisuals.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:underline"
        >
          See the full visual archive <ArrowUpRight className="size-4" />
        </a>
      </section>

      <section id="web-solutions" className="mx-auto max-w-7xl px-5 py-24">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Part 02</span>
          <h2 className="mt-2 font-display text-2xl uppercase sm:text-4xl">
            Web <span className="text-primary">Solutions</span>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Website Development · AI Receptionist · SEO
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {webSolutions.map((s) => (
            <ScrollReveal key={s.title} distance={80}>
              <article className="glass-panel h-full rounded-2xl p-6">
                <h3 className="font-display text-xl uppercase">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ScrollReveal key={p.url} distance={90}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <img
                  src={p.image}
                  alt={`${p.title} website hero designed and built by Vimorphic`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div>
                    <h3 className="font-display text-2xl uppercase">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}