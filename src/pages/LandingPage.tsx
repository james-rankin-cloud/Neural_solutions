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
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import agelessLivingLogo from "@/assets/ageless-living.jpg";
import harrisonForbesLogo from "@/assets/harrisonforbes.jpg";
import blueSkyHomecareLogo from "@/assets/blue-sky-homecare.png";
import aiSolutionsImage from "@/assets/home-page-ai-solutions.png";
import softwareDevelopmentImage from "@/assets/home-page-software-development.png";
import heroVideo from "@/assets/mp_.mp4";
import howItWorks1 from "@/assets/hp1.png";
import howItWorks2 from "@/assets/hp2.png";
import howItWorks3 from "@/assets/hp3.png";

const stats = [
  { value: "5", label: "Workflows automated" },
  { value: "15", label: "Manual tasks reduced" },
  { value: "40%", label: "Average efficiency gain" },
  { value: "24/7", label: "Systems running" },
];

const services = [
  {
    title: "AI Solutions",
    image: aiSolutionsImage,
    href: "/services/ai-solutions",
  },
  {
    title: "Software Development",
    image: softwareDevelopmentImage,
    href: "/services/software-development",
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
    image: howItWorks1,
  },
  {
    number: "2",
    title: "System design",
    description:
      "We turn your business needs into a clear automation roadmap with practical implementation steps.",
    image: howItWorks2,
  },
  {
    number: "3",
    title: "Build and optimize",
    description:
      "We launch your AI systems, monitor performance, and improve them as your business grows.",
    image: howItWorks3,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.neuralsolutions.cloud/#organization",
        "name": "Neural Solutions",
        "url": "https://www.neuralsolutions.cloud/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.neuralsolutions.cloud/logo.png"
        },
        "description": "AI automation, custom software development, and intelligent business solutions for Canadian enterprises",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Victoria",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "growth@neuralcoremarketing.com"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.neuralsolutions.cloud/#business",
        "name": "Neural Solutions",
        "image": "https://www.neuralsolutions.cloud/logo.png",
        "description": "We build AI systems, automations, and custom software that help businesses reduce manual work and grow faster",
        "url": "https://www.neuralsolutions.cloud/",
        "priceRange": "$$",
        "areaServed": ["Canada", "British Columbia", "Vancouver", "Victoria"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI and Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Strategy Consulting & Governance",
                "description": "Strategic AI roadmap development and governance frameworks"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Product Development",
                "description": "End-to-end AI product design and development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Agents & Intelligent Automation",
                "description": "Autonomous AI agents for business process automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Bespoke software solutions tailored to business needs"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.neuralsolutions.cloud/#website",
        "url": "https://www.neuralsolutions.cloud/",
        "name": "Neural Solutions",
        "description": "AI Automation and Custom Software for Canadian Businesses",
        "publisher": {
          "@id": "https://www.neuralsolutions.cloud/#organization"
        },
        "inLanguage": "en-CA"
      }
    ]
  };

  return (
    <>
      <SEO
        title="AI Automation and Custom Software for Canadian Businesses"
        description="Neural Solutions helps Canadian businesses automate operations, generate leads, integrate AI tools, and build custom software that saves time and improves growth."
        canonical="https://www.neuralsolutions.cloud/"
        keywords="AI automation Canada, AI consulting Vancouver, AI consulting Victoria BC, business automation, lead generation automation, custom software development, AI integration, workflow automation, Neural Solutions"
      />
      <StructuredData data={structuredData} />
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
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black text-white">

      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-90"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] items-end justify-center px-5 pb-16 text-center md:px-8 md:pb-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl md:leading-[0.95]">
            The AI-First Product Development Partner for Enterprise
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:mt-6 md:text-lg">
            We design, build, and operate mission-critical software for enterprise leaders, embedding AI across the full software lifecycle and directly into our clients' products, so they move faster, reduce costs, and unlock measurable business outcomes.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:mt-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="group w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-medium text-black shadow-lg shadow-white/20 transition-all duration-200 hover:bg-white/95 hover:shadow-xl hover:shadow-white/30 active:scale-[0.98] sm:px-7 sm:py-4.5"
            >
              Book a Free Automation Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:backdrop-blur-md hover:scale-[1.02] sm:px-7 sm:py-4.5"
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
    <section id="about" className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 md:mb-24">
          <p className="text-center text-xs uppercase tracking-wider text-black/60 mb-6 md:mb-8">Trusted By</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-16 flex-wrap">
            <div className="bg-gradient-to-br from-white to-gray-50/40 border border-black/10 rounded-xl p-6 flex items-center justify-center h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-56 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <img
                src={agelessLivingLogo}
                alt="Ageless Living"
                width="200"
                height="64"
                className="h-12 w-auto object-contain sm:h-14 md:h-16"
                loading="lazy"
              />
            </div>
            <div className="bg-black border border-black/10 rounded-xl p-6 flex items-center justify-center h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-56">
              <img
                src={harrisonForbesLogo}
                alt="Harrison Forbes Electrical"
                width="200"
                height="64"
                className="h-12 w-auto object-contain sm:h-14 md:h-16"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50/40 border border-black/10 rounded-xl p-6 flex items-center justify-center h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-56 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <img
                src={blueSkyHomecareLogo}
                alt="Blue Sky Home Care"
                width="200"
                height="64"
                className="h-12 w-auto object-contain sm:h-14 md:h-16"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <p className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-[22vw] font-medium leading-none tracking-tight text-black/[0.035] hidden sm:block">
            ABOUT
          </p>

          <div className="relative z-10 sm:ml-auto max-w-xl">
            <p className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              We are an AI automation consultancy dedicated to helping businesses
              remove manual work, improve speed, and scale with smarter systems.
              We turn operational complexity into working automation.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 grid-cols-2 md:mt-24 md:gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-gray-50/60 border border-gray-100/80 p-5 md:p-6">
                <div className="text-3xl font-medium tracking-tight sm:text-4xl md:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs text-black/75 sm:text-sm md:mt-3">{stat.label}</p>
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
    <section id="services" className="relative bg-black px-5 py-20 text-white md:px-8 md:py-32 lg:py-40">

      <div className="mx-auto max-w-[1200px] sm:pt-8 md:pt-16">
        <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
          What problems we solve
        </h2>

        <div className="mt-12 grid gap-6 sm:mt-16 md:mt-20 md:gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ImageCard key={service.title} title={service.title} image={service.image} href={service.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link to={href}>
      <article className="group relative h-[280px] overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer sm:h-[320px] md:h-[360px]">
        <img
          src={image}
          alt={`${title} - Neural Solutions service offering`}
          width="1200"
          height="800"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 sm:p-6 md:p-7">
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}

function FeatureGrid() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-gray-50 px-5 py-20 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1200px] gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="grid gap-4 md:grid-cols-[0.9fr_1.45fr]"
          >
            {!feature.reverse && <FeatureTextCard {...feature} />}
            <div
              className={`hidden md:block min-h-[360px] overflow-hidden rounded-2xl bg-neutral-800 ${
                feature.reverse ? "md:order-first" : ""
              }`}
            >
              <img
                src={feature.image}
                alt={`${feature.title} - workflow automation visualization`}
                width="1200"
                height="800"
                className="h-full w-full object-cover"
                onError={handleImageError}
                loading="lazy"
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
    <article className="flex min-h-[240px] flex-col rounded-2xl bg-gradient-to-br from-white via-white to-gray-50/40 shadow-sm p-6 sm:min-h-[300px] sm:p-8 md:min-h-[360px] md:p-10">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/5 p-3">{icon}</div>
      <div className="mt-8 sm:mt-10 md:mt-12">
        <h3 className="text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-black/80 sm:text-base sm:mt-6">
          {description}
        </p>
      </div>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}
        className="group mt-auto inline-flex cursor-pointer items-center gap-3 text-sm font-medium pt-6"
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </article>
  );
}

function HowItWorks() {
  return (
    <section id="process" className="bg-white px-5 py-20 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          How it works
        </h2>

        <div className="mt-12 grid gap-6 sm:mt-16 md:mt-20 md:gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative h-[340px] overflow-hidden rounded-2xl bg-neutral-900 sm:h-[380px] md:h-[430px]"
            >
              <img
                src={step.image}
                alt={`Step ${step.number}: ${step.title} - ${step.description}`}
                width="800"
                height="600"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/20 text-sm text-white backdrop-blur sm:left-6 sm:top-6 sm:h-10 sm:w-10">
                {step.number}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{step.title}</h3>
                <p className="mt-3 border-t border-white/20 pt-3 text-xs leading-relaxed text-white/85 sm:mt-4 sm:pt-4 sm:text-sm">
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
    <section className="relative bg-black px-5 py-20 text-white md:px-8 md:py-32 lg:py-40">

      <div className="mx-auto max-w-[1000px] sm:pt-8 md:pt-16">
        <h2 className="text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
          Our automation philosophy
        </h2>

        <div className="mt-12 grid gap-4 sm:mt-16 md:mt-20 md:grid-cols-2 md:gap-6">
          <div>
            <h3 className="mb-6 text-center text-xl font-medium sm:text-2xl sm:mb-8">
              Traditional Operations
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {oldModel.map((item) => (
                <ComparisonRow key={item} tone="dark" icon="minus" text={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-center text-xl font-medium sm:text-2xl sm:mb-8">
              AI Powered Model
            </h3>
            <div className="space-y-3 sm:space-y-4">
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
      className={`flex items-center gap-3 rounded-md px-3 py-3 text-xs font-medium transition-all duration-200 sm:gap-4 sm:px-4 sm:py-4 sm:text-sm ${
        tone === "dark"
          ? "bg-[#151515] text-white hover:bg-white/5"
          : "bg-white text-black hover:bg-black/5"
      }`}
    >
      <span
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded sm:h-7 sm:w-7 ${
          tone === "dark" ? "bg-black" : "bg-black/5"
        }`}
      >
        {icon === "minus" ? (
          <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
        ) : (
          <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
        )}
      </span>
      {text}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          What our clients say
        </h2>

        <article className="mt-12 grid overflow-hidden rounded-2xl bg-white text-black shadow-md sm:mt-16 md:mt-20 md:grid-cols-[0.75fr_1.25fr]">
          <div className="min-h-[200px] bg-black flex items-center justify-center p-8 sm:min-h-[240px] sm:p-10 md:min-h-[380px] md:p-12">
            <img
              src={harrisonForbesLogo}
              alt="Harrison Forbes Electrical"
              width="240"
              height="96"
              className="h-16 w-auto object-contain sm:h-20 md:h-24"
              loading="lazy"
            />
          </div>

          <div className="flex min-h-[280px] flex-col bg-gradient-to-br from-white to-gray-50/30 p-6 sm:min-h-[320px] sm:p-8 md:min-h-[380px] md:p-12">
            <p className="max-w-2xl text-lg font-medium leading-snug tracking-tight sm:text-xl md:text-3xl">
              "Working with Neural Solutions helped us remove repetitive admin,
              respond to leads faster, and create a cleaner operating system for
              growth."
            </p>

            <div className="mt-6 sm:mt-8">
              <p className="font-medium text-sm sm:text-base">Ryder Forbes</p>
              <p className="text-xs text-black/70 sm:text-sm">Owner, Harrison Forbes Electrical</p>
            </div>

            <div className="mt-auto flex flex-col justify-between gap-6 pt-6 sm:gap-8 md:flex-row md:items-end">
              <div className="flex gap-8 sm:gap-12 md:gap-16">
                <div>
                  <div className="text-2xl font-medium sm:text-3xl">30%</div>
                  <p className="text-xs sm:text-sm">less admin time</p>
                </div>
                <div>
                  <div className="text-2xl font-medium sm:text-3xl">2.4x</div>
                  <p className="text-xs sm:text-sm">faster response time</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/40 transition-all duration-200 hover:bg-black hover:text-white hover:scale-110 sm:h-10 sm:w-10">
                  ←
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/40 transition-all duration-200 hover:bg-black hover:text-white hover:scale-110 sm:h-10 sm:w-10">
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
    <section id="case-studies" className="bg-white px-5 py-20 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-6xl">
            Real projects, real results
          </h2>
          <p className="font-sans mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg sm:mt-4">
            From wellness clinics to electrical contractors, see how we've helped BC businesses automate and scale.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="group border border-border rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-white to-gray-50/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`${study.logoBg} flex items-center justify-center p-6 border-b border-border sm:p-8`}>
                <img
                  src={study.logo}
                  alt={`${study.name} logo`}
                  width="200"
                  height="64"
                  className="h-12 w-auto object-contain sm:h-16"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {study.industry}
                </span>
                <h3 className="font-sans mt-2 text-xl font-bold text-foreground sm:text-2xl">
                  {study.name}
                </h3>
                <p className="font-sans mt-2 text-sm text-muted-foreground leading-relaxed sm:mt-3 sm:text-base">
                  {study.description}
                </p>
                <div className="mt-5 pt-5 border-t border-border sm:mt-6 sm:pt-6">
                  <p className="font-sans text-xs font-medium text-foreground sm:text-sm">
                    {study.highlight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10 md:mt-12">
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
      className="border-y border-white/10 bg-black px-5 py-20 text-white md:px-8 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl md:leading-[0.95]">
            Move beyond manual operations.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/80 sm:mt-5 md:mt-6">
            Align your tools, workflows, and team into one scalable AI powered system.
          </p>
        </div>

        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 sm:mb-8">
            <TabsTrigger value="form" className="text-white text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-black">
              <MessageSquare size={16} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Contact Form</span>
              <span className="sm:hidden">Form</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="text-white text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-black">
              <Calendar size={16} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Book Meeting</span>
              <span className="sm:hidden">Meeting</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <form onSubmit={handleSubmit} className="border border-white/40 rounded-[1.25rem] p-5 bg-white/10 shadow-lg shadow-white/10 space-y-5 sm:p-6 sm:space-y-6 md:p-8 md:space-y-8">
              <div className="relative">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <Input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-2 focus:ring-white/20"
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
                  className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-2 focus:ring-white/20"
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
              <Button type="submit" className="w-full bg-white text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]">
                Send Message
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              <Button
                variant={selectedMeeting === "30min" ? "default" : "outline"}
                onClick={() => setSelectedMeeting("30min")}
                className={`h-auto py-3 flex flex-col items-start sm:py-4 ${
                  selectedMeeting === "30min"
                    ? "bg-white text-black"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <span className="font-semibold text-sm sm:text-base">30-Min Discovery Call</span>
                <span className="text-xs opacity-80 mt-1">Quick consultation</span>
              </Button>
              <Button
                variant={selectedMeeting === "45min" ? "default" : "outline"}
                onClick={() => setSelectedMeeting("45min")}
                className={`h-auto py-3 flex flex-col items-start sm:py-4 ${
                  selectedMeeting === "45min"
                    ? "bg-white text-black"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <span className="font-semibold text-sm sm:text-base">45-Min Strategy Session</span>
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
