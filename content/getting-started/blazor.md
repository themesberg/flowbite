---
layout: docs
title: Tailwind CSS Blazor (.NET) - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Blazor (.NET) project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_blazor: true

previous: Flask
previousLink: getting-started/flask/
next: HUGO
nextLink: getting-started/hugo/
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

{{< code lang="bash" >}}
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
{{< /code >}}

If you're running on MacOS or another Linux distribution, visit the [Microsoft website](https://learn.microsoft.com/en-us/dotnet/core/install/macos) to learn how to install the SDK on your local environment. .NET can be installed on Windows, MacOS, and Linux.

2. Install the .NET SDK (software development kit):

{{< code lang="bash" >}}
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-7.0
{{< /code >}}

You can also install the .NET SDK via HomeBrew:

{{< code lang="bash" >}}
brew install --cask dotnet
{{< /code >}}

Open your terminal and run this command to confirm a successful installation:

{{< code lang="bash" >}}
-$ dotnet
{{< /code >}}

This is the output you should see to confirm that you installed the .NET SDK successfully:

{{< code lang="bash" >}}
Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
  -h|--help         Display help.
  --info            Display .NET information.
  --list-sdks       Display the installed SDKs.
  --list-runtimes   Display the installed runtimes.

path-to-application:
  The path to an application .dll file to execute.
{{< /code >}}

Run this command in your terminal to create a new Blazor WASM project.

{{< code lang="bash" >}}
dotnet new blazorwasm
{{< /code >}}

Run this command in your terminal to launch your application and watch for changes:

{{< code lang="bash" >}}
dotnet watch
{{< /code >}}

Your terminal will show that your app is listening on `http://localhost:<port number>` and should launch on your web browser. You can also click on the port to run your application. 

Congratulations! You have now installed and run your first Blazor project. 

In the next section, we will configure Tailwind CSS with Blazor.

## Install Tailwind CSS

There are two ways to install Tailwind in a Blazor Project: by using the Tailwind CLI or PostCSS.

PostCSS helps in transforming `tailwindcss` to styling that is relevant to your project. It also helps you remove unnecessary styling which helps in reducing the size of your files.  

1. Start by installing the Tailwind CSS packages using NPM:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/cli --save-dev
{{< /code >}}

2. Next, create an `input.css` file in the `wwwroot/css/` folder and import the following directive:

{{< code lang="css" file="input.css" icon="file" >}}
@import "tailwindcss";
{{< /code >}}

3. Go to your terminal and run the Tailwind CLI to generate the output CSS watch for changes in your project:

{{< code lang="bash" >}}
npx tailwindcss -i wwwroot/css/input.css -o wwwroot/css/output.css --watch
{{< /code >}}

4. Add the new `output.css` CSS reference to the `index.html` file in the `wwwroot/` folder:

{{< code lang="html" file="index.html" icon="file" >}}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tailwind-4-blazor-starter</title>
    <base href="/" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.min.css" />

    <!-- add this here -->
    <link rel="stylesheet" href="css/output.css" />
    <!-- end -->

    <link rel="icon" type="image/png" href="favicon.png" />
    <link href="tailwind-4-blazor-starter.styles.css" rel="stylesheet" />
</head>
{{< /code >}}

5. Remove all of the other CSS file references from the `index.html` file:

{{< code lang="html" file="index.html" icon="file" >}}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tailwind-4-blazor-starter</title>
    <base href="/" />

    <!-- remove these -->
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.min.css" />
    <!-- end -->

    <link rel="stylesheet" href="css/output.css" />

    <link rel="icon" type="image/png" href="favicon.png" />

    <!-- remove this too -->
    <link href="tailwind-4-blazor-starter.styles.css" rel="stylesheet" />
    <!-- end -->
</head>
{{< /code >}}

6. Finally, run `dotnet watch` to start adding Tailwind classes to your Blazor project. 

You have now successfully created:

- a new Blazor project
- installed and configured Tailwind CSS with Blazor

Up next, we'll install and configure Flowbite in our Blazor project. We'll also showcase how to use the Flowbite UI components in a Blazor project through a dropdown component demo. 

## Install Flowbite

Flowbite is an open-source UI component library that is built with Tailwind CSS and vanilla JavaScript. Here's how you can install and configure it by following these steps to make it work with our Blazor project:

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

{{< code lang="css" icon="file" file="input.css" >}}
/* choose one of the following */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import "flowbite/src/themes/default";

/* MINIMAL THEME
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/minimal";
*/

/* ENTERPRISE THEME
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/enterprise";
*/

/* PLAYFUL THEME
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/playful";
*/

/* MONO THEME
@import "flowbite/src/themes/mono";
*/
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="input.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="input.css" icon="file" >}}
@source "../../node_modules/flowbite";
{{< /code >}}

Now you have installed Flowbite and the styles associated with it. Please follow the next steps to make the interactive JS components work with your Blazor project.

## WASM integration

To use Flowbite with Blazor WebAssembly (WASM), you will need to setup the [Flowbite init functions](https://flowbite.com/docs/getting-started/quickstart/#init-functions) using an [interop layer](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-7.0) that ensures the DOM rendering before applying the event listeners via the data attributes API.

1. First, you need to create a new `flowbite-interop.js` file inside `wwwroot/` and add the following code:

{{< code lang="javascript" file="flowbite-interop.js" icon="file" >}}
window.flowbiteInterop = {
    initializeFlowbite: function () {
        return initFlowbite();
    }
};
{{< /code >}}

2. After that, create a new `Services/FlowbiteService.cs` service inside your Blazor project:

{{< code lang="csharp" file="Services/FlowbiteService.cs" icon="file" >}}
using Microsoft.JSInterop;

namespace tailwind_4_blazor_starter.Services;

public interface IFlowbiteService
{
    ValueTask InitializeFlowbiteAsync();
}

public class FlowbiteService : IFlowbiteService
{
    private readonly IJSRuntime _jsRuntime;

    public FlowbiteService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async ValueTask InitializeFlowbiteAsync()
    {
        await _jsRuntime.InvokeVoidAsync("flowbiteInterop.initializeFlowbite");
    }
}
{{< /code >}}

This creates a reusable service for all of your Blazor WASM pages.

3. Register the newly created service in your `Program.cs` file:

{{< code lang="csharp" file="Program.cs" icon="file" >}}
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using tailwind_4_blazor_starter;

// add this
using tailwind_4_blazor_starter.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// add this
builder.Services.AddScoped<IFlowbiteService, FlowbiteService>();

await builder.Build().RunAsync();
{{< /code >}}

4. Import the Flowbite Javascript file and the `flowbite-interop.js` file in your `index.html` file:

{{< code lang="html" file="index.html" icon="file" >}}
  <!-- ... -->
  <script src="_framework/blazor.webassembly.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>
  <script src="js/flowbite-interop.js"></script>
</body>
{{< /code >}}

5. Create a new `FlowbitePage.cs` file inside the `Pages` folder:

{{< code lang="csharp" file="FlowbitePage.cs" icon="file" >}}
using Microsoft.AspNetCore.Components;
using tailwind_4_blazor_starter.Services;

namespace tailwind_4_blazor_starter.Pages;

public abstract class FlowbitePage : ComponentBase
{
    [Inject]
    protected IFlowbiteService FlowbiteService { get; set; } = default!;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await FlowbiteService.InitializeFlowbiteAsync();
        }
        await base.OnAfterRenderAsync(firstRender);
    }
}
{{< /code >}}

6. Use the inheritance directive in your pages to load the Flowbite JS components:

{{< code lang="razor" file="Home.razor" icon="file" >}}
@page "/"

@inherits FlowbitePage

<PageTitle>Home</PageTitle>

<!-- your components -->
{{< /code >}}

Congratulations! You have now integrated the interactive JS components from Flowbite with a Blazor WASM.

## UI components for Blazor

Now that you have successfully installed Blazor.NET, Tailwind CSS and Flowbite, you can start using Flowbite's UI components such as navbars, buttons, and modals in your project.

Copy and paste this [dropdown component example](https://flowbite.com/docs/components/dropdowns/) into your `Pages/Home.razor` file:

{{< code lang="html" file="Home.razor" icon="file" >}}
@page "/"

<PageTitle>Home</PageTitle>

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-600 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
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
{{< /code >}}

Now that you've set up Flowbite with Blazor you can explore the whole collection of UI components from the [Flowbite Library](https://flowbite.com/docs/getting-started/introduction/) or use the [Flowbite Blocks](https://flowbite.com/blocks/) collection to start building websites.

## Blazor starter project

The open-source community created an [open-source Blazor starter project](https://github.com/themesberg/tailwind-blazor-starter) that you can clone and use as a starting point for building websites with Blazor, .NET, Tailwind CSS and Flowbite.

There's also an official [Flowbite Blazor](https://github.com/themesberg/flowbite-blazor) UI library that the open-source community is working on which should be the native solution for Blazor and .NET applications. Contributions are more than welcome!