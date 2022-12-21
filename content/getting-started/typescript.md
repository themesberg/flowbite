---
layout: home
title: Tailwind CSS TypeScript - Flowbite
description: Learn how to install Tailwind CSS and Flowbite with TypeScript to use optional static typing for JavaScript to make your code more scalable and maintainable
group: getting-started
toc: true
requires_typescript: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: React
nextLink: getting-started/react/
---

TypeScript is a free and open-source programming language that helps improve the scalability, maintainability, and readability of code. It does this by adding optional static typing to JavaScript. 

It is developed and maintained by Microsoft and used by companies such as Slack, Bitpanda, Accenture, Medium, and many more to help them scale code better.

This guide will teach you how to set up Tailwind CSS and the Flowbite library with TypeScript and also show you how you can use the components from Flowbite to power your Tailwind CSS application with integrated types and interfaces.

## Install Tailwind CSS with TypeScript

Follow the next steps to learn how to install TypeScript and Tailwind CSS in a local project.

1. Create a new project and run `npm init` to set up a local `package.json` file.

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

5. Set up the folder structure for your TypeScript files by creating a new `src/` folder and creating an `index.ts` file inside of it with the following code:

```javascript
const text: string = 'Hello TypeScript';
console.log(text);
```

This code already uses a type declaration which will help us verify if the compiler works properly.

### CommonJS

By default the compiled code will be CJS as specified in the `tsconfig.json` file.

6. Compile the code by running the following command in your terminal:

```bash
npx tsc
```

This will generate a new `lib/` folder with CJS (CommonJS) compiled JavaScript code that we will later include in our templates.

### ECMAScript modules

If you want to compile for ESM instead of CJS you can use the following command instead:

```bash
npx tsc -m es6 --outDir lib/esm
```

Now that we have succesfully configured TypeScript and also compiled the source code we have to install and configure Tailwind CSS.

7. Run the following command to install and require Tailwind CSS in your `package.json` file:

```bash
npm install -D tailwindcss
```

8. Create a new `tailwind.config.js` file by running the following command:

```bash
npx tailwindcss init
```

9. Based on your source template files make sure you include all of the relevant paths in the `content` area of your Tailwind CSS configuration file:

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

10. Create a new `input.css` file inside the `src/` folder and import all of the basic Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

11. Compile the code when changes are made by using the following command:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

12. Create a new `index.html` file inside the root folder of your project with the following basic setup where we include all of the compiled code:

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
    <script src="./lib/cjs/index.js"></script>
</body>
</html>
```

Now open the `index.html` file in your browser and you should see the text larger because of the `text-4xl` utility class and also see a "Hello TypeScript" message inside your developer console.

## Installing Flowbite

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
