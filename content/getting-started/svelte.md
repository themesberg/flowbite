---
layout: home
title: Tailwind CSS Svelte - Flowbite
description: Learn how to install and set up Tailwind CSS with Flowbite for your Svelte project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_svelte: true

previous: Laravel
previousLink: getting-started/laravel/
next: License
nextLink: getting-started/license/
---

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS. 

## Install SvelteKit and Tailwind CSS

Before anything make sure that you install SvelteKit and Tailwind CSS. If you already have them installed, you can proceed to the next step.

```bash
npm init svelte@next sveltekit-demo
cd sveltekit-demo

npm install
npx svelte-add@latest tailwindcss
```

## Method 1: Using Flowbite-Svelte

[Flowbite-Svelte](https://flowbite-svelte.vercel.app/) is an unofficial Flowbite component library for Svelte. All interactivities are handled by Svelte.

Install Flowbite-Svelte using NPM:

```bash
npm i -D flowbite-svelte
```

Update the `tailwind.config.js` file with the following details:

```bash
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

## Method 2: Using Flowbite.js

If you prefer using flowbite.js, after installing Tailwind CSS, install flowbite:

```bash
npm i -D flowbite
```

Update `tailwind.config.js` by adding the following:

```bash
plugins: [
    require('flowbite/plugin')
  ],
```

Update `src/__layout.svelte` by adding `flowbite.css`:

```bash
<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
</script>
```

Modify the `src/app.html` by adding `flowbite.js` as the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <link rel="icon" href="%svelte.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	%svelte.head%
    </head>
  <body>
    <div id="svelte">%svelte.body%</div>
    <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js"></script>
  </body>
</html>
```

## Method 3 Using CDN

This method uses the CDN and using Flowbite unpurged CDN JS/CSS. You don’t need to install TailwindCSS nor Flowbite.
The Flowbite contains Tailwind CSS v3.0.1. So you can add CSS and JS link in the src/app.html. Place `flowbite.min.css` in 
the head and `flowbite.min.js` just before the body tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <link rel="icon" href="%svelte.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.min.css" />
  %svelte.head%
  </head>
  <body>
    <div id="svelte">%svelte.body%</div>
   <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js"></script>
  </body>
</html>
```

If you want it only in a certain directories, create `src/your-dir/__layout.svelte` and add the Flowbite CSS in the `svelte:head` section.

```html
<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.2/dist/flowbite.min.css" /></svelte:head> 
<slot />
```

If you are using Flowbite.js, you need to add `rel="external"` to the link tag for pages using Flowbite interactivities.

```bash
<a rel="external" href="path">Path</a>
```

By default, the SvelteKit runtime intercepts clicks on `<a>` elements and bypasses the normal browser navigation for relative (same-origin) URLs that match one of your page routes. — SvelteKit doc
Adding a rel=external attribute to a link will trigger a browser navigation when the link is clicked.
