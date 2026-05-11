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
    question: "What is the difference between ML engineering and MLOps?",
    answer:
      "ML engineering focuses on building, improving, and integrating machine learning models and systems. MLOps focuses on the operational practices, tools, pipelines, and infrastructure needed to deploy, monitor, maintain, and improve those models in production. Neural Solutions can support both sides so the model is not only built, but also reliable in real use.",
  },
  {
    question: "How do you keep machine learning models accurate after deployment?",
    answer:
      "We use monitoring systems to track model performance, data quality, prediction patterns, and drift. When performance changes, the system can trigger reviews, retraining workflows, or improvement steps. The goal is to keep the model useful as real-world data and business conditions change.",
  },
  {
    question: "Can you work with our existing data science team?",
    answer:
      "Yes. Neural Solutions can partner with internal data science, analytics, or engineering teams. We can help with model deployment, infrastructure, pipeline automation, monitoring, documentation, and MLOps practices so your team can focus on experimentation and business value.",
  },
  {
    question: "What cloud platforms and tools can you work with?",
    answer:
      "We can work with modern cloud platforms, infrastructure tools, model serving systems, workflow orchestration tools, databases, APIs, and ML frameworks depending on your existing environment and project needs. The final stack should be selected based on your goals, budget, data, security needs, and technical constraints.",
  },
  {
    question: "How long does it take to get a model into production?",
    answer:
      "Timelines depend on the model complexity, data readiness, current infrastructure, integrations, security requirements, and monitoring needs. A focused deployment may move faster if the model and data are already prepared, while a complete MLOps platform or production AI system requires a more structured build.",
  },
  {
    question: "What does model governance include?",
    answer:
      "Model governance can include version tracking, documentation, data lineage, audit trails, access controls, review workflows, explainability, bias checks, approval processes, monitoring, and defined ownership. This helps teams understand how models are built, deployed, changed, and maintained.",
  },
  {
    question: "Can you deploy models into our existing systems?",
    answer:
      "Yes. Where technically feasible, we can integrate models into existing applications, dashboards, CRMs, databases, cloud platforms, APIs, and internal workflows so predictions or insights are available where your team already works.",
  },
  {
    question: "Do we need a fully built model before working with Neural Solutions?",
    answer:
      "No. Neural Solutions can help at different stages. We can support early discovery and data readiness, build an MVP model, improve an existing prototype, or help deploy and monitor a model that is already working.",
  },
  {
    question: "What types of machine learning systems can you build?",
    answer:
      "We can support predictive models, classification systems, recommendation tools, forecasting models, NLP systems, computer vision models, anomaly detection, lead scoring, churn prediction, document intelligence, and operational decision support systems.",
  },
];

const MLEngineeringMLOps = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mlSystem: "",
    dataLocation: "",
    stage: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `ML Engineering Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
ML system type: ${formData.mlSystem}
Data location: ${formData.dataLocation}
Stage: ${formData.stage}
    `.trim();
    window.location.href = `mailto:growth@neuralcoremarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Machine Learning Engineering & MLOps | Neural Solutions"
        description="Neural Solutions builds, deploys, and operationalizes production-ready machine learning systems with ML engineering, MLOps pipelines, model monitoring, and scalable AI infrastructure."
        keywords="machine learning engineering, MLOps, ML infrastructure, model deployment, model monitoring, production AI, data pipelines, AI infrastructure, ML governance"
        canonical="https://neuralsolutions.ca/services/machine-learning-engineering-mlops"
      />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
              Machine Learning Engineering & MLOps
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8">
              Machine Learning Engineering & MLOps
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We build, deploy, and operationalize production-ready machine learning systems through expert ML engineering, automated MLOps pipelines, and reliable infrastructure that helps models perform consistently, scale efficiently, and create measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-audit" className="group">
                  Book Now
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="#services" className="group">
                  Explore MLOps Services
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
              <Link to="/services/ai-solutions" className="hover:text-foreground transition-colors">AI Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Machine Learning Engineering & MLOps</span>
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
              From prototype to production excellence
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-6">
              Building a machine learning model is only one part of the journey. Deploying it successfully, monitoring it, and keeping it reliable in production requires strong engineering, infrastructure, and operational discipline.
            </p>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
              Neural Solutions helps bridge the gap between experimentation and production AI systems. We support the complete ML lifecycle, from model development and training to deployment, monitoring, retraining, and continuous improvement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              With MLOps best practices, automated deployment workflows, scalable cloud infrastructure, and clear governance, we help machine learning initiatives move from proof of concept to real business use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How we implement ML engineering and MLOps at scale */}
      <section id="services" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
              How we implement machine learning engineering and MLOps at scale
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-[1.25rem] p-8 border border-border">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">End to end ML model development</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We design, build, train, and refine custom machine learning models tailored to specific business problems, workflows, and data environments.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Predictive models",
                    "Classification systems",
                    "Natural language processing",
                    "Computer vision models",
                    "Recommendation systems",
                    "Forecasting models"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">MLOps pipeline automation</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We streamline machine learning workflows with automated pipelines for training, validation, deployment, monitoring, and continuous improvement.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "CI/CD for machine learning",
                    "Automated model validation",
                    "Model and data versioning",
                    "Testing and quality checks",
                    "Repeatable deployment workflows"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Model deployment & scaling</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We deploy machine learning models into production environments with the infrastructure needed to support real-time predictions, batch processing, and scalable inference.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "API based model serving",
                    "Batch prediction workflows",
                    "Containerized deployments",
                    "Cloud deployment",
                    "Scalable inference systems"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">ML infrastructure & platform engineering</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We build the infrastructure needed to support reliable machine learning development, deployment, and operations across teams.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Data pipelines",
                    "Feature stores",
                    "Model registries",
                    "Experiment tracking",
                    "Cloud infrastructure",
                    "Secure access controls"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Model monitoring & performance optimization</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We help keep ML systems reliable after launch through monitoring, drift detection, performance reviews, and retraining workflows.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Model accuracy tracking",
                    "Data drift detection",
                    "Prediction monitoring",
                    "Alerting and observability",
                    "Automated retraining workflows"
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
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">ML governance, documentation & handoff</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                  We create the documentation, controls, and operating processes needed to make machine learning systems easier to maintain, audit, and improve over time.
                </p>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-3">Use cases</span>
                <ul className="space-y-2">
                  {[
                    "Model documentation",
                    "Version tracking",
                    "Audit trails",
                    "Review workflows",
                    "Internal handoff",
                    "Governance support"
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
                  Helping clients understand machine learning opportunities, data readiness, infrastructure needs, and the path to production.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI and ML readiness assessment",
                    "Data source review",
                    "Use case discovery and prioritization",
                    "Infrastructure gap analysis",
                    "ML roadmap planning",
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
                  Guiding clients through model experimentation, feasibility testing, and early validation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Prototype feasibility review",
                    "Model selection and experimentation",
                    "MVP model development and testing",
                    "Data quality validation",
                    "Success metric definition",
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
                  Scaling, optimizing, and deploying machine learning systems into production with monitoring, governance, and reliable operations.
                </p>
                <ul className="space-y-2">
                  {[
                    "MLOps and deployment strategy",
                    "Production grade ML integration",
                    "Model monitoring and observability",
                    "Retraining and improvement workflows",
                    "AI governance and scalability plan",
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
                Ready to move your ML model from prototype to production?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
                Book a consultation with Neural Solutions to discuss your model, data, infrastructure, and what it would take to deploy a reliable production-ready ML system.
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
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">Tell us about your ML project</h3>
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
                      placeholder="What type of model or ML system are you building?"
                      value={formData.mlSystem}
                      onChange={(e) => setFormData({ ...formData, mlSystem: e.target.value })}
                      className="pl-10 min-h-24"
                      required
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      placeholder="Where does your data currently live?"
                      value={formData.dataLocation}
                      onChange={(e) => setFormData({ ...formData, dataLocation: e.target.value })}
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
                      <option value="Experimentation">Experimentation</option>
                      <option value="Prototype built">Prototype built</option>
                      <option value="Ready for deployment">Ready for deployment</option>
                      <option value="Existing model needs monitoring or improvement">Existing model needs monitoring or improvement</option>
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

export default MLEngineeringMLOps;
