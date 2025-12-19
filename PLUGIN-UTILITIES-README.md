# Flowbite Tailwind CSS v4 Utilities Plugin

This plugin adds utility class generation for Flowbite's custom color variables in Tailwind CSS v4.

## The Problem

In Tailwind CSS v4, CSS custom properties defined in `@theme` blocks are **not automatically converted to utility classes**. This means that even though Flowbite defines colors like `--color-success-medium`, `--color-brand-strong`, etc. in its theme files, classes like `bg-success-medium` or `bg-brand-strong` don't get generated automatically.

## The Solution

This plugin explicitly generates all the utility classes needed for Flowbite's custom colors, including:

- Background colors (`bg-*`)
- Text colors (`text-*`)
- Border colors (`border-*`)
- Ring colors (`ring-*`)

### Supported Color Variants

**Success colors:**
- `success-soft`, `success`, `success-medium`, `success-strong`

**Danger colors:**
- `danger-soft`, `danger`, `danger-medium`, `danger-strong`

**Warning colors:**
- `warning-soft`, `warning`, `warning-medium`, `warning-strong`

**Dark colors:**
- `dark-soft`, `dark`, `dark-strong`, `disabled`

**Brand colors:**
- `brand-softer`, `brand-soft`, `brand`, `brand-medium`, `brand-strong`

**Single colors:**
- `purple`, `sky`, `teal`, `pink`, `cyan`, `fuchsia`, `indigo`, `orange`

**Semantic text colors:**
- `fg-brand-subtle`, `fg-brand`, `fg-brand-strong`
- `fg-success`, `fg-success-strong`
- `fg-danger`, `fg-danger-strong`
- `fg-warning`, `fg-warning-subtle`
- `fg-purple`, `fg-cyan`, `fg-indigo`, `fg-pink`

## Usage

### 1. Install Flowbite

```bash
npm install flowbite
```

### 2. Add the Plugin to Your CSS

In your main CSS file (e.g., `app.css`):

```css
@import "tailwindcss";
@import "flowbite/src/themes/default";

@plugin "flowbite/plugin";
@plugin "flowbite/plugin-utilities";  /* Add this line */
@plugin "flowbite-typography";

@source "../node_modules/flowbite";
```

### 3. Use the Utilities

Now you can use all Flowbite color utilities in your HTML/Svelte files:

```html
<!-- Background colors -->
<div class="bg-success-medium">Success!</div>
<div class="bg-danger-strong">Error!</div>
<div class="bg-brand-soft">Brand</div>

<!-- Text colors -->
<p class="text-warning-strong">Warning text</p>
<p class="text-fg-brand-strong">Brand text</p>

<!-- Border colors -->
<div class="border border-success-soft">Bordered</div>

<!-- Ring colors -->
<button class="ring-2 ring-brand-subtle">Button</button>
```

## Why This Plugin is Necessary

### Tailwind CSS v3 vs v4

In Tailwind v3, you could define colors in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'success-medium': 'var(--color-emerald-100)',
      }
    }
  }
}
```

And Tailwind would automatically generate `bg-success-medium`, `text-success-medium`, etc.

In Tailwind v4 with the new `@import "tailwindcss"` syntax:
- CSS custom properties in `@theme` are available for direct CSS usage
- But utilities are **NOT** automatically generated
- You must explicitly create them using plugins like this one

## For Flowbite Contributors

If you're maintaining the Flowbite library, consider:

1. **Including this plugin by default** in Flowbite v4+ to ensure all color utilities work out of the box
2. **Documenting the Tailwind v4 migration** and explaining which colors require this plugin
3. **Adding tests** to ensure all utility classes are generated correctly

## License

MIT - Same as Flowbite
