# Canadian SEO Implementation Checklist

## ✅ COMPLETED

- [x] Install react-helmet-async package
- [x] Create sitemap.xml with Canadian hreflang tags
- [x] Update robots.txt with sitemap reference
- [x] Create SEO component (src/components/SEO.tsx)
- [x] Create StructuredData component (src/components/StructuredData.tsx)

---

## 🔲 REMAINING TASKS

### HIGH PRIORITY - Schema/Structured Data ✅ COMPLETED

#### Create Schema Files (src/lib/schema/ folder)
- [x] Create folder: `src/lib/schema/`
- [x] Create `organization.ts` - Organization schema (name, Victoria BC location, areaServed: Canada/BC/Victoria/Vancouver/Kelowna/Langley)
- [x] Create `localBusiness.ts` - LocalBusiness schema (geo-coordinates: 48.4284,-123.3656, Victoria BC, service area)
- [x] Create `services.ts` - Service schemas for 6 core services (ItemList with areaServed: Canada)
- [x] Create `team.ts` - Person schemas (Jasraj Taneja, James Rankin, Meharban Taneja with Victoria BC locations)
- [x] Create `caseStudies.ts` - CreativeWork schemas (Ageless Living with Langley/Victoria/Kelowna, Harrison Forbes)
- [x] Create `breadcrumb.ts` - BreadcrumbList schemas (dynamic per route)

**Reference:** Check the plan file at `C:\Users\ejsaant\.claude\plans\gleaming-crunching-alpaca.md` for exact schema structures

---

### HIGH PRIORITY - App Setup & Page Updates ✅ COMPLETED

#### Update App.tsx
- [x] Import HelmetProvider from 'react-helmet-async'
- [x] Wrap entire app with `<HelmetProvider>` (outermost wrapper)

#### Update All Pages with SEO + Schemas

**Index.tsx (Homepage)**
- [x] Import SEO, StructuredData, useLocation
- [x] Import schemas: organizationSchema, localBusinessSchema, getBreadcrumbSchema
- [x] Add SEO component with Canadian keywords
- [x] Add 3 StructuredData components (organization, localBusiness, breadcrumb)

**Services.tsx**
- [x] Import SEO, StructuredData, useLocation
- [x] Import schemas: servicesSchema, getBreadcrumbSchema
- [x] Add SEO component
- [x] Add 2 StructuredData components (services, breadcrumb)

**CaseStudies.tsx**
- [x] Import SEO, StructuredData, useLocation
- [x] Import schemas: agelessLivingCaseStudy, harrisonForbesCaseStudy, getBreadcrumbSchema
- [x] Add SEO component
- [x] Add 3 StructuredData components (2 case studies, breadcrumb)

**About.tsx**
- [x] Import SEO, StructuredData, useLocation
- [x] Import schemas: teamSchema (array), getBreadcrumbSchema
- [x] Add SEO component
- [x] Map over teamSchema array to add 3 Person schemas
- [x] Add breadcrumb schema

**BookAudit.tsx**
- [x] Import SEO, StructuredData, useLocation
- [x] Import schema: getBreadcrumbSchema
- [x] Add SEO component with booking keywords
- [x] Add breadcrumb schema

**NotFound.tsx**
- [x] Import SEO
- [x] Add SEO component with noindex={true}

---

### MEDIUM PRIORITY - Image SEO & Canadian Content ✅ COMPLETED

#### Add Alt Text to Images

**About.tsx (line ~72-76)**
- [x] Add alt text to team member images: `${t.name}, ${t.role} at Neural Solutions, Victoria BC - AI automation expert`
- [x] Add `loading="lazy"` attribute

**CaseStudies.tsx (line ~84)**
- [x] Add alt text to case study logos: `${s.title} - ${s.industry} client of Neural Solutions, British Columbia AI automation agency`
- [x] Add `loading="lazy"` attribute

**HeroSection.tsx (line ~11-20)**
- [x] Add `aria-label` to video element: "Abstract flowing background animation representing AI automation and neural networks"

#### Add Canadian Geographic Keywords

**HeroSection.tsx (line ~42-44)**
- [x] Update paragraph to include: "Serving businesses across Canada from our Victoria, BC headquarters."

**Footer.tsx (line ~13-15)**
- [x] Update paragraph to include: "Based in Victoria, BC, serving businesses across Canada."

**About.tsx (line ~57-59)**
- [x] Update paragraph: "Based in Victoria, British Columbia, we bring local expertise to Canadian businesses seeking AI automation and custom software solutions."

**CaseStudies.tsx (line ~70-72)**
- [x] Update paragraph: "Here's how we've helped British Columbia businesses automate operations and build custom software with AI. From wellness clinics to electrical contractors, real results across Canada."

---

### MEDIUM PRIORITY - Technical Optimizations ✅ COMPLETED

#### Update index.html
- [x] Change `<html lang="en">` to `<html lang="en-CA">`
- [x] Remove static meta tags (title, description, OG tags) - now handled by react-helmet-async
- [x] Add font preloading with onload trick (see plan for code)
- [x] Keep Google Fonts preconnect links

#### Update vite.config.ts
- [x] Add code splitting configuration (react-vendor, ui-vendor chunks)
- [x] Enable terser minification
- [x] Add drop_console in production
- [x] Set chunkSizeWarningLimit to 1000

---

### LOW PRIORITY - Assets (Optional but Recommended)

- [ ] Create Open Graph image: `public/og-image.jpg` (1200x630px, <500KB)
- [ ] Rename images with SEO-friendly names:
  - `Jas.PNG` → `jasraj-taneja-software-engineer-victoria-bc.webp`
  - `james_headshot.png` → `james-rankin-machine-learning-engineer-uvic.webp`
  - `mehar.PNG` → `meharban-taneja-business-development-neural-solutions.webp`
- [ ] Compress images to <200KB using WebP format

---

## POST-IMPLEMENTATION VERIFICATION

### Schema Validation
- [ ] Test homepage at [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test all pages for schema errors
- [ ] Verify Organization schema appears
- [ ] Verify LocalBusiness schema appears
- [ ] Verify Service schemas appear
- [ ] Verify Person schemas appear

### Search Console Setup
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Monitor coverage report (all 6 routes should be indexed)
- [ ] Check mobile usability
- [ ] Set up geographic performance tracking

### Page Speed
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Target: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] Verify images are lazy loading
- [ ] Check bundle size

### Functionality Testing
- [ ] Test all pages render correctly with SEO component
- [ ] Verify meta tags change per route (view page source)
- [ ] Verify structured data appears in page source
- [ ] Check canonical URLs are correct
- [ ] Verify hreflang tags present

---

## QUICK REFERENCE - File Locations

### New Components
- `src/components/SEO.tsx` ✅ CREATED
- `src/components/StructuredData.tsx` ✅ CREATED

### New Schema Files (TO CREATE)
- `src/lib/schema/organization.ts`
- `src/lib/schema/localBusiness.ts`
- `src/lib/schema/services.ts`
- `src/lib/schema/team.ts`
- `src/lib/schema/caseStudies.ts`
- `src/lib/schema/breadcrumb.ts`

### Files to Update
- `src/App.tsx` - Add HelmetProvider
- `src/pages/Index.tsx` - SEO + 3 schemas
- `src/pages/Services.tsx` - SEO + 2 schemas
- `src/pages/CaseStudies.tsx` - SEO + 3 schemas
- `src/pages/About.tsx` - SEO + 4 schemas
- `src/pages/BookAudit.tsx` - SEO + 1 schema
- `src/pages/NotFound.tsx` - SEO (noindex)
- `src/components/sections/HeroSection.tsx` - Canadian keywords, aria-label
- `src/components/Footer.tsx` - Canadian keywords
- `index.html` - lang, preload fonts
- `vite.config.ts` - Build optimization

### Assets
- `public/sitemap.xml` ✅ CREATED
- `public/robots.txt` ✅ UPDATED
- `public/og-image.jpg` - TO CREATE (optional)

---

## ESTIMATED TIME REMAINING
- Schema files creation: 2-3 hours
- App.tsx + page updates: 2-3 hours
- Image alt text + content updates: 1 hour
- index.html + vite.config.ts: 30 minutes
- Testing & verification: 1 hour

**Total: 6-8 hours**

---

## CANADIAN SEO KEYWORDS TO USE

### Primary Keywords
- AI automation Canada
- Custom software development British Columbia
- AI integration Victoria BC
- Machine learning consulting Canada
- Business automation services Vancouver Island

### Location Modifiers
- Victoria BC / Victoria, British Columbia
- Vancouver Island
- British Columbia / BC
- Canada / Canadian
- Vancouver, Kelowna, Langley

### Per-Page Keywords (from plan)

**Index.tsx:**
- "AI automation Canada, AI integration Victoria BC, custom software development British Columbia, AI agency Vancouver Island, machine learning services Canada"

**Services.tsx:**
- "AI development services Canada, software development Victoria BC, cloud hosting British Columbia, AI automation services, custom software development Vancouver Island"

**CaseStudies.tsx:**
- "AI automation case studies Canada, web development portfolio BC, Ageless Living website, Harrison Forbes automation, BC business automation examples"

**About.tsx:**
- "AI developers Victoria BC, software engineers Vancouver Island, UVic machine learning graduates, AI agency team Canada"

**BookAudit.tsx:**
- "free AI audit Canada, AI consultation Victoria BC, automation audit British Columbia, business AI assessment"

---

## NOTES
- This is a Single-Page App (SPA) - all routes use client-side rendering
- Google crawls SPAs effectively in 2024
- Dynamic meta tags via react-helmet-async are CRITICAL for SEO
- All schema structures are detailed in the plan file: `C:\Users\ejsaant\.claude\plans\gleaming-crunching-alpaca.md`
- No French content (excluded per user request)
- Expected impact: 50-100% organic traffic increase within 6 months

---

## WHERE TO FIND DETAILED CODE

All schema structures, exact code snippets, and implementation details are in:
**`C:\Users\ejsaant\.claude\plans\gleaming-crunching-alpaca.md`**

Search the plan for:
- "3.2 Create Schema Data Files" - for exact schema code
- "2.4 Add SEO to All Pages" - for page-specific keywords and canonical URLs
- "4.1 Add Geographic Keywords" - for exact content updates
