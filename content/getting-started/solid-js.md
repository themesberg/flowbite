---
layout: home
title: Tailwind CSS SolidJS - Flowbite
description: Learn how to install SolidJS with Tailwind CSS and Flowbite and get started with building web applications with a simple and performant reactive JavaScript library
group: getting-started
toc: true
requires_solidjs: true

previous: Gatsby
previousLink: getting-started/gatsby/
next: Laravel
nextLink: getting-started/laravel/
---

[SolidJS](https://www.solidjs.com/) is a popular and open-source declarative JavaScript library that empowers reactive UI interfaces for the web that ensures a performant benchmark, leverages the flexibility of JSX and also provides support for TypeScript, Astro, and Vite.

The SolidJS library is used by many web developers and smaller companies and it was even spotted being used in OpenAI's ChatGPT interface used for artificial intelligence UI/UX interactivity.

By following the steps from this guide you will learn how to create a new project using SolidJS, install and set up Tailwind CSS to leverage the utility classes and finally install and integrate the free and open-source UI components from Flowbite.

## Requirements

Before getting started make sure that you have [Node.js](https://nodejs.org/en/) installed on your local machine to be able to install both SolidJS, Tailwind CSS and Flowbite.

## Create a new project

1. Execute the following command in your terminal to create a new SolidJS project using Vite Templates:

```bash
npx degit solidjs/templates/js my-application
cd my-application
```

This command will create a boilerplate project that sets up a basic project structure and dependency files.

2. Install the project dependencies using NPM:

```bash
npm install
```

3. Execute the following command to create a local development server:

```bash
npm run dev
```

The newly created SolidJS project will now be accessible via the browser on `http://localhost:3000`.

4. Create a production build by running the following command in your terminal or deployment pipeline:

```bash
npm run build
```

You now have a working SolidJS project configuration installed and can now proceed with installing Tailwind CSS and Flowbite to build web UI interfaces even faster.

## Install Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is the most popular utility-first CSS framework leveraging PostCSS and utility classes inside your templates to speed up UI development.

1. Install Tailwind CSS using NPM and executing the following command in your terminal:

```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

2. Create a new `tailwind.config.js` and `postcss.config.js` configuration files by running the following command:
   
```bash
npx tailwindcss init -p
```

3. Set up SolidJS's default template paths inside the `tailwind.config.js` file to let Tailwind CSS know where to look for the utility classes:

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

4. Import the default Tailwind CSS directives inside the `./src/index.css` default CSS file from SolidJS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Restart your local development server by running `npm run dev` and you can now use the utility-first classes inside your SolidJS project by testing it out in your `App.jsx` file:

```javascript
function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class="text-4xl text-blue-600"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid, Tailwind CSS and Flowbite
        </a>
      </header>
    </div>
  );
}

export default App;
```

You now have both SolidJS and Tailwind CSS succesfully installed and configured in your local project and we can now proceed by setting up the UI components from Flowbite.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the classes from Tailwind CSS and it can help you kickstart building websites and applications by leveraging interactive UI components such as navbars, modals, dropdowns, datepickers, and more.

1. Require and install Flowbite using NPM by executing the following command in your terminal:

```bash
npm install flowbite
```

2. Require the Flowbite plugin and configure the template paths inside `tailwind.config.js`:
   
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // add this
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // and this
  ],
}
```

## Flowbite components

## SolidJS starter project
