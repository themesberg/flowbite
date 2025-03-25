---
layout: home
title: Tailwind CSS Meteor.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Meteor.js project to build full-stack JavaScript or TypeScript web, mobile, and desktop applications
group: getting-started
toc: true
requires_meteorjs: true

previous: Remix
previousLink: getting-started/remix/
next: Gatsby
nextLink: getting-started/gatsby/
---

[Meteor.js](https://meteor.com/) is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes a key set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.

This guide provides three ways to integrate Flowbite React with Meteor.js:

1. Quick Start: Create a new project with everything pre-configured
2. Add to Existing Project: Add Flowbite React to an existing Meteor project
3. Manual Setup: Set up everything from scratch manually

## Quick Start (Recommended)

The fastest way to get started is using our project creation CLI, which sets up a new Meteor project with Flowbite React, Tailwind CSS, and all necessary configurations:

```bash
npx create-flowbite-react@latest -t meteorjs
```

This will:

-   Create a new Meteor project
-   Install and configure Tailwind CSS
-   Set up Flowbite React with all required dependencies
-   Configure dark mode support
-   Set up example components

## Add to Existing Project

If you already have a Meteor project and want to add Flowbite React, you can use our initialization CLI:

```bash
npx flowbite-react@latest init
```

This will automatically:

-   Install Flowbite React and its dependencies
-   Configure Tailwind CSS to include Flowbite React plugin
-   Set up necessary configurations

## Manual Setup

If you prefer to set everything up manually or need more control over the configuration, follow these steps:

### 1. Create Project

Create a new Meteor project:

For JavaScript:

```bash
meteor create meteor-project
cd meteor-project
```

For TypeScript:

```bash
meteor create meteor-project --typescript
cd meteor-project
```

### 2. Configure Tailwind CSS

Install Tailwind CSS and its peer dependencies:

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss postcss-load-config
```

Create a `postcss.config.mjs` file:

```bash
touch postcss.config.mjs
```

Add `@tailwindcss/postcss` to your `postcss.config.mjs` file:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        '@tailwindcss/postcss': {},
    },
};
export default config;
```

Update the css file `client/main.css` to include Tailwind CSS:

```css
@import 'tailwindcss';
```

### 3. Install Flowbite React

Install Flowbite React:

```bash
npx flowbite-react@latest init
```

This will:

-   Install Flowbite React and its dependencies
-   Configure Tailwind CSS to include Flowbite React plugin

## Try it out

Now that you have successfully installed Flowbite React you can start using the components from the library. Create or update a component in your Meteor app:

```javascript
// imports/ui/App.tsx (or .jsx)
import { Button } from 'flowbite-react';
import React from 'react';

export const App = () => (
    <>
        <Button>Click me</Button>
    </>
);
```

## Templates

-   [Github](https://github.com/themesberg/flowbite-react-template-meteorjs)
-   [StackBlitz](https://stackblitz.com/edit/flowbite-react-template-meteorjs)
