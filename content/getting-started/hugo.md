---
layout: docs
title: Tailwind CSS HUGO - Flowbite
description: Learn how to install HUGO together with Tailwind CSS and Flowbite to start building websites with one of the most popular static site generators in the world
group: getting-started
toc: true
requires_hugo: true

previous: Blazor
previousLink: getting-started/blazor/
next: Configuration
nextLink: customize/configuration/
---

[HUGO](https://gohugo.io/) is a popular and open-source static site generator framework that makes it easy to organize your files and assets where you can also leverage a taxonomy system, multilingual support, fast assets pipeline, and more. HUGO is used by millions of developers and by websites such as Bootstrap, Litecoin, Smashing Magazine, and even Flowbite.

Check out this guide to learn how to install and set up a HUGO project together with Tailwind CSS and the UI components from Flowbite to start building websites with a stack that enhances your front-end development workflow.

## Requirements

Make sure that you have both [HUGO](https://gohugo.io/installation/) and [Node.js](https://nodejs.org/en/) installed locally on your computer.

## Create a HUGO project

Follow the next steps to learn how to create a new HUGO project after you've installed the dependencies.

1. Run the following CLI command to create a new HUGO application:

{{< code lang="bash" >}}
hugo new site flowbite-app
cd flowbite-app
{{< /code >}}

2. The next step is to create a local custom theme:

{{< code lang="bash" >}}
hugo new theme flowbite-theme
{{< /code >}}

This command will create a new scaffolded theme directory that we can extend with our HUGO app.

3. Next, add the theme to the `config.toml` file:

{{< code lang="toml" file="config.toml" icon="file" >}}
theme = ["flowbite-theme"]
{{< /code >}}

4. Run a local server using the following command:

{{< code lang="bash" >}}
hugo server -D
{{< /code >}}

Now you should see a basic HUGO website running at a generated localhost server.

Congratulations! You have now successfully installed and configured HUGO.

## Install Tailwind CSS

Tailwind CSS is a popular utility-first CSS framework that allows better control over the styling of your website and makes it easier to work together with other team members within your organization.

1. Go to the `flowbite-theme/` directory and run the following command:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/cli --save-dev
{{< /code >}}

2. Inside your `main.css` file from the `flowbite-theme/` directory add the following:

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";
{{< /code >}}

3. Compile the CSS code for Tailwind CSS by running this command inside of your theme directory:

{{< code lang="bash" >}}
npx @tailwindcss/cli -i ./assets/css/main.css  -o ./assets/css/output.css --watch
{{< /code >}}

4. Update the `css.html` file from the `flowbite-theme/` directory with the following:

{{< code lang="html" file="css.html" icon="file" >}}
{{- with resources.Get "css/output.css" }}
  {{- if eq hugo.Environment "development" }}
    <link rel="stylesheet" href="{{ .RelPermalink }}">
  {{- else }}
    {{- with . | minify | fingerprint }}
      <link rel="stylesheet" href="{{ .RelPermalink }}" integrity="{{ .Data.Integrity }}" crossorigin="anonymous">
    {{- end }}
  {{- end }}
{{- end }}
{{< /code >}}

5. In order to test out Tailwind CSS, add a utility class inside the `single.html` file:

{{< code lang="html" file="single.html" icon="file" >}}
{{ define "main" }}
  <h1 class="text-fg-brand">{{ .Title }}</h1>

  {{ $dateMachine := .Date | time.Format "2006-01-02T15:04:05-07:00" }}
  {{ $dateHuman := .Date | time.Format ":date_long" }}
  <time datetime="{{ $dateMachine }}">{{ $dateHuman }}</time>

  {{ .Content }}
  {{ partial "terms.html" (dict "taxonomy" "tags" "page" .) }}
{{ end }}
{{< /code >}}

By browsing to one of the post pages, you should now see the text updated in blue.

## Install Flowbite

Now that you have a working HUGO project configured with Tailwind CSS, you can now install Flowbite.

Please make sure that you install the dependency, just as with Tailwind CSS, inside your `flowbite-theme` directory.

1. Install Flowbite as a dependency using NPM by running the following command:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `main.css` CSS file:

{{< code lang="css" file="main.css" icon="file" >}}
@import "flowbite/src/themes/default";
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="main.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="main.css" icon="file" >}}
@source "../../node_modules/flowbite";
{{< /code >}}

5. Add the Flowbite JavaScript inside your `js.html` file:

{{< code lang="html" file="js.html" icon="file" >}}
<script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

{{- with resources.Get "js/main.js" }}
  {{- if eq hugo.Environment "development" }}
    {{- with . | js.Build }}
      <script src="{{ .RelPermalink }}"></script>
    {{- end }}
  {{- else }}
    {{- $opts := dict "minify" true }}
    {{- with . | js.Build $opts | fingerprint }}
      <script src="{{ .RelPermalink }}" integrity="{{- .Data.Integrity }}" crossorigin="anonymous"></script>
    {{- end }}
  {{- end }}
{{- end }}
{{< /code >}}

6. Let's now test out Flowbite by updating our `menu.html` file from the theme directory:

{{< code lang="html" file="menu.html" icon="file" >}}
{{- /*
Renders a menu for the given menu ID.

@context {page} page The current page.
@context {string} menuID The menu ID.

@example: {{ partial "menu.html" (dict "menuID" "main" "page" .) }}
*/}}

{{- $page := .page }}
{{- $menuID := .menuID }}

{{- with index site.Menus $menuID }}
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {{- partial "inline/menu/walk.html" (dict "page" $page "menuEntries" .) }}
      </ul>
    </div>
  </div>
</nav>
{{- end }}

{{- define "partials/inline/menu/walk.html" }}
  {{- $page := .page }}
  {{- range .menuEntries }}
    {{- $attrs := dict "href" .URL }}
    {{- if $page.IsMenuCurrent .Menu . }}
      {{- $attrs = merge $attrs (dict "class" "active" "aria-current" "page") }}
    {{- else if $page.HasMenuCurrent .Menu .}}
      {{- $attrs = merge $attrs (dict "class" "ancestor" "aria-current" "true") }}
    {{- end }}
    {{- $name := .Name }}
    {{- with .Identifier }}
      {{- with T . }}
        {{- $name = . }}
      {{- end }}
    {{- end }}
    <li>
      <a
      class="block py-2 px-3 text-heading rounded-sm hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
        {{- range $k, $v := $attrs }}
          {{- with $v }}
            {{- printf " %s=%q" $k $v | safeHTMLAttr }}
          {{- end }}
        {{- end -}}
      >{{ $name }}</a>
      {{- with .Children }}
        <ul>
          {{- partial "inline/menu/walk.html" (dict "page" $page "menuEntries" .) }}
        </ul>
      {{- end }}
    </li>
  {{- end }}
{{- end }}
{{< /code >}}

After you reload the server, the pages from the menu should now be rendered inside the navbar component.

## UI components

Now that you have everything installed and set up you can start using the [UI components from Flowbite](https://flowbite.com/blocks/) to build up your website with HUGO much faster and easier with hero sections, navigation bars, admin CRUD layouts, and more.

## HUGO starter theme

We have developed a free and open-source [HUGO starter theme](https://github.com/themesberg/tailwind-hugo-starter) that you can use to build up your website as a starting point or use it directly as a personal blog website that already has HUGO, Tailwind CSS and Flowbite configured.