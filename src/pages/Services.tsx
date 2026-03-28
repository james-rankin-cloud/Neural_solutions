import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Users,
  Cloud,
  Brain,
  Workflow,
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  ClipboardList,
  Headphones,
  Blocks,
  Server,
  Building2,
  FlaskConical,
  Cpu,
  Bot,
  Mail,
  Mic,
  Search,
  TrendingUp,
  Check,
} from "lucide-react";

const coreServices = [
  {
    icon: Globe,
    title: "Web & Mobile Development",
    desc: "Web and mobile applications give businesses a powerful way to reach new customers, better serve existing clients, and grow their market presence. We manage the full software development lifecycle with precision, ensuring smooth launches and high customer satisfaction from day one.",
    highlights: ["Cross-platform apps", "Full lifecycle management", "Scalable architecture"],
  },
  {
    icon: Users,
    title: "Team Outsourcing",
    desc: "Many of our clients choose to hand off their entire development process to our teams. The reason is simple: we deliver faster, more efficiently, and at a lower cost than building in-house.",
    highlights: ["Dedicated dev teams", "Faster delivery", "Cost-effective scaling"],
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    desc: "We've built and deployed software for clients across industries, providing cloud-based development and testing environments throughout. We offer application management across Amazon AWS, Microsoft Azure, and Oracle Cloud.",
    highlights: ["AWS, Azure, Oracle", "Production-grade infra", "Managed environments"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Bring intelligence into your existing workflows without rebuilding from scratch. We embed AI capabilities directly into your tools and platforms, from intelligent search and document processing to predictive analytics.",
    highlights: ["Predictive analytics", "Intelligent search", "Document processing"],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "We identify the repetitive, time-consuming tasks that drain your team and replace them with intelligent automation that runs around the clock. CRM triggers, data pipelines, client communication, and reporting.",
    highlights: ["24/7 automation", "CRM workflows", "Data pipelines"],
  },
  {
    icon: Bot,
    title: "AI Assistants",
    desc: "Deploy conversational AI that actually understands your business. Custom voicemail systems, email responders, and chat assistants trained on your specific data, handling client inquiries with accuracy and a human touch.",
    highlights: ["AI voicemail", "Email responders", "Custom chatbots"],
  },
];

const itSolutions = [
  { icon: Building2, label: "Enterprise software architecture" },
  { icon: Code2, label: "Web application development" },
  { icon: Brain, label: "AI consulting and integration services" },
  { icon: Blocks, label: "API development and integration" },
  { icon: Server, label: "Enterprise open-source development" },
  { icon: Cpu, label: "Microsoft enterprise app development" },
  { icon: FlaskConical, label: "LIMS development" },
  { icon: Smartphone, label: "Mobile application development" },
  { icon: Palette, label: "UI design and interface optimization" },
  { icon: BarChart3, label: "Data-driven analytical solutions" },
  { icon: ClipboardList, label: "Business analysis and workflow design" },
  { icon: Headphones, label: "Managed IT support services" },
  { icon: Search, label: "AI-powered search and retrieval" },
  { icon: Mail, label: "Intelligent email automation" },
  { icon: Mic, label: "AI voicemail and voice assistants" },
  { icon: TrendingUp, label: "Predictive analytics and forecasting" },
];

const Services = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6 relative grain">
      <div className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/[0.05] blur-3xl float" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">What We Do</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-4">
            We don't just talk about AI.
          </h1>
          <p className="font-serif text-3xl md:text-4xl italic text-primary mb-6">
            We make it work.
          </p>
          <p className="text-lg text-muted-foreground font-normal max-w-2xl leading-relaxed">
            From custom software and cloud infrastructure to AI integration and intelligent automation, we deliver end-to-end solutions that help businesses operate smarter and scale faster.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Core Services — Staggered card grid */}
    <section className="py-28 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Core Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-4">
            Six ways we move the needle.
          </h2>
          <p className="text-muted-foreground font-normal text-lg mb-16 max-w-2xl">
            Each service is built to solve a specific problem. Pick one, or let us combine them into a system that runs your business end to end.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {coreServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className={`gradient-border card-elevated p-8 h-full ${i === 0 || i === 5 ? "md:col-span-1" : ""}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground font-normal leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span key={h} className="font-mono text-[10px] uppercase tracking-wider text-primary/80 bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* IT Solutions Grid */}
    <section className="pb-28 px-6 relative z-10 atmosphere-dense">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Full Spectrum</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-4">
            A wide range of
          </h2>
          <p className="font-serif text-2xl md:text-3xl italic text-primary mb-16">IT solutions.</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itSolutions.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 40}>
              <div className="glass rounded-lg p-4 flex items-start gap-3 h-full">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground font-normal leading-snug">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-28 px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-[1.05] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground font-normal text-lg mb-10 max-w-xl mx-auto">
            Book a free audit and we'll map out exactly where AI and custom software can make the biggest impact on your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group">
              Book Your Free Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;