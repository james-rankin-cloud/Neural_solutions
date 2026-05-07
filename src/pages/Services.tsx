import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Lightbulb, Cpu, Zap, TrendingUp, Layers, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import aiStrategyImage from "@/assets/ai_strategy_and_governance.png";
import customAiImage from "@/assets/custom_ai_product_development.png";
import aiAgentsImage from "@/assets/ai_agents_intelligent_automation.png";
import aiAnalyticsImage from "@/assets/ai_analytics_predictive_insights.png";
import mlOpsImage from "@/assets/ml_engineering_mlops.png";
import aiSdlcImage from "@/assets/ai-enabled_software_delivery.png";

const services = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "AI Solutions by Industry",
    description: "Industry-specific automation solutions tailored to healthcare, real estate, legal, e-commerce, professional services, and more. Real use cases with proven implementation strategies.",
    href: "/services/ai-solutions",
    featured: true
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Strategy & Governance",
    description: "Build a comprehensive roadmap for responsible, scalable AI adoption aligned with your business objectives. Establish frameworks, policies, and oversight mechanisms to ensure ethical AI use, regulatory compliance, and long-term value creation.",
    href: "/services/ai-strategy-governance",
    image: aiStrategyImage
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom AI Product Development",
    description: "Production-grade AI solutions built for your unique business needs, from concept to deployment. We design, develop, and deliver tailored AI products that solve your specific challenges and integrate seamlessly with your existing systems.",
    href: "/services/custom-ai-development",
    image: customAiImage
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Agents & Intelligent Automation",
    description: "Autonomous systems that streamline workflows and boost efficiency across your organization. Deploy intelligent agents that handle complex tasks, make decisions, and adapt to changing conditions with minimal human intervention.",
    href: "/services/ai-agents",
    image: aiAgentsImage
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI Analytics & Decision Intelligence",
    description: "Turn data into actionable intelligence with advanced analytics that reveal patterns and predict future outcomes. Empower your teams with AI-driven insights that improve decision-making, optimize operations, and uncover new opportunities.",
    href: "/services/ai-analytics",
    image: aiAnalyticsImage
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "ML Engineering & MLOps",
    description: "Robust ML infrastructure for reliable, scalable AI deployment that grows with your business. Implement best practices for model development, monitoring, and maintenance to ensure consistent performance and rapid iteration.",
    href: "/services/ml-engineering",
    image: mlOpsImage
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "AI-Enabled Software Delivery",
    description: "Accelerate development with AI-powered tools and processes that enhance every phase of the software lifecycle. Boost developer productivity, improve code quality, and reduce time-to-market through intelligent automation and assistance.",
    href: "/services/ai-sdlc",
    image: aiSdlcImage
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>AI Services | Custom Solutions & Automation | Neural Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including strategy, custom development, intelligent automation, analytics, ML engineering, and AI-enabled software delivery for Canadian businesses."
        />
        <meta
          name="keywords"
          content="AI services, AI strategy, custom AI development, intelligent automation, AI analytics, ML engineering, MLOps, AI software development"
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
                AI Services That Drive Results
              </h1>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From strategy to deployment, we deliver AI solutions that transform how your business operates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 100}>
                <Link
                  to={service.href}
                  className={`group block h-full bg-secondary/30 rounded-[1.25rem] overflow-hidden border border-border hover:border-foreground transition-all duration-300 ${
                    service.featured ? 'md:col-span-2 bg-foreground text-background border-foreground' : ''
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {service.image && (
                      <div className="w-full h-48 md:h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 ${
                        service.featured ? 'bg-background text-foreground' : 'bg-foreground text-background'
                      }`}>
                        {service.icon}
                      </div>

                      <h2 className={`font-sans text-2xl md:text-3xl font-bold mb-4 ${
                        service.featured ? 'text-background' : 'text-foreground'
                      }`}>
                        {service.title}
                      </h2>

                      <p className={`font-sans text-base leading-relaxed mb-6 flex-grow ${
                        service.featured ? 'text-background/90' : 'text-muted-foreground'
                      }`}>
                        {service.description}
                      </p>

                      <div className={`flex items-center gap-2 font-sans text-sm font-medium group-hover:gap-3 transition-all ${
                        service.featured ? 'text-background' : 'text-foreground'
                      }`}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-8">
              <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight">
                Not Sure Where to Start?
              </h2>
              <p className="font-sans text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Book a free consultation to discuss your business challenges and discover which AI solutions can deliver the biggest impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/book-audit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-md font-sans text-sm uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background text-background rounded-md font-sans text-sm uppercase tracking-wider font-medium hover:bg-background hover:text-foreground transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
