## ADDED Requirements

### Requirement: CSS design tokens define the newspaper aesthetic
The system SHALL provide a CSS custom properties file (`newspaper.tokens.css`) that defines all design tokens for the newspaper section under a `--np-*` namespace.

Tokens SHALL include:
- `--np-font-body`: serif font family for body text and headlines
- `--np-font-masthead`: blackletter/display font family for the masthead title
- `--np-color-ink`: primary text/border color (`#000000` or equivalent near-black)
- `--np-color-paper`: background color (`#f5f0e8` warm off-white, like aged newsprint)
- `--np-color-rule`: color for column divider lines (same as `--np-color-ink`)
- `--np-spacing-column-gap`: gap between columns
- `--np-border-rule`: shorthand border for column rules (e.g., `1px solid var(--np-color-rule)`)

#### Scenario: Tokens are available within the newspaper layout
- **WHEN** `newspaper.tokens.css` is imported in the newspaper layout
- **THEN** all `--np-*` custom properties SHALL be available to all child components via CSS cascade

#### Scenario: Tokens do not affect pages outside the newspaper section
- **WHEN** a user visits any route other than `/newspaper`
- **THEN** no `--np-*` styles SHALL affect those pages' appearance

### Requirement: Serif and blackletter fonts are loaded via next/font
The system SHALL load two Google Fonts using `next/font/google`:
- **Playfair Display** for body, headlines, and drop caps
- **UnifrakturMaguntia** for the masthead title only

Both fonts SHALL be exposed as CSS variables (`--font-playfair`, `--font-unifraktur`) on the `<html>` element or the newspaper layout wrapper.

#### Scenario: Fonts load without FOUT
- **WHEN** the `/newspaper` page renders
- **THEN** the serif and blackletter fonts SHALL be self-hosted by Next.js with no flash of unstyled text

#### Scenario: Font variables are consumed by tokens
- **WHEN** `--np-font-body` and `--np-font-masthead` are used in component styles
- **THEN** they SHALL resolve to the correct loaded font families
