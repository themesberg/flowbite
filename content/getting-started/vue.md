---
layout: home
title: Tailwind CSS Vue - Flowbite
description: Learn how to install and set up Tailwind CSS with Flowbite for your Vue.js project and start developing modern web applications with interactive components
group: getting-started
toc: true
requires_vue: true

previous: React
previousLink: getting-started/react/
next: License
nextLink: getting-started/license/
---

Vue.js is a popular front-end library used by websites such as Behance, Nintendo, Gitlab, Font Awesome, and more that you can use to build modern web applications. 

By installing Tailwind CSS and Flowbite you can build your project even faster using the utility-first approach from Tailwind and the interactive components from Flowbite.

## Install Tailwind CSS with Vue.js

Follow the next steps to install Tailwind CSS and Flowbite with Vue 3 and Vite.

1. Create a new Vite project running the following commands in your terminal:

```bash
npm init vite my-project
cd my-project
```

2. Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure the template paths inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Create a new `./src/index.css` file and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Import the newly created CSS file inside your `./src/main.js` file:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// add this
import './index.css'

createApp(App).mount('#app')
```

6. Install Flowbite by running the following command in your terminal:

```bash
npm install flowbite
```

7. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}

```
8. Import the Flowbite JavaScript file inside your main `./src/main.js` file:

```bash
import 'flowbite';
```

9. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

Now you can start the local server by running `npm run dev` in your terminal.

## Flowbite components

You can start using all of the components from Flowbite in your Vue.js project as long as you've properly followed the instructions above and installed both Tailwind CSS and Flowbite.

The interactive elements such as the dropdowns, modals, and tooltips will work based on the settings that you apply using the data attributes, except when using a routing system.

We are currently working on a standalone Vue.js component library to provide full support for this technology and compatibility with frameworks such as NuxtJS.

Here's an example of a modal component that you can use by adding inside your `App.vue` template file:

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <!-- Modal toggle -->
  <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="default-modal">
    Toggle modal
  </button>

  <!-- Main modal -->
  <div id="default-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
      <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                      Terms of Service
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
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
              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                  <button data-modal-toggle="default-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
              </div>
          </div>
      </div>
  </div>
</template>
```
