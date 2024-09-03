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

Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library using advanced theming functionalities and React specific components and methodologies.

## Create a React project

The latest recommended way of creating a new React application is to use a front-end tooling software such as Vite or Parcel since the React docs no longer recommends the `create-react-app` repository.

### Using the CLI

Run the following command to scaffold a new Flowbite React project using [Vite](https://vitejs.dev/):

```bash
npm create flowbite-react@latest -- --template vite
```

Running this will create a new folder with all the necessary files for a React project with Flowbite.

### Using Vite React

Create a new React project using Vite by running the following two commands:

```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

Now that the project has been created you can start a local development server by running `npm run dev` and use the `npm run build` command to create an optimized build for production use.

## Install Tailwind CSS

1. Install Tailwind CSS by running the following two commands:

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

Now that you have installed Tailwind CSS you can proceed by setting up Flowbite React.

## Install Flowbite React

Flowbite React is an open-source set of interactive React components based on the Tailwind CSS utility-first framework featuring interactive elements such as modals, navbars, dropdowns, carousels, and more.

4. Install Flowbite react by running the following command in your terminal:

```bash
npm install flowbite-react
```

5. Import Flowbite React and add the `plugin` and the `content` path inside your `tailwind.config.js` file:

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

Congratulations! You have successfully now installed all of the required dependencies so you are now ready to start building websites using Tailwind CSS, React and Flowbite.

## React components

You can check out the whole collection of Flowbite components built with React and Tailwind CSS by checking out the [GitHub repository](https://github.com/themesberg/flowbite-react) and the [Flowbite React](https://flowbite-react.com) official documentation.

## Starter templates

Use the following open-source starter templates that already have Tailwind CSS, React and Flowbite configured so you can get started with your project right away:

- [Flowbite React Template on GitHub](https://github.com/themesberg/flowbite-react-template-vite)
- [Flowbite React Template on StackBlitz](https://stackblitz.com/edit/flowbite-react-template-vite)

## More examples

You can also check out the [pro version of Flowbite](https://flowbite.com/pro/) to get access to over 300+ blocks, templates and an admin dashboard coded with Flowbite React and Tailwind CSS.