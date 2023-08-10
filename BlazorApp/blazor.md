---
layout: home
title: Tailwind CSS Blazor.NET - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Blazor.NET project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_blazor: true

previous: 
previousLink: 
next: 
nextLink: 
---


[Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) is an open source .NET framework for building dynamic and interactive frontends for your applications with HTML, C#, and Razor templates. Blazor allows you to compose components directly for your server or for the client-side. This flexibility enables developers to create fullstack web and mobile applications with a single-page UI framework.

Typically, most frontend frameworks use JavaScript under the hood but with Blazor, you can build both frontends and backends with C#. Developers who are well versed in C# can easily build fullstack applications without switching to a different framework.  

More companies are adopting Blazor into their development workflows because a developer can write client-side and server-side logic with only C# and .NET. Some examples include  GE Aviation, BurnRate, The Postage, and Pernod Ricard. 

Blazor provides all the scaffolding, abstractions, tooling and optimizations you need on a project. 

In this guide you will learn how to build a new Blazor Project, and how to integrate Flowbite components into your application. We'll use a modal component for this exercise to demonstrate a real use case. 

You'll need to install and configure the .NET SDK, Tailwind CSS, Blazor and Flowbite into your application. Ensure you have installed NPM and Node.js on your local environment. Let's get started!

## Create a new Blazor project
Start by downloading and installing the .NET SDK. The SDK allows us to develop apps with .NET frameworks. The Blazor website detects with version you'll need for your local environment. Visit www.microsoft.net to know which SDK supports your OS version and you machine's architecture.

1. Start by installing the Microsoft package repository that contains the package signing key:

wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

2. Install the .NET SDK

``` Bash
sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-7.0
  ```

Open your terminal and run this command to confirm successful installation:

```Bash
-$ dotnet
```
This is the output you should see to confirm that you installed the .NET SDK successfully

```Bash
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
3. Create a New Blazor Project

Run this command in your terminal to create a Blazor project. This command creates your project's scaffold and a directory called BlazorApp: 

```Bash
dotnet new blazorserver -o BlazorApp --no-https -f net7.0
```
Navigate into the BlazorApp directory:

```Bash
cd BlazorApp
```

Run this command in your terminal to launch your application and watch for changes:

```Bash
dotnet watch
```
Your terminal will show that your app is listening on http://localhost:<port number> and should launch on your web browser. You can also click on the port to run your application. 

Congratulations you have now installed and ran your first Blazor project! In the next section, we will configure Tailwind CSS with Blazor

## Install and configure Tailwind CSS in a Blazor Project

There are two ways to install Tailwind in a Blazor Project: By using Tailwind CLI or PostCSS. We will use PostCSS in this guide. PostCSS helps in transforming tailwindcss to styling that is relevant to your project. It also helps you remove unnecessary styling which helps in reducing the size of your files.  

1. Start by removing the pre-installed style sheets in the wwwroot folder. Keep the css folder because that's what we'll use to store our Tailwind input & output css files

2. Next, ensure that you're still in the BlazorApp Directory then run this command in your terminal:

```Bash
npm install tailwindcss postcss autoprefixer postcss-cli
```

3. Create & Configure the PostCSS file
Create a postcss.config.js file in the BlazorApp directory or your root directory and add these configurations:

```Bash
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  ```
4. Configure Tailwind CSS
Run this command in your root directory to generate a Tailwind config file. :

```Bash
npx tailwindcss init
```

You'll now 'tell' Tailwind to watch for files containing Tailwind classes so that the .NET CLI can watch for changes in your project. For our Blazor project, the files that Tailwind needs to track are html, cshtml or Razor files. Add the template paths to the content section in your Tailwind config file:

```Bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Next, create an app.css file in the wwwroot folder (within the css folder that you did not delete earlier) Add these css directives to app.css:

```Bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Go to your terminal and run the Tailwind CLI to generate the output CSS watch for changes in your project:

```Bash
npx tailwindcss -i wwwroot/css/app.css -o wwwroot/css/app.min.css --watch
```

7. Add a css reference to the host file in the Pages directory:

```Bash
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <base href="~/" />
    <link href="~/css/app.min.css" rel="stylesheet" />
    </head>
```

8. Finally, run `dotnet watch` to start adding Taliwnd classes to your Blazor project. 

You have now successfully created:
- A new Blazor project
- Installed and configured Tailwind CSS with Blazor

Up next, we'll install and configure Flowbite in our Blazor project. We'll also showcase how to use Flowbite components in a Blazor project through dropdown component demo. 

## Install Flowbite
Flowbite-blazor is the official Flowbite compinent library for Blazor. Use the Flowbite-Blazor Starter to start using Flowbite components in your Blazor project. 

1. Install Flowbite via NPM 

```Bash
npm install flowbite
```

2. Require flowbite in the Tailwind config file as a plugin:

```Bash
module.exports = {
  // other options
  plugins: [
    require('flowbite/plugin')
  ],
}

```

3. Add the Flowbite source files to the content module to start applying classes from the Flowbite interactive elements:

```Bash
module.exports = {
  content: [
    // other files...
    "./node_modules/flowbite/**/*.js"
  ],
...
}
```

4. Add a script tag with this path before the end of the body tag in the host.cshtml page:

```Bash
...
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </body>
</html>
```

You have successfully installed Flowbite and can start using the components to build your Blazor project.

## Flowbite Components in a Blazor Project
Now that you have successfully installed Blazor.NET, Tailwind CSS and Flowbite, you can start using Flowbite's components such as navbars, buttons, and modals in your project.

We'll use a dropdown component with the hover effect as an example. Copy/paste this [code block](https://flowbite.com/docs/components/dropdowns/) into your Pages/Index.razor file:

```Bash
@page "/"

<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="{hover|click}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
<!-- Dropdown menu -->
<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
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

You have now successfully installed and configured Tailwind CSS and Flowbite into a Blazor project. [Learn more](https://github.com/themesberg/flowbite-blazor) about the Flowbite-Blazor library and how to customize it to your project.



















