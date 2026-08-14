import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import face from "@/assets/face.png.asset.json";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";
import { clients, INSTAGRAM } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const faceY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <ParticleField density={70} />
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[46rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative flex min-h-screen flex-col justify-between pt-28">
        <div className="relative flex flex-1 flex-col items-center justify-center px-5">
          {/* Background wordmark */}
          <motion.h1
            style={{ y: titleY }}
            className="pointer-events-none select-none text-center font-display text-[15vw] uppercase leading-[0.82] tracking-tight text-foreground/95 sm:text-[13vw]"
          >
            Think
            <br />
            <span className="text-primary">Vimorphic</span>
          </motion.h1>

          {/* 3D anime face rising from below, breathing forever */}
          <motion.div
            initial={{ y: "60%", opacity: 0, scale: 0.94 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: faceY }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
          >
            <img
              src={face.url}
              alt="3D anime face sculpture representing the Vimorphic identity"
              width={1024}
              height={1280}
              className="h-[58vh] w-auto max-w-none object-contain drop-shadow-[0_0_80px_oklch(0.58_0.23_26/0.45)] sm:h-[66vh]"
              style={{ animation: "breathe 4.6s ease-in-out infinite" }}
            />
          </motion.div>

          <div className="relative z-20 mt-6 flex flex-col items-center gap-8 text-center">
            <p className="font-display text-2xl uppercase tracking-[0.28em] text-foreground/80 sm:text-3xl">
              Ideas Into Experiences
            </p>
            <MagneticButton href={INSTAGRAM}>Book A Call</MagneticButton>
          </div>
        </div>

        {/* Happy clients slit */}
        <div className="relative z-20 border-y border-border/70 bg-background/70 backdrop-blur-md">
          <Marquee
            className="py-4"
            items={clients.map((c) => (
              <span
                key={c}
                className="mx-8 font-display text-lg uppercase tracking-[0.28em] text-muted-foreground sm:text-2xl"
              >
                {c} <span className="text-primary">·</span>
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}