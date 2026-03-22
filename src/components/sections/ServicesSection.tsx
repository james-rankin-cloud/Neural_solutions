import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Brain, Workflow, BarChart3, Cpu, Zap } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Tailored software built for your exact business needs — from internal tools to customer-facing platforms that scale." },
  { icon: Brain, title: "AI Automation Services", desc: "We identify repetitive tasks draining your team and replace them with intelligent automation that runs 24/7." },
  { icon: Cpu, title: "AI Integration", desc: "Embed AI into your existing workflows — intelligent search, voice assistants, email automation, and predictive analytics." },
  { icon: BarChart3, title: "AI Readiness Audit", desc: "A deep-dive into your operations to uncover where AI can save you time, money, and headaches — with a clear action plan." },
  { icon: Zap, title: "Product Development", desc: "From concept to launch, we design and build digital products that users love and businesses rely on." },
  { icon: Workflow, title: "Workflow Automation", desc: "Eliminate manual processes with end-to-end automation — CRM flows, data pipelines, client communications, and reporting." },
];

const ServicesSection = () => (
  <section className="py-32 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Capabilities</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-4">
          AI integration, automation &{" "}
          <em className="text-gradient not-italic">custom software</em>
        </h2>
        <p className="text-muted-foreground font-light text-lg mb-16 max-w-2xl">
          From first audit to fully automated operations — we handle every layer of the stack.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <div className="gradient-border perspective-card p-6 h-full">
              <s.icon size={24} className="text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
