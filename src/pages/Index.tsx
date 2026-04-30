import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTASection from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { organizationSchema } from "@/lib/schema/organization";
import { localBusinessSchema } from "@/lib/schema/localBusiness";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

const Index = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="AI Automation & Custom Software Development | Neural Solutions"
        description="Neural Solutions builds intelligent AI automation and custom software for Canadian businesses. Based in Victoria, BC, we deliver scalable solutions across Canada."
        keywords="AI automation Canada, AI integration Victoria BC, custom software development British Columbia, AI agency Vancouver Island, machine learning services Canada"
        canonical="https://neuralsolutions.ca/"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={getBreadcrumbSchema(location.pathname)} />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <QuoteSection />
      <ProcessSection />
      <CaseStudiesPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;