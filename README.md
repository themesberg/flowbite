<p>
    <a href="https://flowbite.com" >
      <img alt="Flowbite - Tailwind CSS components" width="350" src="https://flowbite.s3.amazonaws.com/github/logo-github.png">
    </a><br>
    Build websites even faster with components on top of Tailwind CSS
</p>

<p>
    <a href="https://discord.com/invite/4eeurUVvTy"><img src="https://img.shields.io/discord/902911619032576090?color=%237289da&label=Discord" alt="Discord"></a>
    <a href="https://www.npmjs.com/package/flowbite"><img src="https://img.shields.io/npm/dt/flowbite.svg" alt="Total Downloads"></a>
    <a href="https://github.com/themesberg/flowbite/releases"><img src="https://img.shields.io/npm/v/flowbite.svg" alt="Latest Release"></a>
    <a href="https://flowbite.com/docs/getting-started/license/"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
</p>

------
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Getting started](#getting-started)
  - [Install using NPM](#install-using-npm)
  - [Include via CDN](#include-via-cdn)
  - [Bundled JavaScript](#bundled-javascript)
  - [Data attributes](#data-attributes)
    - [Init functions](#init-functions)
  - [ESM and CJS](#esm-and-cjs)
  - [TypeScript](#typescript)
  - [JavaScript Frameworks](#javascript-frameworks)
  - [Back-end Frameworks](#back-end-frameworks)
- [Components](#components)
- [Figma Design System](#figma-design-system)
- [Flowbite Blocks](#flowbite-blocks)
- [Flowbite Icons](#flowbite-icons)
- [Pro version](#pro-version)
- [Learn Design Concepts](#learn-design-concepts)
- [Community](#community)
- [Copyright and license](#copyright-and-license)

## Documentation

For full documentation, visit [flowbite.com](https://flowbite.com/).

## Getting started

Flowbite can be included as a plugin into an existing Tailwind CSS project and it is supposed to help you build websites faster by having a set of web components to work with built with the utility classes from Tailwind CSS.

### Install using NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed. 

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Make sure that you add the template path to the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

4. Include the main JavaScript file to make interactive elements work:

```html
<script src="../path/to/flowbite/dist/flowbite.js"></script>
```

### Include via CDN

The quickest way to get started working with Flowbite is to simply include the CSS and JavaScript into your project via a CDN service such as UNPKG or CDNJS (content delivery networks).

Require the following minified stylesheet inside the `head` tag:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
```

And include the following javascript file before the end of the `body` tag:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
```

### Bundled JavaScript

One of the most popular way of using Flowbite is to include the bundled Javascript file which is UMD ready using a bundler such as Webpack or Parcel which makes sure that all of the data attributes and functionality will work out-of-the-box.

You can directly import the main JavaScript file inside your bundled `app-bundle.js` file like this:

```javascript
import 'flowbite';
```

This file has access to all of the components and it automatically applies event listeners to the data attributes.

### Data attributes

The preferred way to use the interactive UI components from Flowbite is via the data attributes interface which allows us to add functionality via the HTML element attributes and most of the examples on our documentation applies this strategy.

For example, to set up a modal component all you need to do is use `data-modal-target` and `data-modal-{toggle|show|hide}` to toggle, show, or hide the component by clicking on any trigger element.

```html
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
```

#### Init functions

You can also use the init functions to set up the event listeners yourself. Here's an example how you can do it with Vue or Nuxt:

```
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

The `initFlowbite` function sets up all of the init functions for dropdowns, modals, navbars, tooltips and so on to hook onto the data attributes. Alternatively, you can also initialise each component category class separately with `initDropdowns` or `initModals`.

You can view more examples by browsing the [components from Flowbite](#components).

### ESM and CJS

Flowbite also offers an API for using the components programmatically and it supports both CJS and ESM for JavaScript which can be helpful if you need to expand the default capabilities of the data attributes interface and get access to function callbacks.

Here's an example how you can import and create a new Modal component inside JavaScript:

```javascript
import { Modal } from 'flowbite'

const $modalElement = document.querySelector('#modalEl');

const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
}

const modal = new Modal($modalElement, modalOptions);

modal.show();
```

Check out the JavaScript behaviour section of each component's page to learn how you can use this.

### TypeScript

Flowbite supports type declarations for the interactive UI components including object interfaces and parameter types. Check out the following examples to learn how you can use types with Flowbite.

Additionally to our code above, we will now import some relevant types from the Flowbite package, namely the `ModalOptions` and `ModalInterface`:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// other code
```

Generally speaking, all of the components have an interface definition that you can use whenever you create a new object to make sure that you're using the correct types of parameters and methods.

When creating a new modal you can set the `ModalInterface` as the main type:

```javascript
const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Flowbite also supports type definitions for the options object so if you want to set the placement of the modal based on types, here's how you would do that:

```javascript
const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Learn more about Flowbite and TypeScript in the [quickstart guide](https://flowbite.com/docs/getting-started/typescript/).

### JavaScript Frameworks

The awesome open-source community also built and currently maintains the following standalone libraries for React, Vue, Svelte, and Angular:

- [🌀 Flowbite React Library](https://github.com/themesberg/flowbite-react)
- [🍀 Flowbite Vue Library](https://github.com/themesberg/flowbite-vue)
- [🎸 Flowbite Svelte Library](https://github.com/themesberg/flowbite-svelte)
- [📕 Flowbite Angular Library](https://github.com/themesberg/flowbite-angular)

We also wrote integration guides for the following front-end frameworks and libraries:

- [📝 Flowbite with React guide](https://flowbite.com/docs/getting-started/react/)
- [📝 Flowbite with Next.js guide](https://flowbite.com/docs/getting-started/next-js/)
- [📝 Flowbite with Remix guide](https://flowbite.com/docs/getting-started/remix/)
- [📝 Flowbite with Vue guide](https://flowbite.com/docs/getting-started/vue/)
- [📝 Flowbite with Nuxt guide](https://flowbite.com/docs/getting-started/nuxt-js/)
- [📝 Flowbite with Svelte guide](https://flowbite.com/docs/getting-started/svelte/)
- [📝 Flowbite with Astro guide](https://flowbite.com/docs/getting-started/astro/)
- [📝 Flowbite with MeteorJS guide](https://flowbite.com/docs/getting-started/meteor-js/)
- [📝 Flowbite with Gatsby guide](https://flowbite.com/docs/getting-started/gatsby/)
- [📝 Flowbite with SolidJS guide](https://flowbite.com/docs/getting-started/solid-js/)
- [📝 Flowbite with Qwik guide](https://flowbite.com/docs/getting-started/qwik/)

### Back-end Frameworks

Flowbite has a great integration with most of the back-end frameworks because it relies on vanilla JavaScript:

- [📚 Using Flowbite with Laravel](https://flowbite.com/docs/getting-started/laravel/)
- [🎼 Using Flowbite with Symfony](https://flowbite.com/docs/getting-started/symfony/)
- [🚊 Using Flowbite with Ruby on Rails 7](https://flowbite.com/docs/getting-started/rails/)
- [🐉 Using Flowbite with Phoenix (Elixir)](https://flowbite.com/docs/getting-started/phoenix/)
- [🐸 Using Flowbite with Django](https://flowbite.com/docs/getting-started/django/)
- [🌶 Using Flowbite with Flask](https://flowbite.com/docs/getting-started/flask/)

## Components

Flowbite is an open source collection of UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites.

<table>
  <tr>
    <td width="33.3333%">Alerts</td>
    <td width="33.3333%">Badge</td>
    <td width="33.3333%">Breadcrumbs</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/alerts/">
            <img alt="Tailwind CSS Alerts" src="https://flowbite.s3.amazonaws.com/github/alerts.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/badge/">
            <img alt="Tailwind CSS Badge" src="https://flowbite.s3.amazonaws.com/github/badge.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/breadcrumb/">
            <img alt="Tailwind CSS Breadcrumbs" src="https://flowbite.s3.amazonaws.com/github/breadcrumbs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Buttons</td>
    <td width="33.3333%">Button group</td>
    <td width="33.3333%">Cards</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/buttons/">
            <img alt="Tailwind CSS Buttons" src="https://flowbite.s3.amazonaws.com/github/buttons.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/button-group/">
            <img alt="Tailwind CSS Button Group" src="https://flowbite.s3.amazonaws.com/github/button-group.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/card/">
            <img alt="Tailwind CSS Cards" src="https://flowbite.s3.amazonaws.com/github/cards.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Dropdown</td>
    <td width="33.3333%">Forms</td>
    <td width="33.3333%">List group</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/dropdowns/">
            <img alt="Tailwind CSS Dropdown" src="https://flowbite.s3.amazonaws.com/github/dropdown.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/forms/">
            <img alt="Tailwind CSS Forms" src="https://flowbite.s3.amazonaws.com/github/forms.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/list-group/">
            <img alt="Tailwind CSS List group" src="https://flowbite.s3.amazonaws.com/github/list-group.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Typography</td>
    <td width="33.3333%">Modal</td>
    <td width="33.3333%">Tabs</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/typography/">
            <img alt="Tailwind CSS Typography" src="https://flowbite.s3.amazonaws.com/github/typography.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/modal/">
            <img alt="Tailwind CSS Modal" src="https://flowbite.s3.amazonaws.com/github/modal.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/tabs/">
            <img alt="Tailwind CSS Tabs" src="https://flowbite.s3.amazonaws.com/github/tabs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Navbar</td>
    <td width="33.3333%">Pagination</td>
    <td width="33.3333%">Timeline</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/navbar/">
            <img alt="Tailwind CSS Navbar" src="https://flowbite.s3.amazonaws.com/github/navbar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/pagination/">
            <img alt="Tailwind CSS Pagination" src="https://flowbite.s3.amazonaws.com/github/pagination.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/timeline/">
            <img alt="Tailwind CSS Timeline" src="https://flowbite.s3.amazonaws.com/github/timeline.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Progress bar</td>
    <td width="33.3333%">Tables</td>
    <td width="33.3333%">Toast</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/progress/">
            <img alt="Tailwind CSS Progress Bar" src="https://flowbite.s3.amazonaws.com/github/progress.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/tables/">
            <img alt="Tailwind CSS Tables" src="https://flowbite.s3.amazonaws.com/github/tables.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/toast/">
            <img alt="Tailwind CSS Toast" src="https://flowbite.s3.amazonaws.com/github/toast.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Tooltips</td>
    <td width="33.3333%">Datepicker</td>
    <td width="33.3333%">Spinner</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/tooltips/">
            <img alt="Tailwind CSS Tooltips" src="https://flowbite.s3.amazonaws.com/github/tooltips.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/plugins/datepicker/">
            <img alt="Tailwind CSS Datepicker" src="https://flowbite.s3.amazonaws.com/github/datepicker.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/spinner/">
            <img alt="Tailwind CSS Spinner" src="https://flowbite.s3.amazonaws.com/github/spinner.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Footer</td>
    <td width="33.3333%">Accordion</td>
    <td width="33.3333%">Sidebar</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/footer/">
            <img alt="Tailwind CSS Footer" src="https://flowbite.s3.amazonaws.com/github/footer.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/accordion/">
            <img alt="Tailwind CSS Accordion" src="https://flowbite.s3.amazonaws.com/github/accordion.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/sidebar/">
            <img alt="Tailwind CSS Sidebar" src="https://flowbite.s3.amazonaws.com/github/sidebar.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Carousel</td>
    <td width="33.3333%">Avatar</td>
    <td width="33.3333%">Rating</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/carousel/">
            <img alt="Tailwind CSS Carousel" src="https://flowbite.s3.amazonaws.com/github/carousel.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/avatar/">
            <img alt="Tailwind CSS Avatar" src="https://flowbite.s3.amazonaws.com/github/avatar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/rating/">
            <img alt="Tailwind CSS Rating" src="https://flowbite.s3.amazonaws.com/github/rating.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Input Field</td>
    <td width="33.3333%">File Input</td>
    <td width="33.3333%">Search Input</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/input-field/">
            <img alt="Tailwind CSS Input Field" src="https://flowbite.s3.amazonaws.com/github/input-field.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/file-input/">
            <img alt="Tailwind CSS File Input" src="https://flowbite.s3.amazonaws.com/github/file-input.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/search-input/">
            <img alt="Tailwind CSS Search Input" src="https://flowbite.s3.amazonaws.com/github/search-input.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Select</td>
    <td width="33.3333%">Textarea</td>
    <td width="33.3333%">Checkbox</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/select/">
            <img alt="Tailwind CSS Select" src="https://flowbite.s3.amazonaws.com/github/select.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/textarea/">
            <img alt="Tailwind CSS Textarea" src="https://flowbite.s3.amazonaws.com/github/textarea.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/checkbox/">
            <img alt="Tailwind CSS Checkbox" src="https://flowbite.s3.amazonaws.com/github/checkbox.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Radio</td>
    <td width="33.3333%">Toggle</td>
    <td width="33.3333%">Range Slider</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/radio/">
            <img alt="Tailwind CSS Radio" src="https://flowbite.s3.amazonaws.com/github/radio.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/toggle/">
            <img alt="Tailwind CSS Toggle" src="https://flowbite.s3.amazonaws.com/github/toggle.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/range/">
            <img alt="Tailwind CSS Range Slider" src="https://flowbite.s3.amazonaws.com/github/range-slider.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Floating Label</td>
    <td width="33.3333%">Mega Menu</td>
    <td width="33.3333%">Skeleton</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/floating-label/">
            <img alt="Tailwind CSS Floating Label" src="https://flowbite.s3.amazonaws.com/github/floating-label.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/mega-menu/">
            <img alt="Tailwind CSS Mega Menu" src="https://flowbite.s3.amazonaws.com/github/mega-menu.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/skeleton/">
            <img alt="Tailwind CSS Skeleton" src="https://flowbite.s3.amazonaws.com/github/skeleton.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">KBD (keyboard)</td>
    <td width="33.3333%">Drawer (offcanvas)</td>
    <td width="33.3333%">Popover</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/kbd/">
            <img alt="Tailwind CSS KBD (Keyboard)" src="https://flowbite.s3.amazonaws.com/github/kbd.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/drawer/">
            <img alt="Tailwind CSS Drawer (offcanvas)" src="https://flowbite.s3.amazonaws.com/github/drawer.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/popover/">
            <img alt="Tailwind CSS Popover" src="https://flowbite.s3.amazonaws.com/github/popover.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Video</td>
    <td width="33.3333%">Heading</td>
    <td width="33.3333%">Paragraph</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/video/">
            <img alt="Tailwind CSS Video" src="https://flowbite.s3.amazonaws.com/github/video.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/headings/">
            <img alt="Tailwind CSS Heading" src="https://flowbite.s3.amazonaws.com/github/heading.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/paragraphs/">
            <img alt="Tailwind CSS Paragraph" src="https://flowbite.s3.amazonaws.com/github/paragraph.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Blockquote</td>
    <td width="33.3333%">Image</td>
    <td width="33.3333%">List</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/blockquote/">
            <img alt="Tailwind CSS Blockquote" src="https://flowbite.s3.amazonaws.com/github/blockquote.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/images/">
            <img alt="Tailwind CSS Image" src="https://flowbite.s3.amazonaws.com/github/image.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/lists/">
            <img alt="Tailwind CSS List" src="https://flowbite.s3.amazonaws.com/github/list.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Link</td>
    <td width="33.3333%">Text</td>
    <td width="33.3333%">Horizontal line (HR)</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/links/">
            <img alt="Tailwind CSS Link" src="https://flowbite.s3.amazonaws.com/github/link.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/text/">
            <img alt="Tailwind CSS Text" src="https://flowbite.s3.amazonaws.com/github/text.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/typography/hr/">
            <img alt="Tailwind CSS HR" src="https://flowbite.s3.amazonaws.com/github/hr.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Speed Dial</td>
    <td width="33.3333%">Stepper</td>
    <td width="33.3333%">Indicators</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/speed-dial/">
            <img alt="Tailwind CSS Speed Dial" src="https://flowbite.s3.amazonaws.com/github/dial.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/stepper/">
            <img alt="Tailwind CSS Stepper" src="https://flowbite.s3.amazonaws.com/github/stepper.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/indicators/">
            <img alt="Tailwind CSS Indicators" src="https://flowbite.s3.amazonaws.com/github/indicators.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Bottom Navigation</td>
    <td width="33.3333%">Sticky Banner</td>
    <td width="33.3333%">Gallery (Masonry)</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/bottom-navigation/">
            <img alt="Tailwind CSS Bottom Navigation Bar" src="https://flowbite.s3.amazonaws.com/github/bottom-bar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/banner/">
            <img alt="Tailwind CSS Bottom Sticky Banner" src="https://flowbite.s3.amazonaws.com/github/banner.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/gallery/">
            <img alt="Tailwind CSS Image Gallery (Masonry)" src="https://flowbite.s3.amazonaws.com/github/gallery.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Jumbotron</td>
    <td width="33.3333%">Device mockups</td>
    <td width="33.3333%">Charts</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/jumbotron/">
            <img alt="Tailwind CSS Jumbotron" src="https://flowbite.s3.amazonaws.com/github/jumbotron.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/device-mockups/">
            <img alt="Tailwind CSS Device Mockups" src="https://flowbite.s3.amazonaws.com/github/device-mockups.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/plugins/charts/">
            <img alt="Tailwind CSS Charts" src="https://flowbite.s3.amazonaws.com/github/charts.jpg">
        </a>
    </td>
  </tr>
</table>

## Figma Design System

If you need the Figma files for the components you can check out our website for more information:

🎨 [Get access to the Figma design files](https://flowbite.com/figma/)

## Flowbite Blocks

Check out Flowbite Blocks to get access to over 330+ website sections coded in Tailwind CSS and Flowbite:

📦 [Check out Flowbite Blocks](https://flowbite.com/blocks/)

## Flowbite Icons

Start using over 430+ free and open-source collection of solid and outline SVG icons built for Tailwind CSS and with support for Figma and JSX (React):

🔍 [Check out the icons](https://flowbite.com/icons/)

## Pro version

Get access to all premium features including the Figma design system, access to all Flowbite Block sections and a dashboard UI interface:

💎 [Check out Flowbite Pro](https://flowbite.com/pro/)

## Learn Design Concepts

If you want to create even better Flowbite pages, learn design fundamentals from Teach Me Design - Enhance UI, a book that covers color theory, typography, UI and UX so you can make the most to implement the Flowbite Ecosystem!

📖 [Learn with Enhance UI](https://www.enhanceui.com/?ref=flowbite-github)

## Community

If you need help or just want to discuss about the library join the community on Github:

⌨️ [Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)

For casual chatting with others using the library:

💬 [Join the Flowbite Discord Server](https://discord.gg/4eeurUVvTy)

Video tutorials and presentations using Flowbite:

🎥 [Subscribe to our YouTube channel](https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A)

## Copyright and license

The Flowbite name and logos are trademarks of Bergside Inc.

- 📝 [Read about the licensing terms](https://flowbite.com/docs/getting-started/license/)
- 📀 [Brand guideline and trademark usage agreement](https://flowbite.com/brand/)
