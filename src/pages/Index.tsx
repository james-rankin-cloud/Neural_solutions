import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesSection from "@/components/sections/ServicesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatCallouts from "@/components/sections/StatCallouts";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />
    <HeroSection />
    <MarqueeTicker items={["AI Automation", "Custom Software", "Cloud Infrastructure", "Machine Learning", "Workflow Design"]} />
    <ServicesSection />
    <QuoteSection />
    <ProcessSection />
    <StatCallouts />
    <MarqueeTicker items={["Ship It", "Automate Everything", "Build Smarter", "Scale Faster"]} reverse />
    <CaseStudiesPreview />
    <CTASection />
    <Footer />
  </div>
);

export default Index;