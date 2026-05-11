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
    question: "What does AI-enabled software delivery actually mean in practice?",
    answer:
      "AI-enabled software delivery means applying AI inside existing planning, development, testing, documentation, and release workflows to reduce manual effort, improve consistency, and support better delivery outcomes. It does not replace teams or remove core engineering controls.",
  },
  {
    question: "How is this different from just using AI coding tools?",
    answer:
      "AI coding tools usually focus on helping individual developers write or review code. AI-enabled software delivery looks at the full lifecycle, including planning, development, testing, documentation, release readiness, CI/CD workflows, governance, and quality engineering.",
  },
  {
    question: "Who remains accountable for code and release decisions?",
    answer:
      "Your team remains accountable. AI can support developers, testers, and delivery leads, but code quality, approvals, release decisions, and production changes should stay under human control with clear review steps.",
  },
  {
    question: "Does this reduce the need for developers or QA engineers?",
    answer:
      "No. The goal is to augment delivery teams, not replace them. AI can help with repetitive work, summaries, test support, documentation, and pattern detection so developers and QA professionals can focus on higher value engineering decisions.",
  },
  {
    question: "Can AI-enabled delivery work with our current SDLC and CI/CD pipelines?",
    answer:
      "Yes. Neural Solutions designs AI-enabled delivery workflows around your existing tools, repositories, ticketing systems, CI/CD pipelines, QA processes, and release practices wherever technically feasible.",
  },
  {
    question: "How do you manage risk when AI is involved in software delivery?",
    answer:
      "We use controls such as human review, validation steps, testing requirements, access permissions, audit trails, secure tool configuration, monitoring, and governance practices to keep AI use transparent and controlled.",
  },
  {
    question: "Is AI-enabled software delivery suitable for regulated environments?",
    answer:
      "Yes, when designed carefully. AI-enabled delivery can support regulated environments by improving traceability, documentation, consistency, review workflows, and audit readiness across the software delivery lifecycle.",
  },
  {
    question: "What parts of the SDLC can AI help with?",
    answer:
      "AI can support requirements analysis, code generation, refactoring, code review, test generation, test coverage improvement, defect analysis, documentation, release note creation, CI/CD insights, deployment risk review, and knowledge management.",
  },
  {
    question: "Do you help teams create AI usage guidelines for developers?",
    answer:
      "Yes. Neural Solutions can help create practical AI usage guidelines for engineering teams, including acceptable use, code review expectations, data protection rules, tool approval processes, and governance standards.",
  },
];

const AIEnabledSoftwareDelivery = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    deliveryChallenge: "",
    tools: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `AI-enabled Software Delivery Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Part of software delivery to improve: ${formData.deliveryChallenge}
Tools/systems currently used: ${formData.tools}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="AI-enabled Software Delivery | Neural Solutions"
        description="Neural Solutions applies AI across the software delivery lifecycle to improve code quality, testing, documentation, release readiness, and engineering productivity."
        keywords="AI-enabled software delivery, AI software development, AI testing automation, AI code review, CI/CD automation, DevOps AI, QA automation, engineering productivity"
        canonical="https://neuralsolutions.ca/services/ai-enabled-software-delivery"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              AI-enabled Software Delivery
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              AI-enabled Software Delivery for Faster, More Reliable Releases
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We apply AI across the software delivery lifecycle to improve code quality, reduce manual effort, and help teams deliver software faster without compromising reliability, security, or governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-audit" className="group">
                  Book Now
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="#use-cases" className="group">
                  Explore SDLC Use Cases
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
              <Link to="/services/ai-solutions" className="hover:text-foreground transition-colors">AI Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">AI-enabled Software Delivery</span>
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
              We apply AI where software delivery actually benefits
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              Neural Solutions helps teams apply AI directly inside the software development lifecycle as part of everyday engineering workflows. Our focus is practical AI adoption that supports developers, testers, and delivery teams without disrupting the processes they already rely on.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              We integrate AI into planning, development, testing, documentation, and release activities to help teams improve speed, consistency, and quality while maintaining control and accountability.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              Whether your team needs help with code review support, test automation, release readiness, documentation, or CI/CD workflow improvements, we design AI-enabled delivery systems that fit your existing tools and governance requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How we implement AI-enabled software delivery across the SDLC */}
      <section id="use-cases" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              How we implement AI-enabled software delivery across the SDLC
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">AI-assisted code development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We apply AI tools and workflows to support code generation, refactoring, code review, and developer productivity while keeping engineering standards and human review in place.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Code generation support",
                    "Refactoring assistance",
                    "Pull request summaries",
                    "Code review support",
                    "Engineering standards checks"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">AI-augmented testing & quality engineering</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We use AI to improve test coverage, identify edge cases, generate test scenarios, and optimize test execution across unit, integration, regression, and acceptance testing.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Test case generation",
                    "Unit test coverage improvement",
                    "Regression test optimization",
                    "Edge case discovery",
                    "QA workflow automation"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Intelligent defect detection & analysis</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We apply AI to analyze defects, logs, traces, performance data, and historical issue patterns so teams can surface problems earlier in the delivery cycle.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Log analysis",
                    "Defect pattern detection",
                    "Root cause support",
                    "Performance issue summaries",
                    "Incident trend analysis"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">AI-driven documentation & knowledge support</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We automate parts of documentation creation and maintenance so codebases, systems, and release processes are easier to understand over time.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Codebase documentation",
                    "Release note drafts",
                    "Technical summaries",
                    "Internal knowledge assistants",
                    "Onboarding documentation"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Release & deployment optimization</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We use AI-assisted insights to support release readiness, deployment risk assessment, and CI/CD pipeline decisions while keeping final approval under team control.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Release readiness checks",
                    "Deployment risk summaries",
                    "CI/CD pipeline insights",
                    "Change impact analysis",
                    "Rollback planning support"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Governance & responsible AI in delivery</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We help teams use AI in software delivery with clear controls, human review, security practices, and governance standards.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "AI usage guidelines",
                    "Human in the loop review",
                    "Audit trails",
                    "Secure tool adoption",
                    "Compliance-aware delivery workflows"
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
              AI consultancy & implementation case studies
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
                  Helping teams understand where AI can support the software delivery lifecycle without adding risk or unnecessary complexity.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI readiness assessment",
                    "SDLC workflow review",
                    "Engineering tool audit",
                    "Use case discovery and prioritization",
                    "AI adoption roadmap",
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
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Experimentation</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6">Started testing AI tools</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Guiding teams through early AI-enabled delivery pilots, tool validation, and workflow experiments.
                </p>
                <ul className="space-y-2">
                  {[
                    "Prototype feasibility review",
                    "AI coding and testing workflow pilots",
                    "Tool selection and experimentation",
                    "MVP development and testing",
                    "Risk and governance review",
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
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Implementation</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6">Ready to scale AI across delivery</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Scaling AI-enabled software delivery into production engineering workflows with governance, monitoring, and clear team adoption.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI-enabled SDLC implementation",
                    "CI/CD and DevOps integration",
                    "Testing and QA automation support",
                    "Governance and approval workflows",
                    "Team training and adoption support",
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
                Ready to improve your software delivery lifecycle with AI?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your current development workflow, testing process, CI/CD pipeline, and where AI could help your team move faster without losing control.
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
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us about your delivery workflow</h3>
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
                      placeholder="What part of software delivery are you trying to improve?"
                      value={formData.deliveryChallenge}
                      onChange={(e) => setFormData({ ...formData, deliveryChallenge: e.target.value })}
                      className="pl-10 min-h-24"
                      required
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="What tools or systems does your team currently use?"
                      value={formData.tools}
                      onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
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
                      <option value="Testing AI tools">Testing AI tools</option>
                      <option value="Ready to implement">Ready to implement</option>
                      <option value="Existing workflow needs improvement">Existing workflow needs improvement</option>
                      <option value="Need help deciding">Need help deciding</option>
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

export default AIEnabledSoftwareDelivery;
