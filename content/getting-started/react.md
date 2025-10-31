---
layout: docs
title: Tailwind CSS React - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your React project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_react: true

previous: Changelog
previousLink: getting-started/changelog/
next: Next.js
nextLink: getting-started/next-js/
---

[React](https://react.dev/) is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.

Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library using advanced theming functionalities and React specific components and methodologies.

## Getting started

You can easily install or add Flowbite React to an existing project with our new CLI toolkit.

## Create a React project

Use our project creation CLI to scaffold a new application with Flowbite React already configured:

{{< code lang="bash" >}}
npx create-flowbite-react@latest
{{< /code >}}

This will create a new project with React, Flowbite, and Tailwind CSS (v4) ready to use.

## Add to existing project

For existing projects, use the Flowbite React CLI to set up and configure everything automatically:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This will add Flowbite React and configure Tailwind CSS to an existing React project.

## Integration Guides

Flowbite React is a UI component library that can be integrated with many other technologies and libraries such as Next.js, Astro, Gatsby, Laravel, Remix and more.

Check out [this page](https://flowbite-react.com/docs/getting-started/quickstart) to learn how to get started with each integration.

## React components

Flowbite React offers a wide variety of UI components such as buttons, dropdowns, modals, datepickers, and more that you can plug and play into your application. Check out the [Flowbite React docs](https://flowbite-react.com/docs/components/button) for more details.

## Theme customization

Flowbite React offers an advanced system of customizing your components and templates using the new [theming engine](https://flowbite-react.com/docs/customize/theme). You can style components by directly using the `className` attribute of the component, but also by passing a theme object to the `<ThemeProvider>` component.

For example, here is a simple way you can update a button component:

{{< code lang="javascript" file="app.jsx" icon="file" >}}
import { Button } from "flowbite-react";

function App() {
  return <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>;
}
{{< /code >}}

Additionally, you can also use the `createTheme` helper to create a theme object that you can then pass on to the `<ThemeProvider>` component with which you can style subcomponents too:

{{< code lang="javascript" file="app.jsx" icon="file" >}}
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

## Storybook

Flowbite React also has a [Storybook](https://storybook.flowbite-react.com/) version which you can use to preview and test components in isolation.

## Open-source community

The Flowbite React UI library is an open-source project under the MIT license. You can access the source code on [GitHub](https://github.com/themesberg/flowbite-react) and collaborate with our community of developers to contribute to its growth.

## Support development

If you’d like to support our open-source work, you can explore the [pro version](https://flowbite.com/pro/) of Flowbite, which offers 400+ components and templates, a Figma design system, an admin dashboard, and more.