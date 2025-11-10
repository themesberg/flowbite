---
layout: docs
title: Tailwind CSS Variables - Flowbite
description: Learn how to use the custom variables from Tailwind CSS to theme your project based on the additional theme variables provided by Flowbite
group: customize
toc: true

previous: Configuration
previousLink: customize/configuration/
next: Dark mode
nextLink: customize/dark-mode/
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

## Background color variables

Use these variables to set the colors for the background of elements:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    /* BACKGROUND COLOR VARIABLES */
    /* used for neutral colors */
    --color-neutral-primary-soft: var(--color-white);
    --color-neutral-primary: var(--color-white);
    --color-neutral-primary-medium: var(--color-white);
    --color-neutral-primary-strong: var(--color-white);
    --color-neutral-secondary-soft: var(--color-gray-50);
    --color-neutral-secondary: var(--color-gray-50);
    --color-neutral-secondary-medium: var(--color-gray-50);
    --color-neutral-secondary-strong: var(--color-gray-50);
    --color-neutral-secondary-strongest: var(--color-gray-50);
    --color-neutral-tertiary-soft: var(--color-gray-100);
    --color-neutral-tertiary: var(--color-gray-100);
    --color-neutral-tertiary-medium: var(--color-gray-100);
    --color-neutral-quaternary: var(--color-gray-200);
    --color-neutral-quaternary-medium: var(--color-gray-200);
    --color-gray: var(--color-gray-300);

    /* used for brand colors */
    --color-brand-softer: var(--color-blue-50);
    --color-brand-soft: var(--color-blue-100);
    --color-brand: var(--color-blue-700);
    --color-brand-medium: var(--color-blue-200);
    --color-brand-strong: var(--color-blue-800);

    /* used for status colors */
    --color-success-soft: var(--color-emerald-50);
    --color-success: var(--color-emerald-700);
    --color-success-medium: var(--color-emerald-100);
    --color-success-strong: var(--color-emerald-800);
    --color-danger-soft: var(--color-rose-50);
    --color-danger: var(--color-rose-700);
    --color-danger-medium: var(--color-rose-100);
    --color-danger-strong: var(--color-rose-800);
    --color-warning-soft: var(--color-orange-50);
    --color-warning: var(--color-orange-500);
    --color-warning-medium: var(--color-orange-100);
    --color-warning-strong: var(--color-orange-700);
    --color-dark-soft: var(--color-gray-800);
    --color-dark: var(--color-gray-800);
    --color-dark-strong: var(--color-gray-900);
    --color-disabled: var(--color-gray-100);
    --color-purple: var(--color-purple-500);
    --color-sky: var(--color-sky-500);
    --color-teal: var(--color-teal-600);
    --color-pink: var(--color-pink-600);
    --color-cyan: var(--color-cyan-500);
    --color-fuchsia: var(--color-fuchsia-600);
    --color-indigo: var(--color-indigo-600);
    --color-orange: var(--color-orange-400);
}
{{< /code >}}

## Border color variables

Use these variables to set the colors for the border of elements:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    /* BORDER COLOR VARIABLES */
    --color-buffer: var(--color-white);
    --color-buffer-medium: var(--color-white);
    --color-buffer-strong: var(--color-white);
    --color-muted: var(--color-gray-50);
    --color-light-subtle: var(--color-gray-100);
    --color-light: var(--color-gray-100);
    --color-light-medium: var(--color-gray-100);
    --color-default-subtle: var(--color-gray-200);
    --color-default: var(--color-gray-200);
    --color-default-medium: var(--color-gray-200);
    --color-default-strong: var(--color-gray-200);

    /* used for status colors */
    --color-success-subtle: var(--color-emerald-200);
    --color-danger-subtle: var(--color-rose-200);
    --color-warning-subtle: var(--color-orange-200);
    --color-brand-subtle: var(--color-blue-200);
    --color-brand-light: var(--color-blue-600);
    --color-dark-subtle: var(--color-gray-800);
    --color-dark-backdrop: var(--color-gray-950);
}
{{< /code >}}

## Font family variables

Use these variables to set the font families for the text of elements:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    --font-sans: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-body: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';
}
{{< /code >}}

## Border radius variables

Use these variables to set the border radius of elements:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
    /* BORDER RADIUS VARIABLES */
    --radius-0: 0px;
    --radius-xxs: 2px;
    --radius-xs: 4px;
    --radius-sm: 6px;
    --radius: 8px;
    --radius-base: 12px;
    --radius-lg: 16px;
}
{{< /code >}}
