---
layout: docs
title: Tailwind CSS Next.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Next.js project and start developing with the most popular React-based framework built by Vercel
group: getting-started
toc: true
requires_nextjs: true

previous: React
previousLink: getting-started/react/
next: Vue
nextLink: getting-started/vue/
---

[Next.js](https://nextjs.org/) is a popular web development framework based on the React library that enables server-side rendering and generating static websites improving development time and website performance.

This technology is being used by hundreds of thousands of developers and companies such as Vercel, Netflix, TikTok, Twitch, Hulu, Nike and HBO Max since its original release in 2016.

## Getting started

The fastest way you can get started with Flowbite React and Next.js is by using our project creation CLI.

## Create a Next.js project

Use the following command to create a new Next.js project:

{{< code lang="bash" >}}
npx create-flowbite-react@latest -t nextjs
{{< /code >}}

This will create a new project configured with Next.js,Tailwind CSS (v4) and Flowbite React and it also sets up the dark mode configuration and a couple of example components.

## Add to existing project

If you already have a Next.js project and want to add Flowbite React, you can use our initialization CLI:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This command will install Flowbite React and its dependencies, configure Tailwind CSS to include Flowbite React plugin, and set up necessary configurations.

## Custom installation

If you prefer to set everything up manually or need more control over the configuration, follow these steps:

### Create new project

Use the CLI toolkit from Vercel to create a new Next.js project and include Tailwind CSS when prompted:

{{< code lang="bash" >}}
npx create-next-app@latest
{{< /code >}}

Now you can proceed with installing the Flowbite React UI component library.

### Install Flowbite React

You can easily install Flowbite React by using the official CLI toolkit:

{{< code lang="bash" >}}
npx flowbite-react@latest init
{{< /code >}}

This will install Flowbite React with all dependencies and configures Tailwind to include the Flowbite plugin.

### Adding dark mode

If you want to properly configure dark mode and prevent page flickering before hydration, then you need to add the `ThemeModeScript` to your root layout.

Add the following code to the app router:

{{< code lang="javascript" file="app/layout.tsx" icon="file" >}}
// app/layout.tsx
import { ThemeModeScript } from 'flowbite-react';

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning>
            <head>
                <ThemeModeScript />
            </head>
            <body>{children}</body>
        </html>
    );
}
{{< /code >}}

And the following code to the page router:

{{< code lang="javascript" file="pages/_document.tsx" icon="file" >}}
// pages/_document.tsx
import { ThemeModeScript } from 'flowbite-react';

export default function Document() {
    return (
        <Html suppressHydrationWarning>
            <Head>
                <ThemeModeScript />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
{{< /code >}}

Congratulations! You have now installed and configured Flowbite React in your Next.js application.

## Next.js components

Now that you have successfully installed Flowbite React you can start using the components from the library:

{{< code lang="javascript" file="app/page.tsx" icon="file" >}}
// app/page.tsx
import { Button } from 'flowbite-react';

export default function Page() {
    return <Button>Click me</Button>;
}
{{< /code >}}

You can check out all of the UI components from the [Flowbite React](https://flowbite-react.com) library.

## Theme customization

Flowbite React offers an advanced system of customizing your components and templates using the new [theming engine](https://flowbite-react.com/docs/customize/theme). You can style components by directly using the `className` attribute of the component, but also by passing a theme object to the `<ThemeProvider>` component.

For example, here is a simple way you can update a button component:

{{< code lang="javascript" file="app.tsx" icon="file" >}}
import { Button } from "flowbite-react";

function App() {
  return <Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>;
}
{{< /code >}}

Additionally, you can also use the `createTheme` helper to create a theme object that you can then pass on to the `<ThemeProvider>` component with which you can style subcomponents too:

{{< code lang="javascript" file="app.tsx" icon="file" >}}
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

The Flowbite React UI library is a free and open-source project under the MIT license. You can find the source code on [GitHub](https://github.com/themesberg/flowbite-react) and contribute to the project together with our community of developers.

## Support development

If you would like to support our open-source work, then you can check out the [pro version](https://flowbite.com/pro/) of Flowbite which brings you over 400+ components and templates, a Figma design system, admin dashboard, and more.