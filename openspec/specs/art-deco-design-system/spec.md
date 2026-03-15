## ADDED Requirements

### Requirement: CSS design tokens define the Art Deco aesthetic
The system SHALL provide `frontend/components/art-deco/art-deco.tokens.css` with all design tokens under an `--ad-*` namespace, imported globally via the root layout.

Tokens SHALL include:
- `--ad-font-display`: Cormorant Garamond, for section titles and category headers
- `--ad-font-label`: Josefin Sans, for skill labels and all-caps display text
- `--ad-color-bg`: near-black section background (`#0d0d0d`)
- `--ad-color-gold`: gold accent for headings, rules, and ornaments (`#c9a84c`)
- `--ad-color-cream`: warm off-white for body text (`#f0e6cc`)
- `--ad-color-muted`: muted gold-brown for secondary labels (`#6b5f44`)
- `--ad-color-rule`: divider line colour (same as `--ad-color-gold`)
- `--ad-spacing-section`: vertical padding for the section
- `--ad-border-rule`: shorthand for ornamental rule lines

#### Scenario: Tokens are available globally
- **WHEN** `art-deco.tokens.css` is imported in the root layout
- **THEN** all `--ad-*` custom properties SHALL be available to any component via CSS cascade

#### Scenario: Art Deco tokens do not conflict with newspaper tokens
- **WHEN** both `newspaper.tokens.css` and `art-deco.tokens.css` are loaded
- **THEN** no `--ad-*` property SHALL share a name with any `--np-*` property, and neither namespace SHALL override the other

### Requirement: Art Deco fonts are loaded via next/font
The system SHALL add **Cormorant Garamond** and **Josefin Sans** to the root layout using `next/font/google`, exposed as CSS variables `--font-cormorant` and `--font-josefin`.

#### Scenario: Fonts load without FOUT
- **WHEN** any page renders
- **THEN** both fonts SHALL be self-hosted by Next.js with no flash of unstyled text

#### Scenario: Font variables are consumed by Art Deco tokens
- **WHEN** `--ad-font-display` and `--ad-font-label` are used in component styles
- **THEN** they SHALL resolve to Cormorant Garamond and Josefin Sans respectively
