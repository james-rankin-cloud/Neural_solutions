import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const studies = [
  {
    title: "Ageless Living™ — Full Digital Transformation for a Multi-Location Wellness Brand",
    industry: "Health & Wellness",
    challenge:
      "Ageless Living™, a wellness clinic network across Langley, Victoria, and Kelowna, BC, needed a complete digital overhaul. Their existing site was outdated, hard to maintain, and lacked online booking, e-commerce, or any intelligent features. Staff were overwhelmed with phone calls, missed inquiries, and manual admin.",
    solution:
      "We redesigned the entire website from the ground up with a modern, mobile-first design. We integrated Jane App for seamless online booking across all 3 locations, built a 117-product e-commerce storefront synced with Square, and implemented AI-powered site search so visitors can find treatments instantly. We also deployed AI voicemail and AI email response systems to handle client inquiries 24/7 — improving satisfaction and ensuring no lead goes unanswered. On top of that, we overhauled their SEO with JSON-LD structured data, Google Business Profile optimization, and location-specific pages.",
    highlight: { metric: "6", label: "integrated systems in one platform" },
    results: [
      "Full website redesign with zero front-end maintenance",
      "Jane App booking integration across 3 clinic locations",
      "AI-powered site search for treatments and services",
      "AI voicemail & AI email for 24/7 client communication",
      "117-product storefront with Square Payments & Canada Post shipping",
      "Advanced SEO with structured data for all locations",
    ],
    tags: ["Web Development", "AI Integration", "Automation"],
  },
  {
    title: "Harrison Forbes Electrical — One-Page Website + Full Business Automation",
    industry: "Electrical Services",
    challenge:
      "Harrison Forbes, a growing electrical contractor offering residential, EV charging, and solar services, had no online presence and was losing potential clients to missed calls and zero follow-up. All admin — scheduling, quoting, communication — was manual and eating into billable hours.",
    solution:
      "We built a clean, mobile-friendly one-page website that acts as a 24/7 digital storefront — showcasing completed projects, highlighting Google reviews, and featuring an integrated calendar with deposit-secured quote booking. Behind the scenes, we set up a full automation suite: missed call text/email rescue so no lead is ever lost, automated post-job follow-ups to drive 5-star Google reviews, and client communication flows for updates and scheduling. We also built value-add tools like grant scouting and LED energy savings calculators to help close deals on-site.",
    highlight: { metric: "0", label: "leads lost to missed calls" },
    results: [
      "Missed call rescue — automatic text/email reply on every unanswered call",
      "Online quote booking with deposit to secure commitments",
      "Automated post-job follow-up driving more 5-star reviews",
      "Project gallery and Google review showcase for instant trust",
      "Grant scouting tools & LED cost-saving calculators for closing deals",
      "Full database for client history, files, and future invoicing",
    ],
    tags: ["Web Development", "Automation"],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    <section className="pt-32 pb-16 px-6 relative atmosphere grain">
      <div className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/[0.08] blur-3xl float" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            Real projects, real results. Here's how we've helped businesses automate operations and build custom software with AI.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {studies.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <article className="gradient-border p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.industry}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-8 leading-tight">{s.title}</h2>

              <div className="grid md:grid-cols-[1fr_auto] gap-8">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">Challenge</span>
                    <p className="text-foreground/80 font-light leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">Solution</span>
                    <p className="text-foreground/80 font-light leading-relaxed">{s.solution}</p>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 md:w-56 self-start">
                  <div className="mb-6">
                    <div className="font-display text-5xl font-bold text-gradient tabular-nums">{s.highlight.metric}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-1">{s.highlight.label}</div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-3">Key Results</span>
                  <ul className="space-y-2.5">
                    {s.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-foreground/70 font-light leading-snug">
                        <Check size={12} className="text-primary mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="text-center mt-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want results like these?
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-8 max-w-xl mx-auto">
            Let's start with a free audit — no obligations, just a clear roadmap for how AI can transform your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group cursor-none">
              Book Your Free Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>

    <Footer />
  </div>
);

export default CaseStudies;
