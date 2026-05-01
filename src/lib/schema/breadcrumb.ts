import { cities } from "@/lib/data/cities";

export const getBreadcrumbSchema = (pathname: string) => {
  const routes: Record<string, { name: string; position: number }[]> = {
    "/": [
      { name: "Home", position: 1 }
    ],
    "/services": [
      { name: "Home", position: 1 },
      { name: "Services", position: 2 }
    ],
    "/case-studies": [
      { name: "Home", position: 1 },
      { name: "Case Studies", position: 2 }
    ],
    "/about": [
      { name: "Home", position: 1 },
      { name: "About", position: 2 }
    ],
    "/book-audit": [
      { name: "Home", position: 1 },
      { name: "Book Audit", position: 2 }
    ]
  };

  // Handle city landing pages
  if (pathname.startsWith("/ai-agency-")) {
    const citySlug = pathname.replace("/ai-agency-", "");
    const cityData = cities.find(c => c.slug === citySlug);

    if (cityData) {
      const breadcrumbItems = [
        { name: "Home", position: 1 },
        { name: `AI Agency ${cityData.name}`, position: 2 }
      ];

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item) => ({
          "@type": "ListItem",
          position: item.position,
          name: item.name,
          item: item.position === 1
            ? "https://neuralsolutions.ca"
            : `https://neuralsolutions.ca${pathname}`
        }))
      };
    }
  }

  const breadcrumbItems = routes[pathname] || routes["/"];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.position === 1
        ? "https://neuralsolutions.ca"
        : `https://neuralsolutions.ca${pathname}`
    }))
  };
};
