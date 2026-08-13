import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { EMAIL, INSTAGRAM } from "@/data/site";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vimorphic — Book A Call With Ankit Anand" },
      {
        name: "description",
        content:
          "Book a call with Vimorphic. Email Mr. Ankit Anand or DM @vimorphic.designs on Instagram for thumbnails, posters, AI videos and websites.",
      },
      { property: "og:title", content: "Contact Vimorphic" },
      { property: "og:description", content: "Email or DM @vimorphic.designs to book a call." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-32">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">— Contact</p>
      <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
        Let's Talk <span className="text-primary">Vimorphic</span>
      </h1>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Tell me what you're building. You'll get a plan and a price before you pay anything.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <a
          href={`mailto:${EMAIL}?subject=Project%20enquiry%20for%20Vimorphic`}
          className="glass-panel rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
        >
          <Mail className="size-6 text-primary" />
          <h2 className="mt-4 font-display text-2xl uppercase">Email Me</h2>
          <p className="mt-2 text-sm text-muted-foreground">{EMAIL}</p>
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="glass-panel rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
        >
          <Instagram className="size-6 text-primary" />
          <h2 className="mt-4 font-display text-2xl uppercase">Book A Call</h2>
          <p className="mt-2 text-sm text-muted-foreground">@vimorphic.designs on Instagram</p>
        </a>
      </div>

      <div className="mt-16">
        <MagneticButton href={INSTAGRAM}>Book A Call</MagneticButton>
      </div>
    </main>
  );
}