---
layout: home
title: Tailwind CSS Astro - FlowBite
description: Learn how to install Astro with Tailwind CSS and Flowbite and start building modern websites with a lightning fast and content-focused web framework
group: getting-started
toc: true
requires_astro: true

previous: Laravel
previousLink: getting-started/laravel/
next: Svelte
nextLink: getting-started/svelte/
---

[Astro](https://astro.build) is a full stack web framework for building lightning fast and content-focused websites featuring component islands, server-first API design, edge-ready deployments and supports hundreds of integrations with technologies like Tailwind CSS, Flowbite, React, Vue, Svelte, and more.

The Astro framework is used by thousands of reputable companies and projects such as Firebase, NordVPN, The Guardian, Trivago and others and it also received a $7M seed investment funding in the beginning of 2022 which guarantees countinuous support and development of the technology.

Follow the next steps in this tutorial to learn how to create a new Astro project, install Tailwind CSS and learn how to leveragae the UI components from Flowbite to build websites even quicker.

## Requirements

Before you continue make sure that you have [Node.js](https://nodejs.org/en/) (`v16.12.0` or higher) installed on your local machine and production server to install all required dependencies.

We also highly recommend you to use VS Code as your standard editor and to install the official [language support extension for Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) from the VS Marketplace released by the original authors.

## Create a new project

1. Create a new Astro project running the following command using NPM:

```bash
npm create astro@latest
```

This command will prompt you some questions and will create a local project based on your answers.

2. Run the following command to start a local development server:

```bash
npm run dev
```

This will make the project accesible via the browser on `http://localhost:3000`.

3. To create a production build of the project run the following command in your terminal:

```bash
npm run build
```

One of the biggest advantages of Astro is the small build size that will be available once deployed to production via the build command - this way the website should load much quicker than using older technologies.

## Install Tailwind CSS

Now that you have installed and configured a working Astro project we can proceed with installing the Tailwind CSS integration based on the official package.

1. Run the following command to install Tailwind CSS and create a configuration file using the NPX command:

```bash
npx astro add tailwind
```

This command will automatically install Tailwind CSS in the `package.json` file, it will also configure the compilation process and create a new `tailwind.config.cjs` file that configures the template paths.

Now you can write Tailwind CSS classes inside any of the template files and the changes will be applied by generating a `base.css` file and including it into every page.

## Install Flowbite

After you've installed both Astro and Tailwind CSS you can also choose to use the free and open-source UI components from Flowbite to make developing websites and user interfaces even faster with interactive elements like navbars, modals, dropdowns, and more.

1. Install Flowbite using NPM inside your terminal:

```bash
npm install flowbite
```

2. Install the Flowbite plugin for Tailwind CSS inside the `tailwind.config.cjs` file and set up the template paths for the source JavaScript files and dynamic classes.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
```



## Flowbite components

## Astro starter project