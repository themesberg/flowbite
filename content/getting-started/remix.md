---
layout: docs
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

## Getting started

The fastest way to get started is using our project creation CLI, which sets up a new Remix project with Flowbite React, Tailwind CSS, and all necessary configurations:

{{< code lang="bash" >}}
npx create-flowbite-react@latest -t remix
{{< /code >}}

This command will create a new Remix project, install Tailwind CSS (v4), Flowbite React with all its dependencies, and set up dark mode support with a couple of example components to get you started.

## Add to existing project

If you already have a Remix project and want to add Flowbite React, you can use our initialization CLI:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command will automatically install Flowbite React and its dependencies and configure the Flowbite plugin with Tailwind within an existing Remix project.

## Custom installation

If you prefer to set everything up manually or need more control over the configuration, follow these steps.

### Create new project

Create a new Remix project using the official CLI toolkit:

{{< code lang="bash" >}}
npx create-remix@latest
{{< /code >}}

This command will create a fresh new Remix project.

### Install Flowbite React

You can now proceed with installing Flowbite React:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command will install Flowbite React and configure Tailwind and Vite with the Flowbite plugin.

### Add dark mode

In server-side rendered applications like Remix, to avoid page flicker (if `dark` mode is set) before Remix hydrates the content, the `ThemeModeScript` component must be rendered in the `<head>` tag. The component renders a script tag that sets `dark` or removes `dark` from the `<html>` element before hydration occurs.

Import and render `ThemeModeScript` in `app/root.tsx` the `<head>` tag:

{{< code lang="javascript" file="app/root.tsx" icon="file" >}}
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
{{< /code >}}

Congratulations! You have now installed and configured Flowbite React within a Remix project.

## Remix components

Now that you have successfully installed Flowbite React you can start using the components from the library:

{{< code lang="javascript" file="app/routes/_index.tsx" icon="file" >}}
// app/routes/_index.tsx

import { Button } from 'flowbite-react';

export default function Index() {
    return <Button>Click me</Button>;
}
{{< /code >}}

Check out the [Flowbite React documentation](https://flowbite-react.com/) to learn more about the components and how to use them.

## Theme customization

Flowbite React offers an advanced system of customizing your components and templates using the new [theming engine](https://flowbite-react.com/docs/customize/theme). You can style components by directly using the `className` attribute of the component, but also by passing a theme object to the `<ThemeProvider>` component.

For example, here is a simple way you can update a button component:

{{< code lang="javascript" file="app/routes/_index.tsx" icon="file" >}}
import { Button } from "flowbite-react";

function App() {
  return <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>;
}
{{< /code >}}

Additionally, you can also use the `createTheme` helper to create a theme object that you can then pass on to the `<ThemeProvider>` component with which you can style subcomponents too:

{{< code lang="javascript" file="app/routes/_index.tsx" icon="file" >}}
import { Button, createTheme, ThemeProvider } from "flowbite-react";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button color="primary">Red Button</Button>
      <Button color="secondary" size="lg">
        Large Blue Button
      </Button>
    </ThemeProvider>
  );
}
{{< /code >}}

## Open-source community

The Flowbite React UI library is an open-source project available for free under the MIT license. Its source code is hosted on [GitHub](https://github.com/themesberg/flowbite-react), where you can collaborate and contribute alongside our developer community.

## Support development

If you’d like to support our open-source efforts, consider exploring the [pro version](https://flowbite.com/pro/) of Flowbite, which includes 400+ components and templates, a Figma design system, an admin dashboard, and more.