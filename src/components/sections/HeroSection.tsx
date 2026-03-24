import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
    {/* Grain texture is handled by the grain class */}
    <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/[0.05] blur-3xl float" />
    <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl float-delayed" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <ScrollReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8 block">
          AI Automation Agency
        </span>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.95] tracking-tight mb-4">
          Everyone builds AI tools.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-primary leading-[1] mb-10">
          We build ones that actually run your business.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <p className="font-sans text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
          Most agencies promise AI. We ship it. Neural Solutions designs and engineers
          intelligent systems that automate your operations from day one.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={400}>
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