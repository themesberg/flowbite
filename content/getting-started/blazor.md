---
layout: home
title: Tailwind CSS Blazor (.NET) - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Blazor (.NET) project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_blazor: true

previous: Flask
previousLink: getting-started/flask/
next: Configuration
nextLink: customize/configuration/
---


[Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) is an open source .NET framework for building dynamic and interactive front-ends for your applications with HTML, C#, and Razor templates. Blazor allows you to compose components directly for your server or for the client side. This flexibility enables developers to create fullstack web and mobile applications with a single-page UI framework.

Typically, most frontend frameworks use JavaScript under the hood but with Blazor, you can build both front-ends and back-ends with C#. Developers who are well versed in C# can easily build fullstack applications without switching to a different framework.  

More companies are adopting Blazor into their development workflows because a developer can write client side and server side logic with only C# and .NET. Some examples include  GE Aviation, BurnRate, The Postage, and Pernod Ricard. 

Blazor provides all the scaffolding, abstractions, tooling and optimizations you need on a project. 

## Requirements

In this guide, you will learn how to build a new Blazor Project, and how to integrate Flowbite UI components into your application. We'll use a modal component for this exercise to demonstrate a real use case. 

You'll need to install and configure the .NET SDK, Tailwind CSS, Blazor and Flowbite into your application. Ensure you have installed NPM and Node.js on your local environment. Let's get started!

## Create a new Blazor project

Start by downloading and installing the .NET SDK. The SDK allows us to develop apps with .NET frameworks. The Blazor website detects which version you'll need for your local environment.

1. Start by installing the Microsoft package repository that contains the package signing key:

```bash
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

If you're running on MacOS or another Linux distribution, visit the [Microsoft website](https://learn.microsoft.com/en-us/dotnet/core/install/macos) to learn how to install the SDK on your local environment. .NET can be installed on Windows, MacOS, and Linux.

2. Install the .NET SDK (software development kit):

```bash
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-7.0
```

You can also install the .NET SDK via HomeBrew:

```bash
brew install --cask dotnet
```

Open your terminal and run this command to confirm a successful installation:

```bash
-$ dotnet
```

This is the output you should see to confirm that you installed the .NET SDK successfully:

```bash
Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
  -h|--help         Display help.
  --info            Display .NET information.
  --list-sdks       Display the installed SDKs.
  --list-runtimes   Display the installed runtimes.

path-to-application:
  The path to an application .dll file to execute.
```

Run this command in your terminal to create a new Blazor project.

```bash
dotnet new blazorserver -o BlazorApp --no-https -f net7.0
```

This command creates your project's scaffold and a directory called BlazorApp.

Next, you should navigate into the BlazorApp directory:

```bash
cd BlazorApp
```

Run this command in your terminal to launch your application and watch for changes:

```bash
dotnet watch
```
Your terminal will show that your app is listening on `http://localhost:<port number>` and should launch on your web browser. You can also click on the port to run your application. 

Congratulations! You have now installed and run your first Blazor project. 

In the next section, we will configure Tailwind CSS with Blazor.

## Install Tailwind CSS

There are two ways to install Tailwind in a Blazor Project: by using the Tailwind CLI or PostCSS.

PostCSS helps in transforming `tailwindcss` to styling that is relevant to your project. It also helps you remove unnecessary styling which helps in reducing the size of your files.  

1. Start by removing the pre-installed stylesheets in the `wwwroot/` folder. Keep the CSS folder because that's what we'll use to store our Tailwind input & output CSS files

2. Next, ensure that you're still in the BlazorApp Directory then run this command in your terminal:

```bash
npm install tailwindcss postcss autoprefixer postcss-cli
```

3. Create and configure the PostCSS file

Create a `postcss.config.js` file in the BlazorApp directory or your root directory and add these configurations:

```bash
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
```
  
Run this command in your root directory to generate a Tailwind CSS configuration file:

```bash
npx tailwindcss init
```

You'll now "tell" Tailwind to watch for files containing utility classes so that the .NET CLI can watch for changes in your project. For our Blazor project, the files that Tailwind needs to track are `.html`, `.cshtml` or Razor files. Add the template paths to the content section in your Tailwind config file:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

1. Next, create an `app.css` file in the `wwwroot/` folder (within the CSS folder that you did not delete earlier) Add these CSS directives to `app.css`:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Go to your terminal and run the Tailwind CLI to generate the output CSS watch for changes in your project:

```bash
npx tailwindcss -i wwwroot/css/app.css -o wwwroot/css/app.min.css --watch
```

7. Add a CSS reference to the host file in the Pages directory:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <base href="~/" />
    <link href="~/css/app.min.css" rel="stylesheet" />
    </head>
```

8. Finally, run `dotnet watch` to start adding Tailwind classes to your Blazor project. 

You have now successfully created:

- a new Blazor project
- installed and configured Tailwind CSS with Blazor

Up next, we'll install and configure Flowbite in our Blazor project. We'll also showcase how to use the Flowbite UI components in a Blazor project through a dropdown component demo. 

## Install Flowbite

Flowbite is an open-source UI component library that is built with Tailwind CSS and vanilla JavaScript. Here's how you can install and configure it by following these steps to make it work with our Blazor project:

1. First, you need to install Flowbite via NPM:

```bash
npm install flowbite
```

2. Require Flowbite in the Tailwind configuration file as a plugin:

```bash
module.exports = {
  // other options
  plugins: [
    require('flowbite/plugin')
  ],
}
```

3. Add the Flowbite source files to the content module to start applying utility classes from the interactive UI components such as the dropdowns, modals, and navbars:

```bash
module.exports = {
  content: [
    // other files...
    "./node_modules/flowbite/**/*.js"
  ],
...
}
```

4. Add a script tag with this path before the end of the body tag in the `host.cshtml` page:

```bash
    <!-- ... -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
  </body>
</html>
```

You have successfully installed Flowbite and can start using the components to build your Blazor project.

## UI components for Blazor

Now that you have successfully installed Blazor.NET, Tailwind CSS and Flowbite, you can start using Flowbite's UI components such as navbars, buttons, and modals in your project.

Copy and paste this [dropdown component example](https://flowbite.com/docs/components/dropdowns/) into your `Pages/Index.razor` file:

```bash
@page "/"

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
```

Now that you've set up Flowbite with Blazor you can explore the whole collection of UI components from the [Flowbite Library](https://flowbite.com/docs/getting-started/introduction/) or use the [Flowbite Blocks](https://flowbite.com/blocks/) collection to start building websites.

## WASM integration

This guide does not include WebAssembly (WASM) support but you can still use Flowbite with Blazor WASM by setting up the [Flowbite init functions](https://flowbite.com/docs/getting-started/quickstart/#init-functions) using an [interop layer](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-7.0) that ensures the DOM rendering before applying the event listeners via the data attributes API.

Help needed: if you have experience with Blazor WASM and would like to contribute to this guide, then you can [edit this file on GitHub](https://github.com/themesberg/flowbite/blob/main/content/getting-started/blazor.md) and create a pull request. Thank you!

## Blazor starter project

The open-source community created an [open-source Blazor starter project](https://github.com/themesberg/tailwind-blazor-starter) that you can clone and use as a starting point for building websites with Blazor, .NET, Tailwind CSS and Flowbite.

There's also an official [Flowbite Blazor](https://github.com/themesberg/flowbite-blazor) UI library that the open-source community is working on which should be the native solution for Blazor and .NET applications. Contributions are more than welcome!