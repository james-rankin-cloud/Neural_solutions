import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { agelessLivingCaseStudy, harrisonForbesCaseStudy } from "@/lib/schema/caseStudies";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { ArrowRight, Check } from "lucide-react";
import agelessLivingLogo from "@/assets/ageless-living.jpg";
import harrisonForbesLogo from "@/assets/harrisonforbes.jpg";

const studies = [
  {
    title: "Ageless Living™",
    subtitle: "Full Digital Transformation for a Multi-Location Wellness Brand",
    industry: "Health & Wellness",
    challenge:
      "Ageless Living™, a wellness clinic network across Langley, Victoria, and Kelowna, BC, needed a complete digital overhaul. Their existing site was outdated, hard to maintain, and lacked online booking, e-commerce, or any intelligent features. Staff were overwhelmed with phone calls, missed inquiries, and manual admin.",
    solution:
      "We redesigned the entire website from the ground up with a modern, mobile-first design. We integrated Jane App for seamless online booking across all 3 locations, built a 117-product e-commerce storefront synced with Square, and implemented AI-powered site search so visitors can find treatments instantly. We also deployed AI voicemail and AI email response systems to handle client inquiries 24/7. On top of that, we overhauled their SEO with JSON-LD structured data, Google Business Profile optimization, and location-specific pages.",
    highlight: { metric: "6", label: "integrated systems in one platform" },
    results: [
      "Full website redesign with zero front-end maintenance",
      "Jane App booking integration across 3 clinic locations",
      "AI-powered site search for treatments and services",
      "AI voicemail & AI email for 24/7 client communication",
      "117-product storefront with Square Payments & Canada Post shipping",
      "Advanced SEO with structured data for all locations",
    ],
    tags: ["Web Development", "AI Integration", "Automation"],
    logo: agelessLivingLogo,
    logoBg: "bg-white",
  },
  {
    title: "Harrison Forbes Electrical",
    subtitle: "One-Page Website + Full Business Automation",
    industry: "Electrical Services",
    challenge:
      "Harrison Forbes, a growing electrical contractor offering residential, EV charging, and solar services, had no online presence and was losing potential clients to missed calls and zero follow-up. All admin, scheduling, quoting, communication, was manual and eating into billable hours.",
    solution:
      "We built a clean, mobile-friendly one-page website that acts as a 24/7 digital storefront, showcasing completed projects, highlighting Google reviews, and featuring an integrated calendar with deposit-secured quote booking. Behind the scenes, we set up a full automation suite: missed call text/email rescue so no lead is ever lost, automated post-job follow-ups to drive 5-star Google reviews, and client communication flows for updates and scheduling. We also built value-add tools like grant scouting and LED energy savings calculators to help close deals on-site.",
    highlight: { metric: "0", label: "leads lost to missed calls" },
    results: [
      "Missed call rescue with automatic text/email reply on every unanswered call",
      "Online quote booking with deposit to secure commitments",
      "Automated post-job follow-up driving more 5-star reviews",
      "Project gallery and Google review showcase for instant trust",
      "Grant scouting tools & LED cost-saving calculators for closing deals",
      "Full database for client history, files, and future invoicing",
    ],
    tags: ["Web Development", "Automation"],
    logo: harrisonForbesLogo,
    logoBg: "bg-black",
  },
];

const CaseStudies = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Case Studies & Portfolio | Neural Solutions"
        description="Real AI automation and web development projects for British Columbia businesses. From wellness clinics to electrical contractors, see how we've delivered results across Canada."
        keywords="AI automation case studies Canada, web development portfolio BC, Ageless Living website, Harrison Forbes automation, BC business automation examples"
        canonical="https://neuralsolutions.ca/case-studies"
      />
      <StructuredData data={agelessLivingCaseStudy} />
      <StructuredData data={harrisonForbesCaseStudy} />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

    <section className="pt-32 pb-16 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Portfolio</span>
          <h1 className="font-sans text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-tight mb-4">
            Case Studies
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-6">
            Real projects, real results.
          </p>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Here's how we've helped British Columbia businesses automate operations and build custom software with AI. From wellness clinics to electrical contractors, real results across Canada.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-28 px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-20">
        {studies.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <article className="border-t border-border pt-12">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className={`${s.logoBg} rounded-[1.25rem] p-4 shrink-0 w-fit border border-border`}>
                  <img src={s.logo} alt={`${s.title} - ${s.industry} client of Neural Solutions, British Columbia AI automation agency`} className="h-12 w-auto object-contain" loading="lazy" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {s.tags.map((t) => (
                      <span key={t} className="font-sans text-xs uppercase tracking-wider text-foreground bg-secondary px-3 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">{s.industry}</span>
                  <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2 leading-tight">{s.title}</h2>
                  <p className="font-sans text-lg text-muted-foreground">{s.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_auto] gap-12">
                <div className="space-y-8">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Challenge</span>
                    <p className="font-sans text-base text-foreground leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Solution</span>
                    <p className="font-sans text-base text-foreground leading-relaxed">{s.solution}</p>
                  </div>
                </div>

                <div className="border border-border rounded-[1.25rem] p-6 md:w-60 self-start bg-secondary">
                  <div className="mb-6">
                    <div className="font-sans text-5xl font-bold text-foreground tabular-nums">{s.highlight.metric}</div>
                    <div className="font-sans text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.highlight.label}</div>
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Key Results</span>
                  <ul className="space-y-2.5">
                    {s.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 font-sans text-xs text-foreground leading-snug">
                        <Check size={12} className="text-foreground mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="text-center mt-20">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want results like these?
          </h2>
          <p className="font-sans text-xl text-muted-foreground mb-8">
            Let's start with a free audit.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group">
              Book Your Free Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>

    <Footer />
    </div>
  );
};

export default CaseStudies;