import { test, expect } from '@playwright/test';

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
  description?: string;
  address: PostalAddress;
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
  name?: string;
  itemListElement: Offer[];
}

interface ProfessionalService {
  '@type': 'ProfessionalService';
  '@id'?: string;
  name: string;
  hasOfferCatalog: OfferCatalog;
}

interface Publisher {
  '@id': string;
}

interface WebSite {
  '@type': 'WebSite';
  url: string;
  inLanguage: string;
  publisher: Publisher;
}

type SchemaItem = Organization | ProfessionalService | WebSite;

interface StructuredData {
  '@context': string;
  '@graph': SchemaItem[];
}

test.describe('JSON-LD Schema Markup E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
  });

  test('should have JSON-LD script tag on homepage', async ({ page }) => {
    const scriptTag = await page.locator('script[type="application/ld+json"]').first();
    await expect(scriptTag).toBeDefined();
  });

  test('should have valid JSON-LD content', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();

    expect(scriptContent).toBeTruthy();

    // Parse the JSON-LD content
    const jsonLd = JSON.parse(scriptContent!);

    // Validate basic structure
    expect(jsonLd).toHaveProperty('@context');
    expect(jsonLd['@context']).toBe('https://schema.org');
    expect(jsonLd).toHaveProperty('@graph');
    expect(Array.isArray(jsonLd['@graph'])).toBe(true);
  });

  test('should contain Organization schema', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const organization = jsonLd['@graph'].find(
      (item): item is Organization => item['@type'] === 'Organization'
    );

    expect(organization).toBeDefined();
    expect(organization.name).toBe('Neural Solutions');
    expect(organization.url).toBe('https://www.neuralsolutions.cloud/');
    expect(organization).toHaveProperty('logo');
    expect(organization).toHaveProperty('address');
    expect(organization).toHaveProperty('contactPoint');
  });

  test('should contain ProfessionalService schema', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const service = jsonLd['@graph'].find(
      (item): item is ProfessionalService => item['@type'] === 'ProfessionalService'
    );

    expect(service).toBeDefined();
    expect(service.name).toBe('Neural Solutions');
    expect(service).toHaveProperty('hasOfferCatalog');
    expect(service.hasOfferCatalog['@type']).toBe('OfferCatalog');
  });

  test('should contain WebSite schema', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const website = jsonLd['@graph'].find(
      (item): item is WebSite => item['@type'] === 'WebSite'
    );

    expect(website).toBeDefined();
    expect(website.url).toBe('https://www.neuralsolutions.cloud/');
    expect(website.inLanguage).toBe('en-CA');
    expect(website.publisher).toHaveProperty('@id');
  });

  test('should have valid service offerings in catalog', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const service = jsonLd['@graph'].find(
      (item): item is ProfessionalService => item['@type'] === 'ProfessionalService'
    );

    const offers = service?.hasOfferCatalog.itemListElement || [];

    expect(offers.length).toBeGreaterThanOrEqual(4);

    // Verify each offer has required structure
    offers.forEach((offer) => {
      expect(offer['@type']).toBe('Offer');
      expect(offer.itemOffered).toBeDefined();
      expect(offer.itemOffered['@type']).toBe('Service');
      expect(offer.itemOffered.name).toBeTruthy();
      expect(offer.itemOffered.description).toBeTruthy();
    });
  });

  test('should have valid email in contact point', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const organization = jsonLd['@graph'].find(
      (item): item is Organization => item['@type'] === 'Organization'
    );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(organization?.contactPoint.email).toMatch(emailRegex);
  });

  test('should have valid postal address', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const organization = jsonLd['@graph'].find(
      (item): item is Organization => item['@type'] === 'Organization'
    );

    expect(organization?.address['@type']).toBe('PostalAddress');
    expect(organization?.address.addressLocality).toBe('Victoria');
    expect(organization?.address.addressRegion).toBe('BC');
    expect(organization?.address.addressCountry).toBe('CA');
  });

  test('should have unique @id for each schema entity', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const ids = jsonLd['@graph']
      .filter((item) => '@id' in item && item['@id'])
      .map((item) => '@id' in item ? item['@id'] : '');

    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('should have proper schema relationships', async ({ page }) => {
    const scriptContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    const jsonLd = JSON.parse(scriptContent!) as StructuredData;

    const website = jsonLd['@graph'].find(
      (item): item is WebSite => item['@type'] === 'WebSite'
    );

    const organization = jsonLd['@graph'].find(
      (item): item is Organization => item['@type'] === 'Organization'
    );

    // Website should reference Organization as publisher
    expect(website?.publisher['@id']).toBe(organization?.['@id']);
  });
});

test.describe('SEO Meta Tags E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should have title tag', async ({ page }) => {
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    expect(title).toContain('Neural Solutions');
  });

  test('should have meta description', async ({ page }) => {
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
  });

  test('should have canonical URL', async ({ page }) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://www.neuralsolutions.cloud/');
  });

  test('should have robots meta tag', async ({ page }) => {
    const robots = await page.locator('meta[name="robots"]').getAttribute('content');
    expect(robots).toBe('index, follow');
  });

  test('should have Open Graph tags', async ({ page }) => {
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');

    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogUrl).toBe('https://www.neuralsolutions.cloud/');
    expect(ogType).toBe('website');
  });

  test('should have Twitter Card tags', async ({ page }) => {
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
    const twitterDescription = await page.locator('meta[name="twitter:description"]').getAttribute('content');

    expect(twitterCard).toBe('summary_large_image');
    expect(twitterTitle).toBeTruthy();
    expect(twitterDescription).toBeTruthy();
  });

  test('should have author, publisher, creator tags', async ({ page }) => {
    const author = await page.locator('meta[name="author"]').getAttribute('content');
    const publisher = await page.locator('meta[name="publisher"]').getAttribute('content');
    const creator = await page.locator('meta[name="creator"]').getAttribute('content');

    expect(author).toBe('Neural Solutions');
    expect(publisher).toBe('Neural Solutions');
    expect(creator).toBe('Neural Solutions');
  });
});
