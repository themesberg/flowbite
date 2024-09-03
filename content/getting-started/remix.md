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

### Using the CLI

Run the following command to scaffold a new [Flowbite React](https://flowbite-react.com/) project using Remix:

```bash
npm create flowbite-react@latest -- --template remix
```

### Manual install

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
npm install -D tailwindcss postcss autoprefixer
```

2. Create a new `tailwind.config.ts` and `postcss.config.js` file by running the following command:

```bash
npx tailwindcss init --ts -p
```

3. Configure the template paths inside the Tailwind CSS configuration file:

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

This will ensure that the classes from Tailwind CSS will be parsed for compilation.

1. Create a new `./app/tailwind.css` file relative to the root folder of your project and import the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. In your `./app/root.tsx` import the stylesheet and export is as a link:

```ts
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
```

You can verify the Tailwind CSS installation by editing the `./app/routes/_index.tsx` file:

```js
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

[Flowbite React](https:/flowbite-react.com) is a free and open-source library of UI components based on the Flowbite design system that allows you to plug-and-play interactive and responsive React components such as modals, navbars, dropdowns, and more directly inside your Remix and Tailwind CSS configured project.

1. The first step is to install Flowbite React via NPM:

```bash
npm install flowbite-react
```

2. Import Flowbite React and add the `plugin` and the `content` path inside your `tailwind.config.ts` file:

```ts
import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
} satisfies Config;
```

That's all that you need to do to leverage the UI component collection from the core Flowbite and Flowbite React library.

## Flowbite components

The full collection of React components can be browsed either on the [GitHub repository](https://github.com/themesberg/flowbite) or the official [documentation](https://flowbite-react.com/docs/getting-started/introduction) and you can copy-paste the examples directly into your application.

Here's an example of how you can use the Button and Tooltip component:

```js
import { Tooltip, Button } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Tooltip content="Flowbite is awesome">
        <Button>Hover to find out</Button>
      </Tooltip>
    </div>
  );
}
```

Another example would be using the Dropdown component:

```js
import { Dropdown } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
```

And finally, here's an example using the Navbar component:

```js
import { Navbar } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Navbar fluid={true} rounded={true}>
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
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
```

## Starter templates

Check out the following open-source starter templates built with Flowbite React, Tailwind CSS and Remix:

- [Starter template on Github](https://github.com/themesberg/flowbite-react-template-remix)
- [Starter template on StackBlitz](https://stackblitz.com/edit/flowbite-react-template-remix)
