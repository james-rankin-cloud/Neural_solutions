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
    desc: "Web and mobile applications give businesses a powerful way to reach new customers, better serve existing clients, and grow their market presence. A strong digital product makes a strong first impression. We manage the full software development lifecycle with precision, ensuring smooth launches and high customer satisfaction from day one.",
  },
  {
    icon: Users,
    title: "Software Development Team Outsourcing",
    desc: "Many of our clients choose to hand off their entire development process to our teams. The reason is simple: we deliver faster, more efficiently, and at a lower cost than building in-house. Let Neural Solutions handle your software development so you can stay focused on growing your business.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Hosting",
    desc: "We've built and deployed software for clients across industries, providing cloud-based development and testing environments throughout. Our expertise in cloud production has grown alongside the technology itself. We offer application management across Amazon AWS, Microsoft Azure, and Oracle Cloud.",
  },
  {
    icon: Brain,
    title: "AI Integration Services",
    desc: "Bring intelligence into your existing workflows without rebuilding from scratch. We embed AI capabilities directly into your tools and platforms, from intelligent search and document processing to predictive analytics and recommendation engines that learn and improve over time.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "We identify the repetitive, time-consuming tasks that drain your team and replace them with intelligent automation that runs around the clock. From client communication flows and data pipelines to CRM triggers and reporting, we build systems that handle the busywork so your people can focus on what matters.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistants",
    desc: "Deploy conversational AI that actually understands your business. We build custom AI voicemail systems, email responders, and chat assistants trained on your specific data, handling client inquiries 24/7 with accuracy and a human touch.",
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
    <section className="pt-32 pb-20 px-6 relative atmosphere grain">
      <div className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/[0.05] blur-3xl float" />
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full bg-accent/[0.04] blur-3xl float-delayed" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">What We Do</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            Services
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            From custom software and cloud infrastructure to AI integration and intelligent automation, we deliver end-to-end solutions that help businesses operate smarter and scale faster.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Core Services */}
    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {coreServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="gradient-border card-elevated p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                    <p className="text-foreground/70 font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* IT Solutions Grid */}
    <section className="pb-32 px-6 relative z-10 atmosphere-dense">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Full Spectrum</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-16">
            A wide range of <em className="not-italic text-gradient">IT solutions</em>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itSolutions.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 40}>
              <div className="glass rounded-lg p-4 flex items-start gap-3 h-full">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground font-light leading-snug">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-32 px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-10 max-w-xl mx-auto">
            Book a free audit and we'll map out exactly where AI and custom software can make the biggest impact on your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-audit" className="group cursor-none">
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
