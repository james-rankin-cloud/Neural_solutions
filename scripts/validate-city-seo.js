#!/usr/bin/env node

/**
 * City SEO Data Validation Script
 *
 * Validates that all city data meets SEO requirements:
 * - Unique meta descriptions
 * - Unique titles
 * - Proper keyword formatting
 * - Valid coordinates
 * - Description length requirements
 */

import { cities } from '../src/lib/data/cities.ts';

const errors = [];
const warnings = [];

console.log('\n🔍 Validating SEO data for 18 city landing pages...\n');

// Track for uniqueness checks
const metaDescriptions = new Set();
const metaTitles = new Set();
const canonicalUrls = new Set();
const heroHeadlines = new Set();

cities.forEach((city, index) => {
  const cityNum = index + 1;
  const prefix = `[${cityNum}/18] ${city.name}, ${city.provinceAbbr}:`;

  // 1. Check meta title
  if (!city.metaTitle) {
    errors.push(`${prefix} Missing meta title`);
  } else {
    if (metaTitles.has(city.metaTitle)) {
      errors.push(`${prefix} Duplicate meta title: "${city.metaTitle}"`);
    }
    metaTitles.add(city.metaTitle);

    if (!city.metaTitle.includes(city.name)) {
      warnings.push(`${prefix} Meta title doesn't contain city name`);
    }

    if (city.metaTitle.length > 60) {
      warnings.push(`${prefix} Meta title too long (${city.metaTitle.length} chars, max 60)`);
    }
  }

  // 2. Check meta description
  if (!city.metaDescription) {
    errors.push(`${prefix} Missing meta description`);
  } else {
    if (metaDescriptions.has(city.metaDescription)) {
      errors.push(`${prefix} Duplicate meta description`);
    }
    metaDescriptions.add(city.metaDescription);

    const descLength = city.metaDescription.length;
    if (descLength < 150) {
      warnings.push(`${prefix} Meta description too short (${descLength} chars, min 150)`);
    }
    if (descLength > 160) {
      warnings.push(`${prefix} Meta description too long (${descLength} chars, max 160)`);
    }
  }

  // 3. Check keywords
  if (!city.keywords || city.keywords.length === 0) {
    errors.push(`${prefix} Missing keywords`);
  } else {
    const hasCity = city.keywords.some(k => k.toLowerCase().includes(city.name.toLowerCase()));
    if (!hasCity) {
      warnings.push(`${prefix} Keywords don't contain city name`);
    }

    if (city.keywords.length < 5) {
      warnings.push(`${prefix} Only ${city.keywords.length} keywords (recommend 5-10)`);
    }
  }

  // 4. Check coordinates
  if (!city.coordinates || typeof city.coordinates.lat !== 'number' || typeof city.coordinates.lng !== 'number') {
    errors.push(`${prefix} Invalid coordinates`);
  } else {
    // Basic validation for Canada coordinates
    if (city.coordinates.lat < 41 || city.coordinates.lat > 84) {
      warnings.push(`${prefix} Latitude ${city.coordinates.lat} seems out of range for Canada`);
    }
    if (city.coordinates.lng < -141 || city.coordinates.lng > -52) {
      warnings.push(`${prefix} Longitude ${city.coordinates.lng} seems out of range for Canada`);
    }
  }

  // 5. Check hero headline
  if (!city.heroHeadline) {
    errors.push(`${prefix} Missing hero headline`);
  } else {
    if (heroHeadlines.has(city.heroHeadline)) {
      warnings.push(`${prefix} Duplicate hero headline`);
    }
    heroHeadlines.add(city.heroHeadline);

    if (!city.heroHeadline.includes(city.name)) {
      warnings.push(`${prefix} Hero headline doesn't contain city name`);
    }
  }

  // 6. Check description
  if (!city.description) {
    errors.push(`${prefix} Missing description`);
  } else {
    if (city.description.length < 100) {
      warnings.push(`${prefix} Description very short (${city.description.length} chars)`);
    }
  }

  // 7. Check slug format
  if (!city.slug || !/^[a-z0-9-]+$/.test(city.slug)) {
    errors.push(`${prefix} Invalid slug format: "${city.slug}"`);
  } else {
    const canonicalUrl = `https://neuralsolutions.ca/ai-agency-${city.slug}`;
    if (canonicalUrls.has(canonicalUrl)) {
      errors.push(`${prefix} Duplicate canonical URL`);
    }
    canonicalUrls.add(canonicalUrl);
  }

  // 8. Check province abbreviation
  const validProvinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
  if (!validProvinces.includes(city.provinceAbbr)) {
    errors.push(`${prefix} Invalid province abbreviation: "${city.provinceAbbr}"`);
  }

  console.log(`✓ ${prefix} Validated`);
});

// Print summary
console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION SUMMARY');
console.log('='.repeat(60));

console.log(`\n✅ Total cities validated: ${cities.length}`);
console.log(`✅ Unique meta descriptions: ${metaDescriptions.size}`);
console.log(`✅ Unique meta titles: ${metaTitles.size}`);
console.log(`✅ Unique canonical URLs: ${canonicalUrls.size}`);

if (errors.length === 0 && warnings.length === 0) {
  console.log('\n🎉 All validations passed! SEO data is perfect.\n');
  process.exit(0);
}

if (errors.length > 0) {
  console.log(`\n❌ ERRORS (${errors.length}):`);
  errors.forEach(err => console.log(`  ${err}`));
}

if (warnings.length > 0) {
  console.log(`\n⚠️  WARNINGS (${warnings.length}):`);
  warnings.forEach(warn => console.log(`  ${warn}`));
}

console.log('\n');

if (errors.length > 0) {
  console.log('❌ Validation failed. Please fix errors above.\n');
  process.exit(1);
} else {
  console.log('✅ Validation passed with warnings. Review warnings above.\n');
  process.exit(0);
}
