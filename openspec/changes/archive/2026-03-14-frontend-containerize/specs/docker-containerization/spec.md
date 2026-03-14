## ADDED Requirements

### Requirement: Dockerfile builds a production Next.js container
A `Dockerfile` SHALL exist within `frontend/` that produces a runnable, production-ready container image for the Next.js application using a multi-stage build.

#### Scenario: Docker image builds successfully
- **WHEN** `docker build` is run targeting `frontend/Dockerfile`
- **THEN** the image SHALL build without errors and produce a runnable image

#### Scenario: Container serves the app
- **WHEN** a container is started from the built image with port 3000 exposed
- **THEN** the Next.js app SHALL be accessible at `http://localhost:3000` and render the Hello World page

### Requirement: Next.js standalone output enabled
The `next.config.ts` SHALL include `output: 'standalone'` so the Dockerfile can use the self-contained server output.

#### Scenario: Standalone output is configured
- **WHEN** `next build` is run inside `frontend/`
- **THEN** a `.next/standalone/` directory SHALL be produced containing a self-contained `server.js`
