---
layout: home
title: Tailwind CSS Remix - Flowbite
description: Learn how to install Remix with Tailwind CSS and the UI components from Flowbite to leverage quicker page loads with a full-stack web framework built by Shopify
group: getting-started
toc: true
requires_remix: true

previous: Astro
previousLink: getting-started/astro/
next: Meteor.js
nextLink: getting-started/meteor-js/
---

[Remix](https://remix.run/) is a new and increasingly popular full-stack web framework based on React that allows you to build websites with quicker page load by leveraging distributed systems and using the native Web Fetch API to load content from the server.

The Remix framework is being used by hundreds of thousands of developers and large companies one of which is Shopify which actually acquired it on October 31st, 2022.

Follow the next steps in this guide to learn how to create a new Remix project and install and se tup Tailwind CSS together with the UI components from Flowbite.

## Requirements

Before getting started make sure you that have [Node.js](https://nodejs.org/en/) and NPM installed on your local machine to be able to install the required packages including Remix, Tailwind CSS and Flowbite.

## Create a Remix project

1. Run the following command in your terminal to set up a new Remix project:

```bash
npx create-remix@latest
```

After using the Create Remix CLI command you will be prompted to select some options such as choosing between TypeScript or JavaScript, using different types of servers, and using NPM or Yarn - you can choose whatever best suits your needs.

2. Run the following command to start a local server:

```bash
npm run dev
```

This will make local development accessible via the browser on `http://localhost:3000`.

If you want to build the project you can run `npm run build` and that will create a production-ready version of the application that you can deploy on a server.

We strongly encourage you to go through the [Remix Blog Tutorial](https://remix.run/docs/en/v1/tutorials/blog) to learn the basics of this framework if it's the first time you're using it.

## Install Tailwind CSS

Now that you have a Remix project configured you can proceed by installing [Tailwind CSS](https://tailwindcss.com/):

1. Install Tailwind CSS via NPM:

```bash
npm install -D tailwindcss concurrently
```

2. Create a new `tailwind.config.js` by running the following command:

```bash
npx tailwindcss init
```

3. Configure the template paths inside the Tailwind CSS configuration file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This will ensure that the classes from Tailwind CSS will be parsed for compilation.

4. Create a new `./css/app.css` file relative to the root folder of your project and import the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. In your `./app/root.jsx` import the stylesheet and export is as a link:

```javascript
import CSS from "./css/app.css"

export function links() {
  return [{ rel: "stylesheet", href: CSS }]
}
```

6. Update your `package.json` file by making sure that Tailwind CSS will also be compiled:

```javascript
{
  "scripts": {
    "build": "npm run build:css && remix build",
    "build:css": "tailwindcss -m -i ./css/app.css -o app/css/app.css",
    "dev": "concurrently \"npm run dev:css\" \"remix dev\"",
    "dev:css": "tailwindcss -w -i ./css/app.css -o app/css/app.css"
  }
}
```

You can verify the Tailwind CSS installation by editing the `./app/routes/index.jsx` file:

```javascript
export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://flowbite.com/getting-started/remix/"
            rel="noreferrer"
            className="text-lg text-blue-600 hover:underline"
          >
            Flowbite + Remix + Tailwind CSS Tutorial
          </a>
        </li>
      </ul>
    </div>
  );
}
```

If you're running a local server with the `npm run dev` command, then the link show be colored blue and you're now ready to use Tailwind CSS classes inside your Remix application.

## Install Flowbite React

[Flowbite React](https://github.com/themesberg/flowbite-react) is a free and open-source library of UI components based on the Flowbite design system that allows you to plug-and-play interactive and responsive React components such as modals, navbars, dropdowns, and more directly inside your Remix and Tailwind CSS configured project.

1. The first step is to install both Flowbite and Flowbite React via NPM:

```bash
npm install flowbite flowbite-react --save
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file and configure the template paths:

```javascript
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  plugins: [
    // other plugins...
    require("flowbite/plugin")
  ],
  theme: {},
};
```

That's all that you need to do to leverage the UI component collection from the core Flowbite and Flowbite React library.

## Flowbite components

The full collection of React components can be browsed either on the [GitHub repository](https://github.com/themesberg/flowbite) or the official [Flowbite React](https://flowbite-react.com/) website and you can copy-paste the examples directly into your application.

Here's an example of how you can use the Button and Tooltip component:

```javascript
import { Tooltip, Button } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Tooltip content="Flowbite is awesome">
      <Button>
        Hover to find out
      </Button>
    </Tooltip>
    </div>
  );
}
```

Another example would be using the Dropdown component:

```javascript
import { Dropdown } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
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
    </div>
  );
}
```

And finally, here's an example using the Navbar component:

```javascript
import { Navbar } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
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
    </div>
  );
}
```

## Remix starter project

The awesome Flowbite community has created a free and open-source [Remix starter project](https://github.com/tulupinc/flowbite-remix-starter) that you can use pre-configured with Tailwind CSS and the UI components from Flowbite.
