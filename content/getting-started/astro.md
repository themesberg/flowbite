---
layout: home
title: Tailwind CSS Astro - Flowbite
description: Learn how to install Astro with Tailwind CSS and Flowbite and start building modern websites with a lightning fast and content-focused web framework
group: getting-started
toc: true
requires_astro: true

previous: Angular
previousLink: getting-started/angular/
next: Remix
nextLink: getting-started/remix/
---

[Astro](https://astro.build) is a full-stack web framework for building lightning-fast and content-focused websites featuring component islands, server-first API design, edge-ready deployments and supports hundreds of integrations with technologies like Tailwind CSS, Flowbite, React, Vue, Svelte, and more.

The Astro framework is used by thousands of reputable companies and projects such as Firebase, NordVPN, The Guardian, Trivago and others and it also received a $7M seed investment funding at the beginning of 2022 which guarantees continuous support and development of the technology.

Follow the next steps in this tutorial to learn how to create a new Astro project, install Tailwind CSS and learn how to leverage the UI components from Flowbite to build websites even quicker.

## Requirements

Before you continue make sure that you have [Node.js](https://nodejs.org/en/) (`v16.12.0` or higher) installed on your local machine and production server to install all required dependencies.

We also highly recommend you to use VS Code as your standard editor and to install the official [language support extension for Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) from the VS Marketplace released by the original authors.

## Create an Astro project

1. Create a new Astro project running the following command using NPM:

```bash
npm create astro@latest
```

This command will prompt you with some questions and will create a local project based on your answers.

2. Run the following command to start a local development server:

```bash
npm run dev
```

This will make the project accessible via the browser on `http://localhost:3000`.

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

Now you can write Tailwind CSS classes inside any of the template files and the changes will be applied by generating a `base.css` file and including it on every page.

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

To enable the interactive components you need to also include Flowbite's JavaScript file which you can do by either including it in the main `Layout.astro` file as a CDN file or importing the Flowbite module inside the 

### Include via CDN

In the `Layout.astro` file add the following script tag just before the end of the `<body>` tag:

```html
<script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
```

This allows you to use the data attributes from the Flowbite component examples and will make them interactive automatically without needing to write custom JavaScript and you can just copy-paste them from the Flowbite Docs.

### ESM/CJS imports

Alternatively, you can import standalone components such as the Modal and set up the event listeners yourself in a local `<script>` tag for the Astro files. 

Since version 1.6.0 Flowbite also supports type declarations and interfaces in TypeScript which allows you to integrate with the Astro ecosystem even better as they clearly recommend TypeScript over JavaScript.

For example, here's how you can leverage the Flowbite JS API and Astro by adding the following code inside the script tag:

```javascript
<Layout>
  <!-- markup source content and elements -->
</Layout>

<script>
  import { Modal } from 'flowbite'

  // select the two elements that we'll work with
  const $buttonElement: HTMLElement | null = document.querySelector('#button');
  const $modalElement: HTMLElement | null = document.querySelector('#defaultModal');

  // create a new modal component
  const modal = new Modal($modalElement);

  // toggle the visibility of the modal when clicking on the button
  if ($buttonElement) {
    $buttonElement.addEventListener('click', () => modal.toggle());
  }
</script>
```

Make sure that you have the necessary HTML markup for the event listeners and elements described in the example above inside the `<Layout>` tags from Astro:

```html
<Layout>
  <!-- Modal toggle -->
  <button id="button" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Toggle modal
  </button>
  
  <!-- Main modal -->
  <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
          <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
        </div>
      </div>
    </div>
  </div>
</Layout>
```

In this example, the modal will be shown when the button is clicked and the modal component will also be initialized based on the options that you've provided.

You can browse the full collection of the Flowbite components and check the "JavaScript Behaviour" section of the page to learn all of the options, methods, and objects that you can leverage.

## Astro starter project

We also built a free and open-source [Flowbite and Astro starter project](https://github.com/themesberg/tailwind-astro-starter) on GitHub that you can use for reference and examples based on this integration guide to get started faster with working with Astro, Tailwind CSS and the UI components from Flowbite.

## Astro admin dashboard

You can check out our open-source [Astro admin dashboard](https://github.com/themesberg/flowbite-astro-admin-dashboard) project on GitHub to leverage CRUD layouts and API calls predefined with the Flowbite Library, Tailwind CSS framework and the Astro best practices and framework setup.