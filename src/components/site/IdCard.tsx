import { useEffect, useState } from "react";
import { services } from "@/data/site";

/**
 * Floating ID badge: front face during Latest Projects, then it spins out
 * (multiple rotations) into the Services section to reveal its back face,
 * where each expertise line appears in step with the sticky notes.
 */
export function IdCard() {
  const [state, setState] = useState({ show: false, flip: 0, svc: 0 });

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const work = document.getElementById("work");
      const svc = document.getElementById("services");
      if (work && svc) {
        const vh = window.innerHeight;
        const wr = work.getBoundingClientRect();
        const sr = svc.getBoundingClientRect();
        const show = wr.top < vh * 0.6 && sr.bottom > vh * 0.6;
        // flip progress: 0 while in works, 1 once services is locked in
        const flip = Math.max(0, Math.min(1, (vh * 0.8 - sr.top) / (vh * 0.8)));
        const sp = Math.max(0, Math.min(1, -sr.top / Math.max(1, sr.height - vh)));
        setState({ show, flip, svc: sp });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const { show, flip, svc } = state;
  const rotateY = flip * 900;
  const rotateX = Math.sin(flip * Math.PI) * 25;
  const back = flip > 0.55;
  const total = services.length;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-500 lg:block ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ perspective: 1400 }}
    >
      <div
        className="relative h-[19rem] w-[13rem]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transition: "transform 120ms linear",
          animation: "floaty 5s ease-in-out infinite",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-primary/40 bg-card p-5 red-glow"
          style={{ backfaceVisibility: "hidden", opacity: back ? 0 : 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Vimorphic ID</span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Name</p>
            <p className="font-display text-3xl uppercase leading-none">Ankit Anand</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Founder</p>
            <p className="font-display text-2xl uppercase leading-none text-primary">Vimorphic Designs</p>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">OG Ankit</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col gap-3 rounded-2xl border border-primary/40 bg-card p-5 red-glow"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", opacity: back ? 1 : 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Expertise</span>
          {services.map((s, i) => {
            const on = svc >= (i + 0.35) / (total + 1);
            return (
              <p
                key={s.title}
                className="font-display text-lg uppercase leading-tight transition-all duration-500"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateY(0)" : "translateY(18px)",
                }}
              >
                <span className="text-primary">{s.n} </span>
                {s.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}