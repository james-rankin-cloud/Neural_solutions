import { cities, CityData } from "@/lib/data/cities";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  geoRegion?: string;
  geoPlace?: string;
  geoPosition?: string;
  useSimpleTitle?: boolean;
}

/**
 * Get meta tags for a given route path
 * Used for SSR to inject meta tags into initial HTML
 */
export function getPageMeta(path: string): PageMeta {
  // Normalize path
  const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

  // Homepage
  if (normalizedPath === "/") {
    return {
      title: "Neural Solutions",
      description: "AI automation and custom software development agency based in Victoria, BC. Transform your business with intelligent AI solutions tailored to Canadian markets.",
      canonical: "https://neuralsolutions.ca",
      keywords: "AI automation, custom software development, AI agency Victoria BC, machine learning, AI integration, business automation",
      geoRegion: "CA-BC",
      geoPlace: "Victoria",
      geoPosition: "48.4284;-123.3656",
      useSimpleTitle: true,
    };
  }

  // Services page
  if (normalizedPath === "/services") {
    return {
      title: "AI Automation Services",
      description: "Comprehensive AI automation and custom software development services. From AI integration to intelligent workflow automation and custom development.",
      canonical: "https://neuralsolutions.ca/services",
      keywords: "AI services, custom software, AI integration, workflow automation, AI consulting, machine learning services",
    };
  }

  // Case Studies page
  if (normalizedPath === "/case-studies") {
    return {
      title: "Case Studies",
      description: "Explore our AI automation and custom software development success stories. Real results from businesses that transformed with Neural Solutions.",
      canonical: "https://neuralsolutions.ca/case-studies",
      keywords: "AI case studies, automation success stories, AI portfolio, custom software examples",
    };
  }

  // About page
  if (normalizedPath === "/about") {
    return {
      title: "About Neural Solutions",
      description: "Meet the team behind Neural Solutions. Expert AI developers and automation specialists based in Victoria, BC, serving businesses across Canada.",
      canonical: "https://neuralsolutions.ca/about",
      keywords: "AI team, software development team, Victoria BC developers, AI experts",
    };
  }

  // Book Audit page
  if (normalizedPath === "/book-audit") {
    return {
      title: "Book Free AI Audit",
      description: "Book a free AI automation audit for your business. Discover how artificial intelligence can transform your operations and drive growth.",
      canonical: "https://neuralsolutions.ca/book-audit",
      keywords: "AI audit, free consultation, AI assessment, automation consultation",
    };
  }

  // UI Code Kit page
  if (normalizedPath === "/ui-code-kit") {
    return {
      title: "UI Code Kit",
      description: "Neural Solutions UI component library and code examples. Built with React, TypeScript, Tailwind CSS, and shadcn/ui.",
      canonical: "https://neuralsolutions.ca/ui-code-kit",
      keywords: "UI components, React components, design system, code examples",
      useSimpleTitle: true,
    };
  }

  // City landing pages
  const cityMatch = normalizedPath.match(/^\/ai-agency-(.+)$/);
  if (cityMatch) {
    const citySlug = cityMatch[1];
    const cityData = cities.find((c) => c.slug === citySlug);

    if (cityData) {
      return getCityPageMeta(cityData);
    }
  }

  // 404 Not Found
  return {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Return to Neural Solutions homepage to explore our AI automation services.",
    canonical: "https://neuralsolutions.ca/404",
    useSimpleTitle: true,
  };
}

/**
 * Get meta tags for a city landing page
 */
function getCityPageMeta(city: CityData): PageMeta {
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `https://neuralsolutions.ca/ai-agency-${city.slug}`,
    keywords: city.keywords.join(", "),
    geoRegion: `CA-${city.provinceAbbr}`,
    geoPlace: city.name,
    geoPosition: `${city.coordinates.lat};${city.coordinates.lng}`,
    useSimpleTitle: true,
  };
}

/**
 * Generate structured data for a given route
 */
export function getStructuredData(path: string): object[] {
  const schemas: object[] = [];

  // Organization schema (all pages)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neural Solutions",
    url: "https://neuralsolutions.ca",
    logo: "https://neuralsolutions.ca/neural-logo.png",
    description: "AI automation and custom software development agency based in Victoria, BC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Victoria",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "growth@neuralcoremarketing.com",
      contactType: "Sales",
    },
    sameAs: [
      "https://www.linkedin.com/company/neural-solutions",
      "https://twitter.com/neuralsolutions",
    ],
  });

  // Breadcrumb schema (all pages except homepage)
  if (path !== "/") {
    const breadcrumbItems = generateBreadcrumbs(path);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }

  // LocalBusiness schema for homepage and city pages
  const cityMatch = path.match(/^\/ai-agency-(.+)$/);
  if (path === "/" || cityMatch) {
    let cityData: CityData | undefined;

    if (cityMatch) {
      const citySlug = cityMatch[1];
      cityData = cities.find((c) => c.slug === citySlug);
    }

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: cityData
        ? `Neural Solutions - ${cityData.name} AI Automation Agency`
        : "Neural Solutions",
      description: cityData?.description || "AI automation and custom software development agency",
      url: cityData
        ? `https://neuralsolutions.ca/ai-agency-${cityData.slug}`
        : "https://neuralsolutions.ca",
      telephone: "+1-250-XXX-XXXX",
      email: "growth@neuralcoremarketing.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityData?.name || "Victoria",
        addressRegion: cityData?.provinceAbbr || "BC",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: cityData?.coordinates.lat || 48.4284,
        longitude: cityData?.coordinates.lng || -123.3656,
      },
      areaServed: {
        "@type": "City",
        name: cityData?.name || "Victoria",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-17:00",
    };

    schemas.push(localBusiness);
  }

  return schemas;
}

/**
 * Generate breadcrumb items for a given path
 */
function generateBreadcrumbs(path: string): object[] {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://neuralsolutions.ca",
    },
  ];

  const pathSegments = path.split("/").filter(Boolean);

  pathSegments.forEach((segment, index) => {
    const position = index + 2;
    const itemPath = "/" + pathSegments.slice(0, index + 1).join("/");

    let name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Special case for city pages
    if (segment.startsWith("ai-agency-")) {
      const citySlug = segment.replace("ai-agency-", "");
      const cityData = cities.find((c) => c.slug === citySlug);
      name = cityData ? `${cityData.name} AI Agency` : name;
    }

    items.push({
      "@type": "ListItem",
      position,
      name,
      item: `https://neuralsolutions.ca${itemPath}`,
    });
  });

  return items;
}
