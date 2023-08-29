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

By following this guide you will learn how to properly set up Tailwind CSS with the Flowbite React components inside an existing or new Next.js project.

## Requirements

Make sure that you have [Node.js](https://nodejs.org/en/) installed on your computer to be able to install Next.js, Tailwind CSS and Flowbite using NPX and NPM.

## Create a Next.js project

1. Run the following command to create a new starter Next.js project:

```bash
npx create-next-app@latest --typescript
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
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [],
  theme: {},
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

1. Install the main Flowbite package and Flowbite React via NPM by running the following command:

```bash
npm install flowbite flowbite-react --save
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
```

3. Add the source code in the template paths to make sure that dynamic classes from the library will be compiled:

```javascript
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
```

Now that you have successfully installed Flowbite React you can start using the components from the library.

## Flowbite components

To get you started you can check out the full collection of React components from the [Flowbite React repository](https://github.com/themesberg/flowbite-react) and browse the documentation for the source code of each component.

Here's an example of how you can use the alert component by importing it from the `flowbite-react` package:

```javascript
import { Alert } from "flowbite-react";

export default function MyPage() {
  return <Alert color="info">Alert!</Alert>;
}
```

Here's another example of how you can use the dropdown component:

```javascript
import { Dropdown } from "flowbite-react";

<Dropdown label="Dropdown button">
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>
```

Finally, another example on how you can use the navbar component:

```javascript
import { Navbar } from "flowbite-react";

<Navbar
  fluid={true}
  rounded={true}
>
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
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
```

To learn more about Flowbite React make sure to check out to the repository and the main website.

## Next.js starter project

The Flowbite community has created an open-source Next.js starter project that has Tailwind CSS and Flowbite React set up beforehand and you can go ahead and clone it by checking out the [repository on GitHub](https://github.com/tulupinc/flowbite-next-starter).