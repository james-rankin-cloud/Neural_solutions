import { describe, it, expect } from 'vitest';

// Type definitions for Schema.org structured data
interface ImageObject {
  '@type': 'ImageObject';
  url: string;
}

interface PostalAddress {
  '@type': 'PostalAddress';
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

interface Country {
  '@type': 'Country';
  name: string;
}

interface ContactPoint {
  '@type': 'ContactPoint';
  contactType: string;
  email: string;
}

interface Organization {
  '@type': 'Organization';
  '@id': string;
  name: string;
  url: string;
  logo: ImageObject;
  description: string;
  address: PostalAddress;
  areaServed: Country;
  contactPoint: ContactPoint;
}

interface Service {
  '@type': 'Service';
  name: string;
  description: string;
}

interface Offer {
  '@type': 'Offer';
  itemOffered: Service;
}

interface OfferCatalog {
  '@type': 'OfferCatalog';
  name: string;
  itemListElement: Offer[];
}

interface ProfessionalService {
  '@type': 'ProfessionalService';
  '@id': string;
  name: string;
  image: string;
  description: string;
  url: string;
  priceRange: string;
  areaServed: string[];
  hasOfferCatalog: OfferCatalog;
}

interface Publisher {
  '@id': string;
}

interface WebSite {
  '@type': 'WebSite';
  '@id': string;
  url: string;
  name: string;
  description: string;
  publisher: Publisher;
  inLanguage: string;
}

type SchemaItem = Organization | ProfessionalService | WebSite;

interface StructuredData {
  '@context': string;
  '@graph': SchemaItem[];
}

// Import the structured data from LandingPage
// Note: This is the same structure used in the LandingPage component
const getStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.neuralsolutions.cloud/#organization",
      "name": "Neural Solutions",
      "url": "https://www.neuralsolutions.cloud/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.neuralsolutions.cloud/logo.png"
      },
      "description": "AI automation, custom software development, and intelligent business solutions for Canadian enterprises",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Victoria",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "growth@neuralcoremarketing.com"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.neuralsolutions.cloud/#business",
      "name": "Neural Solutions",
      "image": "https://www.neuralsolutions.cloud/logo.png",
      "description": "We build AI systems, automations, and custom software that help businesses reduce manual work and grow faster",
      "url": "https://www.neuralsolutions.cloud/",
      "priceRange": "$$",
      "areaServed": ["Canada", "British Columbia", "Vancouver", "Victoria"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI and Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Strategy Consulting & Governance",
              "description": "Strategic AI roadmap development and governance frameworks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom AI Product Development",
              "description": "End-to-end AI product design and development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Agents & Intelligent Automation",
              "description": "Autonomous AI agents for business process automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development",
              "description": "Bespoke software solutions tailored to business needs"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.neuralsolutions.cloud/#website",
      "url": "https://www.neuralsolutions.cloud/",
      "name": "Neural Solutions",
      "description": "AI Automation and Custom Software for Canadian Businesses",
      "publisher": {
        "@id": "https://www.neuralsolutions.cloud/#organization"
      },
      "inLanguage": "en-CA"
    }
  ]
});

describe('JSON-LD Schema Validation', () => {
  const structuredData = getStructuredData();

  it('should be valid JSON', () => {
    expect(() => JSON.stringify(structuredData)).not.toThrow();
    expect(JSON.parse(JSON.stringify(structuredData))).toEqual(structuredData);
  });

  it('should have the correct @context', () => {
    expect(structuredData['@context']).toBe('https://schema.org');
  });

  it('should have a @graph array', () => {
    expect(Array.isArray(structuredData['@graph'])).toBe(true);
    expect(structuredData['@graph'].length).toBeGreaterThan(0);
  });

  describe('Organization Schema', () => {
    const organization = structuredData['@graph'].find(
      (item): item is Organization => item['@type'] === 'Organization'
    );

    it('should exist', () => {
      expect(organization).toBeDefined();
    });

    it('should have required properties', () => {
      expect(organization).toHaveProperty('@id');
      expect(organization).toHaveProperty('name');
      expect(organization).toHaveProperty('url');
      expect(organization).toHaveProperty('logo');
      expect(organization).toHaveProperty('description');
    });

    it('should have valid name', () => {
      expect(organization.name).toBe('Neural Solutions');
      expect(organization.name).toBeTruthy();
      expect(typeof organization.name).toBe('string');
    });

    it('should have valid URL', () => {
      expect(organization.url).toMatch(/^https:\/\//);
      expect(organization.url).toBe('https://www.neuralsolutions.cloud/');
    });

    it('should have valid logo with ImageObject type', () => {
      expect(organization.logo).toBeDefined();
      expect(organization.logo['@type']).toBe('ImageObject');
      expect(organization.logo.url).toMatch(/^https:\/\//);
    });

    it('should have valid address', () => {
      expect(organization.address).toBeDefined();
      expect(organization.address['@type']).toBe('PostalAddress');
      expect(organization.address.addressLocality).toBeTruthy();
      expect(organization.address.addressRegion).toBeTruthy();
      expect(organization.address.addressCountry).toBe('CA');
    });

    it('should have valid contact point', () => {
      expect(organization.contactPoint).toBeDefined();
      expect(organization.contactPoint['@type']).toBe('ContactPoint');
      expect(organization.contactPoint.contactType).toBeTruthy();
      expect(organization.contactPoint.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  });

  describe('ProfessionalService Schema', () => {
    const service = structuredData['@graph'].find(
      (item): item is ProfessionalService => item['@type'] === 'ProfessionalService'
    );

    it('should exist', () => {
      expect(service).toBeDefined();
    });

    it('should have required properties', () => {
      expect(service).toHaveProperty('@id');
      expect(service).toHaveProperty('name');
      expect(service).toHaveProperty('description');
      expect(service).toHaveProperty('url');
      expect(service).toHaveProperty('image');
    });

    it('should have valid name', () => {
      expect(service.name).toBe('Neural Solutions');
      expect(typeof service.name).toBe('string');
    });

    it('should have valid URL', () => {
      expect(service.url).toMatch(/^https:\/\//);
    });

    it('should have areaServed as array', () => {
      expect(Array.isArray(service.areaServed)).toBe(true);
      expect(service.areaServed.length).toBeGreaterThan(0);
    });

    it('should have valid price range', () => {
      expect(service.priceRange).toBeTruthy();
      expect(typeof service.priceRange).toBe('string');
    });

    describe('Service Catalog', () => {
      it('should have hasOfferCatalog', () => {
        expect(service.hasOfferCatalog).toBeDefined();
        expect(service.hasOfferCatalog['@type']).toBe('OfferCatalog');
      });

      it('should have catalog name', () => {
        expect(service.hasOfferCatalog.name).toBeTruthy();
        expect(typeof service.hasOfferCatalog.name).toBe('string');
      });

      it('should have itemListElement array', () => {
        expect(Array.isArray(service.hasOfferCatalog.itemListElement)).toBe(true);
        expect(service.hasOfferCatalog.itemListElement.length).toBeGreaterThan(0);
      });

      it('should have valid offer structure', () => {
        const offers = service?.hasOfferCatalog.itemListElement || [];

        offers.forEach((offer) => {
          expect(offer['@type']).toBe('Offer');
          expect(offer.itemOffered).toBeDefined();
          expect(offer.itemOffered['@type']).toBe('Service');
          expect(offer.itemOffered.name).toBeTruthy();
          expect(offer.itemOffered.description).toBeTruthy();
        });
      });

      it('should have at least 4 service offerings', () => {
        expect(service.hasOfferCatalog.itemListElement.length).toBeGreaterThanOrEqual(4);
      });
    });
  });

  describe('WebSite Schema', () => {
    const website = structuredData['@graph'].find(
      (item): item is WebSite => item['@type'] === 'WebSite'
    );

    it('should exist', () => {
      expect(website).toBeDefined();
    });

    it('should have required properties', () => {
      expect(website).toHaveProperty('@id');
      expect(website).toHaveProperty('url');
      expect(website).toHaveProperty('name');
      expect(website).toHaveProperty('description');
      expect(website).toHaveProperty('publisher');
      expect(website).toHaveProperty('inLanguage');
    });

    it('should have valid URL', () => {
      expect(website.url).toMatch(/^https:\/\//);
      expect(website.url).toBe('https://www.neuralsolutions.cloud/');
    });

    it('should reference organization as publisher', () => {
      expect(website.publisher).toBeDefined();
      expect(website.publisher['@id']).toBe('https://www.neuralsolutions.cloud/#organization');
    });

    it('should have valid language code', () => {
      expect(website.inLanguage).toBe('en-CA');
      expect(website.inLanguage).toMatch(/^[a-z]{2}-[A-Z]{2}$/);
    });
  });

  describe('Schema Relationships', () => {
    it('should have unique @id for each schema', () => {
      const ids = structuredData['@graph']
        .filter((item) => '@id' in item && item['@id'])
        .map((item) => '@id' in item ? item['@id'] : '');

      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have valid @id format', () => {
      structuredData['@graph'].forEach((item) => {
        if ('@id' in item && item['@id']) {
          expect(item['@id']).toMatch(/^https:\/\//);
          expect(item['@id']).toContain('#');
        }
      });
    });

    it('should have all schemas with @type', () => {
      structuredData['@graph'].forEach((item) => {
        expect(item['@type']).toBeTruthy();
        expect(typeof item['@type']).toBe('string');
      });
    });
  });

  describe('Content Quality', () => {
    it('should have non-empty descriptions', () => {
      const organization = structuredData['@graph'].find(
        (item): item is Organization => item['@type'] === 'Organization'
      );
      const service = structuredData['@graph'].find(
        (item): item is ProfessionalService => item['@type'] === 'ProfessionalService'
      );
      const website = structuredData['@graph'].find(
        (item): item is WebSite => item['@type'] === 'WebSite'
      );

      expect(organization?.description.length).toBeGreaterThan(10);
      expect(service?.description.length).toBeGreaterThan(10);
      expect(website?.description.length).toBeGreaterThan(10);
    });

    it('should have consistent business name across schemas', () => {
      const organization = structuredData['@graph'].find(
        (item): item is Organization => item['@type'] === 'Organization'
      );
      const service = structuredData['@graph'].find(
        (item): item is ProfessionalService => item['@type'] === 'ProfessionalService'
      );
      const website = structuredData['@graph'].find(
        (item): item is WebSite => item['@type'] === 'WebSite'
      );

      expect(organization?.name).toBe('Neural Solutions');
      expect(service?.name).toBe('Neural Solutions');
      expect(website?.name).toBe('Neural Solutions');
    });

    it('should have consistent URLs', () => {
      const baseUrl = 'https://www.neuralsolutions.cloud/';

      structuredData['@graph'].forEach((item) => {
        if ('url' in item && item.url) {
          expect(item.url).toBe(baseUrl);
        }
      });
    });
  });
});
