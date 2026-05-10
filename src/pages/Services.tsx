import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Brain, Monitor, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Solutions",
    description: "Comprehensive AI services including custom development, intelligent automation, analytics, ML engineering, and AI-enabled software delivery.",
    href: "/services/ai-solutions",
    features: [
      "Custom AI Product Development",
      "AI Agents & Intelligent Automation",
      "AI Analytics & Decision Intelligence",
      "ML Engineering & MLOps",
      "AI-Enabled Software Delivery"
    ]
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Software Development",
    description: "Custom software solutions, application modernization, and DevOps engineering to build secure, scalable systems that evolve with your business.",
    href: "/services/software-development",
    features: [
      "Custom Software Development",
      "Application Development & Modernization",
      "DevOps & Platform Engineering",
      "Quality Engineering"
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "AI Strategy & Governance",
    description: "Build a comprehensive roadmap for responsible, scalable AI adoption aligned with your business objectives. Establish frameworks, policies, and oversight mechanisms to ensure ethical AI use, regulatory compliance, and long-term value creation.",
    href: "/services/ai-strategy-consulting-governance",
    features: [
      "AI Readiness Assessment",
      "AI Strategy & Roadmap Development",
      "AI Governance Frameworks",
      "Ethical AI & Compliance",
      "MLOps & Deployment Strategy",
      "AI Risk Management"
    ]
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | AI Solutions & Software Development | Neural Solutions</title>
        <meta
          name="description"
          content="Explore our AI solutions and software development services. From AI strategy to custom development, we deliver solutions that transform your business."
        />
        <meta
          name="keywords"
          content="AI services, software development, custom AI, application development, DevOps, quality engineering"
        />
        <link rel="canonical" href="https://www.neuralsolutions.cloud/services" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-background">
        <div className="container max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Our Services
              </span>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-foreground">
                Transform Your Business
              </h1>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose from our AI solutions or software development services to build the future of your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 bg-background">
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category, idx) => (
              <ScrollReveal key={category.title} delay={idx * 100}>
                <Link
                  to={category.href}
                  className="group block h-full bg-secondary/30 rounded-[1.25rem] overflow-hidden border border-border hover:border-foreground transition-all duration-300"
                >
                  <div className="p-8 md:p-10 flex flex-col h-full">
                    <div className="w-20 h-20 rounded-[1.25rem] bg-foreground text-background flex items-center justify-center mb-6">
                      {category.icon}
                    </div>

                    <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {category.title}
                    </h2>

                    <p className="font-sans text-base leading-relaxed mb-6 text-muted-foreground">
                      {category.description}
                    </p>

                    <div className="space-y-2 mb-8 flex-grow">
                      {category.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                          <span className="font-sans text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-sans text-sm font-medium group-hover:gap-3 transition-all text-foreground">
                      Explore {category.title}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <Link
                to="/book-audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-md font-sans text-sm uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
