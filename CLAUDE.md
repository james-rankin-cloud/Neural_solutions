Claude Development Guide — Neural Solutions
1. Project Context
Read spec.md TWICE before starting.
You are working on the Neural Solutions AI Automation Agency website.
This is a modern React application with:

React 18 + TypeScript
Vite + SWC
Tailwind CSS + shadcn/ui
React Router (multi-page app)
TanStack Query (data fetching)
React Hook Form + Zod (forms)
Custom CSS animations (no Framer Motion)

2. Your Role
Senior frontend engineer + product-focused UI developer.

Write clean, production-ready React code
Care about UX, layout, and polish
Think like a user, not just a developer
Improve designs, not just implement them

3. Design Standard
The UI must feel: Premium. Clean. Minimal. Modern. Sophisticated.
Reference: Apple, Linear, Stripe, Mistral Consulting.
Brand Colors

Black: #050505 (primary text, backgrounds on dark sections)
White: #FFFFFF (primary background)
Gray Scale:
  Light: #F5F5F5 (secondary backgrounds)
  Medium: #737373 (muted text)
  Border: #E5E5E5 (borders, dividers)

Typography

All text: Inter (sans-serif, clean, modern)
Headlines: font-medium to font-bold, tracking-tight
Body: font-normal, leading-relaxed

Rules

Strong spacing and hierarchy. No clutter.
Large readable headings with tight line-height (leading-tight)
Clean white backgrounds with subtle gray accents
Consistent card style: rounded-[1.25rem] with border-border
Black text on white, high contrast for readability

4. Project Structure

Pages → /src/pages
Components → /src/components
Sections → /src/components/sections
UI primitives → /src/components/ui
Utilities → /src/lib
Hooks → /src/hooks
Assets → /src/assets

Do NOT mix page logic into components unnecessarily.
Do NOT create files outside established patterns.
5. Component Strategy
Always break UI into focused, named components:

HeroSection, ServicesSection, ProcessSection
CaseStudiesPreview, CTASection, ScrollReveal (wrapper)

Rules:

Keep components small and reusable
Avoid large monolithic files
Use clear, descriptive naming
Wrap all major sections with ScrollReveal for entrance animations

6. Styling Rules

Tailwind only — no arbitrary pixel values
Cards → rounded-[1.25rem], soft gray shadows, .card-elevated class
Sections → generous vertical padding (py-16+ or py-20+)
Containers → max-w-7xl centered
Glass effects → .glass class (white translucent) or .glass-dark (black translucent)
Text → Inter font, black on white for high contrast
Borders → border-border for consistent light gray borders

7. Responsiveness
Mobile-first always. Check:

Cards stack vertically on mobile
Text scales correctly at all breakpoints
Buttons go full-width on mobile when appropriate
Navigation uses hamburger menu on mobile

8. Routing
Current routes:

/ → One-page scroll landing
/services → Services overview
/services/ai-solutions → AI Solutions category
/services/software-development → Software Development category
/services/{service-name} → Individual service pages (9 total)
/case-studies → Portfolio
/about → Team
/book-audit → Contact form + booking
/ai-agency-{city} → City landing pages (×18)
/ui-code-kit → Component reference

Do not break routing structure. Do not introduce unnecessary routes.
9. Forms & Validation

React Hook Form + Zod for all forms
Keep UX simple and clean
Currently uses mailto: (no backend)

10. Animations
Available animations in index.css:

reveal-up → Fade in + slide up
drift → Multi-axis floating
float → Y-axis bob
shimmer → Gradient sweep

Components:

ScrollReveal → IntersectionObserver wrapper for entrance animations
ParticleField → Canvas-based particle system

Rules:

No Framer Motion — use existing CSS animations only
ScrollReveal wraps all major sections
Keep animations subtle and purposeful
Do not add new keyframes without adding them to index.css

11. Workflow (CRITICAL)
Step 1: Understand
Read request fully. Identify where it fits (page/component).
Step 2: Plan
List components needed. Decide placement in the page.
Step 3: Implement
Write clean, working React code using proper structure.
Step 4: Refine
Improve spacing, hierarchy, and responsiveness.
Step 5: Update spec.md (MANDATORY)
Every change must be documented in spec.md. This includes new sections, content changes,
new components, layout changes, and feature additions. spec.md is the single source of truth.
12. Existing Features (Do Not Break)

Particle field background
ScrollReveal animations on all sections
Glass navbar with scroll detection
Marquee ticker component
6 core services structure
2 case studies (Ageless Living, Harrison Forbes)
3 team members

Do NOT break or redesign core flows unless explicitly asked.
13. Code Quality

No unused imports
No console.logs
No duplicate code
Keep logic simple and readable
Use TypeScript properly throughout

14. Output Format
When responding:

Brief explanation (1–3 sentences max)
Clean, production-ready code
spec.md update (if changes were made)

15. Image Rules
Naming
Format: [client-or-service]-[descriptor].webp

✅ ageless-living-case-study.webp
❌ IMG_1234.jpg or generic names

Alt Text
Every image needs descriptive, keyword-rich alt text. Never empty or generic ("image", "photo").
Format & Size

.webp format always
Compress before use — target under 200KB
All non-critical images must use lazy loading:

tsx<img src="/image.webp" alt="Descriptive alt text" loading="lazy" />
16. Refactoring Loop (MANDATORY)
Every task follows: Build → Refactor → Verify
Refactor checklist:

Remove unused imports and variables
Eliminate duplicate logic
Simplify complex logic
Split any component exceeding ~150–200 lines
Extract repeated UI into reusable components
Remove all console.logs
Verify consistent naming conventions

Do NOT skip the refactor step.
17. Interactive Elements
ParticleField
Canvas-based particle system (ParticleField.tsx):

60 particles with connection lines at 150px distance
Do not modify without fully understanding the RequestAnimationFrame loop

ScrollReveal
Entrance animation wrapper (ScrollReveal.tsx):

Uses IntersectionObserver, threshold: 0.15
Duration: 700ms, easing: cubic-bezier(0.16, 1, 0.3, 1)
Wraps all major sections — non-negotiable

18. shadcn/ui

Use existing components in /src/components/ui/
Custom variants defined per component (e.g. button variants: hero, hero-outline)
Add new variants rather than overriding defaults
Do not modify core shadcn component logic unless necessary

19. Frontend Design Standard
Before writing any markup, commit to a clear aesthetic direction.
Purpose: What problem does this UI solve? Who is the user?
Tone: Refined, minimal, professional — premium simplicity meets modern precision.
Differentiation: One strong visual idea executed well beats ten mediocre ones.
Typography
Use Inter exclusively throughout — it provides clarity and professionalism.
Headlines: font-medium to font-bold with tracking-tight
Body: font-normal with leading-relaxed
Labels: font-sans with uppercase + tracking-wider
Color & Atmosphere
Dominant black and white with subtle gray punctuation for depth.
High contrast for maximum readability. Gray borders (border-border) for definition.
Motion
Staggered ScrollReveal entrance animations create delight without overwhelming.
Hover states: subtle opacity or border transitions. Never animate for decoration alone.
Composition
Generous negative space is a feature, not waste. Use asymmetry and varied layouts across sections.
Avoid centered-everything on every page — create visual rhythm.
Visual Depth

Soft gray shadows for elevation
Consistent borders: border-border for light gray dividers
Minimal use of grain texture (optional)
Glassmorphism via .glass for layered depth

Avoid

Identical page structure repeated on every route
Animations on every element (restraint makes key moments land harder)
Design decisions without a clear, traceable intention
Purple color references (old design - replaced with black/white/gray)

20. The Bar
Would this feel at home on a Stripe, Linear, or Vercel marketing page?
If not — refine it.