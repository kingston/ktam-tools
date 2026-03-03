---
'@ktam/lint-react': minor
---

Remove eslint-plugin-storybook from the default React ESLint configuration

The Storybook ESLint plugin is no longer bundled in the default React lint config. Projects that need Storybook linting should add `eslint-plugin-storybook` directly as a dependency and configure it in their own ESLint config.
