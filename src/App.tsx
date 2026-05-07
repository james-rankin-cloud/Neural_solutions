import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ParticleField from "@/components/ParticleField";
import ScrollToTop from "@/components/ScrollToTop";
import LandingPage from "./pages/LandingPage.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import About from "./pages/About.tsx";
import BookAudit from "./pages/BookAudit.tsx";
import UICodeKit from "./pages/UICodeKit.tsx";
import CityLanding from "./pages/CityLanding.tsx";
import Services from "./pages/Services.tsx";
import AISolutions from "./pages/services/AISolutions.tsx";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment.tsx";
import NotFound from "./pages/NotFound.tsx";
import { cities } from "@/lib/data/cities";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ParticleField />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/book-audit" element={<BookAudit />} />
            <Route path="/ui-code-kit" element={<UICodeKit />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-solutions" element={<AISolutions />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            {cities.map((city) => (
              <Route
                key={city.slug}
                path={`/ai-agency-${city.slug}`}
                element={<CityLanding citySlug={city.slug} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
