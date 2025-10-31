---
layout: docs
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

{{< code lang="bash" >}}
npx degit solidjs/templates/js flowbite-app
cd flowbite-app
{{< /code >}}

This command will create a boilerplate project that sets up a basic project structure and dependency files.

2. Install the project dependencies using NPM:

{{< code lang="bash" >}}
npm install
{{< /code >}}

3. Execute the following command to create a local development server:

{{< code lang="bash" >}}
npm run dev
{{< /code >}}

The newly created SolidJS project will now be accessible via the browser on `http://localhost:3000`.

4. Create a production build by running the following command in your terminal or deployment pipeline:

{{< code lang="bash" >}}
npm run build
{{< /code >}}

You now have a working SolidJS project configuration installed and can now proceed with installing Tailwind CSS and Flowbite to build web UI interfaces even faster.

## Install Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is the most popular utility-first CSS framework leveraging PostCSS and utility classes inside your templates to speed up UI development.

1. Install Tailwind CSS using NPM and executing the following command in your terminal:

{{< code lang="bash" >}}
npm install --save-dev tailwindcss @tailwindcss/postcss postcss
{{< /code >}}

2. Create a new `postcss.config.mjs` configuration file and at the following code:
   
{{< code lang="javascript" file="postcss.config.mjs" icon="file" >}}
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
{{< /code >}}

3. Import the default Tailwind CSS directive inside the `./src/index.css` default CSS file from SolidJS:

{{< code lang="css" file="src/index.css" icon="file" >}}
@import "tailwindcss";
{{< /code >}}

4. Restart your local development server by running `npm run dev` and you can now use the utility-first classes inside your SolidJS project by testing it out in your `App.jsx` file:

{{< code lang="javascript" file="src/App.jsx" icon="file" >}}
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
{{< /code >}}

You now have both SolidJS and Tailwind CSS successfully installed and configured in your local project and we can now proceed by setting up the UI components from Flowbite.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the classes from Tailwind CSS and it can help you kickstart building websites and applications by leveraging interactive UI components such as navbars, modals, dropdowns, datepickers, and more.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `index.css` CSS file:

{{< code lang="css" file="src/index.css" icon="file" >}}
@import "flowbite/src/themes/default";
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="src/index.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="src/index.css" icon="file" >}}
@source "../../node_modules/flowbite";
{{< /code >}}

Now that you have installed Flowbite you can start using the UI components from the documentation inside your SolidJS project.

## Flowbite components

All of the interactive and non-interactive components from Flowbite can now be used so let's first start by adding the [Modal component](https://flowbite.com/docs/components/modal/) by creating a new `Modal.jsx` component.

The most important part is that you need to import the `initFlowbite()` function from Flowbite and then call this function using the `onMount` hook method from SolidJS so that the interactive data attributes events can be initialized.

{{< code lang="javascript" file="src/components/Modal.jsx" icon="file" >}}
import logo from './logo.svg';
import styles from './App.module.css';

import { initFlowbite } from 'flowbite';
import { onMount } from 'solid-js';

function Modal() {
  onMount(() => {
    initFlowbite();
  });

  return (
    <div>
      <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button>

      <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <div class="p-4 md:p-5 space-y-4">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                  </div>
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
{{< /code >}}

This example adds a button which when clicked it will open a modal component with a title, description, and close button.

Let's now show a [tooltip indicator](https://flowbite.com/docs/components/tooltips/) when hovering over the button to provide extra information:

{{< code lang="html" file="src/components/Modal.jsx" icon="file" >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /code >}}

Finally, let's add an [accordion component](https://flowbite.com/docs/components/accordion/) inside the modal:

{{< code lang="html" file="src/components/Modal.jsx" icon="file" >}}
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /code >}}

These examples should give you a pretty good idea how you can leverage the UI components from Flowbite together with Tailwind CSS and SolidJS to build performant and reactive web applications.

## SolidJS starter project

The open-source community from Flowbite created a [SolidJS starter project](https://github.com/themesberg/tailwind-solidjs-starter) that follows the steps from this guide that you can use to quickly start using these three technologies for your next project.