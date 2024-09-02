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

By following this guide you will learn how to properly set up [Tailwind CSS](https://tailwindcss.com/) with the [Flowbite React](https://flowbite-react.com/) components inside an existing or new [Next.js](https://nextjs.org/) project.

## Requirements

Make sure that you have [Node.js](https://nodejs.org/en/) installed on your computer to be able to install [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Flowbite React](https://flowbite-react.com/) using `npx` and `npm` commands.

## Create a Next.js project

### Using the CLI

Run the following command to scaffold a new [Flowbite React](https://flowbite-react.com/) project using [Next.js](https://nextjs.org/):

```bash
npm create flowbite-react@latest -- --template nextjs
```

### Manual install

1. Run the following command to create a new starter [Next.js](https://nextjs.org/) project:

```bash
npx create-next-app@latest
cd my-app
```

This command will install all of the necessary dependencies and boilerplate files for a basic [Next.js](https://nextjs.org/) project.

2. Run the following command in your terminal to start a local server:

```bash
npm run dev
```

This will make local development accessible via the browser on `http://localhost:3000`.

3. Run the following command to build the project files:

```bash
npm run build
```

## Install Tailwind CSS

After you have a working Next.js project the next step would be to follow the [installation guide](https://tailwindcss.com/docs/guides/nextjs) for Tailwind CSS.

1. Install Tailwind CSS, PostCSS and Autoprefixer using NPM:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Create a new `tailwind.config.js` and `postcss.config.js` file by running the following command in your terminal:

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

This is needed in order to look for all of the class names inside the project and only include the used ones in the final CSS file.

4. Replace the contents of the `styles/globals.css` file and import the following directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

With this last change you should now have a proper Next.js and Tailwind CSS configuration set up.

Follow the steps of the next section in this tutorial to start using a library of open-source React components based on Tailwind CSS.

## Install Flowbite React

[Flowbite React](https://github.com/themesberg/flowbite-react) is an open-source set of interactive React components based on the Tailwind CSS utility-first framework featuring interactive elements such as modals, navbars, dropdowns, carousels, and more.

1. Install [Flowbite React](https://flowbite-react.com/) via NPM by running the following command:

```bash
npm install flowbite-react
```

2. Import [Flowbite React](https://flowbite-react.com/) and add the `plugin` and the `content` path inside your `tailwind.config.js` file:

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

Now that you have successfully installed [Flowbite React](https://flowbite-react.com/) you can start using the components from the library.

## Flowbite components

To get you started you can check out the full collection of React components from the [Flowbite React repository](https://github.com/themesberg/flowbite-react) and browse the documentation for the source code of each component.

Here's an example of how you can use the alert component by importing it from the `flowbite-react` package:

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

To learn more about [Flowbite React](https://flowbite-react.com/) make sure to check out to the [repository](https://github.com/themesberg/flowbite-react) and the [main website](https://flowbite-react.com/).

## Next.js starter project

The Flowbite community has created an open-source Next.js starter project that has Tailwind CSS and Flowbite React set up beforehand and you can go ahead and clone it by checking out the [repository on GitHub](https://github.com/tulupinc/flowbite-next-starter).

## Starter templates

#### Official

- [Github](https://github.com/themesberg/flowbite-react-template-nextjs)
- [StackBlitz](https://stackblitz.com/edit/flowbite-react-template-nextjs)

#### Community

- [Kitchen Sink](https://github.com/tulupinc/flowbite-next-starter) - [Demo](https://flowbite-next-starter.vercel.app/)
