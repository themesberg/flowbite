---
layout: home
title: Tailwind CSS Nuxt - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Nuxt 3 project and start developing with the most popular Vue-based framework inspired by Next.js
group: getting-started
toc: true
requires_nuxtjs: true

previous: Vue
previousLink: getting-started/vue/
next: Svelte
nextLink: getting-started/svelte/
---

[Nuxt](https://nuxt.com/) is a free and open-source JavaScript framework based on Vue.js that helps you develop modern web applications using SSR (server-side rendering) which provides a faster load, better SEO (search engine optimization), and better caching capabilities.

The framework was inspired by Vercel's Next.js framework built with React and it is being used by large companies such as Ecosia, Upwork, NASA, Appsumo, and CDN JS.

If you follow this guide you will learn how to install the latest version 3 of Nuxt with Tailwind CSS and Flowbite and also show you how to use the TypeScript version.

## Create a Nuxt project

Before continuing make sure that you have Node.js and NPM installed on your local machine.

1. Create a new Nuxt project by running the following command in your terminal:

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

This will make the Nuxt project accessible via the browser.

## Install Tailwind CSS

Now that you have locally set up a Nuxt project we will proceed by installing Tailwind CSS.

1. Require and install the NuxtTailwind module by installing it via NPM:

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

2. Configure the Nuxt configuration file to include the Tailwind module:

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

5. Set up the template paths for your Nuxt project inside the Tailwind CSS configuration file:

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

After installing both Nuxt and Tailwind CSS inside your project we can proceed by installing Flowbite.

1. Install Flowbite via NPM and save it in your `package.json` file:

```bash
npm install flowbite
```

2. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {
  // other options ...
  plugins: [
    require('flowbite/plugin')
  ],
}
```

3. Add the source JavaScript files of Flowbite to the `tailwind.config.js` template path:

```javascript
module.exports = {
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}
```

## Flowbite Components

Now that you have successfully installed Nuxt, Tailwind CSS and Flowbite you can start importing and using components from the open-source library of [Flowbite](https://flowbite.com) such as modals, navbars, tables, dropdowns, and more.

Let's use the <a href="{{< ref "components/modal" >}}#javascript-behaviour">Modal component</a> as an example and copy-paste the markup from the documentation inside your `app.vue` page:

```html
<template>
    <div>
        <div class="flex justify-center p-4">
            <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show modal</button>
        </div>

        <div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Terms of Service
                        </h3>
                        <button id="closeButton" data-modal-hide="modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
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
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
```

### Data attributes

You can automatically make the interactive components work by importing the init functions from the Flowbite package using the onMounted lifecycle method from Nuxt.

For example, here's how would initialize all of interactive UI components (ie. modals) inside your Vue template:

```javascript
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    // Modal HTML markup with data attributes from Flowbite
</template>
```

Alternatively, here's a full list of available functions to use to initialise the components separately:

```javascript
<script setup>
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>
```

Although this will make sure all of the interactive components will work with data attributes from Flowbite, we actually recommend only initializing the ones that you use for every page to optimize load speed.

Check out the [starter guide's](https://github.com/themesberg/tailwind-nuxt-starter) `Events.vue` file to see it in action.

### JavaScript API

To make the component interactive we need to import the Modal object from Flowbite and set up the object parameters, options, and methods to show or hide the modal based on the button click.

```javascript
<script setup>
import { onMounted } from 'vue'
import { Modal } from 'flowbite'

onMounted(() => {
    // setup available elements
    const $buttonElement = document.querySelector('#button');
    const $modalElement = document.querySelector('#modal');
    const $closeButton = document.querySelector('#closeButton');

    // set modal options
    const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
    }

    // create a new modal instance
    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);

        // set event listeners for the button to show the modal
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());

    }
})
</script>
```

As you can see we use the onMounted() lifecycle method from Vue 3 to query for the elements that we need to create a modal component and then programmatically use the methods such as showing or hiding the modal.

```javascript
// add your own logic and then show the modal
modal.show();

// or you can hide it
modal.hide();
```

Every interactive component page that requires JavaScript has documentation on Flowbite showing you the available parameters, options, and methods that you can use.

### Using types

Flowbite also supports TypeScript as of v1.6.0 and it allows us to use type declarations and interfaces for the objects, parameters, and option values for the JavaScript API.

You can import these types or interfaces like this:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// other code
```

Generally speaking, all of the components have an interface definition that you can use whenever you create a new object to make sure that you’re using the correct types of parameters and methods.

When creating a new modal you can set the ModalInterface as the main type:

```javascript
const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

All of the Flowbite components also support type declaration for the options object. Here's an example:

```javascript
const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Using types can be very beneficial because it makes sure that you only use the allowed types and values for the options that are available. For example, if you used a value such as `yellow` for the placement object, which is a color, TypeScript will throw an error because it does not meet the type requirements from Flowbite.

Here's the full code using types with TypeScript:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());

modal.show();
```

Learn more about using <a href="{{< ref "getting-started/typescript" >}}#javascript-behaviour">Flowbite with TypeScript</a> on the official docs page.

## Nuxt Starter Project

We have created a free and open-source [Tailwind CSS and Nuxt starter project](https://github.com/themesberg/tailwind-nuxt-starter) showcasing all of the interactive UI components from Flowbite to help you get started building web applications.

## Flowbite Vue Library

We also started working on a [standalone Flowbite Vue 3 UI component library](https://github.com/themesberg/flowbite-vue) which when launched in a stable version will be the recommended way of working in a Vue 3 or Nuxt environment. Contributions are more than welcome!