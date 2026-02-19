# Workroom Design System Rules for Figma MCP Integration

This document provides comprehensive guidance for integrating Figma designs into the Workroom codebase using the Model Context Protocol (MCP).

---

## 1. Token Definitions

### 1.1 Color Tokens

#### CSS Variables (Light Mode - `:root`)
```css
--background: 0 0% 100%;              /* White #ffffff */
--foreground: 222.2 84% 4.9%;         /* Near black */
--card: 0 0% 100%;                    /* White */
--card-foreground: 222.2 84% 4.9%;
--popover: 0 0% 100%;
--popover-foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;         /* Dark navy */
--primary-foreground: 210 40% 98%;    /* Off-white */
--secondary: 210 40% 96.1%;           /* Very light gray */
--secondary-foreground: 222.2 47.4% 11.2%;
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
--destructive: 0 84.2% 60.2%;         /* Red */
--destructive-foreground: 210 40% 98%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
--radius: 0.5rem;                     /* 8px */
```

#### Brand Colors (Figma-specific)
```typescript
// Primary brand purple (Explore All button)
'rgb(82, 77, 246)'  // #524DF6

// Secondary backgrounds
'rgba(82, 77, 246, 0.1)'   // Footer background
'rgba(82, 77, 246, 0.17)'  // Active filter tab

// Card background
'#d0d0d0'  // Gray placeholder

// Text colors
'#222'     // Browse by heading
'#4a4a4a'  // Search placeholder
'#0061ff'  // "more" link blue
'#454545'  // WORKROOM footer text

// Borders
'#cbcbcb'  // Inactive filter tab border
```

### 1.2 Typography Tokens

#### Font Families
```typescript
// Primary font (90% of content)
fontFamily: "'Roboto', sans-serif"
fontVariationSettings: "'wdth' 100"

// Secondary font (WORKROOM branding)
fontFamily: "'Plus Jakarta Sans', sans-serif"

// System fallback
fontFamily: "'Inter', sans-serif"
```

#### Font Sizes (Figma exact)
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero title | 48px | 600 (semibold) | 40px | 0 |
| Hero subtitle | 24px | 500 (medium) | 40px | 0 |
| Section heading (Browse by) | 32px | 500 (medium) | 40px | 0 |
| Card title | 24px | 500 (medium) | normal | 0 |
| Card subtitle | 16px | 400 (normal) | normal | 0 |
| Category chips | 17px | 400 (normal) | 20px | 0.1px |
| Filter tabs | 15px | 300/400 | 20px | 0.1px |
| Search placeholder | 15px | 400 (normal) | 20px | 0 |
| Button text | 16px | 400 (normal) | 20px | 0 |
| Footer links | 15px | 400 (normal) | normal | 0 |
| Footer description | 17px | 400 (normal) | normal | 0 |
| Copyright | 13px | 400 (normal) | 19.6px | 0 |
| WORKROOM text | 15.582px | 800 (extrabold) | 17px | 1px |

### 1.3 Spacing Tokens (Figma exact)

#### Layout
```typescript
// Page padding (responsive)
padding: {
  mobile: '16px',       // px-4
  tablet: '48px',       // px-12
  desktop: '175px',     // px-[175px]
}

// Content max-width
maxWidth: '1378px'      // max-w-[1378px]

// Section vertical spacing
heroHeight: '590px'
browseSection: {
  paddingTop: '75px',
  paddingBottom: '69px',
}
```

#### Component Spacing
```typescript
// Card grid
grid: {
  columns: 4,           // xl:grid-cols-4
  gapX: '23px',
  gapY: '30px',
}

// Filter tabs
filterTabs: {
  gap: '12px',          // gap-3
  paddingX: '18px',
  paddingY: '6px',
}

// Footer
footer: {
  mainPadding: '108px 175px 78px',
  columnGap: '296px',   // Between Core and Company
  linkGap: '17px',      // Core links
  linkGap2: '16px',     // Company links
  socialGap: '39px',
}
```

### 1.4 Border Radius Tokens

```typescript
radius: {
  card: '10px',           // Content cards
  glassCard: '52px',      // Hero glass card
  searchBar: '62px',      // Search input container
  filterButton: '42px',   // Filter button
  filterTab: '49px',      // Filter tab pills
  exploreButton: '4px',   // Explore All button
  exploreAllText: '61px', // explore all link
}
```

### 1.5 Shadow Tokens

```typescript
shadows: {
  navbar: '0px -1px 5.5px 1px rgba(0, 0, 0, 0.25)',
  glassCard: '0px 0px 14.4px -4px rgba(0, 0, 0, 0.05)',
  searchBar: '0px 0px 0px 1px rgba(96, 101, 242, 0.13)',
  filterButton: '0px 0px 5px -1px rgba(46, 40, 80, 0.56)',
}
```

---

## 2. Component Library

### 2.1 Component Architecture

```
src/components/
├── ui/                    # Base primitives
│   ├── button.tsx         # CVA-based button variants
│   ├── badge.tsx
│   ├── avatar.tsx
│   ├── dropdown-menu.tsx  # Radix UI wrapper
│   ├── separator.tsx
│   ├── content-card.tsx   # Project cards
│   ├── filter-tabs.tsx    # Tab filters
│   ├── search-bar.tsx
│   ├── category-chip.tsx
│   ├── filter-button.tsx
│   ├── explore-button.tsx
│   ├── primary-button.tsx
│   ├── nav-button.tsx
│   └── index.ts
├── layout/
│   ├── navbar.tsx         # Fixed header
│   ├── footer.tsx         # Two-section footer
│   ├── mobile-nav.tsx     # Mobile menu
│   └── index.ts
└── shared/
    └── theme-provider.tsx
```

### 2.2 Key Components from Figma

#### ContentCard (Figma node 1:1525-1:1660)
```typescript
// Exact Figma dimensions
dimensions: {
  width: '327px',
  height: '424px',
}

// Internal positioning
positions: {
  title: { left: '25px', top: '43px' },
  subtitle: { left: '25px', top: '75px' },
  bookmark: { right: '67px', top: '20px' },  // left-[260px]
  dotsMenu: { right: '39px', top: '20px' },  // left-[288px]
  arrowIcon: { right: '42px', bottom: '16.5px' },  // left-[260px] top-[382.5px]
}
```

#### FilterTabs (Figma node 1:663-1:675)
```typescript
// Active tab
active: {
  background: 'rgba(82, 77, 246, 0.17)',
  fontWeight: 400,
}

// Inactive tab
inactive: {
  border: '1px solid #cbcbcb',
  fontWeight: 300,
}
```

#### SearchBar (Figma node 1:601-1:605)
```typescript
dimensions: {
  width: '928px',
  height: '66px',
}

filterButton: {
  width: '75px',
  height: '46px',
  background: 'linear-gradient(107.28deg, #fff 12.4%, #f1f1f1 95.3%)',
}
```

---

## 3. Frameworks & Libraries

### 3.1 Core Stack
- **Framework**: Next.js 15.5.9 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.6.3
- **Styling**: Tailwind CSS 3.4.17

### 3.2 UI Libraries
- **Radix UI**: Dropdown Menu, Avatar, Separator, Slot
- **CVA**: class-variance-authority 0.7.1
- **Icons**: lucide-react 0.562.0
- **Utilities**: clsx 2.1.1, tailwind-merge 2.6.0

### 3.3 Build Configuration
```typescript
// next.config.ts
{
  reactStrictMode: true,
}

// tsconfig.json paths
{
  "@/*": ["./src/*"]
}
```

---

## 4. Asset Management

### 4.1 Directory Structure
```
public/
├── images/
│   ├── cards/           # Content card images (JPG)
│   ├── icons/           # SVG icons
│   ├── asbl-logo.svg    # Footer logo (black)
│   └── asbl-logo-white.svg  # Navbar logo (white)
├── logo.png
└── workroom-bg.mp4      # Hero background video
```

### 4.2 Image Formats
- **Cards**: JPG (optimized for photography)
- **Icons/Logos**: SVG (scalable)
- **Video**: MP4 (hero background)

### 4.3 Figma Asset Download
When receiving assets from Figma MCP:
```typescript
// Assets are provided as URLs valid for 7 days
const imgAsset = "https://www.figma.com/api/mcp/asset/{uuid}";

// Download and save to public/images/
// Use descriptive names matching component usage
```

---

## 5. Icon System

### 5.1 Primary: Lucide React
```typescript
import { Menu, X, LogOut, Settings } from 'lucide-react';
```

### 5.2 Custom SVG Icons
Located in components that need them:
- Navbar: Bell, Person icons (inline SVG)
- Footer: Social icons (X, YouTube, LinkedIn, Instagram)
- Cards: Bookmark, DotsVertical, ArrowRight
- Search: Search icon, Filter lines

### 5.3 Icon Sizing
```typescript
// Standard sizes
sizes: {
  sm: 'h-4 w-4',    // 16px
  md: 'h-5 w-5',    // 20px
  lg: 'h-6 w-6',    // 24px
}

// Navbar icons: 24x24px
// Card icons: varies per icon
```

---

## 6. Styling Approach

### 6.1 Methodology: Utility-First (Tailwind)

All styling uses Tailwind utilities with inline styles for Figma-exact values:

```tsx
// Pattern for Figma-exact styling
<div
  className="text-[24px] font-medium leading-normal text-white"
  style={{
    fontFamily: "'Roboto', sans-serif",
    fontVariationSettings: "'wdth' 100",
  }}
>
```

### 6.2 Custom Utilities (globals.css)

```css
/* Hide scrollbar */
.scrollbar-hide { ... }

/* Glass morphism stripes */
.glass-stripe {
  backdrop-filter: blur(50px);
  mix-blend-mode: overlay;
}

/* Gradient text fade */
.gradient-text-fade {
  background: linear-gradient(270deg, rgba(0,0,0,0) 2%, rgb(0,0,0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Search bar border */
.search-bar-border {
  box-shadow: 0px 0px 0px 1px rgba(96, 101, 242, 0.13);
}

/* Filter button gradient */
.filter-button-gradient {
  background: linear-gradient(107.28deg, #fff 12.4%, #f1f1f1 95.3%);
  box-shadow: 0px 0px 5px -1px rgba(46, 40, 80, 0.56);
}
```

### 6.3 Responsive Design

#### Breakpoints
```typescript
breakpoints: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

#### Mobile-First Pattern
```tsx
// Always mobile-first, add larger breakpoints
<div className="
  h-[320px] sm:h-[360px] md:h-[400px] xl:h-[424px]
  w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] xl:max-w-[327px]
">
```

---

## 7. Project Structure

### 7.1 App Router Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout with Navbar + Footer
│   ├── page.tsx         # Home page (Workroom landing)
│   ├── globals.css      # Global styles + tokens
│   ├── projects/
│   │   └── page.tsx
│   └── (standalone)/    # Pages without main layout
│       ├── layout.tsx
│       └── buyer-survey/
├── components/          # Shared components
├── features/            # Feature modules
├── lib/
│   └── utils.ts         # cn() utility
└── styles/
    └── design-tokens.ts
```

### 7.2 Import Conventions
```typescript
// Absolute imports from src/
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';
```

---

## 8. Figma to Code Mapping

### 8.1 Node ID Reference
| Figma Node | Component | File |
|------------|-----------|------|
| 1:556 | Landing page | `src/app/page.tsx` |
| 1:716 | Navbar | `src/components/layout/navbar.tsx` |
| 1:558 | Hero section | `src/app/page.tsx` (section) |
| 1:560 | Glass card | `src/app/page.tsx` (div) |
| 1:601 | Search bar | `src/app/page.tsx` (div) |
| 1:609 | Category chips | `src/app/page.tsx` (CATEGORIES array) |
| 1:644 | Browse section | `src/app/page.tsx` (section) |
| 1:663-1:675 | Filter tabs | `src/components/ui/filter-tabs.tsx` |
| 1:1525-1:1660 | Content cards | `src/components/ui/content-card.tsx` |
| 1:1520 | Explore All button | `src/app/page.tsx` (button) |
| 1:643 | Footer | `src/components/layout/footer.tsx` |

### 8.2 Converting Figma Positioning

Figma uses absolute positioning with left/top from container:
```typescript
// Figma: left-[260px] from 327px width = right-[67px]
// Figma: top-[382.5px] from 424px height = bottom-[41.5px]

// Convert to Tailwind
className="absolute right-[42px] bottom-[16px]"
```

### 8.3 Converting Figma Gradients

```typescript
// Figma gradient
backgroundImage: "linear-gradient(90deg, rgb(82, 77, 246) 0%, rgb(82, 77, 246) 100%)"

// Tailwind inline style
style={{
  backgroundImage: 'linear-gradient(90deg, rgb(82, 77, 246) 0%, rgb(82, 77, 246) 100%)',
}}
```

---

## 9. Implementation Guidelines

### 9.1 When Implementing Figma Designs

1. **Extract node ID** from Figma URL: `?node-id=1-556` → `nodeId: "1:556"`
2. **Use `get_design_context`** to get code structure
3. **Use `get_screenshot`** for visual reference
4. **Map Figma components** to existing UI components
5. **Use exact Figma values** for dimensions, colors, spacing
6. **Apply responsive adaptations** for mobile

### 9.2 Style Application Order

1. Tailwind utility classes for common properties
2. Inline `style={{}}` for Figma-specific values (fonts, gradients)
3. Custom CSS classes in globals.css for reusable patterns

### 9.3 Component Creation Pattern

```tsx
'use client';

import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  // ... props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div
      className={cn(
        "base-tailwind-classes",
        className
      )}
      style={{
        fontFamily: "'Roboto', sans-serif",
        fontVariationSettings: "'wdth' 100",
      }}
      {...props}
    >
      {/* content */}
    </div>
  );
}
```

---

## 10. Z-Index Stack

```typescript
zIndex: {
  navbar: 50,        // z-50
  mobileMenu: 40,    // z-40
  dropdown: 50,      // Radix default
  modal: 100,
}
```

---

## 11. Animation & Transitions

```typescript
// Standard transitions
transitions: {
  colors: 'transition-colors',
  opacity: 'transition-opacity',
  all: 'transition-all',
}

// Hover states
hover: {
  opacity: 'hover:opacity-80',
  scale: 'hover:scale-105',
  background: 'hover:bg-gray-100',
}
```

---

## 12. Accessibility

- **Focus states**: Ring utilities (`focus:ring-2`)
- **ARIA labels**: All interactive icons have `aria-label`
- **Semantic HTML**: Proper heading hierarchy
- **Color contrast**: WCAG AA compliant text/background combinations

---

*Last Updated: 2026-01-26*
*For Figma File: ASBL Archive (ci7s8nCRw3qUAk1bYLrehx)*
