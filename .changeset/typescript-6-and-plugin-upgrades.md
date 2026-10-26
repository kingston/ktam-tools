---
"@ktam/lint-node": minor
"@ktam/lint-react": minor
---

Upgrade to TypeScript 6 and refresh lint/format plugins (breaking: peer dependency ranges raised).

- **Breaking:** the `typescript` peer dependency is now `^6.0.3` and the `prettier` peer dependency is now `^3.9.10`. TypeScript 6 defaults `types` to `[]`, so projects that rely on Node globals need `"types": ["node"]` in their `tsconfig.json`.
- **Breaking (`@ktam/lint-react`):** `prettier-plugin-astro` 0.14.1 → 1.1.2, which may reformat `.astro` files.
- `typescript-eslint` / `@typescript-eslint/*` 8.72.0, `eslint-plugin-import-x` 4.17.1, `eslint-plugin-perfectionist` 5.13.0, `@vitest/eslint-plugin` 1.6.28, `globals` 17.13.0.
- `@ktam/lint-react`: `eslint-plugin-better-tailwindcss` 4.10.0, `prettier-plugin-tailwindcss` 0.8.1.

ESLint stays on v9.
