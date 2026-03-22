import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    title: "FinTech Analytics Platform",
    client: "Meridian Capital Group",
    challenge: "Legacy batch-processing pipeline couldn't keep up with real-time trading data. Reports were 6 hours stale.",
    solution: "Event-driven architecture with Apache Kafka, real-time ML scoring, and a custom dashboard built on React + D3.",
    results: [
      { metric: "340%", label: "faster data processing" },
      { metric: "$2.1M", label: "saved annually" },
      { metric: "99.97%", label: "uptime achieved" },
    ],
    tags: ["AI/ML", "Real-time", "Cloud Architecture"],
  },
  {
    title: "E-Commerce Personalization Engine",
    client: "Bloom & Harvest",
    challenge: "Generic product recommendations were driving high bounce rates. The existing system used static rules.",
    solution: "Collaborative filtering + content-based hybrid recommendation engine with real-time session tracking.",
    results: [
      { metric: "47.2%", label: "conversion rate lift" },
      { metric: "3.8×", label: "average session duration" },
      { metric: "28%", label: "increase in AOV" },
    ],
    tags: ["Machine Learning", "E-Commerce", "Personalization"],
  },
  {
    title: "Healthcare Data Pipeline",
    client: "Vitalink Systems",
    challenge: "Patient data scattered across 14 legacy systems with no unified view. Compliance was a nightmare.",
    solution: "HIPAA-compliant data mesh architecture with automated ETL, real-time dashboards, and anomaly detection.",
    results: [
      { metric: "14→1", label: "unified data source" },
      { metric: "92%", label: "reduction in manual reporting" },
      { metric: "100%", label: "compliance maintained" },
    ],
    tags: ["Healthcare", "Data Engineering", "Compliance"],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    <section className="pt-32 pb-16 px-6 relative atmosphere grain">
      <div className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/8 blur-3xl float" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            Real projects, real metrics. Here's how we've helped businesses unlock performance through intelligent systems.
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

              <h2 className="font-display text-3xl font-bold text-foreground mb-1">{s.title}</h2>
              <span className="font-mono text-xs text-muted-foreground">{s.client}</span>

              <div className="grid md:grid-cols-[1fr_auto] gap-8 mt-8">
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

                <div className="glass rounded-xl p-6 space-y-4 md:w-48 self-start">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">Results</span>
                  {s.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-2xl font-bold text-gradient tabular-nums">{r.metric}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group cursor-none">
              Start Your Project
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
