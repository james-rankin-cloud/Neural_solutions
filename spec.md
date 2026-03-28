# Neural Solutions - Technical Specification

## Project Overview

**Neural Solutions** is a premium AI automation agency website built as a single-page application (SPA). The site showcases services for businesses seeking AI integration, custom software development, and intelligent automation solutions.

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
│   │   ├── Services.tsx         # Detailed services page
│   │   ├── CaseStudies.tsx      # Portfolio with case studies
│   │   ├── About.tsx            # Team bios
│   │   ├── BookAudit.tsx        # Contact form
│   │   ├── UICodeKit.tsx        # Architecture & component reference
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed navigation (glass design, mobile menu)
│   │   ├── Footer.tsx           # 3-column footer
│   │   ├── ParticleField.tsx    # Canvas-based particle system
│   │   ├── ScrollReveal.tsx     # IntersectionObserver scroll animation
│   │   ├── MarqueeTicker.tsx    # Horizontal scrolling marquee
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
│   │   └── utils.ts             # cn() helper (clsx + tailwind-merge)
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
│   └── test/
│       ├── example.test.ts      # Sample test
│       └── setup.ts             # Test configuration
│
├── public/                      # Static assets
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
| `/` | Index.tsx | Landing page - Hero, services, process, case studies preview, CTA |
| `/services` | Services.tsx | Detailed services - 6 core services, 16 IT solutions grid |
| `/case-studies` | CaseStudies.tsx | Portfolio - 2 detailed case studies |
| `/about` | About.tsx | Team page - 3 founders with bios |
| `/book-audit` | BookAudit.tsx | Contact form - Name, email, message |
| `/ui-code-kit` | UICodeKit.tsx | Developer reference - Design system docs |
| `*` | NotFound.tsx | 404 page |

---

## Design System

### Color Palette (HSL CSS Variables)

```css
--background:    0 0% 98%       /* near-white, light gray */
--foreground:    240 10% 10%    /* near-black text */
--primary:       262 70% 50%    /* deep purple - brand color */
--accent:        275 80% 55%    /* bright violet */
--secondary:     260 20% 94%    /* light purple tint */
--muted:         260 15% 93%    /* subtle light surface */
--card:          0 0% 100%      /* white */
--border:        260 15% 88%    /* light purple-gray */
```

### Typography

| Usage | Font | Style |
|-------|------|-------|
| Display/Headlines | Playfair Display | Serif, editorial, tight line-height |
| Body Text | Outfit | Sans-serif, clean, geometric |
| Labels/Metadata | Space Mono | Monospace, technical feel |
| Display Fallback | Syne | Alternative display font |

### Custom CSS Classes

| Class | Effect |
|-------|--------|
| `.atmosphere` | Layered radial gradients (subtle purple on white) |
| `.atmosphere-dense` | Denser gradient variant |
| `.glass` | Glassmorphism: white translucent + blur + border |
| `.grain` | Faint SVG noise texture overlay |
| `.gradient-border` | Gradient border using CSS mask-composite |
| `.card-elevated` | Soft shadow with hover lift |
| `.text-gradient` | Static purple gradient text |
| `.shimmer` | Animated gradient sweep (4s cycle) |
| `.float` | Floating animation variants |
| `.animate-drift` | Multi-axis drift (12s cycle) |
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
   - Connection lines drawn when particles < 150px apart
   - Located in: `src/components/ParticleField.tsx`

2. **Hero Background Video**
   - Looping video background (flow.webm, flow.mp4 fallback)
   - Autoplay, muted, loop, playsinline
   - Dark overlay (bg-background/80) for text readability
   - Located in: `src/components/sections/HeroSection.tsx`

3. **ScrollReveal**
   - IntersectionObserver wrapper
   - Effects: opacity(0→1), translateY(24px→0), blur(4px→0)
   - Duration: 700ms, custom easing: cubic-bezier(0.16,1,0.3,1)
   - Located in: `src/components/ScrollReveal.tsx`

4. **Navbar**
   - Fixed position with scroll detection at 50px
   - Glass background effect on scroll
   - Mobile hamburger menu
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

### Landing Page Sections (Index.tsx)

1. **HeroSection** - "Lead with AI. / We'll build it for you." + looping background video (flow.webm/mp4), dark overlay, atmospheric orbs, CTA buttons
2. **ServicesSection** - 6 interactive service cards
3. **QuoteSection** - Peter Diamandis AI quote
4. **ProcessSection** - 3-step process visualization
5. **CaseStudiesPreview** - 2 featured project cards
6. **CTASection** - Final call-to-action
7. **Footer** - Contact info, navigation links

### Services Offered

**6 Core Services:**
1. Web & Mobile Development
2. Team Outsourcing
3. Cloud Hosting
4. AI Integration
5. AI Automation
6. AI Assistants

**16 IT Solutions:**
- Enterprise architecture, web apps, AI consulting, APIs, microservices, mobile apps, UI design, data analytics, workflow design, IT support, AI search, email automation, voicemail, predictive analytics, and more

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
- **OG Title:** "Neural Solutions - AI Automation Agency"
- **OG Description:** "Most agencies promise AI. We ship it."
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

## Design Philosophy

The site embodies a **"Clean Light Environment"** aesthetic:

1. **Atmosphere First** - Near-white backgrounds with subtle purple gradients, grain texture, floating orbs
2. **Motion Everywhere** - Staggered reveals, drifting elements, perspective tilt, smooth transitions
3. **Premium Typography** - Large, tight headlines in Playfair Display with italic emphasis
4. **Custom Interactions** - Particle field, scroll animations
5. **Color Restraint** - Purple accents on near-white, minimal color palette
6. **Professional Polish** - Smooth corners, glassmorphism effects, fine typography control
