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
    question: "How long does it take to implement AI solutions with Neural Solutions?",
    answer:
      "Timelines depend on the complexity of the use case, the quality of the available data, and the number of integrations required. A focused AI strategy or readiness assessment can often be completed quickly, while production grade systems with automation, security, governance, and testing require a more structured rollout.",
  },
  {
    question: "How does Neural Solutions make sure AI initiatives deliver real business value?",
    answer:
      "We start with the business problem first. Before building anything, we identify the workflow, estimate the value of solving it, review the data and tools involved, and define how success will be measured. This helps avoid building AI systems that look impressive but do not create measurable impact.",
  },
  {
    question: "How does Neural Solutions support organizations at different stages of AI maturity?",
    answer:
      "We support businesses from early discovery to full implementation. If you are just starting, we help identify use cases and create a roadmap. If you already have a prototype, we help validate it, improve it, and prepare it for production. If you are ready to scale, we help with governance, deployment, monitoring, and adoption.",
  },
  {
    question: "How does Neural Solutions approach AI governance?",
    answer:
      "We build governance directly into the AI strategy. This can include AI usage policies, data handling rules, approval workflows, human review processes, access controls, monitoring, and documentation. The goal is to make AI useful while keeping it safe, auditable, and aligned with the way your business operates.",
  },
  {
    question: "What makes Neural Solutions' AI approach different?",
    answer:
      "We focus on practical AI systems that fit into real business workflows. Instead of pushing generic tools, we look at your operations, your data, your team, and your goals. Then we design systems that are useful, explainable, maintainable, and connected to measurable outcomes.",
  },
  {
    question: "What types of AI solutions does Neural Solutions build?",
    answer:
      "We build AI agents, workflow automations, advanced RAG systems, prompt to SQL tools, internal knowledge assistants, customer support assistants, reporting workflows, lead generation systems, and custom AI integrations.",
  },
  {
    question: "What results can clients expect when working with Neural Solutions?",
    answer:
      "Clients can expect clearer AI priorities, better workflow visibility, faster response times, reduced manual admin, stronger data controls, and a more structured path from AI idea to production ready system.",
  },
  {
    question: "Do you only provide strategy, or do you also build the solution?",
    answer:
      "We can support both. Neural Solutions can help define the AI strategy, create the governance framework, design the roadmap, and build the approved AI systems, automations, dashboards, agents, and integrations.",
  },
];

const AIStrategyConsultingGovernance = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `AI Strategy Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Stage: ${formData.stage}

Message:
${formData.message}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="AI Strategy Consulting & Governance | Neural Solutions"
        description="Strategic AI implementation with built in governance frameworks. Neural Solutions helps businesses deploy ethical, compliant, and auditable AI systems."
        keywords="AI strategy consulting, AI governance, AI implementation, machine learning solutions, NLP, computer vision, AI compliance, ethical AI"
        canonical="https://neuralsolutions.ca/services/ai-strategy-consulting-governance"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              AI Strategy & Governance
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              AI Strategy Consulting & Governance
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Strategic AI implementation with built in governance frameworks. We help you deploy machine learning, NLP,
              and computer vision solutions that are ethical, compliant, and auditable from day one.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-audit" className="group">
                Book Now
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              From AI demos to production ready business results
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              We help you identify the right AI use cases, validate ROI within weeks, and build scalable solutions that
              perform reliably in production.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              Using both open source and proprietary components, we design AI systems that deliver accuracy,
              performance, and safety at business scale. Our work covers machine learning solutions, text analytics,
              natural language processing, computer vision, and advanced RAG architectures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How we can implement your AI strategy */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              How we can implement your AI strategy
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal delay={100}>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">AI agents & automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We build autonomous agents that handle complex workflow automation with multi agent coordination and
                  seamless API integrations.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Unlike generic framework based solutions, our approach provides stronger control over agent actions
                  and greater customization for your specific business requirements.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Advanced RAG systems</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  Our production grade RAG systems use custom chunking, advanced embeddings, and intelligent reranking
                  to improve accuracy for your specific content and use cases.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  We reduce generic framework limitations by optimizing each part of the retrieval pipeline with
                  metadata driven architectures, secure access controls, and content aware retrieval logic.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Prompt to SQL & database AI</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We develop natural language to SQL systems that understand your database schema and business rules,
                  allowing users to generate accurate queries from conversational input.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Our solutions can handle complex relationships, enforce custom business logic, and include smart query
                  routing for multi database environments.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <p className="font-sans text-lg text-foreground mb-6">Not sure which AI solution fits your business?</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-audit" className="group">
                  Book Now
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
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
                  Helping clients understand AI, identify opportunities, and build a roadmap.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI readiness assessment",
                    "AI education and awareness workshops",
                    "Use case discovery and prioritization",
                    "Workflow and tool review",
                    "AI opportunity roadmap",
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
                  Guiding clients through initial AI implementation and validation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Prototype feasibility review",
                    "Model selection and experimentation",
                    "MVP development and testing",
                    "ROI validation",
                    "Data and risk review",
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
                  Scaling, optimizing, and deploying AI into production.
                </p>
                <ul className="space-y-2">
                  {[
                    "MLOps and deployment strategy",
                    "Production grade AI integration",
                    "AI governance and scalability plan",
                    "Security and monitoring setup",
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
                Ready to build an AI strategy that actually works?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your AI goals, current workflows, and where
                automation or AI could create the most value.
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
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us what you are looking to build</h3>
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
                      placeholder="What are you hoping to use AI for?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pl-10 min-h-24"
                      required
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
                      <option value="Not sure yet">Not sure yet</option>
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

export default AIStrategyConsultingGovernance;
