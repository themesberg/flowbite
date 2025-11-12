---
layout: docs
title: Flowbite - Quickstart
description: Get started with Flowbite by including it into your project using NPM or CDN
group: getting-started
toc: true

previous: Introduction
previousLink: getting-started/introduction/
next: JavaScript
nextLink: getting-started/javascript/
---

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

## Getting started

Flowbite can be easily integrated into your project through NPM. It functions as a plugin for Tailwind CSS and offers both a data attributes interface and a JavaScript API for powering interactive UI components.

### Install using NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" target="_blank">Node.js</a> and <a href="https://tailwindcss.com/docs/installation/using-postcss" rel="nofollow" target="_blank">Tailwind CSS</a> installed. This guide works with Tailwind v4.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite
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

{{< code lang="css" icon="file" file="input.css" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" icon="file" file="input.css" >}}
@source "../node_modules/flowbite";
{{< /code >}}

5. Include the JavaScript code that powers the interactive elements before the end of your `<body>` tag:

{{< code lang="html" icon="file" file="index.html" >}}
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
{{< /code >}}

Learn more about the Flowbite JavaScript API and functionalities in the [JavaScript section](https://flowbite.com/docs/getting-started/javascript/).

If you have and old project with Tailwind CSS v3 then [check out this guide](#tailwind-css-v3-to-v4) to learn how to upgrade to v4.

### Include using CDN

The quickest way to get started working with Flowbite is to include the CSS and JS into your project via CDN.

Require the following minified stylesheet inside the `head` tag:

{{< code lang="html" icon="file" file="index.html" >}}
<link href="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.css" rel="stylesheet" />
{{< /code >}}

And include the following JavaScript file before the end of the `body` element:

{{< code lang="html" icon="file" file="index.html" >}}
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
{{< /code >}}

Please remember that the best way to work with Tailwind CSS and Flowbite is by purging the CSS classes.

### Bundled JavaScript

One of the most popular way of using Flowbite is to include the bundled Javascript file which is UMD ready using a bundler such as Webpack or Parcel which makes sure that all of the data attributes and functionality will work out-of-the-box.

You can directly import the main JavaScript file inside your bundled `app-bundle.js` file like this:

{{< code lang="javascript" icon="file" file="app.js" >}}
import 'flowbite';
{{< /code >}}

This file has access to all of the components and it automatically applies event listeners to the data attributes.

### Data attributes

The preferred way to use the interactive UI components from Flowbite is via the data attributes interface which allows us to add functionality via the HTML element attributes and most of the examples on our documentation applies this strategy.

For example, to set up a modal component all you need to do is use `data-modal-target` and `data-modal-{toggle|show|hide}` to toggle, show, or hide the component by clicking on any trigger element.

### Init functions

You can also use the init functions to set up the event listeners yourself. Here's an example how you can do it with Vue or Nuxt:

{{< code lang="javascript" icon="file" file="app.js" >}}
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

The `initFlowbite` function sets up all of the init functions for dropdowns, modals, navbars, tooltips and so on to hook onto the data attributes. Alternatively, you can also initialise each component category class separately with `initDropdowns` or `initModals`.

You can view more examples by browsing the [components from Flowbite](#components).

### ESM and CJS

Flowbite also offers an API for using the components programmatically and it supports both CJS and ESM for JavaScript which can be helpful if you need to expand the default capabilities of the data attributes interface and get access to function callbacks.

Here's an example how you can import and create a new Modal component inside JavaScript:

{{< code lang="javascript" icon="file" file="app.js" >}}
import { Modal } from 'flowbite'

const $modalElement = document.querySelector('#modalEl');

const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
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
{{< /code >}}

Check out the JavaScript behaviour section of each component's page to learn how you can use this.

### TypeScript

Flowbite supports type declarations for the interactive UI components including object interfaces and parameter types. Check out the following examples to learn how you can use types with Flowbite.

Additionally to our code above, we will now import some relevant types from the Flowbite package, namely the `ModalOptions` and `ModalInterface`:

{{< code lang="javascript" icon="file" file="app.ts" >}}
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// other code
{{< /code >}}

Learn more about Flowbite and TypeScript in the [quickstart guide](https://flowbite.com/docs/getting-started/typescript/).

## Tailwind CSS v3 to v4

If you want to upgrade v3 from Tailwind CSS with Flowbite you have to follow the <a href="https://tailwindcss.com/docs/v4-beta" rel="nofollow" target="_blank">v4 upgrade guide</a>.

1. Install the next versions of Tailwind CSS and Flowbite using NPM:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/postcss postcss
{{< /code >}}

2. Add the PostCSS plugin inside the `postcss.config.js` file:

{{< code lang="bash" icon="file" file="postcss.config.js" >}}
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
{{< /code >}}

3. Remove the old directives in your main CSS file and import Tailwind:

{{< code lang="css" icon="file" file="input.css" >}}
@import "tailwindcss";
{{< /code >}}

4. Use the `@config` directive to import the old configuration file from your project:

{{< code lang="css" icon="file" file="input.css" >}}
/* add this to copy the configuration settings from your project */
@config "../tailwind.config.js";
{{< /code >}}

5. Compile the source CSS file using NPX:

{{< code lang="bash" >}}
npx @tailwindcss/cli -i input.css -o output.css
{{< /code >}}

Now you should be good to go! Check the <a href="https://tailwindcss.com/docs/upgrade-guide#changes-from-v3" rel="nofollow" target="_blank">deprecated changes from v3</a> to learn more about the new features.

## Tailwind CSS v3

We recommend you to follow the upgrade guide from v3 to v4 since Flowbite works with both.

## Tailwind CSS v2

Flowbite works with the 2.x version of Tailwind CSS.

## WindiCSS

Flowbite also works with WindiCSS by including the plugin inside the `windi.config.js` file:

{{< code lang="javascript" icon="file" file="windi.config.js" >}}
plugins: [
    require('flowbite/plugin-windicss')
],
{{< /code >}}

## Figma design system

The components from Flowbite are first conceptualized and designed in Figma using the latest features such as variants, auto-layout, grids, responsive layouts, and more.

Learn more by checking out <a href="{{< param homepage >}}/figma/">Flowbite's Figma design system</a> and start designing your Tailwind CSS projects before actually coding them.

## TypeScript

If you want to use types for the interactive elements you can do that because since `v1.6.0` Flowbite also supports TypeScript.

Learn how to <a href="{{< ref "getting-started/typescript" >}}">install Tailwind CSS and Flowbite with TypeScript</a>.

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

## Github repository

The source files are also available to be cloned or downloaded from the official <a href="https://github.com/themesberg/flowbite">FlowBite Github repository</a>. Don't forget to give it a star if you appreciate the project.
