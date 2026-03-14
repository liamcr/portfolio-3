## 1. Restructure: Move Next.js files into frontend/

- [x] 1.1 Create the `frontend/` directory at the project root
- [x] 1.2 Move `app/`, `public/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, and `next-env.d.ts` into `frontend/`
- [x] 1.3 Update `.gitignore` to reflect the new paths (e.g. `frontend/node_modules`, `frontend/.next`)
- [x] 1.4 Update `.claude/launch.json` dev server path to point to `frontend/`
- [x] 1.5 Verify `npm run dev` works correctly from within `frontend/`

## 2. Configure Next.js for Standalone Output

- [x] 2.1 Add `output: 'standalone'` to `frontend/next.config.ts`
- [x] 2.2 Verify `npm run build` inside `frontend/` produces a `.next/standalone/` directory

## 3. Add Dockerfile

- [x] 3.1 Create `frontend/Dockerfile` with a multi-stage build (install/build stage + lean runtime stage using `node:alpine`)
- [x] 3.2 Verify `docker build -t portfolio-frontend ./frontend` completes without errors
- [x] 3.3 Verify `docker run -p 3000:3000 portfolio-frontend` serves the app at `http://localhost:3000`

## 4. Add Makefile

- [x] 4.1 Create a `Makefile` at the project root with a `run` target that builds and starts the container
- [x] 4.2 Verify `make run` from the project root builds the image and starts the container successfully
