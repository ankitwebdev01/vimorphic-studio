import { useEffect, useRef, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import { EMAIL, INSTAGRAM } from "@/data/site";
import { track } from "@/lib/analytics";

/** Bottom-centre contact launcher: magnetic pill that expands into email + call actions. */
export function SpeakToMe() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-12, Math.min(12, v));
    setT({
      x: clamp((e.clientX - (r.left + r.width / 2)) * 0.16),
      y: clamp((e.clientY - (r.top + r.height / 2)) * 0.16),
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <div
        ref={wrap}
        onPointerMove={onMove}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => {
          setOpen(false);
          setT({ x: 0, y: 0 });
        }}
        className="-m-6 p-6"
      >
        <div
          style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground red-glow transition-transform duration-300 ease-out"
        >
          <button type="button" onClick={() => setOpen((v) => !v)} className="uppercase">
            Speak To Me
          </button>
          <div
            className="flex items-center overflow-hidden transition-all duration-500"
            style={{ width: open ? 96 : 0, opacity: open ? 1 : 0 }}
          >
            <a
              href={`mailto:${EMAIL}?subject=Project%20enquiry%20for%20Vimorphic`}
              onClick={() => {
                track("emailAttempts");
                track("interested");
              }}
              aria-label="Send a message via email"
              title="Send message via email"
              className="ml-3 grid size-9 place-items-center rounded-full bg-background/25"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                track("callAttempts");
                track("interested");
              }}
              aria-label="Book a call on Instagram"
              title="Book a call"
              className="ml-2 grid size-9 place-items-center rounded-full bg-background/25"
            >
              <PhoneCall className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}