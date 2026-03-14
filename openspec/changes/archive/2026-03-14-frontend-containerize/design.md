## Context

The project currently has all Next.js files at the root. As the project grows (e.g., adding a backend, infra configs, scripts), a flat root becomes messy. Moving the frontend into its own subdirectory and adding Docker + Makefile support establishes a clean monorepo-style layout from the start.

## Goals / Non-Goals

**Goals:**
- Relocate all Next.js code under `frontend/`
- Add a `frontend/Dockerfile` that produces a working, containerized Next.js app
- Add a root `Makefile` with a `run` target that builds and starts the container
- Keep the app behavior identical — no UI or logic changes

**Non-Goals:**
- No CI/CD pipeline changes
- No multi-stage Docker Compose setup
- No backend or API services added
- No changes to the app's functionality or routing

## Decisions

### Directory structure
Move all Next.js files into `frontend/`:
```
frontend/
  app/
  public/
  package.json
  package-lock.json
  next.config.ts
  tsconfig.json
  postcss.config.mjs
  eslint.config.mjs
  next-env.d.ts
  Dockerfile
Makefile
```
**Rationale**: Keeps infra and future services at the root level, frontend isolated. Standard monorepo convention.

### Dockerfile approach: multi-stage build
Use a multi-stage `Dockerfile` with a build stage (Node) and a lean production runner using `node:alpine`. This follows the official Next.js Docker example.
- Stage 1: install deps + build (`next build`)
- Stage 2: copy `.next/standalone` output + serve with `node server.js`

**Requires** `output: 'standalone'` in `next.config.ts`.

**Rationale**: Minimal final image size; no dev dependencies in production container.

### Makefile target: `run`
```makefile
run:
    docker build -t portfolio-frontend ./frontend
    docker run -p 3000:3000 portfolio-frontend
```
Simple, no Docker Compose needed at this stage.

**Rationale**: Single command to get the app running locally from a clean state.

## Risks / Trade-offs

- **`.claude/launch.json` path drift** → Update the dev server path to `frontend/` so preview still works.
- **`next-env.d.ts` is auto-generated** → Should remain in `.gitignore`; will be re-generated inside `frontend/` on first `next dev` run.
- **Standalone output size** → Slightly larger than minimal, but necessary for the self-contained server binary.

## Migration Plan

1. Create `frontend/` directory
2. Move all Next.js files into it
3. Add `output: 'standalone'` to `next.config.ts`
4. Add `frontend/Dockerfile`
5. Add root `Makefile`
6. Update `.claude/launch.json` paths
7. Verify `npm run dev` works from `frontend/`
8. Verify `make run` builds and serves correctly
