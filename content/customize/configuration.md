---
layout: docs
title: Tailwind CSS Configuration - Flowbite
description: Learn how to customize the default Flowbite and Tailwind CSS options and styles
group: customize
toc: true

previous: HUGO
previousLink: getting-started/hugo/
next: Variables
nextLink: customize/variables/
---

Since the release of Tailwind v4, the configuration file that you've previously used to set options has now been moved to your main CSS file where you can import modules, plugins, set new variables like colors and fonts, set the custom source files, and more.

Before continuing, please make sure that you have installed both Flowbite and the latest version of Tailwind.

## Getting started

You will probably want to be able to add your own colors, fonts, sizings, shadows, and other styles to the default set of utility classes from Flowbite and Tailwind CSS. In order to do that, you can set most of these options in your main CSS file that gets compiled by Tailwind.

Here's an example of a simple configuration where we import plugins, set the source files, customize variables for colors and fonts, and set the dark mode strategy to use class name:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@custom-variant dark (&:where(.dark, .dark *));

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
    
    --font-sans: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-body: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';
}
{{< /code >}}

Using this example is a good starting point for any project created using Flowbite and Tailwind CSS.

## Theming variables

You can customize colors, fonts, spacings, and other styles using native variables in your main CSS file.

{{< code lang="css" file="main.css" icon="file" >}}
/* input.css file */
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

    --font-sans: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-body: 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';

    --spacing-custom: 10px;

    --breakpoint-xs: 30rem;
    --breakpoint-2xl: 100rem;
    --breakpoint-3xl: 120rem;
}
{{< /code >}}

The example above adds a new color palette, fonts, a custom spacing variable and new media breakpoints.

All of these styles will be propagated to the utility classes provided by Tailwind CSS.

## Custom utilities

You can add custom utilities by using the `@utility` directive in your CSS file.

{{< code lang="css" file="main.css" icon="file" >}}
@utility custom-url {
  color: --color-primary-600;
  text-decoration: underline;
}
{{< /code >}}

Now you can use the `custom-url` class to add an underline and primary color to the target element.

## Custom variants

Use the `@variant` direct in native CSS to target states such as hover, focus, dark mode, and more.

{{< code lang="css" file="main.css" icon="file" >}}
.element {
  text-decoration: underline;

  @variant hover {
    text-decoration: no-underline;
  }
}
{{< /code >}}

## Import plugins

You can import third party plugins using the `@plugin` directive in your CSS file.

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@plugin "flowbite/plugin";
@plugin "flowbite-typography";
{{< /code >}}

## Source

Tailwind CSS automatically detects source files, but ignores a few folders such as your `node_modules`.

Here's how you can explicictly set the source files in your main CSS file:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@source "../node_modules/flowbite";
{{< /code >}}

This will scan the Flowbite folder inside your installed packages for Tailwind classes.

## Config

Use the `@config` directive to import old `tailwind.config.js` files to copy your options.

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@config "../tailwind.config.js";
{{< /code >}}

## Prefixes

You can use the `prefix` object to set a prefix for all of the classes generated by Flowbite and Tailwind CSS.

For example, you can add the `fb-` prefix like so:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss" prefix(fb);
{{< /code >}}

Doing so it will add the prefix to all of the classes.

{{< code lang="css" file="main.css" icon="file" >}}
.fb-text-left {
  text-align: left;
}
.fb-text-center {
  text-align: center;
}
.fb-text-right {
  text-align: right;
}
/* etc. */
{{< /code >}}

## Reference

If you'd like to browse the full list of configurable options, please visit the official <a href="https://tailwindcss.com/docs/functions-and-directives" rel="nofollow" target="_blank">Tailwind CSS configuration</a>.