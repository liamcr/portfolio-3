## ADDED Requirements

### Requirement: /newspaper route exists and is accessible
The system SHALL expose a `/newspaper` route in the Next.js app that renders the newspaper example layout.

#### Scenario: Route is accessible
- **WHEN** a user navigates to `/newspaper`
- **THEN** the page SHALL render with a 200 status and display the newspaper layout

#### Scenario: Route has no navigation chrome from other pages
- **WHEN** the `/newspaper` page renders
- **THEN** it SHALL use a dedicated layout (`frontend/src/app/newspaper/layout.tsx`) that imports the design tokens and fonts, and does not inherit global navigation elements unless intentionally included

### Requirement: /newspaper page composes all newspaper components into a complete layout
The `/newspaper` page SHALL use all five components (`Masthead`, `IssueHeader`, `Headline`, `ColumnLayout`, `DropCapParagraph`) in a layout that reads as a convincing Old English newspaper front page.

Layout order (top to bottom):
1. `Masthead` — developer's name as publication title, with a short tagline
2. `IssueHeader` — mock date, edition number, and price
3. `Headline` — a bold main headline relevant to the developer (e.g., name + profession)
4. `ColumnLayout` (2–3 columns) containing:
   - First column opens with `DropCapParagraph` — a short bio or about paragraph
   - Remaining columns contain additional paragraphs (standard `<p>` tags or a `Subheadline` variant)

#### Scenario: Page renders complete newspaper layout
- **WHEN** a user visits `/newspaper`
- **THEN** they SHALL see, in order: masthead, issue header, main headline, and a multi-column body section with a drop cap opening the first paragraph

#### Scenario: Page content is relevant to the developer
- **WHEN** the page renders
- **THEN** the placeholder content SHALL reference the developer (name, skills, or projects) rather than generic Lorem Ipsum

### Requirement: /newspaper page applies newspaper design tokens to its background
The `/newspaper` layout or page wrapper SHALL set the page background to `--np-color-paper` and the default text color to `--np-color-ink`.

#### Scenario: Page has aged-newsprint background
- **WHEN** the `/newspaper` page renders
- **THEN** the entire viewport background SHALL be the warm off-white paper color (`--np-color-paper`) and body text SHALL be near-black (`--np-color-ink`)
