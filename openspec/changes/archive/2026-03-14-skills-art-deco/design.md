## Context

The newspaper section established a warm off-white / near-black palette with heavy blackletter and serif type. The Art Deco section must feel like a distinct era — a deliberate visual shift that signals the story moving forward. Art Deco (1920s–30s) is characterised by: geometric precision, gold and black, strong vertical symmetry, all-caps lettering, ornamental but restrained decoration.

The section sits immediately below the newspaper hero on `page.tsx`. It must fill the viewport on arrival (like the hero above it), creating a "chapter break" feel as the visitor scrolls into it.

## Goals / Non-Goals

**Goals:**
- A full-viewport Art Deco skills section on the home page
- A new `--ad-*` CSS token namespace for the Art Deco palette, fonts, and ornamental values — completely isolated from `--np-*`
- Skills presented as a playbill / luxury programme: grouped by discipline, each group introduced with a category label, skills listed with weight and space
- Ornamental dividers between groups (CSS-drawn, using border patterns or pseudo-elements — no image assets)
- An introductory statement at the top: formal, first-person, confident
- The section is fully self-contained — future sections can follow without conflict

**Non-Goals:**
- Interactive filtering or hover animations (future change)
- Making skills data-driven from a CMS or config file (skills are hardcoded for now)
- Reusing Art Deco components outside this section
- The final definitive skill list (placeholder list will be used; easy to update)

## Decisions

### 1. Font choices — Cormorant Garamond + Josefin Sans

**Decision:**
- **Cormorant Garamond** (display, variable weight) for the section title, category headers, and ornamental numerals — elegant, high-contrast, with a historical formality that suits Art Deco
- **Josefin Sans** (geometric sans-serif, all-caps) for the individual skill labels — the classic Art Deco geometric sans, built for all-caps display use

Both loaded via `next/font/google` and added to the root layout alongside the existing Playfair/Unifraktur variables.

**Alternatives considered:**
- Poiret One: too decorative, low readability at body sizes
- Cinzel: too Roman/classical, not Art Deco enough
- Bebas Neue: all-caps only, limited flexibility

### 2. Palette — black, gold, cream

| Token | Value | Use |
|---|---|---|
| `--ad-color-bg` | `#0d0d0d` | Section background (near-black) |
| `--ad-color-gold` | `#c9a84c` | Headings, ornamental lines, accents |
| `--ad-color-cream` | `#f0e6cc` | Body / skill label text |
| `--ad-color-rule` | `#c9a84c` | Divider lines |
| `--ad-color-muted` | `#6b5f44` | Category sub-labels, secondary text |

The black background creates maximum contrast with the gold — the quintessential Art Deco combination. The cream text (not pure white) keeps it warm and period-appropriate.

### 3. Layout — centred playbill, not a grid

**Decision:** Skills are NOT displayed in a CSS Grid of cards. Instead:

```
[Section Title — Cormorant, large]
[Ornamental rule]
[Introductory statement — italic Cormorant]
[Double ornamental rule]

[Category Label — Josefin Sans, all-caps, spaced]
    ◆
[Skill]  ·  [Skill]  ·  [Skill]
    ◆
[Category Label]
[Skill]  ·  [Skill]  ·  [Skill]
...
```

All content is centre-aligned. Skills within a group are separated by middot (·) characters on a single line, or stacked vertically for fewer-item groups. Category dividers use a CSS-drawn ornamental line with a centred diamond glyph (◆).

### 4. Ornamental dividers — pure CSS, no images

**Decision:** Dividers are implemented as a `<hr>`-like element styled with:
- `border-top: 1px solid var(--ad-color-gold)`
- A `::before` pseudo-element containing `◆` centred over the line using absolute positioning

No SVG, no images. The diamond and the line are entirely CSS + Unicode.

### 5. Component structure

```
frontend/components/art-deco/
  art-deco.tokens.css

frontend/components/SkillsArtDeco/
  SkillsArtDeco.tsx
  SkillsArtDeco.module.css
```

The section is a single self-contained component. No sub-component barrel needed — the playbill layout doesn't have reusable primitives beyond what's in the CSS.

### 6. Skill groups (initial)

| Category | Skills |
|---|---|
| Languages | JavaScript, TypeScript, Python, Golang |
| Infrastructure | Docker, Kubernetes, Kafka, gRPC |
| Frontend | React, Next.js, CSS |
| Backend | Node.js, REST, GraphQL, PostgreSQL |

These are placeholders. The structure makes it trivial to update the list.

## Risks / Trade-offs

- **Dark section contrast with newspaper section** → The hard cut from warm cream to near-black is intentional and desirable — it's the "chapter break." No gradient or transition needed.
- **Cormorant readability at small sizes** → Cormorant is a display face with high contrast strokes, can get thin on low-DPI screens. Mitigation: use it only at large sizes (section title, category labels); body/skill text uses Josefin Sans.
- **Hardcoded skills** → Easy to update later. The component is structured so the skill groups are a plain data array at the top of the file.
