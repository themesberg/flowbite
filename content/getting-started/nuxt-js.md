---
layout: home
title: Tailwind CSS Nuxt.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Nuxt.js project and start developing with the most popular Vue-based framework inspired by Next.js
group: getting-started
toc: true
requires_nuxtjs: true

previous: React
previousLink: getting-started/react/
next: Vue
nextLink: getting-started/vue/
---

Nuxt.js is a free and open-source JavaScript framework based on Vue.js that helps you developer modern web applications using SSR (server-side rendering) which provides a faster load, better SEO (search engine optimization), and better caching capabilities.

The framework was inspired by Vercel's Next.js framework built with React and it is being used by large companies such as Ecosia, Upwork, NASA, Appsumo, and CDN JS.

If you follow this guide you will learn how to install the latest version of Nuxt.js (v3) with Tailwind CSS and Flowbite and also show you how to use the TypeScript version.

## Create a Nuxt.js project

Before continuing make sure that you have Node.js and NPM installed on your local machine.

1. Create a new Nuxt.js project by running the following command in your terminal:

```bash
npx nuxi init project-name
```

2. Install the project dependencies by executing the following command:

```bash
npm install
```

3. Run the following command to start a local development server on `http://localhost:3000/`:

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
// nuxt.config.{js,ts}
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

Tailwind CSS is now configured in your project and if you add the utility classes anywhere in your Vue template files the CSS will be generated and included.

## Install Flowbite

After installing both Nuxt.js and Tailwind CSS inside your project we can proceed by installing Flowbite.

1. Install Flowbite via NPM and save it in your `package.json` file:

```bash
npm install flowbite --save
```

2. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {
  // other options ...
  plugins: [
    require('flowbite')
  ],
}
```

3. Add the source JavaScript files of Flowbite to the `tailwind.config.js` template path:

```javascript
module.exports = {
  content: [
    // other files...
    "./node_modules/flowbite.{js,ts}"
  ],
}

```

## Flowbite Components

### Using types

## Nuxt.js Starter Project