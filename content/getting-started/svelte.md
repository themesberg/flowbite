---
layout: home
title: Tailwind CSS Svelte - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Svelte project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_svelte: true

previous: Laravel
previousLink: getting-started/laravel/
next: Ruby on Rails
nextLink: getting-started/rails/
---

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS. 

## Install SvelteKit and Tailwind CSS

Before anything make sure that you install SvelteKit and Tailwind CSS. If you already have them installed, you can proceed to the next step.

```bash
npm create svelte@latest my-app
cd my-app
npm install

npm install
npx svelte-add@latest tailwindcss
npm install
```

## Installing Flowbite-Svelte

[Flowbite Svelte](https://flowbite-svelte.com) is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.

Install Flowbite-Svelte and it's dev dependencies using NPM:

```bash
npm i -D flowbite flowbite-svelte svelte-heros @floating-ui/dom
```

## Updating tailwind.config.js

Update the `tailwind.config.js` file with the following details:

```js
onst config = {
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

## Create a sample page

Add the following example to `src/routes/+page.svelte`:

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

If you an alert, then your setting is complete.
