---
layout: home
title: Flowbite - Tailwind CSS component library
description: Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
group: getting-started
toc: true
cleanTitle: true

next: Quickstart
nextLink: getting-started/quickstart/
---

## Introduction

Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, templates, and more.

It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but also some more advanced interactive elements such as datepickers. 

All of the elements are built using the utility classes from Tailwind CSS and vanilla JavaScript with support for TypeScript.

<iframe width="100%" class="my-8 rounded-lg shadow-lg yt-video" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here's a quick overview of the Flowbite ecosystem including the open source Tailwind components library, the Figma design files, and the pro version.

<div class="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
    <a href="{{< ref "getting-started/quickstart" >}}" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quickstart</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Learn how to get started by downloading and configuring Flowbite locally on your machine and start developing.</p>
    </a>
    <a href="{{< ref "components/alerts" >}}" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Components</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Explore the Tailwind CSS elements such as buttons, navbars, alerts, dropdowns and use them to build your website.</p>
    </a>
    <a href="{{< param homepage >}}/figma/" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Figma design files</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Prototype and design your website before coding with the Flowbite Figma file which is based on the Tailwind CSS classes.</p>
    </a>
    <a href="{{< param homepage >}}/icons/" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flowbite Icons</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Free and open-source collection of over 430 solid and outline styled SVG icons to use with our UI component library and Figma.</p>
    </a>
    <a href="{{< param homepage >}}/pro/" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flowbite Blocks</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Take your Figma and Tailwind CSS development to the next level with thousands more elements and pages with Flowbite Pro.</p>
    </a>
    <a href="{{< param homepage >}}/pro/" class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upgrade to Pro</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Check out over 330+ website sections and advanced UI components built with Tailwind CSS and the Flowbite Library.</p>
    </a>
</div>

## Using Flowbite

One of the disadvantages of Tailwind CSS compared to other frameworks is that it doesn't have a base set of components. This makes it really hard to quickly prototype a user interface. 

This is where Flowbite comes into play: it's basically Tailwind CSS, but you get all of the components that you would normally get with a classic CSS framework like Bootstrap or Bulma.

There are over 56 types of UI components including buttons, alerts, breadcrumbs, pagination, and navbars. Flowbite also includes some custom JavaScript that enables interactive components, such as dropdowns, modals, tooltips, and many more. 

## Getting started

Flowbite is technically a plugin that can be included into any existing Tailwind CSS project. To get started, you first need to make sure that you have a working Tailwind CSS project installed and that you also have Node and NPM installed on your machine.

### Require via NPM

1. Install the latest version of Flowbite using NPM:

```bash
npm install flowbite
```

2. Include Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

4. Require the JavaScript code that powers the interactive elements before the end of your `<body>` tag:

```html
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
```

### Include via CDN

If you want to quickly test out Flowbite you can easily include the following CSS and JavaScript files.

Require the following minified stylesheet inside the `head` tag:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/{{< current_version >}}/flowbite.min.css"  rel="stylesheet" />
```

And include the following javascript file before the end of the `body` element:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/{{< current_version >}}/flowbite.min.js"></script>
```

Please remember that the best way to work with Tailwind CSS and Flowbite is by purging the CSS classes.

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

### Init functions

You can also use the init functions to set up the event listeners yourself. Here's an example how you can do it with Vue or Nuxt:

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

Learn more about Flowbite and TypeScript in the [quickstart guide](https://flowbite.com/docs/getting-started/typescript/).

## Figma Design System

The components from Flowbite are first conceptualized and designed in Figma using the latest features such as variants, auto-layout, grids, responsive layouts, and more.

Learn more by checking out <a href="{{< param homepage >}}/figma/">Flowbite's Figma design system</a> and start designing your Tailwind CSS projects before actually coding them.

## Flowbite SVG Icons

Check out a free and open-source collection of over 430 SVG icons with solid and outline styles to integrate with the UI components from Flowbite.

Learn more by browsing the <a href="{{< param homepage >}}/icons/">Flowbite Icons</a> page and interface to directly copy-paste the icons into your project as raw SVGs or React (JSX) code.

## Pro version

If you want to take your Tailwind development workflow to the next level you can check out the [pro version of Flowbite]({{< param homepage >}}/pro/) which includes fully coded pages and layouts for application, marketing, and e-commerce user interfaces.

## Learn Design Concepts

If you want to create even better Flowbite pages, learn design fundamentals from [Teach Me Design - Enhance UI](https://www.enhanceui.com/?ref=flowbite-introduction), a book that covers color theory, typography, UI and UX so you can make the most to implement the Flowbite Ecosystem!

## Tailwind CSS 2.0

Flowbite is fully compatible with the 2.x versions of Tailwind CSS.

## Tailwind CSS 3.0

Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Flowbite.

## WindiCSS

Flowbite also works with WindiCSS.

Just include the WindiCSS version of the Flowbite plugin inside the `windi.config.js` file.

```bash
plugins: [
    require('flowbite/plugin-windicss')
],
```

<div class="mt-8 -mb-5">
  {{< requires_react >}}
</div>

## React

If you're using React as a front-end library you can also use the components from Flowbite including the interactive ones such as the dropdowns, modals, and tooltips as long as you install Tailwind CSS and Flowbite in an existing project.

Learn how to <a href="{{< ref "getting-started/react" >}}">install Tailwind CSS and Flowbite with React</a>.

<div class="mt-8 -mb-5">
  {{< requires_nextjs >}}
</div>

## Next.js

If you're using React as a front-end library and Next.js as a framework you can also use the components from Flowbite React such as the modals, dropdowns, and navbars to speed up your development time coupled with the utility classes from Tailwind CSS.

Learn how to <a href="{{< ref "getting-started/next-js" >}}">install Tailwind CSS and Flowbite with Next.js and React</a>.

<div class="mt-8 -mb-5">
  {{< requires_vue >}}
</div>

## Vue.js

The components from Flowbite can also be used any new or existing Vue 3 projects as long as you install Tailwind CSS and Flowbite.

Learn how to <a href="{{< ref "getting-started/vue" >}}">install Tailwind CSS and Flowbite with Vue.js</a>.


<div class="mt-8 -mb-5">
  {{< requires_nuxtjs >}}
</div>

## Nuxt

If you're using Vue 3 as a front-end library and Nuxt as a framework you can also use the components from Flowbite Vue such as the modals, dropdowns, and navbars to speed up your development time coupled with the utility classes from Tailwind CSS.

Learn how to <a href="{{< ref "getting-started/nuxt-js" >}}">install Tailwind CSS and Flowbite with Nuxt and Vue 3</a>.

<div class="mt-8 -mb-5">
  {{< requires_laravel >}}
</div>

## Laravel

If you're running a Laravel application you can easily set up Tailwind CSS and Flowbite and start developing user interfaces based on the utility-first classes and components.

Learn how to <a href="{{< ref "getting-started/laravel" >}}">install Tailwind CSS and Flowbite with Laravel</a>.

<div class="mt-8 -mb-5">
  {{< requires_svelte >}}
</div>

## Svelte

If you're using a Svelte application you can install a standalone Flowbite Svelte library and start developing modern websites using the components from Flowbite and the utility classes from Tailwind CSS.

Learn how to <a href="{{< ref "getting-started/svelte" >}}">install Tailwind CSS and Flowbite with Svelte</a>.

<div class="mt-8 -mb-5">
  {{< requires_angular >}}
</div>

## Angular

You can read our official guide to learn how to set up a new Angular project together with Tailwind CSS and Flowbite to start building advanced web applications with Google's framework.

Learn how to <a href="{{< ref "getting-started/angular" >}}">install Tailwind CSS and Flowbite with Angular</a>.

<div class="mt-8 -mb-5">
  {{< requires_ruby >}}
</div>

## Ruby on Rails

If you're using a Ruby on Rails project you can install Tailwind CSS with Flowbite and start building web pages using the utility-first classes and the interactive UI compnonents from Flowbite.

Learn how to <a href="{{< ref "getting-started/rails" >}}">install Tailwind CSS and Flowbite with Ruby on Rails</a>.

<div class="mt-8 -mb-5">
  {{< requires_django >}}
</div>

## Django

Check out the Django integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing even faster using the UI components from Flowbite.

Learn how to <a href="{{< ref "getting-started/django" >}}">install Tailwind CSS and Flowbite with Django</a>.

<div class="mt-8 -mb-5">
  {{< requires_flask >}}
</div>

## Flask

Check out the Flask integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing with a micro framework combined with the UI components from Flowbite.

Learn how to <a href="{{< ref "getting-started/flask" >}}">install Tailwind CSS and Flowbite with Flask</a>.

## Licensing

The library of components from Flowbite is open source under the [MIT License]({{< ref "getting-started/license" >}}).

## Contributions

Flowbite is an open source library under the MIT license and anyone who would like to contribute to the codebase or design is welcome to do so. 

Please reach out to us via the <a href="https://github.com/themesberg/flowbite">official Github repository</a> and the main development team will get in touch as soon as possible.

## Discord community

Feel free to join our <a href="https://discord.gg/4eeurUVvTy" rel="nofollow">community on Discord</a> to receive help, contribute to the project, or just discuss about Flowbite, Tailwind CSS, and web development in general.

## YouTube channel

You can also subscribe to the official [Flowbite YouTube channel](https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A) to view tutorials on how you can use the Flowbite ecosystem to design and build websites.

## Authors

- <a href="https://twitter.com/zoltanszogyenyi">Zoltán Szőgyényi</a> (web developer)
- <a href="https://twitter.com/RobertTanislav">Robert Tanislav</a> (web designer)