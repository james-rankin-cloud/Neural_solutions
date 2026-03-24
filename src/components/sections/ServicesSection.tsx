import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Brain, Workflow, Cpu, Zap, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Custom Software Development",
    desc: "Tailored software built for your exact business needs. From internal tools to customer-facing platforms, we engineer products that scale with you and make a lasting first impression.",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Integration",
    desc: "Embed intelligence directly into your existing workflows. Intelligent search, document processing, predictive analytics, and recommendation engines that learn and improve on their own.",
  },
  {
    icon: Workflow,
    num: "03",
    title: "AI Automation",
    desc: "We find the repetitive tasks draining your team and replace them with automation that runs around the clock. CRM flows, data pipelines, client communication, reporting. All handled.",
  },
  {
    icon: Bot,
    num: "04",
    title: "AI-Powered Assistants",
    desc: "Deploy conversational AI that actually understands your business. Custom voicemail systems, email responders, and chat assistants trained on your data, handling inquiries 24/7.",
  },
  {
    icon: Cpu,
    num: "05",
    title: "Cloud Infrastructure",
    desc: "Cloud-based development, testing, and production environments across AWS, Azure, and Oracle Cloud. We manage the infrastructure so you never think about servers.",
  },
  {
    icon: Zap,
    num: "06",
    title: "Product Development",
    desc: "From concept to launch, we design and build digital products users love and businesses rely on. Full lifecycle management with speed and precision.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-4">
            Buzzwords don't run businesses.
          </h2>
          <p className="font-serif text-2xl md:text-3xl italic text-primary mb-16">
            AI does.
          </p>
        </ScrollReveal>

        <div className="space-y-0 border-t border-border/40">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 60}>
              <div
                className={cn(
                  "border-b border-border/40 py-6 md:py-8 cursor-none transition-all duration-500",
                  active === i ? "bg-muted/50" : ""
                )}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-mono text-xs text-muted-foreground/50 mt-1 shrink-0">{s.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <s.icon size={20} className="text-primary shrink-0" />
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{s.title}</h3>
                    </div>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-out",
                        active === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="text-muted-foreground font-normal leading-relaxed max-w-2xl pl-10">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;