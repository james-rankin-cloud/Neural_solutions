# Neural Solutions - Technical Specification

## Project Overview

**Neural Solutions** is an enterprise AI-first product development partner website. The site showcases services for enterprise leaders seeking mission-critical software development with embedded AI across the full software lifecycle and product integration.

- **Project Type:** Marketing/Portfolio Website
- **Status:** Production-ready
- **Created With:** Lovable platform

---

## Technology Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI library |
| TypeScript | 5.8 | Type safety |
| React Router DOM | 6.30 | Client-side routing |

### Build & Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| Vite | 5.4 | Fast build tool and dev server |
| SWC | - | Fast TypeScript compiler |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4 | Utility-first CSS framework |
| shadcn/ui | - | Pre-built React components (Radix UI + Tailwind) |
| Class Variance Authority (CVA) | - | Component variant management |
| PostCSS & Autoprefixer | - | CSS processing |

### Data & State Management
| Technology | Version | Purpose |
|------------|---------|---------|
| TanStack React Query | 5.83 | Server state management |
| Zod | 3.25 | TypeScript-first schema validation |
| React Hook Form | 7.61 | Form state management |

### UI Components & Icons
| Technology | Purpose |
|------------|---------|
| Radix UI Primitives | Accessible UI components (accordion, dialog, dropdown, etc.) |
| Lucide React 0.462 | Icon library |
| Embla Carousel | Carousel/slider component |
| Recharts 2.15 | Charts and data visualization |
| Sonner 1.7 | Toast notifications |
| Next Themes 0.3 | Dark/light mode support |
| @calcom/embed-react 1.5 | Cal.com calendar booking integration |

### Testing & Quality
| Technology | Purpose |
|------------|---------|
| Vitest | Unit testing framework |
| Playwright 1.57 | E2E testing |
| Testing Library (React) | Component testing utilities |
| ESLint | Code linting |

---

## Project Structure

```
Neural_solutions/
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root component with routing
│   ├── index.css                # Design system, animations, utilities
│   ├── vite-env.d.ts            # Vite type definitions
│   │
│   ├── pages/                   # Full-page components
│   │   ├── Index.tsx            # Landing page (composes sections)
│   │   ├── Services.tsx         # Services overview page
│   │   ├── services/            # Service category pages
│   │   │   ├── AISolutions.tsx           # Industry-specific AI solutions
│   │   │   └── SoftwareDevelopment.tsx   # Software development services
│   │   ├── CaseStudies.tsx      # Portfolio with case studies
│   │   ├── About.tsx            # Team bios
│   │   ├── BookAudit.tsx        # Contact form
│   │   ├── CityLanding.tsx      # Reusable city landing page template (18 cities)
│   │   ├── WhatIsAIAutomation.tsx  # Resource guide: What is AI Automation
│   │   ├── UICodeKit.tsx        # Architecture & component reference
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed navigation (glass design, mobile menu)
│   │   ├── Footer.tsx           # 3-column footer
│   │   ├── ParticleField.tsx    # Canvas-based particle system
│   │   ├── ScrollReveal.tsx     # IntersectionObserver scroll animation
│   │   ├── MarqueeTicker.tsx    # Horizontal scrolling marquee
│   │   ├── CalendarEmbed.tsx    # Cal.com booking widget wrapper
│   │   │
│   │   ├── sections/            # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── QuoteSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── CaseStudiesPreview.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   └── ui/                  # shadcn/ui components (40+ files)
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       └── [30+ other components]
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Responsive breakpoint hook
│   │   └── use-toast.ts         # Toast notification hook
│   │
│   ├── lib/
│   │   ├── utils.ts             # cn() helper (clsx + tailwind-merge)
│   │   ├── data/
│   │   │   └── cities.ts        # City configuration (18 Canadian cities with SEO data)
│   │   └── schema/
│   │       ├── breadcrumb.ts    # Breadcrumb structured data generator
│   │       └── cityLocalBusiness.ts  # City-specific LocalBusiness schema
│   │
│   ├── assets/
│   │   ├── ageless-living.jpg   # Case study logo
│   │   ├── harrisonforbes.jpg   # Case study logo
│   │   ├── Jas.PNG              # Jasraj Taneja photo
│   │   ├── james_headshot.png   # James Rankin photo
│   │   ├── mehar.PNG            # Meharban Taneja photo
│   │   ├── flow.webm            # Hero background video (webm)
│   │   └── flow.mp4             # Hero background video (mp4)
│   │
│   ├── content/
│   │   └── guides/
│   │       └── what-is-ai-automation.md  # Source content with frontmatter (SEO metadata + markdown)
│   │
│   ├── test/
│   │   ├── example.test.ts      # Sample test
│   │   └── setup.ts             # Test configuration
│   │
│   └── tests/
│       ├── city-seo.spec.ts     # Playwright E2E tests for city pages (201 tests)
│       └── README.md            # Testing documentation and troubleshooting
│
├── public/                      # Static assets
├── scripts/                     # Utility scripts
│   └── validate-city-seo.js     # City SEO validation script (no browser)
├── security/                    # Security testing suite
│   ├── index.js                 # Main orchestrator
│   ├── discovery.js             # Route/input/API discovery
│   ├── xss-tester.js            # XSS vulnerability tests
│   ├── headers-tester.js        # Security headers tests
│   ├── dep-audit.js             # Dependency audit wrapper
│   ├── reporter.js              # Report generation
│   ├── payloads.js              # Attack payloads
│   ├── report.json              # Generated JSON report
│   └── report.md                # Generated Markdown report
├── index.html                   # Entry HTML
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint rules
├── components.json              # shadcn/ui configuration
├── vitest.config.ts             # Vitest configuration
├── playwright.config.ts         # Playwright E2E config
└── package.json                 # Dependencies & scripts
```

---

## Routing & Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | LandingPage.tsx | One-page scroll landing - Hero, About, Services preview, Features, How it Works, Growth Philosophy, Testimonials, CTA with contact form + booking, Footer |
| `/services` | Services.tsx | Services overview page - 7 service categories (AI Strategy & Governance, Custom AI Product Development, AI Agents & Intelligent Automation, AI Analytics & Decision Intelligence, ML Engineering & MLOps, AI-Enabled Software Delivery, Software Development) with images and descriptions |
| `/services/ai-solutions` | AISolutions.tsx | AI Solutions page - Hero section, Peter Diamandis quote ("There will be two kinds of companies at the end of this decade: those that are fully utilizing AI, and those that are out of business"), 6 AI service categories (AI Strategy & Governance, Custom AI Product Development, AI Agents & Intelligent Automation, AI Analytics & Decision Intelligence, ML Engineering & MLOps, AI-Enabled Software Delivery) with images and descriptions |
| `/services/software-development` | SoftwareDevelopment.tsx | Software development services - 4 service categories (Custom Software Development, Application Development & Modernization, DevOps & Platform Engineering, Quality Engineering) with descriptions and clickable cards |
| `/case-studies` | CaseStudies.tsx | Portfolio - 2 detailed case studies (Ageless Living, Harrison Forbes) |
| `/about` | About.tsx | Team page - 3 founders with bios |
| `/book-audit` | BookAudit.tsx | Dual-option contact page - Tab 1: Contact form (mailto), Tab 2: Cal.com calendar booking (30-min/45-min calls) |
| `/resources/what-is-ai-automation` | WhatIsAIAutomation.tsx | Educational guide - Comprehensive 12-min read explaining AI automation for Canadian businesses with examples, use cases, ROI data, FAQ |
| `/ai-agency-{city}` | CityLanding.tsx | SEO-optimized city landing pages - 18 Canadian cities (Victoria, Vancouver, Toronto, Calgary, Montreal, Edmonton, Ottawa, Winnipeg, Mississauga, Brampton, Surrey, Burnaby, Richmond, Halifax, Kelowna, Saskatoon, Regina, Quebec City) with city-specific SEO, LocalBusiness schema, contact form & calendar booking |
| `/ui-code-kit` | UICodeKit.tsx | Developer reference - Old design system docs (purple theme - kept for reference) |
| `*` | NotFound.tsx | 404 page |

---

## Design System

### Color Palette (HSL CSS Variables)

```css
--background:    0 0% 100%      /* white #FFFFFF */
--foreground:    0 0% 2%        /* black #050505 */
--primary:       0 0% 2%        /* black for primary */
--primary-foreground: 0 0% 100% /* white text on black */
--secondary:     0 0% 96%       /* light gray #F5F5F5 */
--muted:         0 0% 98%       /* very light gray #FAFAFA */
--muted-foreground: 0 0% 45%    /* medium gray #737373 */
--accent:        0 0% 90%       /* light gray accent #E5E5E5 */
--card:          0 0% 100%      /* white */
--border:        0 0% 90%       /* border gray #E5E5E5 */
```

### Typography

| Usage | Font | Style |
|-------|------|-------|
| All Text | Inter | Sans-serif, clean, modern - used exclusively throughout |

### Custom CSS Classes

| Class | Effect |
|-------|--------|
| `.glass` | Glassmorphism: white translucent + blur + gray border |
| `.glass-dark` | Dark glassmorphism for dark backgrounds |
| `.grain` | Faint SVG noise texture overlay |
| `.card-elevated` | Soft gray shadow with hover lift |
| `.float` | Floating animation variants |
| `.perspective-card` | 3D perspective tilt on hover |
| `.line-draw` | Underline that draws on hover |

### Animations (Keyframes)

| Animation | Duration | Effect |
|-----------|----------|--------|
| `reveal-up` | 0.8s | Fade in + slide up 30px + deblur |
| `drift` | 12s | Multi-point translate + rotate loop |
| `float` | 7-9s | Y-axis bob |
| `shimmer` | 4s | Gradient sweep |
| `grid-pulse` | 8s | Grid opacity pulse |
| `pulse-ring` | 3s | Scale pulse |

---

## Features & Functionality

### Interactive Elements

1. **Particle Field**
   - Canvas-based system with 60 particles
   - White/gray particles (updated from purple)
   - Connection lines drawn when particles < 150px apart
   - Located in: `src/components/ParticleField.tsx`

2. **ScrollReveal**
   - IntersectionObserver wrapper
   - Effects: opacity(0→1), translateY(24px→0), blur(4px→0)
   - Duration: 700ms, custom easing: cubic-bezier(0.16,1,0.3,1)
   - Located in: `src/components/ScrollReveal.tsx`

3. **Navbar** - Premium Transparent Design
   - Fixed position with scroll detection at 50px
   - Transparent background on load, subtle dark blur on scroll (bg-black/20 backdrop-blur-md)
   - **Desktop Layout** - Three-zone structure:
     - **Left**: Navigation links (Home, Case Studies, About, Services dropdown)
     - **Center**: NEURAL logo (uppercase, wide letter spacing [0.3em], light font weight, absolutely positioned to viewport center)
     - **Right**: Book Now button (transparent with white border)
   - **Typography**: All white/off-white text (white/80 opacity, white on hover)
   - **Services dropdown**: Hover-activated with dark backdrop blur (bg-black/90)
     - AI Solutions → /services/ai-solutions
     - Software Development → /services/software-development
   - **Mobile**: NEURAL logo left, hamburger menu right, full-screen dark menu on open
   - **Design**: Minimal, modern, premium, futuristic - inspired by Mistral/Linear style
   - Located in: `src/components/Navbar.tsx`

4. **Landing Page Sections**
   - Hero with full-screen background video
   - About with stats grid (4 stats)
   - Services preview (2 cards)
   - Feature grid (problem-solving features)
   - How it works (3-step process)
   - Growth philosophy (old vs new comparison)
   - Testimonials
   - Final CTA with contact form + booking tabs
   - Footer
   - Located in: `src/pages/LandingPage.tsx`
   - **Mobile Optimizations (2026-05-07):**
     - **Hero:** Reduced heading size (text-4xl → sm:text-5xl → md:text-7xl), better line-height on mobile (leading-[1.05]), smaller padding (pb-16 → md:pb-28), full-width CTA buttons on mobile
   - **Visual Enhancements (2026-05-07):**
     - **Video clarity:** Increased video opacity (70% → 90%) for sharper background detail
     - **Overlay optimization:** Reduced black overlay (55% → 45%), extended gradient to 2/3 height for better center readability
     - **Button design:** Primary button with rounded-xl (12px), white glow shadow effect; Secondary button with glass effect (backdrop-blur-sm), both with enhanced hover states
     - **About:** Smaller logo cards on mobile (h-20 w-44), responsive stats (text-3xl → md:text-6xl), hidden "ABOUT" background text on mobile, 2-column stats grid on mobile
     - **Services cards:** Reduced height (h-[280px] → sm:h-[320px] → md:h-[360px]), smaller padding, responsive text
     - **Feature cards:** Flexible heights (min-h-[240px] → sm:min-h-[300px] → md:min-h-[360px]), smaller padding on mobile (p-6 → md:p-10), smaller text, images hidden on mobile (only text cards visible)
     - **How it works:** Smaller card heights (h-[340px] → sm:h-[380px] → md:h-[430px]), responsive text and badges
     - **Growth philosophy:** Smaller heading (text-3xl → md:text-6xl), tighter spacing on comparison rows, smaller icon sizes
     - **Testimonials:** Responsive heights (min-h-[200px] → md:min-h-[380px]), smaller logo and text on mobile, better stat layout
     - **Case studies:** Smaller logos (h-12 → sm:h-16), reduced padding (p-6 → sm:p-8), responsive text
     - **Final CTA:** Reduced padding (py-20 → md:py-40), smaller heading, condensed tab labels on mobile, tighter form spacing
   - **Resources dropdown menu** (desktop): DropdownMenu component with glass styling
     - "What is AI Automation?" guide link
     - Expandable for future resource additions
   - Mobile hamburger menu with collapsible Resources section
   - Active link detection
   - Located in: `src/components/Navbar.tsx`

5. **Marquee Ticker** *(currently unused)*
   - Horizontal scrolling text banner component
   - Located in: `src/components/MarqueeTicker.tsx`
   - Removed from Index, Services, and CaseStudies pages

6. **Contact Form**
   - Icon-prefixed inputs
   - Submits via mailto: link (no backend)
   - Located in: `src/pages/BookAudit.tsx`

7. **Cal.com Booking Integration**
   - Dual-option contact page: Contact Form + Calendar Booking
   - Two meeting types: 30-Min Discovery Call, 45-Min Strategy Session
   - Google Meet integration via growth@neuralcoremarketing.com
   - Component: `CalendarEmbed.tsx` wraps @calcom/embed-react
   - Design: Glass-morphism wrapper, branded purple colors
   - Tabs UI for switching between form and calendar
   - Located in: `src/pages/BookAudit.tsx`, `src/components/CalendarEmbed.tsx`

8. **City Landing Pages (SEO)**
   - 18 SEO-optimized landing pages for major Canadian cities
   - URL pattern: `/ai-agency-{city}` (e.g., `/ai-agency-victoria`, `/ai-agency-toronto`)
   - **Purpose:** Target local search queries like "AI agency [city]" for improved organic traffic
   - **Architecture:** Single reusable template component (`CityLanding.tsx`) with city-specific data
   - **Cities:** Victoria BC, Vancouver BC, Toronto ON, Calgary AB, Montreal QC, Edmonton AB, Ottawa ON, Winnipeg MB, Mississauga ON, Brampton ON, Surrey BC, Burnaby BC, Richmond BC, Halifax NS, Kelowna BC, Saskatoon SK, Regina SK, Quebec City QC
   - **Data Source:** `src/lib/data/cities.ts` - TypeScript configuration with city metadata
   - **SEO Features:**
     - Unique meta titles, descriptions, and keywords per city
     - LocalBusiness structured data with GPS coordinates
     - Geographic meta tags (geo.region, geo.placename, geo.position)
     - City-specific H1 headlines and content descriptions
     - Breadcrumb schema integration
   - **Functionality:** Same dual-tab contact system as BookAudit (form + calendar booking)
   - **Schema Generator:** `src/lib/schema/cityLocalBusiness.ts`
   - **Routing:** Static routes generated via `.map()` in `App.tsx` for optimal SEO indexing

### Landing Page Sections (LandingPage.tsx)

1. **HeroSection** - "The AI-First Product Development Partner for Enterprise" + enterprise value proposition + looping background video (mp_.mp4), optimized overlay (45% black + gradient), premium glass-style CTA buttons with glow effects (Book Audit: white bg with shadow glow, Explore Services: glass with backdrop blur)
2. **ServicesSection** - 6 interactive service cards
3. **QuoteSection** - Peter Diamandis AI quote
4. **ProcessSection** - 3-step process visualization
5. **CaseStudiesPreview** - 2 featured project cards
6. **CTASection** - Final call-to-action
7. **Footer** - Contact info, navigation links

### Services Offered

**7 AI Services (Services.tsx):**
1. **AI Strategy & Governance** - Comprehensive roadmap for responsible, scalable AI adoption with frameworks, policies, and oversight mechanisms
2. **Custom AI Product Development** - Production-grade AI solutions from concept to deployment, tailored to unique business needs
3. **AI Agents & Intelligent Automation** - Autonomous systems that streamline workflows and boost efficiency
4. **AI Analytics & Decision Intelligence** - Advanced analytics that reveal patterns and predict future outcomes
5. **ML Engineering & MLOps** - Robust ML infrastructure for reliable, scalable AI deployment
6. **AI-Enabled Software Delivery** - AI-powered tools and processes that enhance every phase of the software lifecycle
7. **Software Development** - Custom software solutions, application modernization, DevOps, and quality engineering

**4 Software Development Services (SoftwareDevelopment.tsx):**
1. **Custom Software Development** - Secure, scalable software tailored to business requirements
2. **Application Development & Modernization** - Modernize legacy applications and build cloud-native systems
3. **DevOps & Platform Engineering** - Automate infrastructure and delivery pipelines
4. **Quality Engineering** - Embed automated testing and quality practices across the software lifecycle

**7 Industry-Specific AI Solutions (AISolutions.tsx):**
1. Healthcare & Wellness - Automated appointment management, patient intake, prescription reminders
2. Real Estate - Lead qualification, property matching, transaction processing
3. Legal Services - Client intake, contract analysis, legal research automation
4. E-commerce & Retail - Intelligent customer support, abandoned cart recovery, inventory automation
5. Professional Services - Client onboarding, invoice processing, report generation
6. Home Services - Missed call capture, quote generation, service reminders
7. Hospitality - Guest communication, review management, booking confirmation

### Case Studies

**1. Ageless Living (Health & Wellness)**
- Challenge: Outdated website, no online booking, manual admin
- Solution: Full redesign, Jane App integration (3 locations), 117-product e-commerce, AI search, AI voicemail/email, advanced SEO
- Result: 6 integrated systems in one platform

**2. Harrison Forbes Electrical**
- Challenge: No online presence, missing leads, manual scheduling
- Solution: One-page website, missed call rescue, automated follow-ups, quote booking, project gallery
- Result: 0 leads lost to missed calls

### Team Members

1. **Jasraj Taneja** - Software Engineer & AI Specialist at Ericsson (Victoria, BC) - *Jas.PNG*
2. **James Rankin** - ML Engineer & Web Developer, UVic graduate (Victoria, BC) - *james_headshot.png*
3. **Meharban Taneja** - Customer Relations & Business Development, ex-Baker Tilly (BC) - *mehar.PNG*

### Resource & Guide Pages

**What is AI Automation Guide** (`/resources/what-is-ai-automation`)

**Purpose:** Educational long-form content designed for SEO and lead generation. Targets search queries like "what is AI automation", "AI automation explained", "AI for business".

**Content Structure:**
- **Hero Section** - Title, category badge (Guides • 12 min read), meta info (author, date)
- **Introduction** - Definition and value proposition for Canadian businesses
- **Table of Contents** - Jump links to 10 main sections
- **10 Main Sections:**
  1. What is AI Automation? (Definition) - with Traditional vs AI comparison cards
  2. How AI Automation Works (Simplified) - 3-stage process (Input → Processing → Action) + feedback loop
  3. AI Automation vs. Traditional Automation - Comparison table + when to use each
  4. Key Benefits for Canadian Businesses - 6 benefits with real case study examples (Ageless Living, Harrison Forbes)
  5. Real-World Examples - Detailed case studies from BC businesses
  6. Common Use Cases by Department - Sales, Customer Service, Marketing, Operations, HR
  7. Industries Using AI Automation - Healthcare, Construction, Professional Services, Retail, Real Estate, Finance (with internal links)
  8. Is AI Automation Right for Your Business? - 10-point self-assessment checklist
  9. How to Get Started - 5-step implementation guide
  10. FAQ - 8 common questions with detailed answers
- **CTA Sections** - Book Free Audit CTAs throughout (glass card design)
- **About Neural Solutions** - Company info, results, team links
- **Related Resources** - Internal links to Services, Case Studies, Book Audit, About
- **Footer** - Last updated date

**Design Features:**
- ScrollReveal animations on all major sections
- Glass-morphism cards with purple gradient accents
- Comparison tables with alternating row backgrounds
- Interactive table of contents with anchor links
- Inline CTAs strategically placed after benefit sections
- Typography: Playfair Display (headings), Outfit (body), Space Mono (labels)
- Color scheme: Purple gradients on white, card-elevated shadows
- Responsive grid layouts for comparison cards and FAQ sections

**SEO Optimization:**
- **Meta title:** "What is AI Automation? Complete Guide for Canadian Businesses | Neural Solutions"
- **Meta description:** 158 characters, keyword-rich
- **Keywords:** what is AI automation, AI automation explained, how does AI automation work, AI for business, business automation guide
- **Canonical URL:** https://www.neuralsolutions.cloud/resources/what-is-ai-automation
- **Article schema:** Published date (2026-05-05), author (Neural Solutions Team), section (Guides)
- **Internal linking:** Links to /case-studies, /services, /book-audit, /about
- **Read time:** 12 minutes (3,600+ words)

**Content Source:** `src/content/guides/what-is-ai-automation.md` (frontmatter metadata + markdown content rendered as JSX)

**Implementation Notes:**
- Content is hardcoded in JSX (not parsed from markdown file) for performance and control
- Uses Tailwind Typography prose classes for consistent text styling
- All external links open in new tabs (rel="noopener noreferrer")
- Mobile-responsive tables and cards
- Scroll-to-top anchor links with offset for fixed navbar

---

## Architecture Patterns

### Component Hierarchy

```
App (root)
├── QueryClientProvider (data fetching)
├── TooltipProvider (accessible tooltips)
├── Toaster (notifications)
├── ParticleField (background animation)
└── BrowserRouter (routing)
    └── Routes
        ├── Index (sections composition)
        ├── Services
        ├── CaseStudies
        ├── About
        ├── BookAudit
        ├── CityLanding (×18 cities)
        ├── UICodeKit
        └── NotFound
```

### Reusable Patterns

1. **ScrollReveal Wrapper** - Used on every section for entrance animations
2. **shadcn/ui Components** - Composable, accessible UI building blocks
3. **Section Components** - Modular page sections
4. **Custom Hooks** - use-mobile, use-toast
5. **Icon Components** - Lucide icons throughout

---

## Configuration

### Vite (vite.config.ts)
- Dev server on port 8080 (IPv6)
- React plugin with SWC compiler
- Path alias: `@/` → `./src/`
- HMR overlay disabled

### Tailwind (tailwind.config.ts)
- Dark mode: class-based
- Custom fonts: Playfair Display, Outfit, Space Mono, Syne
- Extended color palette with HSL variables
- Custom animations: drift, accordion-up/down
- Responsive container (2xl: 1400px)
- Plugins: tailwindcss-animate, @tailwindcss/typography (for prose classes on resource pages)

### TypeScript (tsconfig.json)
- Loose strictness (no implicit any, no null checks)
- Path alias: `@/*` → `./src/*`
- Allows JS files

### shadcn/ui (components.json)
- Style: default
- TypeScript: enabled
- Tailwind CSS path: src/index.css
- Component aliases configured

---

## Contact & Metadata

- **Email:** hello@neuralsolutions.dev
- **Meta Description:** "Neural Solutions designs and engineers AI-integrated digital products that give your business an unfair advantage."
- **OG Title:** "Neural Solutions - The AI-First Product Development Partner for Enterprise"
- **OG Description:** "We design, build, and operate mission-critical software for enterprise leaders, embedding AI across the full software lifecycle."
- **Hero Message:** "The AI-First Product Development Partner for Enterprise" (Updated 2026-05-07)
- **Copyright:** 2024-2026 Neural Solutions

---

## Security Testing Suite

### Overview

Automated security testing suite located in `/security/`. Run with:

```bash
npm run security
```

### Test Modules

| File | Purpose |
|------|---------|
| `index.js` | Main orchestrator - runs all tests |
| `discovery.js` | Discovers routes, inputs, API endpoints, dangerous patterns |
| `xss-tester.js` | Tests for reflected, DOM-based, and stored XSS |
| `headers-tester.js` | Tests security headers and CORS configuration |
| `dep-audit.js` | Wrapper for npm audit |
| `reporter.js` | Generates JSON and Markdown reports |
| `payloads.js` | Common attack payloads for testing |

### Test Phases

1. **Discovery** - Scans codebase for routes, inputs, API endpoints
2. **Static Analysis** - Detects dangerous patterns (dangerouslySetInnerHTML, eval, etc.)
3. **Dependency Audit** - Runs npm audit for vulnerable packages
4. **Active Testing** - Tests security headers and XSS (requires dev server)
5. **API Security** - Tests API endpoints if present (skipped for frontend-only)

### Security Headers Checked

- Content-Security-Policy (CSP)
- X-Content-Type-Options
- X-Frame-Options
- Strict-Transport-Security (HSTS)
- Referrer-Policy
- Permissions-Policy
- X-XSS-Protection

### Output

- **Terminal** - Clean summary with severity counts
- **report.json** - Machine-readable findings
- **report.md** - Human-readable report with recommendations

### Architecture Notes

Since this is a frontend-only React application:
- SQL injection tests are skipped (no backend)
- Auth tests are skipped (no authentication)
- Focus is on XSS, security headers, and dependency vulnerabilities

---

## City Landing Pages SEO Testing

### Overview

Automated testing suite for validating SEO metadata and functionality across all 18 city landing pages. Ensures unique, optimized meta tags and proper structured data for local search ranking.

### Test Scripts

```bash
# Quick validation (1-2 seconds, no browser)
npm run validate:city-seo

# Full E2E tests (40-60 seconds, browser-based)
npm run test:city-seo

# Interactive test UI
npm run test:e2e:ui
```

### Validation Script

**File:** `scripts/validate-city-seo.js`

Fast Node.js script that validates city configuration data without starting a browser:

**Checks:**
- ✅ Meta descriptions are unique and 150-160 characters
- ✅ Meta titles are unique and contain city name
- ✅ Keywords include city name
- ✅ Coordinates are valid for Canada (latitude/longitude ranges)
- ✅ Hero headlines are unique across all cities
- ✅ Slugs follow correct format (lowercase, hyphens only)
- ✅ Province abbreviations are valid Canadian codes

**Output:**
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

### Playwright E2E Tests

**File:** `tests/city-seo.spec.ts`

Comprehensive browser-based tests that verify each city page in Chromium, Firefox, and WebKit.

**Test Coverage (201 total tests):**

| Category | Tests per City | Total |
|----------|---------------|-------|
| SEO Meta Tags | 5 | 90 |
| Structured Data (LocalBusiness + Breadcrumb) | 2 | 36 |
| Content (H1 headlines) | 1 | 18 |
| Functionality (form + calendar) | 2 | 36 |
| Responsiveness (mobile) | 1 | 18 |
| Cross-City Uniqueness | 3 | 3 |
| **TOTAL** | **11 per city** | **201** |

**Per-City Tests:**
1. **Correct page title** - Matches city.metaTitle + "| Neural Solutions"
2. **Unique meta description** - 150-160 chars, unique across cities
3. **Meta keywords** - Contains city name and matches configuration
4. **Correct canonical URL** - `https://neuralsolutions.ca/ai-agency-{slug}`
5. **Geographic meta tags** - geo.region, geo.placename, geo.position with correct coordinates
6. **H1 with city name** - Headline contains city name
7. **LocalBusiness structured data** - Valid JSON-LD with city address and coordinates
8. **Breadcrumb structured data** - "Home" → "AI Agency {City}"
9. **Contact form** - Name, email, message inputs visible and functional
10. **Calendar booking** - 30-min and 45-min options visible
11. **Mobile responsive** - Works on 375px viewport

**Cross-City Tests:**
1. All meta descriptions are unique (no duplicates)
2. All page titles are unique (no duplicates)
3. All canonical URLs are unique (no duplicates)

### Test Execution

**Quick Check (Development):**
```bash
npm run validate:city-seo
```
Use during development for instant feedback on city data configuration.

**Full E2E Suite (Pre-Deploy):**
```bash
npm run test:city-seo
```
Runs all 201 tests across all 18 cities. Expected runtime: 40-60 seconds.

**Debug Failed Tests:**
```bash
npm run test:e2e:ui
```
Opens Playwright UI for interactive debugging with visual test execution.

**Run Specific City:**
```bash
npx playwright test -g "Victoria, BC"
```

### Test Files

| File | Purpose |
|------|---------|
| `tests/city-seo.spec.ts` | Playwright E2E tests for all 18 cities |
| `scripts/validate-city-seo.js` | Fast validation script (no browser) |
| `tests/README.md` | Complete testing documentation and troubleshooting guide |

### Cities Tested

All 18 Canadian city landing pages:

**Tier 1:** Victoria BC, Vancouver BC, Toronto ON, Calgary AB, Montreal QC
**Tier 2:** Edmonton AB, Ottawa ON, Winnipeg MB, Mississauga ON, Brampton ON
**Tier 3:** Surrey BC, Burnaby BC, Richmond BC, Halifax NS, Kelowna BC, Saskatoon SK, Regina SK, Quebec City QC

### SEO Validation Rules

**Meta Description:**
- Minimum: 150 characters
- Maximum: 160 characters
- Must be unique across all cities
- Must contain city name or relevant geographic reference

**Meta Title:**
- Maximum: 60 characters (recommended)
- Must contain city name
- Must be unique across all cities

**Keywords:**
- Must include city name in at least one keyword
- Recommended: 5-10 keywords per city

**Coordinates:**
- Latitude range: 41° to 84° N (Canada bounds)
- Longitude range: -141° to -52° W (Canada bounds)

### CI/CD Integration

Add to your deployment pipeline:

```yaml
# Pre-deployment checks
- name: Validate City SEO Data
  run: npm run validate:city-seo

- name: Run E2E City Tests
  run: npm run test:city-seo
```

---

## Design Philosophy

The site embodies a **"Premium Minimal"** aesthetic:

1. **Black & White Foundation** - Clean white backgrounds with sharp black text, subtle gray accents for depth
2. **Typography Clarity** - Inter font throughout for modern, readable, professional design
3. **Generous Spacing** - Ample whitespace, large padding (py-16+), breathing room between sections
4. **Subtle Depth** - Light gray shadows, soft borders (`border-border`), minimal use of gradients
5. **Motion Restraint** - ScrollReveal entrance animations, subtle hover states, purposeful interactions
6. **Cinematic Layout** - Full-screen hero sections, large image cards, bold typography scale
7. **Professional Polish** - Rounded corners (`1.25rem`), consistent spacing, refined card design (`rounded-[1.25rem]`)
8. **High Contrast** - Black text on white backgrounds for maximum readability and accessibility
