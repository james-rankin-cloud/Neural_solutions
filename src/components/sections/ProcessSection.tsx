import ScrollReveal from "@/components/ScrollReveal";

const process = [
  {
    num: "01",
    title: "Deep Audit",
    desc: "We map your workflows, identify bottlenecks, and find where AI and automation can make the biggest impact on revenue and efficiency.",
  },
  {
    num: "02",
    title: "Build & Integrate",
    desc: "Our team designs and deploys custom solutions. AI automations, intelligent workflows, custom software, or all of the above.",
  },
  {
    num: "03",
    title: "Optimize & Scale",
    desc: "We monitor, refine, and scale your solutions as your business grows. Continuous improvement, not one-and-done.",
  },
];

const ProcessSection = () => (
  <section className="py-28 px-6 relative z-10 atmosphere-dense">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Process</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[0.95] mb-4">
          From audit to automation
        </h2>
        <p className="font-serif text-2xl md:text-3xl italic text-primary mb-20">
          in weeks, not months.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-0 border-t border-border/40">
        {process.map((p, i) => (
          <ScrollReveal key={p.num} delay={i * 120}>
            <div className={`py-10 md:px-8 ${i < 2 ? "md:border-r border-border/40" : ""} border-b md:border-b-0 border-border/40`}>
              <span className="font-display text-6xl md:text-7xl font-bold text-primary/10 leading-none block mb-6">
                {p.num}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground font-normal leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;