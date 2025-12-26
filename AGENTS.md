# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Next.js App Router entry points (`layout.tsx`, `page.tsx`) plus global and theme CSS.
- `components/` holds UI building blocks; `components/ui/` contains Radix-based primitives, while feature components such as `CodeCard.tsx` and `ExpiredCodesTable.tsx` live at the root.
- `data/codes.json` stores the live/expired code catalog; update it atomically to avoid merge churn.
- `lib/utils.ts` exposes small helpers (e.g., `cn` for class merging).
- `public/` serves static assets; `docs/` holds reference notes and SEO documents.

## Build, Test, and Development Commands
- Install deps once per clone: `npm install` (prefer npm to keep `package-lock.json` the source of truth; do not regenerate both lockfiles).
- Local dev with hot reload: `npm run dev` (Next.js; defaults to http://localhost:3000).
- Production bundle check: `npm run build`.
- Static lint pass: `npm run lint` (must be clean before opening a PR).
- Serve built output: `npm run start` (after `npm run build`).

## Coding Style & Naming Conventions
- Language: TypeScript + React 19; prefer functional components and hooks.
- Styling: Tailwind CSS 4.x; compose classes via the `cn` helper instead of string concatenation. Keep component-level styles in `app/globals.css`/`app/theme.css` only if shared.
- Naming: PascalCase for components (`Header.tsx`), camelCase for variables/hooks (`useCodes`), kebab-case for assets in `public/`.
- Indentation: 2 spaces; keep imports sorted by third-party → internal → relative when practical.

## Testing Guidelines
- No automated test suite yet; at minimum run `npm run lint` and smoke the homepage after data changes.
- When adding tests, colocate them with the feature or create a `__tests__` folder near the module; prefer React Testing Library for components and Playwright for e2e if introduced later.
- Keep code/data updates reversible: small commits, descriptive diffs, and validate JSON structure before committing.

## Commit & Pull Request Guidelines
- Commit messages are short, present-tense summaries (recent history uses concise Chinese verbs, e.g., `更新11月code`); mirror that style with clear scope and ≤72-char subject lines.
- One logical change per commit: code updates, data refresh, or docs edit—avoid bundling.
- PRs should include: what changed, why it matters, how to verify (commands or screenshots for UI), and any data sources for new codes.
- Run `npm run lint` before submitting; link issues when applicable and request review for UI-affecting changes.

## Security & Configuration Notes
- Store secrets (API keys, tokens) only in untracked `.env.local`; never commit secrets to Git.
- If adding new env vars, document them in the PR description and guard access with optional chaining to avoid runtime crashes during static rendering.
