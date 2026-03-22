import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center atmosphere grain overflow-hidden">
    <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl float" />
    <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-accent/[0.08] blur-3xl float-delayed" />
    <div className="absolute top-[40%] right-[25%] w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-drift" />

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
    </div>
  </section>
);

export default HeroSection;
