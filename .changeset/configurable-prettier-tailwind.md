---
"@ktam/lint-react": minor
---

Add configurable Prettier Tailwind support

### New Generator Functions

Added `generatePrettierReactConfig` and `generatePrettierAstroConfig` functions that allow customizing Tailwind CSS settings:

```js
import { generatePrettierReactConfig } from '@ktam/lint-react/prettier';

export default generatePrettierReactConfig({
  tailwind: false, // Disable Tailwind support
  tailwindStylesheet: './styles/main.css', // Custom stylesheet path
  tailwindFunctions: ['clsx', 'cn', 'cva'], // Functions to sort classes in
});
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `tailwind` | `boolean` | `true` | Enable/disable Tailwind CSS plugin |
| `tailwindStylesheet` | `string` | `'./src/styles.css'` | Path to Tailwind CSS stylesheet (for v4+) |
| `tailwindFunctions` | `string[]` | `['clsx', 'cn', 'cva']` | Functions to sort Tailwind classes in |

### Backward Compatible

Existing usage continues to work unchanged:

```js
export { default } from '@ktam/lint-react/prettier';
```
