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

## Quick Start (Recommended)

The fastest way to get started is using our project creation CLI, which sets up a new Gatsby project with Flowbite React, Tailwind CSS, and all necessary configurations:

```bash
npx create-flowbite-react@latest -t gatsby
```

This will:

-   Create a new Gatsby project
-   Install and configure Tailwind CSS
-   Set up Flowbite React with all required dependencies
-   Configure dark mode support
-   Set up example components

## Add to Existing Project

If you already have a Gatsby project and want to add Flowbite React, you can use our initialization CLI:

```bash
npx flowbite-react@latest init
```

This will automatically:

-   Install Flowbite React and its dependencies
-   Configure Tailwind CSS to include Flowbite React plugin
-   Set up necessary configurations for dark mode

## Manual Setup

If you prefer to set everything up manually or need more control over the configuration, follow these steps:

### 1. Create Project

Create a new Gatsby project with Tailwind CSS:

```bash
npm init gatsby
```

When prompted:

-   Select `"Tailwind CSS"` to `"Would you like to install a styling system?"` question.

> **Note:** Install the correct version of Tailwind CSS, Gatsby CLI installs Tailwind CSS v4 by default but their template is configured for v3:

```bash
npm install -D tailwindcss@^3
```

### 2. Install Flowbite React

Install Flowbite React:

```bash
npx flowbite-react@latest init
```

This will:

-   Install Flowbite React and its dependencies
-   Configure Tailwind CSS to include Flowbite React plugin
-   Configure Vite to include Flowbite React plugin

### 3. Configure Dark Mode

In server side rendered applications like Gatsby, to avoid page flicker when dark mode is set, you need to configure the `ThemeModeScript` component:

1. Create `gatsby-ssr.js` file at the root folder of the project:

```js
// gatsby-ssr.js
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([]);
};
```

2. Import `ThemeModeScript` and add it to `setPreBodyComponents` function:

```js
// gatsby-ssr.js
import { ThemeModeScript } from 'flowbite-react';

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([ThemeModeScript]);
};
```

## Try it out

Now that you have successfully installed Flowbite React you can start using the components from the library:

```javascript
// src/pages/index.tsx (or .jsx)
import { Button } from 'flowbite-react';

export default function IndexPage() {
    return <Button>Click me</Button>;
}
```

## Templates

-   [GitHub](https://github.com/themesberg/flowbite-react-gatsby-starter)
-   [StackBlitz](https://stackblitz.com/fork/flowbite-react-gatsby)
