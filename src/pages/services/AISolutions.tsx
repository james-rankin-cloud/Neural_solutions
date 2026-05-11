import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Cpu, Zap, TrendingUp, Layers, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import aiStrategyImage from "@/assets/ai_strategy_and_governance.png";
import customAiImage from "@/assets/custom_ai_product_development.png";
import aiAgentsImage from "@/assets/ai_agents_intelligent_automation.png";
import aiAnalyticsImage from "@/assets/ai_analytics_predictive_insights.png";
import mlOpsImage from "@/assets/ml_engineering_mlops.png";
import aiSdlcImage from "@/assets/ai-enabled_software_delivery.png";

const services = [
  {
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "AI Strategy & Governance",
    description: "Build a comprehensive roadmap for responsible, scalable AI adoption aligned with your business objectives. Establish frameworks, policies, and oversight mechanisms to ensure ethical AI use, regulatory compliance, and long-term value creation.",
    href: "/services/ai-strategy-consulting-governance",
    image: aiStrategyImage
  },
  {
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Custom AI Product Development",
    description: "Production-grade AI solutions built for your unique business needs, from concept to deployment. We design, develop, and deliver tailored AI products that solve your specific challenges and integrate seamlessly with your existing systems.",
    href: "/services/custom-ai-product-development",
    image: customAiImage
  },
  {
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "AI Agents & Intelligent Automation",
    description: "Autonomous systems that streamline workflows and boost efficiency across your organization. Deploy intelligent agents that handle complex tasks, make decisions, and adapt to changing conditions with minimal human intervention.",
    href: "/services/ai-agents-intelligent-automation",
    image: aiAgentsImage
  },
  {
    icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "AI Analytics & Decision Intelligence",
    description: "Turn data into actionable intelligence with advanced analytics that reveal patterns and predict future outcomes. Empower your teams with AI-driven insights that improve decision-making, optimize operations, and uncover new opportunities.",
    href: "/services/ai-analytics-predictive-insights-decision-intelligence",
    image: aiAnalyticsImage
  },
  {
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "ML Engineering & MLOps",
    description: "Robust ML infrastructure for reliable, scalable AI deployment that grows with your business. Implement best practices for model development, monitoring, and maintenance to ensure consistent performance and rapid iteration.",
    href: "/services/machine-learning-engineering-mlops",
    image: mlOpsImage
  },
  {
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "AI-Enabled Software Delivery",
    description: "Accelerate development with AI-powered tools and processes that enhance every phase of the software lifecycle. Boost developer productivity, improve code quality, and reduce time-to-market through intelligent automation and assistance.",
    href: "/services/ai-enabled-software-delivery",
    image: aiSdlcImage
  }
];

const AISolutions = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions & Services | Custom AI Development & Automation | Neural Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including strategy, custom development, intelligent automation, analytics, ML engineering, and AI-enabled software delivery for Canadian businesses."
        />
        <meta
          name="keywords"
          content="AI services, AI strategy, custom AI development, intelligent automation, AI analytics, ML engineering, MLOps, AI software development"
        />
        <link rel="canonical" href="https://www.neuralsolutions.cloud/services/ai-solutions" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24 pb-8 px-6 bg-background md:pt-32 md:pb-10">
        <div className="container max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                AI Solutions
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

      {/* Quote Section */}
      <section className="pt-8 pb-12 px-6 bg-muted/30 md:pt-10 md:pb-16">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <blockquote className="space-y-6">
                <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-foreground">
                  "There will be two kinds of companies at the end of this decade: those that are fully utilizing AI, and those that are out of business."
                </p>
                <footer className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                  — Peter Diamandis
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-background md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group relative h-[400px] md:h-[450px] rounded-[1.25rem] overflow-hidden border border-border hover:border-foreground/30 hover:shadow-xl transition-all duration-500"
                >
                  {/* Full Card Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Stroke Icon Box */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg border-2 border-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:border-white/50 transition-colors">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-tight leading-tight text-white mb-3">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base leading-relaxed text-white/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-sans text-sm font-medium text-white group-hover:gap-3 transition-all">
                      <span className="border-b border-white/0 group-hover:border-white transition-all">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-background md:py-16">
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

export default AISolutions;
