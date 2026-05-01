import { test, expect } from '@playwright/test';
import { cities } from '../src/lib/data/cities';

test.describe('City Landing Pages SEO', () => {
  // Test each city page
  cities.forEach((city) => {
    test.describe(`${city.name}, ${city.provinceAbbr}`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/ai-agency-${city.slug}`);
      });

      test('should have correct page title', async ({ page }) => {
        const title = await page.title();
        expect(title).toBe(`${city.metaTitle} | Neural Solutions`);
        expect(title).toContain(city.name);
      });

      test('should have unique meta description', async ({ page }) => {
        const description = await page.locator('meta[name="description"]').getAttribute('content');
        expect(description).toBe(city.metaDescription);
        expect(description).toBeTruthy();
        expect(description!.length).toBeGreaterThanOrEqual(150);
        expect(description!.length).toBeLessThanOrEqual(160);
      });

      test('should have meta keywords', async ({ page }) => {
        const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
        expect(keywords).toBeTruthy();
        expect(keywords).toContain(city.name);

        // Verify keywords match the city data
        const expectedKeywords = city.keywords.join(', ');
        expect(keywords).toBe(expectedKeywords);
      });

      test('should have correct canonical URL', async ({ page }) => {
        const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
        expect(canonical).toBe(`https://neuralsolutions.ca/ai-agency-${city.slug}`);
      });

      test('should have geographic meta tags', async ({ page }) => {
        const geoRegion = await page.locator('meta[name="geo.region"]').getAttribute('content');
        const geoPlace = await page.locator('meta[name="geo.placename"]').getAttribute('content');
        const geoPosition = await page.locator('meta[name="geo.position"]').getAttribute('content');

        expect(geoRegion).toBe(`CA-${city.provinceAbbr}`);
        expect(geoPlace).toBe(city.name);
        expect(geoPosition).toBe(`${city.coordinates.lat};${city.coordinates.lng}`);
      });

      test('should have H1 with city name', async ({ page }) => {
        const h1Text = await page.locator('h1').textContent();
        expect(h1Text).toBe(city.heroHeadline);
        expect(h1Text).toContain(city.name);
      });

      test('should have LocalBusiness structured data', async ({ page }) => {
        const schemas = await page.locator('script[type="application/ld+json"]').all();
        expect(schemas.length).toBeGreaterThanOrEqual(1);

        let localBusinessSchema = null;
        for (const schema of schemas) {
          const content = await schema.textContent();
          const parsed = JSON.parse(content!);
          if (parsed['@type'] === 'ProfessionalService') {
            localBusinessSchema = parsed;
            break;
          }
        }

        expect(localBusinessSchema).toBeTruthy();
        expect(localBusinessSchema!.name).toBe(`Neural Solutions - ${city.name}`);
        expect(localBusinessSchema!.address.addressLocality).toBe(city.name);
        expect(localBusinessSchema!.address.addressRegion).toBe(city.provinceAbbr);
        expect(localBusinessSchema!.address.addressCountry).toBe('CA');
        expect(localBusinessSchema!.geo.latitude).toBe(city.coordinates.lat);
        expect(localBusinessSchema!.geo.longitude).toBe(city.coordinates.lng);
      });

      test('should have Breadcrumb structured data', async ({ page }) => {
        const schemas = await page.locator('script[type="application/ld+json"]').all();

        let breadcrumbSchema = null;
        for (const schema of schemas) {
          const content = await schema.textContent();
          const parsed = JSON.parse(content!);
          if (parsed['@type'] === 'BreadcrumbList') {
            breadcrumbSchema = parsed;
            break;
          }
        }

        expect(breadcrumbSchema).toBeTruthy();
        expect(breadcrumbSchema!.itemListElement).toHaveLength(2);
        expect(breadcrumbSchema!.itemListElement[0].name).toBe('Home');
        expect(breadcrumbSchema!.itemListElement[1].name).toBe(`AI Agency ${city.name}`);
      });

      test('should have contact form', async ({ page }) => {
        // Check for form inputs
        await expect(page.locator('input[placeholder="Your name"]')).toBeVisible();
        await expect(page.locator('input[placeholder="your@email.com"]')).toBeVisible();
        await expect(page.locator('textarea[placeholder*="Tell us about your project"]')).toBeVisible();
      });

      test('should have calendar booking options', async ({ page }) => {
        // Click calendar tab
        await page.click('text=Book Meeting');

        // Check for meeting type buttons
        await expect(page.locator('text=30-Min Discovery Call')).toBeVisible();
        await expect(page.locator('text=45-Min Strategy Session')).toBeVisible();
      });

      test('should be mobile responsive', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('input[placeholder="Your name"]')).toBeVisible();
      });
    });
  });

  // Cross-city uniqueness tests
  test('all cities should have unique meta descriptions', async ({ page }) => {
    const descriptions = new Set();

    for (const city of cities) {
      await page.goto(`/ai-agency-${city.slug}`);
      const description = await page.locator('meta[name="description"]').getAttribute('content');

      // Check for duplicates
      expect(descriptions.has(description)).toBe(false);
      descriptions.add(description);
    }

    expect(descriptions.size).toBe(cities.length);
  });

  test('all cities should have unique page titles', async ({ page }) => {
    const titles = new Set();

    for (const city of cities) {
      await page.goto(`/ai-agency-${city.slug}`);
      const title = await page.title();

      // Check for duplicates
      expect(titles.has(title)).toBe(false);
      titles.add(title);
    }

    expect(titles.size).toBe(cities.length);
  });

  test('all cities should have unique canonical URLs', async ({ page }) => {
    const canonicals = new Set();

    for (const city of cities) {
      await page.goto(`/ai-agency-${city.slug}`);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');

      // Check for duplicates
      expect(canonicals.has(canonical)).toBe(false);
      canonicals.add(canonical);
    }

    expect(canonicals.size).toBe(cities.length);
  });
});
