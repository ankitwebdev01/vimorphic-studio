import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import face3d from "@/assets/face3d.png";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";
import { clients, INSTAGRAM } from "@/data/site";

export function Hero({ loop = false }: { loop?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const faceY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTilt({ x: ((e.clientY - cy) / cy) * -8, y: ((e.clientX - cx) / cx) * 12 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <ParticleField density={70} />
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[46rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative flex min-h-screen flex-col justify-between pt-24 md:pt-28">
        <div className="relative flex flex-1 flex-col items-center justify-start px-5">
          {/* Wordmark drops in from above, after the face */}
          <motion.h1
            initial={{ y: "-120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, delay: loop ? 0.2 : 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: titleY }}
            className="pointer-events-none z-0 select-none text-center font-display text-[12vw] uppercase leading-[0.82] tracking-tight text-foreground/95 sm:text-[9vw]"
          >
            Welcome To
            <br />
            <span className="text-primary">Vimorphic World</span>
          </motion.h1>

          {/* 3D model head: rises first, breathes, tilts toward the cursor */}
          <motion.div
            initial={{ y: "60%", opacity: 0, scale: 0.94 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: faceY, perspective: 1200 }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
          >
            <div style={{ animation: "breathe 4.6s ease-in-out infinite" }}>
              <img
                src={face3d}
                alt="3D model head of Mr. Ankit Anand, founder of Vimorphic Designs"
                width={1024}
                height={1280}
                className="h-[46vh] w-auto max-w-none object-contain drop-shadow-[0_0_90px_oklch(0.58_0.23_26/0.5)] transition-transform duration-300 ease-out sm:h-[58vh]"
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              />
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 pb-10 text-center md:flex-row md:items-end md:justify-between md:pb-16 md:text-left">
          <p className="font-display text-xl uppercase leading-tight tracking-[0.2em] text-foreground/85 sm:text-2xl md:max-w-[20rem]">
            Ideas Into Experience
            <br className="hidden md:block" /> <span className="text-primary">With OG Ankit</span>
          </p>
          <MagneticButton href={INSTAGRAM}>Book A Call</MagneticButton>
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