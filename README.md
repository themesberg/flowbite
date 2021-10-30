# FlowBite - Tailwind CSS Components Library

[FlowBite](https://flowbite.com/docs/getting-started/introduction/) is an open-source set of UI components and elements built with the utility-first Tailwind CSS framework. It includes multiple components such as buttons, alerts, modals, dropdowns, cards, navbars and many more.

<a href="https://flowbite.com/docs/getting-started/introduction/">
  <img src="https://flowbite.s3.amazonaws.com/og-image.png">
</a> 

## Documentation

We recommend you to [read the documentation](https://flowbite.com/docs/getting-started/introduction/) and follow the instructions directly from there as you will be able to find everything from getting started, browsing the components and building for production.

## Quickstart

There are multiple ways that you can include it into your project.

## Require via NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" target="_blank">Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS</a> installed. 

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm i @themesberg/flowbite
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('@themesberg/flowbite/plugin'),
    ],

}
```

3. Include the main JavaScript file to make interactive elements work:

```html
<script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>
```

If you use Webpack or other bundlers you can also import it like this:

```javascript
import '@themesberg/flowbite';
```

## Include via CDN

The quickest way to get started working with FlowBite is to simply include the CSS and JavaScript into your project via CDN.

Require the following stylesheet inside the `head` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.min.css" />
```

And include the following javascript file before the end of the `body` element:

```html
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
```

## Upgrade to pro

There is also a pro version of FlowBite available featuring more components, an application UI layout, marketing UI pages, e-commerce pages and also Figma design files.

Check it out here: [flowbite.com](https://flowbite.com)

## License

The FlowBite components library is open-source under the MIT License. Find out more by [clicking here](https://flowbite.com/docs/getting-started/license/).

## Contributions

Flowbite is an open source library under the MIT license and anyone who would like to contribute to the codebase or design is welcome to do so. 

Please reach out to us via the [official Github repository](https://github.com/themesberg/flowbite) and the main development team will get in touch as soon as possible.
### Authors & contributors

- [Zoltan Szogyenyi](https://twitter.com/zoltanszogyenyi) (web developer)
- [Robert Tanislav](https://twitter.com/RobertTanislav) (web designer)
- [Victor Cordos](https://twitter.com/victorcordos) (web developer)