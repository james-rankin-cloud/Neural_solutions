# Testing Guide - Neural Solutions

Complete guide for running tests and validations on the Neural Solutions website.

## 🚀 Quick Start

### Run All Tests (Master Suite)
```bash
npm run test:all
```

This runs the comprehensive master test suite including:
- ✓ Linting (ESLint)
- ✓ Unit Tests (Vitest)
- ✓ Schema Validation (Unit)
- ✓ E2E Tests (Playwright)
- ✓ Schema Validation (E2E)
- ✓ City SEO Tests
- ✓ City SEO Validation

**Output Example:**
```
============================================================
  Neural Solutions - Master Test Suite
============================================================

✓ PASSED Linting                    (2.5s)
✓ PASSED Unit Tests                 (3.2s)
✓ PASSED Schema Validation (Unit)   (1.8s)
✓ PASSED E2E Tests                  (45.3s)
✓ PASSED Schema Validation (E2E)    (12.1s)
✓ PASSED City SEO Tests             (8.7s)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✓ ALL TESTS PASSED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 📋 Individual Test Suites

### 1. Linting
```bash
npm run lint
```
Checks code quality and style using ESLint.

**Auto-fix issues:**
```bash
npm run lint -- --fix
```

### 2. Unit Tests
```bash
# Run all unit tests
npm test

# Run in watch mode (auto-rerun on changes)
npm run test:watch
```

Tests JavaScript/TypeScript logic, utilities, and components.

### 3. Schema Validation

#### Unit Tests
```bash
npm run test:schema
```
Validates JSON-LD schema structure:
- Organization schema
- ProfessionalService schema
- WebSite schema
- Schema relationships
- Content quality

#### E2E Tests
```bash
npm run test:e2e:schema
```
Validates schema in rendered DOM:
- JSON-LD script tags
- Meta tags (title, description, canonical)
- Open Graph tags
- Twitter Card tags
- Author/Publisher/Creator tags

#### Run Both
```bash
npm run validate:schema
```

### 4. End-to-End (E2E) Tests

```bash
# Run all E2E tests (headless)
npm run test:e2e

# Run with UI (interactive mode)
npm run test:e2e:ui
```

Tests full user workflows using Playwright:
- Page navigation
- Form submissions
- Visual regression
- Accessibility

### 5. City SEO Tests

```bash
# Playwright tests
npm run test:city-seo

# Node validation script
npm run validate:city-seo
```

Validates city landing pages:
- 18 city landing pages
- Proper meta tags per city
- Local SEO optimization
- Unique content per city

## 🎯 Testing Strategy

### Before Committing
```bash
npm run test:all
```
Run the master suite to ensure everything passes.

### During Development
```bash
npm run test:watch
```
Keep unit tests running in watch mode for rapid feedback.

### Before Deployment
```bash
npm run test:all
npm run build
```
Run all tests, then build to ensure production readiness.

### SEO Changes
```bash
npm run validate:schema
```
After modifying SEO components or structured data.

## 🔍 Test Coverage

### Unit Tests (`src/test/`)
- ✓ Schema validation
- ✓ Utility functions
- ✓ Component logic

### E2E Tests (`tests/`)
- ✓ Schema markup rendering
- ✓ City landing pages
- ✓ User workflows
- ✓ SEO meta tags

## 📊 Understanding Test Results

### Success
```
✓ PASSED Test Name (2.5s)
```
All assertions passed within the time shown.

### Failure
```
✗ FAILED Test Name (1.2s)
```
One or more assertions failed. Check output for details.

### Test Summary
```
Statistics:
  Total Tests:    7
  Passed:         6
  Failed:         1
  Total Duration: 73.6s
```

## 🛠️ Troubleshooting

### Linting Failures
**Issue:** Code style violations
**Fix:**
```bash
npm run lint -- --fix
```

### Unit Test Failures
**Issue:** Logic errors or broken functionality
**Fix:**
1. Run tests in watch mode: `npm run test:watch`
2. Review failing test output
3. Fix the code or update the test
4. Verify fix by running tests again

### Schema Validation Failures
**Issue:** Invalid JSON-LD structure
**Fix:**
1. Check `LandingPage.tsx` structured data
2. Verify against Schema.org specifications
3. Run: `npm run test:schema`
4. Use Google's Rich Results Test: https://search.google.com/test/rich-results

### E2E Test Failures
**Issue:** Browser automation failures
**Fix:**
1. Ensure development server is running
2. Run with UI: `npm run test:e2e:ui`
3. Check for timing issues
4. Verify selectors are correct

### City SEO Test Failures
**Issue:** Missing or incorrect city pages
**Fix:**
1. Check `lib/data/cities.ts`
2. Verify city routes in `App.tsx`
3. Ensure CityLanding component is correct

## 🔗 External Validation Tools

### Google Tools
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/

### Schema Validators
- **Schema.org Validator**: https://validator.schema.org/
- **JSON-LD Playground**: https://json-ld.org/playground/

### SEO Tools
- **Lighthouse**: Built into Chrome DevTools
- **Screaming Frog**: Desktop SEO crawler
- **Ahrefs**: Comprehensive SEO analysis

## 📁 Test File Structure

```
├── src/
│   └── test/
│       ├── schema-validation.test.ts    # JSON-LD validation
│       ├── example.test.ts               # Example tests
│       └── README.md                     # Test documentation
├── tests/
│   ├── schema-markup.spec.ts            # E2E schema validation
│   ├── city-seo.spec.ts                 # City landing pages
│   └── README.md                        # E2E test docs
└── scripts/
    ├── run-all-tests.mjs                # Master test runner
    └── validate-city-seo.js             # City validation
```

## 🎨 CI/CD Integration

### GitHub Actions Example
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:all
```

### Pre-commit Hook
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/sh
npm run test:all
```

## 📝 Writing New Tests

### Unit Test
```typescript
// src/test/my-feature.test.ts
import { describe, it, expect } from 'vitest';

describe('My Feature', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

### E2E Test
```typescript
// tests/my-feature.spec.ts
import { test, expect } from '@playwright/test';

test('should display correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});
```

## 🎯 Best Practices

1. **Run tests before committing**
   - Prevents broken code from being committed
   - Catches issues early

2. **Use watch mode during development**
   - Immediate feedback on changes
   - Faster development cycle

3. **Keep tests fast**
   - Unit tests should be < 100ms
   - E2E tests should be < 30s

4. **Write meaningful assertions**
   - Test behavior, not implementation
   - Use descriptive test names

5. **Maintain test coverage**
   - Add tests for new features
   - Update tests when refactoring

## 🆘 Getting Help

### Test Output
All test output is displayed in the terminal with color-coded results.

### Verbose Output
Some test commands support verbose flags:
```bash
npm run test:e2e -- --debug
```

### Documentation
- Vitest: https://vitest.dev/
- Playwright: https://playwright.dev/
- Schema.org: https://schema.org/

## 📈 Performance Targets

| Test Suite | Target Time |
|-----------|------------|
| Linting | < 5s |
| Unit Tests | < 10s |
| Schema Validation | < 5s |
| E2E Tests | < 60s |
| **Total** | **< 90s** |

---

**Last Updated:** 2025-05-12
**Version:** 1.0.0
