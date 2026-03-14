## Why

The project needs a clear separation between the frontend application and future infrastructure concerns, and a simple way to build and run the app in a container for consistent local development and deployment.

## What Changes

- Move all Next.js source code (app, public, config files, package files) into a `frontend/` subdirectory
- Add a `Dockerfile` at the `frontend/` level to containerize the Next.js app
- Add a `Makefile` at the project root with a `run` (or `up`) target to build and start the container

## Capabilities

### New Capabilities
- `frontend-subdirectory`: Next.js app code lives under `frontend/`, cleanly separated from root-level project config and future backend/infra code
- `docker-containerization`: A Dockerfile that builds and serves the Next.js app in a production-ready container
- `makefile-runner`: A Makefile with a command to build and spin up the Docker container locally

### Modified Capabilities
<!-- None — no existing spec-level behavior is changing -->

## Impact

- All Next.js files move: `app/`, `public/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`
- `.claude/launch.json` may need its paths updated to reflect the new `frontend/` location
- No changes to application behavior or UI
