## Context

The portfolio currently has no visual design system beyond Next.js defaults. This change introduces a self-contained newspaper design system scoped to the `/newspaper` section — it must not leak into or conflict with any future global styles.

The stack is Next.js App Router with TypeScript. Styling will use CSS Modules to guarantee isolation. No UI library is in use, so we are building primitives from scratch.

## Goals / Non-Goals

**Goals:**
- A CSS design token layer (custom properties) for the newspaper aesthetic: serif fonts, strict B&W palette, border rules, and column grid
- A small set of composable React components covering the described layout: `Masthead`, `IssueHeader`, `Headline`, `ColumnLayout`, `DropCapParagraph`
- A `/newspaper` route that composes these components into a convincing Old English newspaper layout
- Font loading via Next.js `next/font` (Google Fonts) — no separate stylesheet imports

**Non-Goals:**
- Dark mode support for the newspaper section (inherently monochrome)
- CMS integration or dynamic content — static/hardcoded placeholder content is acceptable
- Animating or interactive elements beyond standard link hover states
- Reusing these components outside the newspaper section

## Decisions

### 1. CSS Modules over Tailwind or global CSS

**Decision:** Each component gets its own `.module.css` file; shared tokens live in `frontend/src/components/newspaper/newspaper.tokens.css` imported at the layout level.

**Rationale:** Scoping is the top priority — the newspaper palette (pure black/white, heavy serifs) must not affect other pages. CSS Modules provide file-level scoping with zero runtime cost. A shared tokens file via CSS custom properties (`--np-*` namespace) keeps values DRY without a build-time dependency.

**Alternatives considered:**
- Tailwind arbitrary values: verbose, harder to read, bleeds into global utility classes
- Styled-components: adds runtime overhead, overkill for a static section

### 2. `next/font` for serif typefaces

**Decision:** Use `next/font/google` to load:
- **Playfair Display** — headlines, drop caps, body columns (an elegant editorial serif)
- **UnifrakturMaguntia** — masthead title only (authentic blackletter / Old English)

**Rationale:** `next/font` self-hosts fonts, eliminates FOUT, and integrates with Next.js App Router via CSS variables. Both fonts are available on Google Fonts.

**Alternatives considered:**
- `@import` in CSS: causes render-blocking, no self-hosting
- Local font files: more setup, harder to maintain

### 3. Multi-column layout via CSS `column-count`

**Decision:** `ColumnLayout` uses native CSS `column-count` + `column-rule` for the column effect, not CSS Grid or Flexbox columns.

**Rationale:** `column-count` is the semantic CSS property for editorial multi-column text flow. It handles text reflow automatically and produces the authentic newspaper look where text flows top-to-bottom across columns. Grid/Flex would require manually splitting content.

**Alternatives considered:**
- CSS Grid with explicit column spans: requires splitting article text, loses automatic reflow
- Flexbox: same manual split problem

### 4. Drop cap via CSS `::first-letter` pseudo-element

**Decision:** `DropCapParagraph` applies `::first-letter` in its CSS Module to produce the drop cap effect.

**Rationale:** Pure CSS, no JS manipulation, accessible (screen readers ignore the pseudo-element), and it is the conventional technique for editorial drop caps.

### 5. Component structure

```
frontend/src/components/newspaper/
  newspaper.tokens.css       ← CSS custom properties (--np-*)
  Masthead/
    Masthead.tsx
    Masthead.module.css
  IssueHeader/
    IssueHeader.tsx
    IssueHeader.module.css
  Headline/
    Headline.tsx
    Headline.module.css
  ColumnLayout/
    ColumnLayout.tsx
    ColumnLayout.module.css
  DropCapParagraph/
    DropCapParagraph.tsx
    DropCapParagraph.module.css
  index.ts                   ← barrel export

frontend/src/app/newspaper/
  layout.tsx                 ← imports tokens CSS, sets font vars
  page.tsx                   ← example layout
```

## Risks / Trade-offs

- **UnifrakturMaguntia readability** → The blackletter font is stylistically authentic but may be hard to read at small sizes. Mitigation: use it only for the masthead title at a large display size (≥ 48px).
- **`column-count` on mobile** → Multi-column text is hard to read on narrow screens. Mitigation: `ColumnLayout` defaults to 1 column below a breakpoint (e.g., `< 640px`).
- **Static content** → The `/newspaper` page uses placeholder text. Mitigation: content is written to be plausible portfolio copy (about the developer), so it reads as intentional rather than Lorem Ipsum.

## Open Questions

- None blocking implementation. Font choices (Playfair Display + UnifrakturMaguntia) can be swapped if the developer prefers a different aesthetic once they see the result.
