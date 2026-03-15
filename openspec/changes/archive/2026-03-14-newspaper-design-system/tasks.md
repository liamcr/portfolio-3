## 1. Fonts & Design Tokens

- [x] 1.1 Add `playfair-display` and `unifraktur-maguntia` font imports using `next/font/google` in a new `frontend/src/app/newspaper/layout.tsx`, exposing them as CSS variables `--font-playfair` and `--font-unifraktur`
- [x] 1.2 Create `frontend/src/components/newspaper/newspaper.tokens.css` with all `--np-*` custom properties (colors, fonts, spacing, border rule)
- [x] 1.3 Import `newspaper.tokens.css` in the newspaper `layout.tsx` so tokens cascade to all child components

## 2. Masthead Component

- [x] 2.1 Create `frontend/src/components/newspaper/Masthead/Masthead.module.css` with styles using `--np-font-masthead`, centered layout, and double horizontal rule below
- [x] 2.2 Create `frontend/src/components/newspaper/Masthead/Masthead.tsx` accepting `title: string` and optional `tagline?: string` props
- [x] 2.3 Verify masthead renders title in blackletter font at ≥ 48px and tagline in a smaller serif

## 3. IssueHeader Component

- [x] 3.1 Create `frontend/src/components/newspaper/IssueHeader/IssueHeader.module.css` with horizontal bar layout, thin rules above and below, small caps serif text
- [x] 3.2 Create `frontend/src/components/newspaper/IssueHeader/IssueHeader.tsx` accepting `date: string`, `edition: string`, and optional `price?: string` props
- [x] 3.3 Verify three metadata items space correctly across the bar, and that the component renders cleanly without price

## 4. Headline Component

- [x] 4.1 Create `frontend/src/components/newspaper/Headline/Headline.module.css` with font-weight 700+, large display size, and a thin rule below
- [x] 4.2 Create `frontend/src/components/newspaper/Headline/Headline.tsx` accepting `children`, optional `size?: "xl" | "lg" | "md"` (default `"xl"`), and optional `centered?: boolean` (default `true`)
- [x] 4.3 Verify centered vs. left-aligned rendering and size variants

## 5. ColumnLayout Component

- [x] 5.1 Create `frontend/src/components/newspaper/ColumnLayout/ColumnLayout.module.css` using CSS `column-count`, `column-rule` from `--np-border-rule`, and a media query that collapses to 1 column below 640px
- [x] 5.2 Create `frontend/src/components/newspaper/ColumnLayout/ColumnLayout.tsx` accepting `columns?: 2 | 3` (default `2`) and `children`
- [x] 5.3 Verify text flows across columns on desktop and collapses to single column on mobile (resize browser or use dev tools)

## 6. DropCapParagraph Component

- [x] 6.1 Create `frontend/src/components/newspaper/DropCapParagraph/DropCapParagraph.module.css` with `::first-letter` pseudo-element styles (float left, ~3-line height, bold, `--np-font-body`)
- [x] 6.2 Create `frontend/src/components/newspaper/DropCapParagraph/DropCapParagraph.tsx` rendering a `<p>` with the module class applied
- [x] 6.3 Verify the drop cap floats correctly and body text wraps alongside it without overflow

## 7. Barrel Export

- [x] 7.1 Create `frontend/src/components/newspaper/index.ts` exporting all five components (`Masthead`, `IssueHeader`, `Headline`, `ColumnLayout`, `DropCapParagraph`)

## 8. Newspaper Page

- [x] 8.1 Create `frontend/src/app/newspaper/page.tsx` composing the full layout: `Masthead` → `IssueHeader` → `Headline` → `ColumnLayout` containing `DropCapParagraph` and additional paragraphs
- [x] 8.2 Set page wrapper background to `--np-color-paper` and text color to `--np-color-ink` in the layout or a page-level CSS module
- [x] 8.3 Write plausible developer-relevant placeholder content (name, tagline, bio, skills/projects mention) — no generic Lorem Ipsum
- [x] 8.4 Verify the `/newspaper` route loads correctly, all components render, and the aesthetic matches the Old English newspaper design
