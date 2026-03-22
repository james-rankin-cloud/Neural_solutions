import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  { name: "Marcus Chen", role: "Founder & CTO", initials: "MC", bio: "Former ML engineer at DeepMind. 12 years building production AI systems across fintech, healthcare, and e-commerce." },
  { name: "Ava Thornton", role: "Head of Engineering", initials: "AT", bio: "Full-stack architect specializing in distributed systems. Previously led platform engineering at Stripe." },
  { name: "Rio Nakamura", role: "AI Research Lead", initials: "RN", bio: "PhD in computational neuroscience. Published researcher in transformer architectures and reinforcement learning." },
  { name: "Sable Okafor", role: "Design Director", initials: "SO", bio: "Award-winning product designer. Obsessed with the intersection of data visualization and human intuition." },
];

const About = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    <section className="pt-32 pb-16 px-6 relative atmosphere grain">
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full bg-accent/6 blur-3xl float-delayed" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Who We Are</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            About Neural Solutions
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            A collective of engineers, researchers, and designers building intelligent systems that matter.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="gradient-border p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Philosophy</h2>
            <p className="text-foreground/80 font-light leading-relaxed mb-4">
              We don't believe in technology for its own sake. Every system we build starts with a human problem — an inefficiency, a blind spot, a bottleneck — and ends with a measurable improvement.
            </p>
            <p className="text-foreground/80 font-light leading-relaxed">
              Our team is deliberately small. We take on fewer projects so we can go deeper. No account managers, no handoffs. The people who architect your solution are the same people who ship it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The Team</span>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">Meet the minds</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="gradient-border card-elevated p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-primary">{t.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{t.name}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
