import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Ageless Living™",
    subtitle: "Full Digital Transformation",
    metric: "6",
    label: "integrated systems",
    desc: "Complete website redesign with booking integration, AI-powered search, AI voicemail & email, e-commerce, and advanced SEO across 3 clinic locations.",
    tags: ["Web Dev", "AI Integration", "Automation"],
  },
  {
    title: "Harrison Forbes Electrical",
    subtitle: "Website + Business Automation",
    metric: "0",
    label: "leads lost to missed calls",
    desc: "One-page website with online booking, missed call rescue automation, post-job review follow-ups, and value-add calculators.",
    tags: ["Web Dev", "Automation", "Lead Rescue"],
  },
];

const CaseStudiesPreview = () => (
  <section className="py-32 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Results</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-16">
          Case <em className="not-italic text-gradient">studies</em>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((cs, i) => (
          <ScrollReveal key={cs.title} delay={i * 100}>
            <div className="gradient-border card-elevated p-8 h-full">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cs.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="my-4">
                <span className="font-display text-5xl font-bold text-gradient tabular-nums">{cs.metric}</span>
                <span className="block font-mono text-xs text-muted-foreground mt-1">{cs.label}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{cs.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{cs.subtitle}</span>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">{cs.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="text-center mt-12">
          <Button variant="hero-outline" asChild>
            <Link to="/case-studies" className="group cursor-none">
              View All
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CaseStudiesPreview;
