## ADDED Requirements

### Requirement: Next.js source lives under frontend/
All Next.js application files SHALL reside within a `frontend/` subdirectory at the project root. No Next.js source files SHALL exist at the project root level.

#### Scenario: Frontend directory exists
- **WHEN** a developer clones the repository
- **THEN** a `frontend/` directory SHALL exist containing `app/`, `public/`, `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, and `eslint.config.mjs`

#### Scenario: Dev server runs from frontend directory
- **WHEN** a developer runs `npm run dev` from within `frontend/`
- **THEN** the Next.js development server SHALL start successfully and serve the app on port 3000
