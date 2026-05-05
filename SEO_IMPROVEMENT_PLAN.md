# SEO Improvement Implementation Plan - Neural Solutions

## Problem Statement

Your website has excellent performance (99/100) but critical SEO issues:
- **SEO Score**: 30/100
- **Meta Tags**: 0/100
- **Schema**: 0/100
- **Root Cause**: Client-side rendering - search engines receive empty HTML (`<div id="root">`) and must execute JavaScript to see content

While you have comprehensive SEO infrastructure (React Helmet, structured data schemas, 18 city landing pages), it's all invisible to search engine crawlers because it's rendered client-side.

## Solution Overview

Implement **Static Site Generation (SSG)** using Vike (vite-plugin-ssr) to pre-render all 25 pages at build time, making your SEO metadata and content immediately visible to search engines without requiring JavaScript execution.

## Implementation Phases

### Phase 1: Static Site Generation with Vike (Priority: CRITICAL)

**Goal**: Pre-render all 25 pages with full HTML content and meta tags

**Steps**:
1. Install dependencies:
   ```bash
   npm install vike vike-react
   ```

2. Create Vike configuration files:
   - `src/+config.ts` - Define all 25 routes for pre-rendering
   - `src/+Layout.tsx` - Root layout wrapper (QueryClient, HelmetProvider)
   - `src/renderer/+onRenderHtml.tsx` - Server-side HTML rendering
   - `src/renderer/+onRenderClient.tsx` - Client-side hydration

3. Modify `vite.config.ts`:
   ```typescript
   import vike from "vike/plugin";

   export default defineConfig({
     plugins: [
       react(),
       vike({ prerender: true }), // Enable pre-rendering
     ],
     // ... existing config
   });
   ```

4. Extract meta tag logic for SSR:
   - Create `src/lib/meta/pageMeta.ts` - Centralized meta tag extraction
   - Function to get meta tags based on route (homepage, services, city pages, etc.)
   - City pages use existing `cities.ts` data

5. Pre-render structured data:
   - Include JSON-LD schemas in initial HTML
   - Organization schema on homepage
   - LocalBusiness schema on homepage and city pages
   - Breadcrumb schema on all pages

**Routes to pre-render (25 total)**:
- 7 static: `/`, `/services`, `/case-studies`, `/about`, `/book-audit`, `/ui-code-kit`, `/404`
- 18 city pages: `/ai-agency-{slug}` (Victoria, Vancouver, Toronto, Calgary, Montreal, Edmonton, Ottawa, Winnipeg, Mississauga, Brampton, Surrey, Burnaby, Richmond, Halifax, Kelowna, Saskatoon, Regina, Quebec City)

**Critical files**:
- `vite.config.ts`
- `src/components/SEO.tsx`
- `src/lib/data/cities.ts`
- `src/pages/CityLanding.tsx`
- `index.html`

---

### Phase 2: CSS Optimization (Priority: HIGH)

**Goal**: Eliminate render-blocking CSS (13.9 KB blocking 67ms)

**Steps**:
1. Install critical CSS plugin:
   ```bash
   npm install -D vite-plugin-critical
   ```

2. Configure in `vite.config.ts`:
   ```typescript
   import critical from 'vite-plugin-critical';

   plugins: [
     critical({
       pages: ['/', '/services', '/ai-agency-victoria'],
       inline: true,
       extract: true,
       dimensions: [
         { width: 375, height: 667 },   // Mobile
         { width: 1920, height: 1080 }, // Desktop
       ],
     }),
   ]
   ```

3. Optimize font loading:
   - Add `font-display: swap` to all fonts
   - Preload critical fonts (Outfit, Playfair Display)
   - Update `index.html` with preload links

**Expected outcome**: 40ms faster initial render, improved Largest Contentful Paint

**Critical files**:
- `vite.config.ts`
- `index.html`
- `src/index.css`

---

### Phase 3: Dynamic Sitemap Generation (Priority: HIGH)

**Goal**: Generate comprehensive sitemap with all 25 routes

**Current issue**: Static sitemap missing 18 city pages

**Steps**:
1. Install sitemap plugin:
   ```bash
   npm install -D vite-plugin-sitemap
   ```

2. Configure in `vite.config.ts`:
   ```typescript
   import sitemap from 'vite-plugin-sitemap';
   import { cities } from './src/lib/data/cities';

   const routes = [
     { path: '/', changefreq: 'weekly', priority: 1.0 },
     { path: '/services', changefreq: 'monthly', priority: 0.9 },
     { path: '/case-studies', changefreq: 'monthly', priority: 0.8 },
     { path: '/about', changefreq: 'monthly', priority: 0.7 },
     { path: '/book-audit', changefreq: 'monthly', priority: 0.9 },
     ...cities.map(city => ({
       path: `/ai-agency-${city.slug}`,
       changefreq: 'monthly',
       priority: 0.8,
     })),
   ];

   plugins: [
     sitemap({
       hostname: 'https://neuralsolutions.ca',
       routes: routes.map(r => r.path),
     }),
   ]
   ```

3. Update `robots.txt` to reference dynamic sitemap

**Critical files**:
- `vite.config.ts`
- `public/robots.txt`

---

### Phase 4: Accessibility Improvements (Priority: MEDIUM)

**Goal**: Improve accessibility score from 89/100 to 100/100

**Common issues to audit**:
1. **Alt text**: Verify all images have descriptive alt text
   - Team photos: `Jas.PNG`, `james_headshot.png`, `mehar.PNG`
   - Case study logos: `ageless-living.jpg`, `harrisonforbes.jpg`
   - Hero background video needs `aria-label`

2. **Color contrast**: Audit text colors against backgrounds
   - Check muted text (`text-muted-foreground`)
   - Ensure 4.5:1 ratio for normal text, 3:1 for large text

3. **Form labels**: Contact forms need explicit labels
   - `BookAudit.tsx` - Add labels with `sr-only` class
   - `CityLanding.tsx` - Add labels for calendar booking form

4. **ARIA attributes**:
   - Navigation: Add `aria-current` for active page
   - Modal dialogs: Add `aria-modal="true"`
   - Ensure proper focus management

5. **Focus styles**: Enhance `:focus-visible` styles in `src/index.css`

6. **Semantic HTML**: Verify heading hierarchy (h1 → h2 → h3, no skips)

**Testing process**:
1. Run Lighthouse accessibility audit
2. Run axe DevTools scan
3. Manual keyboard navigation test
4. Screen reader test (NVDA/JAWS)

**Critical files**:
- `src/components/Navbar.tsx`
- `src/pages/BookAudit.tsx`
- `src/pages/CityLanding.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/index.css`

---

## Implementation Sequence

### Week 1: Pre-rendering Setup
- **Day 1-2**: Install Vike, create configuration files, define routes
- **Day 3-4**: Implement meta tag extraction for all 25 pages
- **Day 5**: Test pre-rendered output locally, verify HTML content

### Week 2: SEO Metadata
- **Day 1-2**: Pre-render structured data schemas
- **Day 3**: Implement dynamic sitemap generation
- **Day 4**: Test with Google Search Console
- **Day 5**: Buffer for fixes and testing

### Week 3: CSS Optimization
- **Day 1-2**: Implement critical CSS extraction
- **Day 3**: Optimize font loading
- **Day 4-5**: Test page load performance with Lighthouse

### Week 4: Accessibility & Testing
- **Day 1-2**: Run accessibility audits, identify issues
- **Day 3-4**: Fix accessibility issues
- **Day 5**: Final end-to-end testing

---

## Verification & Testing

### Test 1: Pre-rendered HTML Content
```bash
# Build the site
npm run build

# Preview locally
npm run preview

# Test that HTML contains actual content (not empty div)
curl http://localhost:4173/ | grep "<title>"
curl http://localhost:4173/ai-agency-victoria | grep "Victoria"
```

**Expected**: Full HTML with content visible before JavaScript execution

### Test 2: Meta Tags in Initial HTML
```bash
# Check meta tags are in initial HTML
curl http://localhost:4173/ | grep "meta name=\"description\""
curl http://localhost:4173/ai-agency-toronto | grep "Toronto"
```

**Expected**: Meta tags present in initial HTML response

### Test 3: Structured Data Present
```bash
# Verify JSON-LD schemas in HTML
curl http://localhost:4173/ | grep "application/ld+json"
```

**Expected**: Organization, LocalBusiness, and Breadcrumb schemas in HTML

### Test 4: Search Engine Crawlability
**Disable JavaScript in Chrome DevTools**:
1. Open DevTools → Settings → Debugger
2. Check "Disable JavaScript"
3. Navigate to https://neuralsolutions.ca
4. Verify content is visible

**Expected**: Full page content visible without JavaScript

### Test 5: Lighthouse Scores
```bash
# Run Lighthouse audit
npm install -g @lhci/cli
lhci autorun
```

**Expected scores**:
- SEO: 90+ (up from 30)
- Performance: 95-99 (maintain near 99)
- Accessibility: 100 (up from 89)
- Best Practices: 100 (maintain)

### Test 6: Google Rich Results
Visit https://search.google.com/test/rich-results
- Test homepage for Organization schema
- Test city page for LocalBusiness schema
- Test services page for Service schema

**Expected**: All schemas validated successfully

### Test 7: Sitemap Validation
```bash
# Check sitemap contains all 25 routes
curl http://localhost:4173/sitemap.xml | grep "ai-agency-victoria"
```

**Expected**: All 25 URLs present with proper priority and changefreq

### Test 8: Build Performance
```bash
# Measure build time
time npm run build
```

**Expected**: < 30 seconds for 25 pre-rendered pages

---

## Expected Outcomes

### SEO Score Improvements
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| SEO Score | 30/100 | 90+/100 | +60 points |
| Meta Tags | 0/100 | 100/100 | +100 points |
| Schema | 0/100 | 100/100 | +100 points |
| Accessibility | 89/100 | 100/100 | +11 points |
| Performance | 99/100 | 95-99/100 | Maintain |

### Search Engine Benefits
1. **Immediate indexing**: All 25 pages discoverable without JavaScript
2. **Improved rankings**: City landing pages rank for local searches
3. **Rich snippets**: Structured data enables enhanced search results
4. **Faster mobile loading**: Pre-rendered pages load instantly
5. **Better social sharing**: OG tags work immediately (no JS required)

### Build Performance
- **Current**: ~7-8 seconds (empty HTML)
- **Target**: ~15-20 seconds (pre-rendered HTML)
- **Acceptable**: Up to 30 seconds for 25 pages

---

## Dependencies to Install

```json
{
  "dependencies": {
    "vike": "^0.4.160",
    "vike-react": "^0.4.10"
  },
  "devDependencies": {
    "vite-plugin-sitemap": "^0.6.1",
    "vite-plugin-critical": "^1.0.0",
    "@lhci/cli": "^0.13.0"
  }
}
```

---

## Risk Mitigation

### Risk 1: Vike Changes Routing Behavior
**Mitigation**:
- Test all 25 routes manually
- Update E2E tests (`tests/city-seo.spec.ts`) to verify new build output
- Maintain backward compatibility with existing component structure

### Risk 2: React Helmet Conflicts with SSR
**Mitigation**:
- Use `<Helmet prioritizeSeoTags>` to prefer SSR-rendered tags
- Test client-side navigation to ensure meta tags update correctly
- Fallback to client-side rendering if SSR fails

### Risk 3: Build Time Impact
**Mitigation**:
- Profile build performance
- Optimize heavy pages (large images/videos)
- Consider incremental static regeneration if needed

### Risk 4: Deployment Configuration
**Mitigation**:
- Verify hosting provider serves pre-rendered HTML correctly
- Test SPA fallback behavior (client-side routing still works)
- Ensure 404 handling works with pre-rendered pages

---

## Post-Implementation Monitoring

### Week 1-2: Immediate Validation
- Submit sitemap to Google Search Console
- Request indexing for 5 priority pages (homepage, Victoria, Vancouver, Toronto, Services)
- Monitor Lighthouse scores

### Week 3-4: Search Engine Response
- Check Google/Bing index coverage
- Monitor URL inspection tool for rendering issues
- Verify structured data appears in search results

### Month 2-3: SEO Impact
- Track organic traffic increase
- Monitor city landing page rankings for "{city} AI agency" searches
- Analyze search query performance in Google Search Console
- A/B test meta descriptions for CTR optimization

---

## Critical Files Summary

**New files to create (7)**:
1. `src/+config.ts` - Vike configuration, route definitions
2. `src/+Layout.tsx` - Root layout wrapper
3. `src/renderer/+onRenderHtml.tsx` - Server-side HTML rendering
4. `src/renderer/+onRenderClient.tsx` - Client-side hydration
5. `src/lib/meta/pageMeta.ts` - Centralized meta tag extraction
6. `lighthouserc.json` - Lighthouse CI configuration
7. `.github/workflows/lighthouse.yml` - Automated Lighthouse testing (optional)

**Files to modify (5)**:
1. `vite.config.ts` - Add Vike, sitemap, critical CSS plugins
2. `package.json` - Add new dependencies
3. `src/components/SEO.tsx` - Add SSR compatibility
4. `index.html` - Add meta tags fallback template
5. `src/App.tsx` - Minimal adjustments for Vike routing

**Accessibility fixes (estimated 8 files)**:
1. `src/components/Navbar.tsx`
2. `src/pages/BookAudit.tsx`
3. `src/pages/CityLanding.tsx`
4. `src/components/sections/HeroSection.tsx`
5. `src/components/Footer.tsx`
6. `src/index.css` - Focus styles
7. `src/pages/About.tsx` - Team photo alt text
8. `src/pages/CaseStudies.tsx` - Case study image alt text

---

## Success Criteria

✅ **Phase 1 Complete**: All 25 pages pre-render with full HTML content
✅ **Phase 2 Complete**: CSS no longer render-blocking, critical CSS inlined
✅ **Phase 3 Complete**: Sitemap includes all 25 routes, submitted to Google
✅ **Phase 4 Complete**: Accessibility score reaches 100/100
✅ **Final Verification**: SEO score 90+, all meta tags and schemas visible to crawlers without JavaScript
