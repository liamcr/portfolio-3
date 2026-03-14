## Why

The home page currently has only the newspaper-era introductory section. The site's narrative requires a second chapter: a skills showcase styled after the Art Deco era — bold, grand, and theatrical. This section advances the story from "origin and intent" to "the tools of the craft," while establishing the visual language shift that signals time has moved on.

## What Changes

- Add a second section to the home page (`frontend/app/page.tsx`), rendered below `HomeNewspaperHero`
- Create an Art Deco design system: CSS tokens for the era (gold/black/cream palette, geometric serif fonts, ornamental rules)
- Build a `SkillsArtDeco` section component that presents skills as acts in a playbill — grouped by discipline, centre-aligned, with ornamental dividers and a formal introductory statement
- Skills are hardcoded for now (JavaScript, TypeScript, Python, Golang, Docker, Kubernetes, Kafka, gRPC, and related); final list to be updated later

## Capabilities

### New Capabilities

- `art-deco-design-system`: CSS tokens and base styles for the Art Deco aesthetic (`--ad-*` namespace): gold/black palette, geometric display font, ornamental border patterns
- `skills-art-deco-section`: The skills section component — playbill-style layout with intro statement, skill groups as "acts," ornamental dividers, and Art Deco typography

### Modified Capabilities

<!-- None — this is a new section appended below the existing hero -->

## Impact

- `frontend/app/page.tsx` gains a second section below `<HomeNewspaperHero />`
- New files under `frontend/components/SkillsArtDeco/`
- New Art Deco token file: `frontend/components/art-deco/art-deco.tokens.css`
- New Google Font added to root layout: a geometric Art Deco display face (e.g., **Cormorant** or **Poiret One** for headings, with **Josefin Sans** for the all-caps skill labels)
- No changes to the newspaper design system or existing components
