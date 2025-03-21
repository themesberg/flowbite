---
layout: home
title: Tailwind CSS Flask - Flowbite
description: Learn how to install Tailwind CSS and Flowbite inside a Flask project and start building modern web applications with a micro Python web framework
group: getting-started
toc: true
requires_flask: true

previous: Django
previousLink: getting-started/django/
next: Blazor (.NET)
nextLink: getting-started/blazor/
---

[Flask](https://flask.palletsprojects.com/) is an open-source micro web framework based on Python that allows you to quickly build websites using only a single Python file without requiring any other particular tools or libraries.

It is being used by hundreds of thousands of developers and even large companies such as Samsung, Netflix, Reddit, Lyft, and even Airbnb since its initial release in 2010.

By following this guide you will learn how to properly set up Tailwind CSS with Flowbite inside a Flask project and get started with building websites faster.

## Requirements

Follow the next steps in this tutorial to learn how to install a Flask project with Tailwind CSS and the Flowbite component library.

Make sure that you have both [Node.js](https://nodejs.org) and [Python](https://www.python.org/) installed on your local machine.

After that, you'll need to install Flask on your computer by following the official [installation guide](https://flask.palletsprojects.com/en/2.1.x/installation/) or by running the following command in the terminal if you have pip available in your Python environment:

```bash
python -m pip install Flask
```

Now that you have installed all of the required technologies you can now create a new Flask project.

## Create a Flask project

1. Run the following command in the terminal to create a new Flask project with the name `flowbite-flask`:

```bash
mkdir flowbite-flask
cd flowbite-flask/
```

2. Create a new file called `app.py` inside the root of the project folder with the following content:

```bash
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html")

if __name__ == '__main__':
	app.run(debug=True)
```

What we do here is that we import the Flask micro framework from Python and also set the app route for a new `index.html` file inside the `templates/` folder that we will create in the next step.

3. Create two new folders called `templates/` and `static/`:

```bash
flowbite-flask/
   - app.py
   - templates/
   - static/
```

This is how your project folder structure should look like.

4. Create a new `index.html` file inside your `templates/` folder and create a basic HTML document structure:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flowbite Flask</title>
</head>
<body>
    <h1>Hello, Flask!</h1>
</body>
</html>
```

5. Start a local server by running `python app.py` inside your terminal:

```bash
python app.py
```

This should make the project available via the browser by going to `http://localhost:5000/`. 

## Install Tailwind CSS

Now that you have a working Flask project we can proceed by installing Tailwind CSS. 

1. Run the following command the install Tailwind CSS as a dev dependency using NPM:

```bash
npm install tailwindcss @tailwindcss/cli --save-dev
```

2. Create a new `static/src/` folder and add a new `input.css` file with the following content:

```css
/* static/src/input.css */

@import "tailwindcss";
```

4. Run the following command to watch for changes and compile the Tailwind CSS code:

```bash
npx @tailwindcss/cli -i ./static/src/input.css -o ./static/dist/output.css --watch
```

This will generate a new `output.css` file inside the `static/dist/css/` folder that we will now include in the newly created `index.html` template file.

5. Include `output.css` inside the main `index.html` template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flowbite Flask</title>
    <link rel="stylesheet" href="{{url_for('static',filename='dist/output.css')}}">
</head>
<body>
    <h1 class="text-blue-600">Hello, Flask!</h1>
</body>
</html>
```

Notice how the `text-blue-600` class is now being applied using the configuration that we set up which means that you can start building user interfaces with Tailwind CSS.

## Install Flowbite

Now that you have a working Flask and Tailwind CSS configuration you can also include Flowbite inside your project to get started with hundreds of UI components like navbars, dropdowns, tables, and more.

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite --save
```

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

```css
@import "flowbite/src/themes/default";
```

3. Import the Flowbite plugin file in your CSS:

```css
@plugin "flowbite/plugin";
```

4. Configure the source files of Flowbite in your CSS:

```css
@source "../../node_modules/flowbite";
```

5. Include Flowbite's JavaScript file inside the `index.html` file just before the end of the `<body>` tag using CDN or by including it directly from the `node_modules/` folder:

```html
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
```

Now that you have Flowbite also configured you can explore all of the components by browsing the sidebar menu on the left side of the documentation.

## Flowbite components

Let's now take a look how we can quickly build a simple page using the components from Flowbite.

Let's start by adding a <a href="{{< ref "components/navbar" >}}">Navbar component</a> inside the `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flowbite Flask</title>
    <link rel="stylesheet" href="{{url_for('static',filename='dist/output.css')}}">
</head>

<body>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-sm dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div class="flex md:order-2">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                    started</button>
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
</body>

</html>
```

As you can see, the navigation bar will render correctly and even the hamburger icon functionality will work by toggling the mobile menu on smaller devices.

Other than the base components from the library you can also check out some of the free and premium website sections from [Flowbite Blocks](https://flowbite.com/blocks/) such as hero sections, pricing sections, contact sections, and more.

Let's add a free [Tailwind CSS hero section](https://flowbite.com/blocks/marketing/hero/) just after the navigation bar:

```html
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
        </div>                
    </div>
</section>
```

This gives you a pretty good idea on how powerful a Flask, Tailwind CSS and Flowbite technology stack can be for quickly building websites.

## Flask starter project

This configuration can also be found on the [Flask starter project](https://github.com/themesberg/tailwind-flask-starter) from GitHub where Flask, Tailwind CSS, and Flowbite are already configured and you can start building websites right away.