## ADDED Requirements

### Requirement: Masthead component renders publication title
The system SHALL provide a `Masthead` React component that renders a centered publication title styled in the blackletter/display font.

Props:
- `title: string` — the publication name (e.g., the developer's name)
- `tagline?: string` — optional secondary line below the title

The masthead SHALL be separated from content below by a double horizontal rule.

#### Scenario: Masthead displays title in blackletter font
- **WHEN** `<Masthead title="Jane Doe" />` is rendered
- **THEN** the title text SHALL display in the `--np-font-masthead` font at a large display size (≥ 48px)

#### Scenario: Masthead renders optional tagline
- **WHEN** `<Masthead title="Jane Doe" tagline="Engineer & Maker" />` is rendered
- **THEN** the tagline SHALL appear below the title in a smaller serif font

#### Scenario: Masthead renders without tagline
- **WHEN** `<Masthead title="Jane Doe" />` is rendered with no tagline prop
- **THEN** no empty space or placeholder SHALL be visible below the title

### Requirement: IssueHeader component renders date and edition metadata
The system SHALL provide an `IssueHeader` React component that renders a horizontal bar with mock newspaper metadata.

Props:
- `date: string` — formatted date string (e.g., "Saturday, March 14, 2026")
- `edition: string` — edition label (e.g., "Vol. I, No. 42")
- `price?: string` — optional mock price (e.g., "Price: One Penny")

The bar SHALL sit between the masthead and the main headline, separated by thin rules above and below.

#### Scenario: IssueHeader displays all metadata
- **WHEN** `<IssueHeader date="Saturday, March 14, 2026" edition="Vol. I, No. 42" price="Price: One Penny" />` is rendered
- **THEN** the date, edition, and price SHALL all be visible, spaced across the bar width

#### Scenario: IssueHeader renders without price
- **WHEN** `<IssueHeader date="..." edition="..." />` is rendered with no price prop
- **THEN** the layout SHALL not break and no empty slot SHALL appear

### Requirement: Headline component renders bold editorial headline
The system SHALL provide a `Headline` React component that renders a prominent, bold article headline.

Props:
- `children: React.ReactNode` — the headline text
- `size?: "xl" | "lg" | "md"` — controls relative display size, defaults to `"xl"`
- `centered?: boolean` — if true, centers the text; defaults to `true`

The headline SHALL use `--np-font-body` at a large weight (700+), and be separated from body content below by a thin rule.

#### Scenario: Headline renders centered at xl by default
- **WHEN** `<Headline>The Software That Shapes the Future</Headline>` is rendered
- **THEN** the text SHALL be centered, in Playfair Display bold, and visually dominant

#### Scenario: Headline renders left-aligned when centered is false
- **WHEN** `<Headline centered={false} size="lg">Subheading Text</Headline>` is rendered
- **THEN** the text SHALL align to the left

### Requirement: ColumnLayout component renders multi-column text flow
The system SHALL provide a `ColumnLayout` React component that wraps its children in a CSS multi-column container.

Props:
- `columns?: 2 | 3` — number of columns, defaults to `2`
- `children: React.ReactNode`

The component SHALL use CSS `column-count` with `column-rule` styled using `--np-border-rule`. On viewports narrower than 640px, columns SHALL collapse to a single column.

#### Scenario: Content flows across two columns
- **WHEN** `<ColumnLayout columns={2}>...</ColumnLayout>` is rendered on a desktop viewport
- **THEN** content SHALL flow top-to-bottom across two equal columns separated by a vertical rule

#### Scenario: Columns collapse on mobile
- **WHEN** `<ColumnLayout columns={2}>...</ColumnLayout>` is rendered on a viewport < 640px wide
- **THEN** content SHALL display as a single full-width column with no column rule

### Requirement: DropCapParagraph component renders a paragraph with a styled drop cap
The system SHALL provide a `DropCapParagraph` React component that renders a `<p>` element where the first letter is styled as a drop cap using CSS `::first-letter`.

Props:
- `children: React.ReactNode` — paragraph text content

The drop cap SHALL be:
- Sized to span approximately 3 lines of body text
- Styled in `--np-font-body` bold
- Floated left with appropriate margin so text wraps correctly

#### Scenario: First letter displays as drop cap
- **WHEN** `<DropCapParagraph>Once upon a time...</DropCapParagraph>` is rendered
- **THEN** the letter "O" SHALL appear enlarged and floated left, with the remaining text wrapping beside it

#### Scenario: Component renders standard body text otherwise
- **WHEN** `<DropCapParagraph>` is rendered
- **THEN** all text after the first letter SHALL display in `--np-font-body` at normal body size with appropriate line height for readability
