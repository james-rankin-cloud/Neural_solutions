import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, User, Mail, MessageSquare } from "lucide-react";

const BookAudit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@neuralsolutions.dev?subject=Free Audit Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-32 px-6 relative grain min-h-screen flex items-center">
        <div className="absolute top-[30%] left-[15%] w-40 h-40 rounded-full bg-primary/[0.05] blur-3xl float" />
        <div className="absolute bottom-[20%] right-[10%] w-56 h-56 rounded-full bg-accent/[0.04] blur-3xl float-delayed" />

        <div className="max-w-xl mx-auto w-full relative z-10">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Get Started</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[0.95] mb-3">
              Book a Free Audit
            </h1>
            <p className="font-serif text-lg italic text-primary mb-4">No pitch decks. Just a roadmap.</p>
            <p className="text-muted-foreground font-normal mb-10 leading-relaxed">
              Tell us about your project. We'll respond within 24 hours with a preliminary assessment and a clear action plan.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="pl-10 bg-background/50 border-border/30 font-sans cursor-none focus:border-primary/50"
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
                  className="pl-10 bg-background/50 border-border/30 font-sans cursor-none focus:border-primary/50"
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
                  className="pl-10 bg-background/50 border-border/30 font-sans cursor-none resize-none focus:border-primary/50"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full group cursor-none">
                Send Message
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAudit;