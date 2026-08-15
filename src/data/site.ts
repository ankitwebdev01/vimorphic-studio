import volta from "@/assets/volta.jpg.asset.json";
import scrollstory from "@/assets/scrollstory.jpg.asset.json";
import ankitvisuals from "@/assets/ankitvisuals.jpg.asset.json";
import beastroot from "@/assets/beastroot.jpg.asset.json";
import realestate from "@/assets/realestate.jpg.asset.json";
import thumbDefiance from "@/assets/thumb-defiance.png.asset.json";
import thumbStrategy from "@/assets/thumb-strategy.jpg.asset.json";
import thumbCourse from "@/assets/thumb-course.jpg.asset.json";
import thumbMonetized from "@/assets/thumb-monetized.jpg.asset.json";
import poster1 from "@/assets/poster-1.jpg.asset.json";
import brand1 from "@/assets/brand-1.jpg.asset.json";
import video1 from "@/assets/video-1.jpg.asset.json";

export const INSTAGRAM = "https://instagram.com/vimorphic.designs";
export const EMAIL = "ankitanandx@gmail.com";

export type Project = {
  title: string;
  tag: string;
  blurb: string;
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Volta Drink",
    tag: "Product Landing",
    blurb: "High-voltage beverage launch page with kinetic typography and scroll-locked product reveal.",
    url: "https://voltadrink.ankxit-fx.workers.dev",
    image: volta.url,
  },
  {
    title: "Scroll Story Arc",
    tag: "Scroll Experience",
    blurb: "A narrative site where every scroll tick advances a cinematic story arc.",
    url: "https://scroll-story-arc.ankxit-fx.workers.dev",
    image: scrollstory.url,
  },
  {
    title: "Ankit Visuals",
    tag: "Portfolio System",
    blurb: "Full visual portfolio with folder-based work explorer and instant UPI checkout.",
    url: "https://ankitvisuals.netlify.app",
    image: ankitvisuals.url,
  },
  {
    title: "Beastroot Max",
    tag: "Supplement Brand",
    blurb: "Aggressive supplement brand site built for conversion and raw brand energy.",
    url: "https://beastrootmax01.ankxit-fx.workers.dev",
    image: beastroot.url,
  },
  {
    title: "Estate 01",
    tag: "Real Estate",
    blurb: "Premium real-estate showcase with property galleries and enquiry funnels.",
    url: "https://realestate01.ankxit-fx.workers.dev",
    image: realestate.url,
  },
];

export const brandIdentityWorks = {
  Thumbnails: [
    { title: "The Price of Defiance", image: thumbDefiance.url },
    { title: "Best Strategy — Market Analysis", image: thumbStrategy.url },
    { title: "Full Course Launch", image: thumbCourse.url },
    { title: "Monetized", image: thumbMonetized.url },
  ],
  Posters: [{ title: "Event Poster Series", image: poster1.url }],
  "AI Videos": [{ title: "Neon City — AI Spot", image: video1.url }],
  "AI UGC Ads": [{ title: "UGC Ad Frame — Brand Spot", image: brand1.url }],
};

export const clients = [
  "VOLTA",
  "BEASTROOT MAX",
  "ANKIT VISUALS",
  "ESTATE 01",
  "SCROLL STORY",
  "VIMORPHIC LABS",
  "CREATOR COLLECTIVE",
  "THE ATTENTION LAB",
];

export const services = [
  {
    n: "01",
    title: "Design Strategy",
    body: "I map attention before pixels — positioning, hierarchy and messaging engineered so your audience knows what to feel in the first 3 seconds.",
  },
  {
    n: "02",
    title: "Brand Identity",
    body: "Logos, type systems, colour and poster language that scale from a thumbnail to a billboard without losing their punch.",
  },
  {
    n: "03",
    title: "Web Dev Solutions",
    body: "Fast, scroll-driven websites and landing pages built to convert — animation with intent, never decoration.",
  },
  {
    n: "04",
    title: "Packaging Designs",
    body: "Shelf-ready packaging and product visuals that make a bottle, box or pouch impossible to walk past.",
  },
];

export const reviews = [
  { name: "Rahul Sharma", role: "Founder, Beastroot Max", text: "Ankit rebuilt our launch page in a week. Conversions jumped 2.3x. Pure clarity in design." },
  { name: "Priya Nair", role: "YouTube Creator, 240K", text: "My CTR went from 4% to 9.6% with his thumbnails. He understands curiosity better than anyone." },
  { name: "Aditya Verma", role: "Realtor, Estate 01", text: "The website feels premium and my clients say so. Booking enquiries doubled in a month." },
  { name: "Sneha Iyer", role: "Brand Manager, Volta", text: "The packaging and web identity finally matched our energy. Vimorphic just gets it." },
  { name: "Karan Mehta", role: "D2C Founder", text: "AI UGC ads delivered in 48 hours and they outperformed our agency creatives." },
  { name: "Ananya Gupta", role: "Coach & Educator", text: "Posters, thumbnails, course branding — one person, one consistent visual voice. Rare." },
  { name: "Devansh Patel", role: "Startup CTO", text: "Clean handoff, fast site, zero fluff. Best freelance experience we've had." },
];

export const faqs = [
  {
    q: "What exactly does Vimorphic do?",
    a: "Vimorphic is my design studio practice — thumbnails, posters, AI videos, AI UGC ads, logos and full web development. One studio for your entire visual system.",
  },
  {
    q: "How fast is the turnaround?",
    a: "Thumbnails and posters ship in 24–48 hours. AI video and UGC ads take 2–4 days. Full websites run 1–3 weeks depending on scope.",
  },
  {
    q: "How much does a project cost?",
    a: "Thumbnails start at ₹999, posters at ₹1499, AI video at ₹2499, and websites are quoted per scope after a short call.",
  },
  {
    q: "Do you build websites from scratch?",
    a: "Yes. Custom, animation-driven, SEO-ready builds — no bloated templates. You get clean code and a site that loads fast.",
  },
  {
    q: "What are AI UGC ads?",
    a: "Creator-style ad videos generated and edited with AI pipelines — the authentic feel of UGC without hiring a crew or waiting on shoots.",
  },
  {
    q: "Do you offer an AI receptionist and SEO?",
    a: "Yes. I set up AI receptionists that answer and qualify leads 24/7, plus technical and on-page SEO so you actually get found.",
  },
  {
    q: "How do we start?",
    a: "Hit Speak To Me — email me or DM @vimorphic.designs on Instagram to book a call. You get a plan before you pay anything.",
  },
];