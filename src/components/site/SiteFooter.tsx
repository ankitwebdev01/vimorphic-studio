import { Link } from "@tanstack/react-router";
import { EMAIL, INSTAGRAM } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.2em]">
            VI<span className="text-primary">MORPHIC</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Vimorphic is the design studio of Mr. Ankit Anand — thumbnails, posters, AI videos, AI UGC
            ads, logos and web development.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <Link to="/works" className="hover:text-primary">
            Works
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-primary">
            @vimorphic.designs
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-primary">
            {EMAIL}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} Vimorphic · India
      </p>
    </footer>
  );
}