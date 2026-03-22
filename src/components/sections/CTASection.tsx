import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-32 px-6 relative z-10 atmosphere-dense grain">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] mb-6">
          Ready to <span className="shimmer">automate everything</span>?
        </h2>
        <p className="text-muted-foreground font-light text-lg mb-10 max-w-xl mx-auto">
          Book a free audit and we'll show you exactly where AI can save you time, money, and headaches.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/book-audit" className="group cursor-none">
            Book Your Free Audit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
