import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-32 px-6 relative z-10 atmosphere-dense grain">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-4">
          Ready to stop talking about AI
        </h2>
        <p className="font-serif text-3xl md:text-4xl italic text-primary mb-10">
          and start shipping it?
        </p>
        <p className="text-muted-foreground font-normal text-lg mb-12 max-w-xl mx-auto">
          Book a free audit. We'll show you exactly where AI can save you time, money, and headaches. No obligations, just a clear roadmap.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/book-audit" className="group">
            Book Your Free Audit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;