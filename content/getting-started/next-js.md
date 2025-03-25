---
layout: home
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

## Quick Start

The fastest way to get started is using our project creation CLI, which sets up a new Next.js project with Flowbite React, Tailwind CSS, and all necessary configurations:

```bash
npx create-flowbite-react@latest -t nextjs
```

This will:

-   Create a new Next.js project
-   Install and configure Tailwind CSS
-   Set up Flowbite React with all required dependencies
-   Configure dark mode support
-   Set up example components

## Add to Existing Project

If you already have a Next.js project and want to add Flowbite React, you can use our initialization CLI:

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

Create a new Next.js project:

When prompted:

-   Would you like to use Tailwind CSS? » Yes

```bash
npx create-next-app@latest
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

### 3. Configure Dark Mode (Optional)

To avoid page flicker in dark mode before hydration, add the `ThemeModeScript` to your root layout:

For App Router:

```javascript
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
```

For Pages Router:

```javascript
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
```

## Try it out

Now that you have successfully installed Flowbite React you can start using the components from the library:

```javascript
// app/page.tsx
import { Button } from 'flowbite-react';

export default function Page() {
    return <Button>Click me</Button>;
}
```

## Templates

### Official

-   [GitHub](https://github.com/themesberg/flowbite-react-template-nextjs)
-   [StackBlitz](https://stackblitz.com/edit/flowbite-react-template-nextjs)

### Community

-   [Kitchen Sink - Demo](https://flowbite-react.com/storybook)

## Resources

-   [GitHub Repository](https://github.com/themesberg/flowbite-react)
-   [Documentation](https://flowbite-react.com/docs)
-   [Storybook](https://flowbite-react.com/storybook)
-   [Figma Design System](https://www.figma.com/community/file/1251695088645881)

## Support

-   [Discord Community](https://discord.gg/4eeurUVvTy)
-   [GitHub Discussions](https://github.com/themesberg/flowbite-react/discussions)
-   [GitHub Issues](https://github.com/themesberg/flowbite-react/issues)
