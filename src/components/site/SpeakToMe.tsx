import { useEffect, useState } from "react";
import { Mail, Instagram, MessagesSquare, X } from "lucide-react";
import { EMAIL, INSTAGRAM } from "@/data/site";

/** Floating contact launcher that appears once the hero is scrolled past. */
export function SpeakToMe() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {open && (
        <div className="glass-panel w-64 rounded-2xl p-3 text-sm">
          <a
            href={`mailto:${EMAIL}?subject=Project%20enquiry%20for%20Vimorphic`}
            className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-primary/15"
          >
            <Mail className="size-4 text-primary" /> Send me an email
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-primary/15"
          >
            <Instagram className="size-4 text-primary" /> Book a call on Instagram
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Speak to me"
        className="flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground red-glow"
      >
        {open ? <X className="size-4" /> : <MessagesSquare className="size-4" />}
        Speak To Me
      </button>
    </div>
  );
}