---
layout: docs
title: Tailwind CSS Ruby on Rails - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Ruby on Rails project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_rails: true

previous: Symfony
previousLink: getting-started/symfony/
next: Phoenix (Elixir)
nextLink: getting-started/phoenix/
---

[Ruby on Rails](https://rubyonrails.org/) is an open-source full-stack web application framework that runs server-side written in Ruby and built by the creators of Basecamp based on a model-view-controller architecture.

Popular websites such as GitHub, Shopify, Twitch, Dribbble, AirBnB, and Coinbase are all based on the Ruby on Rails framework and it is continued to be used by thousands of companies and developers.

In this guide, you will learn how to set up Ruby on Rails with Tailwind CSS and install Flowbite to start using the UI components built with the utility classes from Tailwind CSS.

## Create a new project

Follow the next steps to get started with a Ruby on Rails project and install Tailwind CSS and Flowbite. 

Make sure that you have [Node.js](https://nodejs.org/en/) and [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed on your machine before continuing.

1. Run the following command to install the `rails` gem from Ruby:

{{< code lang="bash" >}}
gem install rails
{{< /code >}}

2. Create a new Ruby on Rails application if you don't already have one:

{{< code lang="bash" >}}
rails new flowbite-app
cd flowbite-app
{{< /code >}}

Now that you have created a new project you can proceed by setting up Tailwind CSS.

## Install Tailwind CSS

Since Tailwind v4, it's really easy to install Tailwind CSS with Rails, because we no longer need to have a custom `tailwind.config.js` file. Instead, everything is configured in your main CSS file.

1. Install the official `tailwindcss-rails` gems:

{{< code lang="bash" >}}
./bin/bundle add tailwindcss-ruby
./bin/bundle add tailwindcss-rails
{{< /code >}}

2. Run the install command to set up the Tailwind configuration files:

{{< code lang="bash" >}}
./bin/rails tailwindcss:install
{{< /code >}}

Now that Tailwind CSS has been successfully installed you can proceed by installing Flowbite.

## Install Flowbite

1. Install Flowbite by running the following command in your terminal:

{{< code lang="bash" >}}
npm install flowbite --save
{{< /code >}}

2. Import the default theme variables from Flowbite inside your main `application.css` CSS file:

{{< code lang="css" file="application.css" icon="file" >}}
@import "flowbite/src/themes/default";
{{< /code >}}

3. Import the Flowbite plugin file in your CSS:

{{< code lang="css" file="application.css" icon="file" >}}
@plugin "flowbite/plugin";
{{< /code >}}

4. Configure the source files of Flowbite in your CSS:

{{< code lang="css" file="application.css" icon="file" >}}
@source "../../../node_modules/flowbite";
{{< /code >}}

### Turbo load support

Flowbite provides custom event listeners for turbo load support if you import the `flowbite.turbo.js` file. Check out the following guides to learn more how to integrate the JavasScript file that powers the interactive components with Importmap or ESBuild.

### Importmap

Importmap is the default way of handling JavaScript on Rails 7. In order to support turbo load from importmaps you have to pin the `flowbite.turbo.js` file from a CDN where the `turbo:load` event listeners are added instead of `load`.

1. Add the following line inside your `importmap.rb` file:

{{< code lang="ruby" file="importmap.rb" icon="file" >}}
pin "flowbite", to: "https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.turbo.min.js"
{{< /code >}}

2. Then you need to import `flowbite` inside your `application.js` file:

{{< code lang="javascript" file="application.js" icon="file" >}}
import 'flowbite';
{{< /code >}}

This will enable the interactive elements like dropdowns, modals, and navbars work by hooking the event listeners and actions to the data attributes whenever a new page is loaded in your application.

### ESBuild

If you use ESBuild to Bundle your JavaScript on Rails, you will need to import a version of Flowbite which supports the `turbo:load` event listeners instead of `load`. To do this **add the line below** to your `application.js` file:

{{< code lang="javascript" file="application.js" icon="file" >}}
import "flowbite/dist/flowbite.turbo.js";
{{< /code >}}

### Standard JS (no turbo)

If you decide not to use turbo load then you can follow these steps:

1. Run this command to pin Flowbite in your `importmap.rb` file:

{{< code lang="bash" >}}
./bin/importmap pin flowbite
{{< /code >}}

2. Then you need to include Flowbite inside your `application.js` file:

{{< code lang="javascript" file="application.js" icon="file" >}}
import 'flowbite';
{{< /code >}}

### Include via CDN

Alternatively to all of the above you can also include the JavaScript via CDN:

{{< code lang="html" file="index.html" icon="file" >}}
// include via CDN for turbo support
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.turbo.min.js"></script>

// include via CDN without turbo support
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
{{< /code >}}

### Datepicker

Since the release of version `2.4.0` of Flowbite the Datepicker component is now part of the main package so you don't need to include `datepicker.turbo.js` separately. It will work out of the box.

### Versions prior to 2.4.0

In order to support turbo load from Ruby on Rails 7, you have to include the `datepicker.turbo.js` file either from NPM or CDN into your project.

Include the following JavaScript file to support the datepicker component:

{{< code lang="ruby" file="importmap.rb" icon="file" >}}
pin "flowbite-datepicker", to: "https://cdn.jsdelivr.net/npm/flowbite@2.3.0/dist/datepicker.turbo.min.js"
{{< /code >}}

Don't forget to also import it inside your `application.js` file:

{{< code lang="javascript" file="application.js" icon="file" >}}
import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';
{{< /code >}}

## Building your project

Run the following command to start a local server and build the source files:

{{< code lang="bash" >}}
./bin/dev
{{< /code >}}

This will create a local server and you will be able to access the pages on `localhost:3000`.

You can also run `rails tailwindcss:build` to compile Tailwind CSS.

## Create a homepage

First of all, you need to delete the default `index.html` file inside the `public/` directory and then follow these steps:

1. Create a new `pages/` directory inside the `app/views/` directory.
2. Create a new `home.html.erb` file inside the `app/views/pages/` directory.
3. Choose one of the components from Flowbite (ie. a tooltip) and copy-paste it inside the newly created file:

{{< code lang="html" file="home.html.erb" icon="file" >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /code >}}

4. Create a new controller called `pages_controller.rb` inside the `app/controllers/` directory and add the following code inside of it:

{{< code lang="ruby" file="pages_controller.rb" icon="file" >}}
class PagesController < ApplicationController
  def home
  end
end
{{< /code >}}

5. Set the homepage as the root page inside the `routes.rb` file inside the `config/` directory:

{{< code lang="ruby" file="routes.rb" icon="file" >}}
root to: 'pages#home'
{{< /code >}}

If you have run `./bin/dev` to start a local server you should see the changes on `localhost:3000/` and the utility classes from Tailwind CSS should work and the interactive components from Flowbite should also be functional.

## Rails starter project

We have released an open-source [Ruby on Rails project with Tailwind CSS and Flowbite](https://github.com/themesberg/tailwind-rails-starter) that you can use to get starter with a new project where we have showcased most of the components from Flowbite.