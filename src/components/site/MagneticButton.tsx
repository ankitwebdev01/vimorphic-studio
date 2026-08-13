import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  strength?: number;
  className?: string;
};

/** Button that leans toward the cursor while it is anywhere nearby. */
export function MagneticButton({ children, href, strength = 0.45, className = "" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setT({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  return (
    <div
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={() => setT({ x: 0, y: 0 })}
      className="-m-10 inline-flex p-10"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        data-cursor-grow
        style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
        className={`group relative inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground red-glow transition-transform duration-300 ease-out hover:bg-primary-glow ${className}`}
      >
        {children}
      </a>
    </div>
  );
}