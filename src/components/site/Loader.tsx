import { useEffect, useState } from "react";

/** 5 second intro loader with a live percentage. */
export function Loader() {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(100, Math.round(((Date.now() - start) / 5000) * 100));
      setPct(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setGone(true), 450);
      }
    }, 50);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        pct >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <h2 className="text-center font-display text-4xl uppercase leading-none sm:text-6xl md:text-7xl">
        Vimorphic Is <span className="text-primary">Coming</span>
      </h2>
      <p className="mt-8 font-display text-6xl text-primary sm:text-8xl">{pct}%</p>
      <div className="mt-6 h-[3px] w-64 overflow-hidden rounded-full bg-border sm:w-96">
        <div className="h-full bg-primary transition-[width] duration-100" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}