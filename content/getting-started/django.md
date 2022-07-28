---
layout: home
title: Tailwind CSS Django - Flowbite
description: Learn how to install Tailwind CSS and Flowbite inside a Django project and start developing modern web applications with a high-level Python framework
group: getting-started
toc: true
requires_django: true

previous: Ruby on Rails
previousLink: getting-started/rails/
next: License
nextLink: getting-started/license/
---

[Django](https://www.djangoproject.com/) is an open-source web framework following the model-template-views architecture built in Python currently maintained by the Django Software Organization.

It is currently being used by small and large corporations for websites such as YouTube, Spotify, Instagram, Disqus, and Dropbox and demand for Django developers is increasing.

By following this guide you will learn how to properly set up a Django project with Tailwind CSS and Flowbite to start developing modern web applications even faster.

## Requirements

Follow the next steps to create a new Django project and install Tailwind CSS with Flowbite to get the full benefits of the component library.

Make sure that you have both [Node.js](https://nodejs.org) and [Python](https://www.python.org/) installed on your local machine.

After that, you'll need to install Django on your local computer by following the official [installation guide](https://docs.djangoproject.com/en/4.0/intro/install/) or by running the following command in the terminal if you have pip available in your Python environment:

```bash
python -m pip install Django
```

Now that you have all the required technologies installed you can start by creating a new Django project.

## Create a new project

1. Run the following command in the terminal to create a new Django project with the name `myapp`:

```bash
django-admin startproject myapp
cd myapp/
```

## Install Python Webpack Boilerplate

> Python Webpack Boilerplate can help you jump start frontend project bundled by Webpack

```bash
python -m pip install python-webpack-boilerplate
```

Add `webpack_boilerplate` to the `INSTALLED_APPS` in `myapp/settings.py`

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'webpack_boilerplate',        # new
]
```

Let's run Django command to create frontend project from the templates. Please set `run_npm_command_at_root` to `y`, so we can run `npm` command at root directory.

```bash
python manage.py webpack_init

project_slug [frontend]:
run_npm_command_at_root [n]: y
 [SUCCESS]: Frontend app 'frontend' has been created. To know more, check https://python-webpack-boilerplate.rtfd.io/en/latest/frontend/
```

Now a new `frontend` directory is created which contains pre-defined files for our frontend project.

And root directory contains a `package.json` file.

```bash
# install frontend dependency
npm install

# build frontend assets
npm run watch
```

If the command succeed without error, press `CTRL + c` to terminate the npm command.

## Config Django

Add code below to Django settings `myapp/settings.py`

```python
STATICFILES_DIRS = [
    BASE_DIR / "frontend/build",
]

WEBPACK_LOADER = {
    'MANIFEST_FILE': BASE_DIR / "frontend/build/manifest.json",
}
```

Create a new `templates/` directory inside the project folder and update `settings.py` folder:

```bash
TEMPLATES = [
    {
        ...
        'DIRS': [BASE_DIR / 'templates'], # new
        ...
    },
]
```

## Load the bundle file

Update `myapp/urls.py`

```bash
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")), # new
    path('admin/', admin.site.urls),
]
```

9. Create a new `_base.html` file inside the `templates/` directory:

```html
<!-- templates/_base.html -->

{% load static webpack_loader %}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Django + Tailwind CSS + Flowbite</title>

    {% stylesheet_pack 'app' %}

</head>

<body class="bg-green-50">
    <div class="container mx-auto mt-4">
        {% block content %}
        {% endblock content %}
    </div>

{% javascript_pack 'app' attrs='charset="UTF-8"' %}

</body>

</html>
```

Create an `index.html` file that will be served as the homepage:

```html
<!-- templates/index.html -->

{% extends "_base.html" %}

{% block content %}
  <h1 class="text-3xl text-green-800">Django + Tailwind CSS + Flowbite</h1>
{% endblock content %}
```

Now please launch npm command to watch and build frontend assets

```
npm run watch
```

Create a local server instance by running the following command:

```bash
python manage.py migrate
python manage.py runserver
```

Awesome! Now you have a working Django project locally. Let's continue by installing Tailwind CSS.

## Install Tailwind CSS

Run the following command the install Tailwind CSS as a dev dependency using NPM:

```bash
npm install -D tailwindcss@latest postcss-import
```

Update `postcss.config.js`

```js
// https://tailwindcss.com/docs/using-with-preprocessors

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: { 'nesting-rules': false }
    }),
  ]
};
```

Using the Tailwind CLI create a new `tailwind.config.js` file:

```bash
npx tailwindcss init
```

Configure the template paths using the `content` value inside the Tailwind configuration file:

```javascript
module.exports = {
  content: [
      './templates/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `frontend/src/styles/index.scss`

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Update `frontend/src/application/app.js`

```js
// This is the scss entry file
import "../styles/index.scss";

// We can import other JS file as we like
import "../components/sidebar";

window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready 1");
});
```

Terminate npm command and run it again

```bash
npm run watch
```

Terminate Django server and run it again

Open `localhost:8000` in your browser and you'll see working HTML with Tailwind CSS code.

Now that you have configured both Django and Tailwind CSS you can also set up Flowbite to get access to the whole collection of interactive components like navbars, modals, dropdowns, buttons, and more to make development even faster.

## Install Flowbite

Flowbite is an open source library of interactive components built on top of Tailwind CSS and it can be installed using NPM and required as a plugin inside Tailwind CSS.

1. Install Flowbite as a dependency using NPM:

```bash
npm i flowbite
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Include Flowbite inside the content value of the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
```

4. Include Flowbite's JavaScript file in `frontend/src/application/app.js`

```js
// This is the scss entry file
import "../styles/index.scss";

// We can import other JS file as we like
import "../components/sidebar";

// import flowbite
import 'flowbite';

window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready 1");
});
```

Now run npm command to compile frontend assets

```
npm run watch
```

Now that you have everything configured you can check out the components from Flowbite such as navbars, modals, buttons, datepickers, and more.

## Flowbite components

In this section I'll show you how you can search for and use the interactive components from Flowbite.

Let's start by adding a <a href="{{< ref "components/navbar" >}}">Navbar component</a> inside the `_base.html` file:

```html
<!-- templates/_base.html -->

{% load static webpack_loader %}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Django + Tailwind CSS + Flowbite</title>

    {% stylesheet_pack 'app' %}

</head>

<body class="bg-green-50">

    <!-- Add this -->
    <nav class="bg-green-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <img src="/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite Django</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End of new HTML -->


    <div class="container mx-auto mt-4">
        {% block content %}
        {% endblock content %}
    </div>

{% javascript_pack 'app' attrs='charset="UTF-8"' %}

</body>

</html>
```

This way you already have a functional and responsive navigation bar added to all pages.

Let's take a look how can added more content directly to the view templates, not just the base template.

Check out one of the <a href="{{< ref "components/card" >}}">Card components</a> from Flowbite and add it to the `index.html` file:

```html
<!-- templates/index.html -->

{% extends "_base.html" %}

{% block content %}

<h1 class="mb-6 text-3xl text-green-800">Django + Tailwind CSS + Flowbite</h1>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
            <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </div>
</div>

{% endblock content %}
```

At this point you can use any of the components to build user interfaces easier and faster together with Django, Tailwind CSS and Flowbite. 

Check out all of the components by browsing the menu on the left sidebar under the "components" section.

