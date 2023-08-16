---
layout: home
title: Tailwind CSS SolidJS - Flowbite
description: Learn how to install SolidJS with Tailwind CSS and Flowbite and get started with building web applications with a simple and performant reactive JavaScript library
group: getting-started
toc: true
requires_solidjs: true

previous: Gatsby
previousLink: getting-started/gatsby/
next: Qwik
nextLink: getting-started/qwik/
---

[SolidJS](https://www.solidjs.com/) is a popular and open-source declarative JavaScript library that empowers reactive UI interfaces for the web that ensures a performant benchmark, leverages the flexibility of JSX and also provides support for TypeScript, Astro, and Vite.

The SolidJS library is used by many web developers and smaller companies and it was even spotted being used in OpenAI's ChatGPT interface used for artificial intelligence UI/UX interactivity.

By following the steps from this guide you will learn how to create a new project using SolidJS, install and set up Tailwind CSS to leverage the utility classes and finally install and integrate the free and open-source UI components from Flowbite.

## Requirements

Before getting started make sure that you have [Node.js](https://nodejs.org/en/) installed on your local machine to be able to install both SolidJS, Tailwind CSS and Flowbite.

## Create a SolidJS project

1. Execute the following command in your terminal to create a new SolidJS project using Vite Templates:

```bash
npx degit solidjs/templates/js my-application
cd my-application
```

This command will create a boilerplate project that sets up a basic project structure and dependency files.

2. Install the project dependencies using NPM:

```bash
npm install
```

3. Execute the following command to create a local development server:

```bash
npm run dev
```

The newly created SolidJS project will now be accessible via the browser on `http://localhost:3000`.

4. Create a production build by running the following command in your terminal or deployment pipeline:

```bash
npm run build
```

You now have a working SolidJS project configuration installed and can now proceed with installing Tailwind CSS and Flowbite to build web UI interfaces even faster.

## Install Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is the most popular utility-first CSS framework leveraging PostCSS and utility classes inside your templates to speed up UI development.

1. Install Tailwind CSS using NPM and executing the following command in your terminal:

```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

2. Create a new `tailwind.config.js` and `postcss.config.js` configuration files by running the following command:
   
```bash
npx tailwindcss init -p
```

3. Set up SolidJS's default template paths inside the `tailwind.config.js` file to let Tailwind CSS know where to look for the utility classes:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Import the default Tailwind CSS directives inside the `./src/index.css` default CSS file from SolidJS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Restart your local development server by running `npm run dev` and you can now use the utility-first classes inside your SolidJS project by testing it out in your `App.jsx` file:

```javascript
function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class="text-4xl text-blue-600"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid, Tailwind CSS and Flowbite
        </a>
      </header>
    </div>
  );
}

export default App;
```

You now have both SolidJS and Tailwind CSS succesfully installed and configured in your local project and we can now proceed by setting up the UI components from Flowbite.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the classes from Tailwind CSS and it can help you kickstart building websites and applications by leveraging interactive UI components such as navbars, modals, dropdowns, datepickers, and more.

1. Require and install Flowbite using NPM by executing the following command in your terminal:

```bash
npm install flowbite
```

2. Require the Flowbite plugin and configure the template paths inside `tailwind.config.js`:
   
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // configure the Flowbite JS source template paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // require Flowbite's plugin for Tailwind CSS
  ],
}
```

3. Import the Flowbite package to enable UI components interactivity inside your `App.jsx` file:

```javascript
import 'flowbite';
```

Now that you have installed Flowbite you can start using the UI components from the documentation inside your SolidJS project.

## Flowbite components

All of the interactive and non-interactive components from Flowbite can now be used so let's first start by adding the [Modal component](https://flowbite.com/docs/components/modal/) inside your `App.jsx` file:

```javascript
import logo from './logo.svg';
import styles from './App.module.css';

import 'flowbite';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class="text-4xl text-blue-600"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid, Tailwind CSS and Flowbite
        </a>

        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Toggle Flowbite modal
        </button>

        <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto text-base text-left md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>

                    </div>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>
      </header>

    </div>
  );
}

export default App;
```

This example adds a button which when clicked it will open a modal component with a title, description, and close button.

Let's now show a [tooltip indicator](https://flowbite.com/docs/components/tooltips/) when hovering over the button to provide extra information:

```javascript
<button data-tooltip-target="tooltip-default" data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Toggle Flowbite modal
</button>
<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Toggle modal component
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

Finally, let's add an [accordion component](https://flowbite.com/docs/components/accordion/) inside the modal:

```javascript
<div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>What is Flowbite?</span>
        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </h2>
    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
    </div>
    <h2 id="accordion-collapse-heading-2">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
        <span>Is there a Figma file available?</span>
        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </h2>
    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
    </div>
    <h2 id="accordion-collapse-heading-3">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
        <span>What are the differences between Flowbite and Tailwind UI?</span>
        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </h2>
    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
        </div>
    </div>
</div>
```

These examples should give you a pretty good idea how you can leverage the UI components from Flowbite together with Tailwind CSS and SolidJS to build performant and reactive web applications.

## SolidJS starter project

The open-source community from Flowbite created a [SolidJS starter project](https://github.com/themesberg/tailwind-solidjs-starter) that follows the steps from this guide that you can use to quickly start using these three technologies for your next project.