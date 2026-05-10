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
    question: "What is an AI agent?",
    answer:
      "An AI agent is a software system that uses AI models, business logic, and integrations to complete tasks, make decisions, and interact with users or systems toward a defined goal. A good AI agent should have clear boundaries, reliable workflows, and the right human review steps where needed.",
  },
  {
    question: "Can AI agents integrate with our existing business systems?",
    answer:
      "Yes. Neural Solutions designs AI agents to connect with existing tools such as CRMs, calendars, email platforms, websites, databases, spreadsheets, APIs, and internal systems where technically feasible.",
  },
  {
    question: "How do you manage risk and governance for AI automation?",
    answer:
      "We design AI automation with controls from the start. This can include access permissions, audit trails, monitoring, approval workflows, human review, error handling, data handling rules, and documentation so the system operates within clear boundaries.",
  },
  {
    question: "How is intelligent automation different from traditional automation?",
    answer:
      "Traditional automation follows fixed rules. Intelligent automation combines AI, business logic, data, and integrations so workflows can handle more complex inputs, support decisions, summarize information, route tasks, and adapt to more variable business processes.",
  },
  {
    question: "Do AI agents require human oversight?",
    answer:
      "Often, yes. For sensitive workflows, customer facing responses, financial decisions, or anything that requires accuracy and accountability, we design human in the loop steps so people can review, approve, or handle exceptions.",
  },
  {
    question: "Is intelligent automation suitable for regulated industries?",
    answer:
      "Yes, when it is designed carefully. AI agents and automation can support regulated environments when there are clear controls, access rules, documentation, monitoring, review workflows, and compliance focused design.",
  },
  {
    question: "What types of workflows can AI agents automate?",
    answer:
      "AI agents can support lead qualification, customer intake, follow up emails, CRM updates, document summaries, internal research, reporting, ticket routing, scheduling, knowledge search, and repetitive admin work.",
  },
  {
    question: "How long does it take to build an AI agent?",
    answer:
      "Timelines depend on the workflow complexity, the systems involved, the quality of the data, and the level of governance required. A simple prototype can usually be planned faster than a production system with integrations, monitoring, security, and human review.",
  },
  {
    question: "Do you only build agents, or do you also help identify automation opportunities?",
    answer:
      "We help with both. Neural Solutions can assess your workflows, identify where AI agents can create value, prioritize use cases, build the automation roadmap, and then implement the approved systems.",
  },
];

const AIAgentsIntelligentAutomation = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    workflow: "",
    tools: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `AI Automation Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Workflow to automate: ${formData.workflow}
Tools/systems to connect: ${formData.tools}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="AI Agents & Intelligent Automation | Neural Solutions"
        description="Neural Solutions builds AI agents and intelligent automation systems that streamline workflows, reduce manual effort, and support scalable business operations."
        keywords="AI agents, intelligent automation, workflow automation, business process automation, AI assistants, CRM automation, lead qualification automation"
        canonical="https://neuralsolutions.ca/services/ai-agents-intelligent-automation"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              AI Agents & Intelligent Automation
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              AI Agents & Intelligent Automation
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline workflows, reduce manual effort, and support scalable, reliable operations with AI agents built around your business processes.
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
                  Explore Automation Use Cases
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
              <span className="text-foreground">AI Agents & Intelligent Automation</span>
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              We apply AI where automation actually delivers value
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              Neural Solutions helps businesses move beyond basic automation by designing AI agents and intelligent automation systems that operate inside real business workflows. We focus on practical use cases where AI can support decisions, coordinate tasks, reduce manual effort, and interact with tools reliably.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              Our approach combines AI models, business logic, integrations, and governance so automation is useful, maintainable, and aligned with how your team actually works.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              Whether you need customer intake automation, CRM updates, lead qualification, reporting workflows, internal assistants, or multi step process automation, we design systems that connect into your existing tools and include the right control points.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What we do */}
      <section id="use-cases" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              What we do
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">AI agent design & development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We design and build AI agents that perform specific tasks, coordinate workflows, and interact with users, tools, and systems based on defined goals and clear boundaries.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Lead qualification agents",
                    "Customer intake agents",
                    "Internal operations agents",
                    "Research and reporting agents",
                    "Follow up and reminder agents"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Workflow & process automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We automate multi step business processes by combining AI driven decision support, rules based logic, and integrations with the tools your team already uses.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "CRM updates",
                    "Email routing",
                    "Form intake",
                    "Quote request workflows",
                    "Reporting and admin automation"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">LLM powered assistants</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We develop intelligent assistants using large language models to support customer service, internal operations, knowledge search, and repetitive communication tasks.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Website assistants",
                    "Internal knowledge assistants",
                    "Customer support assistants",
                    "Sales support assistants",
                    "Employee help desk assistants"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">System integration & orchestration</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We connect AI agents with your existing systems, APIs, databases, CRMs, calendars, email platforms, and data sources so workflows can run across your business instead of staying isolated.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "CRM integration",
                    "Calendar and booking integration",
                    "Email automation",
                    "Database workflows",
                    "API orchestration"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Human in the loop automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We design automation workflows that include human review, approvals, exception handling, and escalation where accuracy, compliance, or customer experience matters.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Approval workflows",
                    "Quality checks",
                    "Escalation paths",
                    "Sensitive customer requests",
                    "High impact business decisions"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Monitoring, governance & control</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We implement controls, monitoring, documentation, and governance practices to help manage performance, reliability, security, and risk across automated systems.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Workflow monitoring",
                    "Audit trails",
                    "Access controls",
                    "Error handling",
                    "Performance review"
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
                  Helping clients understand AI automation, identify practical opportunities, and build a roadmap.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI readiness assessment",
                    "AI education and awareness workshops",
                    "Use case discovery and prioritization",
                    "Workflow and tool review",
                    "Automation opportunity roadmap",
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
                  <p className="font-sans text-sm text-muted-foreground mb-6">Started working on a prototype</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Guiding clients through initial AI agent design, automation testing, and workflow validation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Prototype feasibility review",
                    "Model selection and experimentation",
                    "MVP development and testing",
                    "Workflow validation",
                    "ROI and effort assessment",
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
                  <p className="font-sans text-sm text-muted-foreground mb-6">Have a working prototype</p>
                </div>
                <p className="font-sans text-sm text-foreground mb-6 leading-relaxed">
                  Scaling, optimizing, and deploying AI agents and intelligent automation into real business operations.
                </p>
                <ul className="space-y-2">
                  {[
                    "MLOps and deployment strategy",
                    "Production grade AI integration",
                    "AI governance and scalability plan",
                    "Monitoring and error handling",
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
                Ready to automate the workflows slowing your team down?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your current workflows, where manual work is piling up, and how AI agents or intelligent automation could help.
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
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us what you want to automate</h3>
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
                      placeholder="What workflow are you hoping to automate?"
                      value={formData.workflow}
                      onChange={(e) => setFormData({ ...formData, workflow: e.target.value })}
                      className="pl-10 min-h-24"
                      required
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="What tools or systems should it connect to?"
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
                      <option value="Experimentation">Experimentation</option>
                      <option value="Implementation">Implementation</option>
                      <option value="Need help deciding">Need help deciding</option>
                      <option value="Existing automation needs improvement">Existing automation needs improvement</option>
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

export default AIAgentsIntelligentAutomation;
