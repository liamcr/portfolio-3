## ADDED Requirements

### Requirement: Skills section fills the viewport on scroll-in
The `SkillsArtDeco` section SHALL use `min-height: 100svh`, ensuring it fills the screen when the user scrolls to it from the newspaper hero above.

#### Scenario: Section occupies full viewport height
- **WHEN** a user scrolls to the skills section on a desktop or mobile browser
- **THEN** the section SHALL fill the visible viewport, with content from the next section not visible until further scrolling

### Requirement: Skills section uses the Art Deco visual aesthetic
The section SHALL apply the `--ad-*` design tokens, producing a near-black background with gold accents and cream text — a clear visual departure from the newspaper section above it.

#### Scenario: Section renders with Art Deco styling
- **WHEN** the skills section renders
- **THEN** the background SHALL be `--ad-color-bg`, headings SHALL use `--ad-color-gold` in `--ad-font-display`, and skill labels SHALL use `--ad-font-label` in all-caps with `--ad-color-cream`

### Requirement: Skills section opens with a formal introductory statement
Below the section title, the section SHALL display a short formal introductory paragraph styled in italic Cormorant Garamond, centred, presenting the skills as a curated collection rather than a list.

The copy SHALL be: **"Every great structure begins with mastery of its materials. Presented here: the tools, languages, and disciplines acquired over years of deliberate practice."**

#### Scenario: Introductory statement is visible above skill groups
- **WHEN** the section renders
- **THEN** the intro statement SHALL appear beneath the section title and above the first skill group, in italic serif at a readable size

### Requirement: Skills are displayed in named groups with ornamental dividers
Skills SHALL be organised into discipline groups (e.g., Languages, Infrastructure, Frontend, Backend). Each group SHALL be:
- Preceded by its category name in `--ad-font-label` all-caps with wide letter-spacing
- Followed by the skill names on one or more lines, separated by centred middot (·) characters
- Separated from the next group by an ornamental CSS divider: a gold horizontal rule with a centred diamond glyph (◆) overlaid

#### Scenario: Each group has a labelled heading
- **WHEN** the section renders
- **THEN** each skill group SHALL display its category name visibly above its skills, in all-caps Josefin Sans

#### Scenario: Ornamental dividers separate groups
- **WHEN** the section renders with multiple skill groups
- **THEN** a gold horizontal rule with a centred ◆ glyph SHALL appear between each group

#### Scenario: Skills within a group are separated by middots
- **WHEN** a group has multiple skills on one line
- **THEN** each skill SHALL be separated from the next by a middot (·) character, with consistent spacing

### Requirement: All content is centre-aligned
Every element in the section — title, intro, category labels, skill names, dividers — SHALL be horizontally centred.

#### Scenario: Content is centred at all viewport widths
- **WHEN** the section renders on desktop or mobile
- **THEN** all text and divider elements SHALL be centre-aligned, with no left-aligned elements

### Requirement: Skills section is appended to the home page
The `SkillsArtDeco` component SHALL be rendered as the second section in `frontend/app/page.tsx`, directly below `<HomeNewspaperHero />`.

#### Scenario: Skills section appears on scroll from the hero
- **WHEN** a user visits `/` and scrolls past the newspaper hero
- **THEN** the Art Deco skills section SHALL be the next content visible
