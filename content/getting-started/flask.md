---
layout: docs
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

{{< code lang="bash" >}}
python -m pip install Flask
{{< /code >}}

Now that you have installed all of the required technologies you can now create a new Flask project.

## Create a Flask project

1. Run the following command in the terminal to create a new Flask project with the name `flowbite-flask`:

{{< code lang="bash" >}}
mkdir flowbite-flask
cd flowbite-flask/
{{< /code >}}

2. Create a new file called `app.py` inside the root of the project folder with the following content:

{{< code lang="python" file="app.py" icon="file" >}}
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html")

if __name__ == '__main__':
	app.run(debug=True)
{{< /code >}}

What we do here is that we import the Flask micro framework from Python and also set the app route for a new `index.html` file inside the `templates/` folder that we will create in the next step.

3. Create two new folders called `templates/` and `static/`:

{{< code lang="bash" >}}
flowbite-flask/
   - app.py
   - templates/
   - static/
{{< /code >}}

This is how your project folder structure should look like.

4. Create a new `index.html` file inside your `templates/` folder and create a basic HTML document structure:

{{< code lang="html" file="index.html" icon="file" >}}
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
{{< /code >}}

5. Start a local server by running `python app.py` inside your terminal:

{{< code lang="bash" >}}
python app.py
{{< /code >}}

This should make the project available via the browser by going to `http://localhost:5000/`. 

## Install Tailwind CSS

Now that you have a working Flask project we can proceed by installing Tailwind CSS. 

1. Run the following command the install Tailwind CSS as a dev dependency using NPM:

{{< code lang="bash" >}}
npm install tailwindcss @tailwindcss/cli --save-dev
{{< /code >}}

2. Create a new `static/src/` folder and add a new `input.css` file with the following content:

{{< code lang="css" file="input.css" icon="file" >}}
/* static/src/input.css */

@import "tailwindcss";
{{< /code >}}

4. Run the following command to watch for changes and compile the Tailwind CSS code:

{{< code lang="bash" >}}
npx @tailwindcss/cli -i ./static/src/input.css -o ./static/dist/output.css --watch
{{< /code >}}

This will generate a new `output.css` file inside the `static/dist/css/` folder that we will now include in the newly created `index.html` template file.

5. Include `output.css` inside the main `index.html` template:

{{< code lang="html" file="index.html" icon="file" >}}
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
    <h1 class="text-fg-brand">Hello, Flask!</h1>
</body>
</html>
{{< /code >}}

Notice how the `text-fg-brand` class is now being applied using the configuration that we set up which means that you can start building user interfaces with Tailwind CSS.

## Install Flowbite

Now that you have a working Flask and Tailwind CSS configuration you can also include Flowbite inside your project to get started with hundreds of UI components like navbars, dropdowns, tables, and more.

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

5. Include Flowbite's JavaScript file inside the `index.html` file just before the end of the `<body>` tag using CDN or by including it directly from the `node_modules/` folder:

{{< code lang="html" file="index.html" icon="file" >}}
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
{{< /code >}}

Now that you have Flowbite also configured you can explore all of the components by browsing the sidebar menu on the left side of the documentation.

## Flowbite components

Let's now take a look how we can quickly build a simple page using the components from Flowbite.

Let's start by adding a <a href="{{< ref "components/navbar" >}}">Navbar component</a> inside the `index.html` file:

{{< code lang="html" file="index.html" icon="file" >}}
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
    
<nav class="bg-neutral-primary border-default">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
        <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
</body>

</html>
{{< /code >}}

As you can see, the navigation bar will render correctly and even the hamburger icon functionality will work by toggling the mobile menu on smaller devices.

Other than the base components from the library you can also check out some of the free and premium website sections from [Flowbite Blocks](https://flowbite.com/blocks/) such as hero sections, pricing sections, contact sections, and more.

Let's add a free [Tailwind CSS hero section](https://flowbite.com/blocks/marketing/hero/) just after the navigation bar:

{{< code lang="html" file="index.html" icon="file" >}}
<section class="bg-neutral-primary">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 class="mb-4 mt-8 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-body lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</a>
            <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">
                <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
                </svg>
                Watch video
            </a> 
        </div>
  </div>
</section>
{{< /code >}}

This gives you a pretty good idea on how powerful a Flask, Tailwind CSS and Flowbite technology stack can be for quickly building websites.

## Flask starter project

This configuration can also be found on the [Flask starter project](https://github.com/themesberg/tailwind-flask-starter) from GitHub where Flask, Tailwind CSS, and Flowbite are already configured and you can start building websites right away.