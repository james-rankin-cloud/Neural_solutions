import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { ArrowRight, Code2, RefreshCw, Workflow, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import customSoftwareImage from "@/assets/software1.png";
import appModernizationImage from "@/assets/software2.png";
import devOpsImage from "@/assets/software3.png";
import qualityEngineeringImage from "@/assets/software4.png";

const services = [
  {
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Custom Software Development",
    description: "Secure, scalable software tailored to your business requirements and designed to evolve over time.",
    image: customSoftwareImage,
    href: "/services/custom-software-development"
  },
  {
    icon: <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Application Development & Modernization",
    description: "Modernize legacy applications and build cloud-native systems to improve performance, scalability, and maintainability.",
    image: appModernizationImage,
    href: "/services/application-development-modernization"
  },
  {
    icon: <Workflow className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "DevOps & Platform Engineering",
    description: "Automate infrastructure and delivery pipelines to deploy software faster, more reliably, and at scale.",
    image: devOpsImage,
    href: "#"
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Quality Engineering",
    description: "Embed automated testing and quality practices across the software lifecycle to ensure reliability and performance.",
    image: qualityEngineeringImage,
    href: "#"
  }
];

const SoftwareDevelopment = () => {
  return (
    <>
      <SEO
        title="Software Development Services | Custom Solutions & Modernization"
        description="Professional software development services including custom development, application modernization, DevOps, and quality engineering for Canadian businesses."
        canonical="https://www.neuralsolutions.cloud/services/software-development"
        keywords="custom software development, application modernization, DevOps services, platform engineering, quality engineering, automated testing"
        useSimpleTitle={true}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-background">
        <div className="container max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <Link to="/services" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Services
              </Link>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-foreground">
                Software Development Services
              </h1>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Build, modernize, and scale software that drives your business forward with confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 100}>
                <Link
                  to={service.href}
                  className="group relative h-[400px] md:h-[450px] rounded-[1.25rem] overflow-hidden border border-border hover:border-foreground/30 hover:shadow-xl transition-all duration-500 cursor-pointer block"
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                  Engineering Excellence
                </h2>
                <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We build software with the same rigor and quality standards that power enterprise systems.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-background rounded-[1.25rem] p-6 border border-border">
                  <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                    Scalable Architecture
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Built to grow with your business without requiring complete rewrites.
                  </p>
                </div>

                <div className="bg-background rounded-[1.25rem] p-6 border border-border">
                  <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                    Security First
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Industry best practices baked into every line of code we write.
                  </p>
                </div>

                <div className="bg-background rounded-[1.25rem] p-6 border border-border">
                  <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                    Modern Stack
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Latest technologies and frameworks for performance and maintainability.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
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

export default SoftwareDevelopment;
