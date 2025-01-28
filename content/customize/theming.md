---
layout: home
title: Tailwind CSS Theming - Flowbite
description: Use the theming options from Tailwind CSS to set native CSS theme variables to add new colors, fonts, spacings and create new utility classes to customize your project
group: customize
toc: true

previous: Dark mode
previousLink: customize/dark-mode/
next: Colors
nextLink: customize/colors/
---

Since the release of Tailwind v4 the theming customization has been moved from the `tailwind.config.js` file to native CSS theme variables which brings allows your project to have a much more natural way of customizing colors, fonts, shadows, spacings, and more.

Here's an example of a modified CSS file that sets a custom set of colors and fonts:

```css
/* input.css file */

@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-200: #bfdbfe;
    --color-primary-300: #93c5fd;
    --color-primary-400: #60a5fa;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-primary-800: #1e40af;
    --color-primary-900: #1e3a8a;
    
    --font-sans: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-body: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';
}
```

These variables will now create a new color pallette called `primary` that can be used as your main brand color and the fonts that will now use `Inter` by default.

## Flowbite Plugin

Make sure that you also import the Flowbite plugin in your main CSS file:

```css
/* input.css file */

@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";
```

This will ensure that the pseudo styles for forms, checkboxes, tooltips, charts, and datatables will be applied.

## Theme structure

When you're adding a new color variable this will be available for all text, background, and border related colors. There are many more variable namespaces that you can use to customize the default utility classes from Tailwind CSS including for spacing, containers, fonts, sizing, and more.

You can read all of the configurable variable namespaces on the <a href="https://tailwindcss.com/docs/theme#theme-variable-namespaces" target="_blank" rel="nofollow">Tailwind CSS docs</a>.

### Breakpoints

You can customize the breakpoints at which the reponsive mobile-first utility classes are being targeted using the `--breakpoint-{size}` variable namespaces in your main CSS file:

```css
/* input.css */
@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
```

### Colors

Updating or adding new colors can be done by using the `--color-{name}` variable namespaces:

```css
/* input.css file */

@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-200: #bfdbfe;
    --color-primary-300: #93c5fd;
    --color-primary-400: #60a5fa;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-primary-800: #1e40af;
    --color-primary-900: #1e3a8a;
}
```

This introduces a list of colors attributed to the `primary` variable name, meaning that utility class names such as `text-primary-600` or `bg-primary-600` will now show your custom branded color when using Tailwind.

### Fonts

You can add your own font by extending the default Tailwind CSS configuration file

Make sure that you apply `antialiased` to the `<body>` tag of your document to enable font smoothing.

```javascript
tailwind.config = {
  theme: {
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    }
  }
}
```

### Spacing

Update the `spacing` key to set new values for the spacing utilities (such as paddings and margins).

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  }
}
```

## Customizing the theme

By default, the configuration file will set the base utility classes from FlowBite and Tailwind CSS. However, you can customize them by using the `extend` object.

### Extending

Use the `extend` object if you want to keep the values from the default settings but you want to extend them with your own.

For example, you can keep all of the default breakpoints, but you may want to add another larger one for the `screens` key.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      }
    }
  }
}
```

### Overriding

Alternatively, you can also completely override certain settings.

For example, the following code will override all of the `opacity` settings with your own.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    }
  }
}
```

Please read the official [Tailwind CSS Theming](https://tailwindcss.com/docs/theme) documentation if you want a full overview of the theming options.
