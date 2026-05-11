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
│   │   ├── LandingPage.tsx      # Landing page (composes sections)
│   │   ├── Services.tsx         # Services overview page
│   │   ├── services/            # Service category pages
│   │   │   ├── AISolutions.tsx                       # Industry-specific AI solutions
│   │   │   ├── SoftwareDevelopment.tsx               # Software development services
│   │   │   ├── AIStrategyConsultingGovernance.tsx    # AI Strategy & Governance service page
│   │   │   ├── CustomAIProductDevelopment.tsx        # Custom AI Product Development service page
│   │   │   ├── AIAgentsIntelligentAutomation.tsx     # AI Agents & Intelligent Automation service page
│   │   │   ├── AIAnalyticsPredictiveInsights.tsx     # AI Analytics & Decision Intelligence service page
│   │   │   ├── MLEngineeringMLOps.tsx                # Machine Learning Engineering & MLOps service page
│   │   │   ├── AIEnabledSoftwareDelivery.tsx         # AI-enabled Software Delivery service page
│   │   │   ├── CustomSoftwareDevelopment.tsx         # Custom Software Development service page
│   │   │   └── ApplicationDevelopmentModernization.tsx  # Application Development & Modernization service page
│   │   ├── CaseStudies.tsx      # Portfolio with case studies
│   │   ├── About.tsx            # Team bios
│   │   ├── BookAudit.tsx        # Contact form
│   │   ├── CityLanding.tsx      # Reusable city landing page template (18 cities)
│   │   ├── UICodeKit.tsx        # Architecture & component reference
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed navigation (glass design, mobile menu)
│   │   ├── Footer.tsx           # 3-column footer
│   │   ├── ParticleField.tsx    # Canvas-based particle system
│   │   ├── ScrollReveal.tsx     # IntersectionObserver scroll animation
│   │   ├── ScrollToTop.tsx      # Auto-scroll on route change
│   │   ├── CalendarEmbed.tsx    # Cal.com booking widget wrapper
│   │   ├── SEO.tsx              # Helmet wrapper for meta tags
│   │   ├── StructuredData.tsx   # JSON-LD schema renderer
│   │   │
│   │   └── ui/                  # shadcn/ui components (11 files)
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── tabs.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       ├── tooltip.tsx
│   │       ├── toaster.tsx
│   │       ├── sonner.tsx
│   │       └── use-toast.ts
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
│   │   ├── ageless-living.jpg          # Case study logo
│   │   ├── harrisonforbes.jpg          # Case study logo
│   │   ├── Jas.PNG                     # Jasraj Taneja photo
│   │   ├── james_headshot.png          # James Rankin photo
│   │   ├── mehar.PNG                   # Meharban Taneja photo
│   │   ├── mp_.mp4                     # Hero background video
│   │   ├── home-page-ai-solutions.png  # Services preview image
│   │   ├── home-page-software-development.png  # Services preview image
│   │   ├── hp1.png, hp2.png, hp3.png   # How it works images
│   │   ├── software1-4.png             # Software service images
│   │   └── ai_*.png                    # AI service category images (7 files)
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
| `/services` | Services.tsx | Services overview page - 3 service categories (AI Solutions, Software Development, AI Strategy & Governance) with images and descriptions |
| `/services/ai-solutions` | AISolutions.tsx | AI Solutions page - Hero section, Peter Diamandis quote ("There will be two kinds of companies at the end of this decade: those that are fully utilizing AI, and those that are out of business"), 6 AI service categories (AI Strategy & Governance, Custom AI Product Development, AI Agents & Intelligent Automation, AI Analytics & Decision Intelligence, ML Engineering & MLOps, AI-Enabled Software Delivery) with images and descriptions. Cards link to dedicated service pages where available. |
| `/services/software-development` | SoftwareDevelopment.tsx | Software development services - 4 service categories (Custom Software Development, Application Development & Modernization, DevOps & Platform Engineering, Quality Engineering) with descriptions and clickable cards |
| `/services/ai-strategy-consulting-governance` | AIStrategyConsultingGovernance.tsx | Dedicated AI Strategy & Governance service page - Hero section, brand strip, description section, implementation strategies (AI agents & automation, Advanced RAG systems, Prompt to SQL), case studies (Ageless Living, Harrison Forbes), maturity stages (Discovery, Experimentation, Implementation), 8 FAQs with accordion, dual-option booking (calendar + contact form). Accessible from AI Solutions page card. |
| `/services/custom-ai-product-development` | CustomAIProductDevelopment.tsx | Custom AI Product Development service page - Hero section with dual CTA, breadcrumb navigation, brand strip, description section, 6 AI development services (Custom AI application development, AI agents, Advanced RAG, AI chatbots, Prompt to SQL, AI workflow automation), case studies (Ageless Living, Harrison Forbes), 6 benefits section, 4 related services, 9 FAQs with accordion, dual-option booking (calendar + contact form). Accessible from Services overview page card. |
| `/services/ai-agents-intelligent-automation` | AIAgentsIntelligentAutomation.tsx | AI Agents & Intelligent Automation service page - Hero section with dual CTA (Book Now, Explore Automation Use Cases), breadcrumb navigation (Home > Services > AI Solutions > AI Agents & Intelligent Automation), brand strip (Ageless Living, Harrison Forbes), description section emphasizing practical AI where automation delivers value, 6 service categories in grid layout (AI agent design & development, Workflow & process automation, LLM powered assistants, System integration & orchestration, Human in the loop automation, Monitoring governance & control) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, maturity stages section (Discovery, Experimentation, Implementation) with detailed offerings, 9 FAQs with accordion covering common questions about AI agents and intelligent automation, dual-option booking section (calendar + contact form with workflow-specific fields: workflow to automate, tools/systems to connect, stage dropdown). Accessible from AI Solutions page card. |
| `/services/ai-analytics-predictive-insights-decision-intelligence` | AIAnalyticsPredictiveInsights.tsx | AI Analytics, Predictive Insights & Decision Intelligence service page - Hero section with dual CTA (Book Now, Explore Analytics Use Cases), breadcrumb navigation (Home > Services > AI Solutions > AI Analytics, Predictive Insights & Decision Intelligence), brand strip (Ageless Living, Harrison Forbes), description section titled "You envision. We engineer." explaining data transformation into insights, 6 service categories in grid layout (AI analytics dashboards, Predictive modeling & forecasting, Decision intelligence systems, Data integration & reporting automation, Customer and market insights, Optimization and performance intelligence) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, process section titled "Our launch process is swift and simple" with 3 stages (Discovery, Experimentation, Implementation), 9 FAQs with accordion covering data types, timelines, accuracy, security, integration, and automation, dual-option booking section (calendar + contact form with analytics-specific fields: data/reporting challenge, tools/systems data lives in, stage dropdown). Accessible from AI Solutions page card. |
| `/services/machine-learning-engineering-mlops` | MLEngineeringMLOps.tsx | Machine Learning Engineering & MLOps service page - Hero section with dual CTA (Book Now, Explore MLOps Services), breadcrumb navigation (Home > Services > AI Solutions > Machine Learning Engineering & MLOps), brand strip (Ageless Living, Harrison Forbes), description section titled "From prototype to production excellence" explaining ML lifecycle support, 6 service categories in grid layout (End to end ML model development, MLOps pipeline automation, Model deployment & scaling, ML infrastructure & platform engineering, Model monitoring & performance optimization, ML governance documentation & handoff) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, maturity section titled "We meet you where you are" with 3 stages (Discovery, Experimentation, Implementation), 9 FAQs with accordion covering ML engineering vs MLOps, model accuracy, data science collaboration, cloud platforms, deployment timelines, model governance, system integration, and ML system types, dual-option booking section (calendar + contact form with ML-specific fields: ML system type, data location, stage dropdown). Accessible from AI Solutions page card. |
| `/services/ai-enabled-software-delivery` | AIEnabledSoftwareDelivery.tsx | AI-enabled Software Delivery service page - Hero section with dual CTA (Book Now, Explore SDLC Use Cases), breadcrumb navigation (Home > Services > AI Solutions > AI-enabled Software Delivery), brand strip (Ageless Living, Harrison Forbes), description section titled "We apply AI where software delivery actually benefits" explaining AI integration across SDLC, 6 service categories in grid layout (AI-assisted code development, AI-augmented testing & quality engineering, Intelligent defect detection & analysis, AI-driven documentation & knowledge support, Release & deployment optimization, Governance & responsible AI in delivery) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, maturity section titled "We meet you where you are" with 3 stages (Discovery: No idea where to start, Experimentation: Started testing AI tools, Implementation: Ready to scale AI across delivery), 9 FAQs with accordion covering AI-enabled delivery definition, difference from AI coding tools, accountability, team augmentation, SDLC integration, risk management, regulated environments, SDLC coverage, and AI usage guidelines, dual-option booking section (calendar + contact form with delivery-specific fields: part of software delivery to improve, tools/systems currently used, stage dropdown). Accessible from AI Solutions page card. |
| `/services/custom-software-development` | CustomSoftwareDevelopment.tsx | Custom Software Development service page - Hero section with dual CTA (Book Free Consultation, Explore Software Services), breadcrumb navigation (Home > Services > Software Development > Custom Software Development), brand strip (Ageless Living, Harrison Forbes), description section titled "You envision. We engineer." explaining custom software development approach, 6 service categories in grid layout (Full cycle software development, Web and mobile application development, Quality assurance and software testing, Support optimization and long term maintenance, Legacy software modernization, Software integrations and automation) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, maturity section titled "We meet you where you are" with 3 stages (Discovery: No idea where to start, Development: Ready to build your solution, Deployment: Have a working product), 10 FAQs with accordion covering outsourcing benefits, partnership approach, engagement models, architecture choices, communication, launch process, quality evaluation, security/compliance/IP, cost considerations, and post-delivery support, dual-option booking section (calendar + contact form with software-specific fields: software type, problem to solve, stage dropdown). Accessible from Software Development page card. |
| `/services/application-development-modernization` | ApplicationDevelopmentModernization.tsx | Application Development & Modernization service page - Hero section with dual CTA (Book Free Consultation, Explore App Development Services), breadcrumb navigation (Home > Services > Software Development > Application Development & Modernization), brand strip (Ageless Living, Harrison Forbes), description section titled "From concept to market-ready applications" explaining application development lifecycle, 6 service categories in grid layout (Custom application development, Proof of concept & MVP development, Cloud-native & cloud-enabled applications, Enterprise application engineering, Application modernization, Application integration & automation) with use case bullets, case studies section (Ageless Living, Harrison Forbes) reusing existing data, maturity section titled "We meet you where you are" with 3 stages (Discovery: No idea where to start, Development: Ready to build your solution, Deployment: Have a working product), 9 FAQs with accordion covering service offerings, modernization/migration, maintenance/support, QA services, timelines, engagement models, technology choices, industry-specific applications, and post-delivery process, dual-option booking section (calendar + contact form with application-specific fields: application type, problem to solve, stage dropdown). Accessible from Software Development page card. |
| `/case-studies` | CaseStudies.tsx | Portfolio - 2 detailed case studies (Ageless Living, Harrison Forbes) |
| `/about` | About.tsx | Team page - 3 founders with bios |
| `/book-audit` | BookAudit.tsx | Dual-option contact page - Tab 1: Contact form (mailto), Tab 2: Cal.com calendar booking (30-min/45-min calls) |
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
     - Note: AI Strategy & Governance and Custom AI Product Development are NOT in navbar - accessed via service overview page cards
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
   - **Premium Design Enhancements (2026-05-08):**
     - **Typography Hierarchy:** All major headings upgraded to font-bold with tightened line-height (leading-[1.1]), About section scaled to text-2xl→5xl, Feature titles scaled to text-2xl→4xl, improved text contrast (black/55 → black/65-70)
     - **Section Padding:** Standardized to py-20 md:py-32 lg:py-40 across all major sections for consistent rhythm
     - **Grid Spacing:** Increased gaps (Services: gap-6 md:gap-8, How It Works: gap-6 md:gap-8, Form: space-y-5→8) for premium spaciousness
     - **Card Elevation:** Case study cards with shadow-lg/xl + hover translate, Feature cards with shadow-sm + gradient backgrounds, Stat boxes wrapped in rounded-xl cards with bg-gray-50/60
     - **Background Gradients:** Feature Grid uses bg-gradient-to-b from-white via-gray-50/30 to-gray-50, Feature cards with from-white to-gray-50/40, Testimonial text side with gradient, Logo cards with subtle gradients + hover effects
     - **Icon Treatments:** Feature card icons wrapped in bg-black/5 rounded-full p-3 for visual weight
     - **Button Micro-Interactions:** Primary buttons with active:scale-[0.98] + icon translate-x animations, Secondary buttons with hover:scale-[1.02], All CTAs with arrow animations (group-hover:translate-x-1), Navigation buttons with scale-110 on hover
     - **Enhanced Hover States:** Comparison rows with hover:bg-black/5 (light) or hover:bg-white/5 (dark), Testimonial navigation with scale + background shift
     - **Contact Form Glass:** Upgraded to bg-white/10 with border-white/40, shadow-lg shadow-white/10, placeholder contrast increased to white/50, focus states with border-white/60 + ring-2 ring-white/20
     - **Overall Impact:** Premium feel comparable to Linear/Stripe/Apple with sophisticated elevation hierarchy, consistent spacing rhythm, and polished micro-interactions throughout
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

5. **Contact Form**
   - Icon-prefixed inputs
   - Submits via mailto: link (no backend)
   - Located in: `src/pages/BookAudit.tsx`

6. **Cal.com Booking Integration**
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
1. **AI Strategy & Governance** - Comprehensive roadmap for responsible, scalable AI adoption with frameworks, policies, and oversight mechanisms (dedicated page: `/services/ai-strategy-consulting-governance`)
2. **Custom AI Product Development** - Production-grade AI solutions from concept to deployment, tailored to unique business needs (dedicated page: `/services/custom-ai-product-development`)
3. **AI Agents & Intelligent Automation** - Autonomous systems that streamline workflows and boost efficiency (dedicated page: `/services/ai-agents-intelligent-automation`)
4. **AI Analytics & Decision Intelligence** - Advanced analytics that reveal patterns and predict future outcomes (dedicated page: `/services/ai-analytics-predictive-insights-decision-intelligence`)
5. **ML Engineering & MLOps** - Robust ML infrastructure for reliable, scalable AI deployment (dedicated page: `/services/machine-learning-engineering-mlops`)
6. **AI-Enabled Software Delivery** - AI-powered tools and processes that enhance every phase of the software lifecycle (dedicated page: `/services/ai-enabled-software-delivery`)
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

## SEO & Static Site Generation (SSG)

### Overview

Neural Solutions implements Static Site Generation (SSG) to optimize for search engine indexing and Core Web Vitals. All pages are pre-rendered to static HTML at build time, ensuring Google and other search engines can immediately access full content without waiting for JavaScript execution.

### Implementation

**Pre-rendering Script:** `scripts/prerender.mjs`
- Uses Puppeteer to render all pages to static HTML
- Renders **33 total pages**: 1 homepage, 5 main pages, 9 service pages, 18 city pages
- Generates fully-hydrated HTML with all meta tags, structured data, and content
- Minifies HTML output for optimal performance
- Run with: `npm run build:ssg` (builds + pre-renders) or `npm run prerender` (pre-render only)

**Sitemap Generation:** `vite.config.ts` + `public/sitemap.xml`
- Automated sitemap generation via vite-plugin-sitemap
- Manual sitemap in `public/sitemap.xml` with priority values
- Includes all 33 pages with proper SEO metadata
- Updated: 2026-05-11

### Page Inventory (33 Total Pages)

**Core Pages (6):**
1. `/` - Homepage (priority: 1.0)
2. `/services` - Services overview (priority: 0.9)
3. `/book-audit` - Contact/booking page (priority: 0.9)
4. `/case-studies` - Portfolio (priority: 0.8)
5. `/about` - Team page (priority: 0.7)
6. `/ui-code-kit` - Internal reference (priority: 0.3)

**Service Category Pages (2):**
1. `/services/ai-solutions` (priority: 0.8)
2. `/services/software-development` (priority: 0.8)

**AI Service Detail Pages (7):**
1. `/services/ai-strategy-consulting-governance` (priority: 0.8)
2. `/services/custom-ai-product-development` (priority: 0.8)
3. `/services/ai-agents-intelligent-automation` (priority: 0.8)
4. `/services/ai-analytics-predictive-insights-decision-intelligence` (priority: 0.8)
5. `/services/machine-learning-engineering-mlops` (priority: 0.8)
6. `/services/ai-enabled-software-delivery` (priority: 0.8)
7. `/services/custom-software-development` (priority: 0.8)
8. `/services/application-development-modernization` (priority: 0.8)

**City Landing Pages (18):**
All with priority: 0.7
- `/ai-agency-victoria`
- `/ai-agency-vancouver`
- `/ai-agency-toronto`
- `/ai-agency-calgary`
- `/ai-agency-montreal`
- `/ai-agency-edmonton`
- `/ai-agency-ottawa`
- `/ai-agency-winnipeg`
- `/ai-agency-mississauga`
- `/ai-agency-brampton`
- `/ai-agency-surrey`
- `/ai-agency-burnaby`
- `/ai-agency-richmond`
- `/ai-agency-halifax`
- `/ai-agency-kelowna`
- `/ai-agency-saskatoon`
- `/ai-agency-regina`
- `/ai-agency-quebec-city`

### Build Commands

```bash
# Development build (no pre-rendering)
npm run build

# Production build with SSG (recommended for deployment)
npm run build:ssg

# Pre-render only (requires dist/ folder from previous build)
npm run prerender

# Development server
npm run dev

# Preview built site
npm run preview
```

### SEO Best Practices Implemented

1. **Static HTML Generation** - All pages rendered at build time for instant indexing
2. **Comprehensive Sitemap** - All 33 pages with proper priority values (1.0 → 0.3)
3. **Meta Tags** - Unique titles, descriptions, and keywords per page via SEO.tsx component
4. **Structured Data** - JSON-LD schema (LocalBusiness, Breadcrumb) for rich snippets
5. **Geographic Meta Tags** - City pages include geo.region, geo.placename, geo.position
6. **Semantic HTML** - Proper heading hierarchy, alt text on images, accessible markup
7. **Fast Load Times** - Pre-rendered HTML, code splitting, minified assets
8. **Mobile Responsive** - All pages optimized for mobile-first indexing

### Next Steps for Enhanced SEO

**Completed:**
- ✅ Static HTML pre-rendering for all 33 pages
- ✅ Complete XML sitemap with priority values
- ✅ Unique meta tags per page
- ✅ Structured data (JSON-LD)
- ✅ City-specific SEO optimization

**Future Enhancements:**
- Server-Side Rendering (SSR) with Next.js, Remix, or Vike for dynamic content
- robots.txt optimization
- Automated sitemap updates via CI/CD
- Open Graph image generation per page
- Schema.org enrichment (FAQPage, Service, Organization)
- Core Web Vitals monitoring

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

---

## Codebase Cleanup (May 2026)

A comprehensive cleanup was performed to remove unused code and reduce technical debt:

### Files Removed

**Unused Components (3 files):**
- `src/components/MarqueeTicker.tsx` - Horizontal scrolling marquee (never imported)
- `src/components/CustomCursor.tsx` - Custom cursor with purple theme (old design, never imported)
- `src/components/NavLink.tsx` - Link wrapper component (never used)

**Unused Section Components (7 files + entire folder):**
- `src/components/sections/HeroSection.tsx` - Old hero section (replaced by inline LandingPage hero)
- `src/components/sections/ServicesSection.tsx` - Old services section
- `src/components/sections/ProcessSection.tsx` - Old process section
- `src/components/sections/QuoteSection.tsx` - Old quote section
- `src/components/sections/CaseStudiesPreview.tsx` - Old case studies preview
- `src/components/sections/CTASection.tsx` - Old CTA section
- `src/components/sections/StatCallouts.tsx` - Old stats section

**Legacy Files (4 files):**
- `src/lib/RootLayout.tsx` - Leftover from Vike attempt (never imported)
- `src/App.css` - Default Vite boilerplate styles (unused, using Tailwind + index.css)
- `src/content/guides/what-is-ai-automation.md` - Markdown source (content hardcoded in JSX)
- `src/pages/WhatIsAIAutomation.tsx` - Educational guide page (not routed, orphaned)

**Unused Media (2 files):**
- `src/assets/flow.webm` - Hero video (only used by deleted HeroSection)
- `src/assets/flow.mp4` - Hero video (only used by deleted HeroSection)

**Unused shadcn/ui Components (39 files):**

Removed completely unused components:
- accordion, alert-dialog, alert, aspect-ratio, avatar
- breadcrumb, calendar, carousel, chart, checkbox
- collapsible, command, context-menu, dropdown-menu, drawer
- hover-card, input-otp, menubar, navigation-menu, pagination
- popover, progress, radio-group, resizable, scroll-area
- select, slider, switch, table, toast, toggle-group

Removed dependency-only components with no active users:
- sidebar (not imported anywhere)
- sheet, separator, skeleton (only used by sidebar)
- form (not imported anywhere)
- label (only used by form and sidebar)
- toggle (only used by toggle-group)
- dialog (only used by command)

**Remaining shadcn/ui Components (10 files):**
- button, input, textarea, tabs (actively used in forms)
- badge, card (used in UICodeKit)
- tooltip, toaster, sonner (app-level providers)
- use-toast (toast hook)

### Results

- **Total files removed:** 55 files
  - 3 unused custom components
  - 7 unused section components
  - 4 legacy files
  - 2 unused videos
  - 39 unused UI components
- **Reduced from 48 to 10 shadcn/ui components** (79% reduction)
- **No console.logs** in codebase
- **No unused imports** found
- **Cleaner project structure** with only actively used code

### Code Quality

All remaining code verified to be:
- Actually imported and used
- Free of console.log statements
- Free of unused imports
- Properly typed with TypeScript
- Following established patterns from CLAUDE.md

