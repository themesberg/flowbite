---
layout: home
title: Tailwind CSS Svelte - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Svelte project and start developing modern web applications using interactive elements based on utility classes
group: getting-started
toc: true
requires_svelte: true

previous: Nuxt
previousLink: getting-started/nuxt-js/
next: Astro
nextLink: getting-started/astro/
---

This page will guide you through installing Tailwind CSS with Flowbite for your Svelte project, so you can start developing modern web applications using interactive elements based on utility classes.

## Introduction

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS.

Flowbite-Svelte is an official Flowbite component library for Svelte that allows you to use interactive components with ease. Tailwind CSS, on the other hand, is a utility-first CSS framework that helps you quickly build custom user interfaces.

Together, Tailwind CSS and Flowbite-Svelte can help you create modern and interactive web applications in a fraction of the time it would take to do it from scratch.

## Install Svelte

Before we can start using Tailwind CSS and Flowbite-Svelte, we need to install Svelte. There are two ways to do this: using SvelteKit or using Svelte.

### SvelteKit

To install SvelteKit, run the following commands:

```sh
npm create svelte@latest my-app
cd my-app
pnpm i
```

### Svelte

To install Svelte, run the following commands:

```sh
npm create vite@latest myapp -- --template svelte
cd myapp
pnpm i
```

## Install Tailwind CSS 

Next, we need to install Tailwind CSS.

```bash
cd myapp
npx svelte-add@latest tailwindcss
pnpm i
```

## Install Flowbite, Flowbite-Svelte, and dependencies

Now, we can install Flowbite, Flowbite-Svelte, and their dependencies.
[Flowbite Svelte](https://flowbite-svelte.com) is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.

Install Flowbite, Flowbite-Svelte, and dependencies using pnpm:

```bash
pnpm i flowbite flowbite-svelte classnames @popperjs/core
```

We also need to update the `tailwind.config.js` file with the following details:

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

## Using Flowbite-Svelte components

Now that everything is installed, we can start using Flowbite-Svelte components in our Svelte project.

### Navbar component

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

The navbar component has several customization options, such as dropdowns, search bars, CTA buttons, and sticky navbars. For more examples, check out the [Flowbite-Svelte Navbar component page](https://flowbite-svelte.com/components/navbar).

If you prefer a mega menu, go to [Flowbite-Svelte Mega menu page](https://flowbite-svelte.com/components/mega-menu).

### Modal

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

The modal component has various customization options, such as different types of modals, buttons, and other interactive elements. For more examples, check out the [Flowbite-Svelte Modal component page](https://flowbite-svelte.com/components/modal).

### Footer component

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

The footer component also has several customization options, such as adding logos, social media links, and sitemap links. For more examples, check out the [Flowbite-Svelte Footer component page](https://flowbite-svelte.com/components/footer).

## Flowbite-Svelte starters

If you want to get started with Flowbite-Svelte quickly and easily, there are several starter templates available:

- [Flowbite SvelteKit starter](https://github.com/shinokada/flowbite-svelte-starter)
- [Svelte TS starter](https://github.com/shinokada/svelte-ts-starter)
- [Svelte starter](https://github.com/shinokada/svelte-starter)
- [Laravel, Inertia, Svelte, Typescript with Flowbite starter](https://github.com/ZekyTheWolf/LIST-Starter)

## Flowbite-Svelte layout example

The responsive sidebar layout is a popular layout option for modern web applications that require a flexible and modern design. With Flowbite-Svelte, you can easily create a responsive sidebar. It allows you to display all the important links and features in a clean and organized way. With Flowbite-Svelte, you can create a responsive sidebar layout quickly and easily, making your web application development more efficient. For more information, check out the [Flowbite-Svelte Responsive Sidebar Layout page](https://flowbite-svelte.com/examples/sidebar-layout).

## Flowbite-Svelte-Blocks

[Flowbite-Svelte-Blocks](https://flowbite-svelte-blocks.vercel.app/) is a great resource for free UI components for marketing, applications, and publishers built with Flowbite-Svelte. There are various examples to explore, making it an excellent resource for inspiration and learning. Check it out at [Flowbite-Svelte-Blocks](https://flowbite-svelte-blocks.vercel.app/)

## More than 130 components available

Flowbite-Svelte offers more than 130 components, including interactive elements, navigation menus, modals, forms, footers, typograpy, and much more. These components are built with Svelte and Tailwind CSS, making them easy to use and customize in your web application. With Flowbite-Svelte, you can save time and effort by not having to build these components from scratch. Check out the [Flowbite-Svelte Components page](https://flowbite-svelte.com/) to explore all the available components.

## Conclusion

Using Tailwind CSS with Flowbite-Svelte can significantly speed up your web application development. With this guide, you can easily install and use Flowbite-Svelte components in your Svelte project, providing interactive and customizable user interfaces. With Flowbite-Svelte-Blocks, you have access to various free UI components for inspiration and learning.