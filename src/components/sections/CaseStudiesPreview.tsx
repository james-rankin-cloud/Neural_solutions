import { useState, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

const caseStudies = [
  {
    title: "Ageless Living™",
    industry: "Health & Wellness",
    metric: "6 integrated systems",
    desc: "Complete digital transformation for a multi-location wellness brand. Website, booking, AI search, voicemail, e-commerce, and SEO in one platform.",
    tags: ["Web Dev", "AI Integration", "Automation"],
  },
  {
    title: "Harrison Forbes Electrical",
    industry: "Electrical Services",
    metric: "0 leads lost",
    desc: "One-page website with online booking, missed call rescue automation, post-job review follow-ups, and value-add calculators.",
    tags: ["Web Dev", "Automation", "Lead Rescue"],
  },
];

const CaseStudiesPreview = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % caseStudies.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + caseStudies.length) % caseStudies.length), []);

  const cs = caseStudies[current];

  return (
    <section className="py-28 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Results</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
                Built for operators,{" "}
                <span className="font-serif italic text-primary">not just optimists.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="gradient-border card-elevated p-8 md:p-12 transition-all duration-500">
            <div className="flex flex-wrap gap-2 mb-6">
              {cs.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">{cs.industry}</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{cs.title}</h3>
            <p className="font-display text-2xl md:text-3xl font-bold text-gradient mb-4">{cs.metric}</p>
            <p className="text-muted-foreground font-normal leading-relaxed max-w-2xl mb-8">{cs.desc}</p>

            <div className="flex items-center gap-3 md:hidden mb-6">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={16} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground">
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {caseStudies.map((_, idx) => (
                <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-primary" : "w-4 bg-border"}`} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Button variant="hero-outline" asChild>
              <Link to="/case-studies" className="group">
                View All Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;