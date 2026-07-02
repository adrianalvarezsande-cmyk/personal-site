# CLAUDE.md — Adrián Álvarez Personal Website

This is the permanent source of truth for this project.
Read this before touching any file.

---

## About this project

This is the personal website of Adrián Álvarez.
It is not a portfolio. It is not a startup landing page. It is a digital home.

The goal: anyone who visits leaves feeling that Adrián has exceptional taste,
pays attention to detail, and builds ambitious things.

Quality over quantity. Everything intentional.

---

## Design philosophy

### What it should feel like
minimal — editorial — timeless — calm — premium — elegant — human — intelligent

### What it should never feel like
- a startup landing page
- a SaaS product site
- a generic Tailwind template
- overdesigned or flashy
- performatively branded

### Core principles

1. **Typography, spacing, and hierarchy do the heavy lifting.**
   Visual effects are never a substitute for clear information design.

2. **Whitespace is not emptiness — it is confidence.**
   Resist the anxiety to fill space. Let content breathe.

3. **Every animation must serve the content.**
   If the experience is unchanged without it, remove it.

4. **Prefer subtraction over addition.**
   Every new visual element must justify its existence.

5. **Design for trust, clarity and longevity — not for looking impressive.**
   A visitor should feel understood, not marketed to.

---

## Design system

### Typography

The primary typeface is a high-quality sans-serif. The visual language stays
close to the references: Apple, Linear, Vercel. Clean, precise, confident.

- **Primary (all UI and body copy):** Geist Variable — modern, precise, excellent
  at all sizes. Self-host from Vercel's open source release.
- **Accent (editorial moments only):** A refined serif — used sparingly for pull
  quotes, section openers, or other editorial details where contrast is intentional.
  Never as part of the core visual identity. Typeface TBD once primary is in place.

Type scale and all font-size, font-weight, line-height, and letter-spacing values
are defined in `tailwind.config.ts`. Do not use arbitrary values.

### Color tokens

Defined as CSS custom properties and mapped into Tailwind. Do not use raw hex
values in components — always use token names.

**Light mode**
| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#F9F9F7` | Page background (warm white — not pure white) |
| `--color-text-primary` | `#111111` | Primary text |
| `--color-text-secondary` | `#6B6B6B` | Supporting text, metadata |
| `--color-border` | `#E8E8E4` | Dividers, borders |
| `--color-accent` | TBD | One accent color, muted and desaturated |

**Dark mode**
| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#0E0E0D` | Page background (warm near-black — not pure black) |
| `--color-text-primary` | `#F0EFE9` | Primary text |
| `--color-text-secondary` | `#888880` | Supporting text, metadata |
| `--color-border` | `#252523` | Dividers, borders |
| `--color-accent` | TBD | Lightened variant of light-mode accent |

The accent color is intentionally undecided. It will be finalized once the
typographic system is in place and we can evaluate it in context.

### Spacing

Generous. Default to more space than feels comfortable, then adjust.
Use the spacing scale defined in `tailwind.config.ts` — never arbitrary values.
Think book design, not web app design.

### Motion

Rules, in order of priority:
1. Every animation must serve the content, not decorate it.
2. If removed and the experience is unchanged, remove it.
3. Fast exits, purposeful entrances — brief ease-in-out.
4. No scroll-triggered movement. No parallax. No loading screens.
5. Permitted: opacity transitions, subtle state shifts on hover, page fade-in.

---

## Site structure

| Route | Purpose |
|-------|---------|
| `/` | Home — quiet, composed entry point |
| `/about` | Personal essay + integrated career narrative |
| `/writing` | Essays and notes — quality over quantity |
| `/contact` | Email + social links only |

### Notes on structure

**No `/experience` page.** At this stage of Adrián's career a standalone
experience page risks reading as an online CV. The career narrative lives
inside `/about` as prose, not a timeline. A dedicated experience page may
be added in a later phase when there is enough to say.

**Writing is not a blog.** The `/writing` section is for essays and notes
that Adrián would stand behind indefinitely. Frequency does not matter.
One genuinely good piece is worth more than ten mediocre ones.

---

## Voice guidelines

- Write to one person, not an audience
- Clear rather than clever
- Confident but never arrogant
- Professional without sounding corporate
- Natural — not polished marketing copy
- One idea per sentence
- Cut every word that does not earn its place
- Never open a sentence with "I am" on the homepage
- Confident declarations over hedged descriptions:
  not "I'm interested in AI" — but "I'm trying to understand what AI actually changes"

---

## Tech stack

| Concern | Choice | Notes |
|---------|--------|-------|
| Framework | Next.js 15 (App Router) | Performance, SEO, Vercel-native |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS v4 | Treated as a design token system — not a utility grab-bag |
| Content | MDX | Markdown with React components for writing |
| Animation | Motion | (npm: `motion`) — purposeful, not decorative |
| Deployment | Vercel | Zero config, pairs with Next.js |
| Fonts | Self-hosted | Geist Variable from Vercel's open source release |

**On Tailwind:** This project will not look like a Tailwind template. Tailwind
is used to enforce a strict design token system — custom type scale, color tokens,
and spacing scale defined in config. Generic utility classes (e.g. `bg-blue-500`,
`text-xl` without semantic meaning) are not used in components.

---

## Development principles

### Before any implementation
1. Understand the problem fully
2. Explain the reasoning
3. Propose alternatives if they exist
4. Recommend the best option with justification
5. Get confirmation before writing code

### Code standards
- Every component is reusable and well-typed
- No unnecessary dependencies — justify every package added
- No speculative abstractions — build what the task requires, nothing more
- No comments explaining what the code does — only why, when non-obvious
- Semantic HTML throughout
- Keyboard navigation and ARIA where needed
- No arbitrary Tailwind values — always use defined tokens

### Never do this
- Rush into implementation without design clarity
- Add features not explicitly requested
- Use animations as decoration
- Exaggerate or overclaim in copy
- Write a component that only works in one place
- Prioritize speed over quality

### Always do this
- Challenge ideas if there is a better solution
- Review your own work after each milestone
- Look for inconsistencies and fix them proactively
- Treat each component as a finished thing, not a draft

---

## Milestones

- [x] Phase 0: Creative direction, documentation, project brief
- [ ] Phase 1: Foundation — tech stack, design tokens, layout shell, dark mode
- [ ] Phase 2: Core pages — Home, About, Contact
- [ ] Phase 3: Content — Writing section, MDX pipeline, first published pieces
- [ ] Phase 4: Polish — motion, SEO, Open Graph, accessibility, performance
- [ ] Phase 5: Evolution — ongoing as career develops

---

## What success looks like

A visitor who shares Adrián's interests — a founder, researcher, economist, builder —
lands on this site and thinks: "This person thinks carefully. I'd enjoy working with them."

They do not think: "Nice portfolio."
They do not think: "This person is trying to impress me."

They think: "I want to read more."
