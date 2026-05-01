# City Landing Pages SEO Testing

This directory contains automated tests for validating SEO metadata across all 18 city landing pages.

## Test Files

### `city-seo.spec.ts` - Playwright E2E Tests

Comprehensive browser-based tests that verify:
- ✅ Unique page titles for each city
- ✅ Unique meta descriptions (150-160 characters)
- ✅ City-specific keywords
- ✅ Correct canonical URLs
- ✅ Geographic meta tags (geo.region, geo.placename, geo.position)
- ✅ H1 headlines containing city names
- ✅ LocalBusiness structured data with correct coordinates
- ✅ Breadcrumb structured data
- ✅ Contact form functionality
- ✅ Calendar booking options
- ✅ Mobile responsiveness

**Tests run for all 18 cities:**
Victoria BC, Vancouver BC, Toronto ON, Calgary AB, Montreal QC, Edmonton AB, Ottawa ON, Winnipeg MB, Mississauga ON, Brampton ON, Surrey BC, Burnaby BC, Richmond BC, Halifax NS, Kelowna BC, Saskatoon SK, Regina SK, Quebec City QC

## Running Tests

### Quick Validation (No Browser Required)

Validates city data configuration without starting a browser:

```bash
npm run validate:city-seo
```

**What it checks:**
- Meta descriptions are unique and 150-160 chars
- Meta titles are unique and contain city name
- Keywords include city name
- Coordinates are valid for Canada
- Hero headlines are unique
- Slugs follow correct format
- Province abbreviations are valid

**Expected output:**
```
🔍 Validating SEO data for 18 city landing pages...

✓ [1/18] Victoria, BC: Validated
✓ [2/18] Vancouver, BC: Validated
...
✓ [18/18] Quebec City, QC: Validated

============================================================
📊 VALIDATION SUMMARY
============================================================

✅ Total cities validated: 18
✅ Unique meta descriptions: 18
✅ Unique meta titles: 18
✅ Unique canonical URLs: 18

🎉 All validations passed! SEO data is perfect.
```

### Full E2E Testing (Browser-Based)

Runs complete SEO tests in actual browsers (Chromium, Firefox, WebKit):

```bash
# Run all city SEO tests
npm run test:city-seo

# Run with UI mode (interactive)
npm run test:e2e:ui

# Run all Playwright tests
npm run test:e2e
```

**What it tests:**
- Renders each city page in a real browser
- Inspects DOM for meta tags
- Validates structured data (JSON-LD)
- Tests form interactions
- Checks mobile responsiveness
- Verifies no duplicate content across cities

**Expected output:**
```
Running 198 tests across 18 cities...

  ✓ Victoria, BC
    ✓ should have correct page title (245ms)
    ✓ should have unique meta description (189ms)
    ✓ should have meta keywords (156ms)
    ✓ should have correct canonical URL (134ms)
    ✓ should have geographic meta tags (167ms)
    ✓ should have H1 with city name (145ms)
    ✓ should have LocalBusiness structured data (234ms)
    ✓ should have Breadcrumb structured data (198ms)
    ✓ should have contact form (312ms)
    ✓ should have calendar booking options (278ms)
    ✓ should be mobile responsive (234ms)

  ... (17 more cities)

  ✓ Cross-city uniqueness tests
    ✓ all cities should have unique meta descriptions (2.3s)
    ✓ all cities should have unique page titles (2.1s)
    ✓ all cities should have unique canonical URLs (2.2s)

198 passed (45.2s)
```

## Development Workflow

### Before Committing Changes

Always run validation before committing:

```bash
npm run validate:city-seo
```

### Before Deploying

Run full E2E tests:

```bash
npm run test:city-seo
```

### When Adding New Cities

1. Add city data to `src/lib/data/cities.ts`
2. Run validation: `npm run validate:city-seo`
3. Fix any errors/warnings
4. Run E2E tests: `npm run test:city-seo`
5. Verify all tests pass

### When Updating City Data

1. Modify city object in `src/lib/data/cities.ts`
2. Run validation to check for duplicates or issues
3. Run E2E tests to ensure page renders correctly

## Debugging Failed Tests

### Validation Script Fails

**Error: Duplicate meta description**
- Check `metaDescription` field for each city
- Ensure each city has unique description

**Warning: Meta description too short/long**
- Aim for 150-160 characters
- Include city name and key services

**Error: Invalid coordinates**
- Verify coordinates are numbers, not strings
- Check latitude/longitude are within Canada bounds

### Playwright Tests Fail

**View test results with UI:**
```bash
npm run test:e2e:ui
```

**Run specific city test:**
```bash
npx playwright test -g "Victoria, BC"
```

**Debug mode (step through tests):**
```bash
npx playwright test --debug
```

**Generate test report:**
```bash
npx playwright show-report
```

## Test Coverage

Each city page is tested for:

| Test Category | Number of Tests |
|--------------|-----------------|
| SEO Meta Tags | 5 per city (90 total) |
| Structured Data | 2 per city (36 total) |
| Content | 1 per city (18 total) |
| Functionality | 2 per city (36 total) |
| Responsiveness | 1 per city (18 total) |
| Cross-City Uniqueness | 3 total |
| **TOTAL** | **201 tests** |

## Continuous Integration

Add to your CI/CD pipeline:

```yaml
# .github/workflows/test.yml
- name: Validate City SEO Data
  run: npm run validate:city-seo

- name: Run E2E City Tests
  run: npm run test:city-seo
```

## Troubleshooting

### "Cannot find module '@playwright/test'"

Install Playwright:
```bash
npm install -D @playwright/test
npx playwright install
```

### "Port 8080 already in use"

The dev server may already be running. The validation script doesn't need it, only Playwright tests do.

For Playwright tests, update `playwright.config.ts` to use a different port or stop the existing dev server.

### Tests timing out

Increase timeout in `playwright.config.ts`:
```typescript
timeout: 60000, // 60 seconds
```

## Performance

- **Validation script:** ~1-2 seconds (no browser startup)
- **Full Playwright suite:** ~40-60 seconds (renders 18 pages in browser)
- **Single city E2E test:** ~2-3 seconds

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Meta Tags Checker](https://metatags.io/)
