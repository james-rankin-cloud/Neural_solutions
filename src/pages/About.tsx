import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Building2 } from "lucide-react";

const team = [
  {
    name: "Jasraj Taneja",
    role: "Software Engineer & AI Specialist",
    initials: "JT",
    company: "Ericsson",
    location: "Victoria, BC",
    bio: "A Software Engineer at Ericsson with over three years of development and automation experience using AI tools. Jasraj brings deep technical expertise in building scalable systems and integrating intelligent automation into real-world workflows.",
    personal: "Grew up on Vancouver Island in Victoria. When he's not writing code, you'll find him hiking local trails or spending time with his dog.",
  },
  {
    name: "James Rankin",
    role: "Machine Learning Engineer & Web Developer",
    initials: "JR",
    company: "UVic Graduate",
    location: "Victoria, BC",
    bio: "A recent Software Engineering graduate from UVic with a specialization in machine learning. James is well-versed in web development and automation services, and takes genuine pride in every project he delivers.",
    personal: "In his spare time, James enjoys tackling math puzzles, gaming, and staying active through sports.",
  },
  {
    name: "Meharban Taneja",
    role: "Customer Relations & Business Development",
    initials: "MT",
    company: "Baker Tilly",
    location: "British Columbia",
    bio: "Specializing in customer relations and business development, Meharban's experience as an Investment Banker at Baker Tilly has taught him the ins and outs of running a customer-focused business — equipping him with the skills to oversee operations at Neural Solutions.",
    personal: "Outside of work, Meharban enjoys investing in the stock market and spending quality time with friends and family.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    <section className="pt-32 pb-16 px-6 relative atmosphere grain">
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full bg-accent/[0.06] blur-3xl float-delayed" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The People Behind</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            Neural Solutions
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            A small, focused team that believes AI should make businesses simpler — not more complicated. Engineering depth, customer empathy, and a bias toward action.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="gradient-border card-elevated p-8 md:p-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-mono text-sm font-bold text-primary">{t.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{t.name}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mt-1">{t.role}</span>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
                        <Building2 size={12} className="text-primary/60" />
                        {t.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
                        <MapPin size={12} className="text-primary/60" />
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 font-light leading-relaxed mb-4">{t.bio}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed italic">{t.personal}</p>
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
