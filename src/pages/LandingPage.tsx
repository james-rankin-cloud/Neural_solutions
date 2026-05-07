import { ArrowRight, Minus, Plus, ShieldCheck, Workflow, User, Mail, MessageSquare, Calendar } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarEmbed from "@/components/CalendarEmbed";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agelessLivingLogo from "@/assets/ageless-living.jpg";
import harrisonForbesLogo from "@/assets/harrisonforbes.jpg";

const stats = [
  { value: "25+", label: "Workflows automated" },
  { value: "120K+", label: "Manual tasks reduced" },
  { value: "40%", label: "Average efficiency gain" },
  { value: "24/7", label: "Systems running" },
];

const services = [
  {
    title: "AI workflow automation",
    image: "/images/service-1.jpg",
  },
  {
    title: "AI integration and internal tools",
    image: "/images/service-2.jpg",
  },
];

const features = [
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Clear operational systems",
    description:
      "We map your processes, identify bottlenecks, and design AI powered workflows that remove repetitive work from your team.",
    cta: "Get in Touch",
    image: "/images/feature-1.jpg",
    reverse: false,
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Automation that performs",
    description:
      "We build reliable systems that connect your tools, automate handoffs, and give your team visibility across the full operation.",
    cta: "Get in Touch",
    image: "/images/feature-2.jpg",
    reverse: true,
  },
];

const steps = [
  {
    number: "1",
    title: "Workflow assessment",
    description:
      "We analyze your current operations and uncover where time, money, and focus are being lost.",
    image: "/images/process-1.jpg",
  },
  {
    number: "2",
    title: "System design",
    description:
      "We turn your business needs into a clear automation roadmap with practical implementation steps.",
    image: "/images/process-2.jpg",
  },
  {
    number: "3",
    title: "Build and optimize",
    description:
      "We launch your AI systems, monitor performance, and improve them as your business grows.",
    image: "/images/process-3.jpg",
  },
];

const oldModel = [
  "Manual admin work",
  "Disconnected software tools",
  "Slow lead follow up",
  "No clear data visibility",
  "Founder dependent operations",
  "Reactive task management",
  "Growth limited by team capacity",
];

const newModel = [
  "Automated workflow execution",
  "Connected AI powered systems",
  "Instant lead routing and response",
  "End to end operational visibility",
  "Scalable internal processes",
  "Proactive system alerts",
  "Growth supported by automation",
];

// Image error handling utility
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  target.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)';
  target.style.display = 'flex';
  target.style.alignItems = 'center';
  target.style.justifyContent = 'center';
  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E';
};

// Smooth scroll utility
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesPreview />
        <FeatureGrid />
        <HowItWorks />
        <GrowthPhilosophy />
        <Testimonials />
        <CaseStudiesPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black text-white">

      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Hero background"
          className="h-full w-full object-cover opacity-70"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] items-end justify-center px-5 pb-20 text-center md:px-8 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            AI systems that turn manual work into scalable operations.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            We help growing businesses automate workflows, streamline operations,
            and build AI powered systems that actually run.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              onClick={() => scrollToSection('contact')}
              className="inline-flex cursor-pointer items-center gap-3 rounded-md bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/85"
            >
              Book a Free Automation Audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              onClick={() => scrollToSection('services')}
              className="inline-flex cursor-pointer items-center gap-3 rounded-md border border-white/30 px-6 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-24 grid grid-cols-2 gap-8 opacity-40 md:grid-cols-6">
          {["Logo", "Partner", "Studio", "Cloud", "Systems", "AI Ops"].map(
            (logo) => (
              <div
                key={logo}
                className="flex h-10 items-center justify-center text-sm font-semibold uppercase tracking-widest text-black/50"
              >
                {logo}
              </div>
            )
          )}
        </div>

        <div className="relative">
          <p className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-[22vw] font-medium leading-none tracking-tight text-black/[0.035]">
            ABOUT
          </p>

          <div className="relative z-10 ml-auto max-w-xl">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              We are an AI automation consultancy dedicated to helping businesses
              remove manual work, improve speed, and scale with smarter systems.
              We turn operational complexity into working automation.
            </p>
          </div>

          <div className="relative z-10 mt-24 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-medium tracking-tight md:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-black/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section id="services" className="relative bg-black px-5 py-24 text-white md:px-8 md:py-32">

      <div className="mx-auto max-w-[1200px] pt-16">
        <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight md:text-6xl">
          What problems we solve
        </h2>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ImageCard key={service.title} title={service.title} image={service.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="group relative h-[360px] overflow-hidden rounded-2xl bg-neutral-900">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-7">
        <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </div>
    </article>
  );
}

function FeatureGrid() {
  return (
    <section className="bg-[#E5E5E5] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="grid gap-4 md:grid-cols-[0.9fr_1.45fr]"
          >
            {!feature.reverse && <FeatureTextCard {...feature} />}
            <div
              className={`min-h-[360px] overflow-hidden rounded-2xl bg-neutral-800 ${
                feature.reverse ? "md:order-first" : ""
              }`}
            >
              <img
                src={feature.image}
                alt=""
                className="h-full w-full object-cover"
                onError={handleImageError}
              />
            </div>
            {feature.reverse && <FeatureTextCard {...feature} />}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureTextCard({
  icon,
  title,
  description,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <article className="flex min-h-[360px] flex-col rounded-2xl bg-white p-8 md:p-10">
      <div>{icon}</div>
      <div className="mt-12">
        <h3 className="text-3xl font-medium tracking-tight">{title}</h3>
        <p className="mt-6 max-w-md text-base leading-relaxed text-black/75">
          {description}
        </p>
      </div>
      <a
        onClick={() => scrollToSection('contact')}
        className="mt-auto inline-flex cursor-pointer items-center gap-3 text-sm font-medium"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function HowItWorks() {
  return (
    <section id="process" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">
          How it works
        </h2>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative h-[430px] overflow-hidden rounded-2xl bg-neutral-900"
            >
              <img
                src={step.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/20 text-sm text-white backdrop-blur">
                {step.number}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-4 border-t border-white/20 pt-4 text-sm leading-relaxed text-white/85">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthPhilosophy() {
  return (
    <section className="relative bg-black px-5 py-24 text-white md:px-8 md:py-32">

      <div className="mx-auto max-w-[1000px] pt-16">
        <h2 className="text-center text-5xl font-medium tracking-tight md:text-6xl">
          Our automation philosophy
        </h2>

        <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <h3 className="mb-8 text-center text-2xl font-medium">
              Traditional Operations
            </h3>
            <div className="space-y-4">
              {oldModel.map((item) => (
                <ComparisonRow key={item} tone="dark" icon="minus" text={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-center text-2xl font-medium">
              AI Powered Model
            </h3>
            <div className="space-y-4">
              {newModel.map((item) => (
                <ComparisonRow key={item} tone="light" icon="plus" text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({
  tone,
  icon,
  text,
}: {
  tone: "dark" | "light";
  icon: "minus" | "plus";
  text: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-md px-4 py-4 text-sm font-medium ${
        tone === "dark"
          ? "bg-[#151515] text-white"
          : "bg-white text-black"
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded ${
          tone === "dark" ? "bg-black" : "bg-black/5"
        }`}
      >
        {icon === "minus" ? (
          <Minus className="h-4 w-4" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </span>
      {text}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-black px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl">
          What our clients say
        </h2>

        <article className="mt-20 grid overflow-hidden rounded-2xl bg-white text-black md:grid-cols-[0.8fr_1.1fr]">
          <div className="min-h-[380px] bg-neutral-900">
            <img
              src="/images/testimonial.jpg"
              alt=""
              className="h-full w-full object-cover grayscale"
              onError={handleImageError}
            />
          </div>

          <div className="flex min-h-[380px] flex-col p-8 md:p-12">
            <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              "Working with Neural Solutions helped us remove repetitive admin,
              respond to leads faster, and create a cleaner operating system for
              growth."
            </p>

            <div className="mt-8">
              <p className="font-medium">Client Partner</p>
              <p className="text-sm text-black/55">Founder, Service Business</p>
            </div>

            <div className="mt-auto flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="flex gap-16">
                <div>
                  <div className="text-3xl font-medium">30%</div>
                  <p className="text-sm">less admin time</p>
                </div>
                <div>
                  <div className="text-3xl font-medium">2.4x</div>
                  <p className="text-sm">faster response time</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/40 transition hover:bg-black hover:text-white">
                  ←
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/40 transition hover:bg-black hover:text-white">
                  →
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  const caseStudies = [
    {
      name: "Ageless Living™",
      industry: "Health & Wellness",
      description: "Full digital transformation for a multi-location wellness brand across BC.",
      logo: agelessLivingLogo,
      logoBg: "bg-white",
      highlight: "6 integrated systems in one platform"
    },
    {
      name: "Harrison Forbes Electrical",
      industry: "Electrical Services",
      description: "One-page website + full business automation for residential and EV charging services.",
      logo: harrisonForbesLogo,
      logoBg: "bg-black",
      highlight: "0 leads lost to missed calls"
    }
  ];

  return (
    <section id="case-studies" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-5xl font-medium tracking-tight text-foreground md:text-6xl">
            Real projects, real results
          </h2>
          <p className="font-sans mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From wellness clinics to electrical contractors, see how we've helped BC businesses automate and scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="group border border-border rounded-[1.25rem] overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <div className={`${study.logoBg} flex items-center justify-center p-8 border-b border-border`}>
                <img
                  src={study.logo}
                  alt={`${study.name} logo`}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {study.industry}
                </span>
                <h3 className="font-sans mt-2 text-2xl font-bold text-foreground">
                  {study.name}
                </h3>
                <p className="font-sans mt-3 text-base text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-sans text-sm font-medium text-foreground">
                    {study.highlight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/case-studies" className="group font-sans">
              View All Case Studies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<"30min" | "45min">("30min");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:growth@neuralcoremarketing.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="border-y border-white/10 bg-black px-5 py-32 text-white md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
            Move beyond manual operations.
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-white/80">
            Align your tools, workflows, and team into one scalable AI powered system.
          </p>
        </div>

        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10">
            <TabsTrigger value="form" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <MessageSquare size={16} className="mr-2" />
              Contact Form
            </TabsTrigger>
            <TabsTrigger value="calendar" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <Calendar size={16} className="mr-2" />
              Book Meeting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <form onSubmit={handleSubmit} className="border border-white/20 rounded-[1.25rem] p-8 bg-white/5 space-y-6">
              <div className="relative">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <Input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <div className="relative">
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <Input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <div className="relative">
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <MessageSquare size={16} className="absolute left-3 top-3 text-white/60" />
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant={selectedMeeting === "30min" ? "default" : "outline"}
                onClick={() => setSelectedMeeting("30min")}
                className={`h-auto py-4 flex flex-col items-start ${
                  selectedMeeting === "30min"
                    ? "bg-white text-black"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <span className="font-semibold text-base">30-Min Discovery Call</span>
                <span className="text-xs opacity-80 mt-1">Quick consultation</span>
              </Button>
              <Button
                variant={selectedMeeting === "45min" ? "default" : "outline"}
                onClick={() => setSelectedMeeting("45min")}
                className={`h-auto py-4 flex flex-col items-start ${
                  selectedMeeting === "45min"
                    ? "bg-white text-black"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <span className="font-semibold text-base">45-Min Strategy Session</span>
                <span className="text-xs opacity-80 mt-1">Comprehensive analysis</span>
              </Button>
            </div>

            <CalendarEmbed
              calLink={`james-rankin-jmigyc/${selectedMeeting}`}
              className="border-white/20"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
