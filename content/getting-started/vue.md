---
layout: docs
title: Tailwind CSS Vue - Flowbite
description: Learn how to install and set up Tailwind CSS with Flowbite for your Vue 3 project and start developing modern web applications with interactive components
group: getting-started
toc: true
requires_vue: true

previous: Next.js
previousLink: getting-started/next-js/
next: Nuxt
nextLink: getting-started/nuxt-js/
---

Vue.js is a popular front-end library based on reactivity and declarative rendering used by websites such as Behance, Nintendo, Gitlab, Font Awesome, and more that you can use to build modern web applications.

By installing Tailwind CSS and Flowbite you can build your project even faster using the utility-first approach from Tailwind and the interactive UI components from Flowbite, such as modals, tables, dropdowns, datepickers, and more.

## Create a Vue project

Follow the next steps to install Tailwind CSS (with v4) and Flowbite with Vue 3 and Vite.

1. Create a new Vite project running the following commands in your terminal:

{{< code lang="bash" >}}
npm create vite@latest flowbite-app -- --template vue
cd flowbite-app
{{< /code >}}

## Install Tailwind CSS

This guide uses the newest version of Tailwind CSS v4 which brings many improvements.

1. Install Tailwind CSS using Vite via the terminal:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/vite --save
{{< /code >}}

2. Add the Tailwind plugin inside your `vite.config.js` file:

{{< code lang="javascript" file="vite.config.js" icon="file" >}}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
  ],
})
{{< /code >}}

3. Import the `tailwind` module inside your `style.css` file:

{{< code lang="bash" >}}
@import "tailwindcss";
{{< /code >}}

You have now installed both Tailwind CSS and Vue and can proceed with the next steps.

## Install Flowbite

The UI components from Flowbite can help you save time building websites with Vue and Tailwind. Make sure that you follow the next steps to ensure that you install both the CSS and JavaScript dependencies.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

{{< code lang="css" icon="file" file="input.css" >}}
/* choose one of the following */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import "flowbite/src/themes/default";

/* MINIMAL THEME
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/minimal";
*/

/* ENTERPRISE THEME
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/enterprise";
*/

/* PLAYFUL THEME
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/playful";
*/

/* MONO THEME
@import "flowbite/src/themes/mono";
*/
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="input.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="input.css" icon="file" >}}
@source "../node_modules/flowbite";
{{< /code >}}

4. Start a local development server by running the following command in your terminal:

{{< code lang="bash" >}}
npm run dev
{{< /code >}}

If you want to build the project then you can run `npm run build`.

## Flowbite components

Now that you have successfully installed Vue 3, Tailwind CSS and Flowbite you can start importing and using the components from Flowbite such as the navbars, modals, dropdowns, and more.

We can use the <a href="{{< ref "components/modal" >}}#javascript-behaviour">Modal component</a> as an example and copy the HTML markup and add it inside our Vue 3 template file:


{{< code lang="vue" file="App.vue" icon="file" >}}
<template>
    <div>
        <div class="flex justify-center p-4">
            <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show modal</button>
        </div>

        <div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
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
{{< /code >}}

### Data attributes

You can by default make the interactive components work by importing the "init" functions from the Flowbite package using the based on the onMounted lifecycle method from Vue 3.

Here's an example how you can initialise the components based on data attributes with Vue 3:

{{< code lang="vue" file="App.vue" icon="file" >}}
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
{{< /code >}}

Alternatively, here's the full list of available functions to use to initialise the components separately:

{{< code lang="vue" file="App.vue" icon="file" >}}
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
{{< /code >}}

Even though this will make sure all of the interactive components will work with data attributes from Flowbite, we actually recommend only initializing the ones that you use for every page to optimize load speed.

Check out the [starter guide's](https://github.com/themesberg/tailwind-vue-starter) `Events.vue` file to see it in action.

### JavaScript API

To start using the interactive components from Flowbite together with Vue 3 and Tailwind CSS you can import them inside your Vue files and initiate the object based on the onMounted method from Vue.

Here's an example showing how you can use the Modal component:

{{< code lang="vue" file="App.vue" icon="file" >}}
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
{{< /code >}}

Alternatively, here's the full list of available functions to use to initialise the components separately:

{{< code lang="vue" file="App.vue" icon="file" >}}
<script setup>
import { onMounted } from 'vue'
import { Modal } from 'flowbite'

onMounted(() => {
    const $buttonElement = document.querySelector('#button');
    const $modalElement = document.querySelector('#modal');
    const $closeButton = document.querySelector('#closeButton');

    const modalOptions = {
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40'
    }

    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());
        
        // programmatically show
        // modal.show();
    }
})
</script>
{{< /code >}}

As you can see we have imported the Modal component from the Flowbite package and we used the onMounted method to set up the event listeners to make sure that the templates have loaded and will work even with tools such as the Vue Router as you switch between the views.

Here's the HTML markup that you need to add inside the `<template>` tag:

{{< code lang="vue" file="App.vue" icon="file" >}}
<template>
  <div class="flex justify-center p-4">
        <button id="button" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show modal</button>
    </div>
    <div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                        Terms of Service
                    </h3>
                    <button id="closeButton" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
</template>
{{< /code >}}

You can check out the available methods and options for the Flowbite API by scrolling down to the "JavaScript Behaviour" section on each page of this documentation where applicable.

## Vue 3 Starter Project

We have also created a [starter project on GitHub](https://github.com/themesberg/tailwind-vue-starter) based on this guide to show you how to use all of the available components from Flowbite with a Vue 3 and Tailwind CSS configuration.

## Flowbite Vue Library

We have started working on a dedicated [Flowbite Vue](https://github.com/themesberg/flowbite-vue) library which when it will be launched will be the recommended way of using our components with Vue 3 because they are built specifically for usage within a Vue 3 environment. 
