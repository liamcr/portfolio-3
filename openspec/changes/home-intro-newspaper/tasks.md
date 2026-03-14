## 1. Root Layout — Hoist Newspaper Fonts

- [x] 1.1 Add `Playfair_Display` and `UnifrakturMaguntia` font declarations to `frontend/app/layout.tsx`, exposing `--font-playfair` and `--font-unifraktur` as CSS variables on the root `<html>` element (alongside the existing Geist variables)
- [x] 1.2 Verify the `/newspaper` route still renders correctly after the font hoisting (fonts were previously loaded in the newspaper sub-layout — confirm no duplication or breakage)

## 2. HomeNewspaperHero Component

- [x] 2.1 Create `frontend/components/HomeNewspaperHero/HomeNewspaperHero.module.css` — imports `newspaper.tokens.css`, sets the section to `min-height: 100svh` with flex column layout, applies `--np-color-paper` background and `--np-color-ink` text color, and positions the scroll cue at the bottom
- [x] 2.2 Create `frontend/components/HomeNewspaperHero/HomeNewspaperHero.tsx` — composes `Masthead`, `IssueHeader`, `Headline`, `DropCapParagraph`, and a scroll cue `<footer>` element using the newspaper components barrel
- [x] 2.3 Write the final copy into the component:
  - **Masthead title**: `Liam Crocket`
  - **Masthead tagline**: `The Independent Journal of Software & Craft`
  - **IssueHeader date**: `Saturday, March 14, 2026` | **edition**: `Vol. I — The Early Years` | **price**: `Est. Worth: A Good Cup of Coffee`
  - **Headline**: `Local Engineer Refuses to Choose Between Foundation and the Future.`
  - **Lede**: A short paragraph (3–5 sentences) introducing Liam in a wry editorial voice, teasing that the page ahead chronicles his journey from fundamentals to modern AI-assisted craft — without spelling out the structure literally
  - **Scroll cue**: `↓ Continue Reading`

## 3. Home Page

- [x] 3.1 Replace the placeholder content in `frontend/app/page.tsx` with `<HomeNewspaperHero />` as the first section
- [x] 3.2 Verify the home page at `/` renders the full-viewport newspaper hero with no "Hello world" text remaining

## 4. Verification

- [x] 4.1 Check desktop: hero fills viewport, masthead in blackletter, headline prominent, lede with drop cap, scroll cue at bottom
- [x] 4.2 Check mobile (375px): section still fills viewport, columns not breaking layout, scroll cue visible
- [x] 4.3 Confirm no console errors and no regression on the `/newspaper` demo route
