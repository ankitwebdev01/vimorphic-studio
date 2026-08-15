import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ServicesSticky } from "@/components/site/ServicesSticky";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { IdCard } from "@/components/site/IdCard";
import { ParticleField } from "@/components/site/ParticleField";
import { track } from "@/lib/analytics";
import { INSTAGRAM, projects } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vimorphic — Think Vimorphic | Mr. Ankit Anand Design Studio" },
      {
        name: "description",
        content:
          "Vimorphic is the design studio of Mr. Ankit Anand — thumbnails, posters, AI videos, AI UGC ads, logos, packaging and web development that turn ideas into experiences.",
      },
      {
        name: "keywords",
        content:
          "Vimorphic, Think Vimorphic, vimorphic.designs, Ankit Anand, thumbnail design, poster design, AI videos, AI UGC ads, logo design, web development India",
      },
      { property: "og:title", content: "Vimorphic — Think Vimorphic | Ideas Into Experiences" },
      {
        property: "og:description",
        content:
          "Design strategy, brand identity, web dev solutions and packaging design by Mr. Ankit Anand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vimorphic",
          alternateName: "Think Vimorphic",
          founder: { "@type": "Person", name: "Mr. Ankit Anand" },
          description:
            "Vimorphic is the design studio of Mr. Ankit Anand offering thumbnails, posters, AI videos, AI UGC ads, logos, packaging design and web development.",
          areaServed: "Worldwide",
          email: "ankibhai698@gmail.com",
          sameAs: ["https://instagram.com/vimorphic.designs", "https://ankitvisuals.netlify.app"],
          knowsAbout: [
            "Thumbnail design",
            "Poster design",
            "AI video production",
            "AI UGC ads",
            "Logo design",
            "Web development",
            "SEO",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    track("visits");
  }, []);

  const featured = projects.filter((p) =>
    ["Volta Drink", "Scroll Story Arc", "Estate 01"].includes(p.title),
  );

  return (
    <main>
      <Hero />
      <IdCard />

      {/* Latest projects */}
      <section id="work" className="relative overflow-hidden px-5 py-28">
        <ParticleField density={40} />
        <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">— Selected Builds</p>
          <h2 className="mt-4 font-display text-4xl uppercase sm:text-6xl md:text-7xl">
            Latest <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <ScrollReveal key={p.url} distance={110}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("interested")}
                className="group block overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} website hero section designed and developed by Vimorphic`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-6 py-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-primary">{p.tag}</span>
                    <h3 className="mt-2 font-display text-2xl uppercase sm:text-3xl">{p.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.blurb}</p>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10">
          <MagneticButton href="/works" variant="outline">
            View All Works <ArrowUpRight className="size-4" />
          </MagneticButton>
        </div>
        </div>
      </section>

      <ServicesSticky />

      <Reviews />

      <Faq />

      {/* Closing CTA */}
      <section className="relative overflow-hidden px-5 py-32 text-center">
        <ParticleField density={40} />
        <ScrollReveal distance={180}>
          <div className="relative mx-auto max-w-5xl">
          <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Let's Build Something <span className="text-primary">Vimorphic</span> Together
          </h2>
          <div className="mt-12 flex justify-center">
            <MagneticButton href={INSTAGRAM}>Book A Call</MagneticButton>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Static giant name */}
      <section className="overflow-hidden border-t border-border/60 py-16">
        <p className="whitespace-nowrap text-center font-display text-[13vw] uppercase leading-none tracking-tight text-foreground">
          Mr. Ankit <span className="text-outline">Anand</span>
        </p>
      </section>

      {/* Never-ending loop: the hero re-assembles so the journey can start again */}
      <Hero loop />
    </main>
  );
}
