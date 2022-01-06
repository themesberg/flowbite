---
layout: home
title: Tailwind CSS React - Flowbite
description: Learn how to install and set up Tailwind CSS with Flowbite for your React project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_react: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: Vue
nextLink: getting-started/vue/
---

React is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more. Coupled with Tailwind CSS and the components from Flowbite you will be able to develop applications faster than ever.

## Install Tailwind CSS and Flowbite with React

Follow the next steps to set up Tailwind CSS and Flowbite within your React project.

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

5. Install Flowbite by running the following command in your terminal:

```bash
npm install @themesberg/flowbite
```

6. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('@themesberg/flowbite/plugin')
    ]

}
```

7. Import the Flowbite JavaScript file inside your main `index.js` file:

```bash
import '@themesberg/flowbite';
```

Now you can start the server by running `npm run start` or build the project using `npm run build`.

## Flowbite components in React

Most of the components from Flowbite will work seamlessly as long as you have Tailwind CSS included in your project. The interactive elements such as dropdowns, tooltips, and modals will work based on the data attributes that you can code directly in your view files. Remember to update the `class` tag to `className` to prevent errors.

We are currently working on a standalone React project where you will be able to include these interactive elements directly as React components and programatically work with them instead of using just the data attributes.