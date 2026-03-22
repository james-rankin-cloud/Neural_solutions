import ScrollReveal from "@/components/ScrollReveal";

const QuoteSection = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <div className="relative">
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[6rem] leading-none text-primary/10 select-none">"</span>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-[1.3] tracking-tight pt-8">
            There will be two kinds of companies at the end of this decade: those that are fully utilizing AI, and those that are out of business.
          </blockquote>
          <cite className="block mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground not-italic">
            — Peter Diamandis
          </cite>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default QuoteSection;
