# Schema Validation Tests

This directory contains unit tests for validating JSON-LD structured data markup.

## Overview

The schema validation tests ensure that the JSON-LD structured data on the website is:
- Valid JSON
- Contains all required Schema.org properties
- Has proper schema relationships
- Maintains consistency across different schema types

## Running Tests

### Run Schema Validation Tests Only
```bash
npm run test:schema
```

### Run All Unit Tests
```bash
npm test
```

### Run in Watch Mode
```bash
npm run test:watch
```

### Run E2E Schema Tests
```bash
npm run test:e2e:schema
```

### Run Complete Schema Validation (Unit + E2E)
```bash
npm run validate:schema
```

## Test Structure

### schema-validation.test.ts
Unit tests that validate the JSON-LD structure:

- **JSON Validity**: Ensures the schema is valid JSON
- **Organization Schema**: Validates business information, address, contact details
- **ProfessionalService Schema**: Validates service offerings, catalog structure
- **WebSite Schema**: Validates website metadata and language settings
- **Schema Relationships**: Validates @id references and relationships
- **Content Quality**: Validates descriptions, names, and URLs

## Schema Types Tested

### 1. Organization
- Business name, URL, logo
- Physical address (Victoria, BC)
- Contact information
- Area served (Canada)

### 2. ProfessionalService
- Service description
- Service catalog with offers
- Individual service listings
- Price range indicator

### 3. WebSite
- Website metadata
- Language (en-CA)
- Publisher relationship to Organization

## Adding New Schema Tests

When adding new schema types or properties:

1. Add the schema structure to `getStructuredData()` function
2. Create a new `describe` block for the schema type
3. Add tests for required properties
4. Add validation for relationships with existing schemas
5. Update the E2E tests in `tests/schema-markup.spec.ts`

## Example: Testing a New Schema Property

```typescript
it('should have valid property', () => {
  const schema = structuredData['@graph'].find(
    (item: any) => item['@type'] === 'Organization'
  );

  expect(schema.propertyName).toBeTruthy();
  expect(typeof schema.propertyName).toBe('string');
});
```

## Validation Tools

The tests validate against Schema.org specifications:
- https://schema.org/Organization
- https://schema.org/ProfessionalService
- https://schema.org/WebSite

You can also use Google's Rich Results Test:
https://search.google.com/test/rich-results

## Continuous Integration

These tests should be run:
- Before each commit
- In CI/CD pipeline
- After any changes to SEO components or structured data

## Troubleshooting

### Test Failures

If tests fail, check:
1. JSON syntax in the structured data
2. Required properties are present
3. URLs match the canonical domain
4. @id references are correct
5. Schema types match Schema.org specifications

### Common Issues

- **Invalid JSON**: Check for trailing commas, missing quotes
- **Missing Required Properties**: Refer to Schema.org documentation
- **Incorrect @type**: Verify schema type name matches Schema.org exactly
- **Broken @id References**: Ensure referenced @id exists in the graph
