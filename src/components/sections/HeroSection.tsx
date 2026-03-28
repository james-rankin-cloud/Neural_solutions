import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import flowWebm from "@/assets/flow.webm";
import flowMp4 from "@/assets/flow.mp4";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
    {/* Background video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={flowWebm} type="video/webm" />
      <source src={flowMp4} type="video/mp4" />
    </video>
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-background/80 z-[1]" />

    {/* Grain texture is handled by the grain class */}
    <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/[0.05] blur-3xl float z-[2]" />
    <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl float-delayed z-[2]" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <ScrollReveal delay={100}>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[1.05] mb-4">
          Lead with AI.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-primary leading-[1] mb-10">
          We'll build it for you.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <p className="font-sans text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
          We design, build, and deploy AI systems tailored to how your business actually operates.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group">
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