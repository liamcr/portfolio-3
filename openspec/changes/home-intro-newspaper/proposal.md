## Why

The home page is currently a placeholder. This change introduces the first meaningful section of the site — a newspaper-styled introductory hero that opens the developer's story. It is the first chapter in a multi-section narrative that will unfold as the visitor scrolls, each section representing a different era of the developer's growth.

## What Changes

- Replace the placeholder `frontend/app/page.tsx` with a structured home page containing a first section: the newspaper-era hero
- Reuse the existing newspaper design system (`frontend/components/newspaper/`) and its tokens, fonts, and components — no new design primitives required
- The hero section presents the developer's story opening: a bold editorial headline, a short lede paragraph, and a scroll invitation — all in the Old English newspaper aesthetic

## Capabilities

### New Capabilities

- `home-newspaper-hero`: The introductory hero section of the home page, styled using the newspaper design system, featuring a headline, lede, and scroll cue

### Modified Capabilities

- `hello-world-page`: The existing home page spec requires updating — the page is no longer a hello-world placeholder but the entry point to a multi-section narrative

## Impact

- `frontend/app/page.tsx` is replaced (currently just "Hello world")
- Imports `Masthead`, `IssueHeader`, `Headline`, `DropCapParagraph` from the existing `frontend/components/newspaper/` barrel
- Imports `newspaper.tokens.css` and the `UnifrakturMaguntia` / `Playfair Display` fonts — these are already loaded inside `frontend/app/newspaper/layout.tsx` but need to be made available at the root layout level too, or the hero needs its own font/token wrapper
- No new dependencies
