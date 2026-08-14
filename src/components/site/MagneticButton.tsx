import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  strength?: number;
  className?: string;
  variant?: "solid" | "outline";
};

/** Button that leans toward the cursor while it is anywhere nearby. */
export function MagneticButton({
  children,
  href,
  onClick,
  strength = 0.16,
  className = "",
  variant = "solid",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const clamp = (v: number) => Math.max(-14, Math.min(14, v));
    setT({ x: clamp((e.clientX - cx) * strength), y: clamp((e.clientY - cy) * strength) });
  };

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 ease-out";
  const look =
    variant === "solid"
      ? "bg-primary text-primary-foreground red-glow hover:bg-primary-glow"
      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";

  return (
    <div
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={() => setT({ x: 0, y: 0 })}
      className="-m-8 inline-flex p-8"
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          onClick={onClick}
          style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
          className={`${base} ${look} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
          className={`${base} ${look} ${className}`}
        >
          {children}
        </button>
      )}
    </div>
  );
}