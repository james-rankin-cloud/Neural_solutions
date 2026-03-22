import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, BarChart3, Zap, Code2, Brain, Workflow } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Strategy & Integration", desc: "Custom AI solutions tailored to your business workflows — from chatbots to predictive analytics." },
  { icon: Code2, title: "Full-Stack Development", desc: "Scalable web applications built with modern frameworks and cloud-native architecture." },
  { icon: Workflow, title: "Process Automation", desc: "Eliminate manual bottlenecks with intelligent automation that learns and adapts." },
  { icon: BarChart3, title: "Data Intelligence", desc: "Transform raw data into actionable insights with custom dashboards and ML pipelines." },
  { icon: Cpu, title: "System Architecture", desc: "Design resilient, high-performance systems that scale with your ambitions." },
  { icon: Zap, title: "Rapid Prototyping", desc: "From concept to working prototype in weeks, not months. Validate fast, iterate faster." },
];

const process = [
  { num: "01", title: "Discover", desc: "We audit your current systems, map pain points, and identify high-impact opportunities for AI integration." },
  { num: "02", title: "Design", desc: "Architect solutions that fit your stack, your team, and your timeline — no bloated proposals." },
  { num: "03", title: "Deliver", desc: "Build, test, deploy, and iterate. We stay embedded until the solution is generating measurable results." },
];

const caseStudies = [
  { title: "FinTech Analytics Platform", metric: "340%", label: "increase in data processing speed", desc: "Rebuilt a legacy analytics pipeline using event-driven architecture and real-time ML scoring." },
  { title: "E-Commerce Personalization Engine", metric: "47.2%", label: "lift in conversion rate", desc: "Deployed a recommendation system that adapts to browsing patterns in real-time." },
];

const Index = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center atmosphere grain overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl float" />
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl float-delayed" />
      <div className="absolute top-[40%] right-[25%] w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-drift" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(270 80% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 80% 65% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-pulse 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            AI-Powered Digital Solutions
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-8">
            We build systems that{" "}
            <em className="shimmer not-italic">think</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-sans text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Neural Solutions designs and engineers AI-integrated digital products
            that give your business an unfair advantage.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-audit" className="group cursor-none">
                Book a Free Audit
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/case-studies" className="cursor-none">View Our Work</Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Glass card overlapping */}
        <ScrollReveal delay={500}>
          <div className="mt-20 glass rounded-2xl p-8 max-w-lg mx-auto">
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "47+", label: "Projects" },
                { val: "12", label: "Industries" },
                { val: "98%", label: "Retention" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground tabular-nums">{s.val}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Services */}
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-16">
            End-to-end digital <br className="hidden md:block" />
            <em className="text-gradient not-italic">intelligence</em>
          </h2>
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

    {/* Process */}
    <section className="py-32 px-6 relative z-10 atmosphere-dense">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-20">
            Three phases, <em className="not-italic text-gradient">zero bloat</em>
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

    {/* Case Studies Preview */}
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-16">
            Measured in <em className="not-italic text-gradient">outcomes</em>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 100}>
              <div className="gradient-border card-elevated p-8 h-full">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{cs.title}</span>
                <div className="my-4">
                  <span className="font-display text-5xl font-bold text-gradient tabular-nums">{cs.metric}</span>
                  <span className="block font-mono text-xs text-muted-foreground mt-1">{cs.label}</span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{cs.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Button variant="hero-outline" asChild>
              <Link to="/case-studies" className="group cursor-none">
                View All Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-6 relative z-10 atmosphere-dense grain">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] mb-6">
            Ready to build something <span className="shimmer">extraordinary</span>?
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-10 max-w-xl mx-auto">
            Book a free audit and discover how AI can transform your business operations.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group cursor-none">
              Start Your Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
