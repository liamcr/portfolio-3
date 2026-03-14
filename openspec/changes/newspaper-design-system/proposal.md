## Why

The portfolio site needs a visually distinctive section that showcases design sensibility alongside technical skill. An Old English newspaper aesthetic — complete with mastheads, drop caps, column layouts, and serif typography — creates a memorable, editorial experience that differentiates the site and demonstrates front-end craft.

## What Changes

- Add a `/newspaper` route to the Next.js app with a full-page newspaper-style layout
- Create a newspaper design system: CSS tokens for typography, spacing, and color (black & white palette) scoped to the newspaper aesthetic
- Implement a set of reusable React components: `Masthead`, `Headline`, `ColumnLayout`, `DropCapParagraph`, `IssueHeader` (date + edition)
- Wire up an example layout on `/newspaper` using real (or placeholder) content

## Capabilities

### New Capabilities

- `newspaper-design-system`: CSS design tokens and base styles for the newspaper aesthetic (serif fonts, B&W palette, border rules, column grid)
- `newspaper-components`: Reusable React components implementing the newspaper layout primitives (Masthead, Headline, ColumnLayout, DropCapParagraph, IssueHeader)
- `newspaper-page`: The `/newspaper` route — an example page composed from the design system and components

### Modified Capabilities

<!-- None — this is a wholly new section of the site with no changes to existing specs -->

## Impact

- New files under `frontend/src/app/newspaper/` (page route)
- New files under `frontend/src/components/newspaper/` (components)
- New CSS module or global stylesheet additions for newspaper tokens
- No changes to existing pages, routes, or infrastructure
- Dependency: a suitable serif Google Font (e.g., Playfair Display or UnifrakturMaguntia for the masthead) may be added to `frontend/src/app/layout.tsx`
