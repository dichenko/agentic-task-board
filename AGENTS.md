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

If any check fails:

fix the issue;
run the checks again;
report what failed and how it was fixed.
Testing rules
Add or update tests for every behavior change.
Keep existing tests passing.
Prefer simple API tests with Supertest.
Cover both success and basic error cases when relevant.
Pull request rules

Every pull request must include:

Summary
Changes
Validation
Risk
Notes

Keep PRs small. One task should usually produce one PR.

Review guidelines

When reviewing, focus on:

broken tests or missing tests;
accidental public API changes;
unnecessary dependencies;
unrelated rewrites;
unsafe Git operations;
missing validation;
unclear error handling.

Treat unrelated refactoring as a problem unless the task explicitly requested it.