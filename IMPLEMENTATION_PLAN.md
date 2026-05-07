# Implementation Plan: One-Page Scroll Design Conversion

## Overview
Transform the existing multi-page Neural Solutions website from a purple-themed multi-page app into a premium black/white/gray one-page scroll experience inspired by Mistral consulting design.

---

## User Decisions
1. ✅ **Keep pages:** Case Studies, About, Book Audit (redesign with new UI kit feel)
2. ✅ **Remove:** Services page
3. ✅ **Keep:** All 18 city landing pages for SEO
4. ✅ **ParticleField:** Keep but change colors to white/gray
5. ✅ **Typography:** Use Inter font

---

## PHASE 0: Prerequisites

### Install Dependencies
```bash
npm install lucide-react
```
**Why:** lucide-react is required for icons (ArrowRight, Workflow, ShieldCheck, etc.) used in the new LandingPage component.

---

## PHASE 1: Design System Foundation

### 1.1 Update Tailwind Configuration
**File:** `tailwind.config.ts`

**Changes:**
1. Add Inter font family to replace Playfair Display, Outfit, and Space Mono
2. Update color palette from purple theme to black/white/gray
3. Update border radius values to match new design (1.25rem for cards)

```typescript
// tailwind.config.ts

export default {
  // ... existing config
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // REMOVE: display, serif, mono
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "1.25rem", // 20px for cards (instead of var(--radius))
        md: "0.75rem",
        sm: "0.5rem",
      },
    },
  },
}
```

### 1.2 Update CSS Variables & Utilities
**File:** `src/index.css`

**Changes:**

1. **Replace Google Fonts import** (top of file):
```css
/* REPLACE the existing @import with: */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

2. **Update CSS variables in :root**:
```css
@layer base {
  :root {
    --background: 0 0% 100%;      /* White #FFFFFF */
    --foreground: 0 0% 2%;        /* Black #050505 */
    --card: 0 0% 100%;            /* White */
    --card-foreground: 0 0% 2%;   /* Black */
    --primary: 0 0% 2%;           /* Black for primary */
    --primary-foreground: 0 0% 100%; /* White text on black */
    --secondary: 0 0% 96%;        /* Light gray #F5F5F5 */
    --secondary-foreground: 0 0% 2%;
    --muted: 0 0% 98%;            /* Very light gray #FAFAFA */
    --muted-foreground: 0 0% 45%; /* Medium gray #737373 */
    --accent: 0 0% 90%;           /* Light gray accent #E5E5E5 */
    --accent-foreground: 0 0% 2%;
    --border: 0 0% 90%;           /* Border gray #E5E5E5 */
    --input: 0 0% 90%;            /* Input border */
    --ring: 0 0% 2%;              /* Focus ring black */
    --radius: 1.25rem;            /* 20px */
  }
}
```

3. **Remove purple-themed utilities** (DELETE these classes):
```css
/* DELETE these classes: */
.atmosphere { /* purple gradient backgrounds */ }
.atmosphere-dense { /* denser purple gradient */ }
.shimmer { /* purple gradient animation */ }
.text-gradient { /* purple gradient text */ }
.glow-purple { /* purple glow effect */ }
```

4. **Update existing utilities for new color scheme**:
```css
/* UPDATE glassmorphism for black/white design */
.glass {
  background: hsl(0 0% 100% / 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(0 0% 90%);
}

.glass-dark {
  background: hsl(0 0% 2% / 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(0 0% 20%);
}

/* UPDATE card-elevated for gray shadows */
.card-elevated {
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-elevated:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
```

5. **Keep design-agnostic utilities** (these are fine):
```css
/* KEEP: */
.grain { /* texture overlay */ }
.float, .float-delayed, .float-slow { /* floating animations */ }
.line-draw { /* underline draw on hover */ }
.perspective-card { /* 3D tilt effect */ }
```

**Verification:** Run `npm run dev` and check that styles compile without errors.

---

## PHASE 2: ParticleField Color Update

### 2.1 Update ParticleField Component
**File:** `src/components/ParticleField.tsx`

**Changes:**
Update the particle and connection line colors from purple to white/gray.

**Find line ~39** (particle fill color):
```typescript
// BEFORE:
ctx.fillStyle = "hsla(262, 70%, 50%, 0.15)";

// AFTER:
ctx.fillStyle = "hsla(0, 0%, 85%, 0.15)"; // Light gray particles
```

**Find line ~53** (connection line color):
```typescript
// BEFORE:
ctx.strokeStyle = `hsla(262, 70%, 50%, ${0.04 * (1 - dist / 150)})`;

// AFTER:
ctx.strokeStyle = `hsla(0, 0%, 70%, ${0.04 * (1 - dist / 150)})`; // Gray lines
```

**Verification:** ParticleField should now show subtle white/gray particles instead of purple.

---

## PHASE 3: Create New Landing Page

### 3.1 Create LandingPage Component
**File:** `src/pages/LandingPage.tsx` (CREATE NEW FILE)

**Content:** Use the provided LandingPage.tsx code from the UI kit with all 9 sections:

1. **NavBar** - Sticky navigation with centered logo, anchor links
2. **Hero** - Full-screen background image with dark overlay
3. **About** - Company description with stats grid (4 stats)
4. **ServicesPreview** - 2 service image cards
5. **FeatureGrid** - Problem-solving features with text/image cards
6. **HowItWorks** - 3-step process with images
7. **GrowthPhilosophy** - Old model vs AI model comparison table
8. **Testimonials** - Testimonial card with carousel navigation
9. **FinalCTA** - Contact section with form + booking
10. **Footer** - Simple footer with links

**Key modifications to provided code:**

1. **Import CalendarEmbed** for booking functionality:
```typescript
import CalendarEmbed from "@/components/CalendarEmbed";
```

2. **Replace placeholder booking in FinalCTA** with real CalendarEmbed:
```typescript
// In FinalCTA section, add tabs for form + booking:
<Tabs defaultValue="form">
  <TabsList className="grid w-full grid-cols-2 mb-8">
    <TabsTrigger value="form">Contact Form</TabsTrigger>
    <TabsTrigger value="calendar">Book Meeting</TabsTrigger>
  </TabsList>

  <TabsContent value="form">
    {/* Existing contact form */}
  </TabsContent>

  <TabsContent value="calendar">
    <CalendarEmbed calLink="james-rankin-jmigyc/30min" />
  </TabsContent>
</Tabs>
```

3. **Add image error handling** for missing images:
```typescript
// Add this helper at top of file:
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)';
  e.currentTarget.style.display = 'flex';
  e.currentTarget.style.alignItems = 'center';
  e.currentTarget.style.justifyContent = 'center';
  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E';
};

// Use on all images:
<img
  src="/images/hero.jpg"
  alt="Hero background"
  onError={handleImageError}
/>
```

4. **Implement smooth scroll** for anchor navigation:
```typescript
// Add this function inside NavBar component:
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // navbar height
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// Use in nav links:
<a
  onClick={() => scrollToSection('about')}
  className="cursor-pointer transition-opacity hover:opacity-60"
>
  About us
</a>
```

5. **Add section IDs** to each major section:
```html
<section id="hero" className="...">
<section id="about" className="...">
<section id="services" className="...">
<section id="contact" className="...">
```

**Verification:** Landing page should render all 9 sections with proper spacing and styling.

---

## PHASE 4: Update Routing & Navigation

### 4.1 Update App.tsx Routing
**File:** `src/App.tsx`

**Changes:**
1. Import new LandingPage component
2. Remove Services route
3. Update Index route to use LandingPage

```typescript
// ADD import at top:
import LandingPage from "./pages/LandingPage";

// REMOVE import (Services page):
// import Services from "./pages/Services";

// UPDATE routes:
<Routes>
  <Route path="/" element={<LandingPage />} /> {/* CHANGED from Index */}

  {/* REMOVE this route: */}
  {/* <Route path="/services" element={<Services />} /> */}

  {/* KEEP these routes: */}
  <Route path="/case-studies" element={<CaseStudies />} />
  <Route path="/about" element={<About />} />
  <Route path="/book-audit" element={<BookAudit />} />
  <Route path="/ui-code-kit" element={<UICodeKit />} />
  <Route path="/resources/what-is-ai-automation" element={<WhatIsAIAutomation />} />

  {/* KEEP city routes */}
  {cities.map((city) => (
    <Route
      key={city.slug}
      path={`/ai-agency-${city.slug}`}
      element={<CityLanding citySlug={city.slug} />}
    />
  ))}

  <Route path="*" element={<NotFound />} />
</Routes>
```

### 4.2 Update Navbar Component
**File:** `src/components/Navbar.tsx`

**Problem:** Landing page uses anchor links, other pages use React Router links. Need dual navigation pattern.

**Solution:** Update Navbar to detect current page and switch navigation style.

```typescript
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isLandingPage) {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on landing page, just scroll
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const navLinks = isLandingPage
    ? [
        { label: "Services", action: () => scrollToSection('services') },
        { label: "About us", action: () => scrollToSection('about') },
        { label: "Contact us", action: () => scrollToSection('contact') },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/case-studies", label: "Case Studies" },
        { to: "/about", label: "About" },
      ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {isLandingPage ? (
            <>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="font-sans text-sm font-medium transition-opacity hover:opacity-60"
                >
                  {link.label}
                </button>
              ))}
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans text-sm font-medium transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </>
          )}
        </div>

        {/* Center: Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-sans text-xl font-medium uppercase tracking-[0.18em]"
        >
          Neural
        </Link>

        {/* Right: CTA button (desktop) */}
        <div className="hidden md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() => isLandingPage ? scrollToSection('contact') : navigate('/book-audit')}
            className="font-sans"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile: Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          {isLandingPage ? (
            <>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    link.action();
                    setOpen(false);
                  }}
                  className="block w-full text-left font-sans text-sm"
                >
                  {link.label}
                </button>
              ))}
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block font-sans text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </>
          )}
          <button
            onClick={() => {
              isLandingPage ? scrollToSection('contact') : navigate('/book-audit');
              setOpen(false);
            }}
            className="block w-full text-left font-sans text-sm font-bold"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

### 4.3 Update Footer Component
**File:** `src/components/Footer.tsx`

**Changes:**
1. Remove link to /services (deleted route)
2. Update styles to match new design (Inter font, black/white/gray)
3. Simplify to match new aesthetic

```typescript
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Left: Brand statement */}
      <div>
        <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
          Stop planning. Start shipping.
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          Neural Solutions builds AI systems that turn manual work into scalable operations.
        </p>
      </div>

      {/* Right: Navigation */}
      <div className="flex gap-16">
        <div>
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-4">
            Navigation
          </span>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/about", label: "About" },
              { to: "/book-audit", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-4">
            Contact
          </span>
          <a
            href="mailto:growth@neuralcoremarketing.com"
            className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            growth@neuralcoremarketing.com
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border">
      <p className="font-sans text-xs text-muted-foreground">
        © {new Date().getFullYear()} Neural Solutions. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
```

**Verification:** Footer should display correctly with updated links and styling.

---

## PHASE 5: Redesign Existing Pages

### 5.1 Redesign CaseStudies.tsx
**File:** `src/pages/CaseStudies.tsx`

**Changes:**
1. Replace Playfair Display / Outfit with Inter
2. Update colors: purple → black/gray
3. Update cards: `rounded-xl` → `rounded-[1.25rem]`
4. Remove purple floating orbs
5. Update stat highlights from purple to black

**Key updates:**

```typescript
// Hero section typography:
<h1 className="font-sans text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
  Case Studies
</h1>
<p className="text-xl text-muted-foreground">
  Real projects, real results.
</p>

// Case study cards:
<article className="border border-border rounded-[1.25rem] p-8 bg-card hover:shadow-lg transition-shadow">
  <h2 className="font-sans text-3xl font-bold text-foreground mb-4">
    {study.title}
  </h2>
  {/* ... */}
</article>

// Stats (remove purple backgrounds):
<div className="bg-secondary rounded-xl p-6">
  <div className="text-4xl font-bold text-foreground">{stat.value}</div>
  <p className="text-sm text-muted-foreground">{stat.label}</p>
</div>

// REMOVE:
{/* Delete purple floating orbs: */}
{/* <div className="absolute ... bg-primary/[0.05] ..." /> */}
```

**Verification:** Case studies page should use Inter font, black/white/gray colors, and no purple accents.

### 5.2 Redesign About.tsx
**File:** `src/pages/About.tsx`

**Changes:**
1. Update typography to Inter
2. Update team cards with new card style
3. Remove purple accents
4. Simplify layout

**Key updates:**

```typescript
// Hero section:
<h1 className="font-sans text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
  About Neural Solutions
</h1>
<p className="text-xl text-muted-foreground">
  Small team. Big conviction.
</p>

// Team member cards:
<div className="border border-border rounded-[1.25rem] p-8 bg-white">
  <div className="flex items-start gap-6">
    <img
      src={member.photo}
      alt={member.name}
      className="w-24 h-24 rounded-2xl object-cover"
    />
    <div>
      <h3 className="font-sans text-2xl font-bold text-foreground mb-2">
        {member.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {member.role}
      </p>
      <p className="font-sans text-base text-foreground leading-relaxed">
        {member.bio}
      </p>
    </div>
  </div>
</div>

// REMOVE:
{/* Delete purple decorative elements */}
```

**Verification:** About page should display team members with clean black/white styling.

### 5.3 Redesign BookAudit.tsx
**File:** `src/pages/BookAudit.tsx`

**Changes:**
1. Update form styles to black/white theme
2. Update tabs UI
3. Update CalendarEmbed styling
4. Remove purple accents

**Key updates:**

```typescript
// Hero section:
<h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
  Get in Touch
</h1>
<p className="text-lg text-muted-foreground mb-10">
  Send us a message or book a call to discuss your AI automation needs.
</p>

// Form card:
<form className="border border-border rounded-[1.25rem] p-8 bg-white space-y-6">
  {/* Form inputs with updated styling */}
  <Input className="font-sans" />
  <Textarea className="font-sans" />
  <Button className="font-sans w-full">Send Message</Button>
</form>

// Tabs:
<TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary">
  <TabsTrigger value="form" className="font-sans">Contact Form</TabsTrigger>
  <TabsTrigger value="calendar" className="font-sans">Book Meeting</TabsTrigger>
</TabsList>
```

**Verification:** Book Audit page should have clean form styling with black/white theme.

### 5.4 Update CalendarEmbed
**File:** `src/components/CalendarEmbed.tsx`

**Changes:**
- Update brand color from purple to black
- Update wrapper styling

```typescript
import Cal from "@calcom/embed-react";
import { cn } from "@/lib/utils";

interface CalendarEmbedProps {
  calLink: string;
  className?: string;
}

export default function CalendarEmbed({ calLink, className }: CalendarEmbedProps) {
  return (
    <div className={cn("border border-border rounded-[1.25rem] overflow-hidden bg-white", className)}>
      <Cal
        calLink={calLink}
        config={{
          theme: "light",
          styles: {
            branding: {
              brandColor: "#050505", // Black instead of purple (was #8B5CF6)
            },
          },
        }}
      />
    </div>
  );
}
```

**Verification:** Calendar embed should display with black branding instead of purple.

---

## PHASE 6: Update City Landing Pages

### 6.1 Update CityLanding.tsx
**File:** `src/pages/CityLanding.tsx`

**Changes:**
1. Update typography to Inter
2. Update colors to black/white/gray
3. Update form/tabs styling
4. **PRESERVE all SEO features** (LocalBusiness schema, meta tags, coordinates)

**Key updates:**

```typescript
// Hero section (update typography only):
<h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
  {cityData.heroHeadline}
</h1>
<p className="text-lg text-muted-foreground leading-relaxed mb-10">
  {cityData.description}
</p>

// Form styling (update visual only):
<form className="border border-border rounded-[1.25rem] p-8 bg-white space-y-6">
  {/* Input fields with updated styling */}
</form>

// Tabs (update styling):
<TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary">
  <TabsTrigger value="form" className="font-sans">Contact Form</TabsTrigger>
  <TabsTrigger value="calendar" className="font-sans">Book Meeting</TabsTrigger>
</TabsList>

// REMOVE purple decorative elements:
{/* DELETE: <div className="absolute ... bg-primary/[0.05] ..." /> */}

// PRESERVE ALL SEO ELEMENTS:
{/* Keep all <SEO> component props */}
{/* Keep all StructuredData components */}
{/* Keep coordinates, LocalBusiness schema, etc. */}
```

**Critical:** Do NOT modify:
- SEO component props
- StructuredData components
- LocalBusiness schema
- Meta tags
- Coordinates

**Verification:** Test 2-3 city pages (Victoria, Toronto, Vancouver) to ensure styling updates work and SEO metadata is intact.

---

## PHASE 7: Cleanup

### 7.1 Delete Unused Files

**Files to DELETE:**

```bash
# Navigate to project directory
cd c:\Users\ejsaant\Neural\Neural_solutions

# Delete Services page
rm src/pages/Services.tsx

# Delete old Index page (replaced by LandingPage.tsx)
rm src/pages/Index.tsx
```

**Optional: Delete unused section components** (if not reused elsewhere):
Check if these are used in other pages before deleting:
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/QuoteSection.tsx`
- `src/components/sections/ProcessSection.tsx`
- `src/components/sections/CaseStudiesPreview.tsx`
- `src/components/sections/CTASection.tsx`

**Recommendation:** Keep them for now in case they're useful as reference.

### 7.2 Clean Up CSS
**File:** `src/index.css`

**Already completed in Phase 1.2** - purple utilities removed, grayscale utilities added.

---

## PHASE 8: Mobile Responsiveness Verification

### 8.1 Test Breakpoints

**Pages to test:**
1. LandingPage (/) - New one-page scroll
2. CaseStudies (/case-studies) - Redesigned
3. About (/about) - Redesigned
4. BookAudit (/book-audit) - Redesigned
5. CityLanding (/ai-agency-victoria) - Updated template

**Breakpoints to test:**
- **Mobile:** 375px (iPhone SE)
- **Tablet:** 768px (iPad)
- **Desktop:** 1280px, 1920px

**Testing approach:**
```bash
npm run dev
# Open http://localhost:8080 in browser
# Use DevTools responsive mode (F12 → Toggle device toolbar)
# Test each page at each breakpoint
```

**Key checks:**
- ✅ Navigation hamburger menu works on mobile
- ✅ Cards stack vertically on mobile
- ✅ Text scales correctly (no overflow)
- ✅ Images resize correctly (object-cover works)
- ✅ Forms are full-width on mobile
- ✅ Buttons are tappable (min 44px height)
- ✅ Anchor navigation works on mobile (landing page)
- ✅ No horizontal scroll on mobile

### 8.2 Common Mobile Issues to Fix

**If navbar menu doesn't work on mobile:**
- Ensure hamburger icon is visible
- Check z-index on mobile menu
- Verify onClick handlers close menu after navigation

**If forms are too small on mobile:**
- Add `className="w-full"` to inputs
- Increase padding on mobile with responsive classes
- Use `text-base` instead of `text-sm` on mobile

**If images overflow on mobile:**
- Ensure parent containers have `overflow-hidden`
- Use `object-cover` on images
- Test background images with `background-size: cover`

---

## PHASE 9: Testing & Verification

### 9.1 Functional Testing

**Checklist:**

**Landing Page (/):**
- [ ] All 9 sections render correctly
- [ ] Anchor navigation scrolls to correct sections with offset
- [ ] Background image loads (or shows gradient placeholder)
- [ ] Contact form submits via mailto:
- [ ] Calendar booking opens Cal.com modal
- [ ] ParticleField shows white/gray particles (not purple)
- [ ] ScrollReveal animations trigger on scroll
- [ ] Mobile navigation works (hamburger menu)

**Case Studies Page (/case-studies):**
- [ ] Both case studies render with correct data
- [ ] Images load (or show placeholders)
- [ ] New card styling applied (rounded-[1.25rem], black/white)
- [ ] Stats display correctly
- [ ] Links to contact page work

**About Page (/about):**
- [ ] All 3 team members display
- [ ] Team photos load correctly
- [ ] New styling applied (Inter font, black/white cards)
- [ ] Layout is responsive on mobile

**Book Audit Page (/book-audit):**
- [ ] Contact form submits via mailto:
- [ ] Calendar booking works (30-min and 45-min options)
- [ ] Tabs switch correctly between form and calendar
- [ ] New styling applied throughout

**City Landing Pages (/ai-agency-{city}):**
- [ ] Test Victoria BC (/ai-agency-victoria)
- [ ] Test Toronto ON (/ai-agency-toronto)
- [ ] Test Vancouver BC (/ai-agency-vancouver)
- [ ] SEO meta tags render correctly (view page source)
- [ ] Contact form works
- [ ] Calendar booking works
- [ ] LocalBusiness schema present in HTML

### 9.2 SEO Verification

**Run existing SEO test suite:**

```bash
# Quick validation (1-2 seconds, no browser)
npm run validate:city-seo

# Full E2E tests (40-60 seconds, browser-based)
npm run test:city-seo
```

**Expected results:**
- ✅ All 18 city pages pass validation
- ✅ Meta descriptions are unique (150-160 chars)
- ✅ Meta titles are unique and contain city names
- ✅ LocalBusiness schema intact with coordinates
- ✅ Canonical URLs correct

**Manual SEO checks:**
1. View page source on landing page (right-click → View Page Source)
2. Verify meta tags:
   - `<title>` tag is appropriate for new design
   - `<meta name="description">` describes the business
   - OpenGraph tags (`og:title`, `og:description`) are present
3. Check structured data:
   - Search for `application/ld+json` scripts
   - Verify organization schema is present

### 9.3 Build & Performance Testing

**Build test:**
```bash
npm run build
```
**Expected:** Build completes without errors, bundle size is reasonable.

**Preview production build:**
```bash
npm run preview
```
**Expected:** Site works correctly at http://localhost:4173

**Lighthouse audit:**
1. Open preview in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit for Desktop and Mobile

**Lighthouse targets:**
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 90+
- ✅ SEO: 95+

**Common issues to fix:**
- Large images not optimized (compress, convert to WebP)
- Missing alt text on images
- Insufficient color contrast (test readability)
- Missing aria labels on buttons/links

### 9.4 Cross-Browser Testing

**Browsers to test:**
- ✅ Chrome (primary development browser)
- ✅ Firefox
- ✅ Safari (if available on Mac)
- ✅ Edge

**Key features to verify:**
- Anchor scroll behavior (smooth scroll CSS property)
- Glassmorphism effects (backdrop-filter support)
- Inter font loading from Google Fonts
- ParticleField canvas rendering
- Cal.com embed works in all browsers

---

## PHASE 10: Documentation

### 10.1 Update spec.md
**File:** `spec.md`

**Major sections to update:**

**1. Design System (lines 183-235):**
```markdown
### Color Palette (HSL CSS Variables)

```css
--background:    0 0% 100%      /* white #FFFFFF */
--foreground:    0 0% 2%        /* black #050505 */
--primary:       0 0% 2%        /* black */
--secondary:     0 0% 96%       /* light gray */
--muted:         0 0% 98%       /* very light gray */
--card:          0 0% 100%      /* white */
--border:        0 0% 90%       /* border gray */
```

### Typography

| Usage | Font | Style |
|-------|------|-------|
| All Text | Inter | Sans-serif, clean, modern |

### Custom CSS Classes

| Class | Effect |
|-------|--------|
| `.glass` | Glassmorphism: white translucent + blur + border |
| `.glass-dark` | Dark glassmorphism for dark backgrounds |
| `.grain` | Faint SVG noise texture overlay |
| `.card-elevated` | Soft gray shadow with hover lift |
| `.float` | Floating animation variants |
```

**2. Routing & Pages (lines 167-179):**
```markdown
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | LandingPage.tsx | One-page scroll landing - Hero, About, Services, Features, Process, Philosophy, Testimonials, CTA, Footer |
| `/case-studies` | CaseStudies.tsx | Portfolio - 2 detailed case studies (redesigned with black/white theme) |
| `/about` | About.tsx | Team page - 3 founders (redesigned with black/white theme) |
| `/book-audit` | BookAudit.tsx | Dual-option contact - Form + Calendar (redesigned with black/white theme) |
| `/resources/what-is-ai-automation` | WhatIsAIAutomation.tsx | Educational guide |
| `/ai-agency-{city}` | CityLanding.tsx | SEO-optimized city pages (18 cities, updated styling) |
| `/ui-code-kit` | UICodeKit.tsx | Developer reference |
| `*` | NotFound.tsx | 404 page |

**Note:** `/services` route has been removed. Services are now presented on the landing page.
```

**3. Features & Functionality (lines 237-303):**
```markdown
### Interactive Elements

1. **Particle Field**
   - Canvas-based system with 60 particles
   - **Updated:** White/gray particles (was purple)
   - Connection lines drawn when particles < 150px apart
   - Located in: `src/components/ParticleField.tsx`

2. **Navbar**
   - Fixed position with scroll detection
   - **Dual navigation pattern:**
     - Landing page: Anchor links with smooth scroll
     - Other pages: React Router links
   - Mobile hamburger menu
   - Located in: `src/components/Navbar.tsx`

3. **Landing Page Sections**
   - Hero with full-screen background image
   - About with stats grid
   - Services preview (2 cards)
   - Feature grid (problem-solving)
   - How it works (3-step process)
   - Growth philosophy (old vs new comparison)
   - Testimonials
   - Final CTA with form + booking
   - Footer
```

**4. Design Philosophy (lines 695-706):**
```markdown
## Design Philosophy

The site embodies a **"Premium Minimal"** aesthetic:

1. **Black & White Foundation** - Clean white backgrounds with sharp black text, subtle gray accents
2. **Typography Clarity** - Inter font throughout for modern, readable design
3. **Generous Spacing** - Ample whitespace, large padding, breathing room
4. **Subtle Depth** - Light shadows, soft borders, minimal gradients
5. **Motion Restraint** - ScrollReveal entrance animations, subtle hover states
6. **Cinematic Layout** - Full-screen hero, large image cards, bold typography
7. **Professional Polish** - Rounded corners (1.25rem), consistent spacing, refined interactions
```

### 10.2 Update CLAUDE.md
**File:** `CLAUDE.md`

**Sections to update:**

**1. Design Standard (lines 14-36):**
```markdown
## Design Standard

The UI must feel: Premium. Clean. Minimal. Modern. Sophisticated.
Reference: Apple, Linear, Stripe, Mistral Consulting.

### Brand Colors

- **Black:** #050505 (primary text, backgrounds on dark sections)
- **White:** #FFFFFF (primary background)
- **Gray Scale:**
  - Light: #F5F5F5 (secondary backgrounds)
  - Medium: #737373 (muted text)
  - Border: #E5E5E5 (borders, dividers)

### Typography

- **All text:** Inter (sans-serif, clean, modern)
- Headlines: font-medium to font-bold, tracking-tight
- Body: font-normal, leading-relaxed

### Rules

- Strong spacing and hierarchy. No clutter.
- Large readable headings with tight line-height (leading-tight)
- Clean white backgrounds with subtle gray accents
- Consistent card style: `rounded-[1.25rem]` with border-border
- Black text on white, high contrast for readability
```

**2. Styling Rules (lines 52-62):**
```markdown
## Styling Rules

- Tailwind only — no arbitrary pixel values
- Cards → `rounded-[1.25rem]`, soft shadows, `.card-elevated` class
- Sections → generous vertical padding (py-16+ or py-20+)
- Containers → max-w-7xl centered
- Glass effects → `.glass` class (white translucent) or `.glass-dark` (black translucent)
- Text → Inter font, black on white for high contrast
```

**3. Routing (line 102):**
```markdown
## Routing

Current routes:

- / → One-page scroll landing
- /case-studies → Portfolio
- /about → Team
- /book-audit → Contact form + booking
- /ai-agency-{city} → City landing pages (×18)
- /resources/what-is-ai-automation → Educational guide

**Note:** `/services` route removed. Services shown on landing page.

Do not break routing structure. Do not introduce unnecessary routes.
```

---

## Final Verification Checklist

Before marking implementation complete:

### Visual Design
- [ ] Landing page uses black/white/gray color scheme (no purple)
- [ ] All pages use Inter font (no Playfair/Outfit/Space Mono)
- [ ] Cards use `rounded-[1.25rem]` border radius
- [ ] ParticleField shows white/gray particles (not purple)
- [ ] No purple gradient backgrounds anywhere
- [ ] High contrast black text on white backgrounds

### Functionality
- [ ] Landing page renders all 9 sections correctly
- [ ] Anchor navigation scrolls smoothly to sections
- [ ] Contact form submits via mailto:
- [ ] Calendar booking opens Cal.com modal with 30-min/45-min options
- [ ] ScrollReveal animations trigger on scroll
- [ ] Navbar switches between anchor links (landing) and router links (other pages)
- [ ] Mobile hamburger menu works and closes after navigation

### Pages
- [ ] Case Studies page redesigned with new theme
- [ ] About page redesigned with new theme
- [ ] Book Audit page redesigned with new theme
- [ ] All 18 city pages use new styling
- [ ] Services page deleted
- [ ] Old Index.tsx deleted

### SEO & Testing
- [ ] City SEO validation passes: `npm run validate:city-seo`
- [ ] City E2E tests pass: `npm run test:city-seo`
- [ ] Build completes without errors: `npm run build`
- [ ] Preview works correctly: `npm run preview`
- [ ] No console errors in browser DevTools
- [ ] Lighthouse scores meet targets (90+ across all metrics)

### Responsive Design
- [ ] All pages tested on mobile (375px)
- [ ] All pages tested on tablet (768px)
- [ ] All pages tested on desktop (1280px)
- [ ] Cards stack vertically on mobile
- [ ] Forms are full-width on mobile
- [ ] Images resize correctly
- [ ] No horizontal scroll on any breakpoint

### Documentation
- [ ] spec.md updated with new design system
- [ ] spec.md routing section updated
- [ ] CLAUDE.md updated with new guidelines
- [ ] CLAUDE.md styling rules updated

---

## Image Assets Required

Create these placeholder images in `/public/images/`:

- `hero.jpg` - Full-screen hero background (1920x1080 recommended)
- `service-1.jpg` - AI workflow automation service card (800x600)
- `service-2.jpg` - AI integration service card (800x600)
- `feature-1.jpg` - Clear operational systems feature (800x600)
- `feature-2.jpg` - Automation feature (800x600)
- `process-1.jpg` - Workflow assessment step (600x400)
- `process-2.jpg` - System design step (600x400)
- `process-3.jpg` - Build and optimize step (600x400)
- `testimonial.jpg` - Client testimonial photo (400x400)

**Fallback:** If images don't exist, the `handleImageError` function will show gradient placeholders.

---

## Rollback Plan

If critical issues arise post-deployment:

### Quick Rollback (Full Revert)
```bash
git revert HEAD
git push origin main
# Redeploy previous version
```

### Partial Rollback (Restore Specific Files)
```bash
# Restore Services page
git checkout HEAD~1 src/pages/Services.tsx

# Restore old Index page
git checkout HEAD~1 src/pages/Index.tsx

# Restore old App.tsx routing
git checkout HEAD~1 src/App.tsx

# Commit and push
git add .
git commit -m "Partial rollback: restore Services and Index pages"
git push origin main
```

### Issues and Solutions

**Issue: Images don't load**
- Solution: Images show gradient placeholders automatically via `handleImageError`
- Action needed: Add actual images to `/public/images/` folder

**Issue: Anchor navigation doesn't work**
- Solution: Check section IDs match nav link targets
- Fallback: Use hash-based routing (`#about`, `#services`, etc.)

**Issue: Cal.com embed breaks**
- Solution: Verify CalendarEmbed component unchanged
- Check: Cal.com API key and meeting links are correct

**Issue: City SEO tests fail**
- Solution: Only visual styles were changed, SEO metadata preserved
- Action: Run tests locally to identify specific failures
- Rollback: Restore old CityLanding.tsx if needed

**Issue: Mobile menu doesn't work**
- Solution: Check hamburger onClick handlers
- Verify: Mobile menu state management with `useState`
- Fallback: Use simple Link-based menu without toggle

---

## Timeline Estimate

Assuming one developer working efficiently:

- **Phase 0:** Install dependencies - 5 minutes
- **Phase 1:** Design system setup - 1.5 hours
- **Phase 2:** ParticleField update - 15 minutes
- **Phase 3:** Create LandingPage - 4 hours
- **Phase 4:** Routing & navigation - 2 hours
- **Phase 5:** Redesign pages - 4 hours
- **Phase 6:** Update city pages - 1.5 hours
- **Phase 7:** Cleanup - 30 minutes
- **Phase 8:** Mobile testing - 2 hours
- **Phase 9:** Testing & verification - 3 hours
- **Phase 10:** Documentation - 1.5 hours

**Total: ~20 hours** (2.5-3 working days)

---

## Success Criteria

The implementation is successful when:

1. ✅ Landing page displays all 9 sections with black/white/gray design
2. ✅ Anchor navigation scrolls smoothly to sections
3. ✅ All pages use Inter font (no purple theme remnants)
4. ✅ Contact form and calendar booking work
5. ✅ Mobile responsive on all breakpoints
6. ✅ City SEO tests pass (all 18 cities)
7. ✅ Build completes without errors
8. ✅ Lighthouse scores ≥90 across all metrics
9. ✅ Documentation updated (spec.md, CLAUDE.md)
10. ✅ ParticleField shows white/gray particles

---

## Post-Implementation Tasks

After successful implementation:

1. **Add Real Images**
   - Replace gradient placeholders with actual professional images
   - Optimize images (compress, convert to WebP)
   - Add descriptive alt text for accessibility

2. **SEO Optimization**
   - Submit updated sitemap to Google Search Console
   - Update meta descriptions for landing page
   - Add Open Graph images for social sharing

3. **Performance Optimization**
   - Lazy load images below fold
   - Implement code splitting if bundle size is large
   - Add prefetching for critical routes

4. **Analytics Setup**
   - Verify Google Analytics tracking still works
   - Add event tracking for form submissions
   - Track anchor link clicks on landing page

5. **User Testing**
   - Get feedback from 3-5 users on new design
   - Test booking flow end-to-end
   - Monitor form submission success rate

---

## Support & Troubleshooting

**Common Issues:**

**Build Errors:**
- Run `npm install` to ensure all dependencies installed
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check for TypeScript errors: `npx tsc --noEmit`

**Styling Not Applied:**
- Restart dev server: `npm run dev`
- Check Tailwind config includes all source paths
- Verify CSS variables in index.css are correct

**SEO Tests Failing:**
- Run validation script first: `npm run validate:city-seo`
- Check city data in `src/lib/data/cities.ts`
- Verify SEO component props in CityLanding.tsx

**Contact Form Not Working:**
- Check mailto: link format
- Verify email address is correct
- Test in different browsers (some block mailto:)

---

This plan is comprehensive and ready for execution. Follow phases sequentially for best results.
