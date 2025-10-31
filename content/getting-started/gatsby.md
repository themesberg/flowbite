---
layout: docs
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

## Getting started

The fastest way to get started is using our project creation CLI, which sets up a new Gatsby project with Flowbite React, Tailwind CSS, and all necessary configurations.

## Create a Gatsby project

Run the following command in your terminal using our CLI toolkit:

{{< code lang="bash" >}}
npx create-flowbite-react@latest -t gatsby
{{< /code >}}

This will create a new Gatsby project, install and configure Tailwind CSS, install and configure Flowbite React, add dark mode support and also set up example components to get you started.

## Add to existing project

If you already have a Gatsby project and want to add Flowbite React, you can use our initialization CLI:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This will automatically add Flowbite React to your project and will configure Tailwind CSS with the Flowbite plugin alongside dark mode support.

## Custom installation

If you prefer to set everything up manually or need more control over the configuration, follow these steps.

### Create a new project

Create a new Gatsby project using NPM and make sure to select `Tailwind CSS` when prompted:

{{< code lang="bash" >}}
npm init gatsby
{{< /code >}}

You can now proceed with the installation of Flowbite React.

### Install Flowbite React

Run the following CLI command to add Flowbite React to your project:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command will install Flowbite React and configure Tailwind with the Flowbite plugin.

### Adding dark mode

In server side rendered applications like Gatsby, if you want to avoid page flicker when dark mode is set, you need to configure the `ThemeModeScript` component.

1. Create `gatsby-ssr.js` file at the root folder of the project:

{{< code lang="javascript" file="gatsby-ssr.js" icon="file" >}}
// gatsby-ssr.js
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([]);
};
{{< /code >}}

2. Import `ThemeModeScript` and add it to `setPreBodyComponents` function:

{{< code lang="javascript" file="gatsby-ssr.js" icon="file" >}}
// gatsby-ssr.js
import { ThemeModeScript } from 'flowbite-react';

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([ThemeModeScript]);
};
{{< /code >}}

Congratulations! You have successfully installed Flowbite React.

## React components

Now that you have Flowbite React installed you can start using the components from the library:

{{< code lang="javascript" file="src/pages/index.tsx" icon="file" >}}
// src/pages/index.tsx (or .jsx)
import { Button } from 'flowbite-react';

export default function IndexPage() {
    return <Button>Click me</Button>;
}
{{< /code >}}

Check out all of the UI components from the [Flowbite React](https://flowbite-react.com) library.

## Theme customization

Flowbite React offers an advanced system of customizing your components and templates using the new [theming engine](https://flowbite-react.com/docs/customize/theme). You can style components by directly using the `className` attribute of the component, but also by passing a theme object to the `<ThemeProvider>` component.

For example, here is a simple way you can update a button component:

{{< code lang="javascript" file="src/pages/index.tsx" icon="file" >}}
import { Button } from "flowbite-react";

function App() {
  return <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>;
}
{{< /code >}}

Additionally, you can also use the `createTheme` helper to create a theme object that you can then pass on to the `<ThemeProvider>` component with which you can style subcomponents too:

{{< code lang="javascript" file="src/pages/index.tsx" icon="file" >}}
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

The Flowbite React UI library is a free, open-source project licensed under MIT. You can find the source code on [GitHub](https://github.com/themesberg/flowbite-react) and collaborate with our developer community to contribute.

## Support development

If you’d like to support our open-source work, check out the [pro version](https://flowbite.com/pro/) of Flowbite, which offers 400+ components and templates, a Figma design system, an admin dashboard, and more.