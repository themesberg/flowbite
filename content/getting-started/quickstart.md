---
layout: home
title: Flowbite - Quickstart
description: Get started with Flowbite by including it into your project using NPM or CDN
group: getting-started
toc: true

previous: Introduction
previousLink: getting-started/introduction/
next: React
nextLink: getting-started/react/
---

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

## Require via NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow">Tailwind CSS</a> installed. 

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm i flowbite
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Include the main JavaScript file to make interactive elements work:

```html
<script src="../path/to/flowbite/dist/flowbite.js"></script>
```

4. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

If you use Webpack or other bundlers you can also import it like this:

```javascript
import 'flowbite';
```

## Include via CDN

The quickest way to get started working with FlowBite is to simply include the CSS and JavaScript into your project via CDN.

Require the following minified stylesheet inside the `head` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/flowbite@{{< current_version >}}/dist/flowbite.min.css" />
```

And include the following JavaScript file before the end of the `body` element:

```html
<script src="https://unpkg.com/flowbite@{{< current_version >}}/dist/flowbite.js"></script>
```

## Tailwind CSS 2.0

Flowbite works with the 2.x version of Tailwind CSS.

## Tailwind CSS 3.0

Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Flowbite.

<div class="mt-8 -mb-5">
  {{< requires_react >}}
</div>

## React

If you're using React as a front-end library you can also use the components from Flowbite including the interactive ones such as the dropdowns, modals, and tooltips as long as you install Tailwind CSS and Flowbite in an existing project.

Learn how to <a href="{{< ref "getting-started/react" >}}">install Tailwind CSS and Flowbite with React</a>.

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

## Django

Check out the Django integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing even faster using the UI components from Flowbite.

Learn how to <a href="{{< ref "getting-started/django" >}}">install Tailwind CSS and Flowbite with Django</a>.

## Flask

Check out the Flask integration guide with Tailwind CSS and Flowbite to set up all technologies and start developing with a micro framework combined with the UI components from Flowbite.

Learn how to <a href="{{< ref "getting-started/flask" >}}">install Tailwind CSS and Flowbite with Flask</a>.

## Github repository

The source files are also available to be cloned or downloaded from the official <a href="https://github.com/themesberg/flowbite">FlowBite Github repository</a>. Don't forget to give it a star if you appreciate the project.
