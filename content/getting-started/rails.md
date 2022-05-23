---
layout: home
title: Tailwind CSS Ruby on Rails - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Ruby on Rails project and start developing modern web applications based on the full-stack framework
group: getting-started
toc: true
requires_react: true

previous: Svelte
previousLink: getting-started/svelte/
next: License
nextLink: getting-started/license/
---

Ruby on Rails is an open-source full-stack web application framework that runs server-side written in Ruby and built by the creators of Basecamp based on a model-view-controller architecture.

Popular websites such as GitHub, Shopify, Twitch, Dribbble, AirBnB, Coinbase are all based on the Ruby on Rails framework and it is continued to be used by thousands of companies and developers.

In this guide you will learn how to set up Ruby on Rails with Tailwind CSS and install Flowbite to start using the UI components built with the utility classes from Tailwind CSS.

## Install Tailwind CSS with Ruby on Rails

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

9. Include the main JavaScript file to make interactive elements functional:

```html
<script src="../path/to/flowbite/dist/flowbite.js"></script>
```

If you use Webpack or other bundlers you can also import it like this:

```javascript
import 'flowbite';
```
