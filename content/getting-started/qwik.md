---
layout: home
title: Tailwind CSS Qwik - Flowbite
description: Learn how to create a Qwik project and install Tailwind CSS to instantly build scalable and interactive web apps using the UI components from Flowbite
group: getting-started
toc: true
requires_qwik: true

previous: SolidJS
previousLink: getting-started/solid-js/
next: Laravel
nextLink: getting-started/laravel/
---

[Qwik](https://qwik.builder.io/) is a free and open-source front-end framework built by the team behind Builder that allows you to build instant-loading, scalable and interactive web apps by leveraging the precision lazy-loading feature by asynchronously loading component rendering, tasks, listeners, and styles.

The framework was first released on July 18th, 2021 by Adam Bradley and Miško Hevery and has a large community of active developers with a popular GitHub repository with over 18k stars and has a showcase of websites such as Builder.io, Reflact.app, Soundy.cloud and more that rely on Qwik for building websites.

By following this guide you will learn how to create a new Qwik project, install and configure Tailwind CSS and proceed by installing Flowbite to start leveraging the open-source UI components to build interactive and instant-loading websites faster.

## Requirements

Before getting started make sure that you have [Node.js v16.8](https://nodejs.org/en) or higher available on your local machine and we also recommend to install the [Qwik VS Code Extension](https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets) to enable Qwik snippets.

## Create a Qwik project

1. Create a new project by running the following command in your terminal:

```bash
npm create qwik@latest
```

The custom CLI (command line interface) from Qwik will prompt you with some questions on how you want your project to be configured - follow the steps until you have a fully working directory.

2. Start a local development server by running:

```bash
npm run start
```

You should now be able to access a boilerplate Qwik project on `http://localhost:5173/` from your local browser and start developing with the framework.

## Install Tailwind CSS

Tailwind CSS is a popular utility-first CSS framework that allows you to quickly build website user interfaces by directly writing the CSS and styles in your HTML templates via the rich collection of utility classes.

The easiest way to set up Tailwind CSS within your Qwik project is to run a starter script command:

```bash
npm run qwik add tailwind
```

This command will automatically set up the following:

- install Tailwind CSS and its dependencies
- create a boilerplate `tailwind.config.js` and `postcss.config.js` file
- modify the `src/global.css` file to import the Tailwind modules

By restarting the sever you will now be able to use the utility-first classes from Tailwind CSS.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular open-source UI component library that is built on top of the Tailwind CSS framework leveraging the utility-first class approach with custom interactive JavaScript that allows you to use and customize a collection of components like dropdowns, navbars, modals, and more.

Follow the next steps to install and set up Flowbite in your Qwik project:

1. Install Flowbite via NPM inside your terminal:

```bash
npm install flowbite
```

2. Require the Flowbite Plugin inside your `tailwind.config.js` configuration file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Set up the template paths for the dynamic classes file inside the configuration file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

4. Finally, import the Flowbite JavaScript file inside your Qwik project to start using interactive components:

```javascript
```

Congratulations! Now you can start using all of the UI components from the Flowbite Library inside your Qwik project together with Tailwind CSS and build websites and user interfaces even faster.

## UI components

## Qwik starter project