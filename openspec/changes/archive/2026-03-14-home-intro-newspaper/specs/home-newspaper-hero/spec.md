## ADDED Requirements

### Requirement: Home page opens with a full-viewport newspaper hero section
The home page SHALL render a newspaper-styled hero section as its first and topmost section. The section SHALL occupy the full viewport height (`min-height: 100svh`) so it fills the screen on load without showing content from sections below.

#### Scenario: Hero fills the viewport on load
- **WHEN** a user visits `/` on a desktop or mobile browser
- **THEN** the newspaper hero section SHALL fill the visible viewport, with no content from below visible until the user scrolls

#### Scenario: Hero is visually styled as an Old English newspaper front page
- **WHEN** the hero section renders
- **THEN** it SHALL use the newspaper design tokens (`--np-*`), Playfair Display for body/headline, and UnifrakturMaguntia for the masthead title — producing a warm off-white paper background with near-black ink

### Requirement: Hero masthead displays the developer's name as publication title
The hero SHALL include a `Masthead` component showing the developer's name as the publication title, with a tagline that hints at the narrative journey ahead.

#### Scenario: Masthead renders name and tagline
- **WHEN** the hero section renders
- **THEN** the masthead SHALL display the developer's name in blackletter font and a tagline in small-caps italic serif beneath it

### Requirement: Hero includes an IssueHeader with editorial metadata
The hero SHALL include an `IssueHeader` component with a mock date, edition label, and teaser price field, styled as a newspaper issue line.

#### Scenario: Issue header renders three metadata fields
- **WHEN** the hero renders
- **THEN** the date, edition, and price/tagline fields SHALL all be visible, spaced across the issue header bar

### Requirement: Hero headline is framed as breaking news
The hero SHALL include a `Headline` component whose copy frames the developer as a news subject — bold, playful, self-aware — rather than a conventional "Hi, I'm [Name]" introduction.

The headline copy SHALL be: **"Local Engineer Refuses to Choose Between Foundation and the Future."**

#### Scenario: Headline reads as a newspaper front-page story
- **WHEN** the hero renders
- **THEN** the headline SHALL display prominently in Playfair Display bold at `xl` size, centered, styled as the lead story of the issue

### Requirement: Hero lede paragraph introduces the developer and teases the journey
Below the headline, the hero SHALL include a `DropCapParagraph` (lede) that:
- Introduces who the developer is in one to two sentences
- Teases the scrolling journey the visitor is about to take — without spelling it out literally
- Maintains the newspaper voice: third person, editorial, slightly wry

#### Scenario: Lede renders with drop cap and editorial copy
- **WHEN** the hero renders
- **THEN** the lede paragraph SHALL open with a large drop cap and contain copy that introduces the developer and hints at the story unfolding below

### Requirement: Hero includes a scroll cue at the bottom of the viewport
The hero section SHALL display a subtle scroll invitation at the bottom of the viewport — typeset in small-caps serif, using a downward arrow glyph (↓) and a short phrase such as "Continue Reading".

The scroll cue SHALL be positioned at the very bottom of the full-viewport section, visually anchored there regardless of content height above.

#### Scenario: Scroll cue is visible at the base of the viewport
- **WHEN** a user loads `/` and has not yet scrolled
- **THEN** the scroll cue SHALL be visible at the bottom of the screen, clearly inviting further scrolling

#### Scenario: Scroll cue does not push content or create overflow
- **WHEN** the viewport is shorter than the hero content
- **THEN** the scroll cue SHALL remain at the bottom of the section without overlapping the lede or causing horizontal scroll
