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

[Remix](https://remix.run/) is a full-stack web framework based on React that allows you to build websites with quicker page load by leveraging distributed systems and using the native Web Fetch API to load content from the server.

The Remix framework is being used by hundreds of thousands of developers and large companies one of which is Shopify which actually acquired it on October 31st, 2022.

Follow the next steps in this guide to learn how to create a new Remix project and install and setup Tailwind CSS together with the UI components from Flowbite.

## Requirements

Before getting started make sure you that have [Node.js](https://nodejs.org/en/) and NPM installed on your local machine to be able to install the required packages including Remix, Tailwind CSS and Flowbite.

## Quick Start (Recommended)

The fastest way to get started is using our project creation CLI, which sets up a new Remix project with Flowbite React, Tailwind CSS, and all necessary configurations:

```bash
npx create-flowbite-react@latest -t remix
```

This will:

-   Create a new Remix project
-   Install and configure Tailwind CSS
-   Set up Flowbite React with all required dependencies
-   Configure dark mode support
-   Set up example components

## Add to Existing Project

If you already have a Remix project and want to add Flowbite React, you can use our initialization CLI:

```bash
npx flowbite-react@latest init
```

This will automatically:

-   Install Flowbite React and its dependencies
-   Configure Tailwind CSS to include Flowbite React plugin

## Manual Setup

If you prefer to set everything up manually or need more control over the configuration, follow these steps:

### 1. Create Project

Create a new Remix project:

```bash
npx create-remix@latest
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

In server-side rendered applications like Remix, to avoid page flicker (if `dark` mode is set) before Remix hydrates the content, the `ThemeModeScript` component must be rendered in the `<head>` tag.

`ThemeModeScript` renders a script tag that sets `dark` or removes `dark` from the `<html>` element before hydration occurs.

Import and render `ThemeModeScript` in `app/root.tsx` the `<head>` tag:

```javascript
import { ThemeModeScript } from 'flowbite-react';

export default function Layout() {
    return (
        <html lang="en">
            <head>
                {/* ... */}
                <ThemeModeScript />
            </head>
            <body>{/* ... */}</body>
        </html>
    );
}
```

## Try it out

Now that you have successfully installed Flowbite React you can start using the components from the library:

```javascript
// app/routes/_index.tsx

import { Button } from 'flowbite-react';

export default function Index() {
    return <Button>Click me</Button>;
}
```

## Templates

Check out the following open-source starter templates built with Flowbite React, Tailwind CSS and Remix:

-   [Starter template on Github](https://github.com/themesberg/flowbite-react-template-remix)
-   [Starter template on StackBlitz](https://stackblitz.com/edit/flowbite-react-template-remix)
