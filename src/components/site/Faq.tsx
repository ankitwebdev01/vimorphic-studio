import { useState } from "react";
import { faqs } from "@/data/site";
import { Plus } from "lucide-react";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">— FAQ</p>
        <h2 className="mt-4 font-display text-4xl uppercase sm:text-6xl">Questions, Answered</h2>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="glass-panel rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium sm:text-lg">{f.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}