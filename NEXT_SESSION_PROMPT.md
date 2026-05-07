# Prompt for Next Session

## Quick Context
You are continuing a one-page scroll design migration for Neural Solutions website. The project is **60% complete**. Core landing page and design system are done. Need to finish redesigning existing pages.

## Read These First
1. **HANDOVER.md** - Comprehensive session handover with all details
2. **IMPLEMENTATION_PLAN.md** - Full implementation plan
3. **CLAUDE.md** - Project development guidelines

## What's Been Completed ✅
- ✅ Design system migrated (purple → black/white/gray, Inter font)
- ✅ New LandingPage component created with 9 sections
- ✅ ParticleField updated to white/gray
- ✅ Routing updated (Services page removed)
- ✅ CalendarEmbed updated with black branding
- ✅ Navbar updated (removed Services link, Inter font)
- ✅ Build passing

## What Needs to Be Done ⏸️

### Immediate Tasks (High Priority)
1. **Update Footer component** (`src/components/Footer.tsx`)
   - Remove `/services` link
   - Change all fonts to Inter (`font-sans`)
   - Update colors to black/white/gray theme

2. **Redesign CaseStudies page** (`src/pages/CaseStudies.tsx`)
   - Replace Playfair/Outfit fonts with Inter
   - Update purple colors to black/gray
   - Update cards to `rounded-[1.25rem]`
   - Remove purple floating orbs/decorative elements

3. **Redesign About page** (`src/pages/About.tsx`)
   - Update all typography to Inter
   - Update team cards styling (black/white theme)
   - Remove purple accents

4. **Redesign BookAudit page** (`src/pages/BookAudit.tsx`)
   - Update form and tabs styling to black/white
   - Remove purple accents
   - CalendarEmbed already has black branding (no change needed)

5. **Update CityLanding template** (`src/pages/CityLanding.tsx`)
   - Update visual styling only (Inter font, black/white colors)
   - **CRITICAL:** Preserve ALL SEO metadata (DO NOT TOUCH: LocalBusiness schema, meta tags, coordinates)

### Testing & Documentation (After Pages Done)
6. Run city SEO tests: `npm run validate:city-seo` and `npm run test:city-seo`
7. Update `spec.md` documentation (color palette, typography, routes)
8. Update `CLAUDE.md` guidelines (design standards, styling rules)

## Design Patterns to Use

### Typography
- All text uses Inter: `font-sans`
- Headings: `font-sans text-5xl md:text-6xl font-medium tracking-tight`
- Body: `font-sans text-base leading-relaxed`
- Labels: `font-sans text-xs uppercase tracking-wider`

### Colors
- Black: `text-foreground` `bg-foreground` `#050505`
- White: `bg-background` `text-background` `#FFFFFF`
- Gray: `text-muted-foreground` `bg-secondary` `border-border`
- NO PURPLE anywhere

### Cards/Borders
- Border radius: `rounded-[1.25rem]` (not `rounded-xl`)
- Borders: `border-border`
- Shadows: Gray, not purple

## Critical Reminders

1. **DO NOT modify SEO metadata** on CityLanding.tsx - only update visual styling
2. **Test build** after each page redesign: `npm run build`
3. **Remove ALL purple references** - search for `262`, `275`, `purple`, `primary` (if it's purple)
4. **Use Inter font exclusively** - no Playfair, Outfit, or Space Mono
5. **Border radius** is `1.25rem` for cards - use `rounded-[1.25rem]`

## Verification Checklist

After completing all tasks, verify:
- [ ] No purple colors anywhere (search for `262`, `275`, `hsl.*262`)
- [ ] All fonts are Inter (`font-sans` or `font-family: Inter`)
- [ ] All cards use `rounded-[1.25rem]`
- [ ] Build passes: `npm run build`
- [ ] City SEO tests pass: `npm run test:city-seo`
- [ ] No TypeScript errors
- [ ] Mobile responsive (test at 375px, 768px, 1280px)

## Estimated Time
- ~1.5 hours to complete all remaining tasks
- Start with Footer (quick), then pages, then testing, then docs

## Reference
- Landing page styling: `src/pages/LandingPage.tsx` (use as template)
- Current build: Passing ✅
- Progress: 60% complete (6/10 criteria met)

---

**Start Command:**
```bash
cd /c/Users/ejsaant/Neural/Neural_solutions
npm run dev  # Start dev server, then begin with Footer.tsx
```

Good luck! The foundation is solid - just finish the page redesigns and you're done. 🚀
