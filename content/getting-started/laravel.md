---
layout: docs
title: Tailwind CSS Laravel - Flowbite
description: Learn how to install Tailwind CSS with Flowbite in a Laravel PHP project and start building modern websites with the most popular PHP framework in the world
group: getting-started
toc: true
requires_laravel: true

previous: Qwik
previousLink: getting-started/qwik/
next: Symfony
nextLink: getting-started/symfony/
---

Laravel is the most popular free and open-source PHP web framework that helps you build modern web applications and API's based on a model-view-controller (MVC) programming architecture. It's an iteration of the [Symfony](https://flowbite.com/docs/getting-started/symfony/) framework and it's being used by millions of developers and companies around the world.

Check out this guide to learn how to set up a new Laravel project together with Tailwind CSS and the UI components from Flowbite to enhance your front-end development workflow.

## Create a Laravel app

Make sure that you have <a href="https://getcomposer.org/" rel="nofollow">Composer</a> and <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> installed locally on your computer.

Follow the next steps to install Tailwind CSS and Flowbite with Laravel Mix. 

1. Require the Laravel Installer globally using Composer:

{{< code lang="bash" >}}
composer global require laravel/installer
{{< /code >}}

Make sure to place the vendor bin directory in your PATH. Here's how you can do it based on each OS:

- macOS: `export PATH="$PATH:$HOME/.composer/vendor/bin"`
- Windows: `set PATH=%PATH%;%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`
- Linux: `export PATH="~/.config/composer/vendor/bin:$PATH"`

2. Create a new project using Laravel's CLI:

{{< code lang="bash" >}}
laravel new flowbite-app
cd flowbite-app
{{< /code >}}

Start the development server using the following command:

{{< code lang="bash" >}}
composer run dev
{{< /code >}}

You can now access the Laravel application on `http://localhost:8000`.

This command will initialize a blank Laravel project that you can get started with.

## Install Tailwind CSS

Since Laravel 12, the latest version of Tailwind v4 will be installed by default, so if you have that version or later then you can skip this step and proceed with installing Flowbite.

1. Install Tailwind CSS using NPM:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/vite --save-dev
{{< /code >}}

2. Configure the `vite.config.ts` file by importing the Tailwind plugin:

{{< code lang="javascript" file="vite.config.ts" icon="file" >}}
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    // …
  ],
})
{{< /code >}}

3. Import the main Tailwind directive inside your `app.css` CSS file:

{{< code lang="css" file="app.css" icon="file" >}}
@import "tailwindcss";
{{< /code >}}

5. Run the build process for Vite using `npm run dev`. Use `npm run build` for production builds.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the Tailwind CSS framework that allows you to choose from a wide range of UI components such as modals, drawers, buttons, dropdowns, datepickers, and more to make your development workflow faster and more efficient.

Follow the next steps to install Flowbite using NPM.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `app.css` CSS file:

{{< code lang="css" file="app.css" icon="file" >}}
@import "flowbite/src/themes/default";
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="app.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="app.css" icon="file" >}}
@source "../../node_modules/flowbite";
{{< /code >}}

5. Add the Flowbite JS script inside your main `app.blade.php` layout file:

{{< code lang="html" file="app.blade.php" icon="file" >}}
<body>
    @yield('content')

    <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>
</body>
{{< /code >}}

This will have the JavaScript loaded in all the files that extend this main layout.

## UI components

Now that you have successfully installed the project you can start using the UI components from Flowbite and Tailwind CSS to develop modern websites and web applications.

We recommend exploring the components using the search bar navigation (`cmd` or `ctrl` + `k`) or by browsing the components section of the sidebar on the left side of this page.

## Laravel starter project

Download or clone the [Flowbite Laravel](https://github.com/themesberg/tailwind-laravel-starter) Github boilerplate repository to get access to a project that already has Laravel, Tailwind CSS, and Flowbite set up for development.

For even more resources and UI components you can check out [Flowbite Pro](https://flowbite.com/pro/).