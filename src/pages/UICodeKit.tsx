/**
 * ============================================================================
 * NEURAL SOLUTIONS — UI CODE KIT & ARCHITECTURE REFERENCE
 * ============================================================================
 *
 * PURPOSE:
 * This page documents the entire webapp structure, design system, components,
 * and architecture so it can be fed to an AI (Claude, etc.) to reproduce or
 * extend the site.
 *
 * ============================================================================
 * APP ARCHITECTURE OVERVIEW
 * ============================================================================
 *
 * Tech Stack:
 * - React 18 + TypeScript
 * - Vite (build tool)
 * - Tailwind CSS 3 with custom design tokens (HSL-based CSS variables)
 * - shadcn/ui components (Radix UI primitives + Tailwind styling)
 * - React Router DOM v6 (client-side routing)
 * - TanStack React Query (data fetching)
 * - Lucide React (icons)
 * - class-variance-authority (CVA) for component variants
 *
 * ============================================================================
 * DESIGN PHILOSOPHY — "Cinematic Dark Environment"
 * ============================================================================
 *
 * This is NOT a website. It's an environment. Key principles:
 *
 * 1. ATMOSPHERE FIRST: Near-black backgrounds with layered purple gradients,
 *    animated particle field (canvas), grain texture overlays, and floating
 *    gradient orbs that drift subtly. Every section feels like you're inside
 *    something, not reading a page.
 *
 * 2. MOTION EVERYWHERE: Staggered reveal animations on scroll, drifting
 *    decorative elements, perspective-tilt cards on hover, line-draw
 *    underlines on nav links, arrow translations on button hover.
 *
 * 3. TYPOGRAPHY THAT COMMANDS: Playfair Display (serif) for headlines —
 *    set large, set tight (line-height ~0.95-1.1), with italic emphasis.
 *    Space Mono for labels, tags, metadata. Outfit (sans) for body text.
 *
 * 4. CUSTOM CURSOR: Small purple dot with a trailing ring that follows
 *    with slight delay (requestAnimationFrame lerp). Hidden on touch.
 *
 * 5. COLOR: Deep jewel-tone purple base (hsl 265-270) with near-black bg,
 *    cream/off-white text, electric purple accents. No flat whites anywhere.
 *
 * ============================================================================
 * FILE STRUCTURE
 * ============================================================================
 *
 * src/
 * ├── main.tsx                    — App entry point
 * ├── App.tsx                     — Root: QueryClient, CustomCursor, ParticleField, Router
 * ├── index.css                   — Design system: CSS vars, fonts, utilities, animations
 * │
 * ├── pages/
 * │   ├── Index.tsx               — Landing page (composes section components)
 * │   ├── CaseStudies.tsx         — Full case studies with challenge/solution/results
 * │   ├── About.tsx               — Team bios (Jasraj, James, Meharban)
 * │   ├── BookAudit.tsx           — Contact form (name/email/message) → mailto:
 * │   ├── UICodeKit.tsx           — This file — architecture docs + component preview
 * │   └── NotFound.tsx            — 404
 * │
 * ├── components/
 * │   ├── Navbar.tsx              — Fixed glass nav, logo + links + mobile menu
 * │   ├── Footer.tsx              — 3-col footer with mono typography
 * │   ├── ScrollReveal.tsx        — IntersectionObserver scroll animation wrapper
 * │   ├── CustomCursor.tsx        — Dot + trailing ring cursor (rAF lerp)
 * │   ├── ParticleField.tsx       — Canvas particle system with connections
 * │   ├── sections/
 * │   │   ├── HeroSection.tsx     — Cinematic hero with atmosphere, orbs, grid overlay
 * │   │   ├── ServicesSection.tsx  — 6-card service grid with perspective tilt
 * │   │   ├── ProcessSection.tsx  — 3-step process with giant decorative numbers
 * │   │   ├── CaseStudiesPreview.tsx — 2 case study preview cards
 * │   │   └── CTASection.tsx      — Bottom call-to-action
 * │   └── ui/                     — shadcn/ui primitives
 * │       └── button.tsx          — Custom variants: hero, hero-outline
 * │
 * ├── hooks/
 * │   ├── use-mobile.tsx          — Responsive breakpoint hook
 * │   └── use-toast.ts            — Toast notification hook
 * │
 * └── lib/
 *     └── utils.ts                — cn() helper (clsx + tailwind-merge)
 *
 * ============================================================================
 * ROUTING (src/App.tsx)
 * ============================================================================
 *
 * /                → Index.tsx         (landing page)
 * /case-studies    → CaseStudies.tsx   (detailed case studies)
 * /about           → About.tsx         (team page)
 * /book-audit      → BookAudit.tsx     (contact form)
 * /ui-code-kit     → UICodeKit.tsx     (this page)
 * *                → NotFound.tsx      (404)
 *
 * ============================================================================
 * DESIGN SYSTEM (src/index.css + tailwind.config.ts)
 * ============================================================================
 *
 * FONTS:
 * - Display/Headings: "Playfair Display" (Google Fonts) — editorial serif
 * - Labels/Mono: "Space Mono" (Google Fonts) — technical feel
 * - Body: "Outfit" (Google Fonts) — clean geometric sans
 * - Tailwind: font-display (Playfair), font-mono (Space Mono), font-sans (Outfit)
 *
 * COLOR PALETTE (HSL CSS variables in :root):
 * - --background: 265 25% 6%        (deep near-black purple)
 * - --foreground: 45 20% 90%        (warm cream)
 * - --primary: 270 80% 65%          (electric purple)
 * - --primary-foreground: 0 0% 100% (white)
 * - --accent: 280 90% 70%           (bright violet)
 * - --secondary: 265 25% 14%        (dark purple surface)
 * - --muted: 265 15% 16%            (subtle dark surface)
 * - --muted-foreground: 265 10% 55% (subdued text)
 * - --card: 265 20% 10%             (dark card surface)
 * - --border: 265 15% 16%           (subtle border)
 * - --ring: 270 80% 65%             (focus ring = primary)
 *
 * CUSTOM UTILITY CLASSES (defined in index.css @layer utilities):
 * - .atmosphere       — Layered radial gradients (purple nebula effect)
 * - .atmosphere-dense — Denser radial gradient variant
 * - .glass            — Glassmorphism: dark translucent bg + blur + purple border
 * - .shimmer          — Animated gradient text (purple → pink → purple)
 * - .text-gradient    — Static purple-pink gradient text
 * - .grain::after     — SVG noise texture overlay
 * - .gradient-border  — Gradient border using mask-composite trick
 * - .card-elevated    — Dark shadow with hover lift
 * - .float / .float-delayed / .float-slow — Floating animations
 * - .animate-drift    — Multi-axis drift animation (12s cycle)
 * - .perspective-card — CSS perspective with hover tilt
 * - .line-draw        — Underline that draws left-to-right on hover
 * - .glow-purple      — Purple glow box-shadow
 *
 * ANIMATIONS (defined in index.css @keyframes):
 * - reveal-up  — Fade in + slide up 30px + deblur (0.8s)
 * - drift      — Multi-point translate + rotate loop (12s)
 * - float      — Y-axis bob (7-9s)
 * - shimmer    — Background sweep (4s)
 * - grid-pulse — Grid opacity pulse (8s)
 * - pulse-ring — Scale pulse for status dots (3s)
 *
 * SPECIAL FEATURES:
 * - Custom scrollbar (thin, purple-tinted)
 * - Smooth scroll behavior
 * - cursor: none on body (custom cursor component replaces default)
 * - ParticleField: 60 particles with connection lines (canvas, fixed z-0)
 * - CustomCursor: dot (8px) + ring (40px) with lerp following
 *
 * ============================================================================
 * COMPONENT PATTERNS
 * ============================================================================
 *
 * ScrollReveal:
 *   IntersectionObserver wrapper. Props: delay (ms), className.
 *   Transitions: opacity 0→1, translateY(24px→0), blur(4px→0).
 *   Easing: cubic-bezier(0.16, 1, 0.3, 1). Duration: 700ms.
 *   Fires once (unobserves after reveal). Threshold: 0.15.
 *
 * Navbar:
 *   Fixed position, .glass background, z-50.
 *   Logo: font-mono, "Neural.Solutions" with primary-colored dot.
 *   Links: font-mono, xs, uppercase, .line-draw hover underlines.
 *   Mobile: hamburger toggle, slide-down glass menu.
 *   Active link detection via useLocation().
 *
 * Footer:
 *   3-col grid: brand + description, navigation links, contact email.
 *   All text font-mono. Links hover to text-primary.
 *   Bottom bar with copyright.
 *
 * Button variants (CVA in button.tsx):
 *   hero: bg-primary, shadow-lg shadow-primary/20, hover:bg-accent
 *   hero-outline: border border-primary/50, hover fills primary
 *   All buttons: active:scale-[0.97], cursor-none
 *
 * ============================================================================
 * PAGE PATTERNS
 * ============================================================================
 *
 * INDEX (Landing):
 *   Composed from section components in src/components/sections/:
 *   1. HeroSection — min-h-screen, atmosphere bg, grain, drifting orbs,
 *      pulsing grid overlay, Playfair headline with .shimmer emphasis
 *   2. ServicesSection — 6 cards in 2-3 col grid, perspective-card hover,
 *      gradient-border, icon + title + description pattern
 *   3. ProcessSection — 3 steps with giant decorative numbers (8rem, primary/5)
 *   4. CaseStudiesPreview — 2 cards with metrics + tags, card-elevated hover
 *   5. CTASection — atmosphere-dense bg, shimmer text, centered layout
 *
 * CASE STUDIES:
 *   gradient-border articles, glass metric sidebar with checkmark results list.
 *   Tags as mono badges. Challenge/Solution/Results structure.
 *   Real projects: Ageless Living (6 integrated systems), Harrison Forbes (0 lost leads).
 *
 * ABOUT:
 *   Team cards with initials avatar, company/location metadata.
 *   Stacked vertical layout (not grid). Bio + personal note.
 *   3 team members: Jasraj (Engineer), James (ML), Meharban (Business).
 *
 * BOOK AUDIT:
 *   Glass form container, atmosphere bg with floating orbs.
 *   Icon-prefixed inputs (User, Mail, MessageSquare).
 *   Form submits via mailto: link.
 *
 * ============================================================================
 * TO REPRODUCE THIS SITE
 * ============================================================================
 *
 * 1. Vite + React + TypeScript project
 * 2. Install: tailwindcss, shadcn/ui, lucide-react, react-router-dom,
 *    @tanstack/react-query, class-variance-authority, clsx, tailwind-merge
 * 3. Set up index.css with dark purple HSL CSS variables and utility classes
 * 4. Configure tailwind.config.ts with Playfair Display, Outfit, Space Mono
 * 5. Import Google Fonts: Playfair Display, Space Mono, Outfit
 * 6. Create CustomCursor (dot + ring with rAF lerp, hidden on touch)
 * 7. Create ParticleField (canvas, 60 particles, connection lines at <150px)
 * 8. Create ScrollReveal (IntersectionObserver, blur + slide + fade)
 * 9. Set up glass Navbar with line-draw links and mono Footer
 * 10. Build section components: atmosphere backgrounds, grain overlays, gradient orbs
 * 11. Use editorial Playfair for all headlines, tight line-height (0.95-1.1)
 * 12. All interactive elements: active:scale, hover:translate, line-draw
 *
 * ============================================================================
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Code2, Palette, Type, Layers, Box } from "lucide-react";

const UICodeKit = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    <Navbar />

    {/* Header */}
    <section className="pt-32 pb-16 px-6 relative atmosphere grain">
      <div className="absolute top-[20%] right-[8%] w-44 h-44 rounded-full bg-primary/[0.08] blur-3xl float" />
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Developer Reference
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">
            UI Code Kit
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            A living reference of every component, color token, typography style, and animation used across the Neural Solutions site. See the source comments for full architecture docs.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Color Palette */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Palette size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Color Tokens</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "background", css: "265 25% 6%", tw: "bg-background" },
            { name: "foreground", css: "45 20% 90%", tw: "bg-foreground" },
            { name: "primary", css: "270 80% 65%", tw: "bg-primary" },
            { name: "accent", css: "280 90% 70%", tw: "bg-accent" },
            { name: "secondary", css: "265 25% 14%", tw: "bg-secondary" },
            { name: "muted", css: "265 15% 16%", tw: "bg-muted" },
            { name: "card", css: "265 20% 10%", tw: "bg-card" },
            { name: "border", css: "265 15% 16%", tw: "bg-border" },
          ].map((c) => (
            <ScrollReveal key={c.name} delay={0}>
              <div className="glass rounded-lg p-4">
                <div className={`w-full h-12 rounded ${c.tw} mb-3 border border-border/30`} />
                <div>
                  <p className="font-mono text-xs text-foreground">--{c.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{c.css}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Typography */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Type size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Typography</h2>
          </div>
        </ScrollReveal>
        <div className="glass rounded-xl p-8 space-y-8">
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">font-display (Playfair Display) — Headlines</span>
            <h3 className="font-display text-4xl font-bold text-foreground">Heading 1 — 4xl bold</h3>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">font-display — H2</span>
            <h3 className="font-display text-3xl font-bold text-foreground">Heading 2 — 3xl bold</h3>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">font-display — H3</span>
            <h3 className="font-display text-xl font-semibold text-foreground">Heading 3 — xl semibold</h3>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">font-sans (Outfit) — Body</span>
            <p className="font-sans text-foreground/80 font-light leading-relaxed">Body text in Outfit. Used for paragraphs, descriptions, and general content.</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">font-mono (Space Mono) — Labels & metadata</span>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Mono text for tags, labels, and technical content.</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">.shimmer — Animated gradient text</span>
            <span className="font-display text-3xl font-bold shimmer">Shimmer Effect</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-2">.text-gradient — Static gradient text</span>
            <span className="font-display text-3xl font-bold text-gradient">Gradient Text</span>
          </div>
        </div>
      </div>
    </section>

    {/* Buttons */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Box size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Buttons</h2>
          </div>
        </ScrollReveal>
        <div className="glass rounded-xl p-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="hero"</span>
              <Button variant="hero" className="cursor-none">Book a Free Audit</Button>
            </div>
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="hero-outline"</span>
              <Button variant="hero-outline" className="cursor-none">View Our Work</Button>
            </div>
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="default"</span>
              <Button className="cursor-none">Default</Button>
            </div>
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="secondary"</span>
              <Button variant="secondary" className="cursor-none">Secondary</Button>
            </div>
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="ghost"</span>
              <Button variant="ghost" className="cursor-none">Ghost</Button>
            </div>
            <div className="space-y-1 text-center">
              <span className="font-mono text-[10px] text-muted-foreground block">variant="outline"</span>
              <Button variant="outline" className="cursor-none">Outline</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Utility Classes */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Layers size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Utility Classes</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          <div className="glass rounded-xl p-6">
            <span className="font-mono text-xs text-primary block mb-2">.glass</span>
            <p className="text-sm text-muted-foreground font-light">Glassmorphism: dark translucent bg + backdrop-blur + subtle purple border.</p>
          </div>
          <div className="gradient-border p-6">
            <span className="font-mono text-xs text-primary block mb-2">.gradient-border</span>
            <p className="text-sm text-muted-foreground font-light">Gradient border using mask-composite for elegant card edges.</p>
          </div>
          <div className="glass rounded-xl p-6">
            <span className="font-mono text-xs text-primary block mb-2">.atmosphere + .grain</span>
            <p className="text-sm text-muted-foreground font-light">Layered radial gradients with grain texture overlay.</p>
          </div>
          <div className="gradient-border perspective-card p-6">
            <span className="font-mono text-xs text-primary block mb-2">.perspective-card</span>
            <p className="text-sm text-muted-foreground font-light">Hover to see 3D perspective tilt effect on this card.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Form Inputs */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Code2 size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Form Inputs</h2>
          </div>
        </ScrollReveal>
        <div className="glass rounded-xl p-8 space-y-4 max-w-md">
          <Input placeholder="Text input" className="bg-background/50 border-border/30 font-sans cursor-none" />
          <Textarea placeholder="Textarea input" rows={3} className="bg-background/50 border-border/30 font-sans cursor-none resize-none" />
        </div>
      </div>
    </section>

    {/* Components */}
    <section className="pb-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Components</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass border-border/30">
            <CardHeader>
              <CardTitle className="font-display">Card Component</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-light">
                shadcn/ui Card with glass styling. Used for content grouping throughout the site.
              </p>
            </CardContent>
          </Card>
          <div className="glass rounded-xl p-6 space-y-3">
            <span className="text-xs text-muted-foreground font-mono block">Badges</span>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-primary/10 text-primary font-mono text-xs">AI Integration</Badge>
              <Badge className="bg-secondary text-secondary-foreground font-mono text-xs">Automation</Badge>
              <Badge className="bg-accent/10 text-accent font-mono text-xs">Web Dev</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Animations */}
    <section className="pb-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Animations & Effects</h2>
          </div>
        </ScrollReveal>
        <div className="glass rounded-xl p-8 space-y-8">
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-3">Floating orbs (.float / .float-delayed / .animate-drift)</span>
            <div className="relative h-24 rounded-lg bg-background/30 overflow-hidden">
              <div className="absolute top-2 left-[20%] w-12 h-12 rounded-full bg-primary/20 blur-xl float" />
              <div className="absolute top-4 right-[30%] w-16 h-16 rounded-full bg-accent/15 blur-xl float-delayed" />
              <div className="absolute bottom-2 left-[50%] w-10 h-10 rounded-full bg-primary/15 blur-xl animate-drift" />
            </div>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-3">Custom cursor (dot + ring)</span>
            <p className="text-sm text-foreground/70 font-light">Move your mouse to see the custom cursor — a small purple dot with a trailing ring that follows with lerp interpolation.</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-3">Particle field (canvas)</span>
            <p className="text-sm text-foreground/70 font-light">The background particle system is rendered on a fixed canvas at z-0 with 60 particles and dynamic connection lines drawn between particles within 150px.</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono block mb-3">ScrollReveal</span>
            <p className="text-sm text-foreground/70 font-light">IntersectionObserver-based wrapper. Applies opacity(0→1), translateY(24px→0), and blur(4px→0) with configurable delay. Easing: cubic-bezier(0.16, 1, 0.3, 1). Duration: 700ms. Fires once.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default UICodeKit;
