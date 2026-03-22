import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <CaseStudiesPreview />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
