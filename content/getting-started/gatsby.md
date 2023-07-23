---
layout: home
title: Tailwind CSS Gatsby - Flowbite
description: Learn how to install Gatsby with Tailwind CSS and Flowbite and start building websites with an open-source static site generator built on top of React and GraphQL
group: getting-started
toc: true
requires_gatsby: true

previous: Meteor.js
previousLink: getting-started/meteor-js/
next: SolidJS
nextLink: getting-started/solid-js/
---

[Gatsby](https://www.gatsbyjs.com/) is a popular open-source static site generator framework built on top of Node.js, React, and GraphQL that allows you to build websites using content sources such as Markdown, MDX and leverages other headless CMS technologies such as WordPress, Drupal and more.

This React framework is used by many popular websites and companies such as Snapchat, Tinder, Revolut, Stack, and others and it can help you quickly build a website without having to create a separate administrative panel to manage content.

By following this guide you will learn how to create a new Gatsby project, install and configure Tailwind CSS and also set up Flowbite to start building websites even faster with the open-source UI components.

## Requirements

Before creating a new project make sure that you have [Node.js](https://nodejs.org/en/) (v18 or higher) installed on your local machine and production server because it will be required to install all of the three technologies.

## Create a Gatsby project

1. The first step in this guide is to create a new Gatsby project using the CLI interface via NPM:

```bash
npm init gatsby
```

This command will prompt you to select the options for creating a new Gatsby application such as choosing between JavaScript or TypeScript, selecting your preferred CMS (WordPress, Drupal), styling system (we'll use Tailwind CSS), additional configurations and the name of the project.

2. Create a local server by running the following command in your terminal:

```bash
npm run develop
```

This command will compile your source code and make the Gatsby starter project accessible via your browser on the default `http://localhost:8000` address.

3. To create a production build you can run the following command, just make sure you have Gatsby globally installed for your terminal:

```bash
gatsby build
```

You can also use [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) as the recommended way to host your website.

## Install Tailwind CSS

[Tailwind CSS](https://tailwindcss.com) is a popular utility-first CSS framework that allows you to build user interfaces quickly directly inside your template files without having to touch your CSS.

1. Install Tailwind CSS and the PostCSS plugin for Gatsby using NPM:

```bash
npm install -D tailwindcss gatsby-plugin-postcss postcss autoprefixer
```

2. Use the following command to create a default `tailwind.config.js` configuration using PostCSS:

```bash
tailwindcss init -p
```

3. Require the `gatsby-plugin-postcss` plugin inside your `gatsby-config.js` file:

```javascript
module.exports = {
  plugins: [
    // other plugins ...
    'gatsby-plugin-postcss',
  ],
}
```

4. Configure the template paths for your Gatsby project inside your `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Create a new `./src/css/global.css` file and import the default Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* other styles ... */
```

6. Finally, import the created `global.css` CSS file inside a new `./gatsby-browser.js` file:

```javascript
import './src/css/global.css'
```

7. You can now start using Tailwind CSS utility classes inside your Gatsby templates. For example, you can add `text-blue-600` to one of the elements inside your `index.js` file.

```javascript
const IndexPage = () => {
  return (
    <main>
      <h1 className="text-blue-600">
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      // other markup ...
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
```

8. Restart your server and run `npm run develop` to apply the changes and now the title should have a blue color instead of the default black from the browser.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the Tailwind CSS framework featuring interactive elements such as dropdowns, modals, navbars, carousels, and more that can help you build websites even faster. 

Flowbite also supports technologies and frameworks such as React, Vue, Svelte, Angular, and more. In this guide, we will use the [Flowbite React](https://github.com/themesberg/flowbite-react) library because it matches the best with Gatsby.

1. The first step is to install the Flowbite and Flowbite React package via NPM:

```bash
npm install flowbite flowbite-react
```

2. Make sure that you require the Flowbite plugin and configure the template paths inside your Tailwind CSS configuration file:

```javascript
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js", // add this
  ],
  plugins: [
    require("flowbite/plugin") // add this
  ],
  theme: {},
};
```

Having these configured you can now start using the UI components from Flowbite.

## Flowbite components

You can either use the core vanilla JS and static HTML components from the [Flowbite Library](https://flowbite.com/docs/getting-started/introduction/) or you can import dedicated React components such as the Alert, Modal, or Navbar from the [Flowbite React](https://github.com/themesberg/flowbite-react) library.

Here's an example of how you can import and use the Alert component:

```javascript
import { Alert } from "flowbite-react";

const IndexPage = () => {
  return (
    <main>
      <Alert color="info">This is a guide using Gatsby, Flowibte, and Tailwind CSS.</Alert>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
```

This example will show a default alert component. You can change the appearance by using `color="danger"` or `color="warning"` to update the colors.

Another example would be the commonly used Dropdown UI component:

```javascript
import { Dropdown } from "flowbite-react";

const IndexPage = () => {
  return (
    <main>
      <Dropdown
        label="Dropdown button"
        dismissOnClick={false}
      >
        <Dropdown.Item>
          Gatsby JS
        </Dropdown.Item>
        <Dropdown.Item>
          Tailwind CSS
        </Dropdown.Item>
        <Dropdown.Item>
          Flowbite Components
        </Dropdown.Item>
      </Dropdown>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
```

This example will show a button that on the click event will show a dropdown menu item. You can browse the full list of components and options by checking out the [Flowbite React](https://github.com/themesberg/flowbite-react) library.

## Gatsby starter project

The open-source community created a [free starter project](https://github.com/themesberg/tailwind-gatsby-starter) using Gatsby, Tailwind CSS, and Flowbite React that you can download to set up your tech stack faster.