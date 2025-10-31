---
layout: docs
title: Tailwind CSS RTL (Right-To-Left) - Flowbite
description: Learn how to setup and configure bidirectional text formats (RTL and LTR) in your project using native Tailwind CSS variants and the Flowbite UI components
group: customize
toc: true

previous: Icons
previousLink: customize/icons/
next: Optimization
nextLink: customize/optimization/
---

RTL (right-to-left) is a bidirectional text format used for languages that are written from right to left such as Arabic, Hebrew, Persian, Urdu, and Yiddish. A rough estimate would be around over 500 million people that use RTL languages and it's one of the fastest growing populations on the internet.

All of the UI components from Flowbite support RTL by primarily using the logical properties and values from CSS such as `ms-0` instead of `ml-0` or `pe-5` instead of `pr-5`. This feature requires Tailwind CSS v3.3.0 or higher and Flowbite v2.1.0 or higher.

In this guide you will learn how to setup and configure bidirectional text formats (RTL and LTR) in your project using Tailwind CSS variants and the Flowbite UI components by changing the `dir` attribute on the `<html>` element.

## Setting up RTL

Before you start, make sure you have installed the latest version of [Tailwind CSS](https://tailwindcss.com/docs/installation) and [Flowbite](https://flowbite.com/docs/getting-started/quickstart/).

1. Add the `dir` attribute to the `<html>` element in your `index.html` file:

{{< code lang="html" file="index.html" icon="file" >}}
<html dir="rtl">

<!-- your HTML markup -->

</html>
{{< /code >}}

By default, when switching from LTR to RTL the direction, spacing, and positioning of all the UI components from Flowbite will be mirrored as we used logical properties and RTL variants from Tailwind CSS.

You can also use our RTL button to switch between LTR and RTL when previewing our UI components:

{{< example bodyClass="!p-0" github="components/navbar.md" show_dark=true iframeHeight="300" >}}

<nav class="bg-neutral-primary border-default">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-7 me-3" alt="Flowbite Logo" />
        <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## Using RTL variants

If you need to add RTL variants to your own custom components, you can use the `rtl:` prefix.

For example, if you want to add a margin to the left side of an element in LTR mode, you would use `ml-2`. 

In RTL mode, you would use `rtl:ml-2` instead.

{{< code lang="html" file="index.html" icon="file" >}}
<div class="ml-2 rtl:ml-0">
  <!-- ... -->
</div>
{{< /code >}}

However, we do recommend that you use logical properties for margins, paddings, borders, and rounded-sm corners because the HTML markup will be cleaner and contain less utility-classes, which is always a good thing when it comes to Tailwind CSS.

## UI components

As mentioned before, all of the UI components from Flowbite support RTL by default and all of the examples from the documentation will render correctly whenever you set the `dir` attribute to `rtl` on the `<html>` element. Check out all our UI components and examples from the [official documentation](https://flowbite.com/docs/getting-started/introduction/).