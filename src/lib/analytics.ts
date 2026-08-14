/** Local-first analytics + pricing store (no backend required). */
export type Metrics = {
  visits: number;
  worksViews: number;
  interested: number;
  callAttempts: number;
  emailAttempts: number;
  lastVisit: string | null;
};

export type PriceItem = { id: string; name: string; price: string; note: string };

const MKEY = "vim_metrics_v1";
const PKEY = "vim_prices_v1";

export const defaultPrices: PriceItem[] = [
  { id: "thumb", name: "Thumbnails", price: "₹999", note: "24–48h delivery" },
  { id: "poster", name: "Posters", price: "₹1499", note: "Print + social ready" },
  { id: "aivideo", name: "AI Videos", price: "₹2499", note: "2–4 days" },
  { id: "ugc", name: "AI UGC Ads", price: "₹2999", note: "Creator-style ads" },
  { id: "logo", name: "Logos & Identity", price: "₹4999", note: "Full type + colour system" },
  { id: "web", name: "Web Development", price: "₹14999+", note: "Quoted per scope" },
];

const emptyMetrics: Metrics = {
  visits: 0,
  worksViews: 0,
  interested: 0,
  callAttempts: 0,
  emailAttempts: 0,
  lastVisit: null,
};

export function readMetrics(): Metrics {
  if (typeof window === "undefined") return emptyMetrics;
  try {
    return { ...emptyMetrics, ...JSON.parse(localStorage.getItem(MKEY) ?? "{}") };
  } catch {
    return emptyMetrics;
  }
}

export function track(key: keyof Omit<Metrics, "lastVisit">, by = 1) {
  if (typeof window === "undefined") return;
  const m = readMetrics();
  m[key] = (m[key] ?? 0) + by;
  m.lastVisit = new Date().toISOString();
  localStorage.setItem(MKEY, JSON.stringify(m));
}

export function resetMetrics() {
  if (typeof window !== "undefined") localStorage.removeItem(MKEY);
}

export function readPrices(): PriceItem[] {
  if (typeof window === "undefined") return defaultPrices;
  try {
    const raw = localStorage.getItem(PKEY);
    return raw ? (JSON.parse(raw) as PriceItem[]) : defaultPrices;
  } catch {
    return defaultPrices;
  }
}

export function writePrices(items: PriceItem[]) {
  if (typeof window !== "undefined") localStorage.setItem(PKEY, JSON.stringify(items));
}