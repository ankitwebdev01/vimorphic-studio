import { useEffect, useRef, useState } from "react";

/** Custom cursor: a small red dot with a lagging outlined ring that grows over links. */
export function CursorFX() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-all");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a, button, [data-cursor-grow]"));
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-all");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={dot} className="fixed left-0 top-0 size-2 rounded-full bg-primary" />
      <div
        ref={ring}
        className="fixed left-0 top-0 rounded-full border border-primary/70 transition-[width,height,opacity] duration-200"
        style={{
          width: active ? 68 : 34,
          height: active ? 68 : 34,
          opacity: active ? 1 : 0.55,
        }}
      />
    </div>
  );
}