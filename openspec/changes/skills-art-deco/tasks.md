## 1. Art Deco Fonts & Design Tokens

- [x] 1.1 Add `Cormorant_Garamond` and `Josefin_Sans` font declarations to `frontend/app/layout.tsx`, exposing `--font-cormorant` and `--font-josefin` as CSS variables on the root `<html>` element
- [x] 1.2 Create `frontend/components/art-deco/art-deco.tokens.css` with all `--ad-*` custom properties (background, gold, cream, muted, rule colours; font stacks; spacing)
- [x] 1.3 Import `art-deco.tokens.css` in `frontend/app/layout.tsx` alongside the newspaper tokens so `--ad-*` properties are globally available

## 2. SkillsArtDeco Component — Styles

- [x] 2.1 Create `frontend/components/SkillsArtDeco/SkillsArtDeco.module.css` with:
  - Section wrapper: `min-height: 100svh`, `--ad-color-bg` background, flex column, centre-aligned
  - Section title: `--ad-font-display`, large, `--ad-color-gold`
  - Intro statement: italic `--ad-font-display`, `--ad-color-cream`, comfortable reading size
  - Category label: `--ad-font-label`, all-caps, wide `letter-spacing`, `--ad-color-gold`
  - Skill list: `--ad-font-label`, `--ad-color-cream`, middot separators
  - Ornamental divider: gold horizontal rule with `::before` centred `◆` glyph in `--ad-color-gold`

## 3. SkillsArtDeco Component — Markup

- [x] 3.1 Create `frontend/components/SkillsArtDeco/SkillsArtDeco.tsx` with:
  - A `SKILL_GROUPS` data array at the top of the file (category name + skills array)
  - Initial groups: **Languages** (JavaScript, TypeScript, Python, Golang), **Infrastructure** (Docker, Kubernetes, Kafka, gRPC), **Frontend** (React, Next.js, CSS), **Backend** (Node.js, REST, GraphQL, PostgreSQL)
  - Section title: "The Craft"
  - Intro statement using the specified copy
  - Each group rendered as: category label → skills with middot separators → ornamental divider (except after the last group)

## 4. Home Page

- [x] 4.1 Import and render `<SkillsArtDeco />` in `frontend/app/page.tsx` as the second section, directly below `<HomeNewspaperHero />`

## 5. Verification

- [x] 5.1 Check desktop: section fills viewport, black background, gold accents, Cormorant title, Josefin Sans skill labels, ornamental dividers between groups
- [x] 5.2 Check mobile (375px): content remains centre-aligned, no overflow, section still fills viewport
- [x] 5.3 Confirm no console errors and no regression on `/newspaper` or the newspaper hero
