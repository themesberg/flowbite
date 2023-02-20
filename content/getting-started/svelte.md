---
layout: home
title: Tailwind CSS Svelte - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Svelte project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_svelte: true

previous: Nuxt
previousLink: getting-started/nuxt-js/
next: Astro
nextLink: getting-started/astro/
---

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS. 

## Install SvelteKit and Tailwind CSS

Before anything make sure that you install SvelteKit and Tailwind CSS. If you already have them installed, you can proceed to the next step.

```bash
npm create svelte@latest my-app
cd my-app

pnpm install
npx svelte-add@latest tailwindcss
```

## Method 1: Using Flowbite-Svelte (Recommended)

[Flowbite Svelte](https://flowbite-svelte.com) is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.

Install Flowbite, Flowbite-Svelte, and dependencies using PNPM:

```bash
pnpm i flowbite flowbite-svelte classnames @popperjs/core
```

Update the `tailwind.config.js` file with the following details:

```js
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

Now you are ready to go! Add the following to `src/routes/+page.svelte`.

```html
<script>
	import { Alert } from 'flowbite-svelte';
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>
```
