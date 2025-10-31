---
layout: docs
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

- Meteor allows you to develop in one language, JavaScript, in all environments: application server, web browser, and mobile device.

- Meteor uses data on the wire, meaning the server sends data, not HTML, and the client renders it.

- Meteor embraces the ecosystem, bringing the best parts of the extremely active JavaScript community to you in a careful and considered way.

- Meteor provides full stack reactivity, allowing your UI to seamlessly reflect the true state of the world with minimal development effort.

Using both Meteor.js, Tailwind CSS and Flowbite can help you get started building modern UI web applications by leveraging the extensive framework features of Meteor.js, the utility-first approach of the Tailwind CSS framework and the open-source UI components from the Flowbite Library.

## Getting started

The fastest way to get started is using our project creation CLI, which sets up a new Meteor project with Flowbite React, Tailwind CSS, and all necessary configurations.

## Create a Meteor.js project

Use the following command from the Flowbite React CLI toolkit:

{{< code lang="bash" >}}
npx create-flowbite-react@latest -t meteorjs
{{< /code >}}

This will create a new Meteor project, install and configure Tailwind CSS, set up Flowbite React and its dependencies, configure dark mode and also add example components for you to get started.

## Add to existing project

If you already have a Meteor project and want to add Flowbite React, you can use our initialization CLI:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command will install Flowbite React and configure Tailwind with the Flowbite plugin.

## Custom installation

If you prefer to set everything up manually or need more control over the configuration, follow these steps.

### Create a project

The first step is to create a new Meteor.js project using their CLI toolkit:

{{< code lang="bash" >}}
meteor create meteor-project
cd meteor-project
{{< /code >}}

If you prefer using TypeScript, then add the `--typescript` flag to the command:

{{< code lang="bash" >}}
meteor create meteor-project --typescript
cd meteor-project
{{< /code >}}

Now that you have a new Meteor.js project, you can proceed with installing Tailwind CSS.

### Install Tailwind CSS

The next step is to now install Tailwind CSS (v4) using NPM:

{{< code lang="bash" >}}
npm install -D tailwindcss @tailwindcss/postcss postcss postcss-load-config
{{< /code >}}

Create a `postcss.config.mjs` file inside the root directory of your Meteor.js project:

{{< code lang="bash" >}}
touch postcss.config.mjs
{{< /code >}}

Add `@tailwindcss/postcss` to your `postcss.config.mjs` file:

{{< code lang="javascript" file="postcss.config.mjs" icon="file" >}}
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        '@tailwindcss/postcss': {},
    },
};
export default config;
{{< /code >}}

Update the css file `client/main.css` to include Tailwind CSS:

{{< code lang="css" file="client/main.css" icon="file" >}}
@import 'tailwindcss';
{{< /code >}}

Now that you have installed and configured Tailwind CSS, you can now proceed with installing Flowbite React.

### Install Flowbite React

To easily install Flowbite React you can use our official CLI toolkit:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command installs Flowbite React and configures it with Tailwind CSS.

## React components

Now that you have succesfully installed Flowbite React, Meteor.js and Tailwind CSS you can start using our components such as buttons, dropdowns, modal, navbars, and more:

{{< code lang="javascript" file="imports/ui/App.tsx" icon="file" >}}
// imports/ui/App.tsx (or .jsx)
import { Button } from 'flowbite-react';
import React from 'react';

export const App = () => (
    <>
        <Button>Click me</Button>
    </>
);
{{< /code >}}

Check out the [official documentation](https://flowbite-react.com) to learn more about the components and how to use them.

## Theme customization

Flowbite React offers an advanced system of customizing your components and templates using the new [theming engine](https://flowbite-react.com/docs/customize/theme). You can style components by directly using the `className` attribute of the component, but also by passing a theme object to the `<ThemeProvider>` component.

For example, here is a simple way you can update a button component:

{{< code lang="javascript" file="App.tsx" icon="file" >}}
import { Button } from "flowbite-react";

function App() {
  return <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>;
}
{{< /code >}}

Additionally, you can also use the `createTheme` helper to create a theme object that you can then pass on to the `<ThemeProvider>` component with which you can style subcomponents too:

{{< code lang="javascript" file="App.tsx" icon="file" >}}
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

The Flowbite React UI library is a free, open-source project licensed under MIT. You can access the source code on [GitHub](https://github.com/themesberg/flowbite-react) and collaborate with our developer community to contribute.

## Support development

If you’d like to support our open-source work, consider exploring the [pro version](https://flowbite.com/pro/) of Flowbite, which includes 400+ components and templates, a Figma design system, an admin dashboard, and more.