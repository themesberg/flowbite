---
layout: home
title: Tailwind CSS Angular - Flowbite
description: Read this guide to learn how to install Tailwind CSS with Angular and set up the UI components from Flowbite to build enterprise-level web applications
group: getting-started
toc: true
requires_angular: true

previous: Svelte
previousLink: getting-started/svelte/
next: Astro
nextLink: getting-started/astro/
---

[Angular](https://angular.io/) is a free and open-source single-page web framework written in TypeScript used by millions of developers and projects that can help you build and scale your web applications by using features like components, routing, form management, API calls interface, and more.

The framework was released by the Google team in 2010 and it is used by websites such as Upwork, Forbes, Gmail, YouTube, Udacity, and more including most of the Google Suite apps.

Follow this guide to learn how to set up a new Angular project with Tailwind CSS and integrate the open-source UI components from the Flowbite Library.

## Create Angular project

The recommended and quickest way to get started with creating a new Angular project is by installing the official CLI tool by running the following command in your terminal:

```bash
npm install -g @angular/cli
```

This command will make the Angular CLI available on your local computer.

1. Run the following command to create a new Angular project:

```bash
ng new my-app
```

You can follow the instructions from the CLI prompts to select the options that you want to choose when creating a new project - you should select "CSS" when asked.

This command will create a new folder called `my-app` where you have all the necessary source files to start a new local and production-ready Angular project.

2. Run the `ng serve --open` command in your terminal to start a local server:

```bash
ng serve --open
```

This will create a local development server and automatically open a new tab on the `localhost:4200` port by adding the `--open` flag to the command.

Congratulations! Now you have a fully working Angular project installed and configured.

## Install Tailwind CSS

Now that you've succesfully installed and configured an Angular project we can proceed with installing the most popular utility-first CSS framework called Tailwind.

3. Install Tailwind CSS and Post CSS via NPM by running the following command:

```bash
npm install tailwindcss --save-dev
```

This command will install all the dependencies of Tailwind CSS available in your `package.json` file.

4. Run the init command from Tailwind CSS to create a new `tailwind.config.js` file:

```bash
npx tailwindcss init
```

5. Update the newly generated config file to set up the source template files from Angular:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. Import the core Tailwind directives inside the `styles.css` file:

```css
/* You can add global styles to this file, and also import other style files */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Start a local development server on Angular by running `ng serve --open`. If you already had one open then you need to restart it to allow Angular to internally set up the new configuration.

Congratulations! You can now start using the utility classes from Tailwind CSS inside your Angular project.

## Install Flowbite

Now that you have both Angular and Tailwind CSS configured for your web application project you can proceed by installing the Flowbite Library to start leveraging the interactive UI components such as navbars, modals, cards, buttons, and more to build user interfaces faster with Tailwind CSS support.

8. Install and require Flowbite as a dependency via NPM for your `package.json` file:

```bash
npm install flowbite
```

9. Require the Flowbite plugin inside your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
```

10. Configure the template paths to include the interactive Tailwind CSS classes from Flowbite:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
```

11. Update the `app.component.ts` file to use the `initFlowbite` function to enable the interactive components via data attributes:

```javascript
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
```

This will allow you to enable components such as the modals, navigation bars, dropdowns to dynamically set up the functionality via our data attributes interface.

## UI components

Now that you have installed all of the frameworks and libraries you can start using the whole collection of UI components and templates from the [Flowbite UI Library](https://flowbite.com/docs/getting-started/introduction/) and [Blocks](https://flowbite.com/blocks/marketing/feature/).

Let's first start by copy-pasting one of the default [modal component](https://flowbite.com/docs/components/modal/) examples from the documentation and add it inside the `app.component.html` file:

```html
<!-- Modal toggle -->
<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
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
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
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
```

Adding this code should create a toggle button which on the click event should show a modal component. The interactivity is enabled via the data attributes interface from Flowbite.

### Data attributes

The Flowbite Library is by default powered by the data attributes interface that you can use to easily set up interactive components by targeting elements directly from your template components.

Let's add a [dropdown component](https://flowbite.com/docs/components/dropdowns/) from the UI library:

```html
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
```

This example should also show a button that on the click event will show a dropdown menu that you can easily update via Tailwind CSS and the data attributes API.

### JavaScript API

Alternatively to the data attributes strategy you can also choose to programatically set up the interactivity by directly importing the components from Flowbite and use the methods and options described in the documentation of Flowbite at the end of each page.

For example, here's how you can set up a carousel component directly with JavaScript:

```javascript
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";

const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});

const items: CarouselItem[] = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
];

const options: CarouselOptions = {
    defaultPosition: 1,
    interval: 3000,
    
    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
        ]
    },
    
    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: ( ) => {
        console.log('previous slider item is shown');
    },
    onChange: ( ) => {
        console.log('new slider item has been shown');
    }
};

const carousel: CarouselInterface = new Carousel(items, options);

carousel.cycle()

// set event listeners for prev and next buttons
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});
```

You also need to have the following HTML markup available inside your codebase and Angular template files:

```html
<div class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
         <!-- Item 1 -->
        <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
        <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
        <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
    </div>
    <!-- Slider controls -->
    <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
```

In this case the advantage is that you can control the behaviour of the components as you wish being able to override the default settings.

### Using TypeScript

The Flowbite UI components also supports TypeScript and you can import the types and apply them when using the JavaScript API programatically.

For example, here's how you can import the types for the Carousel component:

```javascript
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";

// ... other code

const carousel: CarouselInterface = new Carousel(items, options);
```

You can read more about using [Flowbite and TypeScript](https://flowbite.com/docs/getting-started/typescript/) by following our documentation guide.

## Angular Starter Project

We built a free and open-source [starter project](https://github.com/themesberg/tailwind-angular-starter) on GitHub that you can clone to use as a reference for this guide and for your own Angular web application configured with Flowbite and Tailwind CSS.

## Flowbite Angular Library

The awesome open-source community from Flowbite also started working on a standalone [Flowbite Angular](https://github.com/themesberg/flowbite-angular) library with native components where you can also contribute to the development of the project until a stable release is achieved.