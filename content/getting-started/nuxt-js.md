---
layout: home
title: Tailwind CSS Nuxt.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Nuxt.js project and start developing with the most popular Vue-based framework inspired by Next.js
group: getting-started
toc: true
requires_nextjs: true

previous: React
previousLink: getting-started/react/
next: Vue
nextLink: getting-started/vue/
---

Nuxt v3

## Create a Nuxt.js project

Before continuing this guide make sure that you have Node.js and NPM installed on your local machine.

1. Create a new Nuxt.js project by running the following command in your terminal:

```bash
npx nuxi init project-name
```

2. Install the project dependencies by executing the following command:

```bash
npm install
```

3. Run the following command to start a local development server on `http://localhost:3000/ `:

```bash
npm run dev
```

This will make the Nuxt.js project accessible via the browser.

## Install Tailwind CSS

Now that you have locally set up a Nuxt.js project we will proceed by installing Tailwind CSS.

1. Require and install the NuxtTailwind module by installing it via NPM:

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

2. Configure the Nuxt.js configuration file to include the Tailwind module:

```javascript
// nuxt.config.{js|ts}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
```

3. Create a `tailwind.config.js` file by running the following command:

```bash
npx tailwindcss init
```

4. Create a new CSS file `./assets/css/input.css` and import the main Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Set up the template paths for your Nuxt.js project inside the Tailwind CSS configuration file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Now Tailwind CSS is configured in your project and if you add the utility classes anywhere in your Vue template files the CSS will be generated and included.

## Install Flowbite

## Flowbite Components

### Using types

## Nuxt.js Starter Project