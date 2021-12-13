<p>
    <a href="https://flowbite.com" target="_blank">
      <img alt="Flowbite - Tailwind CSS components" width="350" src="https://flowbite.s3.amazonaws.com/flowbite-logo-text.svg">
    </a><br>
    Build websites even faster with components on top of Tailwind CSS
</p>

<p>
    <a href="https://discord.com/invite/4eeurUVvTy"><img src="https://img.shields.io/discord/902911619032576090?color=%237289da&label=Discord" alt="Discord"></a>
    <a href="https://www.npmjs.com/package/@themesberg/flowbite"><img src="https://img.shields.io/npm/dt/@themesberg/flowbite.svg" alt="Total Downloads"></a>
    <a href="https://github.com/themesberg/flowbite/releases"><img src="https://img.shields.io/npm/v/@themesberg/flowbite.svg" alt="Latest Release"></a>
    <a href="https://flowbite.com/docs/getting-started/license/"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
</p>

------

## Documentation

For full documentation, visit [flowbite.com](https://flowbite.com/).

## Getting started

Flowbite can be included as a plugin into an existing Tailwind CSS project and it is supposed to help you build websites faster by having a set of web components to work with built with the utility classes from Tailwind CSS.

👉 [See all components](https://flowbite.com/docs/getting-started/introduction/) <br>

### Require via NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" target="_blank">Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS</a> installed. 

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm i @themesberg/flowbite
```

2. Require Flowbite as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('@themesberg/flowbite/plugin')
    ]

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

### Include via CDN

The quickest way to get started working with FlowBite is to simply include the CSS and JavaScript into your project via CDN.

Require the following minified stylesheet inside the `head` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.min.css" />
```

And include the following javascript file before the end of the `body` element:

```html
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
```

## Community

If you need help or just want to discuss about the library join the community on Github:

[Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)

For casual chatting with others using the library:

[Join the Flowbite Discord Server](https://discord.com/invite/4eeurUVvTy)

## Figma

If you need the Figma files for the components you can check out our website for more information:

[Get access to the Figma design files](https://flowbite.com/figma/)
