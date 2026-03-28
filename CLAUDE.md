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
Reference: Apple, Stripe, high-end tech agencies.
Brand Colors

Primary: Deep purple (HSL 262 70% 50%)
Accent: Bright violet (HSL 275 80% 55%)
Background: Near-white (HSL 0 0% 98%)
Text: Near-black (HSL 240 10% 10%)

Typography

Headlines: Playfair Display (serif, editorial)
Body: Outfit (sans-serif, clean)
Labels/Meta: Space Mono (monospace, technical)

Rules

Strong spacing and hierarchy. No clutter.
Large readable headings with tight line-height
Subtle purple gradients on white backgrounds
Glassmorphism effects where appropriate
Consistent button and card styles throughout

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
Cards → rounded-xl, soft shadows, .card-elevated class
Sections → generous vertical padding (py-16+)
Containers → max-w-6xl or max-w-7xl centered
Glass effects → .glass class
Gradients → .atmosphere or .atmosphere-dense classes
Text gradients → .text-gradient class

7. Responsiveness
Mobile-first always. Check:

Cards stack vertically on mobile
Text scales correctly at all breakpoints
Buttons go full-width on mobile when appropriate
Navigation uses hamburger menu on mobile

8. Routing
Current routes:

/ → Landing page
/services → Services detail
/case-studies → Portfolio
/about → Team
/book-audit → Contact form
/ui-code-kit → Developer reference

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
Tone: Refined, minimal, authoritative — editorial luxury meets technical precision.
Differentiation: One strong visual idea executed well beats ten mediocre ones.
Typography
Use all three fonts with intention — don't default to one for everything.
Space Mono for labels: uppercase + tracking-widest. Playfair Display at large scale with leading-tight.
Color & Atmosphere
Dominant neutrals with sharp purple punctuation. Use .atmosphere classes for depth.
Avoid purple gradient on white as the only visual idea — it's a tool, not the entire palette.
Motion
Staggered load reveals create more delight than scattered micro-interactions.
Hover states: subtle scale, opacity, or border transitions. Never animate for decoration alone.
Composition
Generous negative space is a feature, not waste. Use asymmetry and varied layouts across sections.
Avoid centered-everything on every page — create visual rhythm.
Visual Depth

Tinted shadows: shadow-purple-500/10
Thin borders: border-white/10 on dark, border-purple-200/40 on light
Low-opacity grain or noise texture on hero sections
Layered transparencies via .glass

Avoid

Identical page structure repeated on every route
Animations on every element (restraint makes key moments land harder)
Design decisions without a clear, traceable intention

20. The Bar
Would this feel at home on a Stripe, Linear, or Vercel marketing page?
If not — refine it.