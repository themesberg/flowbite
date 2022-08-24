---
layout: home
title: Tailwind CSS Laravel - Flowbite
description: Learn how to install and use FlowbiteTailwind CSS components in your Laravel projects.
group: getting-started
toc: true
requires_laravel: true

previous: Vue
previousLink: getting-started/vue/
next: Svelte
nextLink: getting-started/svelte/
---

Laravel is the most popular PHP web framework based on the model-view-controller (MCV) model that helps you build modern web applications and API's.

Use the officially recommended Tailwind CSS utility-first framework and the UI components from Flowbite to enhance your front-end development process.

## Requirements

These instructions assume you have a working Laravel 9+ project with Tailwind installed. If not, follow the [Laravel installation guide](https://laravel.com/docs/9.x/installation) and the instructions for [setting up Tailwind CSS in a Laravel project](https://tailwindcss.com/docs/guides/laravel).

**Note:** New Laravel projects, as of version 9.19, use [Vite](https://vitejs.dev/) as the default front-end bundler.

## Installation

1. Install the Flowbite package:

```bash
npm install -D flowbite
```

2. Add the view paths and require Flowbite as a plugin inside `tailwind.config.js`:

```bash
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }
```

3. Import the Flowbite Javascript files:

*Option 1*: Include the files in your HTML

```javascript
<script src="../path/to/flowbite/dist/flowbite.js"></script>
```

or import from a CDN

```javascript
<script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
```

**Option 2**: Import the module in resources/js/app.js

```javascript
import "./bootstrap";
import "flowbite";
```

4. Start the Vite build process:
```bash
npm run dev
```

## Using Flowbite components in Laravel
[Laravel Blade components](https://laravel.com/docs/9.x/blade#components) are a great way to extract Flowbite components for better reusability. Here’s an example Blade component that uses the [Flowbite default card](https://flowbite.com/docs/components/card/) with a named slot for the card title and a default slot for the card body.

### Example Blade card component:

`resources/views/components/card.blade.php`

```html
<a href="#" 
     class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md 
     hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900    
               dark:text-white">
        {{ $title }}
    </h5>
    
     <p class="font-normal text-gray-700 dark:text-gray-400">{{ $slot }}</p>
</a>
```

### Using the Blade card component in your view:

```html
<x-card>
    <x-slot:title>Noteworthy technology acquisitions 2022</x-slot:title>
    Here are the biggest enterprise technology acquisitions of 2022 so far, in  
    reverse chronological order.
</x-card>
```


## Flowbite components

Now that you have successfully installed the project you can start using the UI components from Flowbite and Tailwind CSS to develop modern websites and web applications.

We recommend exploring the components using the search bar navigation (`cmd` or `ctrl` + `k`) or by browsing the components section of the sidebar on the left side of this page.

<!-- ## Boilerplate Github Repository

Download or clone the Flowbite Laravel Github boilerplate repository to get access to a project that already has Laravel, Tailwind CSS, and Flowbite set up for development.

```bash
git clone ...
``` -->
