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
    question: "What are the key benefits of outsourcing software development?",
    answer:
      "Outsourcing software development gives your business access to specialized technical expertise without needing to hire a full in house team immediately. It can help accelerate delivery, reduce overhead, and give you flexible support for design, development, testing, deployment, and maintenance.",
  },
  {
    question: "How do I know Neural Solutions is a true partner and not just an execution vendor?",
    answer:
      "Neural Solutions focuses on business outcomes, not just writing code. We help clarify requirements, challenge assumptions, explain technical tradeoffs, and build software around the workflow, users, and goals behind the project.",
  },
  {
    question: "What engagement model should I choose?",
    answer:
      "The right model depends on your project. A fixed scope project can work well for a clearly defined build, while ongoing development support is better for evolving products, long term platforms, and businesses that need continuous improvements after launch.",
  },
  {
    question: "How important are architecture and technology choices?",
    answer:
      "Architecture and technology choices affect scalability, security, cost, maintainability, and future hiring. We help choose tools based on your goals, budget, timeline, team capabilities, and long term needs instead of forcing one specific stack.",
  },
  {
    question: "How do communication and project governance work?",
    answer:
      "Successful projects need clear communication, defined decision making, regular updates, and feedback loops. We keep project scope, priorities, timelines, responsibilities, and next steps visible so everyone stays aligned throughout the build.",
  },
  {
    question: "How quickly can we start, and what does the launch process look like?",
    answer:
      "The process usually starts with a discovery conversation to understand your goals, current systems, requirements, and timeline. From there, we define scope, recommend an approach, create a roadmap, and move into design and development once the plan is aligned.",
  },
  {
    question: "How can I evaluate engineering quality and testing practices?",
    answer:
      "Engineering quality shows up in the daily process. We focus on clean implementation, testing, code review, maintainable structure, performance, security considerations, and clear documentation so the product can continue improving after launch.",
  },
  {
    question: "How does Neural Solutions handle security, compliance, and intellectual property?",
    answer:
      "Security, compliance, and ownership expectations should be defined early in the project. We can help set access controls, follow secure development practices, document technical decisions, and clarify code, data, and handoff expectations before work begins.",
  },
  {
    question: "How should I think about cost when building custom software?",
    answer:
      "Cost should be viewed in terms of total value, not just hourly rates. Scope clarity, architecture quality, communication, testing, and maintainability all affect long term cost. A cheaper build can become expensive if it creates rework, instability, or technical debt.",
  },
  {
    question: "What happens after the software is delivered?",
    answer:
      "After launch, software usually needs monitoring, improvements, bug fixes, user feedback updates, performance optimization, and new features. Neural Solutions can support ongoing maintenance, enhancements, and handoff so the system remains useful as your business grows.",
  },
];

const CustomSoftwareDevelopment = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    softwareType: "",
    problemToSolve: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Custom Software Development Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Software type: ${formData.softwareType}
Problem to solve: ${formData.problemToSolve}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Custom Software Development Services | Neural Solutions"
        description="Neural Solutions builds custom software, web applications, business platforms, dashboards, portals, and automation systems that help companies operate more efficiently and scale."
        keywords="custom software development, web application development, business software, custom platforms, software engineering, SaaS development, dashboard development, portal development"
        canonical="https://neuralsolutions.ca/services/custom-software-development"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              Custom Software Development Services
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              Custom Software Development Services
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Neural Solutions helps businesses build custom software that improves operations, supports growth, and creates new digital capabilities. We design and develop web applications, portals, dashboards, automation systems, and business tools built around your workflows.
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
                  Explore Software Services
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
              <span className="text-foreground">Custom Software Development</span>
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
              You envision. We engineer.
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              Neural Solutions combines software engineering, product thinking, and practical delivery to build custom digital solutions that scale with your customers, processes, and long term growth strategy.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              We help reduce development risk, improve time to market, and create software that is easier to maintain through clear planning, structured development, testing, and transparent communication.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              Whether you need a new web application, internal tool, customer portal, automation platform, dashboard, or modernization of an existing system, we guide your project from discovery through deployment and long term support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Transform ideas into impact */}
      <section id="services" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              Transform ideas into impact
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Full cycle software development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We build custom software from initial concept to launch using modern architecture, clean development practices, and practical product planning.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Web applications",
                    "Customer portals",
                    "Internal business tools",
                    "SaaS platforms",
                    "Admin dashboards",
                    "Workflow systems"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Web and mobile application development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We design and develop responsive web and mobile experiences that are fast, reliable, and built around the way users actually interact with your business.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Marketing websites",
                    "Web apps",
                    "Mobile friendly platforms",
                    "Booking systems",
                    "Client portals",
                    "Service marketplaces"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Quality assurance and software testing</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We help make software more stable, secure, and production ready through structured testing, code review, automation, and quality checks.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Functional testing",
                    "Regression testing",
                    "Test automation",
                    "Performance testing",
                    "Bug fixing",
                    "Release validation"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Support, optimization and long term maintenance</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We support software after launch by improving performance, resolving issues, reducing technical debt, adding new features, and keeping systems reliable as your business grows.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Bug fixes",
                    "Feature improvements",
                    "Performance optimization",
                    "Cloud cost review",
                    "Technical debt cleanup",
                    "Ongoing support"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Legacy software modernization</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We help modernize outdated systems without disrupting business critical operations. We review the current architecture, identify risks, and create a phased plan for improvement.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Legacy application review",
                    "Architecture modernization",
                    "Migration planning",
                    "UI improvements",
                    "Database updates",
                    "Cloud migration support"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Software integrations and automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We connect your software tools, data, and workflows so your systems work together instead of creating manual admin work for your team.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "CRM integrations",
                    "API integrations",
                    "Payment systems",
                    "Email and calendar workflows",
                    "Data syncing",
                    "Automation between tools"
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
              Custom software development case studies
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
                  Helping clients understand their needs, define the opportunity, and create a clear software roadmap.
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
                  Guiding clients through structured development, product validation, and quality focused delivery.
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
                  Scaling, optimizing, and launching software into production with the right support plan in place.
                </p>
                <ul className="space-y-2">
                  {[
                    "DevOps and deployment strategy",
                    "Production grade implementation",
                    "Performance optimization",
                    "Monitoring and issue resolution",
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
                Ready to build custom software around your business?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your idea, current workflow, users, systems, and what it would take to build a reliable software solution.
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
                      placeholder="What type of software are you looking to build?"
                      value={formData.softwareType}
                      onChange={(e) => setFormData({ ...formData, softwareType: e.target.value })}
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
                      <option value="Ready to build">Ready to build</option>
                      <option value="Have an existing product">Have an existing product</option>
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

export default CustomSoftwareDevelopment;
