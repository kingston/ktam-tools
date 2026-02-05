---
'@ktam/lint-react': minor
---

Add Tailwind CSS linting support via eslint-plugin-better-tailwindcss

- Added `generateReactEslintConfig()` and `generateAstroEslintConfig()` functions for customizable ESLint configurations
- Tailwind CSS linting is opt-in via the `tailwind` option with configurable `entryPoint` and `customClasses`
- Uses the `recommended` preset from eslint-plugin-better-tailwindcss with class ordering and line wrapping disabled (handled by prettier-plugin-tailwindcss)
