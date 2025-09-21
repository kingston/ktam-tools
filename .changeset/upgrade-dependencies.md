---
"@ktam/lint-node": minor
"@ktam/lint-react": minor
"@ktam/tools-sample-astro": minor
"@ktam/tools-sample-node": minor
"@ktam/tools-sample-react": minor
---

Upgrade to Node.js 22 and latest dependencies

This release upgrades the minimum Node.js version requirement from 20 to 22 and updates all dependencies to their latest versions. Key changes include:

- **Node.js**: Upgraded minimum version from 20 to 22 (Volta pinned to 22.19.0)
- **Package manager**: Updated pnpm from 10.6.5 to 10.17.0
- **TypeScript**: Now using catalog version (5.8.2) for consistency
- **ESLint**: Updated ESLint to 9.36.0
- **Linting tools**: Updated ESLint plugins and TypeScript ESLint to latest versions
- **Build tools**: Updated Astro, Vite, and other build dependencies
- **Configuration**: Migrated from .node-version/.npmrc to mise.toml for better tool management

All packages maintain backward compatibility while requiring the newer Node.js runtime.
