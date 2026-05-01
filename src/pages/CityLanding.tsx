import { useState, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarEmbed from "@/components/CalendarEmbed";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { getCityLocalBusinessSchema } from "@/lib/schema/cityLocalBusiness";
import { cities } from "@/lib/data/cities";
import NotFound from "./NotFound";
import { ArrowRight, User, Mail, MessageSquare, Calendar } from "lucide-react";

interface CityLandingProps {
  citySlug: string;
}

const CityLanding = ({ citySlug }: CityLandingProps) => {
  const location = useLocation();
  const cityData = cities.find(c => c.slug === citySlug);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<"30min" | "45min">("30min");

  if (!cityData) {
    return <NotFound />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:growth@neuralcoremarketing.com?subject=Inquiry from ${cityData.name} - ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title={`${cityData.metaTitle} | Neural Solutions`}
        description={cityData.metaDescription}
        keywords={cityData.keywords.join(", ")}
        canonical={`https://neuralsolutions.ca/ai-agency-${cityData.slug}`}
      />
      <StructuredData data={getCityLocalBusinessSchema(cityData)} />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />

      <section className="pt-32 pb-32 px-6 relative grain min-h-screen flex items-center">
        <div className="absolute top-[30%] left-[15%] w-40 h-40 rounded-full bg-primary/[0.05] blur-3xl float" />
        <div className="absolute bottom-[20%] right-[10%] w-56 h-56 rounded-full bg-accent/[0.04] blur-3xl float-delayed" />

        <div className="max-w-xl mx-auto w-full relative z-10">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Get Started
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-3">
              {cityData.heroHeadline}
            </h1>
            <p className="font-serif text-lg italic text-primary mb-4">
              Your choice: message us or book a call.
            </p>
            <p className="text-muted-foreground font-normal mb-10 leading-relaxed">
              {cityData.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="form">
                  <MessageSquare size={16} className="mr-2" />
                  Contact Form
                </TabsTrigger>
                <TabsTrigger value="calendar">
                  <Calendar size={16} className="mr-2" />
                  Book Meeting
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form">
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="pl-10 bg-background/50 border-border/30 font-sans focus:border-primary/50"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="pl-10 bg-background/50 border-border/30 font-sans focus:border-primary/50"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project, challenges, and goals..."
                      rows={5}
                      required
                      className="pl-10 bg-background/50 border-border/30 font-sans resize-none focus:border-primary/50"
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full group">
                    Send Message
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="calendar" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant={selectedMeeting === "30min" ? "hero" : "hero-outline"}
                    size="lg"
                    onClick={() => setSelectedMeeting("30min")}
                    className="h-auto py-4 flex flex-col items-start"
                  >
                    <span className="font-semibold text-base">30-Min Discovery Call</span>
                    <span className="text-xs opacity-80 mt-1">Quick consultation</span>
                  </Button>
                  <Button
                    variant={selectedMeeting === "45min" ? "hero" : "hero-outline"}
                    size="lg"
                    onClick={() => setSelectedMeeting("45min")}
                    className="h-auto py-4 flex flex-col items-start"
                  >
                    <span className="font-semibold text-base">45-Min Strategy Session</span>
                    <span className="text-xs opacity-80 mt-1">Comprehensive analysis</span>
                  </Button>
                </div>

                <CalendarEmbed
                  calLink={`james-rankin-jmigyc/${selectedMeeting}`}
                  className="reveal-up"
                />
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityLanding;
