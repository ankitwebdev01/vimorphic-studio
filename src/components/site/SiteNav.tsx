import { Link } from "@tanstack/react-router";
import { INSTAGRAM } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-lg tracking-[0.3em] text-foreground">
          VI<span className="text-primary">MORPHIC</span>
        </Link>
        <nav className="glass-panel hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "bg-primary text-primary-foreground" }}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
        >
          Book A Call
        </a>
      </div>
      <nav className="flex justify-center gap-1 px-3 pb-2 md:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeProps={{ className: "text-primary" }}
            className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}