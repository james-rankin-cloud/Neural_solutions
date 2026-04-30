export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Neural Solutions",
  image: "https://neuralsolutions.ca/logo.svg",
  "@id": "https://neuralsolutions.ca",
  url: "https://neuralsolutions.ca",
  telephone: "",
  email: "growth@neuralcoremarketing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Victoria",
    addressRegion: "BC",
    postalCode: "",
    addressCountry: "CA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.4284,
    longitude: -123.3656
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "09:00",
    closes: "17:00"
  },
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "British Columbia"
  },
  description: "Professional AI automation and custom software development services in Victoria, BC. We help Canadian businesses implement intelligent automation solutions."
};
