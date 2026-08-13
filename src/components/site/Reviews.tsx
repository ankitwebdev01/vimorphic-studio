import { Marquee } from "./Marquee";
import { reviews } from "@/data/site";
import { Star } from "lucide-react";

export function Reviews() {
  const cards = reviews.map((r) => (
    <figure key={r.name} className="mx-3 w-[19rem] rounded-2xl border border-border bg-card p-6 sm:w-[23rem]">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">“{r.text}”</blockquote>
      <figcaption className="mt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <span className="text-foreground">{r.name}</span> · {r.role}
      </figcaption>
    </figure>
  ));

  return (
    <section className="py-24">
      <div className="mx-auto mb-12 max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">— Reviews</p>
        <h2 className="mt-4 font-display text-4xl uppercase sm:text-6xl">Words From Clients</h2>
      </div>
      <Marquee items={cards} slow />
    </section>
  );
}