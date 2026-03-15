## MODIFIED Requirements

### Requirement: Home page renders Hello world
The home page at `/` SHALL no longer display "Hello world" placeholder text. It SHALL instead render a structured, multi-section narrative page. The first section is the newspaper-era hero; subsequent sections will be added in future changes.

#### Scenario: Visiting the root path
- **WHEN** a user navigates to `/`
- **THEN** the page SHALL display the newspaper hero section as the first visible content, and SHALL NOT display the text "Hello world"
