import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { services } from "@/data/site";

function Note({ i, total, progress }: { i: number; total: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const slot = 1 / (total + 1);
  const start = slot * (i + 0.35);
  const end = slot * (i + 1.1);
  const y = useTransform(progress, [start, end], ["120%", "0%"]);
  const opacity = useTransform(progress, [start, start + slot * 0.35], [0, 1]);
  const rotate = [-4, 2.5, -2, 3.5][i % 4] ?? 0;
  const s = services[i]!;

  return (
    <motion.article
      style={{ y, opacity, rotate }}
      className="w-[15rem] shrink-0 rounded-sm bg-primary p-5 text-primary-foreground red-glow sm:w-[17rem] md:w-[19rem]"
    >
      <span className="font-display text-xs tracking-[0.3em] opacity-70">{s.n}</span>
      <h3 className="mt-3 font-display text-2xl uppercase leading-none md:text-3xl">{s.title}</h3>
      <p className="mt-4 text-sm leading-relaxed opacity-90">{s.body}</p>
    </motion.article>
  );
}

/** Scroll-driven sticky-note stack: each note rises from below and holds while you scroll. */
export function ServicesSticky() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const headY = useTransform(scrollYProgress, [0, 0.14], ["45%", "0%"]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section ref={ref} id="services" className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
        <motion.h2
          style={{ y: headY, opacity: headOpacity }}
          className="max-w-4xl text-center font-display text-4xl uppercase leading-[0.95] sm:text-6xl md:text-7xl"
        >
          What Services <span className="text-primary">Do I Provide</span>
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-5">
          {services.map((s, i) => (
            <Note key={s.title} i={i} total={services.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}