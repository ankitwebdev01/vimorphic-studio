import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, Users, Heart, PhoneCall, Search, Trash2, Plus } from "lucide-react";
import {
  readMetrics,
  readPrices,
  writePrices,
  resetMetrics,
  type Metrics,
  type PriceItem,
} from "@/lib/analytics";

const PASSCODE = "OGANKIT-2026";

export const Route = createFileRoute("/vm-console-9f3x")({
  head: () => ({
    meta: [
      { title: "Console" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "description", content: "Private console." },
      { property: "og:title", content: "Console" },
      { property: "og:description", content: "Private console." },
    ],
  }),
  component: Console,
});

function Console() {
  const [ok, setOk] = useState(false);
  const [code, setCode] = useState("");
  const [m, setM] = useState<Metrics | null>(null);
  const [prices, setPrices] = useState<PriceItem[]>([]);

  useEffect(() => {
    if (localStorage.getItem("vim_admin") === PASSCODE) setOk(true);
    setM(readMetrics());
    setPrices(readPrices());
  }, []);

  const save = (next: PriceItem[]) => {
    setPrices(next);
    writePrices(next);
  };

  if (!ok) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (code === PASSCODE) {
              localStorage.setItem("vim_admin", PASSCODE);
              setOk(true);
            } else {
              setCode("");
            }
          }}
          className="w-full max-w-sm"
        >
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="•••••••"
            aria-label="Access code"
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-center tracking-[0.4em] outline-none focus:border-primary"
          />
        </form>
      </main>
    );
  }

  const stats = [
    { label: "Visitors", value: m?.visits ?? 0, icon: Users },
    { label: "Saw My Works", value: m?.worksViews ?? 0, icon: Eye },
    { label: "Interested", value: m?.interested ?? 0, icon: Heart },
    { label: "Call Attempts", value: m?.callAttempts ?? 0, icon: PhoneCall },
    { label: "Email Attempts", value: m?.emailAttempts ?? 0, icon: Search },
  ];

  const seo = [
    { k: "Indexable", v: "Yes — robots.txt allows all" },
    { k: "Titles & meta", v: "Unique per page" },
    { k: "Structured data", v: "Organization + ProfessionalService JSON-LD" },
    { k: "Canonicals", v: "Set on / and /works" },
    { k: "Console page", v: "noindex, nofollow (hidden)" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-28">
      <h1 className="font-display text-4xl uppercase sm:text-6xl">
        Vimorphic <span className="text-primary">Console</span>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Private dashboard. Last activity: {m?.lastVisit ? new Date(m.lastVisit).toLocaleString() : "—"}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="glass-panel rounded-2xl p-5">
            <s.icon className="size-5 text-primary" />
            <p className="mt-4 font-display text-4xl">{s.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl uppercase">SEO Status</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {seo.map((s) => (
            <div key={s.k} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
              <span className="text-muted-foreground">{s.k}</span>
              <span>{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl uppercase">Pricing</h2>
          <button
            type="button"
            onClick={() =>
              save([...prices, { id: crypto.randomUUID(), name: "New Service", price: "₹0", note: "" }])
            }
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground"
          >
            <Plus className="size-4" /> Add
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {prices.map((p, i) => (
            <div key={p.id} className="grid gap-3 rounded-xl border border-border p-3 sm:grid-cols-[1.2fr_0.6fr_1.2fr_auto]">
              {(["name", "price", "note"] as const).map((f) => (
                <input
                  key={f}
                  value={p[f]}
                  aria-label={f}
                  onChange={(e) => {
                    const next = [...prices];
                    next[i] = { ...p, [f]: e.target.value };
                    save(next);
                  }}
                  className="rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              ))}
              <button
                type="button"
                aria-label={`Remove ${p.name}`}
                onClick={() => save(prices.filter((x) => x.id !== p.id))}
                className="grid size-9 place-items-center rounded-md border border-border text-primary"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 flex gap-3">
        <button
          type="button"
          onClick={() => {
            resetMetrics();
            setM(readMetrics());
          }}
          className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Reset metrics
        </button>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("vim_admin");
            setOk(false);
          }}
          className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Lock console
        </button>
      </div>
    </main>
  );
}