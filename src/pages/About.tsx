import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { teamSchema } from "@/lib/schema/team";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { MapPin, Building2 } from "lucide-react";
import jasPhoto from "@/assets/Jas.PNG";
import meharPhoto from "@/assets/mehar.PNG";
import jamesPhoto from "@/assets/james_headshot.png";

const team = [
  {
    name: "Jasraj Taneja",
    role: "Software Engineer & AI Specialist",
    initials: "JT",
    photo: jasPhoto,
    company: "Ericsson",
    location: "Victoria, BC",
    bio: "A Software Engineer at Ericsson with over three years of development and automation experience using AI tools. Jasraj brings deep technical expertise in building scalable systems and integrating intelligent automation into real-world workflows.",
    personal: "Grew up on Vancouver Island in Victoria. When he's not writing code, you'll find him hiking local trails or spending time with his dog.",
  },
  {
    name: "James Rankin",
    role: "Machine Learning Engineer & Web Developer",
    initials: "JR",
    photo: jamesPhoto,
    company: "UVic Graduate",
    location: "Victoria, BC",
    bio: "A recent Software Engineering graduate from UVic with a specialization in machine learning. James is well-versed in web development and automation services, and takes genuine pride in every project he delivers.",
    personal: "In his spare time, James enjoys tackling math puzzles, gaming, and staying active through sports.",
  },
  {
    name: "Meharban Taneja",
    role: "Customer Relations & Business Development",
    initials: "MT",
    photo: meharPhoto,
    company: "Baker Tilly",
    location: "British Columbia",
    bio: "Specializing in customer relations and business development, Meharban's experience as an Investment Banker at Baker Tilly has taught him the ins and outs of running a customer-focused business, equipping him with the skills to oversee operations at Neural Solutions.",
    personal: "Outside of work, Meharban enjoys investing in the stock market and spending quality time with friends and family.",
  },
];

const About = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="About Our Team | Neural Solutions"
        description="Meet the AI developers and software engineers behind Neural Solutions. Based in Victoria, BC, we're UVic graduates building intelligent automation for Canadian businesses."
        keywords="AI developers Victoria BC, software engineers Vancouver Island, UVic machine learning graduates, AI agency team Canada"
        canonical="https://neuralsolutions.ca/about"
      />
      {teamSchema.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

    <section className="pt-32 pb-16 px-6 relative grain">
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full bg-accent/[0.04] blur-3xl float-delayed" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The People Behind</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-4">
            Neural Solutions
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-primary mb-6">
            Small team. Big conviction.
          </p>
          <p className="text-lg text-muted-foreground font-normal max-w-2xl leading-relaxed">
            Based in Victoria, British Columbia, we bring local expertise to Canadian businesses seeking AI automation and custom software solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-0 border-t border-border/40">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="border-b border-border/40 py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={`${t.name}, ${t.role} at Neural Solutions, Victoria BC - AI automation expert`}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shrink-0 shadow-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-mono text-2xl md:text-3xl font-bold text-primary">{t.initials}</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{t.name}</h2>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary block mb-3">{t.role}</span>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Building2 size={14} className="text-primary/60" />
                        {t.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin size={14} className="text-primary/60" />
                        {t.location}
                      </span>
                    </div>
                    <p className="text-foreground/80 font-normal leading-relaxed mb-4">{t.bio}</p>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed italic">{t.personal}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    </div>
  );
};

export default About;