---
layout: docs
title: Tailwind CSS Variables - Flowbite
description: Learn how to use the custom variables from Tailwind CSS to theme your project based on the additional theme variables provided by Flowbite
toc: true

previous: Dark mode
previousLink: customize/dark-mode/
next: Colors
nextLink: customize/colors/
---

Since the `v4` release of Flowbite we introduced five new themes: modern, minimal, enterprise, playful, and mono. These themes are available as CSS variables that can be used to customize the default theme of Flowbite with the least amount of color variables.

On this page you will learn the breakdown of the CSS variables that are available for each theme. These are primarily color variables, but also include some other variables that are used to customize the default theme of Flowbite.

## Color variables

Almost all of the custom variables from Flowbite are colors and can be used to customize the default theme.

Here's a short breakdown of the terminology of the color variables:

- `color-brand-{level}-{accent}`: one or more brand colors to represent the brand
- `color-neutral-{level}-{accent}`: neutral colors to represent the gray colors
- `color-fg-{type}-{level}-{accent}`: foreground colors to represent the text colors
- `color-{status}-{accent}`: status colors to represent the different states (eg. warning, success etc.)

The `level` placeholder is either blank or it can be `primary`, `secondary`, `tertiary`, `quauternary` which are used to represent the different levels of the color based on importance.

The `accent` placeholder is either blank or it can be `soft`, `subtle`, `medium`, `strong` which are used to represent the different levels of the color based on the amount of color.

The `type` placeholder is usually the main color type such as `brand`, `neutral`, `warning` etc.

Here's the full list of the brand variables:

## Text color variables

This is the full list of color variables that are used for text colors:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    /* main text color */
    --color-body: var(--color-stone-600);
    --color-body-subtle: var(--color-stone-500);

    /* text heading colors */
    --color-heading: var(--color-stone-900);

    /* used for custom brand colors */
    --color-fg-brand-subtle: var(--color-stone-200);
    --color-fg-brand: var(--color-stone-950);
    --color-fg-brand-strong: var(--color-stone-900);

    /* used for status colors */
    --color-fg-success: var(--color-green-700);
    --color-fg-success-strong: var(--color-green-900);
    --color-fg-danger: var(--color-red-700);
    --color-fg-danger-strong: var(--color-red-900);
    --color-fg-warning-subtle: var(--color-orange-600);
    --color-fg-warning: var(--color-orange-900);
    --color-fg-yellow: var(--color-yellow-400);
    --color-fg-disabled: var(--color-stone-400);
    --color-fg-purple: var(--color-purple-600);
    --color-fg-cyan: var(--color-cyan-600);
    --color-fg-indigo: var(--color-indigo-600);
    --color-fg-pink: var(--color-pink-600);
    --color-fg-lime: var(--color-lime-600);
}
{{< /code >}}

These variables will now create a new color pallette called `primary` that can be used as your main brand color and the fonts that will now use `Inter` by default.

## Flowbite Plugin

After installing Flowbite, make sure that you also import the Flowbite plugin in your main CSS file:

{{< code lang="css" file="main.css" icon="file" >}}
/* input.css file */
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";
{{< /code >}}

This will ensure that the pseudo styles for forms, checkboxes, tooltips, charts, and datatables will be applied.

## Theme options

The best way to understand how theming works with Tailwind CSS is for example when you're adding a new color variable this will be available for all text, background, and border related colors. Basically the newly added color will propagate into all of the available utility classes.

There are many more variable namespaces that you can use to customize the default utility classes from Tailwind CSS including for spacing, containers, fonts, sizing, and more.

### Colors

Updating or adding new colors can be done by using the `--color-{name}` variable namespaces:

{{< code lang="css" file="main.css" icon="file" >}}
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
{{< /code >}}

This introduces a list of colors attributed to the `primary` variable name, meaning that utility class names such as `text-primary-600` or `bg-primary-600` will now show your custom branded color when using Tailwind.

### Fonts

You can add your own fonts by updating the `--font-body` variable in your CSS file.

{{< code lang="css" file="main.css" icon="file" >}}
/* input.css file */
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    --font-sans: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-body: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';
}
{{< /code >}}

Make sure that you apply `antialiased` to the `<body>` tag of your document to enable font smoothing.

### Spacing

Use the `spacing-{name}` variable namespace to set spacing values to utility class names used for setting widths, heights, paddings, margins, and more.

{{< code lang="css" file="main.css" icon="file" >}}
/* input.css file */
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
   --spacing-custom: 10px;
}
{{< /code >}}

### Breakpoints

You can customize the breakpoints at which the reponsive mobile-first utility classes are being targeted using the `--breakpoint-{size}` variable namespaces in your main CSS file:

{{< code lang="css" file="main.css" icon="file" >}}
/* input.css file */
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
{{< /code >}}

This will make `p-custom` or `w-custom` have the value of `10px` as explained above.

## Reference

You can read all of the configurable variable namespaces on the <a href="https://tailwindcss.com/docs/theme#theme-variable-namespaces" target="_blank" rel="nofollow">Tailwind CSS docs</a>.