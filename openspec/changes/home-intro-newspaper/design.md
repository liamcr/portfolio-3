## Context

The newspaper design system (components, tokens, fonts) was built for the standalone `/newspaper` route, which has its own `layout.tsx` that loads fonts and imports tokens. The home page lives at the root route under `frontend/app/layout.tsx`, which currently loads only the Geist fonts and a global stylesheet.

To use the newspaper aesthetic on the home page without duplicating font-loading logic, we need to either (a) lift font and token loading to the root layout or (b) wrap the newspaper hero section in its own font/token provider component. We also need to be careful about the root layout's global styles not overriding the newspaper tokens.

The section must feel like a full-bleed front page — occupying the full viewport height on load — with a clear visual invitation to scroll, teasing that more story lies below.

## Goals / Non-Goals

**Goals:**
- A full-viewport-height newspaper hero section on the home page (`/`)
- Reuses all existing newspaper components and tokens — zero new design primitives
- The root layout gains access to the newspaper fonts so the hero can use them
- Clear narrative framing: headline + lede + scroll cue, styled as an Old English newspaper front page
- The section is self-contained — future sections can be appended below it without conflict

**Non-Goals:**
- Building the subsequent story sections (those are separate changes)
- Any scroll animation or parallax (that belongs to a future motion/interaction change)
- Changing the `/newspaper` demo page
- Making the global layout adopt the newspaper aesthetic — only the hero section uses it

## Decisions

### 1. Lift newspaper fonts to the root layout

**Decision:** Move `Playfair_Display` and `UnifrakturMaguntia` font declarations into `frontend/app/layout.tsx` and expose them as CSS variables on `<html>`. The newspaper sub-layout at `/newspaper/layout.tsx` continues to work unchanged (the variables are already in scope). The tokens CSS import stays in the newspaper layout to keep the `--np-*` variables scoped.

**Rationale:** `next/font` deduplicates font loading — declaring the same font twice (root + subroute layout) does not double-load but it does create two distinct CSS variable names, which is confusing. Hoisting to root is clean and correct; font variables cascade down to any component that needs them.

**Alternatives considered:**
- Inline a `<NewspaperFontProvider>` wrapper component on the home page: works but is awkward — a component whose only job is to set CSS variables on a wrapper div
- Keep fonts in the newspaper layout and import it from the home page: circular / architecturally wrong (a route layout shouldn't be imported by another route)

### 2. Token scoping — home hero gets a wrapper div with the `--np-*` tokens

**Decision:** The hero section on the home page is wrapped in a `<section>` that imports and applies `newspaper.tokens.css` at the component level (via a CSS Module that imports it), so `--np-*` custom properties are available within the hero without touching the global stylesheet.

**Rationale:** The root layout's `globals.css` should not be polluted with newspaper tokens — they only make sense inside newspaper-styled sections. A wrapper element with the tokens applied is the minimal, correct scope.

### 3. Hero composition

The hero is a single `HomeNewspaperHero` component at `frontend/components/HomeNewspaperHero/`. It uses:

- `Masthead` — developer name as publication title
- `IssueHeader` — today's date, a witty edition label, and a teaser price
- `Headline` — the story's opening line (breaking news framing)
- `DropCapParagraph` — the lede: who you are and a tease of the journey ahead
- A scroll cue — a subtle "↓ Continue Reading" line at the bottom of the viewport in small caps serif, no JS required (CSS `position: sticky` or simply placed at the end of the section with `min-height: 100vh`)

The home `page.tsx` renders `<HomeNewspaperHero />` as the first and currently only section.

### 4. Full-viewport height

The hero `<section>` uses `min-height: 100svh` (small viewport height unit, which avoids the mobile browser chrome issue with `100vh`) with `display: flex; flex-direction: column; justify-content: space-between` so the scroll cue sits at the bottom.

## Risks / Trade-offs

- **Font hoisting** affects all routes — if a future section needs to remove the blackletter font variable from scope, it can't. Mitigation: font *variables* being in scope doesn't render anything — they only apply when a component sets `font-family: var(--font-unifraktur)`. This is safe.
- **`100svh` browser support** — `svh` units have broad support (Chrome 108+, Firefox 101+, Safari 15.4+). Mitigation: fallback to `100vh` using a CSS `@supports` block or simply accept the minor mobile chrome-bar issue.

## Open Questions

- Copy: the headline and lede text need to be finalised. The proposal gives strong direction ("Local Engineer Refuses to Choose Between Foundation and the Future") — tasks will use this as the working copy, which can be tuned after seeing it rendered.
