---
layout: home
title: Tailwind CSS React - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your React project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_react: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: Next.js
nextLink: getting-started/next-js/
---

React is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.

Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library.

## Install Tailwind CSS with React

Follow the next steps to install Tailwind CSS and Flowbite with Create React App.

1. Run the following command in your terminal to create a React application, if you don't already have one:

```bash
npx create-react-app my-project
cd my-project
```

2. Install Tailwind CSS by running the following two commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure the template paths inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Set up the Tailwind directives inside the `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Install Flowbite and Flowbite React by running the following command in your terminal:

```bash
npm i flowbite flowbite-react
```

6. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

7. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        // ...
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ]

}
```

Now you can start the server by running `npm run start` or build the project using `npm run build`.

## React components

You can check out the whole collection of Flowbite components built with React and Tailwind CSS by checking out the [GitHub repository](https://github.com/themesberg/flowbite-react) and the [Flowbite React](https://flowbite-react.com) official documentation.