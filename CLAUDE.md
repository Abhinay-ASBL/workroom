# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3001
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint via next lint
```

There is no test runner configured. Seeding scripts are in `scripts/seed-articles.js` and `seed-articles.mjs`.

## Architecture

**Workroom** is an internal knowledge repository for ASBL, built with Next.js 15 (App Router) backed by Supabase.

### Pages (all `'use client'`)
- `/` — Landing page with hero video, search, category chips, and filtered project grid
- `/projects` — Full project browser with filter tabs, tag filters, and search
- `/projects/[id]` — Project detail page (routed by `slug` field, not UUID)
- `/publish` — File upload form that writes to Supabase Storage (`workroom-files` bucket) and `submissions` table

### Data Layer
All data access is client-side via the Supabase JS client (`src/lib/supabase.ts`). The typed schema lives there:
- `projects` — main content items (has `slug`, `type`, `tags[]`, `image_url`, `author_name`, etc.)
- `categories` — hero chip categories ordered by `sort_order`
- `project_sections` — keyed content blocks (`overview`, `problem`, `research`, `solution`) per project
- `project_stats` — numeric stat blocks per project
- `submissions` — publish-page upload records

Environment variables required: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (set in `.env.local`).

### Component Structure
```
src/components/
├── layout/      # Navbar, Footer, MobileNav (rendered in root layout)
├── ui/          # Reusable primitives (ContentCard, FilterTabs, ExploreButton, etc.)
└── shared/      # ThemeProvider
```

Root layout (`src/app/layout.tsx`) wraps all pages with `<Navbar>` and `<Footer>`. Fonts (Roboto, Plus Jakarta Sans, Inter) are loaded via `next/font/google`.

### Styling Conventions
- **Tailwind utilities** for standard properties; **inline `style={{}}`** for Figma-exact pixel values, gradients, and box-shadows
- Brand purple: `#524DF6` / `rgb(82, 77, 246)`
- Primary font: `'Roboto', sans-serif` with `fontVariationSettings: "'wdth' 100"` — apply both together on all text elements
- Design tokens (colors, typography, spacing, shadows) are in `src/styles/design-tokens.ts`
- Full Figma token reference and component specs are in `.claude/rules/design_system_rules.md`

### Recurring Pattern: Glass Stripes
The `STRIPE_POSITIONS` array (defined in `page.tsx` and `projects/page.tsx`) renders decorative vertical blur stripes across hero and page backgrounds. Copy this pattern when creating new full-bleed sections with the purple-tinted background (`rgba(82, 77, 246, 0.1)`).

### Routing Note
The dynamic route is `src/app/projects/[id]/page.tsx` but the param is used as a `slug` (queried via `.eq('slug', slug)`), not a database ID.
