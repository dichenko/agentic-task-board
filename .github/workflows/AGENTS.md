# Agent instructions

This is a TypeScript Express API training project.

## Project context

The project is a small backend API built with:
- TypeScript
- Express
- Vitest
- Supertest
- Docker
- GitHub Actions

The goal is to practice industrial agentic development:
issue → branch/worktree → focused change → tests → draft PR → review → merge.

## Development rules

- Start every task from the latest `main`.
- Work in a separate branch or worktree.
- Keep changes small and focused.
- Do not commit directly to `main`.
- Do not merge pull requests.
- Create draft pull requests by default.
- Use force push only on your own feature/fix branches, never on `main`.
- Do not rewrite project architecture unless explicitly requested.
- Do not introduce new dependencies unless strictly necessary.
- Do not add a database unless explicitly requested.
- Do not add authentication unless explicitly requested.
- Do not change public API behavior unless the task requires it.

## Validation

Before finishing a task, run:

```bash
npm run lint
npm test
npm run build