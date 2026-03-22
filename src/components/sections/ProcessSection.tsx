import ScrollReveal from "@/components/ScrollReveal";

const process = [
  { num: "01", title: "Deep Audit", desc: "We map your workflows, identify bottlenecks, and find where AI and automation can make the biggest impact on revenue and efficiency." },
  { num: "02", title: "Build & Integrate", desc: "Our team designs and deploys custom solutions — AI automations, intelligent workflows, custom software, or all of the above." },
  { num: "03", title: "Optimize & Scale", desc: "We monitor, refine, and scale your solutions as your business grows. Continuous improvement, not one-and-done." },
];

const ProcessSection = () => (
  <section className="py-32 px-6 relative z-10 atmosphere-dense">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Process</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-20">
          From audit to automation <br className="hidden md:block" />
          <em className="not-italic text-gradient">in weeks, not months</em>
        </h2>
      </ScrollReveal>

      <div className="space-y-16">
        {process.map((p, i) => (
          <ScrollReveal key={p.num} delay={i * 120}>
            <div className="relative pl-24 md:pl-32">
              <span className="absolute left-0 top-0 font-display text-7xl md:text-8xl font-bold text-primary/5 leading-none select-none">
                {p.num}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-xl">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
