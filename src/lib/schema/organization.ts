export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neural Solutions",
  url: "https://neuralsolutions.ca",
  logo: "https://neuralsolutions.ca/logo.svg",
  description: "AI automation and custom software development agency based in Victoria, BC, serving businesses across Canada with intelligent automation solutions.",
  email: "growth@neuralcoremarketing.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Victoria",
    addressRegion: "BC",
    addressCountry: "CA"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Canada"
    },
    {
      "@type": "State",
      name: "British Columbia"
    },
    {
      "@type": "City",
      name: "Victoria"
    },
    {
      "@type": "City",
      name: "Vancouver"
    },
    {
      "@type": "City",
      name: "Kelowna"
    },
    {
      "@type": "City",
      name: "Langley"
    }
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Business Automation",
    "Custom Software Solutions",
    "AI Integration",
    "Cloud Infrastructure",
    "Web Development"
  ],
  sameAs: [
    "https://www.linkedin.com/company/neural-solutions"
  ]
};
