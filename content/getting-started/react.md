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

React is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.

Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library.

## Create a React project

The latest recommended way of creating a new React application is to use a front-end tooling software such as Vite or Parcel, but you can also use a more classic method such as Create React App.

### Using Vite React

1. Create a new React project using Vite by running the following two commands:

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Now that the project has been created you can start a local development server by running `npm run dev` and use the `npm run build` command to create an optimized build for production use.

### Create React App

Follow the next steps to install Tailwind CSS and Flowbite with Create React App.

1. Run the following command in your terminal to create a React application, if you don't already have one:

```bash
npx create-react-app my-project
cd my-project
```

You can now run `npm run start` to start a local server and `npm run build` to create a production build.

## Install Tailwind CSS

Install Tailwind CSS by running the following two commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure the template paths inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Set up the Tailwind directives inside the `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Flowbite

4. Install Flowbite and Flowbite React by running the following command in your terminal:

```bash
npm install flowbite flowbite-react
```

5. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

6. Additionally to your own `content` data you should add the Flowbite source paths to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        // ...
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ]

}
```

## React components

You can check out the whole collection of Flowbite components built with React and Tailwind CSS by checking out the [GitHub repository](https://github.com/themesberg/flowbite-react) and the [Flowbite React](https://flowbite-react.com) official documentation.
