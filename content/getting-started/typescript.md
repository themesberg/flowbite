---
layout: home
title: Tailwind CSS TypeScript - Flowbite
description: Learn how to install Tailwind CSS and Flowbite with TypeScript to use optional static typing for JavaScript to make your code more scalable and maintainable
group: getting-started
toc: true
requires_typescript: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: License
nextLink: getting-started/license/
---

[TypeScript](https://www.typescriptlang.org/) is a free and open-source programming language that helps improve the scalability, maintainability, and readability of code. It does this by adding optional static typing to JavaScript. 

It is developed and maintained by Microsoft and used by companies such as Slack, Bitpanda, Accenture, Medium, and many more to help them scale code better.

This guide will teach you how to set up Tailwind CSS and the Flowbite library with TypeScript and also show you how you can use the components from Flowbite to power your Tailwind CSS application with integrated types and interfaces.

## Create a new project

Follow the next steps to learn how to install TypeScript and Tailwind CSS in a local project. Before continuning make sure that you have Node.js installed locally on your computer.

1. Create a new project and run the following command to create a `package.json` file in the root folder:

```bash
npm init
```

This is where we will add the project dependencies and the script commands.

## Install TypeScript

By following the official [TypeScript guide](https://www.typescriptlang.org/download) we will install and set it up in our project using NPM.

2. Run the following command to install and require TypeScript as a dependency in your `package.json` file:

```bash
npm install --save-dev typescript
```

3. Create a new `tsconfig.json` file by running the following command:

```bash
npx tsc --init
```

4. Replace the content of the `tsconfig.json` file using the following code:

```javascript
{
  "compilerOptions": {
      "lib": ["dom", "es2015"],
      "outDir": "./lib/cjs/",
      "sourceMap": true,
      "declaration": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "allowJs": true,
      "moduleResolution": "node"
  },
  "include": ["src/**/*.ts*"],
  "exclude": ["node_modules", "dist", "lib"]
}
```

Here's a breakdown of what each option key-value pair represents:

- `lib` - this option specifies which libraries we want TypeScript to support
- `outDir` - this options tells the TS compiler where to export the compiled code
- `sourceMap` - enables source maps to be generated
- `declaration` - generates declaration files after compiling if true
- `noImplicitAny` - prevents using the any type by throwing an error (this is best practice)
- `module` - specifies the module system to use when generating JS code from the TypeScript source code
- `target` - specifies the JavaScript version to which the TypeScript code should be transpiled
- `allowJs` - specifies whether the compiler should include JS files in the project
- `moduleResolution` - specifies the strategy that the compiler should use to resolve module names
- `include` - specifies which are the source files TypeScript should compile 
- `exclude` - specifies which folders should TypeScript ignore when compiling

After setting up the TypeScript configuration file we can now write some code.

5. Set up the folder structure for your TypeScript files by creating a new `src/` folder and creating an `index.ts` file inside of it with the following code:

```javascript
const text: string = 'Hello TypeScript';
console.log(text);
```

This code already uses a type declaration which will help us verify if the compiler works properly.

### Webpack bundler

In order to compile the TypeScript code into JavaScript that is supported by modern browsers we will have to install [Webpack](https://webpack.js.org/) and bundle the source code into one final JavaScript file that we will later include in our HTML templates.

6. Install Webpack and the necessary plugins by executing the following command in your terminal:

```bash
npm i -D webpack webpack-cli typescript ts-loader
```

7. Create a new `webpack.config.js` file and add the following content:

```javascript
//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
```

8. Run the following command to watch for changes and compile the TypeScript source code into browser-compatible JavaScript code:

```bash
npx webpack --watch
```

This will generate an `app-bundle.js` named JavaScript file that you can now include inside your HTML templates. To check out if it works you can create a new `index.html` file and open it inside your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./dist/output.css">
</head>
<body>
    <h1 class="text-4xl">Hello Tailwind CSS!</h1>
    <script src="./dist/app-bundle.js"></script>
</body>
</html>
```

### CommonJS

By default the compiled code will be CJS as specified in the `tsconfig.json` file.

Compile the code by running the following command in your terminal:

```bash
npx tsc
```

This will generate a new `lib/` folder with CJS (CommonJS) compiled JavaScript code that we will later include in our templates.

### ECMAScript modules

If you want to compile for ESM instead of CJS you can use the following command instead:

```bash
npx tsc -m es6 --outDir lib/esm
```

Now that we have successfully configured TypeScript and also compiled the source code we have to install and configure Tailwind CSS.

Run the following command to install and require Tailwind CSS in your `package.json` file:

```bash
npm install -D tailwindcss
```

## Install Tailwind CSS

9. Create a new `tailwind.config.js` file by running the following command:

```bash
npx tailwindcss init
```

10. Based on your source template files make sure you include all of the relevant paths in the `content` area of your Tailwind CSS configuration file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In our case we will look for all TypeScript files inside the `src/` folder and all of the HTML files inside the project relative to the root.

11. Create a new `input.css` file inside the `src/` folder and import all of the basic Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

12. Compile the code when changes are made by using the following command:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

13. Open the `index.html` file inside the root folder of your project with the following basic setup where we include all of the compiled code including the new `output.css` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./dist/output.css">
</head>
<body>
    <h1 class="text-4xl">Hello Tailwind CSS!</h1>
    <script src="./dist/app-bundle.js"></script>
</body>
</html>
```

Now open the `index.html` file in your browser and you should see the text larger because of the `text-4xl` utility class and also see a "Hello TypeScript" message inside your developer console.

## Install Flowbite

You can start using the open-source and interactive components from Flowbite which are based on Tailwind CSS and support TypeScript types by following the next steps.

1. Install and require Flowbite in your `package.json` file by running the following command:

```bash
npm install flowbite
```

2. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

3. Make sure that the generated utility classes from the library are also included in the final `output.css` file by adding the source code paths inside your `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

}
```

## Flowbite components

Now that you have set up TypeScript, Tailwind CSS, and Flowbite you can start using this stack to build scalable websites using a large collection of UI components from Flowbite which support type declarations.

One example would be to use the <a href="{{< ref "components/modal" >}}#javascript-behaviour">Modal component</a> and using its methods and options to programmatically show or hide the element.

First of all we need to make sure that we have the correct HTML element set up in our templates - we can use this markup and add it inside the `index.html` file:

```html
<button id="button" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

<div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
```

As you can see we added a unique ID for the button element that the parent modal element to be able to set event listeners to them later on. After having this markup put in place we need to open the `index.ts` file and import the Modal class from the Flowbite package and set up the event listeners:

```javascript
import { Modal } from 'flowbite'

// select the two elements that we'll work with
const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

// create a new modal component
const modal = new Modal($modalElement);

// toggle the visibility of the modal when clicking on the button
$buttonElement.addEventListener('click', () => modal.toggle());
```

Alternatively, you can also call on the available methods of the Modal class such as `show()` or `hide()` to add the logic inside your TypeScript files instead.

```javascript
// add your own logic and then show the modal
modal.show();
```

This example will show the modal without having to click the button since the logic has been added in TypeScript directly.

### Using Types

Flowbite supports type declarations for the interactive UI components including object interfaces and parameter types. Check out the following examples to learn how you can use types with Flowbite.

Additionally to our code above, we will now import some relevant types from the Flowbite package, namely the `ModalOptions` and `ModalInterface`:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// other code
```

Generally speaking, all of the components have an interface definition that you can use whenever you create a new object to make sure that you're using the correct types of parameters and methods.

When creating a new modal you can set the `ModalInterface` as the main type:

```javascript
const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Flowbite also supports type definitions for the options object so if you want to set the placement of the modal based on types, here's how you would do that:

```javascript
const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Why are these types useful, though? Because if you don't set the correct value for the `placement` key, for example you set `right` instead of `top-right` or `bottom-right` TypeScript will throw an error saying that it is not a correct option.

Here's the full code using the types from Flowbite for the modal defintion:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());

modal.show();
```

Using the types from TypeScript with the Flowbite components will ensure a more scalable and bug-free code down the line.

## TypeScript Starter Project

We have built a [Tailwind CSS TypeScript Starter](https://github.com/themesberg/tailwind-typescript-starter) project on GitHub that uses the configuration above with some pre-built scripts and examples that can help you to get started faster.