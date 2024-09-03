---
layout: home
title: Tailwind CSS Next.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Next.js project and start developing with the most popular React-based framework built by Vercel
group: getting-started
toc: true
requires_nextjs: true

previous: React
previousLink: getting-started/react/
next: Vue
nextLink: getting-started/vue/
---

[Next.js](https://nextjs.org/) is a popular web development framework based on the React library that enables server-side rendering and generating static websites improving development time and website performance.

This technology is being used by hundreds of thousands of developers and companies such as Vercel, Netflix, TikTok, Twitch, Hulu, Nike and HBO Max since its original release in 2016.

By following this guide you will learn how to properly set up Tailwind CSS with the [Flowbite React](https://flowbite-react.com/) components inside an existing or new Next.js project.

## Requirements

Make sure that you have [Node.js](https://nodejs.org/en/) installed on your computer to be able to install Next.js, Tailwind CSS and Flowbite React using `npx` and `npm` commands.

## Create a Next.js project

Follow the next steps to create a brand new Next.js project using the CLI or a manual installation.

### Using the CLI

Run the following command to scaffold a new Flowbite React project using Next.js:

```bash
npm create flowbite-react@latest -- --template nextjs
```

Running this will automatically set up Flowbite React in a Next.js project environment.

### Manual install

1. Run the following command to create a new starter Next.js project:

```bash
npx create-next-app@latest
cd my-app
```

This command will install all of the necessary dependencies and boilerplate files for a basic Next.js project.

2. Run the following command in your terminal to start a local server:

```bash
npm run dev
```

This will make local development accessible via the browser on `http://localhost:3000`.

3. Run the following command to build the project files:

```bash
npm run build
```

Now that you have created a Next.js project you can proceed by setting up Tailwind CSS.

## Install Tailwind CSS

Follow the next steps to set up Tailwind CSS inside your Next.js project.

1. Run the following command to install Tailwind CSS, Post CSS and Autoprefixer:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Create a new `tailwind.config.js` and `postcss.config.js` file by running the following command:

```bash
npx tailwindcss init -p
```

The `-p` flag will also generate the PostCSS configuration file.

3. Configure the template paths inside the Tailwind CSS configuration file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This is needed for tagging all class names inside the project and including only the used ones in the CSS file.

4. Replace the contents of the `styles/globals.css` file and import the following directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

With this last change you should now have a proper Next.js and Tailwind CSS configuration set up.

Follow the steps of the next section in this tutorial to start using a library of open-source React components based on Tailwind CSS.

## Install Flowbite React

Flowbite React is an open-source set of interactive React components based on the Tailwind CSS utility-first framework featuring interactive elements such as modals, navbars, dropdowns, carousels, and more.

1. Install Flowbite React  via NPM by running the following command:

```bash
npm install flowbite-react
```

2. Import Flowbite React  and add the `plugin` and the `content` path inside your `tailwind.config.js` file:

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

Now that you have successfully installed Flowbite React  you can start using the components from the library.

## Flowbite components

Here's an example of how you can use the alert component by importing it from `flowbite-react`:

```javascript
import { Alert } from "flowbite-react";

function Demo() {
  return <Alert color="info">Alert!</Alert>;
}
```

Here's another example of how you can use the dropdown component:

```javascript
"use client";

import { Dropdown } from "flowbite-react";

function Demo() {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
```

Finally, another example on how you can use the navbar component:

```javascript
"use client";

import { Navbar } from "flowbite-react";

function Demo() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
```

To learn more about Flowbite React make sure to check out to the [repository](https://github.com/themesberg/flowbite-react) and the [documentation](https://flowbite-react.com/docs/getting-started/introduction).

## Next.js starter project

The open-source community from Flowbite has created a few starter templates that you can find on GitHub or Stackblitz to get you started with the Tailwind CSS, React, Next.js and Flowbite stack:

- [Starter template on GitHub](https://github.com/themesberg/flowbite-react-template-nextjs)
- [Starter template on StackBlitz](https://stackblitz.com/edit/flowbite-react-template-nextjs)

## More examples

You can additionally check out the [pro version of Flowbite](https://flowbite.com/pro/) to get access to over 300+ blocks, templates and an admin dashboard coded with Flowbite React and Tailwind CSS.