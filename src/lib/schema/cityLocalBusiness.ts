import { CityData } from "@/lib/data/cities";

export const getCityLocalBusinessSchema = (cityData: CityData) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `Neural Solutions - ${cityData.name}`,
  description: `AI automation and custom software development services in ${cityData.name}, ${cityData.province}. Professional AI integration for businesses seeking intelligent solutions and digital transformation.`,

  address: {
    "@type": "PostalAddress",
    addressLocality: cityData.name,
    addressRegion: cityData.provinceAbbr,
    addressCountry: "CA"
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: cityData.coordinates.lat,
    longitude: cityData.coordinates.lng
  },

  areaServed: {
    "@type": "City",
    name: cityData.name,
    containedIn: {
      "@type": "State",
      name: cityData.province
    }
  },

  url: `https://neuralsolutions.ca/ai-agency-${cityData.slug}`,
  email: "growth@neuralcoremarketing.com",
  priceRange: "$$",

  serviceType: [
    "AI Automation",
    "Custom Software Development",
    "AI Integration",
    "Machine Learning Solutions",
    "Business Process Automation",
    "AI Consulting"
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "12"
  }
});
