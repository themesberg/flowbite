---
layout: home
title: Tailwind CSS Ruby on Rails - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Ruby on Rails project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_rails: true

previous: Svelte
previousLink: getting-started/svelte/
next: License
nextLink: getting-started/license/
---

[Ruby on Rails](https://rubyonrails.org/) is an open-source full-stack web application framework that runs server-side written in Ruby and built by the creators of Basecamp based on a model-view-controller architecture.

Popular websites such as GitHub, Shopify, Twitch, Dribbble, AirBnB, Coinbase are all based on the Ruby on Rails framework and it is continued to be used by thousands of companies and developers.

In this guide you will learn how to set up Ruby on Rails with Tailwind CSS and install Flowbite to start using the UI components built with the utility classes from Tailwind CSS.

## Create a new project

Follow the next steps to get started with a Ruby on Rails project and install Tailwind CSS and Flowbite. 

Make sure that you have [Node.js](https://nodejs.org/en/) and [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed on your machine before continuing.

1. Run the following command to install the `rails` gem from Ruby:

```bash
gem install rails
```

2. Create a new Ruby on Rails application if you don't already have one:

```bash
rails new app-name
cd app-name
```

Now that you have created a new project you can proceed by setting up Tailwind CSS.

## Install Tailwind CSS

3. Install the official `tailwindcss-rails` gem:

```bash
./bin/bundle add tailwindcss-rails
```

4. Run the install command to generate a `tailwind.config.js` file inside the `./config` directory:

```bash
./bin/rails tailwindcss:install
```

5. Configure the `tailwind.config.js` file by setting the appropiate `content` paths:

```javascript
module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. Set up the Tailwind directives inside the `./app/assets/stylesheets/application.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now that Tailwind CSS has been succesfully installed you can proceed by installing Flowbite.

## Install Flowbite

7. Install Flowbite by running the following command in your terminal:

```bash
npm install flowbite
```

8. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

8. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

9. Run the following command to include Flowbite's JavaScript inside the `importmap.rb` file:

```bash
./bin/importmap pin flowbite
```

Alternatively, you can also include the script separately or using CDN:

```html
// relative path
<script src="../path/to/flowbite/dist/flowbite.js"></script>

// CDN
<link rel="stylesheet" href="https://unpkg.com/flowbite@{{< current_version >}}/dist/flowbite.min.css" />
```

Now you can use interactive components such as modals, dropdowns, navbars, and more.
## Building your project

Run the following command to start a local server and build the source files:

```bash
./bin/dev
```

This will create a local server and you will be able to access the pages on `localhost:3000`.

## Create a homepage

First of all you need to delete the default `index.html` file inside the `public/` directory and then follow these steps:

1. Create a new `pages/` directory inside the `app/views/` directory.
2. Create a new `home.html.erb` file inside the `app/views/pages/` directory.
3. Choose one of the components from Flowbite (ie. a tooltip) and copy-paste it inside the newly created file:

```html
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

4. Create a new controller called `pages_controller.rb` inside the `app/controllers/` directory and add the following code inside of it:

```ruby
class PagesController < ApplicationController
  def home
  end
end
```

5. Set the homepage as the root page inside the `routes.rb` file inside the `config/` directory:

```ruby
root to: 'pages#home'
```

If you have run `./bin/dev` to start a local server you should see the changes on `localhost:3000/` and the utility classes from Tailwind CSS should work and the interactive components from Flowbite should also be functional.