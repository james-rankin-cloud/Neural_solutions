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
import { ArrowRight, Check, User, Mail, Building2, Phone, MessageSquare, ChevronRight } from "lucide-react";
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

const services = [
  {
    title: "Custom AI application development",
    description:
      "We design and build AI powered applications from the ground up, tailored to your workflows, customers, data, and business goals.",
    useCases: [
      "Intelligent document processing",
      "Predictive analytics tools",
      "Internal AI assistants",
      "AI powered dashboards",
      "Workflow automation products",
    ],
  },
  {
    title: "AI agents development",
    description:
      "We design AI agents that can support complex tasks, automate workflows, coordinate across tools, and help teams move faster.",
    useCases: [
      "Process automation",
      "Customer support workflows",
      "Knowledge management",
      "Lead qualification",
      "Internal operations support",
    ],
  },
  {
    title: "Advanced RAG systems",
    description:
      "We build production grade retrieval augmented generation systems that help AI answer questions using your company's documents, data, and knowledge sources.",
    useCases: [
      "Internal knowledge assistants",
      "Document search and summarization",
      "Customer support knowledge bases",
      "Compliance and policy search",
      "Research assistants",
    ],
  },
  {
    title: "AI chatbot development",
    description:
      "We design and develop AI powered chatbots that improve customer engagement, answer common questions, capture leads, and reduce manual support work.",
    useCases: [
      "Website chatbots",
      "Customer service assistants",
      "Sales qualification bots",
      "Booking and intake assistants",
      "Internal help desk bots",
    ],
  },
  {
    title: "Prompt to SQL and database AI",
    description:
      "We build natural language database tools that allow users to ask business questions and receive accurate query results, summaries, and insights.",
    useCases: [
      "Conversational analytics",
      "Database search",
      "Internal reporting tools",
      "Multi database query routing",
      "Business intelligence assistants",
    ],
  },
  {
    title: "AI enabled workflow automation",
    description:
      "We connect AI into the systems your business already uses so repetitive work can be completed faster, cleaner, and with the right review steps in place.",
    useCases: [
      "CRM automation",
      "Email workflow automation",
      "Lead enrichment",
      "Report generation",
      "Data entry reduction",
    ],
  },
];

const benefits = [
  {
    title: "Built around your business",
    description:
      "We do not force your business into a generic AI product. We design around your workflows, data, team, customers, and operating model.",
  },
  {
    title: "No unnecessary vendor lock in",
    description:
      "We choose tools based on your goals, budget, infrastructure, and long term needs. The goal is to build systems that can grow with you instead of trapping you in one platform.",
  },
  {
    title: "Production first mindset",
    description:
      "We focus on systems that can actually run in a business environment, with error handling, testing, security, monitoring, and clear handoff built into the process.",
  },
  {
    title: "Flexible technology approach",
    description:
      "We can work with leading AI providers, open source models, cloud tools, vector databases, automation platforms, and custom software depending on what fits the project.",
  },
  {
    title: "Practical collaboration",
    description:
      "You work closely with technical builders who understand business workflows. We keep communication clear, explain tradeoffs, and help your team understand what is being built.",
  },
  {
    title: "Measurable outcomes",
    description:
      "Every AI product should connect to a real outcome, such as reduced manual work, faster response times, better reporting, improved lead quality, or cleaner customer experiences.",
  },
];

const relatedServices = [
  {
    title: "AI Strategy Consulting & Governance",
    description: "Define the right AI roadmap, policies, risks, and governance model before building.",
    href: "/services/ai-strategy-consulting-governance",
  },
  {
    title: "AI Agents & Automation",
    description: "Build AI agents and automated workflows that handle repetitive tasks across your tools.",
    href: "/services/ai-agents-automation",
  },
  {
    title: "Advanced RAG Systems",
    description: "Create AI knowledge systems that search, retrieve, and answer using your trusted business content.",
    href: "/services/advanced-rag-systems",
  },
  {
    title: "Machine Learning Engineering & MLOps",
    description: "Deploy and operate machine learning systems with monitoring, reliability, and continuous improvement.",
    href: "/services/ml-engineering",
  },
];

const faqs = [
  {
    question: "What is custom AI product development?",
    answer:
      "Custom AI product development is the process of building AI software specifically for your business needs, workflows, data, and users. Instead of using an off the shelf tool that only solves part of the problem, a custom AI product is designed around how your business actually operates.",
  },
  {
    question: "What types of AI products can Neural Solutions build?",
    answer:
      "Neural Solutions can build AI agents, internal knowledge assistants, AI chatbots, advanced RAG systems, prompt to SQL tools, reporting workflows, lead generation systems, document processing tools, customer intake assistants, and AI powered business applications.",
  },
  {
    question: "What AI technologies and tools do you work with?",
    answer:
      "We use the tools that fit the project. Depending on the use case, this may include LLM providers, open source models, vector databases, cloud platforms, automation tools, APIs, custom databases, and modern web application frameworks. The technology choice depends on your goals, budget, data, and existing systems.",
  },
  {
    question: "How do you reduce hallucinations and improve AI accuracy?",
    answer:
      "We improve accuracy through better retrieval, cleaner data structure, strong prompts, validation steps, human review flows, confidence checks, and ongoing monitoring. For knowledge based systems, we can use advanced RAG techniques such as custom chunking, metadata filtering, embeddings, reranking, and access controls.",
  },
  {
    question: "How long does it take to build a custom AI product?",
    answer:
      "Timelines depend on complexity. A small prototype may be built quickly, while a production grade AI product with integrations, governance, security, testing, and monitoring requires a more structured build. The first step is usually to define the use case, success metrics, data requirements, and implementation roadmap.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer:
      "Yes. We can connect AI products to your existing website, CRM, email tools, calendars, databases, dashboards, internal systems, and cloud infrastructure where technically feasible.",
  },
  {
    question: "Do we own the AI product after it is built?",
    answer:
      "The ownership model should be agreed on before the project starts. Our goal is to create clear expectations around code, data, access, documentation, and handoff so your team understands what they control and how the product can be maintained.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Neural Solutions can help with monitoring, improvements, bug fixes, prompt updates, workflow changes, performance reviews, and new feature development after launch.",
  },
  {
    question: "How do you make sure the AI product creates business value?",
    answer:
      "We define the business problem first, then connect the AI product to measurable outcomes such as time saved, faster response times, improved lead quality, lower manual admin, better reporting, or improved customer experience.",
  },
];

const CustomAIProductDevelopment = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    integrations: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Custom AI Product Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Product Type: ${formData.productType}
Systems/Tools to Connect: ${formData.integrations}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Custom AI Product Development | Neural Solutions"
        description="Neural Solutions builds custom AI products, AI agents, chatbots, RAG systems, and intelligent automation tools designed for real business workflows and production use."
        keywords="custom AI product development, AI agents, AI chatbots, RAG systems, intelligent automation, AI applications, custom AI software"
        canonical="https://neuralsolutions.ca/services/custom-ai-product-development"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              Custom AI Product Development
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              Custom AI Product Development
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Neural Solutions builds custom AI products designed for real business use. We create AI agents, automation
              systems, chatbots, RAG tools, and intelligent applications that help teams save time, improve decisions,
              and operate more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-audit" className="group">
                  Book Now
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services" className="group">
                  Explore AI Products
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="font-sans text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link to="/services" className="font-sans text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link
                to="/services/ai-solutions"
                className="font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                AI Solutions
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <span className="font-sans text-foreground">Custom AI Product Development</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-12 px-6 border-y border-border bg-secondary/30">
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
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Build production ready AI solutions tailored to your business
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                Unlike generic AI tools or rigid platform based solutions, our custom AI product development approach
                gives you more control over how the system works, how it connects to your data, and how it fits into
                your business.
              </p>
              <p>
                We build AI products using a tool flexible approach that helps reduce vendor lock in, improve
                reliability, and support better accuracy, security, and governance from the start.
              </p>
              <p>
                Whether you need intelligent automation, customer facing AI assistants, internal knowledge tools,
                reporting systems, or domain specific AI applications, we design solutions that integrate with your
                existing tools and scale with your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Development Services */}
      <section id="services" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              AI development services we offer
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                  <h3 className="font-sans text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="font-sans text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">
                      Use cases
                    </span>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 font-sans text-sm text-foreground">
                          <Check size={14} className="text-foreground mt-0.5 shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
                    <div className={`${s.logoBg} rounded-[1.25rem] p-4 shrink-0 w-fit border border-border`}>
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
        </div>
      </section>

      {/* Why Choose Neural Solutions */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              Why choose Neural Solutions for custom AI development?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                  <h3 className="font-sans text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              Related AI services
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link
                  to={service.href}
                  className="group block bg-secondary/30 rounded-[1.25rem] p-8 border border-border hover:border-foreground transition-all"
                >
                  <h3 className="font-sans text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
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
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Ready to build a custom AI product for your business?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your AI product idea, current workflows, data, and
                the business outcome you want to create.
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
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us what you want to build</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name"
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
                      placeholder="What type of AI product are you looking to build?"
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="pl-10 min-h-20"
                      required
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="What systems or tools should it connect to?"
                      value={formData.integrations}
                      onChange={(e) => setFormData({ ...formData, integrations: e.target.value })}
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
                      <option value="Idea">Idea</option>
                      <option value="Prototype">Prototype</option>
                      <option value="Ready to build">Ready to build</option>
                      <option value="Need help deciding">Need help deciding</option>
                      <option value="Already launched and need improvements">
                        Already launched and need improvements
                      </option>
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

export default CustomAIProductDevelopment;
