---
layout: home
title: Tailwind CSS React - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your React project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_react: true

previous: Changelog
previousLink: getting-started/changelog/
next: Next.js
nextLink: getting-started/next-js/
---

[React](https://react.dev/) is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.

Coupled with [Tailwind CSS](https://tailwindcss.com/) and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library.

## Create a React project

The latest recommended way of creating a new React application is to use a front-end tooling software such as [Vite](https://vitejs.dev/) or [Parcel](https://parceljs.org/).

### Using the CLI

Run the following command to scaffold a new [Flowbite React](https://flowbite-react.com/) project using [Vite](https://vitejs.dev/):

```bash
npm create flowbite-react@latest -- --template vite
```

### Using Vite React

Create a new React project using [Vite](https://vitejs.dev/) by running the following two commands:

```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

Now that the project has been created you can start a local development server by running `npm run dev` and use the `npm run build` command to create an optimized build for production use.

## Install Tailwind CSS

1. Install [Tailwind CSS](https://tailwindcss.com/) by running the following two commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure the template paths inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Set up the Tailwind directives inside the `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Flowbite React

[Flowbite React](https://github.com/themesberg/flowbite-react) is an open-source set of interactive React components based on the Tailwind CSS utility-first framework featuring interactive elements such as modals, navbars, dropdowns, carousels, and more.

4. Install [Flowbite React](https://flowbite-react.com/) by running the following command in your terminal:

```bash
npm install flowbite-react
```

5. Import [Flowbite React](https://flowbite-react.com/) and add the `plugin` and the `content` path inside your `tailwind.config.js` file:

```javascript
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
```

## React components

You can check out the whole collection of Flowbite components built with React and Tailwind CSS by checking out the [GitHub repository](https://github.com/themesberg/flowbite-react) and the [Flowbite React](https://flowbite-react.com) official documentation.

## Starter templates

- [Github](https://github.com/themesberg/flowbite-react-template-vite)
- [StackBlitz](https://stackblitz.com/edit/flowbite-react-template-vite)
