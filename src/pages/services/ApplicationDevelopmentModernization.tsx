import { useLocation, Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { ArrowRight, Check, User, Mail, Building2, Phone, MessageSquare } from "lucide-react";
import agelessLivingLogo from "@/assets/ageless-living.jpg";
import harrisonForbesLogo from "@/assets/harrisonforbes.jpg";
import blueSkyHomecareLogo from "@/assets/blue-sky-homecare.png";

const caseStudies = [
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

const faqs = [
  {
    question: "Which application development services does Neural Solutions provide?",
    answer:
      "Neural Solutions provides custom web application development, mobile friendly application development, cloud application development, SaaS product development, internal tool development, portal development, MVP development, application modernization, integrations, testing, and ongoing support.",
  },
  {
    question: "Do you offer application modernization and migration services?",
    answer:
      "Yes. We help modernize legacy applications by reviewing the current system, identifying technical debt, improving architecture, updating interfaces, supporting cloud readiness, and creating a phased plan that reduces disruption to business operations.",
  },
  {
    question: "Do you offer application maintenance and ongoing support?",
    answer:
      "Yes. After launch, we can help with monitoring, bug fixes, performance improvements, feature updates, user feedback changes, technical debt cleanup, security updates, and long term application support.",
  },
  {
    question: "What testing and quality assurance services are included?",
    answer:
      "Quality assurance depends on the project, but it can include functional testing, regression testing, user acceptance testing, performance checks, accessibility review, integration testing, and release validation. The goal is to make the application stable, usable, and ready for real users.",
  },
  {
    question: "How long does it take to build an application?",
    answer:
      "Timeline depends on scope, complexity, integrations, design requirements, and the number of user roles or workflows. A smaller MVP may take less time, while a complex SaaS product, enterprise application, or modernization project requires a more structured roadmap.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We can support focused project builds, MVP development, ongoing product development, modernization work, and long term technical support. The right model depends on whether you have a fixed scope, an evolving product, or an existing application that needs improvement.",
  },
  {
    question: "What technologies and frameworks do you work with?",
    answer:
      "We choose technologies based on the project's needs, existing systems, budget, team capabilities, and long term goals. This may include modern frontend frameworks, backend technologies, cloud platforms, databases, APIs, automation tools, and AI integrations where useful.",
  },
  {
    question: "Can you build industry specific or innovative applications?",
    answer:
      "Yes. We can design applications for different industries and workflows, including customer portals, booking systems, operations platforms, dashboards, internal tools, AI enabled applications, and data driven products.",
  },
  {
    question: "What happens after the application is delivered?",
    answer:
      "After delivery, applications usually need monitoring, maintenance, user feedback improvements, bug fixes, performance tuning, new features, and knowledge transfer. Neural Solutions can support ongoing improvements or help hand off the system to your internal team.",
  },
];

const ApplicationDevelopmentModernization = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    applicationType: "",
    problemToSolve: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Application Development & Modernization Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Application type: ${formData.applicationType}
Problem to solve: ${formData.problemToSolve}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Application Development & Modernization | Neural Solutions"
        description="Neural Solutions designs, builds, modernizes, and supports custom web, mobile, cloud, and SaaS applications that improve operations, user experience, and business performance."
        keywords="application development, application modernization, web application development, mobile application development, cloud application development, SaaS development, MVP development, legacy modernization, enterprise applications"
        canonical="https://neuralsolutions.ca/services/application-development-modernization"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              Application Development & Modernization
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              Application Development & Modernization
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Neural Solutions helps businesses design, build, and modernize custom applications that improve operations, support growth, and create better digital experiences for customers, teams, and partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-audit" className="group">
                  Book Free Consultation
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="#services" className="group">
                  Explore App Development Services
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-6 border-y border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <nav className="font-sans text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <Link to="/services/software-development" className="hover:text-foreground transition-colors">Software Development</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Application Development & Modernization</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block text-center mb-8">
              Brands we have worked with
            </span>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="bg-white rounded-[1.25rem] p-4 border border-border">
                <img src={agelessLivingLogo} alt="Ageless Living" className="h-12 w-auto object-contain" />
              </div>
              <div className="bg-black rounded-[1.25rem] p-4 border border-border">
                <img src={harrisonForbesLogo} alt="Harrison Forbes Electrical" className="h-12 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-[1.25rem] p-4 border border-border">
                <img src={blueSkyHomecareLogo} alt="Blue Sky Home Care" className="h-12 w-auto object-contain" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              From concept to market-ready applications
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              Neural Solutions helps turn business ideas into practical web, mobile, and cloud applications. We support the full application lifecycle, from product planning and architecture to development, integration, testing, launch, and ongoing improvement.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              Our goal is to build applications that are easy to use, secure, scalable, and aligned with real business workflows. Whether you are launching a new product, improving an internal tool, or modernizing a legacy system, we help create a clear path from concept to production.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              We focus on applications that improve efficiency, enhance user experience, connect systems, and create measurable value for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Engineering applications that scale with your business */}
      <section id="services" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              Engineering applications that scale with your business
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Custom application development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We design and build tailored web, mobile, cloud, and SaaS applications from the ground up or on top of trusted technology platforms.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Customer portals",
                    "Internal business applications",
                    "SaaS products",
                    "Booking and intake systems",
                    "Admin dashboards",
                    "Workflow platforms"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Proof of concept & MVP development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We help validate ideas quickly through proof of concepts and MVPs so you can test demand, reduce risk, and make better product decisions before investing in a full build.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "MVP planning",
                    "Prototype development",
                    "Feature validation",
                    "User feedback loops",
                    "Technical feasibility testing",
                    "Investor or stakeholder demos"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Cloud-native & cloud-enabled applications</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We build cloud-ready applications and modernize existing systems so they can better support scalability, resilience, performance, and future growth.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Cloud application development",
                    "Cloud migration support",
                    "Scalable architecture",
                    "API-based systems",
                    "Serverless workflows",
                    "Performance optimization"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Enterprise application engineering</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We build and extend business applications that support complex workflows, data flows, users, permissions, and operational requirements.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "CRM-connected applications",
                    "ERP-connected workflows",
                    "Internal operations platforms",
                    "Data-heavy applications",
                    "Role-based user systems",
                    "Business process tools"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Application modernization</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We improve legacy applications by reworking architecture, updating outdated interfaces, improving performance, reducing technical debt, and preparing systems for future growth.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Legacy system review",
                    "UI and UX improvements",
                    "Refactoring and re-platforming",
                    "Database modernization",
                    "Cloud readiness",
                    "Maintenance planning"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Application integration & automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We connect applications with the tools, APIs, databases, and workflows your business already uses so information moves more cleanly across your operation.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "API integrations",
                    "CRM integrations",
                    "Payment integrations",
                    "Email and calendar workflows",
                    "Data sync between systems",
                    "Automation between applications"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              Application development case studies
            </h2>
          </ScrollReveal>

          <div className="space-y-20">
            {caseStudies.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <article className="border-t border-border pt-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div
                      className={`${s.logoBg} rounded-[1.25rem] p-4 shrink-0 w-fit border border-border`}
                    >
                      <img
                        src={s.logo}
                        alt={`${s.title} - ${s.industry} client of Neural Solutions, British Columbia AI automation agency`}
                        className="h-12 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="font-sans text-xs uppercase tracking-wider text-foreground bg-secondary px-3 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                        {s.industry}
                      </span>
                      <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2 leading-tight">
                        {s.title}
                      </h3>
                      <p className="font-sans text-base md:text-lg text-muted-foreground">{s.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-[1fr_auto] gap-12">
                    <div className="space-y-8">
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">
                          Challenge
                        </span>
                        <p className="font-sans text-base text-foreground leading-relaxed">{s.challenge}</p>
                      </div>
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">
                          Solution
                        </span>
                        <p className="font-sans text-base text-foreground leading-relaxed">{s.solution}</p>
                      </div>
                    </div>

                    <div className="border border-border rounded-[1.25rem] p-6 md:w-60 self-start bg-secondary">
                      <div className="mb-6">
                        <div className="font-sans text-5xl font-bold text-foreground tabular-nums">
                          {s.highlight.metric}
                        </div>
                        <div className="font-sans text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                          {s.highlight.label}
                        </div>
                      </div>
                      <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">
                        Key Results
                      </span>
                      <ul className="space-y-2.5">
                        {s.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 font-sans text-xs text-foreground leading-snug"
                          >
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
        </div>
      </section>

      {/* We meet you where you are */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight text-center">
              We meet you where you are
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <div className="mb-4">
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Stage
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Discovery</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6">No idea where to start</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Helping clients understand their application needs, define user requirements, and create a practical development roadmap.
                </p>
                <ul className="space-y-2">
                  {[
                    "Requirements gathering and analysis",
                    "Technology stack consultation",
                    "Project scope and timeline planning",
                    "User journey mapping",
                    "Feature prioritization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-xs text-foreground">
                      <Check size={12} className="text-foreground mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <div className="mb-4">
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Stage
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Development</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6">Ready to build your solution</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Guiding clients through iterative application development, validation, and quality focused delivery.
                </p>
                <ul className="space-y-2">
                  {[
                    "Architecture design and planning",
                    "Agile development sprints",
                    "Frontend and backend development",
                    "Quality assurance and testing",
                    "Progress demos and feedback loops",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-xs text-foreground">
                      <Check size={12} className="text-foreground mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <div className="mb-4">
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Stage
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Deployment</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6">Have a working product</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Scaling, optimizing, and launching applications into production with monitoring, support, and long term improvement plans.
                </p>
                <ul className="space-y-2">
                  {[
                    "DevOps and deployment strategy",
                    "Production grade implementation",
                    "Application monitoring",
                    "Performance optimization",
                    "Maintenance and support plan",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-xs text-foreground">
                      <Check size={12} className="text-foreground mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">FAQs</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-sans text-base text-foreground text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom Booking and Contact Section */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Ready to build or modernize your application?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your application idea, existing system, users, workflows, and what it would take to build or modernize the right solution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Book a Consultation</h3>
                <CalendarEmbed calLink="james-rankin-jmigyc/30min" className="border-border" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us about your application</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="What type of application are you looking to build or modernize?"
                      value={formData.applicationType}
                      onChange={(e) => setFormData({ ...formData, applicationType: e.target.value })}
                      className="pl-10 min-h-24"
                      required
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="What problem should it solve?"
                      value={formData.problemToSolve}
                      onChange={(e) => setFormData({ ...formData, problemToSolve: e.target.value })}
                      className="pl-10 min-h-20"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm text-muted-foreground mb-2 block">What stage are you at?</label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md font-sans text-sm text-foreground"
                      required
                    >
                      <option value="">Select a stage</option>
                      <option value="Discovery">Discovery</option>
                      <option value="Planning">Planning</option>
                      <option value="MVP">MVP</option>
                      <option value="Ready to build">Ready to build</option>
                      <option value="Have an existing application">Have an existing application</option>
                      <option value="Need modernization">Need modernization</option>
                      <option value="Need ongoing support">Need ongoing support</option>
                    </select>
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Request
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationDevelopmentModernization;
