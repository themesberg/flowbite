---
layout: docs
title: Tailwind CSS Astro - Flowbite
description: Learn how to install Astro with Tailwind CSS and Flowbite and start building modern websites with a lightning fast and content-focused web framework
group: getting-started
toc: true
requires_astro: true

previous: Angular
previousLink: getting-started/angular/
next: Remix
nextLink: getting-started/remix/
---

[Astro](https://astro.build) is a full-stack web framework for building lightning-fast and content-focused websites featuring component islands, server-first API design, edge-ready deployments and supports hundreds of integrations with technologies like Tailwind CSS, Flowbite, React, Vue, Svelte, and more.

The Astro framework is used by thousands of reputable companies and projects such as Firebase, NordVPN, The Guardian, Trivago and others and it also received a $7M seed investment funding at the beginning of 2022 which guarantees continuous support and development of the technology.

Follow the next steps in this tutorial to learn how to create a new Astro project, install Tailwind CSS and learn how to leverage the UI components from Flowbite to build websites even quicker.

## Requirements

Before you continue make sure that you have [Node.js](https://nodejs.org/en/) (`v16.12.0` or higher) installed on your local machine and production server to install all required dependencies.

We also highly recommend you to use VS Code as your standard editor and to install the official [language support extension for Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) from the VS Marketplace released by the original authors.

## Create an Astro project

1. Create a new Astro project running the following command using NPM:

{{< code lang="bash" >}}
npm create astro@latest flowbite-project
cd flowbite-project
{{< /code >}}

This command will prompt you with some questions and will create a local project based on your answers.

2. Run the following command to start a local development server:

{{< code lang="bash" >}}
npm run dev
{{< /code >}}

This will make the project accessible via the browser on `http://localhost:3000`.

3. To create a production build of the project run the following command in your terminal:

{{< code lang="bash" >}}
npm run build
{{< /code >}}

One of the biggest advantages of Astro is the small build size that will be available once deployed to production via the build command - this way the website should load much quicker than using older technologies.

## Install Tailwind CSS

Now that you have installed and configured a working Astro project we can proceed with installing the Tailwind CSS integration based on the official package.

1. Run the following command to install Tailwind CSS and create a configuration file using the NPX command:

{{< code lang="bash" >}}
npx astro add tailwind
{{< /code >}}

This command will automatically install Tailwind CSS in the `package.json` file, it will also configure the compilation process and create a new `tailwind.config.cjs` file that configures the template paths.

2. Import the `global.css` file in your `Layout.astro` file:

{{< code lang="html" file="Layout.astro" icon="file" >}}
---
import "../styles/global.css";
---
{{< /code >}}

Now you can write Tailwind CSS classes inside any of the template files and the changes will be applied by generating a `global.css` file and including it on every page.

## Install Flowbite

After you've installed both Astro and Tailwind CSS you can also choose to use the free and open-source UI components from Flowbite to make developing websites and user interfaces even faster with interactive elements like navbars, modals, dropdowns, and more.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `global.css` CSS file:

{{< code lang="css" file="global.css" icon="file" >}}
@import "flowbite/src/themes/default";
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="global.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your `global.css` file:

{{< code lang="css" file="global.css" icon="file" >}}
@source "../../node_modules/flowbite";
{{< /code >}}

Now that you've configured the styles for CSS from Flowbite you can now proceed by installing the JS.

## Flowbite components

To enable the interactive components you need to also include Flowbite's JavaScript file which you can do by either including it in the main `Layout.astro` file as a CDN file or importing the Flowbite module inside the 

### Include via CDN

In the `Layout.astro` file add the following script tag just before the end of the `<body>` tag:

{{< code lang="html" file="Layout.astro" icon="file" >}}
<script is:inline src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>
{{< /code >}}

This allows you to use the data attributes from the Flowbite component examples and will make them interactive automatically without needing to write custom JavaScript and you can just copy-paste them from the Flowbite Docs.

### ESM/CJS imports

Alternatively, you can import standalone components such as the Modal and set up the event listeners yourself in a local `<script>` tag for the Astro files. 

Since version 1.6.0 Flowbite also supports type declarations and interfaces in TypeScript which allows you to integrate with the Astro ecosystem even better as they clearly recommend TypeScript over JavaScript.

For example, here's how you can leverage the Flowbite JS API and Astro by adding the following code inside the script tag:

{{< code lang="javascript" file="some-component.astro" icon="file" >}}
<Layout>
  <!-- markup source content and elements -->
</Layout>

<script>
  import { Modal } from 'flowbite'

  // select the two elements that we'll work with
  const $buttonElement: HTMLElement | null = document.querySelector('#button');
  const $modalElement: HTMLElement | null = document.querySelector('#defaultModal');

  // create a new modal component
  const modal = new Modal($modalElement);

  // toggle the visibility of the modal when clicking on the button
  if ($buttonElement) {
    $buttonElement.addEventListener('click', () => modal.toggle());
  }
</script>
{{< /code >}}

Make sure that you have the necessary HTML markup for the event listeners and elements described in the example above inside the `<Layout>` tags from Astro:

{{< code lang="html" file="some-component.astro" icon="file" >}}
<Layout>
    <!-- Modal toggle -->
    <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
    Toggle modal
    </button>
    <!-- Main modal -->
    <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <!-- Modal header -->
                <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                    <h3 class="text-lg font-medium text-heading">
                        Terms of Service
                    </h3>
                    <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                    <p class="leading-relaxed text-body">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="leading-relaxed text-body">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button data-modal-hide="default-modal" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">I accept</button>
                    <button data-modal-hide="default-modal" type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Decline</button>
                </div>
            </div>
        </div>
    </div>
</Layout>
{{< /code >}}

In this example, the modal will be shown when the button is clicked and the modal component will also be initialized based on the options that you've provided.

You can browse the full collection of the Flowbite components and check the "JavaScript Behaviour" section of the page to learn all of the options, methods, and objects that you can leverage.

## Astro starter project

We also built a free and open-source [Flowbite and Astro starter project](https://github.com/themesberg/tailwind-astro-starter) on GitHub that you can use for reference and examples based on this integration guide to get started faster with working with Astro, Tailwind CSS and the UI components from Flowbite.

## Astro admin dashboard

You can check out our open-source [Astro admin dashboard](https://github.com/themesberg/flowbite-astro-admin-dashboard) project on GitHub to leverage CRUD layouts and API calls predefined with the Flowbite Library, Tailwind CSS framework and the Astro best practices and framework setup.