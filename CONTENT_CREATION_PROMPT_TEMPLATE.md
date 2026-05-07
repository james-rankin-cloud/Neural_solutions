# Content Creation Prompt Template — Neural Solutions SEO Guides

Use this prompt template to create high-quality, SEO-optimized content pages for the Neural Solutions website. Customize the bracketed sections for each new page.

---

## Prompt Template

```
You are an expert SEO content writer creating a comprehensive guide for Neural Solutions,
a Victoria, BC-based AI automation agency serving Canadian businesses.

## Content Requirements

### Topic & Target Keywords
**Primary Topic**: [TOPIC - e.g., "What is AI Automation"]
**Primary Keywords** (include naturally throughout):
- [KEYWORD 1 - e.g., "what is AI automation"] ([MONTHLY SEARCHES - e.g., 2,900])
- [KEYWORD 2 - e.g., "AI automation explained"] ([MONTHLY SEARCHES])
- [KEYWORD 3 - e.g., "how does AI automation work"] ([MONTHLY SEARCHES])
- [KEYWORD 4 - e.g., "AI for business"] ([MONTHLY SEARCHES])
- [KEYWORD 5 - e.g., "business automation guide"] ([MONTHLY SEARCHES])

**SEO Goals**:
- Featured snippet target (answer main question in first 50 words)
- Rank in top 10 for all primary keywords within 6 months
- Drive 800-1,000 monthly organic visitors

### Content Specifications
**Format**: Markdown with frontmatter
**Word Count**: [TARGET - e.g., 2,500-3,000 words]
**Reading Level**: Grade 8-10 (Hemingway Editor score)
**Tone**: Professional but approachable, educational, data-driven
**Audience**: [TARGET AUDIENCE - e.g., Canadian small-to-medium business owners with
limited technical knowledge]

---

## Frontmatter Structure

Start the markdown file with this frontmatter (customize values):

```yaml
---
title: "[SEO-OPTIMIZED TITLE - Include primary keyword, under 60 chars]"
description: "[COMPELLING META DESCRIPTION - Include primary keyword + CTA, under 160 chars]"
keywords: "[COMMA-SEPARATED LIST OF ALL TARGET KEYWORDS]"
canonical: "https://www.neuralsolutions.cloud/[URL PATH]"
author: "Neural Solutions Team"
date: "[YYYY-MM-DD]"
lastModified: "[YYYY-MM-DD]"
category: "[Guides | Industries | Blog]"
readTime: "[X] min read"
featured: [true | false]
---
```

---

## Content Structure

### 1. Opening (First 150 Words)

**First 50 words MUST**:
- Answer the primary question directly (featured snippet target)
- Include the primary keyword
- Be scannable (short sentences, clear definition)

**Example**:
> **AI automation** is the use of artificial intelligence to perform tasks that
> traditionally require human intelligence — from answering customer emails to
> analyzing data patterns to scheduling appointments. Unlike traditional automation
> (which follows rigid, pre-programmed rules), AI automation can learn, adapt, and
> handle complex scenarios without constant human intervention.

**Next 100 words**:
- Explain why this matters to the reader (benefits, pain points solved)
- Preview what they'll learn in the guide
- Establish credibility (mention Neural Solutions' experience with Canadian businesses)

---

### 2. Table of Contents

Include a clickable table of contents with anchor links for guides over 1,500 words:

```markdown
## Table of Contents

1. [Section 1](#section-1-slug)
2. [Section 2](#section-2-slug)
3. [Section 3](#section-3-slug)
...
```

---

### 3. Main Content Sections

**Section Guidelines**:
- **Headings**: Use H2 for main sections, H3 for subsections
- **Keywords**: Include secondary keywords in H2/H3 headings naturally
- **Paragraph Length**: 2-4 sentences max per paragraph
- **Visual Breaks**: Every 300 words, include:
  - Bullet points or numbered lists
  - Tables or comparison charts
  - Examples or case studies
  - Pull quotes or callout boxes
- **Examples**: Use real examples from Neural Solutions' case studies whenever possible

**Required Sections** (customize based on topic):

#### Definition/Explanation Section
- Clear, simple explanation of the concept
- Use analogies for complex topics
- Include a concrete example

#### How It Works Section
- Step-by-step breakdown
- Visual descriptions (describe diagrams or flowcharts)
- Real-world application

#### Benefits Section
- 5-7 key benefits for Canadian businesses
- Include specific metrics (time saved, cost reduction, ROI)
- Use case studies from Ageless Living, Harrison Forbes, or hypothetical examples

#### Comparison Section (if applicable)
- Compare to alternatives (e.g., "AI vs. Traditional Automation")
- Use a comparison table
- Highlight when to use each option

#### Use Cases/Examples Section
- Industry-specific examples
- Department-specific applications (Sales, Marketing, Operations, etc.)
- Link to relevant case studies or industry pages

#### Self-Assessment/Checklist
- Interactive element (quiz, checklist, or self-assessment)
- Helps reader determine if this is right for them
- Builds engagement and time on page

#### How to Get Started Section
- 3-5 actionable steps
- Clear next actions
- Include CTA to book audit or contact

#### FAQ Section
- 8-12 common questions
- Each answer 100-200 words
- Target long-tail question keywords
- Use FAQ schema markup structure

---

### 4. Internal Linking Strategy

**Link to these Neural Solutions pages** (include 5-8 internal links):

**Primary Pages** (link to at least 2):
- Homepage: https://www.neuralsolutions.cloud/
- Services: https://www.neuralsolutions.cloud/services
- About: https://www.neuralsolutions.cloud/about
- Book Audit: https://www.neuralsolutions.cloud/book-audit

**Case Studies** (link to both if relevant):
- Ageless Living: https://www.neuralsolutions.cloud/case-studies (mention: health & wellness, 6 integrated systems, 15+ hours/week saved)
- Harrison Forbes: https://www.neuralsolutions.cloud/case-studies (mention: electrical contractor, 0 missed leads, automated reviews)

**Related Content** (link to related guides/industry pages):
- Other guides in /resources/*
- Industry pages in /industries/*
- FAQ page: /faq
- Pricing guide: /resources/ai-automation-pricing

**Internal Link Format**:
```markdown
[Anchor text with keyword] → [URL]

Example:
[Read our full pricing guide →](https://www.neuralsolutions.cloud/resources/ai-automation-pricing)
```

---

### 5. Calls-to-Action (CTAs)

**Include CTAs** in:
- Middle of content (after benefits section)
- End of content (strong final CTA)
- FAQ section (subtle CTA in answer)

**CTA Examples**:
```markdown
**Primary CTA** (Book Audit):
> Ready to automate your business? Book a free audit to discover which tasks
> you can automate for maximum ROI.
>
> [Book your free audit →](https://www.neuralsolutions.cloud/book-audit)

**Secondary CTA** (Learn More):
> Learn how we've helped businesses like yours:
> - [Ageless Living Case Study →](https://www.neuralsolutions.cloud/case-studies)
> - [Harrison Forbes Case Study →](https://www.neuralsolutions.cloud/case-studies)

**Soft CTA** (Related Content):
> **Related Resources**:
> - [How Much Does AI Automation Cost? →](https://www.neuralsolutions.cloud/resources/ai-automation-pricing)
> - [AI Automation FAQ →](https://www.neuralsolutions.cloud/faq)
```

---

### 6. Closing Section

**Include**:
- Brief company bio (2-3 sentences about Neural Solutions)
- Location mention (Victoria, BC / British Columbia / Canada)
- Team credentials (Ericsson, UVic, Baker Tilly)
- Results summary (case study highlights)
- Links to About, Case Studies, Services

**Example**:
```markdown
## About Neural Solutions

We're a Victoria, BC-based AI automation agency helping Canadian businesses
automate repetitive work and scale efficiently. Our team combines software
engineering expertise (Ericsson, UVic) with business acumen (Baker Tilly)
to deliver practical, ROI-focused automation solutions.

**Real results**:
- 6 integrated systems for Ageless Living™ (health & wellness)
- Zero missed leads for Harrison Forbes Electrical (construction)
- 50+ businesses automated across British Columbia and Canada

[Learn more about us →](https://www.neuralsolutions.cloud/about) |
[View case studies →](https://www.neuralsolutions.cloud/case-studies)
```

---

### 7. Related Resources Footer

**Always include** at the end:

```markdown
---

**Related Resources**:
- [Related Guide 1 →](URL)
- [Related Guide 2 →](URL)
- [Related Industry Page →](URL)
- [Book Your Free Audit →](https://www.neuralsolutions.cloud/book-audit)

---

*Last updated: [DATE]*
```

---

## Writing Style Guidelines

### Voice & Tone
- **Professional but conversational**: Write like you're explaining to a smart friend
- **Avoid jargon**: Explain technical terms simply
- **Use "you" and "your"**: Direct address, not third-person
- **Be specific**: Use numbers, metrics, and concrete examples
- **Canadian spelling**: "colour", "labour", "optimise" (not "optimize")

### Sentence Structure
- **Short sentences**: Aim for 15-20 words per sentence
- **Vary length**: Mix short punchy sentences with longer explanatory ones
- **Active voice**: "AI automates tasks" (not "Tasks are automated by AI")
- **One idea per sentence**: Don't cram multiple concepts

### Paragraph Structure
- **Topic sentence**: Start each paragraph with the main point
- **Support**: 1-3 sentences with evidence, examples, or explanation
- **Transition**: Connect to next paragraph when possible
- **Length**: 2-4 sentences maximum (never 6+ sentence blocks)

### Readability Techniques
- **Use bullet points** for lists of 3+ items
- **Use numbered lists** for sequential steps or ranked items
- **Bold key concepts** but don't overuse (3-5 per section max)
- **Use subheadings** every 200-300 words
- **Add white space**: Line breaks between paragraphs

---

## SEO Optimization Checklist

### On-Page SEO

- [ ] **Title tag**: Primary keyword in title, under 60 characters
- [ ] **Meta description**: Compelling, includes CTA, under 160 characters
- [ ] **URL slug**: Clean, includes primary keyword (e.g., `/resources/what-is-ai-automation`)
- [ ] **H1**: Exactly one H1, includes primary keyword
- [ ] **H2/H3**: Secondary keywords in subheadings
- [ ] **First 100 words**: Primary keyword appears naturally
- [ ] **Keyword density**: 1-2% for primary keyword (natural, not stuffed)
- [ ] **LSI keywords**: Related terms and synonyms throughout
- [ ] **Image alt text**: Descriptive, includes keywords where natural
- [ ] **Internal links**: 5-8 links to relevant Neural Solutions pages
- [ ] **External links**: 2-3 links to authoritative sources (cite statistics)

### Content Quality

- [ ] **Word count**: Meets or exceeds target (2,500+ for guides)
- [ ] **Readability**: Hemingway score 8-10 (grade 8-10 reading level)
- [ ] **Originality**: 100% original content (no plagiarism)
- [ ] **Accuracy**: All statistics and claims sourced
- [ ] **Completeness**: Answers all related questions user might have
- [ ] **Freshness**: Current examples, recent data (2025-2026)

### Engagement

- [ ] **Hook**: First paragraph grabs attention and answers main question
- [ ] **Value**: Reader learns something actionable
- [ ] **Scannability**: Easy to skim (headings, bullets, bold text)
- [ ] **Visuals**: Described diagrams, tables, or charts (implement later)
- [ ] **CTA**: Clear next step at end

---

## Example Prompt (Filled In)

Here's a complete example for the "What is AI Automation" guide:

```
You are an expert SEO content writer creating a comprehensive guide for Neural Solutions,
a Victoria, BC-based AI automation agency serving Canadian businesses.

## Content Requirements

### Topic & Target Keywords
**Primary Topic**: What is AI Automation
**Primary Keywords**:
- what is AI automation (2,900 monthly searches)
- AI automation explained (1,200 monthly searches)
- how does AI automation work (890 monthly searches)
- AI for business (2,400 monthly searches)
- business automation guide (720 monthly searches)

**SEO Goals**:
- Featured snippet target (answer main question in first 50 words)
- Rank in top 10 for all 5 keywords within 6 months
- Drive 800-1,000 monthly organic visitors

### Content Specifications
**Format**: Markdown with frontmatter
**Word Count**: 2,500-3,000 words
**Reading Level**: Grade 8-10 (Hemingway Editor score)
**Tone**: Professional but approachable, educational, data-driven
**Audience**: Canadian small-to-medium business owners (non-technical)

---

## Required Sections

1. **Definition** (200 words)
   - What is AI automation in simple terms?
   - How is it different from traditional automation?
   - Include concrete example

2. **How It Works** (400 words)
   - 3-stage process: Input → Processing → Action
   - Describe each stage with examples
   - Explain the feedback loop (AI improvement over time)

3. **AI vs. Traditional Automation** (300 words)
   - Comparison table
   - When to use each
   - Real-world examples

4. **Benefits for Canadian Businesses** (500 words)
   - 6 key benefits with metrics
   - Include ROI examples
   - Reference Ageless Living & Harrison Forbes case studies

5. **Real-World Examples** (400 words)
   - Healthcare/wellness example (Ageless Living)
   - Construction/trades example (Harrison Forbes)
   - Professional services example (hypothetical)

6. **Use Cases by Department** (600 words)
   - Sales, Customer Service, Marketing, Operations, HR
   - 3-5 use cases per department
   - Time savings estimates

7. **Industries Using AI Automation** (300 words)
   - List 6-8 industries
   - Brief description + link to industry page
   - Emphasize Canadian market

8. **Self-Assessment Checklist** (200 words)
   - 10-12 yes/no questions
   - Scoring guide (0-2 = not ready, 3-5 = good fit, 6+ = critical)

9. **How to Get Started** (400 words)
   - 5 actionable steps
   - Include CTA to book audit

10. **FAQ** (800 words)
    - 12 questions targeting long-tail keywords
    - 100-150 words per answer
    - Questions: cost, timeline, technical knowledge, security, ROI, etc.

---

## Internal Links to Include

- Homepage (in intro)
- Services page (in benefits section)
- Ageless Living case study (in examples section)
- Harrison Forbes case study (in examples section)
- Healthcare industry page (in industries section)
- Construction industry page (in industries section)
- Pricing guide (in FAQ)
- Book Audit page (CTAs in middle and end)

---

## Key Metrics & Data Points to Include

**Neural Solutions Results**:
- Ageless Living: 6 integrated systems, 15+ hours/week saved
- Harrison Forbes: 0 missed leads, automated reviews, 10+ hours/week saved

**Industry Statistics** (find authoritative sources):
- % of businesses using AI automation
- Average time savings from automation
- ROI statistics
- Growth projections for AI market

**Canadian Market Focus**:
- Mention British Columbia, Victoria, Vancouver
- Reference Canadian business challenges
- Use Canadian spelling throughout

---

## Tone Examples

**Good** (Professional but approachable):
> AI automation isn't just for enterprise companies — Canadian small businesses
> are using it to compete, scale, and thrive. Whether you're losing leads to
> slow response times or drowning in manual admin, AI automation can help.

**Bad** (Too formal/jargony):
> AI automation represents a paradigm shift in organizational efficiency,
> leveraging machine learning algorithms to optimize operational workflows
> and enhance enterprise productivity metrics.

**Good** (Specific and actionable):
> A Victoria-based wellness clinic saved 15 hours per week by automating
> appointment reminders, voicemail transcription, and FAQ responses.

**Bad** (Vague):
> Many businesses have seen significant improvements after implementing
> AI automation solutions.

---

Now write the complete guide following all these requirements.
```

---

## Quick Reference: Content Formula

For any SEO guide, follow this formula:

1. **Hook** (50 words): Answer the main question immediately
2. **Preview** (100 words): What reader will learn + why it matters
3. **TOC** (if 1,500+ words): Clickable outline
4. **Body** (2,000-2,500 words):
   - Definition/explanation
   - How it works
   - Benefits with metrics
   - Real examples (case studies)
   - Use cases or applications
   - Self-assessment
   - How to get started
5. **FAQ** (800 words): 8-12 questions
6. **CTA** (100 words): Book audit + related resources
7. **Footer** (100 words): About company + links

**Total**: 3,000-4,000 words for comprehensive guides

---

## Adaptation for Different Content Types

### Industry Pages (1,500-2,000 words)

**Structure**:
1. Industry overview (100 words)
2. Pain points (200 words)
3. AI use cases for this industry (600 words)
4. ROI examples (300 words)
5. Case study highlight (200 words)
6. FAQ (5-8 questions, 400 words)
7. CTA (100 words)

**Keywords**: "AI for [industry]", "[industry] automation", "[industry] use cases"

---

### Pricing Guides (2,000-2,500 words)

**Structure**:
1. TL;DR pricing summary (100 words)
2. Factors affecting cost (400 words)
3. Price ranges by project type (500 words)
4. Pricing models explained (400 words)
5. ROI calculation (300 words)
6. Hidden costs to avoid (200 words)
7. FAQ (10 questions, 500 words)
8. CTA (100 words)

**Keywords**: "[service] cost", "how much does [service] cost", "[service] pricing"

---

### FAQ Pages (1,500-2,000 words)

**Structure**:
- 30-50 questions grouped by category
- Each answer: 100-200 words
- Accordion UI structure
- Schema markup for FAQPage

**Keywords**: Long-tail question queries

---

### Blog Posts (1,000-1,500 words)

**Structure**:
1. Hook (100 words)
2. Main content (3-5 sections, 600-900 words)
3. Key takeaways (200 words)
4. CTA (100 words)

**Keywords**: Topical, trend-based, educational

---

## Tools to Use

**Writing & Editing**:
- Hemingway Editor (readability)
- Grammarly (grammar/spelling)
- Google Docs (drafting)

**SEO Research**:
- Google Keyword Planner (search volumes)
- Ahrefs/Semrush (keyword research)
- AnswerThePublic (question keywords)

**Formatting**:
- Markdown editor (Typora, VS Code)
- Table generators (TablesGenerator.com)

---

This template ensures every piece of content follows Neural Solutions' SEO standards,
voice/tone guidelines, and drives measurable organic traffic and conversions.
