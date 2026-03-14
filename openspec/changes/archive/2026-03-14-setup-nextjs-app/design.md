## Context

Greenfield Next.js setup. No existing application code exists — this establishes the project foundation. The portfolio site will use Next.js 14+ with the App Router, TypeScript, and Tailwind CSS.

## Goals / Non-Goals

**Goals:**
- Scaffold a working Next.js application with App Router
- Render a single home page displaying "Hello world"
- Configure TypeScript and Tailwind CSS as defaults

**Non-Goals:**
- Any content beyond the "Hello world" page
- Authentication, data fetching, or API routes
- Deployment configuration

## Decisions

**App Router over Pages Router**
Next.js recommends the App Router for all new projects. It provides improved layouts, server components, and streaming by default.

**TypeScript enabled**
TypeScript is the standard for maintainable Next.js projects. All files will use `.ts`/`.tsx` extensions.

**Tailwind CSS included**
Tailwind is the most common utility-first CSS approach for Next.js projects. It is included from the start so future styling work has a consistent foundation.

**`create-next-app` bootstrap**
Using the official CLI bootstrapper ensures the project follows canonical Next.js conventions and includes all required configuration files out of the box.

## Risks / Trade-offs

- **Tailwind adds dependency weight** → Acceptable; it will be used for all future styling
- **App Router is newer** → Well-supported and the official recommendation since Next.js 13
