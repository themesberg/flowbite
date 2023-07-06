---
layout: home
title: Tailwind CSS Svelte - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Svelte project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_svelte: true

previous: Nuxt
previousLink: getting-started/nuxt-js/
next: Angular
nextLink: getting-started/angular/
---

This page will guide you through installing Tailwind CSS with Flowbite for your Svelte project, so you can start developing modern web applications using interactive elements based on utility classes.

## Introduction

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS.

[Flowbite Svelte](https://flowbite-svelte.com/) is an official Flowbite component library for Svelte that allows you to use interactive components with ease. Tailwind CSS, on the other hand, is a utility-first CSS framework that helps you quickly build custom user interfaces.

Together, Tailwind CSS and Flowbite Svelte can help you create modern and interactive web applications in a fraction of the time it would take to do it from scratch.

## Install Svelte

Before we can start using Tailwind CSS and Flowbite Svelte, we need to install Svelte. There are two ways to do this: using SvelteKit or using Svelte.

### SvelteKit

To install SvelteKit, run the following commands:

```bash
npm create svelte@latest my-app
cd my-app
pnpm i
```

This will create a new SvelteKit application inside the `my-app` directory.

### Svelte

To install Svelte, run the following commands:

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
pnpm i
```

This command will create a new Svelte application using Vite.

## Install Tailwind CSS 

Next, we need to install Tailwind CSS.

```bash
cd myapp
npx svelte-add@latest tailwindcss
pnpm i
```

This command will add and configure Tailwind CSS inside your Svelte project.

## Install Flowbite

Now, we can install Flowbite with Svelte and their dependencies. [Flowbite Svelte](https://flowbite-svelte.com) is an official Flowbite UI component library recommended for usage with Svelte with native interactivity handles.

Install the Flowbite packages and dependencies using `pnpm`:

```bash
pnpm i flowbite flowbite-svelte tailwind-merge @popperjs/core
```

We also need to update the `tailwind.config.js` file with the following details:

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
      }
    }
  }
};

module.exports = config;
```

This ensures that the Tailwind CSS compiler will know what dynamic classes have to be added and also configures some custom CSS from Flowbite.

## Flowbite Svelte components

Now that everything is installed, we can start using Flowbite Svelte components in our Svelte project.

The navbar component is a great way to display a list of navigation links at the top of your page. Here's an example of how to use it:

```html
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

The navbar component has several customization options, such as dropdowns, search bars, CTA buttons, and sticky navbars. For more examples, check out the [navbar component page](https://flowbite-svelte.com/docs/components/navbar).

Alternatively, you can also choose of the [mega menu](https://flowbite-svelte.com/docs/components/mega-menu) components from Flowbite Svelte.

The modal component is perfect for showing interactive dialogs and notifications. Here's an example of how to use it:

```html
<script>
  import { Button, Modal } from 'flowbite-svelte'
  let defaultModal = false;
</script>

<Button on:click={() => defaultModal = true}>Default modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
  </p>
  <svelte:fragment slot='footer'>
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
```

The modal component has various customization options, such as different types of modals, buttons, and other interactive elements. For more examples, check out the [modal component page](https://flowbite-svelte.com/docs/components/modal).

The footer component is a useful way to display valuable information to your users, such as sitemap links, a copyright notice, and a logo.

```html
<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
</script>

<Footer>
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
```

The footer component also has several customization options, such as adding logos, social media links, and sitemap links. For more examples, check out the [footer component page](https://flowbite-svelte.com/docs/components/footer).

## Flowbite Svelte starters

The awesome open-source community has created a couple of starter projects that you can use to get up and running with Flowbite Svelte quicker with templates and boilerplate starters:

- [Flowbite SvelteKit starter](https://github.com/shinokada/flowbite-svelte-starter)
- [Svelte TS starter](https://github.com/shinokada/svelte-ts-starter)
- [Svelte starter](https://github.com/shinokada/svelte-starter)
- [Laravel, Inertia, Svelte, Typescript with Flowbite starter](https://github.com/ZekyTheWolf/LIST-Starter)

<!-- 
chore: this repository needs to be updated with better UI/UX

## Flowbite Svelte layout example

The responsive sidebar layout is a popular layout option for modern web applications that require a flexible and modern design. 

With Flowbite-Svelte, you can easily create a responsive sidebar. It allows you to display all the important links and features in a clean and organized way. With Flowbite-Svelte, you can create a responsive sidebar layout quickly and easily, making your web application development more efficient. For more information, check out the [Flowbite-Svelte Responsive Sidebar Layout page](https://flowbite-svelte.com/examples/sidebar-layout). -->

## Flowbite Svelte blocks

The [Flowbite Svelte Blocks](https://flowbite-svelte-blocks.vercel.app/) collection is a great resource for free UI components for marketing, applications, and publishers built with the Flowbite Svelte library. 

There are various examples to explore, making it an excellent resource for inspiration and learning.

## UI Component Library

The [Flowbite Svelte library](https://github.com/themesberg/flowbite-svelte) offers more than 130 components, including interactive elements, navigation menus, modals, forms, footers, typograpy, and much more. These components are built with Svelte and Tailwind CSS, making them easy to use and customize in your web application. 

You can save time and effort by not having to build these components from scratch. Check out the [Flowbite Svelte Library](https://flowbite-svelte.com/) to explore all the available components.

## Contributing

The [Flowbite Svelte](https://github.com/themesberg/flowbite-svelte) library on GitHub is an open-source project and many developers contribute to the project by adding new components and improving the current codebase. 

Contributing is a great way by saying thank you or building up your developer portfolio.
